import { Address, Age, Annotation, Attachment, BackboneElement, CodeableConcept, Coding, ContactPoint, Count, Distance, Duration, Element, ElementDefinitionSlicing, ElementDefinitionBase, ElementDefinitionType, ElementDefinitionConstraint, ElementDefinitionBinding, ElementDefinitionMapping, ElementDefinition, Extension, HumanName, Identifier, Meta, Money, Narrative, Period, Quantity, Range, Ratio, Reference, SampledData, Signature, SimpleQuantity, TimingRepeat, Timing, Account, AllergyIntoleranceReaction, AllergyIntolerance, AppointmentParticipant, Appointment, AppointmentResponse, AuditEventEvent, AuditEventParticipantNetwork, AuditEventParticipant, AuditEventSource, AuditEventObjectDetail, AuditEventObject, AuditEvent, Basic, Binary, BodySite, BundleLink, BundleEntrySearch, BundleEntryRequest, BundleEntryResponse, BundleEntry, Bundle, CarePlanRelatedPlan, CarePlanParticipant, CarePlanActivityDetail, CarePlanActivity, CarePlan, ClaimPayee, ClaimDiagnosis, ClaimCoverage, ClaimItemDetailSubDetail, ClaimItemDetail, ClaimItemProsthesis, ClaimItem, ClaimMissingTeeth, Claim, ClaimResponseItemAdjudication, ClaimResponseItemDetailAdjudication, ClaimResponseItemDetailSubDetailAdjudication, ClaimResponseItemDetailSubDetail, ClaimResponseItemDetail, ClaimResponseItem, ClaimResponseAddItemAdjudication, ClaimResponseAddItemDetailAdjudication, ClaimResponseAddItemDetail, ClaimResponseAddItem, ClaimResponseError, ClaimResponseNote, ClaimResponseCoverage, ClaimResponse, ClinicalImpressionInvestigations, ClinicalImpressionFinding, ClinicalImpressionRuledOut, ClinicalImpression, CommunicationPayload, Communication, CommunicationRequestPayload, CommunicationRequest, CompositionAttester, CompositionEvent, CompositionSection, Composition, ConceptMapContact, ConceptMapElementTargetDependsOn, ConceptMapElementTarget, ConceptMapElement, ConceptMap, ConditionStage, ConditionEvidence, Condition, ConformanceContact, ConformanceSoftware, ConformanceImplementation, ConformanceRestSecurityCertificate, ConformanceRestSecurity, ConformanceRestResourceInteraction, ConformanceRestResourceSearchParam, ConformanceRestResource, ConformanceRestInteraction, ConformanceRestOperation, ConformanceRest, ConformanceMessagingEndpoint, ConformanceMessagingEvent, ConformanceMessaging, ConformanceDocument, Conformance, ContractActor, ContractValuedItem, ContractSigner, ContractTermActor, ContractTermValuedItem, ContractTerm, ContractFriendly, ContractLegal, ContractRule, Contract, Coverage, DataElementContact, DataElementMapping, DataElement, DetectedIssueMitigation, DetectedIssue, Device, DeviceComponentProductionSpecification, DeviceComponent, DeviceMetricCalibration, DeviceMetric, DeviceUseRequest, DeviceUseStatement, DiagnosticOrderEvent, DiagnosticOrderItem, DiagnosticOrder, DiagnosticReportImage, DiagnosticReport, DocumentManifestContent, DocumentManifestRelated, DocumentManifest, DocumentReferenceRelatesTo, DocumentReferenceContent, DocumentReferenceContextRelated, DocumentReferenceContext, DocumentReference, DomainResource, EligibilityRequest, EligibilityResponse, EncounterStatusHistory, EncounterParticipant, EncounterHospitalization, EncounterLocation, Encounter, EnrollmentRequest, EnrollmentResponse, EpisodeOfCareStatusHistory, EpisodeOfCareCareTeam, EpisodeOfCare, ExplanationOfBenefit, FamilyMemberHistoryCondition, FamilyMemberHistory, Flag, GoalOutcome, Goal, GroupCharacteristic, GroupMember, Group, HealthcareServiceServiceType, HealthcareServiceAvailableTime, HealthcareServiceNotAvailable, HealthcareService, ImagingObjectSelectionStudySeriesInstanceFrames, ImagingObjectSelectionStudySeriesInstance, ImagingObjectSelectionStudySeries, ImagingObjectSelectionStudy, ImagingObjectSelection, ImagingStudySeriesInstance, ImagingStudySeries, ImagingStudy, ImmunizationExplanation, ImmunizationReaction, ImmunizationVaccinationProtocol, Immunization, ImmunizationRecommendationRecommendationDateCriterion, ImmunizationRecommendationRecommendationProtocol, ImmunizationRecommendationRecommendation, ImmunizationRecommendation, ImplementationGuideContact, ImplementationGuideDependency, ImplementationGuidePackageResource, ImplementationGuidePackage, ImplementationGuideGlobal, ImplementationGuidePage, ImplementationGuide, ListEntry, List, LocationPosition, Location, Media, MedicationProductIngredient, MedicationProductBatch, MedicationProduct, MedicationPackageContent, MedicationPackage, Medication, MedicationAdministrationDosage, MedicationAdministration, MedicationDispenseDosageInstruction, MedicationDispenseSubstitution, MedicationDispense, MedicationOrderDosageInstruction, MedicationOrderDispenseRequest, MedicationOrderSubstitution, MedicationOrder, MedicationStatementDosage, MedicationStatement, MessageHeaderResponse, MessageHeaderSource, MessageHeaderDestination, MessageHeader, NamingSystemContact, NamingSystemUniqueId, NamingSystem, NutritionOrderOralDietNutrient, NutritionOrderOralDietTexture, NutritionOrderOralDiet, NutritionOrderSupplement, NutritionOrderEnteralFormulaAdministration, NutritionOrderEnteralFormula, NutritionOrder, ObservationReferenceRange, ObservationRelated, ObservationComponent, Observation, OperationDefinitionContact, OperationDefinitionParameterBinding, OperationDefinitionParameter, OperationDefinition, OperationOutcomeIssue, OperationOutcome, OrderWhen, Order, OrderResponse, OrganizationContact, Organization, ParametersParameter, Parameters, PatientContact, PatientAnimal, PatientCommunication, PatientLink, Patient, PaymentNotice, PaymentReconciliationDetail, PaymentReconciliationNote, PaymentReconciliation, PersonLink, Person, PractitionerPractitionerRole, PractitionerQualification, Practitioner, ProcedurePerformer, ProcedureFocalDevice, Procedure, ProcedureRequest, ProcessRequestItem, ProcessRequest, ProcessResponseNotes, ProcessResponse, ProvenanceAgentRelatedAgent, ProvenanceAgent, ProvenanceEntity, Provenance, QuestionnaireGroupQuestion, QuestionnaireGroup, Questionnaire, QuestionnaireResponseGroupQuestionAnswer, QuestionnaireResponseGroupQuestion, QuestionnaireResponseGroup, QuestionnaireResponse, ReferralRequest, RelatedPerson, Resource, RiskAssessmentPrediction, RiskAssessment, Schedule, SearchParameterContact, SearchParameter, Slot, SpecimenCollection, SpecimenTreatment, SpecimenContainer, Specimen, StructureDefinitionContact, StructureDefinitionMapping, StructureDefinitionSnapshot, StructureDefinitionDifferential, StructureDefinition, SubscriptionChannel, Subscription, SubstanceInstance, SubstanceIngredient, Substance, SupplyDelivery, SupplyRequestWhen, SupplyRequest, TestScriptContact, TestScriptMetadataLink, TestScriptMetadataCapability, TestScriptMetadata, TestScriptFixture, TestScriptVariable, TestScriptSetupActionOperationRequestHeader, TestScriptSetupActionOperation, TestScriptSetupActionAssert, TestScriptSetupAction, TestScriptSetup, TestScriptTestAction, TestScriptTest, TestScriptTeardownAction, TestScriptTeardown, TestScript, ValueSetContact, ValueSetCodeSystemConceptDesignation, ValueSetCodeSystemConcept, ValueSetCodeSystem, ValueSetComposeIncludeConcept, ValueSetComposeIncludeFilter, ValueSetComposeInclude, ValueSetCompose, ValueSetExpansionParameter, ValueSetExpansionContains, ValueSetExpansion, ValueSet, VisionPrescriptionDispense, VisionPrescription, FhirResource } from "fhir/r2"
import { IsString, IsOptional, IsArray, ValidateNested, IsNotEmpty, IsIn, IsNumber, IsBoolean } from "class-validator"
import { Type } from "class-transformer"

namespace r2 {

  export class QuantityDto implements Quantity {
    @IsOptional()
    @IsString()
    code?: string

    @IsNotEmpty()
    @IsIn(["<", "<=", ">=", ">"])
    comparator: "<" | "<=" | ">=" | ">"

    @IsOptional()
    @IsString()
    system?: string

    @IsOptional()
    @IsString()
    unit?: string

    @IsOptional()
    @IsNumber()
    value?: number

  }
  export class AddressDto implements Address {
    @IsOptional()
    @IsString()
    city?: string

    @IsOptional()
    @IsString()
    country?: string

    @IsOptional()
    @IsString()
    district?: string

    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    line?: string[]

    @IsOptional()
    @ValidateNested()
    @Type(() => PeriodDto)
    period?: Period

    @IsOptional()
    @IsString()
    postalCode?: string

    @IsOptional()
    @IsString()
    state?: string

    @IsOptional()
    @IsString()
    text?: string

    @IsNotEmpty()
    @IsIn(["postal", "physical", "both"])
    type: "postal" | "physical" | "both"

    @IsNotEmpty()
    @IsIn(["home", "work", "temp", "old"])
    use: "home" | "work" | "temp" | "old"

  }
  export class AgeDto extends QuantityDto { }

  export class AnnotationDto implements Annotation {
    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    authorReference?: Reference

    @IsOptional()
    @IsString()
    authorString?: string

    @IsNotEmpty()
    @IsString()
    text: string

    @IsOptional()
    @IsString()
    time?: string

  }
  export class AttachmentDto implements Attachment {
    @IsOptional()
    @IsString()
    contentType?: string

    @IsOptional()
    @IsString()
    creation?: string

    @IsOptional()
    @IsString()
    data?: string

    @IsOptional()
    @IsString()
    hash?: string

    @IsOptional()
    @IsString()
    language?: string

    @IsOptional()
    @IsNumber()
    size?: number

    @IsOptional()
    @IsString()
    title?: string

    @IsOptional()
    @IsString()
    url?: string

  }
  export class BackboneElementDto implements BackboneElement {
    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ExtensionDto)
    modifierExtension?: Extension[]

  }
  export class CodeableConceptDto implements CodeableConcept {
    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodingDto)
    coding?: Coding[]

    @IsOptional()
    @IsString()
    text?: string

  }
  export class CodingDto implements Coding {
    @IsOptional()
    @IsString()
    code?: string

    @IsOptional()
    @IsString()
    display?: string

    @IsOptional()
    @IsString()
    system?: string

    @IsNotEmpty()
    @IsBoolean()
    userSelected: boolean

    @IsOptional()
    @IsString()
    version?: string

  }
  export class ContactPointDto implements ContactPoint {
    @IsOptional()
    @ValidateNested()
    @Type(() => PeriodDto)
    period?: Period

    @IsOptional()
    @IsNumber()
    rank?: number

    @IsNotEmpty()
    @IsIn(["phone", "fax", "email", "pager", "other"])
    system: "phone" | "fax" | "email" | "pager" | "other"

    @IsNotEmpty()
    @IsIn(["home", "work", "temp", "old", "mobile"])
    use: "home" | "work" | "temp" | "old" | "mobile"

    @IsOptional()
    @IsString()
    value?: string

  }
  export class CountDto extends QuantityDto { }

  export class DistanceDto extends QuantityDto { }

  export class DurationDto extends QuantityDto { }

  export class ElementDto implements Element {
    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ExtensionDto)
    extension?: Extension[]

    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    fhirComments?: string[]

    @IsOptional()
    @IsString()
    id?: string

  }
  export class ElementDefinitionSlicingDto implements ElementDefinitionSlicing {
    @IsOptional()
    @IsString()
    description?: string

    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    discriminator?: string[]

    @IsNotEmpty()
    @IsBoolean()
    ordered: boolean

    @IsNotEmpty()
    @IsIn(["closed", "open", "openAtEnd"])
    rules: "closed" | "open" | "openAtEnd"

  }
  export class ElementDefinitionBaseDto implements ElementDefinitionBase {
    @IsNotEmpty()
    @IsString()
    max: string

    @IsNotEmpty()
    @IsNumber()
    min: number

    @IsNotEmpty()
    @IsString()
    path: string

  }
  export class ElementDefinitionTypeDto implements ElementDefinitionType {
    @IsOptional()
    @IsArray()
    @IsIn(["contained", "referenced", "bundled"], { each: true })
    aggregation?: ("contained" | "referenced" | "bundled")[]

    @IsNotEmpty()
    @IsString()
    code: string

    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    profile?: string[]

  }
  export class ElementDefinitionConstraintDto implements ElementDefinitionConstraint {
    @IsNotEmpty()
    @IsString()
    human: string

    @IsNotEmpty()
    @IsString()
    key: string

    @IsOptional()
    @IsString()
    requirements?: string

    @IsNotEmpty()
    @IsIn(["error", "warning"])
    severity: "error" | "warning"

    @IsNotEmpty()
    @IsString()
    xpath: string

  }
  export class ElementDefinitionBindingDto implements ElementDefinitionBinding {
    @IsOptional()
    @IsString()
    description?: string

    @IsNotEmpty()
    @IsIn(["required", "extensible", "preferred", "example"])
    strength: "required" | "extensible" | "preferred" | "example"

    @IsOptional()
    @IsString()
    valueSetUri?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    valueSetReference?: Reference

  }
  export class ElementDefinitionMappingDto implements ElementDefinitionMapping {
    @IsNotEmpty()
    @IsString()
    identity: string

    @IsOptional()
    @IsString()
    language?: string

    @IsNotEmpty()
    @IsString()
    map: string

  }
  export class ElementDefinitionDto implements ElementDefinition {
    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    alias?: string[]

    @IsOptional()
    @ValidateNested()
    @Type(() => ElementDefinitionBaseDto)
    base?: ElementDefinitionBase

    @IsOptional()
    @ValidateNested()
    @Type(() => ElementDefinitionBindingDto)
    binding?: ElementDefinitionBinding

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodingDto)
    code?: Coding[]

    @IsOptional()
    @IsString()
    comments?: string

    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    condition?: string[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ElementDefinitionConstraintDto)
    constraint?: ElementDefinitionConstraint[]

    @IsNotEmpty()
    @IsBoolean()
    defaultValueBoolean: boolean

    @IsOptional()
    @IsNumber()
    defaultValueInteger?: number

    @IsOptional()
    @IsNumber()
    defaultValueDecimal?: number

    @IsOptional()
    @IsString()
    defaultValueBase64Binary?: string

    @IsOptional()
    @IsString()
    defaultValueInstant?: string

    @IsOptional()
    @IsString()
    defaultValueString?: string

    @IsOptional()
    @IsString()
    defaultValueUri?: string

    @IsOptional()
    @IsString()
    defaultValueDate?: string

    @IsOptional()
    @IsString()
    defaultValueDateTime?: string

    @IsOptional()
    @IsString()
    defaultValueTime?: string

    @IsOptional()
    @IsString()
    defaultValueCode?: string

    @IsOptional()
    @IsString()
    defaultValueOid?: string

    @IsOptional()
    @IsString()
    defaultValueId?: string

    @IsOptional()
    @IsNumber()
    defaultValueUnsignedInt?: number

    @IsOptional()
    @IsNumber()
    defaultValuePositiveInt?: number

    @IsOptional()
    @IsString()
    defaultValueMarkdown?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => AnnotationDto)
    defaultValueAnnotation?: Annotation

    @IsOptional()
    @ValidateNested()
    @Type(() => AttachmentDto)
    defaultValueAttachment?: Attachment

    @IsOptional()
    @ValidateNested()
    @Type(() => IdentifierDto)
    defaultValueIdentifier?: Identifier

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    defaultValueCodeableConcept?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => CodingDto)
    defaultValueCoding?: Coding

    @IsOptional()
    @ValidateNested()
    @Type(() => QuantityDto)
    defaultValueQuantity?: Quantity

    @IsOptional()
    @ValidateNested()
    @Type(() => RangeDto)
    defaultValueRange?: Range

    @IsOptional()
    @ValidateNested()
    @Type(() => PeriodDto)
    defaultValuePeriod?: Period

    @IsOptional()
    @ValidateNested()
    @Type(() => RatioDto)
    defaultValueRatio?: Ratio

    @IsOptional()
    @ValidateNested()
    @Type(() => SampledDataDto)
    defaultValueSampledData?: SampledData

    @IsOptional()
    @ValidateNested()
    @Type(() => SignatureDto)
    defaultValueSignature?: Signature

    @IsOptional()
    @ValidateNested()
    @Type(() => HumanNameDto)
    defaultValueHumanName?: HumanName

    @IsOptional()
    @ValidateNested()
    @Type(() => AddressDto)
    defaultValueAddress?: Address

    @IsOptional()
    @ValidateNested()
    @Type(() => ContactPointDto)
    defaultValueContactPoint?: ContactPoint

    @IsOptional()
    @ValidateNested()
    @Type(() => TimingDto)
    defaultValueTiming?: Timing

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    defaultValueReference?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => MetaDto)
    defaultValueMeta?: Meta

    @IsOptional()
    @IsString()
    definition?: string

    @IsNotEmpty()
    @IsBoolean()
    exampleBoolean: boolean

    @IsOptional()
    @IsNumber()
    exampleInteger?: number

    @IsOptional()
    @IsNumber()
    exampleDecimal?: number

    @IsOptional()
    @IsString()
    exampleBase64Binary?: string

    @IsOptional()
    @IsString()
    exampleInstant?: string

    @IsOptional()
    @IsString()
    exampleString?: string

    @IsOptional()
    @IsString()
    exampleUri?: string

    @IsOptional()
    @IsString()
    exampleDate?: string

    @IsOptional()
    @IsString()
    exampleDateTime?: string

    @IsOptional()
    @IsString()
    exampleTime?: string

    @IsOptional()
    @IsString()
    exampleCode?: string

    @IsOptional()
    @IsString()
    exampleOid?: string

    @IsOptional()
    @IsString()
    exampleId?: string

    @IsOptional()
    @IsNumber()
    exampleUnsignedInt?: number

    @IsOptional()
    @IsNumber()
    examplePositiveInt?: number

    @IsOptional()
    @IsString()
    exampleMarkdown?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => AnnotationDto)
    exampleAnnotation?: Annotation

    @IsOptional()
    @ValidateNested()
    @Type(() => AttachmentDto)
    exampleAttachment?: Attachment

    @IsOptional()
    @ValidateNested()
    @Type(() => IdentifierDto)
    exampleIdentifier?: Identifier

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    exampleCodeableConcept?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => CodingDto)
    exampleCoding?: Coding

    @IsOptional()
    @ValidateNested()
    @Type(() => QuantityDto)
    exampleQuantity?: Quantity

    @IsOptional()
    @ValidateNested()
    @Type(() => RangeDto)
    exampleRange?: Range

    @IsOptional()
    @ValidateNested()
    @Type(() => PeriodDto)
    examplePeriod?: Period

    @IsOptional()
    @ValidateNested()
    @Type(() => RatioDto)
    exampleRatio?: Ratio

    @IsOptional()
    @ValidateNested()
    @Type(() => SampledDataDto)
    exampleSampledData?: SampledData

    @IsOptional()
    @ValidateNested()
    @Type(() => SignatureDto)
    exampleSignature?: Signature

    @IsOptional()
    @ValidateNested()
    @Type(() => HumanNameDto)
    exampleHumanName?: HumanName

    @IsOptional()
    @ValidateNested()
    @Type(() => AddressDto)
    exampleAddress?: Address

    @IsOptional()
    @ValidateNested()
    @Type(() => ContactPointDto)
    exampleContactPoint?: ContactPoint

    @IsOptional()
    @ValidateNested()
    @Type(() => TimingDto)
    exampleTiming?: Timing

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    exampleReference?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => MetaDto)
    exampleMeta?: Meta

    @IsNotEmpty()
    @IsBoolean()
    fixedBoolean: boolean

    @IsOptional()
    @IsNumber()
    fixedInteger?: number

    @IsOptional()
    @IsNumber()
    fixedDecimal?: number

    @IsOptional()
    @IsString()
    fixedBase64Binary?: string

    @IsOptional()
    @IsString()
    fixedInstant?: string

    @IsOptional()
    @IsString()
    fixedString?: string

    @IsOptional()
    @IsString()
    fixedUri?: string

    @IsOptional()
    @IsString()
    fixedDate?: string

    @IsOptional()
    @IsString()
    fixedDateTime?: string

    @IsOptional()
    @IsString()
    fixedTime?: string

    @IsOptional()
    @IsString()
    fixedCode?: string

    @IsOptional()
    @IsString()
    fixedOid?: string

    @IsOptional()
    @IsString()
    fixedId?: string

    @IsOptional()
    @IsNumber()
    fixedUnsignedInt?: number

    @IsOptional()
    @IsNumber()
    fixedPositiveInt?: number

    @IsOptional()
    @IsString()
    fixedMarkdown?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => AnnotationDto)
    fixedAnnotation?: Annotation

    @IsOptional()
    @ValidateNested()
    @Type(() => AttachmentDto)
    fixedAttachment?: Attachment

    @IsOptional()
    @ValidateNested()
    @Type(() => IdentifierDto)
    fixedIdentifier?: Identifier

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    fixedCodeableConcept?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => CodingDto)
    fixedCoding?: Coding

    @IsOptional()
    @ValidateNested()
    @Type(() => QuantityDto)
    fixedQuantity?: Quantity

    @IsOptional()
    @ValidateNested()
    @Type(() => RangeDto)
    fixedRange?: Range

    @IsOptional()
    @ValidateNested()
    @Type(() => PeriodDto)
    fixedPeriod?: Period

    @IsOptional()
    @ValidateNested()
    @Type(() => RatioDto)
    fixedRatio?: Ratio

    @IsOptional()
    @ValidateNested()
    @Type(() => SampledDataDto)
    fixedSampledData?: SampledData

    @IsOptional()
    @ValidateNested()
    @Type(() => SignatureDto)
    fixedSignature?: Signature

    @IsOptional()
    @ValidateNested()
    @Type(() => HumanNameDto)
    fixedHumanName?: HumanName

    @IsOptional()
    @ValidateNested()
    @Type(() => AddressDto)
    fixedAddress?: Address

    @IsOptional()
    @ValidateNested()
    @Type(() => ContactPointDto)
    fixedContactPoint?: ContactPoint

    @IsOptional()
    @ValidateNested()
    @Type(() => TimingDto)
    fixedTiming?: Timing

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    fixedReference?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => MetaDto)
    fixedMeta?: Meta

    @IsNotEmpty()
    @IsBoolean()
    isModifier: boolean

    @IsNotEmpty()
    @IsBoolean()
    isSummary: boolean

    @IsOptional()
    @IsString()
    label?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ElementDefinitionMappingDto)
    mapping?: ElementDefinitionMapping[]

    @IsOptional()
    @IsString()
    max?: string

    @IsOptional()
    @IsNumber()
    maxLength?: number

    @IsNotEmpty()
    @IsBoolean()
    maxValueBoolean: boolean

    @IsOptional()
    @IsNumber()
    maxValueInteger?: number

    @IsOptional()
    @IsNumber()
    maxValueDecimal?: number

    @IsOptional()
    @IsString()
    maxValueBase64Binary?: string

    @IsOptional()
    @IsString()
    maxValueInstant?: string

    @IsOptional()
    @IsString()
    maxValueString?: string

    @IsOptional()
    @IsString()
    maxValueUri?: string

    @IsOptional()
    @IsString()
    maxValueDate?: string

    @IsOptional()
    @IsString()
    maxValueDateTime?: string

    @IsOptional()
    @IsString()
    maxValueTime?: string

    @IsOptional()
    @IsString()
    maxValueCode?: string

    @IsOptional()
    @IsString()
    maxValueOid?: string

    @IsOptional()
    @IsString()
    maxValueId?: string

    @IsOptional()
    @IsNumber()
    maxValueUnsignedInt?: number

    @IsOptional()
    @IsNumber()
    maxValuePositiveInt?: number

    @IsOptional()
    @IsString()
    maxValueMarkdown?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => AnnotationDto)
    maxValueAnnotation?: Annotation

    @IsOptional()
    @ValidateNested()
    @Type(() => AttachmentDto)
    maxValueAttachment?: Attachment

    @IsOptional()
    @ValidateNested()
    @Type(() => IdentifierDto)
    maxValueIdentifier?: Identifier

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    maxValueCodeableConcept?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => CodingDto)
    maxValueCoding?: Coding

    @IsOptional()
    @ValidateNested()
    @Type(() => QuantityDto)
    maxValueQuantity?: Quantity

    @IsOptional()
    @ValidateNested()
    @Type(() => RangeDto)
    maxValueRange?: Range

    @IsOptional()
    @ValidateNested()
    @Type(() => PeriodDto)
    maxValuePeriod?: Period

    @IsOptional()
    @ValidateNested()
    @Type(() => RatioDto)
    maxValueRatio?: Ratio

    @IsOptional()
    @ValidateNested()
    @Type(() => SampledDataDto)
    maxValueSampledData?: SampledData

    @IsOptional()
    @ValidateNested()
    @Type(() => SignatureDto)
    maxValueSignature?: Signature

    @IsOptional()
    @ValidateNested()
    @Type(() => HumanNameDto)
    maxValueHumanName?: HumanName

    @IsOptional()
    @ValidateNested()
    @Type(() => AddressDto)
    maxValueAddress?: Address

    @IsOptional()
    @ValidateNested()
    @Type(() => ContactPointDto)
    maxValueContactPoint?: ContactPoint

    @IsOptional()
    @ValidateNested()
    @Type(() => TimingDto)
    maxValueTiming?: Timing

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    maxValueReference?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => MetaDto)
    maxValueMeta?: Meta

    @IsOptional()
    @IsString()
    meaningWhenMissing?: string

    @IsOptional()
    @IsNumber()
    min?: number

    @IsNotEmpty()
    @IsBoolean()
    minValueBoolean: boolean

    @IsOptional()
    @IsNumber()
    minValueInteger?: number

    @IsOptional()
    @IsNumber()
    minValueDecimal?: number

    @IsOptional()
    @IsString()
    minValueBase64Binary?: string

    @IsOptional()
    @IsString()
    minValueInstant?: string

    @IsOptional()
    @IsString()
    minValueString?: string

    @IsOptional()
    @IsString()
    minValueUri?: string

    @IsOptional()
    @IsString()
    minValueDate?: string

    @IsOptional()
    @IsString()
    minValueDateTime?: string

    @IsOptional()
    @IsString()
    minValueTime?: string

    @IsOptional()
    @IsString()
    minValueCode?: string

    @IsOptional()
    @IsString()
    minValueOid?: string

    @IsOptional()
    @IsString()
    minValueId?: string

    @IsOptional()
    @IsNumber()
    minValueUnsignedInt?: number

    @IsOptional()
    @IsNumber()
    minValuePositiveInt?: number

    @IsOptional()
    @IsString()
    minValueMarkdown?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => AnnotationDto)
    minValueAnnotation?: Annotation

    @IsOptional()
    @ValidateNested()
    @Type(() => AttachmentDto)
    minValueAttachment?: Attachment

    @IsOptional()
    @ValidateNested()
    @Type(() => IdentifierDto)
    minValueIdentifier?: Identifier

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    minValueCodeableConcept?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => CodingDto)
    minValueCoding?: Coding

    @IsOptional()
    @ValidateNested()
    @Type(() => QuantityDto)
    minValueQuantity?: Quantity

    @IsOptional()
    @ValidateNested()
    @Type(() => RangeDto)
    minValueRange?: Range

    @IsOptional()
    @ValidateNested()
    @Type(() => PeriodDto)
    minValuePeriod?: Period

    @IsOptional()
    @ValidateNested()
    @Type(() => RatioDto)
    minValueRatio?: Ratio

    @IsOptional()
    @ValidateNested()
    @Type(() => SampledDataDto)
    minValueSampledData?: SampledData

    @IsOptional()
    @ValidateNested()
    @Type(() => SignatureDto)
    minValueSignature?: Signature

    @IsOptional()
    @ValidateNested()
    @Type(() => HumanNameDto)
    minValueHumanName?: HumanName

    @IsOptional()
    @ValidateNested()
    @Type(() => AddressDto)
    minValueAddress?: Address

    @IsOptional()
    @ValidateNested()
    @Type(() => ContactPointDto)
    minValueContactPoint?: ContactPoint

    @IsOptional()
    @ValidateNested()
    @Type(() => TimingDto)
    minValueTiming?: Timing

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    minValueReference?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => MetaDto)
    minValueMeta?: Meta

    @IsNotEmpty()
    @IsBoolean()
    mustSupport: boolean

    @IsOptional()
    @IsString()
    name?: string

    @IsOptional()
    @IsString()
    nameReference?: string

    @IsNotEmpty()
    @IsString()
    path: string

    @IsNotEmpty()
    @IsBoolean()
    patternBoolean: boolean

    @IsOptional()
    @IsNumber()
    patternInteger?: number

    @IsOptional()
    @IsNumber()
    patternDecimal?: number

    @IsOptional()
    @IsString()
    patternBase64Binary?: string

    @IsOptional()
    @IsString()
    patternInstant?: string

    @IsOptional()
    @IsString()
    patternString?: string

    @IsOptional()
    @IsString()
    patternUri?: string

    @IsOptional()
    @IsString()
    patternDate?: string

    @IsOptional()
    @IsString()
    patternDateTime?: string

    @IsOptional()
    @IsString()
    patternTime?: string

    @IsOptional()
    @IsString()
    patternCode?: string

    @IsOptional()
    @IsString()
    patternOid?: string

    @IsOptional()
    @IsString()
    patternId?: string

    @IsOptional()
    @IsNumber()
    patternUnsignedInt?: number

    @IsOptional()
    @IsNumber()
    patternPositiveInt?: number

    @IsOptional()
    @IsString()
    patternMarkdown?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => AnnotationDto)
    patternAnnotation?: Annotation

    @IsOptional()
    @ValidateNested()
    @Type(() => AttachmentDto)
    patternAttachment?: Attachment

    @IsOptional()
    @ValidateNested()
    @Type(() => IdentifierDto)
    patternIdentifier?: Identifier

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    patternCodeableConcept?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => CodingDto)
    patternCoding?: Coding

    @IsOptional()
    @ValidateNested()
    @Type(() => QuantityDto)
    patternQuantity?: Quantity

    @IsOptional()
    @ValidateNested()
    @Type(() => RangeDto)
    patternRange?: Range

    @IsOptional()
    @ValidateNested()
    @Type(() => PeriodDto)
    patternPeriod?: Period

    @IsOptional()
    @ValidateNested()
    @Type(() => RatioDto)
    patternRatio?: Ratio

    @IsOptional()
    @ValidateNested()
    @Type(() => SampledDataDto)
    patternSampledData?: SampledData

    @IsOptional()
    @ValidateNested()
    @Type(() => SignatureDto)
    patternSignature?: Signature

    @IsOptional()
    @ValidateNested()
    @Type(() => HumanNameDto)
    patternHumanName?: HumanName

    @IsOptional()
    @ValidateNested()
    @Type(() => AddressDto)
    patternAddress?: Address

    @IsOptional()
    @ValidateNested()
    @Type(() => ContactPointDto)
    patternContactPoint?: ContactPoint

    @IsOptional()
    @ValidateNested()
    @Type(() => TimingDto)
    patternTiming?: Timing

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    patternReference?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => MetaDto)
    patternMeta?: Meta

    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    representation?: string[]

    @IsOptional()
    @IsString()
    requirements?: string

    @IsOptional()
    @IsString()
    short?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => ElementDefinitionSlicingDto)
    slicing?: ElementDefinitionSlicing

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ElementDefinitionTypeDto)
    type?: ElementDefinitionType[]

  }
  export class ExtensionDto implements Extension {
    @IsNotEmpty()
    @IsString()
    url: string

    @IsNotEmpty()
    @IsBoolean()
    valueBoolean: boolean

    @IsOptional()
    @IsNumber()
    valueInteger?: number

    @IsOptional()
    @IsNumber()
    valueDecimal?: number

    @IsOptional()
    @IsString()
    valueBase64Binary?: string

    @IsOptional()
    @IsString()
    valueInstant?: string

    @IsOptional()
    @IsString()
    valueString?: string

    @IsOptional()
    @IsString()
    valueUri?: string

    @IsOptional()
    @IsString()
    valueDate?: string

    @IsOptional()
    @IsString()
    valueDateTime?: string

    @IsOptional()
    @IsString()
    valueTime?: string

    @IsOptional()
    @IsString()
    valueCode?: string

    @IsOptional()
    @IsString()
    valueOid?: string

    @IsOptional()
    @IsString()
    valueId?: string

    @IsOptional()
    @IsNumber()
    valueUnsignedInt?: number

    @IsOptional()
    @IsNumber()
    valuePositiveInt?: number

    @IsOptional()
    @IsString()
    valueMarkdown?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => AnnotationDto)
    valueAnnotation?: Annotation

    @IsOptional()
    @ValidateNested()
    @Type(() => AttachmentDto)
    valueAttachment?: Attachment

    @IsOptional()
    @ValidateNested()
    @Type(() => IdentifierDto)
    valueIdentifier?: Identifier

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    valueCodeableConcept?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => CodingDto)
    valueCoding?: Coding

    @IsOptional()
    @ValidateNested()
    @Type(() => QuantityDto)
    valueQuantity?: Quantity

    @IsOptional()
    @ValidateNested()
    @Type(() => RangeDto)
    valueRange?: Range

    @IsOptional()
    @ValidateNested()
    @Type(() => PeriodDto)
    valuePeriod?: Period

    @IsOptional()
    @ValidateNested()
    @Type(() => RatioDto)
    valueRatio?: Ratio

    @IsOptional()
    @ValidateNested()
    @Type(() => SampledDataDto)
    valueSampledData?: SampledData

    @IsOptional()
    @ValidateNested()
    @Type(() => SignatureDto)
    valueSignature?: Signature

    @IsOptional()
    @ValidateNested()
    @Type(() => HumanNameDto)
    valueHumanName?: HumanName

    @IsOptional()
    @ValidateNested()
    @Type(() => AddressDto)
    valueAddress?: Address

    @IsOptional()
    @ValidateNested()
    @Type(() => ContactPointDto)
    valueContactPoint?: ContactPoint

    @IsOptional()
    @ValidateNested()
    @Type(() => TimingDto)
    valueTiming?: Timing

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    valueReference?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => MetaDto)
    valueMeta?: Meta

  }
  export class HumanNameDto implements HumanName {
    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    family?: string[]

    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    given?: string[]

    @IsOptional()
    @ValidateNested()
    @Type(() => PeriodDto)
    period?: Period

    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    prefix?: string[]

    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    suffix?: string[]

    @IsOptional()
    @IsString()
    text?: string

    @IsNotEmpty()
    @IsIn(["temp", "old", "usual", "official", "nickname", "anonymous", "maiden"])
    use: "temp" | "old" | "usual" | "official" | "nickname" | "anonymous" | "maiden"

  }
  export class IdentifierDto implements Identifier {
    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    assigner?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => PeriodDto)
    period?: Period

    @IsOptional()
    @IsString()
    system?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    type?: CodeableConcept

    @IsNotEmpty()
    @IsIn(["temp", "usual", "official", "secondary"])
    use: "temp" | "usual" | "official" | "secondary"

    @IsOptional()
    @IsString()
    value?: string

  }
  export class MetaDto implements Meta {
    @IsOptional()
    @IsString()
    lastUpdated?: string

    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    profile?: string[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodingDto)
    security?: Coding[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodingDto)
    tag?: Coding[]

    @IsOptional()
    @IsString()
    versionId?: string

  }
  export class MoneyDto extends QuantityDto { }

  export class NarrativeDto implements Narrative {
    @IsNotEmpty()
    @IsString()
    div: string

    @IsNotEmpty()
    @IsIn(["generated", "extensions", "additional", "empty"])
    status: "generated" | "extensions" | "additional" | "empty"

  }
  export class PeriodDto implements Period {
    @IsOptional()
    @IsString()
    end?: string

    @IsOptional()
    @IsString()
    start?: string

  }
  export class RangeDto implements Range {
    @IsOptional()
    @ValidateNested()
    @Type(() => QuantityDto)
    high?: Quantity

    @IsOptional()
    @ValidateNested()
    @Type(() => QuantityDto)
    low?: Quantity

  }
  export class RatioDto implements Ratio {
    @IsOptional()
    @ValidateNested()
    @Type(() => QuantityDto)
    denominator?: Quantity

    @IsOptional()
    @ValidateNested()
    @Type(() => QuantityDto)
    numerator?: Quantity

  }
  export class ReferenceDto implements Reference {
    @IsOptional()
    @IsString()
    display?: string

    @IsOptional()
    @IsString()
    reference?: string

  }
  export class SampledDataDto implements SampledData {
    @IsNotEmpty()
    @IsString()
    data: string

    @IsNotEmpty()
    @IsNumber()
    dimensions: number

    @IsOptional()
    @IsNumber()
    factor?: number

    @IsOptional()
    @IsNumber()
    lowerLimit?: number

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => QuantityDto)
    origin: Quantity

    @IsNotEmpty()
    @IsNumber()
    period: number

    @IsOptional()
    @IsNumber()
    upperLimit?: number

  }
  export class SignatureDto implements Signature {
    @IsNotEmpty()
    @IsString()
    blob: string

    @IsNotEmpty()
    @IsString()
    contentType: string

    @IsNotEmpty()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodingDto)
    type: Coding[]

    @IsNotEmpty()
    @IsString()
    when: string

    @IsOptional()
    @IsString()
    whoUri?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    whoReference?: Reference

  }
  export class SimpleQuantityDto extends QuantityDto { }

  export class TimingRepeatDto implements TimingRepeat {
    @IsOptional()
    @ValidateNested()
    @Type(() => QuantityDto)
    boundsQuantity?: Quantity

    @IsOptional()
    @ValidateNested()
    @Type(() => RangeDto)
    boundsRange?: Range

    @IsOptional()
    @ValidateNested()
    @Type(() => PeriodDto)
    boundsPeriod?: Period

    @IsOptional()
    @IsNumber()
    count?: number

    @IsOptional()
    @IsNumber()
    duration?: number

    @IsOptional()
    @IsNumber()
    durationMax?: number

    @IsNotEmpty()
    @IsIn(["s", "min", "h", "d", "wk", "mo", "a"])
    durationUnits: "s" | "min" | "h" | "d" | "wk" | "mo" | "a"

    @IsOptional()
    @IsNumber()
    frequency?: number

    @IsOptional()
    @IsNumber()
    frequencyMax?: number

    @IsOptional()
    @IsNumber()
    period?: number

    @IsOptional()
    @IsNumber()
    periodMax?: number

    @IsNotEmpty()
    @IsIn(["s", "min", "h", "d", "wk", "mo", "a"])
    periodUnits: "s" | "min" | "h" | "d" | "wk" | "mo" | "a"

    @IsOptional()
    @IsString()
    when?: string

  }
  export class TimingDto implements Timing {
    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    code?: CodeableConcept

    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    event?: string[]

    @IsOptional()
    @ValidateNested()
    @Type(() => TimingRepeatDto)
    repeat?: TimingRepeat

  }
  export class AccountDto implements Account {
    @IsNotEmpty()
    @IsIn(["Account"])
    resourceType: "Account"

    @IsOptional()
    @ValidateNested()
    @Type(() => PeriodDto)
    activePeriod?: Period

    @IsOptional()
    @ValidateNested()
    @Type(() => QuantityDto)
    balance?: Quantity

    @IsOptional()
    @ValidateNested()
    @Type(() => PeriodDto)
    coveragePeriod?: Period

    @IsOptional()
    @ValidateNested()
    @Type(() => CodingDto)
    currency?: Coding

    @IsOptional()
    @IsString()
    description?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => IdentifierDto)
    identifier?: Identifier[]

    @IsOptional()
    @IsString()
    name?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    owner?: Reference

    @IsOptional()
    @IsString()
    status?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    subject?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    type?: CodeableConcept

  }
  export class AllergyIntoleranceReactionDto implements AllergyIntoleranceReaction {
    @IsNotEmpty()
    @IsIn(["unlikely", "likely", "confirmed"])
    certainty: "unlikely" | "likely" | "confirmed"

    @IsOptional()
    @IsString()
    description?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    exposureRoute?: CodeableConcept

    @IsNotEmpty()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    manifestation: CodeableConcept[]

    @IsOptional()
    @ValidateNested()
    @Type(() => AnnotationDto)
    note?: Annotation

    @IsOptional()
    @IsString()
    onset?: string

    @IsNotEmpty()
    @IsIn(["mild", "moderate", "severe"])
    severity: "mild" | "moderate" | "severe"

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    substance?: CodeableConcept

  }
  export class AllergyIntoleranceDto implements AllergyIntolerance {
    @IsNotEmpty()
    @IsIn(["AllergyIntolerance"])
    resourceType: "AllergyIntolerance"

    @IsNotEmpty()
    @IsIn(["other", "food", "medication", "environment"])
    category: "other" | "food" | "medication" | "environment"

    @IsNotEmpty()
    @IsIn(["CRITL", "CRITH", "CRITU"])
    criticality: "CRITL" | "CRITH" | "CRITU"

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => IdentifierDto)
    identifier?: Identifier[]

    @IsOptional()
    @IsString()
    lastOccurence?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => AnnotationDto)
    note?: Annotation

    @IsOptional()
    @IsString()
    onset?: string

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => ReferenceDto)
    patient: Reference

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => AllergyIntoleranceReactionDto)
    reaction?: AllergyIntoleranceReaction[]

    @IsOptional()
    @IsString()
    recordedDate?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    recorder?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    reporter?: Reference

    @IsNotEmpty()
    @IsIn(["confirmed", "active", "unconfirmed", "inactive", "resolved", "refuted", "entered-in-error"])
    status: "confirmed" | "active" | "unconfirmed" | "inactive" | "resolved" | "refuted" | "entered-in-error"

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    substance: CodeableConcept

    @IsNotEmpty()
    @IsIn(["allergy", "intolerance"])
    type: "allergy" | "intolerance"

  }
  export class AppointmentParticipantDto implements AppointmentParticipant {
    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    actor?: Reference

    @IsNotEmpty()
    @IsIn(["required", "optional", "information-only"])
    required: "required" | "optional" | "information-only"

    @IsNotEmpty()
    @IsIn(["accepted", "declined", "tentative", "needs-action"])
    status: "accepted" | "declined" | "tentative" | "needs-action"

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    type?: CodeableConcept[]

  }
  export class AppointmentDto implements Appointment {
    @IsNotEmpty()
    @IsIn(["Appointment"])
    resourceType: "Appointment"

    @IsOptional()
    @IsString()
    comment?: string

    @IsOptional()
    @IsString()
    description?: string

    @IsOptional()
    @IsString()
    end?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => IdentifierDto)
    identifier?: Identifier[]

    @IsOptional()
    @IsNumber()
    minutesDuration?: number

    @IsNotEmpty()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => AppointmentParticipantDto)
    participant: AppointmentParticipant[]

    @IsOptional()
    @IsNumber()
    priority?: number

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    reason?: CodeableConcept

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    slot?: Reference[]

    @IsOptional()
    @IsString()
    start?: string

    @IsNotEmpty()
    @IsIn(["proposed", "pending", "booked", "arrived", "fulfilled", "cancelled", "noshow"])
    status: "proposed" | "pending" | "booked" | "arrived" | "fulfilled" | "cancelled" | "noshow"

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    type?: CodeableConcept

  }
  export class AppointmentResponseDto implements AppointmentResponse {
    @IsNotEmpty()
    @IsIn(["AppointmentResponse"])
    resourceType: "AppointmentResponse"

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    actor?: Reference

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => ReferenceDto)
    appointment: Reference

    @IsOptional()
    @IsString()
    comment?: string

    @IsOptional()
    @IsString()
    end?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => IdentifierDto)
    identifier?: Identifier[]

    @IsNotEmpty()
    @IsIn(["accepted", "declined", "tentative", "needs-action", "in-process", "completed"])
    participantStatus: "accepted" | "declined" | "tentative" | "needs-action" | "in-process" | "completed"

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    participantType?: CodeableConcept[]

    @IsOptional()
    @IsString()
    start?: string

  }
  export class AuditEventEventDto implements AuditEventEvent {
    @IsOptional()
    @IsString()
    action?: string

    @IsNotEmpty()
    @IsString()
    dateTime: string

    @IsOptional()
    @IsString()
    outcome?: string

    @IsOptional()
    @IsString()
    outcomeDesc?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodingDto)
    purposeOfEvent?: Coding[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodingDto)
    subtype?: Coding[]

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => CodingDto)
    type: Coding

  }
  export class AuditEventParticipantNetworkDto implements AuditEventParticipantNetwork {
    @IsOptional()
    @IsString()
    address?: string

    @IsOptional()
    @IsString()
    type?: string

  }
  export class AuditEventParticipantDto implements AuditEventParticipant {
    @IsOptional()
    @IsString()
    altId?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    location?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => CodingDto)
    media?: Coding

    @IsOptional()
    @IsString()
    name?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => AuditEventParticipantNetworkDto)
    network?: AuditEventParticipantNetwork

    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    policy?: string[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodingDto)
    purposeOfUse?: Coding[]

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    reference?: Reference

    @IsNotEmpty()
    @IsBoolean()
    requestor: boolean

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    role?: CodeableConcept[]

    @IsOptional()
    @ValidateNested()
    @Type(() => IdentifierDto)
    userId?: Identifier

  }
  export class AuditEventSourceDto implements AuditEventSource {
    @IsNotEmpty()
    @ValidateNested()
    @Type(() => IdentifierDto)
    identifier: Identifier

    @IsOptional()
    @IsString()
    site?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodingDto)
    type?: Coding[]

  }
  export class AuditEventObjectDetailDto implements AuditEventObjectDetail {
    @IsNotEmpty()
    @IsString()
    type: string

    @IsNotEmpty()
    @IsString()
    value: string

  }
  export class AuditEventObjectDto implements AuditEventObject {
    @IsOptional()
    @IsString()
    description?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => AuditEventObjectDetailDto)
    detail?: AuditEventObjectDetail[]

    @IsOptional()
    @ValidateNested()
    @Type(() => IdentifierDto)
    identifier?: Identifier

    @IsOptional()
    @ValidateNested()
    @Type(() => CodingDto)
    lifecycle?: Coding

    @IsOptional()
    @IsString()
    name?: string

    @IsOptional()
    @IsString()
    query?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    reference?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => CodingDto)
    role?: Coding

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodingDto)
    securityLabel?: Coding[]

    @IsOptional()
    @ValidateNested()
    @Type(() => CodingDto)
    type?: Coding

  }
  export class AuditEventDto implements AuditEvent {
    @IsNotEmpty()
    @IsIn(["AuditEvent"])
    resourceType: "AuditEvent"

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => AuditEventEventDto)
    event: AuditEventEvent

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => AuditEventObjectDto)
    object?: AuditEventObject[]

    @IsNotEmpty()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => AuditEventParticipantDto)
    participant: AuditEventParticipant[]

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => AuditEventSourceDto)
    source: AuditEventSource

  }
  export class BasicDto implements Basic {
    @IsNotEmpty()
    @IsIn(["Basic"])
    resourceType: "Basic"

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    author?: Reference

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    code: CodeableConcept

    @IsOptional()
    @IsString()
    created?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => IdentifierDto)
    identifier?: Identifier[]

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    subject?: Reference

  }
  export class BinaryDto implements Binary {
    @IsNotEmpty()
    @IsIn(["Binary"])
    resourceType: "Binary"

    @IsNotEmpty()
    @IsString()
    content: string

    @IsNotEmpty()
    @IsString()
    contentType: string

  }
  export class BodySiteDto implements BodySite {
    @IsNotEmpty()
    @IsIn(["BodySite"])
    resourceType: "BodySite"

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    code?: CodeableConcept

    @IsOptional()
    @IsString()
    description?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => IdentifierDto)
    identifier?: Identifier[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => AttachmentDto)
    image?: Attachment[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    modifier?: CodeableConcept[]

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => ReferenceDto)
    patient: Reference

  }
  export class BundleLinkDto implements BundleLink {
    @IsNotEmpty()
    @IsString()
    relation: string

    @IsNotEmpty()
    @IsString()
    url: string

  }
  export class BundleEntrySearchDto implements BundleEntrySearch {
    @IsNotEmpty()
    @IsIn(["match", "include", "outcome"])
    mode: "match" | "include" | "outcome"

    @IsOptional()
    @IsNumber()
    score?: number

  }
  export class BundleEntryRequestDto implements BundleEntryRequest {
    @IsOptional()
    @IsString()
    ifMatch?: string

    @IsOptional()
    @IsString()
    ifModifiedSince?: string

    @IsOptional()
    @IsString()
    ifNoneExist?: string

    @IsOptional()
    @IsString()
    ifNoneMatch?: string

    @IsNotEmpty()
    @IsIn(["GET", "POST", "PUT", "DELETE"])
    method: "GET" | "POST" | "PUT" | "DELETE"

    @IsNotEmpty()
    @IsString()
    url: string

  }
  export class BundleEntryResponseDto implements BundleEntryResponse {
    @IsOptional()
    @IsString()
    etag?: string

    @IsOptional()
    @IsString()
    lastModified?: string

    @IsOptional()
    @IsString()
    location?: string

    @IsNotEmpty()
    @IsString()
    status: string

  }
  export class BundleEntryDto<BundleContentType = FhirResource> implements BundleEntry<BundleContentType> {
    @IsOptional()
    @IsString()
    fullUrl?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => BundleLinkDto)
    link?: BundleLink[]

    @IsOptional()
    @ValidateNested()
    @Type(() => BundleEntryRequestDto)
    request?: BundleEntryRequest

    @IsOptional()
    resource?: BundleContentType

    @IsOptional()
    @ValidateNested()
    @Type(() => BundleEntryResponseDto)
    response?: BundleEntryResponse

    @IsOptional()
    @ValidateNested()
    @Type(() => BundleEntrySearchDto)
    search?: BundleEntrySearch

  }
  export class BundleDto<BundleContentType = FhirResource> implements Bundle<BundleContentType> {
    @IsNotEmpty()
    @IsIn(["Bundle"])
    resourceType: "Bundle"

    @IsOptional()
    @IsArray()
    entry?: BundleEntry<BundleContentType>[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => BundleLinkDto)
    link?: BundleLink[]

    @IsOptional()
    @ValidateNested()
    @Type(() => SignatureDto)
    signature?: Signature

    @IsOptional()
    @IsNumber()
    total?: number

    @IsNotEmpty()
    @IsIn(["document", "message", "transaction", "transaction-response", "batch", "batch-response", "history", "searchset", "collection"])
    type: "document" | "message" | "transaction" | "transaction-response" | "batch" | "batch-response" | "history" | "searchset" | "collection"

  }
  export class CarePlanRelatedPlanDto implements CarePlanRelatedPlan {
    @IsNotEmpty()
    @IsIn(["includes", "replaces", "fulfills"])
    code: "includes" | "replaces" | "fulfills"

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => ReferenceDto)
    plan: Reference

  }
  export class CarePlanParticipantDto implements CarePlanParticipant {
    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    member?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    role?: CodeableConcept

  }
  export class CarePlanActivityDetailDto implements CarePlanActivityDetail {
    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    category?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    code?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => QuantityDto)
    dailyAmount?: Quantity

    @IsOptional()
    @IsString()
    description?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    goal?: Reference[]

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    location?: Reference

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    performer?: Reference[]

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    productCodeableConcept?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    productReference?: Reference

    @IsNotEmpty()
    @IsBoolean()
    prohibited: boolean

    @IsOptional()
    @ValidateNested()
    @Type(() => QuantityDto)
    quantity?: Quantity

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    reasonCode?: CodeableConcept[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    reasonReference?: Reference[]

    @IsOptional()
    @ValidateNested()
    @Type(() => TimingDto)
    scheduledTiming?: Timing

    @IsOptional()
    @ValidateNested()
    @Type(() => PeriodDto)
    scheduledPeriod?: Period

    @IsOptional()
    @IsString()
    scheduledString?: string

    @IsNotEmpty()
    @IsIn(["cancelled", "completed", "not-started", "scheduled", "in-progress", "on-hold"])
    status: "cancelled" | "completed" | "not-started" | "scheduled" | "in-progress" | "on-hold"

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    statusReason?: CodeableConcept

  }
  export class CarePlanActivityDto implements CarePlanActivity {
    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    actionResulting?: Reference[]

    @IsOptional()
    @ValidateNested()
    @Type(() => CarePlanActivityDetailDto)
    detail?: CarePlanActivityDetail

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => AnnotationDto)
    progress?: Annotation[]

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    reference?: Reference

  }
  export class CarePlanDto implements CarePlan {
    @IsNotEmpty()
    @IsIn(["CarePlan"])
    resourceType: "CarePlan"

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CarePlanActivityDto)
    activity?: CarePlanActivity[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    addresses?: Reference[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    author?: Reference[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    category?: CodeableConcept[]

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    context?: Reference

    @IsOptional()
    @IsString()
    description?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    goal?: Reference[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => IdentifierDto)
    identifier?: Identifier[]

    @IsOptional()
    @IsString()
    modified?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => AnnotationDto)
    note?: Annotation

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CarePlanParticipantDto)
    participant?: CarePlanParticipant[]

    @IsOptional()
    @ValidateNested()
    @Type(() => PeriodDto)
    period?: Period

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CarePlanRelatedPlanDto)
    relatedPlan?: CarePlanRelatedPlan[]

    @IsNotEmpty()
    @IsIn(["active", "proposed", "cancelled", "completed", "draft"])
    status: "active" | "proposed" | "cancelled" | "completed" | "draft"

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    subject?: Reference

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    support?: Reference[]

  }
  export class ClaimPayeeDto implements ClaimPayee {
    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    organization?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    person?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    provider?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => CodingDto)
    type?: Coding

  }
  export class ClaimDiagnosisDto implements ClaimDiagnosis {
    @IsNotEmpty()
    @ValidateNested()
    @Type(() => CodingDto)
    diagnosis: Coding

    @IsNotEmpty()
    @IsNumber()
    sequence: number

  }
  export class ClaimCoverageDto implements ClaimCoverage {
    @IsOptional()
    @IsString()
    businessArrangement?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    claimResponse?: Reference

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => ReferenceDto)
    coverage: Reference

    @IsNotEmpty()
    @IsBoolean()
    focal: boolean

    @IsOptional()
    @ValidateNested()
    @Type(() => CodingDto)
    originalRuleset?: Coding

    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    preAuthRef?: string[]

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => CodingDto)
    relationship: Coding

    @IsNotEmpty()
    @IsNumber()
    sequence: number

  }
  export class ClaimItemDetailSubDetailDto implements ClaimItemDetailSubDetail {
    @IsOptional()
    @IsNumber()
    factor?: number

    @IsOptional()
    @ValidateNested()
    @Type(() => QuantityDto)
    net?: Quantity

    @IsOptional()
    @IsNumber()
    points?: number

    @IsOptional()
    @ValidateNested()
    @Type(() => QuantityDto)
    quantity?: Quantity

    @IsNotEmpty()
    @IsNumber()
    sequence: number

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => CodingDto)
    service: Coding

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => CodingDto)
    type: Coding

    @IsOptional()
    @ValidateNested()
    @Type(() => CodingDto)
    udi?: Coding

    @IsOptional()
    @ValidateNested()
    @Type(() => QuantityDto)
    unitPrice?: Quantity

  }
  export class ClaimItemDetailDto implements ClaimItemDetail {
    @IsOptional()
    @IsNumber()
    factor?: number

    @IsOptional()
    @ValidateNested()
    @Type(() => QuantityDto)
    net?: Quantity

    @IsOptional()
    @IsNumber()
    points?: number

    @IsOptional()
    @ValidateNested()
    @Type(() => QuantityDto)
    quantity?: Quantity

    @IsNotEmpty()
    @IsNumber()
    sequence: number

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => CodingDto)
    service: Coding

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ClaimItemDetailSubDetailDto)
    subDetail?: ClaimItemDetailSubDetail[]

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => CodingDto)
    type: Coding

    @IsOptional()
    @ValidateNested()
    @Type(() => CodingDto)
    udi?: Coding

    @IsOptional()
    @ValidateNested()
    @Type(() => QuantityDto)
    unitPrice?: Quantity

  }
  export class ClaimItemProsthesisDto implements ClaimItemProsthesis {
    @IsNotEmpty()
    @IsBoolean()
    initial: boolean

    @IsOptional()
    @IsString()
    priorDate?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => CodingDto)
    priorMaterial?: Coding

  }
  export class ClaimItemDto implements ClaimItem {
    @IsOptional()
    @ValidateNested()
    @Type(() => CodingDto)
    bodySite?: Coding

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ClaimItemDetailDto)
    detail?: ClaimItemDetail[]

    @IsOptional()
    @IsArray()
    @IsNumber({}, { each: true })
    diagnosisLinkId?: number[]

    @IsOptional()
    @IsNumber()
    factor?: number

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodingDto)
    modifier?: Coding[]

    @IsOptional()
    @ValidateNested()
    @Type(() => QuantityDto)
    net?: Quantity

    @IsOptional()
    @IsNumber()
    points?: number

    @IsOptional()
    @ValidateNested()
    @Type(() => ClaimItemProsthesisDto)
    prosthesis?: ClaimItemProsthesis

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    provider?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => QuantityDto)
    quantity?: Quantity

    @IsNotEmpty()
    @IsNumber()
    sequence: number

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => CodingDto)
    service: Coding

    @IsOptional()
    @IsString()
    serviceDate?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodingDto)
    subSite?: Coding[]

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => CodingDto)
    type: Coding

    @IsOptional()
    @ValidateNested()
    @Type(() => CodingDto)
    udi?: Coding

    @IsOptional()
    @ValidateNested()
    @Type(() => QuantityDto)
    unitPrice?: Quantity

  }
  export class ClaimMissingTeethDto implements ClaimMissingTeeth {
    @IsOptional()
    @IsString()
    extractionDate?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => CodingDto)
    reason?: Coding

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => CodingDto)
    tooth: Coding

  }
  export class ClaimDto implements Claim {
    @IsNotEmpty()
    @IsIn(["Claim"])
    resourceType: "Claim"

    @IsOptional()
    @IsString()
    accident?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => CodingDto)
    accidentType?: Coding

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodingDto)
    additionalMaterials?: Coding[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodingDto)
    condition?: Coding[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ClaimCoverageDto)
    coverage?: ClaimCoverage[]

    @IsOptional()
    @IsString()
    created?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ClaimDiagnosisDto)
    diagnosis?: ClaimDiagnosis[]

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    enterer?: Reference

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodingDto)
    exception?: Coding[]

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    facility?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => CodingDto)
    fundsReserve?: Coding

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => IdentifierDto)
    identifier?: Identifier[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodingDto)
    interventionException?: Coding[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ClaimItemDto)
    item?: ClaimItem[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ClaimMissingTeethDto)
    missingTeeth?: ClaimMissingTeeth[]

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    organization?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    originalPrescription?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => CodingDto)
    originalRuleset?: Coding

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => ReferenceDto)
    patient: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => ClaimPayeeDto)
    payee?: ClaimPayee

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    prescription?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => CodingDto)
    priority?: Coding

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    provider?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    referral?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => CodingDto)
    ruleset?: Coding

    @IsOptional()
    @IsString()
    school?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    target?: Reference

    @IsNotEmpty()
    @IsIn(["institutional", "oral", "pharmacy", "professional", "vision"])
    type: "institutional" | "oral" | "pharmacy" | "professional" | "vision"

    @IsNotEmpty()
    @IsIn(["other", "proposed", "complete", "exploratory"])
    use: "other" | "proposed" | "complete" | "exploratory"

  }
  export class ClaimResponseItemAdjudicationDto implements ClaimResponseItemAdjudication {
    @IsOptional()
    @ValidateNested()
    @Type(() => QuantityDto)
    amount?: Quantity

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => CodingDto)
    code: Coding

    @IsOptional()
    @IsNumber()
    value?: number

  }
  export class ClaimResponseItemDetailAdjudicationDto implements ClaimResponseItemDetailAdjudication {
    @IsOptional()
    @ValidateNested()
    @Type(() => QuantityDto)
    amount?: Quantity

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => CodingDto)
    code: Coding

    @IsOptional()
    @IsNumber()
    value?: number

  }
  export class ClaimResponseItemDetailSubDetailAdjudicationDto implements ClaimResponseItemDetailSubDetailAdjudication {
    @IsOptional()
    @ValidateNested()
    @Type(() => QuantityDto)
    amount?: Quantity

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => CodingDto)
    code: Coding

    @IsOptional()
    @IsNumber()
    value?: number

  }
  export class ClaimResponseItemDetailSubDetailDto implements ClaimResponseItemDetailSubDetail {
    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ClaimResponseItemDetailSubDetailAdjudicationDto)
    adjudication?: ClaimResponseItemDetailSubDetailAdjudication[]

    @IsNotEmpty()
    @IsNumber()
    sequenceLinkId: number

  }
  export class ClaimResponseItemDetailDto implements ClaimResponseItemDetail {
    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ClaimResponseItemDetailAdjudicationDto)
    adjudication?: ClaimResponseItemDetailAdjudication[]

    @IsNotEmpty()
    @IsNumber()
    sequenceLinkId: number

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ClaimResponseItemDetailSubDetailDto)
    subDetail?: ClaimResponseItemDetailSubDetail[]

  }
  export class ClaimResponseItemDto implements ClaimResponseItem {
    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ClaimResponseItemAdjudicationDto)
    adjudication?: ClaimResponseItemAdjudication[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ClaimResponseItemDetailDto)
    detail?: ClaimResponseItemDetail[]

    @IsOptional()
    @IsArray()
    @IsNumber({}, { each: true })
    noteNumber?: number[]

    @IsNotEmpty()
    @IsNumber()
    sequenceLinkId: number

  }
  export class ClaimResponseAddItemAdjudicationDto implements ClaimResponseAddItemAdjudication {
    @IsOptional()
    @ValidateNested()
    @Type(() => QuantityDto)
    amount?: Quantity

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => CodingDto)
    code: Coding

    @IsOptional()
    @IsNumber()
    value?: number

  }
  export class ClaimResponseAddItemDetailAdjudicationDto implements ClaimResponseAddItemDetailAdjudication {
    @IsOptional()
    @ValidateNested()
    @Type(() => QuantityDto)
    amount?: Quantity

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => CodingDto)
    code: Coding

    @IsOptional()
    @IsNumber()
    value?: number

  }
  export class ClaimResponseAddItemDetailDto implements ClaimResponseAddItemDetail {
    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ClaimResponseAddItemDetailAdjudicationDto)
    adjudication?: ClaimResponseAddItemDetailAdjudication[]

    @IsOptional()
    @ValidateNested()
    @Type(() => QuantityDto)
    fee?: Quantity

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => CodingDto)
    service: Coding

  }
  export class ClaimResponseAddItemDto implements ClaimResponseAddItem {
    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ClaimResponseAddItemAdjudicationDto)
    adjudication?: ClaimResponseAddItemAdjudication[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ClaimResponseAddItemDetailDto)
    detail?: ClaimResponseAddItemDetail[]

    @IsOptional()
    @ValidateNested()
    @Type(() => QuantityDto)
    fee?: Quantity

    @IsOptional()
    @IsArray()
    @IsNumber({}, { each: true })
    noteNumberLinkId?: number[]

    @IsOptional()
    @IsArray()
    @IsNumber({}, { each: true })
    sequenceLinkId?: number[]

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => CodingDto)
    service: Coding

  }
  export class ClaimResponseErrorDto implements ClaimResponseError {
    @IsNotEmpty()
    @ValidateNested()
    @Type(() => CodingDto)
    code: Coding

    @IsOptional()
    @IsNumber()
    detailSequenceLinkId?: number

    @IsOptional()
    @IsNumber()
    sequenceLinkId?: number

    @IsOptional()
    @IsNumber()
    subdetailSequenceLinkId?: number

  }
  export class ClaimResponseNoteDto implements ClaimResponseNote {
    @IsOptional()
    @IsNumber()
    number?: number

    @IsOptional()
    @IsString()
    text?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => CodingDto)
    type?: Coding

  }
  export class ClaimResponseCoverageDto implements ClaimResponseCoverage {
    @IsOptional()
    @IsString()
    businessArrangement?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    claimResponse?: Reference

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => ReferenceDto)
    coverage: Reference

    @IsNotEmpty()
    @IsBoolean()
    focal: boolean

    @IsOptional()
    @ValidateNested()
    @Type(() => CodingDto)
    originalRuleset?: Coding

    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    preAuthRef?: string[]

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => CodingDto)
    relationship: Coding

    @IsNotEmpty()
    @IsNumber()
    sequence: number

  }
  export class ClaimResponseDto implements ClaimResponse {
    @IsNotEmpty()
    @IsIn(["ClaimResponse"])
    resourceType: "ClaimResponse"

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ClaimResponseAddItemDto)
    addItem?: ClaimResponseAddItem[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ClaimResponseCoverageDto)
    coverage?: ClaimResponseCoverage[]

    @IsOptional()
    @IsString()
    created?: string

    @IsOptional()
    @IsString()
    disposition?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ClaimResponseErrorDto)
    error?: ClaimResponseError[]

    @IsOptional()
    @ValidateNested()
    @Type(() => CodingDto)
    form?: Coding

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => IdentifierDto)
    identifier?: Identifier[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ClaimResponseItemDto)
    item?: ClaimResponseItem[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ClaimResponseNoteDto)
    note?: ClaimResponseNote[]

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    organization?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => CodingDto)
    originalRuleset?: Coding

    @IsNotEmpty()
    @IsIn(["error", "complete"])
    outcome: "error" | "complete"

    @IsOptional()
    @ValidateNested()
    @Type(() => CodingDto)
    payeeType?: Coding

    @IsOptional()
    @ValidateNested()
    @Type(() => QuantityDto)
    paymentAdjustment?: Quantity

    @IsOptional()
    @ValidateNested()
    @Type(() => CodingDto)
    paymentAdjustmentReason?: Coding

    @IsOptional()
    @ValidateNested()
    @Type(() => QuantityDto)
    paymentAmount?: Quantity

    @IsOptional()
    @IsString()
    paymentDate?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => IdentifierDto)
    paymentRef?: Identifier

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    request?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    requestOrganization?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    requestProvider?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => CodingDto)
    reserved?: Coding

    @IsOptional()
    @ValidateNested()
    @Type(() => CodingDto)
    ruleset?: Coding

    @IsOptional()
    @ValidateNested()
    @Type(() => QuantityDto)
    totalBenefit?: Quantity

    @IsOptional()
    @ValidateNested()
    @Type(() => QuantityDto)
    totalCost?: Quantity

    @IsOptional()
    @ValidateNested()
    @Type(() => QuantityDto)
    unallocDeductable?: Quantity

  }
  export class ClinicalImpressionInvestigationsDto implements ClinicalImpressionInvestigations {
    @IsNotEmpty()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    code: CodeableConcept

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    item?: Reference[]

  }
  export class ClinicalImpressionFindingDto implements ClinicalImpressionFinding {
    @IsOptional()
    @IsString()
    cause?: string

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    item: CodeableConcept

  }
  export class ClinicalImpressionRuledOutDto implements ClinicalImpressionRuledOut {
    @IsNotEmpty()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    item: CodeableConcept

    @IsOptional()
    @IsString()
    reason?: string

  }
  export class ClinicalImpressionDto implements ClinicalImpression {
    @IsNotEmpty()
    @IsIn(["ClinicalImpression"])
    resourceType: "ClinicalImpression"

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    action?: Reference[]

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    assessor?: Reference

    @IsOptional()
    @IsString()
    date?: string

    @IsOptional()
    @IsString()
    description?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ClinicalImpressionFindingDto)
    finding?: ClinicalImpressionFinding[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ClinicalImpressionInvestigationsDto)
    investigations?: ClinicalImpressionInvestigations[]

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => ReferenceDto)
    patient: Reference

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    plan?: Reference[]

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    previous?: Reference

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    problem?: Reference[]

    @IsOptional()
    @IsString()
    prognosis?: string

    @IsOptional()
    @IsString()
    protocol?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    resolved?: CodeableConcept[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ClinicalImpressionRuledOutDto)
    ruledOut?: ClinicalImpressionRuledOut[]

    @IsNotEmpty()
    @IsIn(["entered-in-error", "completed", "in-progress"])
    status: "entered-in-error" | "completed" | "in-progress"

    @IsOptional()
    @IsString()
    summary?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    triggerCodeableConcept?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    triggerReference?: Reference

  }
  export class CommunicationPayloadDto implements CommunicationPayload {
    @IsOptional()
    @IsString()
    contentString?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => AttachmentDto)
    contentAttachment?: Attachment

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    contentReference?: Reference

  }
  export class CommunicationDto implements Communication {
    @IsNotEmpty()
    @IsIn(["Communication"])
    resourceType: "Communication"

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    category?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    encounter?: Reference

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => IdentifierDto)
    identifier?: Identifier[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    medium?: CodeableConcept[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CommunicationPayloadDto)
    payload?: CommunicationPayload[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    reason?: CodeableConcept[]

    @IsOptional()
    @IsString()
    received?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    recipient?: Reference[]

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    requestDetail?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    sender?: Reference

    @IsOptional()
    @IsString()
    sent?: string

    @IsNotEmpty()
    @IsIn(["completed", "in-progress", "suspended", "rejected", "failed"])
    status: "completed" | "in-progress" | "suspended" | "rejected" | "failed"

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    subject?: Reference

  }
  export class CommunicationRequestPayloadDto implements CommunicationRequestPayload {
    @IsOptional()
    @IsString()
    contentString?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => AttachmentDto)
    contentAttachment?: Attachment

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    contentReference?: Reference

  }
  export class CommunicationRequestDto implements CommunicationRequest {
    @IsNotEmpty()
    @IsIn(["CommunicationRequest"])
    resourceType: "CommunicationRequest"

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    category?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    encounter?: Reference

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => IdentifierDto)
    identifier?: Identifier[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    medium?: CodeableConcept[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CommunicationRequestPayloadDto)
    payload?: CommunicationRequestPayload[]

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    priority?: CodeableConcept

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    reason?: CodeableConcept[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    recipient?: Reference[]

    @IsOptional()
    @IsString()
    requestedOn?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    requester?: Reference

    @IsOptional()
    @IsString()
    scheduledDateTime?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => PeriodDto)
    scheduledPeriod?: Period

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    sender?: Reference

    @IsNotEmpty()
    @IsIn(["accepted", "proposed", "completed", "in-progress", "suspended", "rejected", "failed", "planned", "requested", "received"])
    status: "accepted" | "proposed" | "completed" | "in-progress" | "suspended" | "rejected" | "failed" | "planned" | "requested" | "received"

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    subject?: Reference

  }
  export class CompositionAttesterDto implements CompositionAttester {
    @IsNotEmpty()
    @IsArray()
    @IsIn(["official", "professional", "personal", "legal"], { each: true })
    mode: ("official" | "professional" | "personal" | "legal")[]

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    party?: Reference

    @IsOptional()
    @IsString()
    time?: string

  }
  export class CompositionEventDto implements CompositionEvent {
    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    code?: CodeableConcept[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    detail?: Reference[]

    @IsOptional()
    @ValidateNested()
    @Type(() => PeriodDto)
    period?: Period

  }
  export class CompositionSectionDto implements CompositionSection {
    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    code?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    emptyReason?: CodeableConcept

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    entry?: Reference[]

    @IsNotEmpty()
    @IsIn(["working", "snapshot", "changes"])
    mode: "working" | "snapshot" | "changes"

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    orderedBy?: CodeableConcept

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CompositionSectionDto)
    section?: CompositionSection[]

    @IsOptional()
    @ValidateNested()
    @Type(() => NarrativeDto)
    text?: Narrative

    @IsOptional()
    @IsString()
    title?: string

  }
  export class CompositionDto implements Composition {
    @IsNotEmpty()
    @IsIn(["Composition"])
    resourceType: "Composition"

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CompositionAttesterDto)
    attester?: CompositionAttester[]

    @IsNotEmpty()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    author: Reference[]

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    class?: CodeableConcept

    @IsOptional()
    @IsString()
    confidentiality?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    custodian?: Reference

    @IsNotEmpty()
    @IsString()
    date: string

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    encounter?: Reference

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CompositionEventDto)
    event?: CompositionEvent[]

    @IsOptional()
    @ValidateNested()
    @Type(() => IdentifierDto)
    identifier?: Identifier

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CompositionSectionDto)
    section?: CompositionSection[]

    @IsNotEmpty()
    @IsIn(["entered-in-error", "preliminary", "final", "amended"])
    status: "entered-in-error" | "preliminary" | "final" | "amended"

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => ReferenceDto)
    subject: Reference

    @IsNotEmpty()
    @IsString()
    title: string

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    type: CodeableConcept

  }
  export class ConceptMapContactDto implements ConceptMapContact {
    @IsOptional()
    @IsString()
    name?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ContactPointDto)
    telecom?: ContactPoint[]

  }
  export class ConceptMapElementTargetDependsOnDto implements ConceptMapElementTargetDependsOn {
    @IsNotEmpty()
    @IsString()
    code: string

    @IsNotEmpty()
    @IsString()
    codeSystem: string

    @IsNotEmpty()
    @IsString()
    element: string

  }
  export class ConceptMapElementTargetDto implements ConceptMapElementTarget {
    @IsOptional()
    @IsString()
    code?: string

    @IsOptional()
    @IsString()
    codeSystem?: string

    @IsOptional()
    @IsString()
    comments?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ConceptMapElementTargetDependsOnDto)
    dependsOn?: ConceptMapElementTargetDependsOn[]

    @IsNotEmpty()
    @IsIn(["equivalent", "equal", "wider", "subsumes", "narrower", "specializes", "inexact", "unmatched", "disjoint"])
    equivalence: "equivalent" | "equal" | "wider" | "subsumes" | "narrower" | "specializes" | "inexact" | "unmatched" | "disjoint"

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ConceptMapElementTargetDependsOnDto)
    product?: ConceptMapElementTargetDependsOn[]

  }
  export class ConceptMapElementDto implements ConceptMapElement {
    @IsOptional()
    @IsString()
    code?: string

    @IsOptional()
    @IsString()
    codeSystem?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ConceptMapElementTargetDto)
    target?: ConceptMapElementTarget[]

  }
  export class ConceptMapDto implements ConceptMap {
    @IsNotEmpty()
    @IsIn(["ConceptMap"])
    resourceType: "ConceptMap"

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ConceptMapContactDto)
    contact?: ConceptMapContact[]

    @IsOptional()
    @IsString()
    copyright?: string

    @IsOptional()
    @IsString()
    date?: string

    @IsOptional()
    @IsString()
    description?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ConceptMapElementDto)
    element?: ConceptMapElement[]

    @IsNotEmpty()
    @IsBoolean()
    experimental: boolean

    @IsOptional()
    @ValidateNested()
    @Type(() => IdentifierDto)
    identifier?: Identifier

    @IsOptional()
    @IsString()
    name?: string

    @IsOptional()
    @IsString()
    publisher?: string

    @IsOptional()
    @IsString()
    requirements?: string

    @IsOptional()
    @IsString()
    sourceUri?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    sourceReference?: Reference

    @IsNotEmpty()
    @IsIn(["active", "draft", "retired"])
    status: "active" | "draft" | "retired"

    @IsOptional()
    @IsString()
    targetUri?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    targetReference?: Reference

    @IsOptional()
    @IsString()
    url?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    useContext?: CodeableConcept[]

    @IsOptional()
    @IsString()
    version?: string

  }
  export class ConditionStageDto implements ConditionStage {
    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    assessment?: Reference[]

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    summary?: CodeableConcept

  }
  export class ConditionEvidenceDto implements ConditionEvidence {
    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    code?: CodeableConcept

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    detail?: Reference[]

  }
  export class ConditionDto implements Condition {
    @IsNotEmpty()
    @IsIn(["Condition"])
    resourceType: "Condition"

    @IsOptional()
    @IsString()
    abatementDateTime?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => QuantityDto)
    abatementQuantity?: Quantity

    @IsNotEmpty()
    @IsBoolean()
    abatementBoolean: boolean

    @IsOptional()
    @ValidateNested()
    @Type(() => PeriodDto)
    abatementPeriod?: Period

    @IsOptional()
    @ValidateNested()
    @Type(() => RangeDto)
    abatementRange?: Range

    @IsOptional()
    @IsString()
    abatementString?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    asserter?: Reference

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    bodySite?: CodeableConcept[]

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    category?: CodeableConcept

    @IsOptional()
    @IsString()
    clinicalStatus?: string

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    code: CodeableConcept

    @IsOptional()
    @IsString()
    dateRecorded?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    encounter?: Reference

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ConditionEvidenceDto)
    evidence?: ConditionEvidence[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => IdentifierDto)
    identifier?: Identifier[]

    @IsOptional()
    @IsString()
    notes?: string

    @IsOptional()
    @IsString()
    onsetDateTime?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => QuantityDto)
    onsetQuantity?: Quantity

    @IsOptional()
    @ValidateNested()
    @Type(() => PeriodDto)
    onsetPeriod?: Period

    @IsOptional()
    @ValidateNested()
    @Type(() => RangeDto)
    onsetRange?: Range

    @IsOptional()
    @IsString()
    onsetString?: string

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => ReferenceDto)
    patient: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    severity?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => ConditionStageDto)
    stage?: ConditionStage

    @IsNotEmpty()
    @IsIn(["confirmed", "refuted", "entered-in-error", "provisional", "differential", "unknown"])
    verificationStatus: "confirmed" | "refuted" | "entered-in-error" | "provisional" | "differential" | "unknown"

  }
  export class ConformanceContactDto implements ConformanceContact {
    @IsOptional()
    @IsString()
    name?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ContactPointDto)
    telecom?: ContactPoint[]

  }
  export class ConformanceSoftwareDto implements ConformanceSoftware {
    @IsNotEmpty()
    @IsString()
    name: string

    @IsOptional()
    @IsString()
    releaseDate?: string

    @IsOptional()
    @IsString()
    version?: string

  }
  export class ConformanceImplementationDto implements ConformanceImplementation {
    @IsNotEmpty()
    @IsString()
    description: string

    @IsOptional()
    @IsString()
    url?: string

  }
  export class ConformanceRestSecurityCertificateDto implements ConformanceRestSecurityCertificate {
    @IsOptional()
    @IsString()
    blob?: string

    @IsOptional()
    @IsString()
    type?: string

  }
  export class ConformanceRestSecurityDto implements ConformanceRestSecurity {
    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ConformanceRestSecurityCertificateDto)
    certificate?: ConformanceRestSecurityCertificate[]

    @IsNotEmpty()
    @IsBoolean()
    cors: boolean

    @IsOptional()
    @IsString()
    description?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    service?: CodeableConcept[]

  }
  export class ConformanceRestResourceInteractionDto implements ConformanceRestResourceInteraction {
    @IsNotEmpty()
    @IsIn(["read", "vread", "update", "delete", "history-instance", "validate", "history-type", "create", "search-type"])
    code: "read" | "vread" | "update" | "delete" | "history-instance" | "validate" | "history-type" | "create" | "search-type"

    @IsOptional()
    @IsString()
    documentation?: string

  }
  export class ConformanceRestResourceSearchParamDto implements ConformanceRestResourceSearchParam {
    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    chain?: string[]

    @IsOptional()
    @IsString()
    definition?: string

    @IsOptional()
    @IsString()
    documentation?: string

    @IsOptional()
    @IsArray()
    @IsIn(["missing", "exact", "contains", "not", "text", "in", "not-in", "below", "above", "type"], { each: true })
    modifier?: ("missing" | "exact" | "contains" | "not" | "text" | "in" | "not-in" | "below" | "above" | "type")[]

    @IsNotEmpty()
    @IsString()
    name: string

    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    target?: string[]

    @IsNotEmpty()
    @IsIn(["string", "number", "date", "token", "reference", "composite", "quantity", "uri"])
    type: "string" | "number" | "date" | "token" | "reference" | "composite" | "quantity" | "uri"

  }
  export class ConformanceRestResourceDto implements ConformanceRestResource {
    @IsNotEmpty()
    @IsBoolean()
    conditionalCreate: boolean

    @IsNotEmpty()
    @IsIn(["not-supported", "single", "multiple"])
    conditionalDelete: "not-supported" | "single" | "multiple"

    @IsNotEmpty()
    @IsBoolean()
    conditionalUpdate: boolean

    @IsNotEmpty()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ConformanceRestResourceInteractionDto)
    interaction: ConformanceRestResourceInteraction[]

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    profile?: Reference

    @IsNotEmpty()
    @IsBoolean()
    readHistory: boolean

    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    searchInclude?: string[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ConformanceRestResourceSearchParamDto)
    searchParam?: ConformanceRestResourceSearchParam[]

    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    searchRevInclude?: string[]

    @IsNotEmpty()
    @IsString()
    type: string

    @IsNotEmpty()
    @IsBoolean()
    updateCreate: boolean

    @IsNotEmpty()
    @IsIn(["no-version", "versioned", "versioned-update"])
    versioning: "no-version" | "versioned" | "versioned-update"

  }
  export class ConformanceRestInteractionDto implements ConformanceRestInteraction {
    @IsNotEmpty()
    @IsIn(["transaction", "search-system", "history-system"])
    code: "transaction" | "search-system" | "history-system"

    @IsOptional()
    @IsString()
    documentation?: string

  }
  export class ConformanceRestOperationDto implements ConformanceRestOperation {
    @IsNotEmpty()
    @ValidateNested()
    @Type(() => ReferenceDto)
    definition: Reference

    @IsNotEmpty()
    @IsString()
    name: string

  }
  export class ConformanceRestDto implements ConformanceRest {
    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    compartment?: string[]

    @IsOptional()
    @IsString()
    documentation?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ConformanceRestInteractionDto)
    interaction?: ConformanceRestInteraction[]

    @IsNotEmpty()
    @IsIn(["client", "server"])
    mode: "client" | "server"

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ConformanceRestOperationDto)
    operation?: ConformanceRestOperation[]

    @IsNotEmpty()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ConformanceRestResourceDto)
    resource: ConformanceRestResource[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ConformanceRestResourceSearchParamDto)
    searchParam?: ConformanceRestResourceSearchParam[]

    @IsOptional()
    @ValidateNested()
    @Type(() => ConformanceRestSecurityDto)
    security?: ConformanceRestSecurity

    @IsNotEmpty()
    @IsIn(["both", "transaction", "batch", "not-supported"])
    transactionMode: "both" | "transaction" | "batch" | "not-supported"

  }
  export class ConformanceMessagingEndpointDto implements ConformanceMessagingEndpoint {
    @IsNotEmpty()
    @IsString()
    address: string

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => CodingDto)
    protocol: Coding

  }
  export class ConformanceMessagingEventDto implements ConformanceMessagingEvent {
    @IsNotEmpty()
    @IsIn(["Consequence", "Currency", "Notification"])
    category: "Consequence" | "Currency" | "Notification"

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => CodingDto)
    code: Coding

    @IsOptional()
    @IsString()
    documentation?: string

    @IsNotEmpty()
    @IsString()
    focus: string

    @IsNotEmpty()
    @IsIn(["sender", "receiver"])
    mode: "sender" | "receiver"

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => ReferenceDto)
    request: Reference

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => ReferenceDto)
    response: Reference

  }
  export class ConformanceMessagingDto implements ConformanceMessaging {
    @IsOptional()
    @IsString()
    documentation?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ConformanceMessagingEndpointDto)
    endpoint?: ConformanceMessagingEndpoint[]

    @IsNotEmpty()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ConformanceMessagingEventDto)
    event: ConformanceMessagingEvent[]

    @IsOptional()
    @IsNumber()
    reliableCache?: number

  }
  export class ConformanceDocumentDto implements ConformanceDocument {
    @IsOptional()
    @IsString()
    documentation?: string

    @IsNotEmpty()
    @IsIn(["producer", "consumer"])
    mode: "producer" | "consumer"

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => ReferenceDto)
    profile: Reference

  }
  export class ConformanceDto implements Conformance {
    @IsNotEmpty()
    @IsIn(["Conformance"])
    resourceType: "Conformance"

    @IsNotEmpty()
    @IsIn(["both", "extensions", "no", "elements"])
    acceptUnknown: "both" | "extensions" | "no" | "elements"

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ConformanceContactDto)
    contact?: ConformanceContact[]

    @IsOptional()
    @IsString()
    copyright?: string

    @IsNotEmpty()
    @IsString()
    date: string

    @IsOptional()
    @IsString()
    description?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ConformanceDocumentDto)
    document?: ConformanceDocument[]

    @IsNotEmpty()
    @IsBoolean()
    experimental: boolean

    @IsNotEmpty()
    @IsString()
    fhirVersion: string

    @IsNotEmpty()
    @IsArray()
    @IsString({ each: true })
    format: string[]

    @IsOptional()
    @ValidateNested()
    @Type(() => ConformanceImplementationDto)
    implementation?: ConformanceImplementation

    @IsNotEmpty()
    @IsIn(["instance", "capability", "requirements"])
    kind: "instance" | "capability" | "requirements"

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ConformanceMessagingDto)
    messaging?: ConformanceMessaging[]

    @IsOptional()
    @IsString()
    name?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    profile?: Reference[]

    @IsOptional()
    @IsString()
    publisher?: string

    @IsOptional()
    @IsString()
    requirements?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ConformanceRestDto)
    rest?: ConformanceRest[]

    @IsOptional()
    @ValidateNested()
    @Type(() => ConformanceSoftwareDto)
    software?: ConformanceSoftware

    @IsNotEmpty()
    @IsIn(["active", "draft", "retired"])
    status: "active" | "draft" | "retired"

    @IsOptional()
    @IsString()
    url?: string

    @IsOptional()
    @IsString()
    version?: string

  }
  export class ContractActorDto implements ContractActor {
    @IsNotEmpty()
    @ValidateNested()
    @Type(() => ReferenceDto)
    entity: Reference

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    role?: CodeableConcept[]

  }
  export class ContractValuedItemDto implements ContractValuedItem {
    @IsOptional()
    @IsString()
    effectiveTime?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    entityCodeableConcept?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    entityReference?: Reference

    @IsOptional()
    @IsNumber()
    factor?: number

    @IsOptional()
    @ValidateNested()
    @Type(() => IdentifierDto)
    identifier?: Identifier

    @IsOptional()
    @ValidateNested()
    @Type(() => QuantityDto)
    net?: Quantity

    @IsOptional()
    @IsNumber()
    points?: number

    @IsOptional()
    @ValidateNested()
    @Type(() => QuantityDto)
    quantity?: Quantity

    @IsOptional()
    @ValidateNested()
    @Type(() => QuantityDto)
    unitPrice?: Quantity

  }
  export class ContractSignerDto implements ContractSigner {
    @IsNotEmpty()
    @ValidateNested()
    @Type(() => ReferenceDto)
    party: Reference

    @IsNotEmpty()
    @IsString()
    signature: string

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => CodingDto)
    type: Coding

  }
  export class ContractTermActorDto implements ContractTermActor {
    @IsNotEmpty()
    @ValidateNested()
    @Type(() => ReferenceDto)
    entity: Reference

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    role?: CodeableConcept[]

  }
  export class ContractTermValuedItemDto implements ContractTermValuedItem {
    @IsOptional()
    @IsString()
    effectiveTime?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    entityCodeableConcept?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    entityReference?: Reference

    @IsOptional()
    @IsNumber()
    factor?: number

    @IsOptional()
    @ValidateNested()
    @Type(() => IdentifierDto)
    identifier?: Identifier

    @IsOptional()
    @ValidateNested()
    @Type(() => QuantityDto)
    net?: Quantity

    @IsOptional()
    @IsNumber()
    points?: number

    @IsOptional()
    @ValidateNested()
    @Type(() => QuantityDto)
    quantity?: Quantity

    @IsOptional()
    @ValidateNested()
    @Type(() => QuantityDto)
    unitPrice?: Quantity

  }
  export class ContractTermDto implements ContractTerm {
    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    action?: CodeableConcept[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    actionReason?: CodeableConcept[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ContractTermActorDto)
    actor?: ContractTermActor[]

    @IsOptional()
    @ValidateNested()
    @Type(() => PeriodDto)
    applies?: Period

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ContractTermDto)
    group?: ContractTerm[]

    @IsOptional()
    @ValidateNested()
    @Type(() => IdentifierDto)
    identifier?: Identifier

    @IsOptional()
    @IsString()
    issued?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    subject?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    subType?: CodeableConcept

    @IsOptional()
    @IsString()
    text?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    type?: CodeableConcept

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ContractTermValuedItemDto)
    valuedItem?: ContractTermValuedItem[]

  }
  export class ContractFriendlyDto implements ContractFriendly {
    @IsOptional()
    @ValidateNested()
    @Type(() => AttachmentDto)
    contentAttachment?: Attachment

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    contentReference?: Reference

  }
  export class ContractLegalDto implements ContractLegal {
    @IsOptional()
    @ValidateNested()
    @Type(() => AttachmentDto)
    contentAttachment?: Attachment

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    contentReference?: Reference

  }
  export class ContractRuleDto implements ContractRule {
    @IsOptional()
    @ValidateNested()
    @Type(() => AttachmentDto)
    contentAttachment?: Attachment

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    contentReference?: Reference

  }
  export class ContractDto implements Contract {
    @IsNotEmpty()
    @IsIn(["Contract"])
    resourceType: "Contract"

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    action?: CodeableConcept[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    actionReason?: CodeableConcept[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ContractActorDto)
    actor?: ContractActor[]

    @IsOptional()
    @ValidateNested()
    @Type(() => PeriodDto)
    applies?: Period

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    authority?: Reference[]

    @IsOptional()
    @ValidateNested()
    @Type(() => AttachmentDto)
    bindingAttachment?: Attachment

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    bindingReference?: Reference

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    domain?: Reference[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ContractFriendlyDto)
    friendly?: ContractFriendly[]

    @IsOptional()
    @ValidateNested()
    @Type(() => IdentifierDto)
    identifier?: Identifier

    @IsOptional()
    @IsString()
    issued?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ContractLegalDto)
    legal?: ContractLegal[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ContractRuleDto)
    rule?: ContractRule[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ContractSignerDto)
    signer?: ContractSigner[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    subject?: Reference[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    subType?: CodeableConcept[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ContractTermDto)
    term?: ContractTerm[]

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    type?: CodeableConcept

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ContractValuedItemDto)
    valuedItem?: ContractValuedItem[]

  }
  export class CoverageDto implements Coverage {
    @IsNotEmpty()
    @IsIn(["Coverage"])
    resourceType: "Coverage"

    @IsOptional()
    @ValidateNested()
    @Type(() => IdentifierDto)
    bin?: Identifier

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    contract?: Reference[]

    @IsOptional()
    @IsNumber()
    dependent?: number

    @IsOptional()
    @IsString()
    group?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => IdentifierDto)
    identifier?: Identifier[]

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    issuer?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => IdentifierDto)
    network?: Identifier

    @IsOptional()
    @ValidateNested()
    @Type(() => PeriodDto)
    period?: Period

    @IsOptional()
    @IsString()
    plan?: string

    @IsOptional()
    @IsNumber()
    sequence?: number

    @IsOptional()
    @IsString()
    subPlan?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    subscriber?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => IdentifierDto)
    subscriberId?: Identifier

    @IsOptional()
    @ValidateNested()
    @Type(() => CodingDto)
    type?: Coding

  }
  export class DataElementContactDto implements DataElementContact {
    @IsOptional()
    @IsString()
    name?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ContactPointDto)
    telecom?: ContactPoint[]

  }
  export class DataElementMappingDto implements DataElementMapping {
    @IsOptional()
    @IsString()
    comments?: string

    @IsNotEmpty()
    @IsString()
    identity: string

    @IsOptional()
    @IsString()
    name?: string

    @IsOptional()
    @IsString()
    uri?: string

  }
  export class DataElementDto implements DataElement {
    @IsNotEmpty()
    @IsIn(["DataElement"])
    resourceType: "DataElement"

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => DataElementContactDto)
    contact?: DataElementContact[]

    @IsOptional()
    @IsString()
    copyright?: string

    @IsOptional()
    @IsString()
    date?: string

    @IsNotEmpty()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ElementDefinitionDto)
    element: ElementDefinition[]

    @IsNotEmpty()
    @IsBoolean()
    experimental: boolean

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => IdentifierDto)
    identifier?: Identifier[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => DataElementMappingDto)
    mapping?: DataElementMapping[]

    @IsOptional()
    @IsString()
    name?: string

    @IsOptional()
    @IsString()
    publisher?: string

    @IsNotEmpty()
    @IsIn(["active", "draft", "retired"])
    status: "active" | "draft" | "retired"

    @IsNotEmpty()
    @IsIn(["equivalent", "comparable", "fully-specified", "convertable", "scaleable", "flexible"])
    stringency: "equivalent" | "comparable" | "fully-specified" | "convertable" | "scaleable" | "flexible"

    @IsOptional()
    @IsString()
    url?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    useContext?: CodeableConcept[]

    @IsOptional()
    @IsString()
    version?: string

  }
  export class DetectedIssueMitigationDto implements DetectedIssueMitigation {
    @IsNotEmpty()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    action: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    author?: Reference

    @IsOptional()
    @IsString()
    date?: string

  }
  export class DetectedIssueDto implements DetectedIssue {
    @IsNotEmpty()
    @IsIn(["DetectedIssue"])
    resourceType: "DetectedIssue"

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    author?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    category?: CodeableConcept

    @IsOptional()
    @IsString()
    date?: string

    @IsOptional()
    @IsString()
    detail?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => IdentifierDto)
    identifier?: Identifier

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    implicated?: Reference[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => DetectedIssueMitigationDto)
    mitigation?: DetectedIssueMitigation[]

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    patient?: Reference

    @IsOptional()
    @IsString()
    reference?: string

    @IsNotEmpty()
    @IsIn(["moderate", "high", "low"])
    severity: "moderate" | "high" | "low"

  }
  export class DeviceDto implements Device {
    @IsNotEmpty()
    @IsIn(["Device"])
    resourceType: "Device"

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ContactPointDto)
    contact?: ContactPoint[]

    @IsOptional()
    @IsString()
    expiry?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => IdentifierDto)
    identifier?: Identifier[]

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    location?: Reference

    @IsOptional()
    @IsString()
    lotNumber?: string

    @IsOptional()
    @IsString()
    manufactureDate?: string

    @IsOptional()
    @IsString()
    manufacturer?: string

    @IsOptional()
    @IsString()
    model?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => AnnotationDto)
    note?: Annotation[]

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    owner?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    patient?: Reference

    @IsNotEmpty()
    @IsIn(["entered-in-error", "available", "not-available"])
    status: "entered-in-error" | "available" | "not-available"

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    type: CodeableConcept

    @IsOptional()
    @IsString()
    udi?: string

    @IsOptional()
    @IsString()
    url?: string

    @IsOptional()
    @IsString()
    version?: string

  }
  export class DeviceComponentProductionSpecificationDto implements DeviceComponentProductionSpecification {
    @IsOptional()
    @ValidateNested()
    @Type(() => IdentifierDto)
    componentId?: Identifier

    @IsOptional()
    @IsString()
    productionSpec?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    specType?: CodeableConcept

  }
  export class DeviceComponentDto implements DeviceComponent {
    @IsNotEmpty()
    @IsIn(["DeviceComponent"])
    resourceType: "DeviceComponent"

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => IdentifierDto)
    identifier: Identifier

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    languageCode?: CodeableConcept

    @IsNotEmpty()
    @IsString()
    lastSystemChange: string

    @IsNotEmpty()
    @IsIn(["other", "chemical", "electrical", "impedance", "nuclear", "optical", "thermal", "biological", "mechanical", "acoustical", "manual"])
    measurementPrinciple: "other" | "chemical" | "electrical" | "impedance" | "nuclear" | "optical" | "thermal" | "biological" | "mechanical" | "acoustical" | "manual"

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    operationalStatus?: CodeableConcept[]

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    parameterGroup?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    parent?: Reference

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => DeviceComponentProductionSpecificationDto)
    productionSpecification?: DeviceComponentProductionSpecification[]

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    source?: Reference

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    type: CodeableConcept

  }
  export class DeviceMetricCalibrationDto implements DeviceMetricCalibration {
    @IsNotEmpty()
    @IsIn(["not-calibrated", "calibration-required", "calibrated", "unspecified"])
    state: "not-calibrated" | "calibration-required" | "calibrated" | "unspecified"

    @IsOptional()
    @IsString()
    time?: string

    @IsNotEmpty()
    @IsIn(["unspecified", "offset", "gain", "two-point"])
    type: "unspecified" | "offset" | "gain" | "two-point"

  }
  export class DeviceMetricDto implements DeviceMetric {
    @IsNotEmpty()
    @IsIn(["DeviceMetric"])
    resourceType: "DeviceMetric"

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => DeviceMetricCalibrationDto)
    calibration?: DeviceMetricCalibration[]

    @IsNotEmpty()
    @IsIn(["unspecified", "measurement", "setting", "calculation"])
    category: "unspecified" | "measurement" | "setting" | "calculation"

    @IsNotEmpty()
    @IsIn(["black", "red", "green", "yellow", "blue", "magenta", "cyan", "white"])
    color: "black" | "red" | "green" | "yellow" | "blue" | "magenta" | "cyan" | "white"

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => IdentifierDto)
    identifier: Identifier

    @IsOptional()
    @ValidateNested()
    @Type(() => TimingDto)
    measurementPeriod?: Timing

    @IsNotEmpty()
    @IsIn(["on", "off", "standby"])
    operationalStatus: "on" | "off" | "standby"

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    parent?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    source?: Reference

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    type: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    unit?: CodeableConcept

  }
  export class DeviceUseRequestDto implements DeviceUseRequest {
    @IsNotEmpty()
    @IsIn(["DeviceUseRequest"])
    resourceType: "DeviceUseRequest"

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    bodySiteCodeableConcept?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    bodySiteReference?: Reference

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => ReferenceDto)
    device: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    encounter?: Reference

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => IdentifierDto)
    identifier?: Identifier[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    indication?: CodeableConcept[]

    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    notes?: string[]

    @IsOptional()
    @IsString()
    orderedOn?: string

    @IsNotEmpty()
    @IsIn(["routine", "urgent", "stat", "asap"])
    priority: "routine" | "urgent" | "stat" | "asap"

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    prnReason?: CodeableConcept[]

    @IsOptional()
    @IsString()
    recordedOn?: string

    @IsNotEmpty()
    @IsIn(["accepted", "proposed", "completed", "in-progress", "suspended", "rejected", "planned", "requested", "received", "aborted"])
    status: "accepted" | "proposed" | "completed" | "in-progress" | "suspended" | "rejected" | "planned" | "requested" | "received" | "aborted"

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => ReferenceDto)
    subject: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => TimingDto)
    timingTiming?: Timing

    @IsOptional()
    @ValidateNested()
    @Type(() => PeriodDto)
    timingPeriod?: Period

    @IsOptional()
    @IsString()
    timingDateTime?: string

  }
  export class DeviceUseStatementDto implements DeviceUseStatement {
    @IsNotEmpty()
    @IsIn(["DeviceUseStatement"])
    resourceType: "DeviceUseStatement"

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    bodySiteCodeableConcept?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    bodySiteReference?: Reference

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => ReferenceDto)
    device: Reference

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => IdentifierDto)
    identifier?: Identifier[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    indication?: CodeableConcept[]

    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    notes?: string[]

    @IsOptional()
    @IsString()
    recordedOn?: string

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => ReferenceDto)
    subject: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => TimingDto)
    timingTiming?: Timing

    @IsOptional()
    @ValidateNested()
    @Type(() => PeriodDto)
    timingPeriod?: Period

    @IsOptional()
    @IsString()
    timingDateTime?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => PeriodDto)
    whenUsed?: Period

  }
  export class DiagnosticOrderEventDto implements DiagnosticOrderEvent {
    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    actor?: Reference

    @IsNotEmpty()
    @IsString()
    dateTime: string

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    description?: CodeableConcept

    @IsNotEmpty()
    @IsIn(["accepted", "proposed", "cancelled", "completed", "in-progress", "draft", "suspended", "rejected", "failed", "planned", "requested", "received", "review"])
    status: "accepted" | "proposed" | "cancelled" | "completed" | "in-progress" | "draft" | "suspended" | "rejected" | "failed" | "planned" | "requested" | "received" | "review"

  }
  export class DiagnosticOrderItemDto implements DiagnosticOrderItem {
    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    bodySite?: CodeableConcept

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    code: CodeableConcept

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => DiagnosticOrderEventDto)
    event?: DiagnosticOrderEvent[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    specimen?: Reference[]

    @IsNotEmpty()
    @IsIn(["accepted", "proposed", "cancelled", "completed", "in-progress", "draft", "suspended", "rejected", "failed", "planned", "requested", "received", "review"])
    status: "accepted" | "proposed" | "cancelled" | "completed" | "in-progress" | "draft" | "suspended" | "rejected" | "failed" | "planned" | "requested" | "received" | "review"

  }
  export class DiagnosticOrderDto implements DiagnosticOrder {
    @IsNotEmpty()
    @IsIn(["DiagnosticOrder"])
    resourceType: "DiagnosticOrder"

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    encounter?: Reference

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => DiagnosticOrderEventDto)
    event?: DiagnosticOrderEvent[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => IdentifierDto)
    identifier?: Identifier[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => DiagnosticOrderItemDto)
    item?: DiagnosticOrderItem[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => AnnotationDto)
    note?: Annotation[]

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    orderer?: Reference

    @IsNotEmpty()
    @IsIn(["routine", "urgent", "stat", "asap"])
    priority: "routine" | "urgent" | "stat" | "asap"

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    reason?: CodeableConcept[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    specimen?: Reference[]

    @IsNotEmpty()
    @IsIn(["accepted", "proposed", "cancelled", "completed", "in-progress", "draft", "suspended", "rejected", "failed", "planned", "requested", "received", "review"])
    status: "accepted" | "proposed" | "cancelled" | "completed" | "in-progress" | "draft" | "suspended" | "rejected" | "failed" | "planned" | "requested" | "received" | "review"

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => ReferenceDto)
    subject: Reference

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    supportingInformation?: Reference[]

  }
  export class DiagnosticReportImageDto implements DiagnosticReportImage {
    @IsOptional()
    @IsString()
    comment?: string

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => ReferenceDto)
    link: Reference

  }
  export class DiagnosticReportDto implements DiagnosticReport {
    @IsNotEmpty()
    @IsIn(["DiagnosticReport"])
    resourceType: "DiagnosticReport"

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    category?: CodeableConcept

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    code: CodeableConcept

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    codedDiagnosis?: CodeableConcept[]

    @IsOptional()
    @IsString()
    conclusion?: string

    @IsOptional()
    @IsString()
    effectiveDateTime?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => PeriodDto)
    effectivePeriod?: Period

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    encounter?: Reference

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => IdentifierDto)
    identifier?: Identifier[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => DiagnosticReportImageDto)
    image?: DiagnosticReportImage[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    imagingStudy?: Reference[]

    @IsNotEmpty()
    @IsString()
    issued: string

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => ReferenceDto)
    performer: Reference

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => AttachmentDto)
    presentedForm?: Attachment[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    request?: Reference[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    result?: Reference[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    specimen?: Reference[]

    @IsNotEmpty()
    @IsIn(["entered-in-error", "cancelled", "final", "registered", "partial", "corrected", "appended"])
    status: "entered-in-error" | "cancelled" | "final" | "registered" | "partial" | "corrected" | "appended"

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => ReferenceDto)
    subject: Reference

  }
  export class DocumentManifestContentDto implements DocumentManifestContent {
    @IsOptional()
    @ValidateNested()
    @Type(() => AttachmentDto)
    pAttachment?: Attachment

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    pReference?: Reference

  }
  export class DocumentManifestRelatedDto implements DocumentManifestRelated {
    @IsOptional()
    @ValidateNested()
    @Type(() => IdentifierDto)
    identifier?: Identifier

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    ref?: Reference

  }
  export class DocumentManifestDto implements DocumentManifest {
    @IsNotEmpty()
    @IsIn(["DocumentManifest"])
    resourceType: "DocumentManifest"

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    author?: Reference[]

    @IsNotEmpty()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => DocumentManifestContentDto)
    content: DocumentManifestContent[]

    @IsOptional()
    @IsString()
    created?: string

    @IsOptional()
    @IsString()
    description?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => IdentifierDto)
    identifier?: Identifier[]

    @IsOptional()
    @ValidateNested()
    @Type(() => IdentifierDto)
    masterIdentifier?: Identifier

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    recipient?: Reference[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => DocumentManifestRelatedDto)
    related?: DocumentManifestRelated[]

    @IsOptional()
    @IsString()
    source?: string

    @IsNotEmpty()
    @IsIn(["entered-in-error", "current", "superseded"])
    status: "entered-in-error" | "current" | "superseded"

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    subject?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    type?: CodeableConcept

  }
  export class DocumentReferenceRelatesToDto implements DocumentReferenceRelatesTo {
    @IsNotEmpty()
    @IsIn(["replaces", "transforms", "signs", "appends"])
    code: "replaces" | "transforms" | "signs" | "appends"

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => ReferenceDto)
    target: Reference

  }
  export class DocumentReferenceContentDto implements DocumentReferenceContent {
    @IsNotEmpty()
    @ValidateNested()
    @Type(() => AttachmentDto)
    attachment: Attachment

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodingDto)
    format?: Coding[]

  }
  export class DocumentReferenceContextRelatedDto implements DocumentReferenceContextRelated {
    @IsOptional()
    @ValidateNested()
    @Type(() => IdentifierDto)
    identifier?: Identifier

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    ref?: Reference

  }
  export class DocumentReferenceContextDto implements DocumentReferenceContext {
    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    encounter?: Reference

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    event?: CodeableConcept[]

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    facilityType?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => PeriodDto)
    period?: Period

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    practiceSetting?: CodeableConcept

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => DocumentReferenceContextRelatedDto)
    related?: DocumentReferenceContextRelated[]

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    sourcePatientInfo?: Reference

  }
  export class DocumentReferenceDto implements DocumentReference {
    @IsNotEmpty()
    @IsIn(["DocumentReference"])
    resourceType: "DocumentReference"

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    authenticator?: Reference

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    author?: Reference[]

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    class?: CodeableConcept

    @IsNotEmpty()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => DocumentReferenceContentDto)
    content: DocumentReferenceContent[]

    @IsOptional()
    @ValidateNested()
    @Type(() => DocumentReferenceContextDto)
    context?: DocumentReferenceContext

    @IsOptional()
    @IsString()
    created?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    custodian?: Reference

    @IsOptional()
    @IsString()
    description?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    docStatus?: CodeableConcept

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => IdentifierDto)
    identifier?: Identifier[]

    @IsNotEmpty()
    @IsString()
    indexed: string

    @IsOptional()
    @ValidateNested()
    @Type(() => IdentifierDto)
    masterIdentifier?: Identifier

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => DocumentReferenceRelatesToDto)
    relatesTo?: DocumentReferenceRelatesTo[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    securityLabel?: CodeableConcept[]

    @IsNotEmpty()
    @IsIn(["entered-in-error", "current", "superseded"])
    status: "entered-in-error" | "current" | "superseded"

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    subject?: Reference

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    type: CodeableConcept

  }
  export class DomainResourceDto implements DomainResource {
    @IsNotEmpty()
    @IsString()
    resourceType: string

    @IsOptional()
    @IsArray()
    contained?: FhirResource[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ExtensionDto)
    extension?: Extension[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ExtensionDto)
    modifierExtension?: Extension[]

    @IsOptional()
    @ValidateNested()
    @Type(() => NarrativeDto)
    text?: Narrative

  }
  export class EligibilityRequestDto implements EligibilityRequest {
    @IsNotEmpty()
    @IsIn(["EligibilityRequest"])
    resourceType: "EligibilityRequest"

    @IsOptional()
    @IsString()
    created?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => IdentifierDto)
    identifier?: Identifier[]

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    organization?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => CodingDto)
    originalRuleset?: Coding

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    provider?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => CodingDto)
    ruleset?: Coding

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    target?: Reference

  }
  export class EligibilityResponseDto implements EligibilityResponse {
    @IsNotEmpty()
    @IsIn(["EligibilityResponse"])
    resourceType: "EligibilityResponse"

    @IsOptional()
    @IsString()
    created?: string

    @IsOptional()
    @IsString()
    disposition?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => IdentifierDto)
    identifier?: Identifier[]

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    organization?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => CodingDto)
    originalRuleset?: Coding

    @IsNotEmpty()
    @IsIn(["error", "complete"])
    outcome: "error" | "complete"

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    request?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    requestOrganization?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    requestProvider?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => CodingDto)
    ruleset?: Coding

  }
  export class EncounterStatusHistoryDto implements EncounterStatusHistory {
    @IsNotEmpty()
    @ValidateNested()
    @Type(() => PeriodDto)
    period: Period

    @IsNotEmpty()
    @IsIn(["arrived", "cancelled", "in-progress", "planned", "onleave", "finished"])
    status: "arrived" | "cancelled" | "in-progress" | "planned" | "onleave" | "finished"

  }
  export class EncounterParticipantDto implements EncounterParticipant {
    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    individual?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => PeriodDto)
    period?: Period

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    type?: CodeableConcept[]

  }
  export class EncounterHospitalizationDto implements EncounterHospitalization {
    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    admitSource?: CodeableConcept

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    admittingDiagnosis?: Reference[]

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    destination?: Reference

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    dietPreference?: CodeableConcept[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    dischargeDiagnosis?: Reference[]

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    dischargeDisposition?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    origin?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => IdentifierDto)
    preAdmissionIdentifier?: Identifier

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    reAdmission?: CodeableConcept

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    specialArrangement?: CodeableConcept[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    specialCourtesy?: CodeableConcept[]

  }
  export class EncounterLocationDto implements EncounterLocation {
    @IsNotEmpty()
    @ValidateNested()
    @Type(() => ReferenceDto)
    location: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => PeriodDto)
    period?: Period

    @IsNotEmpty()
    @IsIn(["active", "completed", "planned", "reserved"])
    status: "active" | "completed" | "planned" | "reserved"

  }
  export class EncounterDto implements Encounter {
    @IsNotEmpty()
    @IsIn(["Encounter"])
    resourceType: "Encounter"

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    appointment?: Reference

    @IsNotEmpty()
    @IsIn(["home", "other", "inpatient", "outpatient", "ambulatory", "emergency", "field", "daytime", "virtual"])
    class: "home" | "other" | "inpatient" | "outpatient" | "ambulatory" | "emergency" | "field" | "daytime" | "virtual"

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    episodeOfCare?: Reference[]

    @IsOptional()
    @ValidateNested()
    @Type(() => EncounterHospitalizationDto)
    hospitalization?: EncounterHospitalization

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => IdentifierDto)
    identifier?: Identifier[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    incomingReferral?: Reference[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    indication?: Reference[]

    @IsOptional()
    @ValidateNested()
    @Type(() => QuantityDto)
    length?: Quantity

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => EncounterLocationDto)
    location?: EncounterLocation[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => EncounterParticipantDto)
    participant?: EncounterParticipant[]

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    partOf?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    patient?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => PeriodDto)
    period?: Period

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    priority?: CodeableConcept

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    reason?: CodeableConcept[]

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    serviceProvider?: Reference

    @IsNotEmpty()
    @IsIn(["arrived", "cancelled", "in-progress", "planned", "onleave", "finished"])
    status: "arrived" | "cancelled" | "in-progress" | "planned" | "onleave" | "finished"

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => EncounterStatusHistoryDto)
    statusHistory?: EncounterStatusHistory[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    type?: CodeableConcept[]

  }
  export class EnrollmentRequestDto implements EnrollmentRequest {
    @IsNotEmpty()
    @IsIn(["EnrollmentRequest"])
    resourceType: "EnrollmentRequest"

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => ReferenceDto)
    coverage: Reference

    @IsOptional()
    @IsString()
    created?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => IdentifierDto)
    identifier?: Identifier[]

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    organization?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => CodingDto)
    originalRuleset?: Coding

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    provider?: Reference

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => CodingDto)
    relationship: Coding

    @IsOptional()
    @ValidateNested()
    @Type(() => CodingDto)
    ruleset?: Coding

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => ReferenceDto)
    subject: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    target?: Reference

  }
  export class EnrollmentResponseDto implements EnrollmentResponse {
    @IsNotEmpty()
    @IsIn(["EnrollmentResponse"])
    resourceType: "EnrollmentResponse"

    @IsOptional()
    @IsString()
    created?: string

    @IsOptional()
    @IsString()
    disposition?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => IdentifierDto)
    identifier?: Identifier[]

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    organization?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => CodingDto)
    originalRuleset?: Coding

    @IsNotEmpty()
    @IsIn(["error", "complete"])
    outcome: "error" | "complete"

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    request?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    requestOrganization?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    requestProvider?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => CodingDto)
    ruleset?: Coding

  }
  export class EpisodeOfCareStatusHistoryDto implements EpisodeOfCareStatusHistory {
    @IsNotEmpty()
    @ValidateNested()
    @Type(() => PeriodDto)
    period: Period

    @IsNotEmpty()
    @IsIn(["active", "cancelled", "planned", "finished", "waitlist", "onhold"])
    status: "active" | "cancelled" | "planned" | "finished" | "waitlist" | "onhold"

  }
  export class EpisodeOfCareCareTeamDto implements EpisodeOfCareCareTeam {
    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    member?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => PeriodDto)
    period?: Period

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    role?: CodeableConcept[]

  }
  export class EpisodeOfCareDto implements EpisodeOfCare {
    @IsNotEmpty()
    @IsIn(["EpisodeOfCare"])
    resourceType: "EpisodeOfCare"

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    careManager?: Reference

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => EpisodeOfCareCareTeamDto)
    careTeam?: EpisodeOfCareCareTeam[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    condition?: Reference[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => IdentifierDto)
    identifier?: Identifier[]

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    managingOrganization?: Reference

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => ReferenceDto)
    patient: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => PeriodDto)
    period?: Period

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    referralRequest?: Reference[]

    @IsNotEmpty()
    @IsIn(["active", "cancelled", "planned", "finished", "waitlist", "onhold"])
    status: "active" | "cancelled" | "planned" | "finished" | "waitlist" | "onhold"

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => EpisodeOfCareStatusHistoryDto)
    statusHistory?: EpisodeOfCareStatusHistory[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    type?: CodeableConcept[]

  }
  export class ExplanationOfBenefitDto implements ExplanationOfBenefit {
    @IsNotEmpty()
    @IsIn(["ExplanationOfBenefit"])
    resourceType: "ExplanationOfBenefit"

    @IsOptional()
    @IsString()
    created?: string

    @IsOptional()
    @IsString()
    disposition?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => IdentifierDto)
    identifier?: Identifier[]

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    organization?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => CodingDto)
    originalRuleset?: Coding

    @IsNotEmpty()
    @IsIn(["error", "complete"])
    outcome: "error" | "complete"

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    request?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    requestOrganization?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    requestProvider?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => CodingDto)
    ruleset?: Coding

  }
  export class FamilyMemberHistoryConditionDto implements FamilyMemberHistoryCondition {
    @IsNotEmpty()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    code: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => AnnotationDto)
    note?: Annotation

    @IsOptional()
    @ValidateNested()
    @Type(() => QuantityDto)
    onsetQuantity?: Quantity

    @IsOptional()
    @ValidateNested()
    @Type(() => RangeDto)
    onsetRange?: Range

    @IsOptional()
    @ValidateNested()
    @Type(() => PeriodDto)
    onsetPeriod?: Period

    @IsOptional()
    @IsString()
    onsetString?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    outcome?: CodeableConcept

  }
  export class FamilyMemberHistoryDto implements FamilyMemberHistory {
    @IsNotEmpty()
    @IsIn(["FamilyMemberHistory"])
    resourceType: "FamilyMemberHistory"

    @IsOptional()
    @ValidateNested()
    @Type(() => QuantityDto)
    ageQuantity?: Quantity

    @IsOptional()
    @ValidateNested()
    @Type(() => RangeDto)
    ageRange?: Range

    @IsOptional()
    @IsString()
    ageString?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => PeriodDto)
    bornPeriod?: Period

    @IsOptional()
    @IsString()
    bornDate?: string

    @IsOptional()
    @IsString()
    bornString?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => FamilyMemberHistoryConditionDto)
    condition?: FamilyMemberHistoryCondition[]

    @IsOptional()
    @IsString()
    date?: string

    @IsNotEmpty()
    @IsBoolean()
    deceasedBoolean: boolean

    @IsOptional()
    @ValidateNested()
    @Type(() => QuantityDto)
    deceasedQuantity?: Quantity

    @IsOptional()
    @ValidateNested()
    @Type(() => RangeDto)
    deceasedRange?: Range

    @IsOptional()
    @IsString()
    deceasedDate?: string

    @IsOptional()
    @IsString()
    deceasedString?: string

    @IsNotEmpty()
    @IsIn(["other", "unknown", "male", "female"])
    gender: "other" | "unknown" | "male" | "female"

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => IdentifierDto)
    identifier?: Identifier[]

    @IsOptional()
    @IsString()
    name?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => AnnotationDto)
    note?: Annotation

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => ReferenceDto)
    patient: Reference

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    relationship: CodeableConcept

    @IsNotEmpty()
    @IsIn(["entered-in-error", "completed", "partial", "health-unknown"])
    status: "entered-in-error" | "completed" | "partial" | "health-unknown"

  }
  export class FlagDto implements Flag {
    @IsNotEmpty()
    @IsIn(["Flag"])
    resourceType: "Flag"

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    author?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    category?: CodeableConcept

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    code: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    encounter?: Reference

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => IdentifierDto)
    identifier?: Identifier[]

    @IsOptional()
    @ValidateNested()
    @Type(() => PeriodDto)
    period?: Period

    @IsNotEmpty()
    @IsIn(["active", "inactive", "entered-in-error"])
    status: "active" | "inactive" | "entered-in-error"

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => ReferenceDto)
    subject: Reference

  }
  export class GoalOutcomeDto implements GoalOutcome {
    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    resultCodeableConcept?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    resultReference?: Reference

  }
  export class GoalDto implements Goal {
    @IsNotEmpty()
    @IsIn(["Goal"])
    resourceType: "Goal"

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    addresses?: Reference[]

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    author?: Reference

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    category?: CodeableConcept[]

    @IsNotEmpty()
    @IsString()
    description: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => IdentifierDto)
    identifier?: Identifier[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => AnnotationDto)
    note?: Annotation[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => GoalOutcomeDto)
    outcome?: GoalOutcome[]

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    priority?: CodeableConcept

    @IsOptional()
    @IsString()
    startDate?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    startCodeableConcept?: CodeableConcept

    @IsNotEmpty()
    @IsIn(["accepted", "proposed", "cancelled", "in-progress", "on-hold", "rejected", "planned", "achieved", "sustaining"])
    status: "accepted" | "proposed" | "cancelled" | "in-progress" | "on-hold" | "rejected" | "planned" | "achieved" | "sustaining"

    @IsOptional()
    @IsString()
    statusDate?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    statusReason?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    subject?: Reference

    @IsOptional()
    @IsString()
    targetDate?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => QuantityDto)
    targetQuantity?: Quantity

  }
  export class GroupCharacteristicDto implements GroupCharacteristic {
    @IsNotEmpty()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    code: CodeableConcept

    @IsNotEmpty()
    @IsBoolean()
    exclude: boolean

    @IsOptional()
    @ValidateNested()
    @Type(() => PeriodDto)
    period?: Period

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    valueCodeableConcept?: CodeableConcept

    @IsNotEmpty()
    @IsBoolean()
    valueBoolean: boolean

    @IsOptional()
    @ValidateNested()
    @Type(() => QuantityDto)
    valueQuantity?: Quantity

    @IsOptional()
    @ValidateNested()
    @Type(() => RangeDto)
    valueRange?: Range

  }
  export class GroupMemberDto implements GroupMember {
    @IsNotEmpty()
    @ValidateNested()
    @Type(() => ReferenceDto)
    entity: Reference

    @IsNotEmpty()
    @IsBoolean()
    inactive: boolean

    @IsOptional()
    @ValidateNested()
    @Type(() => PeriodDto)
    period?: Period

  }
  export class GroupDto implements Group {
    @IsNotEmpty()
    @IsIn(["Group"])
    resourceType: "Group"

    @IsNotEmpty()
    @IsBoolean()
    actual: boolean

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => GroupCharacteristicDto)
    characteristic?: GroupCharacteristic[]

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    code?: CodeableConcept

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => IdentifierDto)
    identifier?: Identifier[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => GroupMemberDto)
    member?: GroupMember[]

    @IsOptional()
    @IsString()
    name?: string

    @IsOptional()
    @IsNumber()
    quantity?: number

    @IsNotEmpty()
    @IsIn(["medication", "person", "animal", "practitioner", "device", "substance"])
    type: "medication" | "person" | "animal" | "practitioner" | "device" | "substance"

  }
  export class HealthcareServiceServiceTypeDto implements HealthcareServiceServiceType {
    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    specialty?: CodeableConcept[]

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    type: CodeableConcept

  }
  export class HealthcareServiceAvailableTimeDto implements HealthcareServiceAvailableTime {
    @IsNotEmpty()
    @IsBoolean()
    allDay: boolean

    @IsOptional()
    @IsString()
    availableEndTime?: string

    @IsOptional()
    @IsString()
    availableStartTime?: string

    @IsOptional()
    @IsArray()
    @IsIn(["mon", "tue", "wed", "thu", "fri", "sat", "sun"], { each: true })
    daysOfWeek?: ("mon" | "tue" | "wed" | "thu" | "fri" | "sat" | "sun")[]

  }
  export class HealthcareServiceNotAvailableDto implements HealthcareServiceNotAvailable {
    @IsNotEmpty()
    @IsString()
    description: string

    @IsOptional()
    @ValidateNested()
    @Type(() => PeriodDto)
    during?: Period

  }
  export class HealthcareServiceDto implements HealthcareService {
    @IsNotEmpty()
    @IsIn(["HealthcareService"])
    resourceType: "HealthcareService"

    @IsNotEmpty()
    @IsBoolean()
    appointmentRequired: boolean

    @IsOptional()
    @IsString()
    availabilityExceptions?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => HealthcareServiceAvailableTimeDto)
    availableTime?: HealthcareServiceAvailableTime[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    characteristic?: CodeableConcept[]

    @IsOptional()
    @IsString()
    comment?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    coverageArea?: Reference[]

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    eligibility?: CodeableConcept

    @IsOptional()
    @IsString()
    eligibilityNote?: string

    @IsOptional()
    @IsString()
    extraDetails?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => IdentifierDto)
    identifier?: Identifier[]

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => ReferenceDto)
    location: Reference

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => HealthcareServiceNotAvailableDto)
    notAvailable?: HealthcareServiceNotAvailable[]

    @IsOptional()
    @ValidateNested()
    @Type(() => AttachmentDto)
    photo?: Attachment

    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    programName?: string[]

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    providedBy?: Reference

    @IsOptional()
    @IsString()
    publicKey?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    referralMethod?: CodeableConcept[]

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    serviceCategory?: CodeableConcept

    @IsOptional()
    @IsString()
    serviceName?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    serviceProvisionCode?: CodeableConcept[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => HealthcareServiceServiceTypeDto)
    serviceType?: HealthcareServiceServiceType[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ContactPointDto)
    telecom?: ContactPoint[]

  }
  export class ImagingObjectSelectionStudySeriesInstanceFramesDto implements ImagingObjectSelectionStudySeriesInstanceFrames {
    @IsNotEmpty()
    @IsArray()
    @IsNumber({}, { each: true })
    frameNumbers: number[]

    @IsNotEmpty()
    @IsString()
    url: string

  }
  export class ImagingObjectSelectionStudySeriesInstanceDto implements ImagingObjectSelectionStudySeriesInstance {
    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ImagingObjectSelectionStudySeriesInstanceFramesDto)
    frames?: ImagingObjectSelectionStudySeriesInstanceFrames[]

    @IsNotEmpty()
    @IsString()
    sopClass: string

    @IsNotEmpty()
    @IsString()
    uid: string

    @IsNotEmpty()
    @IsString()
    url: string

  }
  export class ImagingObjectSelectionStudySeriesDto implements ImagingObjectSelectionStudySeries {
    @IsNotEmpty()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ImagingObjectSelectionStudySeriesInstanceDto)
    instance: ImagingObjectSelectionStudySeriesInstance[]

    @IsOptional()
    @IsString()
    uid?: string

    @IsOptional()
    @IsString()
    url?: string

  }
  export class ImagingObjectSelectionStudyDto implements ImagingObjectSelectionStudy {
    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    imagingStudy?: Reference

    @IsNotEmpty()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ImagingObjectSelectionStudySeriesDto)
    series: ImagingObjectSelectionStudySeries[]

    @IsNotEmpty()
    @IsString()
    uid: string

    @IsOptional()
    @IsString()
    url?: string

  }
  export class ImagingObjectSelectionDto implements ImagingObjectSelection {
    @IsNotEmpty()
    @IsIn(["ImagingObjectSelection"])
    resourceType: "ImagingObjectSelection"

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    author?: Reference

    @IsOptional()
    @IsString()
    authoringTime?: string

    @IsOptional()
    @IsString()
    description?: string

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => ReferenceDto)
    patient: Reference

    @IsNotEmpty()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ImagingObjectSelectionStudyDto)
    study: ImagingObjectSelectionStudy[]

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    title: CodeableConcept

    @IsNotEmpty()
    @IsString()
    uid: string

  }
  export class ImagingStudySeriesInstanceDto implements ImagingStudySeriesInstance {
    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => AttachmentDto)
    content?: Attachment[]

    @IsOptional()
    @IsNumber()
    number?: number

    @IsNotEmpty()
    @IsString()
    sopClass: string

    @IsOptional()
    @IsString()
    title?: string

    @IsOptional()
    @IsString()
    type?: string

    @IsNotEmpty()
    @IsString()
    uid: string

  }
  export class ImagingStudySeriesDto implements ImagingStudySeries {
    @IsNotEmpty()
    @IsIn(["ONLINE", "OFFLINE", "NEARLINE", "UNAVAILABLE"])
    availability: "ONLINE" | "OFFLINE" | "NEARLINE" | "UNAVAILABLE"

    @IsOptional()
    @ValidateNested()
    @Type(() => CodingDto)
    bodySite?: Coding

    @IsOptional()
    @IsString()
    description?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ImagingStudySeriesInstanceDto)
    instance?: ImagingStudySeriesInstance[]

    @IsOptional()
    @ValidateNested()
    @Type(() => CodingDto)
    laterality?: Coding

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => CodingDto)
    modality: Coding

    @IsOptional()
    @IsNumber()
    number?: number

    @IsNotEmpty()
    @IsNumber()
    numberOfInstances: number

    @IsOptional()
    @IsString()
    started?: string

    @IsNotEmpty()
    @IsString()
    uid: string

    @IsOptional()
    @IsString()
    url?: string

  }
  export class ImagingStudyDto implements ImagingStudy {
    @IsNotEmpty()
    @IsIn(["ImagingStudy"])
    resourceType: "ImagingStudy"

    @IsOptional()
    @ValidateNested()
    @Type(() => IdentifierDto)
    accession?: Identifier

    @IsNotEmpty()
    @IsIn(["ONLINE", "OFFLINE", "NEARLINE", "UNAVAILABLE"])
    availability: "ONLINE" | "OFFLINE" | "NEARLINE" | "UNAVAILABLE"

    @IsOptional()
    @IsString()
    description?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => IdentifierDto)
    identifier?: Identifier[]

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    interpreter?: Reference

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodingDto)
    modalityList?: Coding[]

    @IsNotEmpty()
    @IsNumber()
    numberOfInstances: number

    @IsNotEmpty()
    @IsNumber()
    numberOfSeries: number

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    order?: Reference[]

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => ReferenceDto)
    patient: Reference

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    procedure?: Reference[]

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    referrer?: Reference

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ImagingStudySeriesDto)
    series?: ImagingStudySeries[]

    @IsOptional()
    @IsString()
    started?: string

    @IsNotEmpty()
    @IsString()
    uid: string

    @IsOptional()
    @IsString()
    url?: string

  }
  export class ImmunizationExplanationDto implements ImmunizationExplanation {
    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    reason?: CodeableConcept[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    reasonNotGiven?: CodeableConcept[]

  }
  export class ImmunizationReactionDto implements ImmunizationReaction {
    @IsOptional()
    @IsString()
    date?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    detail?: Reference

    @IsNotEmpty()
    @IsBoolean()
    reported: boolean

  }
  export class ImmunizationVaccinationProtocolDto implements ImmunizationVaccinationProtocol {
    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    authority?: Reference

    @IsOptional()
    @IsString()
    description?: string

    @IsNotEmpty()
    @IsNumber()
    doseSequence: number

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    doseStatus: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    doseStatusReason?: CodeableConcept

    @IsOptional()
    @IsString()
    series?: string

    @IsOptional()
    @IsNumber()
    seriesDoses?: number

    @IsNotEmpty()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    targetDisease: CodeableConcept[]

  }
  export class ImmunizationDto implements Immunization {
    @IsNotEmpty()
    @IsIn(["Immunization"])
    resourceType: "Immunization"

    @IsOptional()
    @IsString()
    date?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => QuantityDto)
    doseQuantity?: Quantity

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    encounter?: Reference

    @IsOptional()
    @IsString()
    expirationDate?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => ImmunizationExplanationDto)
    explanation?: ImmunizationExplanation

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => IdentifierDto)
    identifier?: Identifier[]

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    location?: Reference

    @IsOptional()
    @IsString()
    lotNumber?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    manufacturer?: Reference

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => AnnotationDto)
    note?: Annotation[]

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => ReferenceDto)
    patient: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    performer?: Reference

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ImmunizationReactionDto)
    reaction?: ImmunizationReaction[]

    @IsNotEmpty()
    @IsBoolean()
    reported: boolean

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    requester?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    route?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    site?: CodeableConcept

    @IsNotEmpty()
    @IsIn(["entered-in-error", "completed", "in-progress", "on-hold", "stopped"])
    status: "entered-in-error" | "completed" | "in-progress" | "on-hold" | "stopped"

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ImmunizationVaccinationProtocolDto)
    vaccinationProtocol?: ImmunizationVaccinationProtocol[]

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    vaccineCode: CodeableConcept

    @IsNotEmpty()
    @IsBoolean()
    wasNotGiven: boolean

  }
  export class ImmunizationRecommendationRecommendationDateCriterionDto implements ImmunizationRecommendationRecommendationDateCriterion {
    @IsNotEmpty()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    code: CodeableConcept

    @IsNotEmpty()
    @IsString()
    value: string

  }
  export class ImmunizationRecommendationRecommendationProtocolDto implements ImmunizationRecommendationRecommendationProtocol {
    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    authority?: Reference

    @IsOptional()
    @IsString()
    description?: string

    @IsOptional()
    @IsNumber()
    doseSequence?: number

    @IsOptional()
    @IsString()
    series?: string

  }
  export class ImmunizationRecommendationRecommendationDto implements ImmunizationRecommendationRecommendation {
    @IsNotEmpty()
    @IsString()
    date: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ImmunizationRecommendationRecommendationDateCriterionDto)
    dateCriterion?: ImmunizationRecommendationRecommendationDateCriterion[]

    @IsOptional()
    @IsNumber()
    doseNumber?: number

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    forecastStatus: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => ImmunizationRecommendationRecommendationProtocolDto)
    protocol?: ImmunizationRecommendationRecommendationProtocol

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    supportingImmunization?: Reference[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    supportingPatientInformation?: Reference[]

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    vaccineCode: CodeableConcept

  }
  export class ImmunizationRecommendationDto implements ImmunizationRecommendation {
    @IsNotEmpty()
    @IsIn(["ImmunizationRecommendation"])
    resourceType: "ImmunizationRecommendation"

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => IdentifierDto)
    identifier?: Identifier[]

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => ReferenceDto)
    patient: Reference

    @IsNotEmpty()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ImmunizationRecommendationRecommendationDto)
    recommendation: ImmunizationRecommendationRecommendation[]

  }
  export class ImplementationGuideContactDto implements ImplementationGuideContact {
    @IsOptional()
    @IsString()
    name?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ContactPointDto)
    telecom?: ContactPoint[]

  }
  export class ImplementationGuideDependencyDto implements ImplementationGuideDependency {
    @IsNotEmpty()
    @IsIn(["reference", "inclusion"])
    type: "reference" | "inclusion"

    @IsNotEmpty()
    @IsString()
    uri: string

  }
  export class ImplementationGuidePackageResourceDto implements ImplementationGuidePackageResource {
    @IsOptional()
    @IsString()
    acronym?: string

    @IsOptional()
    @IsString()
    description?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    exampleFor?: Reference

    @IsOptional()
    @IsString()
    name?: string

    @IsNotEmpty()
    @IsIn(["example", "terminology", "profile", "extension", "dictionary", "logical"])
    purpose: "example" | "terminology" | "profile" | "extension" | "dictionary" | "logical"

    @IsOptional()
    @IsString()
    sourceUri?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    sourceReference?: Reference

  }
  export class ImplementationGuidePackageDto implements ImplementationGuidePackage {
    @IsOptional()
    @IsString()
    description?: string

    @IsNotEmpty()
    @IsString()
    name: string

    @IsNotEmpty()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ImplementationGuidePackageResourceDto)
    resource: ImplementationGuidePackageResource[]

  }
  export class ImplementationGuideGlobalDto implements ImplementationGuideGlobal {
    @IsNotEmpty()
    @ValidateNested()
    @Type(() => ReferenceDto)
    profile: Reference

    @IsNotEmpty()
    @IsString()
    type: string

  }
  export class ImplementationGuidePageDto implements ImplementationGuidePage {
    @IsOptional()
    @IsString()
    format?: string

    @IsNotEmpty()
    @IsIn(["example", "include", "dictionary", "page", "list", "directory", "toc", "resource"])
    kind: "example" | "include" | "dictionary" | "page" | "list" | "directory" | "toc" | "resource"

    @IsNotEmpty()
    @IsString()
    name: string

    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    package?: string[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ImplementationGuidePageDto)
    page?: ImplementationGuidePage[]

    @IsNotEmpty()
    @IsString()
    source: string

    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    type?: string[]

  }
  export class ImplementationGuideDto implements ImplementationGuide {
    @IsNotEmpty()
    @IsIn(["ImplementationGuide"])
    resourceType: "ImplementationGuide"

    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    binary?: string[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ImplementationGuideContactDto)
    contact?: ImplementationGuideContact[]

    @IsOptional()
    @IsString()
    copyright?: string

    @IsOptional()
    @IsString()
    date?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ImplementationGuideDependencyDto)
    dependency?: ImplementationGuideDependency[]

    @IsOptional()
    @IsString()
    description?: string

    @IsNotEmpty()
    @IsBoolean()
    experimental: boolean

    @IsOptional()
    @IsString()
    fhirVersion?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ImplementationGuideGlobalDto)
    global?: ImplementationGuideGlobal[]

    @IsNotEmpty()
    @IsString()
    name: string

    @IsNotEmpty()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ImplementationGuidePackageDto)
    package: ImplementationGuidePackage[]

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => ImplementationGuidePageDto)
    page: ImplementationGuidePage

    @IsOptional()
    @IsString()
    publisher?: string

    @IsNotEmpty()
    @IsIn(["active", "draft", "retired"])
    status: "active" | "draft" | "retired"

    @IsNotEmpty()
    @IsString()
    url: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    useContext?: CodeableConcept[]

    @IsOptional()
    @IsString()
    version?: string

  }
  export class ListEntryDto implements ListEntry {
    @IsOptional()
    @IsString()
    date?: string

    @IsNotEmpty()
    @IsBoolean()
    deleted: boolean

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    flag?: CodeableConcept

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => ReferenceDto)
    item: Reference

  }
  export class ListDto implements List {
    @IsNotEmpty()
    @IsIn(["List"])
    resourceType: "List"

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    code?: CodeableConcept

    @IsOptional()
    @IsString()
    date?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    emptyReason?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    encounter?: Reference

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ListEntryDto)
    entry?: ListEntry[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => IdentifierDto)
    identifier?: Identifier[]

    @IsNotEmpty()
    @IsIn(["working", "snapshot", "changes"])
    mode: "working" | "snapshot" | "changes"

    @IsOptional()
    @IsString()
    note?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    orderedBy?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    source?: Reference

    @IsNotEmpty()
    @IsIn(["entered-in-error", "retired", "current"])
    status: "entered-in-error" | "retired" | "current"

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    subject?: Reference

    @IsOptional()
    @IsString()
    title?: string

  }
  export class LocationPositionDto implements LocationPosition {
    @IsOptional()
    @IsNumber()
    altitude?: number

    @IsNotEmpty()
    @IsNumber()
    latitude: number

    @IsNotEmpty()
    @IsNumber()
    longitude: number

  }
  export class LocationDto implements Location {
    @IsNotEmpty()
    @IsIn(["Location"])
    resourceType: "Location"

    @IsOptional()
    @ValidateNested()
    @Type(() => AddressDto)
    address?: Address

    @IsOptional()
    @IsString()
    description?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => IdentifierDto)
    identifier?: Identifier[]

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    managingOrganization?: Reference

    @IsNotEmpty()
    @IsIn(["instance", "kind"])
    mode: "instance" | "kind"

    @IsOptional()
    @IsString()
    name?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    partOf?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    physicalType?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => LocationPositionDto)
    position?: LocationPosition

    @IsNotEmpty()
    @IsIn(["active", "inactive", "suspended"])
    status: "active" | "inactive" | "suspended"

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ContactPointDto)
    telecom?: ContactPoint[]

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    type?: CodeableConcept

  }
  export class MediaDto implements Media {
    @IsNotEmpty()
    @IsIn(["Media"])
    resourceType: "Media"

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => AttachmentDto)
    content: Attachment

    @IsOptional()
    @IsString()
    deviceName?: string

    @IsOptional()
    @IsNumber()
    duration?: number

    @IsOptional()
    @IsNumber()
    frames?: number

    @IsOptional()
    @IsNumber()
    height?: number

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => IdentifierDto)
    identifier?: Identifier[]

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    operator?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    subject?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    subtype?: CodeableConcept

    @IsNotEmpty()
    @IsIn(["photo", "video", "audio"])
    type: "photo" | "video" | "audio"

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    view?: CodeableConcept

    @IsOptional()
    @IsNumber()
    width?: number

  }
  export class MedicationProductIngredientDto implements MedicationProductIngredient {
    @IsOptional()
    @ValidateNested()
    @Type(() => RatioDto)
    amount?: Ratio

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => ReferenceDto)
    item: Reference

  }
  export class MedicationProductBatchDto implements MedicationProductBatch {
    @IsOptional()
    @IsString()
    expirationDate?: string

    @IsOptional()
    @IsString()
    lotNumber?: string

  }
  export class MedicationProductDto implements MedicationProduct {
    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => MedicationProductBatchDto)
    batch?: MedicationProductBatch[]

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    form?: CodeableConcept

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => MedicationProductIngredientDto)
    ingredient?: MedicationProductIngredient[]

  }
  export class MedicationPackageContentDto implements MedicationPackageContent {
    @IsOptional()
    @ValidateNested()
    @Type(() => QuantityDto)
    amount?: Quantity

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => ReferenceDto)
    item: Reference

  }
  export class MedicationPackageDto implements MedicationPackage {
    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    container?: CodeableConcept

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => MedicationPackageContentDto)
    content?: MedicationPackageContent[]

  }
  export class MedicationDto implements Medication {
    @IsNotEmpty()
    @IsIn(["Medication"])
    resourceType: "Medication"

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    code?: CodeableConcept

    @IsNotEmpty()
    @IsBoolean()
    isBrand: boolean

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    manufacturer?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => MedicationPackageDto)
    package?: MedicationPackage

    @IsOptional()
    @ValidateNested()
    @Type(() => MedicationProductDto)
    product?: MedicationProduct

  }
  export class MedicationAdministrationDosageDto implements MedicationAdministrationDosage {
    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    method?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => QuantityDto)
    quantity?: Quantity

    @IsOptional()
    @ValidateNested()
    @Type(() => RatioDto)
    rateRatio?: Ratio

    @IsOptional()
    @ValidateNested()
    @Type(() => RangeDto)
    rateRange?: Range

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    route?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    siteCodeableConcept?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    siteReference?: Reference

    @IsOptional()
    @IsString()
    text?: string

  }
  export class MedicationAdministrationDto implements MedicationAdministration {
    @IsNotEmpty()
    @IsIn(["MedicationAdministration"])
    resourceType: "MedicationAdministration"

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    device?: Reference[]

    @IsOptional()
    @ValidateNested()
    @Type(() => MedicationAdministrationDosageDto)
    dosage?: MedicationAdministrationDosage

    @IsOptional()
    @IsString()
    effectiveTimeDateTime?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => PeriodDto)
    effectiveTimePeriod?: Period

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    encounter?: Reference

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => IdentifierDto)
    identifier?: Identifier[]

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    medicationCodeableConcept?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    medicationReference?: Reference

    @IsOptional()
    @IsString()
    note?: string

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => ReferenceDto)
    patient: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    practitioner?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    prescription?: Reference

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    reasonGiven?: CodeableConcept[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    reasonNotGiven?: CodeableConcept[]

    @IsNotEmpty()
    @IsIn(["entered-in-error", "completed", "in-progress", "on-hold", "stopped"])
    status: "entered-in-error" | "completed" | "in-progress" | "on-hold" | "stopped"

    @IsNotEmpty()
    @IsBoolean()
    wasNotGiven: boolean

  }
  export class MedicationDispenseDosageInstructionDto implements MedicationDispenseDosageInstruction {
    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    additionalInstructions?: CodeableConcept

    @IsNotEmpty()
    @IsBoolean()
    asNeededBoolean: boolean

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    asNeededCodeableConcept?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => RangeDto)
    doseRange?: Range

    @IsOptional()
    @ValidateNested()
    @Type(() => QuantityDto)
    doseQuantity?: Quantity

    @IsOptional()
    @ValidateNested()
    @Type(() => RatioDto)
    maxDosePerPeriod?: Ratio

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    method?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => RatioDto)
    rateRatio?: Ratio

    @IsOptional()
    @ValidateNested()
    @Type(() => RangeDto)
    rateRange?: Range

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    route?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    siteCodeableConcept?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    siteReference?: Reference

    @IsOptional()
    @IsString()
    text?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => TimingDto)
    timing?: Timing

  }
  export class MedicationDispenseSubstitutionDto implements MedicationDispenseSubstitution {
    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    reason?: CodeableConcept[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    responsibleParty?: Reference[]

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    type: CodeableConcept

  }
  export class MedicationDispenseDto implements MedicationDispense {
    @IsNotEmpty()
    @IsIn(["MedicationDispense"])
    resourceType: "MedicationDispense"

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    authorizingPrescription?: Reference[]

    @IsOptional()
    @ValidateNested()
    @Type(() => QuantityDto)
    daysSupply?: Quantity

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    destination?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    dispenser?: Reference

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => MedicationDispenseDosageInstructionDto)
    dosageInstruction?: MedicationDispenseDosageInstruction[]

    @IsOptional()
    @ValidateNested()
    @Type(() => IdentifierDto)
    identifier?: Identifier

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    medicationCodeableConcept?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    medicationReference?: Reference

    @IsOptional()
    @IsString()
    note?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    patient?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => QuantityDto)
    quantity?: Quantity

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    receiver?: Reference[]

    @IsNotEmpty()
    @IsIn(["entered-in-error", "completed", "in-progress", "on-hold", "stopped"])
    status: "entered-in-error" | "completed" | "in-progress" | "on-hold" | "stopped"

    @IsOptional()
    @ValidateNested()
    @Type(() => MedicationDispenseSubstitutionDto)
    substitution?: MedicationDispenseSubstitution

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    type?: CodeableConcept

    @IsOptional()
    @IsString()
    whenHandedOver?: string

    @IsOptional()
    @IsString()
    whenPrepared?: string

  }
  export class MedicationOrderDosageInstructionDto implements MedicationOrderDosageInstruction {
    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    additionalInstructions?: CodeableConcept

    @IsNotEmpty()
    @IsBoolean()
    asNeededBoolean: boolean

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    asNeededCodeableConcept?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => RangeDto)
    doseRange?: Range

    @IsOptional()
    @ValidateNested()
    @Type(() => QuantityDto)
    doseQuantity?: Quantity

    @IsOptional()
    @ValidateNested()
    @Type(() => RatioDto)
    maxDosePerPeriod?: Ratio

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    method?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => RatioDto)
    rateRatio?: Ratio

    @IsOptional()
    @ValidateNested()
    @Type(() => RangeDto)
    rateRange?: Range

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    route?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    siteCodeableConcept?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    siteReference?: Reference

    @IsOptional()
    @IsString()
    text?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => TimingDto)
    timing?: Timing

  }
  export class MedicationOrderDispenseRequestDto implements MedicationOrderDispenseRequest {
    @IsOptional()
    @ValidateNested()
    @Type(() => QuantityDto)
    expectedSupplyDuration?: Quantity

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    medicationCodeableConcept?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    medicationReference?: Reference

    @IsOptional()
    @IsNumber()
    numberOfRepeatsAllowed?: number

    @IsOptional()
    @ValidateNested()
    @Type(() => QuantityDto)
    quantity?: Quantity

    @IsOptional()
    @ValidateNested()
    @Type(() => PeriodDto)
    validityPeriod?: Period

  }
  export class MedicationOrderSubstitutionDto implements MedicationOrderSubstitution {
    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    reason?: CodeableConcept

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    type: CodeableConcept

  }
  export class MedicationOrderDto implements MedicationOrder {
    @IsNotEmpty()
    @IsIn(["MedicationOrder"])
    resourceType: "MedicationOrder"

    @IsOptional()
    @IsString()
    dateEnded?: string

    @IsOptional()
    @IsString()
    dateWritten?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => MedicationOrderDispenseRequestDto)
    dispenseRequest?: MedicationOrderDispenseRequest

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => MedicationOrderDosageInstructionDto)
    dosageInstruction?: MedicationOrderDosageInstruction[]

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    encounter?: Reference

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => IdentifierDto)
    identifier?: Identifier[]

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    medicationCodeableConcept?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    medicationReference?: Reference

    @IsOptional()
    @IsString()
    note?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    patient?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    prescriber?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    priorPrescription?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    reasonCodeableConcept?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    reasonReference?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    reasonEnded?: CodeableConcept

    @IsNotEmpty()
    @IsIn(["active", "entered-in-error", "completed", "on-hold", "draft", "stopped"])
    status: "active" | "entered-in-error" | "completed" | "on-hold" | "draft" | "stopped"

    @IsOptional()
    @ValidateNested()
    @Type(() => MedicationOrderSubstitutionDto)
    substitution?: MedicationOrderSubstitution

  }
  export class MedicationStatementDosageDto implements MedicationStatementDosage {
    @IsNotEmpty()
    @IsBoolean()
    asNeededBoolean: boolean

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    asNeededCodeableConcept?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => RatioDto)
    maxDosePerPeriod?: Ratio

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    method?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => QuantityDto)
    quantityQuantity?: Quantity

    @IsOptional()
    @ValidateNested()
    @Type(() => RangeDto)
    quantityRange?: Range

    @IsOptional()
    @ValidateNested()
    @Type(() => RatioDto)
    rateRatio?: Ratio

    @IsOptional()
    @ValidateNested()
    @Type(() => RangeDto)
    rateRange?: Range

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    route?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    siteCodeableConcept?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    siteReference?: Reference

    @IsOptional()
    @IsString()
    text?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => TimingDto)
    timing?: Timing

  }
  export class MedicationStatementDto implements MedicationStatement {
    @IsNotEmpty()
    @IsIn(["MedicationStatement"])
    resourceType: "MedicationStatement"

    @IsOptional()
    @IsString()
    dateAsserted?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => MedicationStatementDosageDto)
    dosage?: MedicationStatementDosage[]

    @IsOptional()
    @IsString()
    effectiveDateTime?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => PeriodDto)
    effectivePeriod?: Period

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => IdentifierDto)
    identifier?: Identifier[]

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    informationSource?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    medicationCodeableConcept?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    medicationReference?: Reference

    @IsOptional()
    @IsString()
    note?: string

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => ReferenceDto)
    patient: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    reasonForUseCodeableConcept?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    reasonForUseReference?: Reference

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    reasonNotTaken?: CodeableConcept[]

    @IsNotEmpty()
    @IsIn(["active", "entered-in-error", "completed", "intended"])
    status: "active" | "entered-in-error" | "completed" | "intended"

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    supportingInformation?: Reference[]

    @IsNotEmpty()
    @IsBoolean()
    wasNotTaken: boolean

  }
  export class MessageHeaderResponseDto implements MessageHeaderResponse {
    @IsNotEmpty()
    @IsIn(["ok", "transient-error", "fatal-error"])
    code: "ok" | "transient-error" | "fatal-error"

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    details?: Reference

    @IsNotEmpty()
    @IsString()
    identifier: string

  }
  export class MessageHeaderSourceDto implements MessageHeaderSource {
    @IsOptional()
    @ValidateNested()
    @Type(() => ContactPointDto)
    contact?: ContactPoint

    @IsNotEmpty()
    @IsString()
    endpoint: string

    @IsOptional()
    @IsString()
    name?: string

    @IsOptional()
    @IsString()
    software?: string

    @IsOptional()
    @IsString()
    version?: string

  }
  export class MessageHeaderDestinationDto implements MessageHeaderDestination {
    @IsNotEmpty()
    @IsString()
    endpoint: string

    @IsOptional()
    @IsString()
    name?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    target?: Reference

  }
  export class MessageHeaderDto implements MessageHeader {
    @IsNotEmpty()
    @IsIn(["MessageHeader"])
    resourceType: "MessageHeader"

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    author?: Reference

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    data?: Reference[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => MessageHeaderDestinationDto)
    destination?: MessageHeaderDestination[]

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    enterer?: Reference

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => CodingDto)
    event: Coding

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    reason?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    receiver?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => MessageHeaderResponseDto)
    response?: MessageHeaderResponse

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    responsible?: Reference

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => MessageHeaderSourceDto)
    source: MessageHeaderSource

    @IsNotEmpty()
    @IsString()
    timestamp: string

  }
  export class NamingSystemContactDto implements NamingSystemContact {
    @IsOptional()
    @IsString()
    name?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ContactPointDto)
    telecom?: ContactPoint[]

  }
  export class NamingSystemUniqueIdDto implements NamingSystemUniqueId {
    @IsOptional()
    @ValidateNested()
    @Type(() => PeriodDto)
    period?: Period

    @IsNotEmpty()
    @IsBoolean()
    preferred: boolean

    @IsNotEmpty()
    @IsIn(["other", "uri", "oid", "uuid"])
    type: "other" | "uri" | "oid" | "uuid"

    @IsNotEmpty()
    @IsString()
    value: string

  }
  export class NamingSystemDto implements NamingSystem {
    @IsNotEmpty()
    @IsIn(["NamingSystem"])
    resourceType: "NamingSystem"

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => NamingSystemContactDto)
    contact?: NamingSystemContact[]

    @IsNotEmpty()
    @IsString()
    date: string

    @IsOptional()
    @IsString()
    description?: string

    @IsNotEmpty()
    @IsIn(["codesystem", "identifier", "root"])
    kind: "codesystem" | "identifier" | "root"

    @IsNotEmpty()
    @IsString()
    name: string

    @IsOptional()
    @IsString()
    publisher?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    replacedBy?: Reference

    @IsOptional()
    @IsString()
    responsible?: string

    @IsNotEmpty()
    @IsIn(["active", "draft", "retired"])
    status: "active" | "draft" | "retired"

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    type?: CodeableConcept

    @IsNotEmpty()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => NamingSystemUniqueIdDto)
    uniqueId: NamingSystemUniqueId[]

    @IsOptional()
    @IsString()
    usage?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    useContext?: CodeableConcept[]

  }
  export class NutritionOrderOralDietNutrientDto implements NutritionOrderOralDietNutrient {
    @IsOptional()
    @ValidateNested()
    @Type(() => QuantityDto)
    amount?: Quantity

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    modifier?: CodeableConcept

  }
  export class NutritionOrderOralDietTextureDto implements NutritionOrderOralDietTexture {
    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    foodType?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    modifier?: CodeableConcept

  }
  export class NutritionOrderOralDietDto implements NutritionOrderOralDiet {
    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    fluidConsistencyType?: CodeableConcept[]

    @IsOptional()
    @IsString()
    instruction?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => NutritionOrderOralDietNutrientDto)
    nutrient?: NutritionOrderOralDietNutrient[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => TimingDto)
    schedule?: Timing[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => NutritionOrderOralDietTextureDto)
    texture?: NutritionOrderOralDietTexture[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    type?: CodeableConcept[]

  }
  export class NutritionOrderSupplementDto implements NutritionOrderSupplement {
    @IsOptional()
    @IsString()
    instruction?: string

    @IsOptional()
    @IsString()
    productName?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => QuantityDto)
    quantity?: Quantity

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => TimingDto)
    schedule?: Timing[]

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    type?: CodeableConcept

  }
  export class NutritionOrderEnteralFormulaAdministrationDto implements NutritionOrderEnteralFormulaAdministration {
    @IsOptional()
    @ValidateNested()
    @Type(() => QuantityDto)
    quantity?: Quantity

    @IsOptional()
    @ValidateNested()
    @Type(() => QuantityDto)
    rateQuantity?: Quantity

    @IsOptional()
    @ValidateNested()
    @Type(() => RatioDto)
    rateRatio?: Ratio

    @IsOptional()
    @ValidateNested()
    @Type(() => TimingDto)
    schedule?: Timing

  }
  export class NutritionOrderEnteralFormulaDto implements NutritionOrderEnteralFormula {
    @IsOptional()
    @IsString()
    additiveProductName?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    additiveType?: CodeableConcept

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => NutritionOrderEnteralFormulaAdministrationDto)
    administration?: NutritionOrderEnteralFormulaAdministration[]

    @IsOptional()
    @IsString()
    administrationInstruction?: string

    @IsOptional()
    @IsString()
    baseFormulaProductName?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    baseFormulaType?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => QuantityDto)
    caloricDensity?: Quantity

    @IsOptional()
    @ValidateNested()
    @Type(() => QuantityDto)
    maxVolumeToDeliver?: Quantity

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    routeofAdministration?: CodeableConcept

  }
  export class NutritionOrderDto implements NutritionOrder {
    @IsNotEmpty()
    @IsIn(["NutritionOrder"])
    resourceType: "NutritionOrder"

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    allergyIntolerance?: Reference[]

    @IsNotEmpty()
    @IsString()
    dateTime: string

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    encounter?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => NutritionOrderEnteralFormulaDto)
    enteralFormula?: NutritionOrderEnteralFormula

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    excludeFoodModifier?: CodeableConcept[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    foodPreferenceModifier?: CodeableConcept[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => IdentifierDto)
    identifier?: Identifier[]

    @IsOptional()
    @ValidateNested()
    @Type(() => NutritionOrderOralDietDto)
    oralDiet?: NutritionOrderOralDiet

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    orderer?: Reference

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => ReferenceDto)
    patient: Reference

    @IsNotEmpty()
    @IsIn(["active", "proposed", "cancelled", "completed", "on-hold", "draft", "planned", "requested"])
    status: "active" | "proposed" | "cancelled" | "completed" | "on-hold" | "draft" | "planned" | "requested"

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => NutritionOrderSupplementDto)
    supplement?: NutritionOrderSupplement[]

  }
  export class ObservationReferenceRangeDto implements ObservationReferenceRange {
    @IsOptional()
    @ValidateNested()
    @Type(() => RangeDto)
    age?: Range

    @IsOptional()
    @ValidateNested()
    @Type(() => QuantityDto)
    high?: Quantity

    @IsOptional()
    @ValidateNested()
    @Type(() => QuantityDto)
    low?: Quantity

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    meaning?: CodeableConcept

    @IsOptional()
    @IsString()
    text?: string

  }
  export class ObservationRelatedDto implements ObservationRelated {
    @IsNotEmpty()
    @ValidateNested()
    @Type(() => ReferenceDto)
    target: Reference

    @IsNotEmpty()
    @IsIn(["replaces", "has-member", "derived-from", "sequel-to", "qualified-by", "interfered-by"])
    type: "replaces" | "has-member" | "derived-from" | "sequel-to" | "qualified-by" | "interfered-by"

  }
  export class ObservationComponentDto implements ObservationComponent {
    @IsNotEmpty()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    code: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    dataAbsentReason?: CodeableConcept

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ObservationReferenceRangeDto)
    referenceRange?: ObservationReferenceRange[]

    @IsOptional()
    @ValidateNested()
    @Type(() => QuantityDto)
    valueQuantity?: Quantity

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    valueCodeableConcept?: CodeableConcept

    @IsOptional()
    @IsString()
    valueString?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => RangeDto)
    valueRange?: Range

    @IsOptional()
    @ValidateNested()
    @Type(() => RatioDto)
    valueRatio?: Ratio

    @IsOptional()
    @ValidateNested()
    @Type(() => SampledDataDto)
    valueSampledData?: SampledData

    @IsOptional()
    @ValidateNested()
    @Type(() => AttachmentDto)
    valueAttachment?: Attachment

    @IsOptional()
    @IsString()
    valueTime?: string

    @IsOptional()
    @IsString()
    valueDateTime?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => PeriodDto)
    valuePeriod?: Period

  }
  export class ObservationDto implements Observation {
    @IsNotEmpty()
    @IsIn(["Observation"])
    resourceType: "Observation"

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    bodySite?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    category?: CodeableConcept

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    code: CodeableConcept

    @IsOptional()
    @IsString()
    comments?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ObservationComponentDto)
    component?: ObservationComponent[]

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    dataAbsentReason?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    device?: Reference

    @IsOptional()
    @IsString()
    effectiveDateTime?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => PeriodDto)
    effectivePeriod?: Period

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    encounter?: Reference

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => IdentifierDto)
    identifier?: Identifier[]

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    interpretation?: CodeableConcept

    @IsOptional()
    @IsString()
    issued?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    method?: CodeableConcept

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    performer?: Reference[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ObservationReferenceRangeDto)
    referenceRange?: ObservationReferenceRange[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ObservationRelatedDto)
    related?: ObservationRelated[]

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    specimen?: Reference

    @IsNotEmpty()
    @IsIn(["entered-in-error", "cancelled", "preliminary", "final", "amended", "unknown", "registered"])
    status: "entered-in-error" | "cancelled" | "preliminary" | "final" | "amended" | "unknown" | "registered"

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    subject?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => QuantityDto)
    valueQuantity?: Quantity

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    valueCodeableConcept?: CodeableConcept

    @IsOptional()
    @IsString()
    valueString?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => RangeDto)
    valueRange?: Range

    @IsOptional()
    @ValidateNested()
    @Type(() => RatioDto)
    valueRatio?: Ratio

    @IsOptional()
    @ValidateNested()
    @Type(() => SampledDataDto)
    valueSampledData?: SampledData

    @IsOptional()
    @ValidateNested()
    @Type(() => AttachmentDto)
    valueAttachment?: Attachment

    @IsOptional()
    @IsString()
    valueTime?: string

    @IsOptional()
    @IsString()
    valueDateTime?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => PeriodDto)
    valuePeriod?: Period

  }
  export class OperationDefinitionContactDto implements OperationDefinitionContact {
    @IsOptional()
    @IsString()
    name?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ContactPointDto)
    telecom?: ContactPoint[]

  }
  export class OperationDefinitionParameterBindingDto implements OperationDefinitionParameterBinding {
    @IsNotEmpty()
    @IsIn(["required", "extensible", "preferred", "example"])
    strength: "required" | "extensible" | "preferred" | "example"

    @IsOptional()
    @IsString()
    valueSetUri?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    valueSetReference?: Reference

  }
  export class OperationDefinitionParameterDto implements OperationDefinitionParameter {
    @IsOptional()
    @ValidateNested()
    @Type(() => OperationDefinitionParameterBindingDto)
    binding?: OperationDefinitionParameterBinding

    @IsOptional()
    @IsString()
    documentation?: string

    @IsNotEmpty()
    @IsString()
    max: string

    @IsNotEmpty()
    @IsNumber()
    min: number

    @IsNotEmpty()
    @IsString()
    name: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => OperationDefinitionParameterDto)
    part?: OperationDefinitionParameter[]

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    profile?: Reference

    @IsOptional()
    @IsString()
    type?: string

    @IsNotEmpty()
    @IsIn(["in", "out"])
    use: "in" | "out"

  }
  export class OperationDefinitionDto implements OperationDefinition {
    @IsNotEmpty()
    @IsIn(["OperationDefinition"])
    resourceType: "OperationDefinition"

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    base?: Reference

    @IsNotEmpty()
    @IsString()
    code: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => OperationDefinitionContactDto)
    contact?: OperationDefinitionContact[]

    @IsOptional()
    @IsString()
    date?: string

    @IsOptional()
    @IsString()
    description?: string

    @IsNotEmpty()
    @IsBoolean()
    experimental: boolean

    @IsNotEmpty()
    @IsBoolean()
    idempotent: boolean

    @IsNotEmpty()
    @IsBoolean()
    instance: boolean

    @IsNotEmpty()
    @IsIn(["operation", "query"])
    kind: "operation" | "query"

    @IsNotEmpty()
    @IsString()
    name: string

    @IsOptional()
    @IsString()
    notes?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => OperationDefinitionParameterDto)
    parameter?: OperationDefinitionParameter[]

    @IsOptional()
    @IsString()
    publisher?: string

    @IsOptional()
    @IsString()
    requirements?: string

    @IsNotEmpty()
    @IsIn(["active", "draft", "retired"])
    status: "active" | "draft" | "retired"

    @IsNotEmpty()
    @IsBoolean()
    system: boolean

    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    type?: string[]

    @IsOptional()
    @IsString()
    url?: string

    @IsOptional()
    @IsString()
    version?: string

  }
  export class OperationOutcomeIssueDto implements OperationOutcomeIssue {
    @IsNotEmpty()
    @IsString()
    code: string

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    details?: CodeableConcept

    @IsOptional()
    @IsString()
    diagnostics?: string

    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    location?: string[]

    @IsNotEmpty()
    @IsIn(["error", "warning", "fatal", "information"])
    severity: "error" | "warning" | "fatal" | "information"

  }
  export class OperationOutcomeDto implements OperationOutcome {
    @IsNotEmpty()
    @IsIn(["OperationOutcome"])
    resourceType: "OperationOutcome"

    @IsNotEmpty()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => OperationOutcomeIssueDto)
    issue: OperationOutcomeIssue[]

  }
  export class OrderWhenDto implements OrderWhen {
    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    code?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => TimingDto)
    schedule?: Timing

  }
  export class OrderDto implements Order {
    @IsNotEmpty()
    @IsIn(["Order"])
    resourceType: "Order"

    @IsOptional()
    @IsString()
    date?: string

    @IsNotEmpty()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    detail: Reference[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => IdentifierDto)
    identifier?: Identifier[]

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    reasonCodeableConcept?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    reasonReference?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    source?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    subject?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    target?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => OrderWhenDto)
    when?: OrderWhen

  }
  export class OrderResponseDto implements OrderResponse {
    @IsNotEmpty()
    @IsIn(["OrderResponse"])
    resourceType: "OrderResponse"

    @IsOptional()
    @IsString()
    date?: string

    @IsOptional()
    @IsString()
    description?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    fulfillment?: Reference[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => IdentifierDto)
    identifier?: Identifier[]

    @IsNotEmpty()
    @IsIn(["error", "accepted", "pending", "cancelled", "completed", "rejected", "aborted", "review", "replaced"])
    orderStatus: "error" | "accepted" | "pending" | "cancelled" | "completed" | "rejected" | "aborted" | "review" | "replaced"

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => ReferenceDto)
    request: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    who?: Reference

  }
  export class OrganizationContactDto implements OrganizationContact {
    @IsOptional()
    @ValidateNested()
    @Type(() => AddressDto)
    address?: Address

    @IsOptional()
    @ValidateNested()
    @Type(() => HumanNameDto)
    name?: HumanName

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    purpose?: CodeableConcept

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ContactPointDto)
    telecom?: ContactPoint[]

  }
  export class OrganizationDto implements Organization {
    @IsNotEmpty()
    @IsIn(["Organization"])
    resourceType: "Organization"

    @IsNotEmpty()
    @IsBoolean()
    active: boolean

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => AddressDto)
    address?: Address[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => OrganizationContactDto)
    contact?: OrganizationContact[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => IdentifierDto)
    identifier?: Identifier[]

    @IsOptional()
    @IsString()
    name?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    partOf?: Reference

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ContactPointDto)
    telecom?: ContactPoint[]

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    type?: CodeableConcept

  }
  export class ParametersParameterDto implements ParametersParameter {
    @IsNotEmpty()
    @IsString()
    name: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ParametersParameterDto)
    part?: ParametersParameter[]

    @IsNotEmpty()
    resource: Account | AllergyIntolerance | Appointment | AppointmentResponse | AuditEvent | Basic | Binary | BodySite | Bundle<FhirResource> | CarePlan | Claim | ClaimResponse | ClinicalImpression | Communication | CommunicationRequest | Composition | ConceptMap | Condition | Conformance | Contract | Coverage | DataElement | DetectedIssue | Device | DeviceComponent | DeviceMetric | DeviceUseRequest | DeviceUseStatement | DiagnosticOrder | DiagnosticReport | DocumentManifest | DocumentReference | EligibilityRequest | EligibilityResponse | Encounter | EnrollmentRequest | EnrollmentResponse | EpisodeOfCare | ExplanationOfBenefit | FamilyMemberHistory | Flag | Goal | Group | HealthcareService | ImagingObjectSelection | ImagingStudy | Immunization | ImmunizationRecommendation | ImplementationGuide | List | Location | Media | Medication | MedicationAdministration | MedicationDispense | MedicationOrder | MedicationStatement | MessageHeader | NamingSystem | NutritionOrder | Observation | OperationDefinition | OperationOutcome | Order | OrderResponse | Organization | Parameters | Patient | PaymentNotice | PaymentReconciliation | Person | Practitioner | Procedure | ProcedureRequest | ProcessRequest | ProcessResponse | Provenance | Questionnaire | QuestionnaireResponse | ReferralRequest | RelatedPerson | RiskAssessment | Schedule | SearchParameter | Slot | Specimen | StructureDefinition | Subscription | Substance | SupplyDelivery | SupplyRequest | TestScript | ValueSet | VisionPrescription

    @IsNotEmpty()
    @IsBoolean()
    valueBoolean: boolean

    @IsOptional()
    @IsNumber()
    valueInteger?: number

    @IsOptional()
    @IsNumber()
    valueDecimal?: number

    @IsOptional()
    @IsString()
    valueBase64Binary?: string

    @IsOptional()
    @IsString()
    valueInstant?: string

    @IsOptional()
    @IsString()
    valueString?: string

    @IsOptional()
    @IsString()
    valueUri?: string

    @IsOptional()
    @IsString()
    valueDate?: string

    @IsOptional()
    @IsString()
    valueDateTime?: string

    @IsOptional()
    @IsString()
    valueTime?: string

    @IsOptional()
    @IsString()
    valueCode?: string

    @IsOptional()
    @IsString()
    valueOid?: string

    @IsOptional()
    @IsString()
    valueId?: string

    @IsOptional()
    @IsNumber()
    valueUnsignedInt?: number

    @IsOptional()
    @IsNumber()
    valuePositiveInt?: number

    @IsOptional()
    @IsString()
    valueMarkdown?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => AnnotationDto)
    valueAnnotation?: Annotation

    @IsOptional()
    @ValidateNested()
    @Type(() => AttachmentDto)
    valueAttachment?: Attachment

    @IsOptional()
    @ValidateNested()
    @Type(() => IdentifierDto)
    valueIdentifier?: Identifier

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    valueCodeableConcept?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => CodingDto)
    valueCoding?: Coding

    @IsOptional()
    @ValidateNested()
    @Type(() => QuantityDto)
    valueQuantity?: Quantity

    @IsOptional()
    @ValidateNested()
    @Type(() => RangeDto)
    valueRange?: Range

    @IsOptional()
    @ValidateNested()
    @Type(() => PeriodDto)
    valuePeriod?: Period

    @IsOptional()
    @ValidateNested()
    @Type(() => RatioDto)
    valueRatio?: Ratio

    @IsOptional()
    @ValidateNested()
    @Type(() => SampledDataDto)
    valueSampledData?: SampledData

    @IsOptional()
    @ValidateNested()
    @Type(() => SignatureDto)
    valueSignature?: Signature

    @IsOptional()
    @ValidateNested()
    @Type(() => HumanNameDto)
    valueHumanName?: HumanName

    @IsOptional()
    @ValidateNested()
    @Type(() => AddressDto)
    valueAddress?: Address

    @IsOptional()
    @ValidateNested()
    @Type(() => ContactPointDto)
    valueContactPoint?: ContactPoint

    @IsOptional()
    @ValidateNested()
    @Type(() => TimingDto)
    valueTiming?: Timing

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    valueReference?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => MetaDto)
    valueMeta?: Meta

  }
  export class ParametersDto implements Parameters {
    @IsNotEmpty()
    @IsIn(["Parameters"])
    resourceType: "Parameters"

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ParametersParameterDto)
    parameter?: ParametersParameter[]

  }
  export class PatientContactDto implements PatientContact {
    @IsOptional()
    @ValidateNested()
    @Type(() => AddressDto)
    address?: Address

    @IsNotEmpty()
    @IsIn(["other", "unknown", "male", "female"])
    gender: "other" | "unknown" | "male" | "female"

    @IsOptional()
    @ValidateNested()
    @Type(() => HumanNameDto)
    name?: HumanName

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    organization?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => PeriodDto)
    period?: Period

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    relationship?: CodeableConcept[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ContactPointDto)
    telecom?: ContactPoint[]

  }
  export class PatientAnimalDto implements PatientAnimal {
    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    breed?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    genderStatus?: CodeableConcept

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    species: CodeableConcept

  }
  export class PatientCommunicationDto implements PatientCommunication {
    @IsNotEmpty()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    language: CodeableConcept

    @IsNotEmpty()
    @IsBoolean()
    preferred: boolean

  }
  export class PatientLinkDto implements PatientLink {
    @IsNotEmpty()
    @ValidateNested()
    @Type(() => ReferenceDto)
    other: Reference

    @IsNotEmpty()
    @IsIn(["replace", "refer", "seealso"])
    type: "replace" | "refer" | "seealso"

  }
  export class PatientDto implements Patient {
    @IsNotEmpty()
    @IsIn(["Patient"])
    resourceType: "Patient"

    @IsNotEmpty()
    @IsBoolean()
    active: boolean

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => AddressDto)
    address?: Address[]

    @IsOptional()
    @ValidateNested()
    @Type(() => PatientAnimalDto)
    animal?: PatientAnimal

    @IsOptional()
    @IsString()
    birthDate?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    careProvider?: Reference[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => PatientCommunicationDto)
    communication?: PatientCommunication[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => PatientContactDto)
    contact?: PatientContact[]

    @IsNotEmpty()
    @IsBoolean()
    deceasedBoolean: boolean

    @IsOptional()
    @IsString()
    deceasedDateTime?: string

    @IsNotEmpty()
    @IsIn(["other", "unknown", "male", "female"])
    gender: "other" | "unknown" | "male" | "female"

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => IdentifierDto)
    identifier?: Identifier[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => PatientLinkDto)
    link?: PatientLink[]

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    managingOrganization?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    maritalStatus?: CodeableConcept

    @IsNotEmpty()
    @IsBoolean()
    multipleBirthBoolean: boolean

    @IsOptional()
    @IsNumber()
    multipleBirthInteger?: number

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => HumanNameDto)
    name?: HumanName[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => AttachmentDto)
    photo?: Attachment[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ContactPointDto)
    telecom?: ContactPoint[]

  }
  export class PaymentNoticeDto implements PaymentNotice {
    @IsNotEmpty()
    @IsIn(["PaymentNotice"])
    resourceType: "PaymentNotice"

    @IsOptional()
    @IsString()
    created?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => IdentifierDto)
    identifier?: Identifier[]

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    organization?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => CodingDto)
    originalRuleset?: Coding

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => CodingDto)
    paymentStatus: Coding

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    provider?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    request?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    response?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => CodingDto)
    ruleset?: Coding

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    target?: Reference

  }
  export class PaymentReconciliationDetailDto implements PaymentReconciliationDetail {
    @IsOptional()
    @ValidateNested()
    @Type(() => QuantityDto)
    amount?: Quantity

    @IsOptional()
    @IsString()
    date?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    payee?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    request?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    responce?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    submitter?: Reference

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => CodingDto)
    type: Coding

  }
  export class PaymentReconciliationNoteDto implements PaymentReconciliationNote {
    @IsOptional()
    @IsString()
    text?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => CodingDto)
    type?: Coding

  }
  export class PaymentReconciliationDto implements PaymentReconciliation {
    @IsNotEmpty()
    @IsIn(["PaymentReconciliation"])
    resourceType: "PaymentReconciliation"

    @IsOptional()
    @IsString()
    created?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => PaymentReconciliationDetailDto)
    detail?: PaymentReconciliationDetail[]

    @IsOptional()
    @IsString()
    disposition?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => CodingDto)
    form?: Coding

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => IdentifierDto)
    identifier?: Identifier[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => PaymentReconciliationNoteDto)
    note?: PaymentReconciliationNote[]

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    organization?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => CodingDto)
    originalRuleset?: Coding

    @IsNotEmpty()
    @IsIn(["error", "complete"])
    outcome: "error" | "complete"

    @IsOptional()
    @ValidateNested()
    @Type(() => PeriodDto)
    period?: Period

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    request?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    requestOrganization?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    requestProvider?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => CodingDto)
    ruleset?: Coding

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => QuantityDto)
    total: Quantity

  }
  export class PersonLinkDto implements PersonLink {
    @IsNotEmpty()
    @IsIn(["level1", "level2", "level3", "level4"])
    assurance: "level1" | "level2" | "level3" | "level4"

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => ReferenceDto)
    target: Reference

  }
  export class PersonDto implements Person {
    @IsNotEmpty()
    @IsIn(["Person"])
    resourceType: "Person"

    @IsNotEmpty()
    @IsBoolean()
    active: boolean

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => AddressDto)
    address?: Address[]

    @IsOptional()
    @IsString()
    birthDate?: string

    @IsNotEmpty()
    @IsIn(["other", "unknown", "male", "female"])
    gender: "other" | "unknown" | "male" | "female"

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => IdentifierDto)
    identifier?: Identifier[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => PersonLinkDto)
    link?: PersonLink[]

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    managingOrganization?: Reference

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => HumanNameDto)
    name?: HumanName[]

    @IsOptional()
    @ValidateNested()
    @Type(() => AttachmentDto)
    photo?: Attachment

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ContactPointDto)
    telecom?: ContactPoint[]

  }
  export class PractitionerPractitionerRoleDto implements PractitionerPractitionerRole {
    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    healthcareService?: Reference[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    location?: Reference[]

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    managingOrganization?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => PeriodDto)
    period?: Period

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    role?: CodeableConcept

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    specialty?: CodeableConcept[]

  }
  export class PractitionerQualificationDto implements PractitionerQualification {
    @IsNotEmpty()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    code: CodeableConcept

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => IdentifierDto)
    identifier?: Identifier[]

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    issuer?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => PeriodDto)
    period?: Period

  }
  export class PractitionerDto implements Practitioner {
    @IsNotEmpty()
    @IsIn(["Practitioner"])
    resourceType: "Practitioner"

    @IsNotEmpty()
    @IsBoolean()
    active: boolean

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => AddressDto)
    address?: Address[]

    @IsOptional()
    @IsString()
    birthDate?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    communication?: CodeableConcept[]

    @IsNotEmpty()
    @IsIn(["other", "unknown", "male", "female"])
    gender: "other" | "unknown" | "male" | "female"

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => IdentifierDto)
    identifier?: Identifier[]

    @IsOptional()
    @ValidateNested()
    @Type(() => HumanNameDto)
    name?: HumanName

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => AttachmentDto)
    photo?: Attachment[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => PractitionerPractitionerRoleDto)
    practitionerRole?: PractitionerPractitionerRole[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => PractitionerQualificationDto)
    qualification?: PractitionerQualification[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ContactPointDto)
    telecom?: ContactPoint[]

  }
  export class ProcedurePerformerDto implements ProcedurePerformer {
    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    actor?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    role?: CodeableConcept

  }
  export class ProcedureFocalDeviceDto implements ProcedureFocalDevice {
    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    action?: CodeableConcept

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => ReferenceDto)
    manipulated: Reference

  }
  export class ProcedureDto implements Procedure {
    @IsNotEmpty()
    @IsIn(["Procedure"])
    resourceType: "Procedure"

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    bodySite?: CodeableConcept[]

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    category?: CodeableConcept

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    code: CodeableConcept

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    complication?: CodeableConcept[]

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    encounter?: Reference

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ProcedureFocalDeviceDto)
    focalDevice?: ProcedureFocalDevice[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    followUp?: CodeableConcept[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => IdentifierDto)
    identifier?: Identifier[]

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    location?: Reference

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => AnnotationDto)
    notes?: Annotation[]

    @IsNotEmpty()
    @IsBoolean()
    notPerformed: boolean

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    outcome?: CodeableConcept

    @IsOptional()
    @IsString()
    performedDateTime?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => PeriodDto)
    performedPeriod?: Period

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ProcedurePerformerDto)
    performer?: ProcedurePerformer[]

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    reasonCodeableConcept?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    reasonReference?: Reference

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    reasonNotPerformed?: CodeableConcept[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    report?: Reference[]

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    request?: Reference

    @IsNotEmpty()
    @IsIn(["entered-in-error", "completed", "in-progress", "aborted"])
    status: "entered-in-error" | "completed" | "in-progress" | "aborted"

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => ReferenceDto)
    subject: Reference

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    used?: Reference[]

  }
  export class ProcedureRequestDto implements ProcedureRequest {
    @IsNotEmpty()
    @IsIn(["ProcedureRequest"])
    resourceType: "ProcedureRequest"

    @IsNotEmpty()
    @IsBoolean()
    asNeededBoolean: boolean

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    asNeededCodeableConcept?: CodeableConcept

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    bodySite?: CodeableConcept[]

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    code: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    encounter?: Reference

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => IdentifierDto)
    identifier?: Identifier[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => AnnotationDto)
    notes?: Annotation[]

    @IsOptional()
    @IsString()
    orderedOn?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    orderer?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    performer?: Reference

    @IsNotEmpty()
    @IsIn(["routine", "urgent", "stat", "asap"])
    priority: "routine" | "urgent" | "stat" | "asap"

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    reasonCodeableConcept?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    reasonReference?: Reference

    @IsOptional()
    @IsString()
    scheduledDateTime?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => PeriodDto)
    scheduledPeriod?: Period

    @IsOptional()
    @ValidateNested()
    @Type(() => TimingDto)
    scheduledTiming?: Timing

    @IsNotEmpty()
    @IsIn(["accepted", "proposed", "completed", "in-progress", "draft", "suspended", "rejected", "requested", "received", "aborted"])
    status: "accepted" | "proposed" | "completed" | "in-progress" | "draft" | "suspended" | "rejected" | "requested" | "received" | "aborted"

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => ReferenceDto)
    subject: Reference

  }
  export class ProcessRequestItemDto implements ProcessRequestItem {
    @IsNotEmpty()
    @IsNumber()
    sequenceLinkId: number

  }
  export class ProcessRequestDto implements ProcessRequest {
    @IsNotEmpty()
    @IsIn(["ProcessRequest"])
    resourceType: "ProcessRequest"

    @IsNotEmpty()
    @IsIn(["cancel", "poll", "reprocess", "status"])
    action: "cancel" | "poll" | "reprocess" | "status"

    @IsOptional()
    @IsString()
    created?: string

    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    exclude?: string[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => IdentifierDto)
    identifier?: Identifier[]

    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    include?: string[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ProcessRequestItemDto)
    item?: ProcessRequestItem[]

    @IsNotEmpty()
    @IsBoolean()
    nullify: boolean

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    organization?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => CodingDto)
    originalRuleset?: Coding

    @IsOptional()
    @ValidateNested()
    @Type(() => PeriodDto)
    period?: Period

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    provider?: Reference

    @IsOptional()
    @IsString()
    reference?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    request?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    response?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => CodingDto)
    ruleset?: Coding

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    target?: Reference

  }
  export class ProcessResponseNotesDto implements ProcessResponseNotes {
    @IsOptional()
    @IsString()
    text?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => CodingDto)
    type?: Coding

  }
  export class ProcessResponseDto implements ProcessResponse {
    @IsNotEmpty()
    @IsIn(["ProcessResponse"])
    resourceType: "ProcessResponse"

    @IsOptional()
    @IsString()
    created?: string

    @IsOptional()
    @IsString()
    disposition?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodingDto)
    error?: Coding[]

    @IsOptional()
    @ValidateNested()
    @Type(() => CodingDto)
    form?: Coding

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => IdentifierDto)
    identifier?: Identifier[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ProcessResponseNotesDto)
    notes?: ProcessResponseNotes[]

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    organization?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => CodingDto)
    originalRuleset?: Coding

    @IsOptional()
    @ValidateNested()
    @Type(() => CodingDto)
    outcome?: Coding

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    request?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    requestOrganization?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    requestProvider?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => CodingDto)
    ruleset?: Coding

  }
  export class ProvenanceAgentRelatedAgentDto implements ProvenanceAgentRelatedAgent {
    @IsNotEmpty()
    @IsString()
    target: string

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    type: CodeableConcept

  }
  export class ProvenanceAgentDto implements ProvenanceAgent {
    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    actor?: Reference

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ProvenanceAgentRelatedAgentDto)
    relatedAgent?: ProvenanceAgentRelatedAgent[]

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => CodingDto)
    role: Coding

    @IsOptional()
    @ValidateNested()
    @Type(() => IdentifierDto)
    userId?: Identifier

  }
  export class ProvenanceEntityDto implements ProvenanceEntity {
    @IsOptional()
    @ValidateNested()
    @Type(() => ProvenanceAgentDto)
    agent?: ProvenanceAgent

    @IsOptional()
    @IsString()
    display?: string

    @IsNotEmpty()
    @IsString()
    reference: string

    @IsNotEmpty()
    @IsIn(["derivation", "revision", "quotation", "source"])
    role: "derivation" | "revision" | "quotation" | "source"

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => CodingDto)
    type: Coding

  }
  export class ProvenanceDto implements Provenance {
    @IsNotEmpty()
    @IsIn(["Provenance"])
    resourceType: "Provenance"

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    activity?: CodeableConcept

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ProvenanceAgentDto)
    agent?: ProvenanceAgent[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ProvenanceEntityDto)
    entity?: ProvenanceEntity[]

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    location?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => PeriodDto)
    period?: Period

    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    policy?: string[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    reason?: CodeableConcept[]

    @IsNotEmpty()
    @IsString()
    recorded: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => SignatureDto)
    signature?: Signature[]

    @IsNotEmpty()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    target: Reference[]

  }
  export class QuestionnaireGroupQuestionDto implements QuestionnaireGroupQuestion {
    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodingDto)
    concept?: Coding[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => QuestionnaireGroupDto)
    group?: QuestionnaireGroup[]

    @IsOptional()
    @IsString()
    linkId?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodingDto)
    option?: Coding[]

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    options?: Reference

    @IsNotEmpty()
    @IsBoolean()
    repeats: boolean

    @IsNotEmpty()
    @IsBoolean()
    required: boolean

    @IsOptional()
    @IsString()
    text?: string

    @IsNotEmpty()
    @IsIn(["string", "boolean", "text", "date", "reference", "quantity", "decimal", "integer", "dateTime", "instant", "time", "url", "choice", "open-choice", "attachment"])
    type: "string" | "boolean" | "text" | "date" | "reference" | "quantity" | "decimal" | "integer" | "dateTime" | "instant" | "time" | "url" | "choice" | "open-choice" | "attachment"

  }
  export class QuestionnaireGroupDto implements QuestionnaireGroup {
    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodingDto)
    concept?: Coding[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => QuestionnaireGroupDto)
    group?: QuestionnaireGroup[]

    @IsOptional()
    @IsString()
    linkId?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => QuestionnaireGroupQuestionDto)
    question?: QuestionnaireGroupQuestion[]

    @IsNotEmpty()
    @IsBoolean()
    repeats: boolean

    @IsNotEmpty()
    @IsBoolean()
    required: boolean

    @IsOptional()
    @IsString()
    text?: string

    @IsOptional()
    @IsString()
    title?: string

  }
  export class QuestionnaireDto implements Questionnaire {
    @IsNotEmpty()
    @IsIn(["Questionnaire"])
    resourceType: "Questionnaire"

    @IsOptional()
    @IsString()
    date?: string

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => QuestionnaireGroupDto)
    group: QuestionnaireGroup

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => IdentifierDto)
    identifier?: Identifier[]

    @IsOptional()
    @IsString()
    publisher?: string

    @IsNotEmpty()
    @IsIn(["draft", "retired", "published"])
    status: "draft" | "retired" | "published"

    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    subjectType?: string[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ContactPointDto)
    telecom?: ContactPoint[]

    @IsOptional()
    @IsString()
    version?: string

  }
  export class QuestionnaireResponseGroupQuestionAnswerDto implements QuestionnaireResponseGroupQuestionAnswer {
    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => QuestionnaireResponseGroupDto)
    group?: QuestionnaireResponseGroup[]

    @IsNotEmpty()
    @IsBoolean()
    valueBoolean: boolean

    @IsOptional()
    @IsNumber()
    valueDecimal?: number

    @IsOptional()
    @IsNumber()
    valueInteger?: number

    @IsOptional()
    @IsString()
    valueDate?: string

    @IsOptional()
    @IsString()
    valueDateTime?: string

    @IsOptional()
    @IsString()
    valueInstant?: string

    @IsOptional()
    @IsString()
    valueTime?: string

    @IsOptional()
    @IsString()
    valueString?: string

    @IsOptional()
    @IsString()
    valueUri?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => AttachmentDto)
    valueAttachment?: Attachment

    @IsOptional()
    @ValidateNested()
    @Type(() => CodingDto)
    valueCoding?: Coding

    @IsOptional()
    @ValidateNested()
    @Type(() => QuantityDto)
    valueQuantity?: Quantity

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    valueReference?: Reference

  }
  export class QuestionnaireResponseGroupQuestionDto implements QuestionnaireResponseGroupQuestion {
    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => QuestionnaireResponseGroupQuestionAnswerDto)
    answer?: QuestionnaireResponseGroupQuestionAnswer[]

    @IsOptional()
    @IsString()
    linkId?: string

    @IsOptional()
    @IsString()
    text?: string

  }
  export class QuestionnaireResponseGroupDto implements QuestionnaireResponseGroup {
    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => QuestionnaireResponseGroupDto)
    group?: QuestionnaireResponseGroup[]

    @IsOptional()
    @IsString()
    linkId?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => QuestionnaireResponseGroupQuestionDto)
    question?: QuestionnaireResponseGroupQuestion[]

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    subject?: Reference

    @IsOptional()
    @IsString()
    text?: string

    @IsOptional()
    @IsString()
    title?: string

  }
  export class QuestionnaireResponseDto implements QuestionnaireResponse {
    @IsNotEmpty()
    @IsIn(["QuestionnaireResponse"])
    resourceType: "QuestionnaireResponse"

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    author?: Reference

    @IsOptional()
    @IsString()
    authored?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    encounter?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => QuestionnaireResponseGroupDto)
    group?: QuestionnaireResponseGroup

    @IsOptional()
    @ValidateNested()
    @Type(() => IdentifierDto)
    identifier?: Identifier

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    questionnaire?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    source?: Reference

    @IsNotEmpty()
    @IsIn(["completed", "in-progress", "amended"])
    status: "completed" | "in-progress" | "amended"

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    subject?: Reference

  }
  export class ReferralRequestDto implements ReferralRequest {
    @IsNotEmpty()
    @IsIn(["ReferralRequest"])
    resourceType: "ReferralRequest"

    @IsOptional()
    @IsString()
    date?: string

    @IsOptional()
    @IsString()
    dateSent?: string

    @IsOptional()
    @IsString()
    description?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    encounter?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => PeriodDto)
    fulfillmentTime?: Period

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => IdentifierDto)
    identifier?: Identifier[]

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    patient?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    priority?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    reason?: CodeableConcept

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    recipient?: Reference[]

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    requester?: Reference

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    serviceRequested?: CodeableConcept[]

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    specialty?: CodeableConcept

    @IsNotEmpty()
    @IsIn(["active", "accepted", "cancelled", "completed", "draft", "rejected", "requested"])
    status: "active" | "accepted" | "cancelled" | "completed" | "draft" | "rejected" | "requested"

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    supportingInformation?: Reference[]

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    type?: CodeableConcept

  }
  export class RelatedPersonDto implements RelatedPerson {
    @IsNotEmpty()
    @IsIn(["RelatedPerson"])
    resourceType: "RelatedPerson"

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => AddressDto)
    address?: Address[]

    @IsOptional()
    @IsString()
    birthDate?: string

    @IsNotEmpty()
    @IsIn(["other", "unknown", "male", "female"])
    gender: "other" | "unknown" | "male" | "female"

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => IdentifierDto)
    identifier?: Identifier[]

    @IsOptional()
    @ValidateNested()
    @Type(() => HumanNameDto)
    name?: HumanName

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => ReferenceDto)
    patient: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => PeriodDto)
    period?: Period

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => AttachmentDto)
    photo?: Attachment[]

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    relationship?: CodeableConcept

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ContactPointDto)
    telecom?: ContactPoint[]

  }
  export class ResourceDto implements Resource {
    @IsNotEmpty()
    @IsString()
    resourceType: string

    @IsOptional()
    @IsString()
    id?: string

    @IsOptional()
    @IsString()
    implicitRules?: string

    @IsOptional()
    @IsString()
    language?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => MetaDto)
    meta?: Meta

  }
  export class RiskAssessmentPredictionDto implements RiskAssessmentPrediction {
    @IsNotEmpty()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    outcome: CodeableConcept

    @IsOptional()
    @IsNumber()
    probabilityDecimal?: number

    @IsOptional()
    @ValidateNested()
    @Type(() => RangeDto)
    probabilityRange?: Range

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    probabilityCodeableConcept?: CodeableConcept

    @IsOptional()
    @IsString()
    rationale?: string

    @IsOptional()
    @IsNumber()
    relativeRisk?: number

    @IsOptional()
    @ValidateNested()
    @Type(() => PeriodDto)
    whenPeriod?: Period

    @IsOptional()
    @ValidateNested()
    @Type(() => RangeDto)
    whenRange?: Range

  }
  export class RiskAssessmentDto implements RiskAssessment {
    @IsNotEmpty()
    @IsIn(["RiskAssessment"])
    resourceType: "RiskAssessment"

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    basis?: Reference[]

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    condition?: Reference

    @IsOptional()
    @IsString()
    date?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    encounter?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => IdentifierDto)
    identifier?: Identifier

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    method?: CodeableConcept

    @IsOptional()
    @IsString()
    mitigation?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    performer?: Reference

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => RiskAssessmentPredictionDto)
    prediction?: RiskAssessmentPrediction[]

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    subject?: Reference

  }
  export class ScheduleDto implements Schedule {
    @IsNotEmpty()
    @IsIn(["Schedule"])
    resourceType: "Schedule"

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => ReferenceDto)
    actor: Reference

    @IsOptional()
    @IsString()
    comment?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => IdentifierDto)
    identifier?: Identifier[]

    @IsOptional()
    @ValidateNested()
    @Type(() => PeriodDto)
    planningHorizon?: Period

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    type?: CodeableConcept[]

  }
  export class SearchParameterContactDto implements SearchParameterContact {
    @IsOptional()
    @IsString()
    name?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ContactPointDto)
    telecom?: ContactPoint[]

  }
  export class SearchParameterDto implements SearchParameter {
    @IsNotEmpty()
    @IsIn(["SearchParameter"])
    resourceType: "SearchParameter"

    @IsNotEmpty()
    @IsString()
    base: string

    @IsNotEmpty()
    @IsString()
    code: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => SearchParameterContactDto)
    contact?: SearchParameterContact[]

    @IsOptional()
    @IsString()
    date?: string

    @IsNotEmpty()
    @IsString()
    description: string

    @IsNotEmpty()
    @IsBoolean()
    experimental: boolean

    @IsNotEmpty()
    @IsString()
    name: string

    @IsOptional()
    @IsString()
    publisher?: string

    @IsOptional()
    @IsString()
    requirements?: string

    @IsNotEmpty()
    @IsIn(["active", "draft", "retired"])
    status: "active" | "draft" | "retired"

    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    target?: string[]

    @IsNotEmpty()
    @IsIn(["string", "number", "date", "token", "reference", "composite", "quantity", "uri"])
    type: "string" | "number" | "date" | "token" | "reference" | "composite" | "quantity" | "uri"

    @IsNotEmpty()
    @IsString()
    url: string

    @IsOptional()
    @IsString()
    xpath?: string

    @IsNotEmpty()
    @IsIn(["other", "normal", "phonetic", "nearby", "distance"])
    xpathUsage: "other" | "normal" | "phonetic" | "nearby" | "distance"

  }
  export class SlotDto implements Slot {
    @IsNotEmpty()
    @IsIn(["Slot"])
    resourceType: "Slot"

    @IsOptional()
    @IsString()
    comment?: string

    @IsNotEmpty()
    @IsString()
    end: string

    @IsNotEmpty()
    @IsIn(["busy", "free", "busy-unavailable", "busy-tentative"])
    freeBusyType: "busy" | "free" | "busy-unavailable" | "busy-tentative"

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => IdentifierDto)
    identifier?: Identifier[]

    @IsNotEmpty()
    @IsBoolean()
    overbooked: boolean

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => ReferenceDto)
    schedule: Reference

    @IsNotEmpty()
    @IsString()
    start: string

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    type?: CodeableConcept

  }
  export class SpecimenCollectionDto implements SpecimenCollection {
    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    bodySite?: CodeableConcept

    @IsOptional()
    @IsString()
    collectedDateTime?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => PeriodDto)
    collectedPeriod?: Period

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    collector?: Reference

    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    comment?: string[]

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    method?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => QuantityDto)
    quantity?: Quantity

  }
  export class SpecimenTreatmentDto implements SpecimenTreatment {
    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    additive?: Reference[]

    @IsOptional()
    @IsString()
    description?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    procedure?: CodeableConcept

  }
  export class SpecimenContainerDto implements SpecimenContainer {
    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    additiveCodeableConcept?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    additiveReference?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => QuantityDto)
    capacity?: Quantity

    @IsOptional()
    @IsString()
    description?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => IdentifierDto)
    identifier?: Identifier[]

    @IsOptional()
    @ValidateNested()
    @Type(() => QuantityDto)
    specimenQuantity?: Quantity

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    type?: CodeableConcept

  }
  export class SpecimenDto implements Specimen {
    @IsNotEmpty()
    @IsIn(["Specimen"])
    resourceType: "Specimen"

    @IsOptional()
    @ValidateNested()
    @Type(() => IdentifierDto)
    accessionIdentifier?: Identifier

    @IsOptional()
    @ValidateNested()
    @Type(() => SpecimenCollectionDto)
    collection?: SpecimenCollection

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => SpecimenContainerDto)
    container?: SpecimenContainer[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => IdentifierDto)
    identifier?: Identifier[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    parent?: Reference[]

    @IsOptional()
    @IsString()
    receivedTime?: string

    @IsNotEmpty()
    @IsIn(["entered-in-error", "available", "unavailable", "unsatisfactory"])
    status: "entered-in-error" | "available" | "unavailable" | "unsatisfactory"

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => ReferenceDto)
    subject: Reference

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => SpecimenTreatmentDto)
    treatment?: SpecimenTreatment[]

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    type?: CodeableConcept

  }
  export class StructureDefinitionContactDto implements StructureDefinitionContact {
    @IsOptional()
    @IsString()
    name?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ContactPointDto)
    telecom?: ContactPoint[]

  }
  export class StructureDefinitionMappingDto implements StructureDefinitionMapping {
    @IsOptional()
    @IsString()
    comments?: string

    @IsNotEmpty()
    @IsString()
    identity: string

    @IsOptional()
    @IsString()
    name?: string

    @IsOptional()
    @IsString()
    uri?: string

  }
  export class StructureDefinitionSnapshotDto implements StructureDefinitionSnapshot {
    @IsNotEmpty()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ElementDefinitionDto)
    element: ElementDefinition[]

  }
  export class StructureDefinitionDifferentialDto implements StructureDefinitionDifferential {
    @IsNotEmpty()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ElementDefinitionDto)
    element: ElementDefinition[]

  }
  export class StructureDefinitionDto implements StructureDefinition {
    @IsNotEmpty()
    @IsIn(["StructureDefinition"])
    resourceType: "StructureDefinition"

    @IsNotEmpty()
    @IsBoolean()
    abstract: boolean

    @IsOptional()
    @IsString()
    base?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodingDto)
    code?: Coding[]

    @IsOptional()
    @IsString()
    constrainedType?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => StructureDefinitionContactDto)
    contact?: StructureDefinitionContact[]

    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    context?: string[]

    @IsNotEmpty()
    @IsIn(["extension", "resource", "datatype", "mapping"])
    contextType: "extension" | "resource" | "datatype" | "mapping"

    @IsOptional()
    @IsString()
    copyright?: string

    @IsOptional()
    @IsString()
    date?: string

    @IsOptional()
    @IsString()
    description?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => StructureDefinitionDifferentialDto)
    differential?: StructureDefinitionDifferential

    @IsOptional()
    @IsString()
    display?: string

    @IsNotEmpty()
    @IsBoolean()
    experimental: boolean

    @IsOptional()
    @IsString()
    fhirVersion?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => IdentifierDto)
    identifier?: Identifier[]

    @IsNotEmpty()
    @IsIn(["logical", "resource", "datatype"])
    kind: "logical" | "resource" | "datatype"

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => StructureDefinitionMappingDto)
    mapping?: StructureDefinitionMapping[]

    @IsNotEmpty()
    @IsString()
    name: string

    @IsOptional()
    @IsString()
    publisher?: string

    @IsOptional()
    @IsString()
    requirements?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => StructureDefinitionSnapshotDto)
    snapshot?: StructureDefinitionSnapshot

    @IsNotEmpty()
    @IsIn(["active", "draft", "retired"])
    status: "active" | "draft" | "retired"

    @IsNotEmpty()
    @IsString()
    url: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    useContext?: CodeableConcept[]

    @IsOptional()
    @IsString()
    version?: string

  }
  export class SubscriptionChannelDto implements SubscriptionChannel {
    @IsOptional()
    @IsString()
    endpoint?: string

    @IsOptional()
    @IsString()
    header?: string

    @IsNotEmpty()
    @IsString()
    payload: string

    @IsNotEmpty()
    @IsIn(["email", "message", "rest-hook", "websocket", "sms"])
    type: "email" | "message" | "rest-hook" | "websocket" | "sms"

  }
  export class SubscriptionDto implements Subscription {
    @IsNotEmpty()
    @IsIn(["Subscription"])
    resourceType: "Subscription"

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => SubscriptionChannelDto)
    channel: SubscriptionChannel

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ContactPointDto)
    contact?: ContactPoint[]

    @IsNotEmpty()
    @IsString()
    criteria: string

    @IsOptional()
    @IsString()
    end?: string

    @IsOptional()
    @IsString()
    error?: string

    @IsNotEmpty()
    @IsString()
    reason: string

    @IsNotEmpty()
    @IsIn(["error", "active", "requested", "off"])
    status: "error" | "active" | "requested" | "off"

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodingDto)
    tag?: Coding[]

  }
  export class SubstanceInstanceDto implements SubstanceInstance {
    @IsOptional()
    @IsString()
    expiry?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => IdentifierDto)
    identifier?: Identifier

    @IsOptional()
    @ValidateNested()
    @Type(() => QuantityDto)
    quantity?: Quantity

  }
  export class SubstanceIngredientDto implements SubstanceIngredient {
    @IsOptional()
    @ValidateNested()
    @Type(() => RatioDto)
    quantity?: Ratio

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => ReferenceDto)
    substance: Reference

  }
  export class SubstanceDto implements Substance {
    @IsNotEmpty()
    @IsIn(["Substance"])
    resourceType: "Substance"

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    category?: CodeableConcept[]

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    code: CodeableConcept

    @IsOptional()
    @IsString()
    description?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => IdentifierDto)
    identifier?: Identifier[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => SubstanceIngredientDto)
    ingredient?: SubstanceIngredient[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => SubstanceInstanceDto)
    instance?: SubstanceInstance[]

  }
  export class SupplyDeliveryDto implements SupplyDelivery {
    @IsNotEmpty()
    @IsIn(["SupplyDelivery"])
    resourceType: "SupplyDelivery"

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    destination?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => IdentifierDto)
    identifier?: Identifier

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    patient?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => QuantityDto)
    quantity?: Quantity

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    receiver?: Reference[]

    @IsNotEmpty()
    @IsIn(["completed", "in-progress", "abandoned"])
    status: "completed" | "in-progress" | "abandoned"

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    suppliedItem?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    supplier?: Reference

    @IsOptional()
    @IsString()
    time?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    type?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => PeriodDto)
    whenPrepared?: Period

  }
  export class SupplyRequestWhenDto implements SupplyRequestWhen {
    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    code?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => TimingDto)
    schedule?: Timing

  }
  export class SupplyRequestDto implements SupplyRequest {
    @IsNotEmpty()
    @IsIn(["SupplyRequest"])
    resourceType: "SupplyRequest"

    @IsOptional()
    @IsString()
    date?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => IdentifierDto)
    identifier?: Identifier

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    kind?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    orderedItem?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    patient?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    reasonCodeableConcept?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    reasonReference?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    source?: Reference

    @IsNotEmpty()
    @IsIn(["cancelled", "completed", "failed", "requested"])
    status: "cancelled" | "completed" | "failed" | "requested"

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    supplier?: Reference[]

    @IsOptional()
    @ValidateNested()
    @Type(() => SupplyRequestWhenDto)
    when?: SupplyRequestWhen

  }
  export class TestScriptContactDto implements TestScriptContact {
    @IsOptional()
    @IsString()
    name?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ContactPointDto)
    telecom?: ContactPoint[]

  }
  export class TestScriptMetadataLinkDto implements TestScriptMetadataLink {
    @IsOptional()
    @IsString()
    description?: string

    @IsNotEmpty()
    @IsString()
    url: string

  }
  export class TestScriptMetadataCapabilityDto implements TestScriptMetadataCapability {
    @IsNotEmpty()
    @ValidateNested()
    @Type(() => ReferenceDto)
    conformance: Reference

    @IsOptional()
    @IsString()
    description?: string

    @IsOptional()
    @IsNumber()
    destination?: number

    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    link?: string[]

    @IsNotEmpty()
    @IsBoolean()
    required: boolean

    @IsNotEmpty()
    @IsBoolean()
    validated: boolean

  }
  export class TestScriptMetadataDto implements TestScriptMetadata {
    @IsNotEmpty()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => TestScriptMetadataCapabilityDto)
    capability: TestScriptMetadataCapability[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => TestScriptMetadataLinkDto)
    link?: TestScriptMetadataLink[]

  }
  export class TestScriptFixtureDto implements TestScriptFixture {
    @IsNotEmpty()
    @IsBoolean()
    autocreate: boolean

    @IsNotEmpty()
    @IsBoolean()
    autodelete: boolean

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    resource?: Reference

  }
  export class TestScriptVariableDto implements TestScriptVariable {
    @IsOptional()
    @IsString()
    headerField?: string

    @IsNotEmpty()
    @IsString()
    name: string

    @IsOptional()
    @IsString()
    path?: string

    @IsOptional()
    @IsString()
    sourceId?: string

  }
  export class TestScriptSetupActionOperationRequestHeaderDto implements TestScriptSetupActionOperationRequestHeader {
    @IsNotEmpty()
    @IsString()
    field: string

    @IsNotEmpty()
    @IsString()
    value: string

  }
  export class TestScriptSetupActionOperationDto implements TestScriptSetupActionOperation {
    @IsNotEmpty()
    @IsIn(["xml", "json"])
    accept: "xml" | "json"

    @IsNotEmpty()
    @IsIn(["xml", "json"])
    contentType: "xml" | "json"

    @IsOptional()
    @IsString()
    description?: string

    @IsOptional()
    @IsNumber()
    destination?: number

    @IsNotEmpty()
    @IsBoolean()
    encodeRequestUrl: boolean

    @IsOptional()
    @IsString()
    label?: string

    @IsOptional()
    @IsString()
    params?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => TestScriptSetupActionOperationRequestHeaderDto)
    requestHeader?: TestScriptSetupActionOperationRequestHeader[]

    @IsOptional()
    @IsString()
    resource?: string

    @IsOptional()
    @IsString()
    responseId?: string

    @IsOptional()
    @IsString()
    sourceId?: string

    @IsOptional()
    @IsString()
    targetId?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => CodingDto)
    type?: Coding

    @IsOptional()
    @IsString()
    url?: string

  }
  export class TestScriptSetupActionAssertDto implements TestScriptSetupActionAssert {
    @IsOptional()
    @IsString()
    compareToSourceId?: string

    @IsOptional()
    @IsString()
    compareToSourcePath?: string

    @IsNotEmpty()
    @IsIn(["xml", "json"])
    contentType: "xml" | "json"

    @IsOptional()
    @IsString()
    description?: string

    @IsNotEmpty()
    @IsIn(["response", "request"])
    direction: "response" | "request"

    @IsOptional()
    @IsString()
    headerField?: string

    @IsOptional()
    @IsString()
    label?: string

    @IsOptional()
    @IsString()
    minimumId?: string

    @IsNotEmpty()
    @IsBoolean()
    navigationLinks: boolean

    @IsNotEmpty()
    @IsIn(["empty", "contains", "in", "equals", "notEquals", "notIn", "greaterThan", "lessThan", "notEmpty", "notContains"])
    operator: "empty" | "contains" | "in" | "equals" | "notEquals" | "notIn" | "greaterThan" | "lessThan" | "notEmpty" | "notContains"

    @IsOptional()
    @IsString()
    path?: string

    @IsOptional()
    @IsString()
    resource?: string

    @IsNotEmpty()
    @IsIn(["okay", "created", "noContent", "notModified", "bad", "forbidden", "notFound", "methodNotAllowed", "conflict", "gone", "preconditionFailed", "unprocessable"])
    response: "okay" | "created" | "noContent" | "notModified" | "bad" | "forbidden" | "notFound" | "methodNotAllowed" | "conflict" | "gone" | "preconditionFailed" | "unprocessable"

    @IsOptional()
    @IsString()
    responseCode?: string

    @IsOptional()
    @IsString()
    sourceId?: string

    @IsOptional()
    @IsString()
    validateProfileId?: string

    @IsOptional()
    @IsString()
    value?: string

    @IsNotEmpty()
    @IsBoolean()
    warningOnly: boolean

  }
  export class TestScriptSetupActionDto implements TestScriptSetupAction {
    @IsOptional()
    @ValidateNested()
    @Type(() => TestScriptSetupActionAssertDto)
    assert?: TestScriptSetupActionAssert

    @IsOptional()
    @ValidateNested()
    @Type(() => TestScriptSetupActionOperationDto)
    operation?: TestScriptSetupActionOperation

  }
  export class TestScriptSetupDto implements TestScriptSetup {
    @IsNotEmpty()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => TestScriptSetupActionDto)
    action: TestScriptSetupAction[]

    @IsOptional()
    @ValidateNested()
    @Type(() => TestScriptMetadataDto)
    metadata?: TestScriptMetadata

  }
  export class TestScriptTestActionDto implements TestScriptTestAction {
    @IsOptional()
    @ValidateNested()
    @Type(() => TestScriptSetupActionAssertDto)
    assert?: TestScriptSetupActionAssert

    @IsOptional()
    @ValidateNested()
    @Type(() => TestScriptSetupActionOperationDto)
    operation?: TestScriptSetupActionOperation

  }
  export class TestScriptTestDto implements TestScriptTest {
    @IsNotEmpty()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => TestScriptTestActionDto)
    action: TestScriptTestAction[]

    @IsOptional()
    @IsString()
    description?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => TestScriptMetadataDto)
    metadata?: TestScriptMetadata

    @IsOptional()
    @IsString()
    name?: string

  }
  export class TestScriptTeardownActionDto implements TestScriptTeardownAction {
    @IsOptional()
    @ValidateNested()
    @Type(() => TestScriptSetupActionOperationDto)
    operation?: TestScriptSetupActionOperation

  }
  export class TestScriptTeardownDto implements TestScriptTeardown {
    @IsNotEmpty()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => TestScriptTeardownActionDto)
    action: TestScriptTeardownAction[]

  }
  export class TestScriptDto implements TestScript {
    @IsNotEmpty()
    @IsIn(["TestScript"])
    resourceType: "TestScript"

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => TestScriptContactDto)
    contact?: TestScriptContact[]

    @IsOptional()
    @IsString()
    copyright?: string

    @IsOptional()
    @IsString()
    date?: string

    @IsOptional()
    @IsString()
    description?: string

    @IsNotEmpty()
    @IsBoolean()
    experimental: boolean

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => TestScriptFixtureDto)
    fixture?: TestScriptFixture[]

    @IsOptional()
    @ValidateNested()
    @Type(() => IdentifierDto)
    identifier?: Identifier

    @IsOptional()
    @ValidateNested()
    @Type(() => TestScriptMetadataDto)
    metadata?: TestScriptMetadata

    @IsNotEmpty()
    @IsBoolean()
    multiserver: boolean

    @IsNotEmpty()
    @IsString()
    name: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    profile?: Reference[]

    @IsOptional()
    @IsString()
    publisher?: string

    @IsOptional()
    @IsString()
    requirements?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => TestScriptSetupDto)
    setup?: TestScriptSetup

    @IsNotEmpty()
    @IsIn(["active", "draft", "retired"])
    status: "active" | "draft" | "retired"

    @IsOptional()
    @ValidateNested()
    @Type(() => TestScriptTeardownDto)
    teardown?: TestScriptTeardown

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => TestScriptTestDto)
    test?: TestScriptTest[]

    @IsNotEmpty()
    @IsString()
    url: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    useContext?: CodeableConcept[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => TestScriptVariableDto)
    variable?: TestScriptVariable[]

    @IsOptional()
    @IsString()
    version?: string

  }
  export class ValueSetContactDto implements ValueSetContact {
    @IsOptional()
    @IsString()
    name?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ContactPointDto)
    telecom?: ContactPoint[]

  }
  export class ValueSetCodeSystemConceptDesignationDto implements ValueSetCodeSystemConceptDesignation {
    @IsOptional()
    @IsString()
    language?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => CodingDto)
    use?: Coding

    @IsNotEmpty()
    @IsString()
    value: string

  }
  export class ValueSetCodeSystemConceptDto implements ValueSetCodeSystemConcept {
    @IsNotEmpty()
    @IsBoolean()
    abstract: boolean

    @IsNotEmpty()
    @IsString()
    code: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ValueSetCodeSystemConceptDto)
    concept?: ValueSetCodeSystemConcept[]

    @IsOptional()
    @IsString()
    definition?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ValueSetCodeSystemConceptDesignationDto)
    designation?: ValueSetCodeSystemConceptDesignation[]

    @IsOptional()
    @IsString()
    display?: string

  }
  export class ValueSetCodeSystemDto implements ValueSetCodeSystem {
    @IsNotEmpty()
    @IsBoolean()
    caseSensitive: boolean

    @IsNotEmpty()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ValueSetCodeSystemConceptDto)
    concept: ValueSetCodeSystemConcept[]

    @IsNotEmpty()
    @IsString()
    system: string

    @IsOptional()
    @IsString()
    version?: string

  }
  export class ValueSetComposeIncludeConceptDto implements ValueSetComposeIncludeConcept {
    @IsNotEmpty()
    @IsString()
    code: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ValueSetCodeSystemConceptDesignationDto)
    designation?: ValueSetCodeSystemConceptDesignation[]

    @IsOptional()
    @IsString()
    display?: string

  }
  export class ValueSetComposeIncludeFilterDto implements ValueSetComposeIncludeFilter {
    @IsNotEmpty()
    @IsIn(["in", "not-in", "=", "is-a", "is-not-a", "regex"])
    op: "in" | "not-in" | "=" | "is-a" | "is-not-a" | "regex"

    @IsNotEmpty()
    @IsString()
    property: string

    @IsNotEmpty()
    @IsString()
    value: string

  }
  export class ValueSetComposeIncludeDto implements ValueSetComposeInclude {
    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ValueSetComposeIncludeConceptDto)
    concept?: ValueSetComposeIncludeConcept[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ValueSetComposeIncludeFilterDto)
    filter?: ValueSetComposeIncludeFilter[]

    @IsNotEmpty()
    @IsString()
    system: string

    @IsOptional()
    @IsString()
    version?: string

  }
  export class ValueSetComposeDto implements ValueSetCompose {
    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ValueSetComposeIncludeDto)
    exclude?: ValueSetComposeInclude[]

    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    import?: string[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ValueSetComposeIncludeDto)
    include?: ValueSetComposeInclude[]

  }
  export class ValueSetExpansionParameterDto implements ValueSetExpansionParameter {
    @IsNotEmpty()
    @IsString()
    name: string

    @IsOptional()
    @IsString()
    valueString?: string

    @IsNotEmpty()
    @IsBoolean()
    valueBoolean: boolean

    @IsOptional()
    @IsNumber()
    valueInteger?: number

    @IsOptional()
    @IsNumber()
    valueDecimal?: number

    @IsOptional()
    @IsString()
    valueUri?: string

    @IsOptional()
    @IsString()
    valueCode?: string

  }
  export class ValueSetExpansionContainsDto implements ValueSetExpansionContains {
    @IsNotEmpty()
    @IsBoolean()
    abstract: boolean

    @IsOptional()
    @IsString()
    code?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ValueSetExpansionContainsDto)
    contains?: ValueSetExpansionContains[]

    @IsOptional()
    @IsString()
    display?: string

    @IsOptional()
    @IsString()
    system?: string

    @IsOptional()
    @IsString()
    version?: string

  }
  export class ValueSetExpansionDto implements ValueSetExpansion {
    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ValueSetExpansionContainsDto)
    contains?: ValueSetExpansionContains[]

    @IsNotEmpty()
    @IsString()
    identifier: string

    @IsOptional()
    @IsNumber()
    offset?: number

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ValueSetExpansionParameterDto)
    parameter?: ValueSetExpansionParameter[]

    @IsNotEmpty()
    @IsString()
    timestamp: string

    @IsOptional()
    @IsNumber()
    total?: number

  }
  export class ValueSetDto implements ValueSet {
    @IsNotEmpty()
    @IsIn(["ValueSet"])
    resourceType: "ValueSet"

    @IsOptional()
    @ValidateNested()
    @Type(() => ValueSetCodeSystemDto)
    codeSystem?: ValueSetCodeSystem

    @IsOptional()
    @ValidateNested()
    @Type(() => ValueSetComposeDto)
    compose?: ValueSetCompose

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ValueSetContactDto)
    contact?: ValueSetContact[]

    @IsOptional()
    @IsString()
    copyright?: string

    @IsOptional()
    @IsString()
    date?: string

    @IsOptional()
    @IsString()
    description?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => ValueSetExpansionDto)
    expansion?: ValueSetExpansion

    @IsNotEmpty()
    @IsBoolean()
    experimental: boolean

    @IsNotEmpty()
    @IsBoolean()
    extensible: boolean

    @IsOptional()
    @ValidateNested()
    @Type(() => IdentifierDto)
    identifier?: Identifier

    @IsNotEmpty()
    @IsBoolean()
    immutable: boolean

    @IsOptional()
    @IsString()
    lockedDate?: string

    @IsOptional()
    @IsString()
    name?: string

    @IsOptional()
    @IsString()
    publisher?: string

    @IsOptional()
    @IsString()
    requirements?: string

    @IsNotEmpty()
    @IsIn(["active", "draft", "retired"])
    status: "active" | "draft" | "retired"

    @IsOptional()
    @IsString()
    url?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    useContext?: CodeableConcept[]

    @IsOptional()
    @IsString()
    version?: string

  }
  export class VisionPrescriptionDispenseDto implements VisionPrescriptionDispense {
    @IsOptional()
    @IsNumber()
    add?: number

    @IsOptional()
    @IsNumber()
    axis?: number

    @IsOptional()
    @IsNumber()
    backCurve?: number

    @IsNotEmpty()
    @IsIn(["in", "out", "up", "down"])
    base: "in" | "out" | "up" | "down"

    @IsOptional()
    @IsString()
    brand?: string

    @IsOptional()
    @IsString()
    color?: string

    @IsOptional()
    @IsNumber()
    cylinder?: number

    @IsOptional()
    @IsNumber()
    diameter?: number

    @IsOptional()
    @ValidateNested()
    @Type(() => QuantityDto)
    duration?: Quantity

    @IsNotEmpty()
    @IsIn(["right", "left"])
    eye: "right" | "left"

    @IsOptional()
    @IsString()
    notes?: string

    @IsOptional()
    @IsNumber()
    power?: number

    @IsOptional()
    @IsNumber()
    prism?: number

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => CodingDto)
    product: Coding

    @IsOptional()
    @IsNumber()
    sphere?: number

  }
  export class VisionPrescriptionDto implements VisionPrescription {
    @IsNotEmpty()
    @IsIn(["VisionPrescription"])
    resourceType: "VisionPrescription"

    @IsOptional()
    @IsString()
    dateWritten?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => VisionPrescriptionDispenseDto)
    dispense?: VisionPrescriptionDispense[]

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    encounter?: Reference

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => IdentifierDto)
    identifier?: Identifier[]

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    patient?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    prescriber?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    reasonCodeableConcept?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    reasonReference?: Reference

  }
}