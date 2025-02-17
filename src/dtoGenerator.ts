import { Project } from "ts-morph"
import { writeFileSync } from "fs"

/**
 * Generate DTO classes (with class-validator decorators) from interfaces in a file.
 * 
 * Rules applied:
 * - Ignore any property whose name starts with an underscore.
 * - If a property’s type is a union that includes undefined (for example, "string | undefined"),
 *   remove the undefined from the type and treat the property as optional.
 * - For a union of literal strings (for enums), use the @IsIn decorator.
 * - Primitive types (string, number, boolean) get the appropriate decorators.
 * - Arrays are decorated with @IsArray() and then with the appropriate “each” validators.
 * - Custom object types are assumed to be nested DTOs and get @ValidateNested() and a @Type(() => …Dto) call.
 * - If an interface has no properties of its own (but extends a base interface), the generated DTO will “extend”
 *   the DTO version of the base instead of implementing it.
 * - If a property is named 'resourceType', it is treated as a fixed string and assigned a readonly value.
 */
function generateDtos(inputPath: string, outputPath: string) {
  // Create a new ts-morph project (adjust tsConfigFilePath as needed)
  const project = new Project({ tsConfigFilePath: "tsconfig.json" })
  const sourceFile = project.addSourceFileAtPath(inputPath)

  const allClasses = []

  let output = ""

  // Write required imports
  output += `import { IsString, IsOptional, IsArray, ValidateNested, IsNotEmpty, IsIn, IsNumber, IsBoolean } from 'class-validator'\n`
  output += `import { Type } from 'class-transformer'\n\n`

  // Process each interface in the source file
  const interfaces = sourceFile.getInterfaces()
  interfaces.forEach(iface => {
    const ifaceName = iface.getName()
    allClasses.push(ifaceName)
    const dtoName = ifaceName + "Dto"

    // Determine which interface(s) this DTO should “extend.”
    const props = iface.getProperties()
    let baseClass = iface.getExtends().map(ext => ext.getText() + "Dto").join(", ")

    if (props.length === 0 && baseClass) {
      output += `export class ${dtoName} extends ${baseClass} {}\n\n`
      return
    }

    output += `export class ${dtoName} implements ${ifaceName} {\n`

    // Process each property signature
    props.forEach(prop => {
      const propName = prop.getName()

      // Skip any property that starts with an underscore.
      if (propName.startsWith("_")) {
        return
      }

      // Remove any namespace prefix like "fhir4."
      let typeText = prop.getType().getText()
      const propType = prop.getType()

      // Special handling: if the property is not an array and its type is a fixed literal,
      // output it as a readonly property with an IsIn decorator.
      if (!propType.isArray()) {
        const fixedLiteralValue = propType.getLiteralValue()
        if (fixedLiteralValue !== undefined) {
          output += `  @IsNotEmpty()\n  @IsIn([${JSON.stringify(fixedLiteralValue)}])\n  ${propName}: ${JSON.stringify(fixedLiteralValue)};\n\n`
          return
        }
      }

      // For union types, remove 'undefined' from the type.
      let unionTypes = propType.isUnion() ? propType.getUnionTypes() : []
      let isOptional = false
      if (unionTypes.length > 0) {
        const filteredTypes = unionTypes.map(t => t.getText().trim()).filter(t => t !== "undefined")
        if (filteredTypes.length < unionTypes.length) {
          isOptional = true
        }
        typeText = filteredTypes.join(" | ")
      } else {
        isOptional = prop.hasQuestionToken()
      }

      let decorators = ""
      if (isOptional) {
        decorators += `  @IsOptional()\n`
      } else {
        decorators += `  @IsNotEmpty()\n`
      }

      const isArray = propType.isArray()

      // For non-array properties, if it's a union of literal types, add @IsIn.
      const literalValues = unionTypes.map(t => t.getLiteralValue()).filter(v => v !== undefined)
      if (!isArray && literalValues.length > 0) {
        const allowedValues = literalValues.map(val => `'${val}'`).join(", ")
        decorators += `  @IsIn([${allowedValues}])\n`
      }

      if (isArray) {
        decorators += `  @IsArray()\n`
        const elementType = propType.getArrayElementType()
        if (elementType) {
          const elementTypeText = elementType.getText()
          // Check if the array element type is a union of literal values
          let elementLiteralValues: any[] = []
          if (elementType.isUnion()) {
            elementLiteralValues = elementType.getUnionTypes()
              .map(t => t.getLiteralValue())
              .filter(v => v !== undefined)
          } else {
            const literal = elementType.getLiteralValue()
            if (literal !== undefined) {
              elementLiteralValues = [literal]
            }
          }
          if (elementLiteralValues.length > 0) {
            const allowedValues = elementLiteralValues.map(val => `'${val}'`).join(", ")
            decorators += `  @IsIn([${allowedValues}], { each: true })\n`
          } else if (elementType.isString() || elementTypeText === "string") {
            decorators += `  @IsString({ each: true })\n`
          } else if (elementType.isNumber() || elementTypeText === "number") {
            decorators += `  @IsNumber({}, { each: true })\n`
          } else if (elementType.isBoolean() || elementTypeText === "boolean") {
            decorators += `  @IsBoolean({ each: true })\n`
          } else {
            decorators += `  @ValidateNested({ each: true })\n`
            decorators += `  @Type(() => ${elementTypeText}Dto)\n`
          }
        }
      } else if (propType.isString() || typeText === "string") {
        decorators += `  @IsString()\n`
      } else if (propType.isNumber() || typeText === "number") {
        decorators += `  @IsNumber()\n`
      } else if (propType.isBoolean() || typeText === "boolean" || typeText === "false | true") {
        decorators += `  @IsBoolean()\n`
        typeText = "boolean"
      } else if (literalValues.length === 0) {
        decorators += `  @ValidateNested()\n`
        decorators += `  @Type(() => ${typeText}Dto)\n`
      }

      output += decorators
      output += `  ${propName}${isOptional ? "?" : ""}: ${typeText}\n\n`
    })

    output += `}\n`
  })

  const allImports = `import { ${allClasses.join(', ')} } from 'fhir/r5'\n`

  writeFileSync(outputPath, allImports.concat(output).replace(/fhir4\./g, ""))
}


// Change these paths as needed.
generateDtos("node_modules/@types/fhir/r5.d.ts", "src/r5.ts")
