# FHIR Class-Validator DTOs

## Description
This project contains Data Transfer Objects (DTOs) implementing all FHIR resource interfaces, following the `@types/fhir` declaration files. The DTOs are compliant with FHIR standards, and make use of validation decorators from the `class-validator` library.

Key features include:
- Support for nested DTOs and complex types.
- Handling of optional properties and union types.
- Integration with FHIR definitions to streamline healthcare data interoperability.

## Usage
Import the corresponding namespace for the standard you are using, copy/paste the classes to a file in your project, or use the files as you see fit.

## Good-to-know
Some classes are not fully annotated.
Whenever the parameter type was FhirResource, the only validations are `@IsOptional()` or `@IsNotEmpty()` according to the standard, and `@IsArray()` for array values.

The dtoGenerator follows the 80/20 rule, and for this project the remaining 20% is already taken care of.
If used outside of the scope of this project, make sure to remove any namespace import, and clean up the generated code accordingly.

## Contributing
- Be nice
- Explain the issue as best as possible

## License
This project is open source at it's heart.
Read the license file for more information