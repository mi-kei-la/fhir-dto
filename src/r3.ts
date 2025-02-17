import { Address, Age, Annotation, Attachment, BackboneElement, CodeableConcept, Coding, ContactDetail, ContactPoint, Contributor, Count, DataRequirementCodeFilter, DataRequirementDateFilter, DataRequirement, Distance, Dosage, Duration, Element, ElementDefinitionSlicingDiscriminator, ElementDefinitionSlicing, ElementDefinitionBase, ElementDefinitionType, ElementDefinitionExample, ElementDefinitionConstraint, ElementDefinitionBinding, ElementDefinitionMapping, ElementDefinition, Extension, HumanName, Identifier, Meta, Money, Narrative, ParameterDefinition, Period, Quantity, Range, Ratio, Reference, RelatedArtifact, SampledData, Signature, TimingRepeat, Timing, TriggerDefinition, UsageContext, AccountCoverage, AccountGuarantor, Account, ActivityDefinitionParticipant, ActivityDefinitionDynamicValue, ActivityDefinition, AdverseEventSuspectEntity, AdverseEvent, AllergyIntoleranceReaction, AllergyIntolerance, AppointmentParticipant, Appointment, AppointmentResponse, AuditEventAgentNetwork, AuditEventAgent, AuditEventSource, AuditEventEntityDetail, AuditEventEntity, AuditEvent, Basic, Binary, BodySite, BundleLink, BundleEntrySearch, BundleEntryRequest, BundleEntryResponse, BundleEntry, Bundle, CapabilityStatementSoftware, CapabilityStatementImplementation, CapabilityStatementRestSecurityCertificate, CapabilityStatementRestSecurity, CapabilityStatementRestResourceInteraction, CapabilityStatementRestResourceSearchParam, CapabilityStatementRestResource, CapabilityStatementRestInteraction, CapabilityStatementRestOperation, CapabilityStatementRest, CapabilityStatementMessagingEndpoint, CapabilityStatementMessagingSupportedMessage, CapabilityStatementMessagingEvent, CapabilityStatementMessaging, CapabilityStatementDocument, CapabilityStatement, CarePlanActivityDetail, CarePlanActivity, CarePlan, CareTeamParticipant, CareTeam, ChargeItemParticipant, ChargeItem, ClaimRelated, ClaimPayee, ClaimCareTeam, ClaimInformation, ClaimDiagnosis, ClaimProcedure, ClaimInsurance, ClaimAccident, ClaimItemDetailSubDetail, ClaimItemDetail, ClaimItem, Claim, ClaimResponseItemAdjudication, ClaimResponseItemDetailSubDetail, ClaimResponseItemDetail, ClaimResponseItem, ClaimResponseAddItemDetail, ClaimResponseAddItem, ClaimResponseError, ClaimResponsePayment, ClaimResponseProcessNote, ClaimResponseInsurance, ClaimResponse, ClinicalImpressionInvestigation, ClinicalImpressionFinding, ClinicalImpression, CodeSystemFilter, CodeSystemProperty, CodeSystemConceptDesignation, CodeSystemConceptProperty, CodeSystemConcept, CodeSystem, CommunicationPayload, Communication, CommunicationRequestPayload, CommunicationRequestRequester, CommunicationRequest, CompartmentDefinitionResource, CompartmentDefinition, CompositionAttester, CompositionRelatesTo, CompositionEvent, CompositionSection, Composition, ConceptMapGroupElementTargetDependsOn, ConceptMapGroupElementTarget, ConceptMapGroupElement, ConceptMapGroupUnmapped, ConceptMapGroup, ConceptMap, ConditionStage, ConditionEvidence, Condition, ConsentActor, ConsentPolicy, ConsentData, ConsentExceptActor, ConsentExceptData, ConsentExcept, Consent, ContractAgent, ContractSigner, ContractValuedItem, ContractTermAgent, ContractTermValuedItem, ContractTerm, ContractFriendly, ContractLegal, ContractRule, Contract, CoverageGrouping, Coverage, DataElementMapping, DataElement, DetectedIssueMitigation, DetectedIssue, DeviceUdi, Device, DeviceComponentProductionSpecification, DeviceComponent, DeviceMetricCalibration, DeviceMetric, DeviceRequestRequester, DeviceRequest, DeviceUseStatement, DiagnosticReportPerformer, DiagnosticReportImage, DiagnosticReport, DocumentManifestContent, DocumentManifestRelated, DocumentManifest, DocumentReferenceRelatesTo, DocumentReferenceContent, DocumentReferenceContextRelated, DocumentReferenceContext, DocumentReference, DomainResource, EligibilityRequest, EligibilityResponseInsuranceBenefitBalanceFinancial, EligibilityResponseInsuranceBenefitBalance, EligibilityResponseInsurance, EligibilityResponseError, EligibilityResponse, EncounterStatusHistory, EncounterClassHistory, EncounterParticipant, EncounterDiagnosis, EncounterHospitalization, EncounterLocation, Encounter, Endpoint, EnrollmentRequest, EnrollmentResponse, EpisodeOfCareStatusHistory, EpisodeOfCareDiagnosis, EpisodeOfCare, ExpansionProfileFixedVersion, ExpansionProfileExcludedSystem, ExpansionProfileDesignationIncludeDesignation, ExpansionProfileDesignationInclude, ExpansionProfileDesignationExcludeDesignation, ExpansionProfileDesignationExclude, ExpansionProfileDesignation, ExpansionProfile, ExplanationOfBenefitRelated, ExplanationOfBenefitPayee, ExplanationOfBenefitInformation, ExplanationOfBenefitCareTeam, ExplanationOfBenefitDiagnosis, ExplanationOfBenefitProcedure, ExplanationOfBenefitInsurance, ExplanationOfBenefitAccident, ExplanationOfBenefitItemAdjudication, ExplanationOfBenefitItemDetailSubDetail, ExplanationOfBenefitItemDetail, ExplanationOfBenefitItem, ExplanationOfBenefitAddItemDetail, ExplanationOfBenefitAddItem, ExplanationOfBenefitPayment, ExplanationOfBenefitProcessNote, ExplanationOfBenefitBenefitBalanceFinancial, ExplanationOfBenefitBenefitBalance, ExplanationOfBenefit, FamilyMemberHistoryCondition, FamilyMemberHistory, Flag, GoalTarget, Goal, GraphDefinitionLinkTargetCompartment, GraphDefinitionLinkTarget, GraphDefinitionLink, GraphDefinition, GroupCharacteristic, GroupMember, Group, GuidanceResponse, HealthcareServiceAvailableTime, HealthcareServiceNotAvailable, HealthcareService, ImagingManifestStudySeriesInstance, ImagingManifestStudySeries, ImagingManifestStudy, ImagingManifest, ImagingStudySeriesInstance, ImagingStudySeries, ImagingStudy, ImmunizationPractitioner, ImmunizationExplanation, ImmunizationReaction, ImmunizationVaccinationProtocol, Immunization, ImmunizationRecommendationRecommendationDateCriterion, ImmunizationRecommendationRecommendationProtocol, ImmunizationRecommendationRecommendation, ImmunizationRecommendation, ImplementationGuideDependency, ImplementationGuidePackageResource, ImplementationGuidePackage, ImplementationGuideGlobal, ImplementationGuidePage, ImplementationGuide, Library, LinkageItem, Linkage, ListEntry, List, LocationPosition, Location, MeasureGroupPopulation, MeasureGroupStratifier, MeasureGroup, MeasureSupplementalData, Measure, MeasureReportGroupPopulation, MeasureReportGroupStratifierStratumPopulation, MeasureReportGroupStratifierStratum, MeasureReportGroupStratifier, MeasureReportGroup, MeasureReport, Media, MedicationIngredient, MedicationPackageContent, MedicationPackageBatch, MedicationPackage, Medication, MedicationAdministrationPerformer, MedicationAdministrationDosage, MedicationAdministration, MedicationDispensePerformer, MedicationDispenseSubstitution, MedicationDispense, MedicationRequestRequester, MedicationRequestDispenseRequest, MedicationRequestSubstitution, MedicationRequest, MedicationStatement, MessageDefinitionFocus, MessageDefinitionAllowedResponse, MessageDefinition, MessageHeaderDestination, MessageHeaderSource, MessageHeaderResponse, MessageHeader, NamingSystemUniqueId, NamingSystem, NutritionOrderOralDietNutrient, NutritionOrderOralDietTexture, NutritionOrderOralDiet, NutritionOrderSupplement, NutritionOrderEnteralFormulaAdministration, NutritionOrderEnteralFormula, NutritionOrder, ObservationReferenceRange, ObservationRelated, ObservationComponent, Observation, OperationDefinitionParameterBinding, OperationDefinitionParameter, OperationDefinitionOverload, OperationDefinition, OperationOutcomeIssue, OperationOutcome, OrganizationContact, Organization, ParametersParameter, Parameters, PatientContact, PatientAnimal, PatientCommunication, PatientLink, Patient, PaymentNotice, PaymentReconciliationDetail, PaymentReconciliationProcessNote, PaymentReconciliation, PersonLink, Person, PlanDefinitionGoalTarget, PlanDefinitionGoal, PlanDefinitionActionCondition, PlanDefinitionActionRelatedAction, PlanDefinitionActionParticipant, PlanDefinitionActionDynamicValue, PlanDefinitionAction, PlanDefinition, PractitionerQualification, Practitioner, PractitionerRoleAvailableTime, PractitionerRoleNotAvailable, PractitionerRole, ProcedurePerformer, ProcedureFocalDevice, Procedure, ProcedureRequestRequester, ProcedureRequest, ProcessRequestItem, ProcessRequest, ProcessResponseProcessNote, ProcessResponse, ProvenanceAgent, ProvenanceEntity, Provenance, QuestionnaireItemEnableWhen, QuestionnaireItemOption, QuestionnaireItem, Questionnaire, QuestionnaireResponseItemAnswer, QuestionnaireResponseItem, QuestionnaireResponse, ReferralRequestRequester, ReferralRequest, RelatedPerson, RequestGroupActionCondition, RequestGroupActionRelatedAction, RequestGroupAction, RequestGroup, ResearchStudyArm, ResearchStudy, ResearchSubject, Resource, RiskAssessmentPrediction, RiskAssessment, Schedule, SearchParameterComponent, SearchParameter, SequenceReferenceSeq, SequenceVariant, SequenceQuality, SequenceRepository, Sequence, ServiceDefinition, Slot, SpecimenCollection, SpecimenProcessing, SpecimenContainer, Specimen, StructureDefinitionMapping, StructureDefinitionSnapshot, StructureDefinitionDifferential, StructureDefinition, StructureMapStructure, StructureMapGroupInput, StructureMapGroupRuleSource, StructureMapGroupRuleTargetParameter, StructureMapGroupRuleTarget, StructureMapGroupRuleDependent, StructureMapGroupRule, StructureMapGroup, StructureMap, SubscriptionChannel, Subscription, SubstanceInstance, SubstanceIngredient, Substance, SupplyDeliverySuppliedItem, SupplyDelivery, SupplyRequestOrderedItem, SupplyRequestRequester, SupplyRequest, TaskRequester, TaskRestriction, TaskInput, TaskOutput, Task, TestReportParticipant, TestReportSetupActionOperation, TestReportSetupActionAssert, TestReportSetupAction, TestReportSetup, TestReportTestAction, TestReportTest, TestReportTeardownAction, TestReportTeardown, TestReport, TestScriptOrigin, TestScriptDestination, TestScriptMetadataLink, TestScriptMetadataCapability, TestScriptMetadata, TestScriptFixture, TestScriptVariable, TestScriptRuleParam, TestScriptRule, TestScriptRulesetRuleParam, TestScriptRulesetRule, TestScriptRuleset, TestScriptSetupActionOperationRequestHeader, TestScriptSetupActionOperation, TestScriptSetupActionAssertRuleParam, TestScriptSetupActionAssertRule, TestScriptSetupActionAssertRulesetRuleParam, TestScriptSetupActionAssertRulesetRule, TestScriptSetupActionAssertRuleset, TestScriptSetupActionAssert, TestScriptSetupAction, TestScriptSetup, TestScriptTestAction, TestScriptTest, TestScriptTeardownAction, TestScriptTeardown, TestScript, ValueSetComposeIncludeConceptDesignation, ValueSetComposeIncludeConcept, ValueSetComposeIncludeFilter, ValueSetComposeInclude, ValueSetCompose, ValueSetExpansionParameter, ValueSetExpansionContains, ValueSetExpansion, ValueSet, VisionPrescriptionDispense, VisionPrescription, FhirResource } from "fhir/r3"
import { IsString, IsOptional, IsArray, ValidateNested, IsNotEmpty, IsIn, IsNumber, IsBoolean } from "class-validator"
import { Type } from "class-transformer"

namespace r3 {
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
  export class ContactDetailDto implements ContactDetail {
    @IsOptional()
    @IsString()
    name?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ContactPointDto)
    telecom?: ContactPoint[]

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
    @IsIn(["phone", "fax", "email", "pager", "url", "sms", "other"])
    system: "phone" | "fax" | "email" | "pager" | "url" | "sms" | "other"

    @IsNotEmpty()
    @IsIn(["home", "work", "temp", "old", "mobile"])
    use: "home" | "work" | "temp" | "old" | "mobile"

    @IsOptional()
    @IsString()
    value?: string

  }
  export class ContributorDto implements Contributor {
    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ContactDetailDto)
    contact?: ContactDetail[]

    @IsNotEmpty()
    @IsString()
    name: string

    @IsNotEmpty()
    @IsIn(["author", "editor", "reviewer", "endorser"])
    type: "author" | "editor" | "reviewer" | "endorser"

  }
  export class CountDto extends QuantityDto { }

  export class DataRequirementCodeFilterDto implements DataRequirementCodeFilter {
    @IsNotEmpty()
    @IsString()
    path: string

    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    valueCode?: string[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    valueCodeableConcept?: CodeableConcept[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodingDto)
    valueCoding?: Coding[]

    @IsOptional()
    @IsString()
    valueSetString?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    valueSetReference?: Reference

  }
  export class DataRequirementDateFilterDto implements DataRequirementDateFilter {
    @IsNotEmpty()
    @IsString()
    path: string

    @IsOptional()
    @IsString()
    valueDateTime?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => PeriodDto)
    valuePeriod?: Period

    @IsOptional()
    @ValidateNested()
    @Type(() => DurationDto)
    valueDuration?: Duration

  }
  export class DataRequirementDto implements DataRequirement {
    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => DataRequirementCodeFilterDto)
    codeFilter?: DataRequirementCodeFilter[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => DataRequirementDateFilterDto)
    dateFilter?: DataRequirementDateFilter[]

    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    mustSupport?: string[]

    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    profile?: string[]

    @IsNotEmpty()
    @IsString()
    type: string

  }
  export class DistanceDto extends QuantityDto { }

  export class DosageDto implements Dosage {
    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    additionalInstruction?: CodeableConcept[]

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
    @Type(() => QuantityDto)
    maxDosePerAdministration?: Quantity

    @IsOptional()
    @ValidateNested()
    @Type(() => QuantityDto)
    maxDosePerLifetime?: Quantity

    @IsOptional()
    @ValidateNested()
    @Type(() => RatioDto)
    maxDosePerPeriod?: Ratio

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    method?: CodeableConcept

    @IsOptional()
    @IsString()
    patientInstruction?: string

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
    @Type(() => QuantityDto)
    rateQuantity?: Quantity

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    route?: CodeableConcept

    @IsOptional()
    @IsNumber()
    sequence?: number

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    site?: CodeableConcept

    @IsOptional()
    @IsString()
    text?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => TimingDto)
    timing?: Timing

  }
  export class DurationDto extends QuantityDto { }

  export class ElementDto implements Element {
    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ExtensionDto)
    extension?: Extension[]

    @IsOptional()
    @IsString()
    id?: string

  }
  export class ElementDefinitionSlicingDiscriminatorDto implements ElementDefinitionSlicingDiscriminator {
    @IsNotEmpty()
    @IsString()
    path: string

    @IsNotEmpty()
    @IsIn(["value", "exists", "pattern", "type", "profile"])
    type: "value" | "exists" | "pattern" | "type" | "profile"

  }
  export class ElementDefinitionSlicingDto implements ElementDefinitionSlicing {
    @IsOptional()
    @IsString()
    description?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ElementDefinitionSlicingDiscriminatorDto)
    discriminator?: ElementDefinitionSlicingDiscriminator[]

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
    @IsString()
    profile?: string

    @IsOptional()
    @IsString()
    targetProfile?: string

    @IsNotEmpty()
    @IsIn(["either", "independent", "specific"])
    versioning: "either" | "independent" | "specific"

  }
  export class ElementDefinitionExampleDto implements ElementDefinitionExample {
    @IsNotEmpty()
    @IsString()
    label: string

    @IsOptional()
    @IsString()
    valueBase64Binary?: string

    @IsNotEmpty()
    @IsBoolean()
    valueBoolean: boolean

    @IsOptional()
    @IsString()
    valueCode?: string

    @IsOptional()
    @IsString()
    valueDate?: string

    @IsOptional()
    @IsString()
    valueDateTime?: string

    @IsOptional()
    @IsNumber()
    valueDecimal?: number

    @IsOptional()
    @IsString()
    valueId?: string

    @IsOptional()
    @IsString()
    valueInstant?: string

    @IsOptional()
    @IsNumber()
    valueInteger?: number

    @IsOptional()
    @IsString()
    valueMarkdown?: string

    @IsOptional()
    @IsString()
    valueOid?: string

    @IsOptional()
    @IsNumber()
    valuePositiveInt?: number

    @IsOptional()
    @IsString()
    valueString?: string

    @IsOptional()
    @IsString()
    valueTime?: string

    @IsOptional()
    @IsNumber()
    valueUnsignedInt?: number

    @IsOptional()
    @IsString()
    valueUri?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => AddressDto)
    valueAddress?: Address

    @IsOptional()
    @ValidateNested()
    @Type(() => AgeDto)
    valueAge?: Age

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
    @Type(() => CodeableConceptDto)
    valueCodeableConcept?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => CodingDto)
    valueCoding?: Coding

    @IsOptional()
    @ValidateNested()
    @Type(() => ContactPointDto)
    valueContactPoint?: ContactPoint

    @IsOptional()
    @ValidateNested()
    @Type(() => CountDto)
    valueCount?: Count

    @IsOptional()
    @ValidateNested()
    @Type(() => DistanceDto)
    valueDistance?: Distance

    @IsOptional()
    @ValidateNested()
    @Type(() => DurationDto)
    valueDuration?: Duration

    @IsOptional()
    @ValidateNested()
    @Type(() => HumanNameDto)
    valueHumanName?: HumanName

    @IsOptional()
    @ValidateNested()
    @Type(() => IdentifierDto)
    valueIdentifier?: Identifier

    @IsOptional()
    @ValidateNested()
    @Type(() => MoneyDto)
    valueMoney?: Money

    @IsOptional()
    @ValidateNested()
    @Type(() => PeriodDto)
    valuePeriod?: Period

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
    @Type(() => RatioDto)
    valueRatio?: Ratio

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    valueReference?: Reference

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
    @Type(() => TimingDto)
    valueTiming?: Timing

    @IsOptional()
    @ValidateNested()
    @Type(() => MetaDto)
    valueMeta?: Meta

  }
  export class ElementDefinitionConstraintDto implements ElementDefinitionConstraint {
    @IsNotEmpty()
    @IsString()
    expression: string

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

    @IsOptional()
    @IsString()
    source?: string

    @IsOptional()
    @IsString()
    xpath?: string

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
    @IsOptional()
    @IsString()
    comment?: string

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
    comment?: string

    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    condition?: string[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ElementDefinitionConstraintDto)
    constraint?: ElementDefinitionConstraint[]

    @IsOptional()
    @IsString()
    contentReference?: string

    @IsOptional()
    @IsString()
    defaultValueBase64Binary?: string

    @IsNotEmpty()
    @IsBoolean()
    defaultValueBoolean: boolean

    @IsOptional()
    @IsString()
    defaultValueCode?: string

    @IsOptional()
    @IsString()
    defaultValueDate?: string

    @IsOptional()
    @IsString()
    defaultValueDateTime?: string

    @IsOptional()
    @IsNumber()
    defaultValueDecimal?: number

    @IsOptional()
    @IsString()
    defaultValueId?: string

    @IsOptional()
    @IsString()
    defaultValueInstant?: string

    @IsOptional()
    @IsNumber()
    defaultValueInteger?: number

    @IsOptional()
    @IsString()
    defaultValueMarkdown?: string

    @IsOptional()
    @IsString()
    defaultValueOid?: string

    @IsOptional()
    @IsNumber()
    defaultValuePositiveInt?: number

    @IsOptional()
    @IsString()
    defaultValueString?: string

    @IsOptional()
    @IsString()
    defaultValueTime?: string

    @IsOptional()
    @IsNumber()
    defaultValueUnsignedInt?: number

    @IsOptional()
    @IsString()
    defaultValueUri?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => AddressDto)
    defaultValueAddress?: Address

    @IsOptional()
    @ValidateNested()
    @Type(() => AgeDto)
    defaultValueAge?: Age

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
    @Type(() => CodeableConceptDto)
    defaultValueCodeableConcept?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => CodingDto)
    defaultValueCoding?: Coding

    @IsOptional()
    @ValidateNested()
    @Type(() => ContactPointDto)
    defaultValueContactPoint?: ContactPoint

    @IsOptional()
    @ValidateNested()
    @Type(() => CountDto)
    defaultValueCount?: Count

    @IsOptional()
    @ValidateNested()
    @Type(() => DistanceDto)
    defaultValueDistance?: Distance

    @IsOptional()
    @ValidateNested()
    @Type(() => DurationDto)
    defaultValueDuration?: Duration

    @IsOptional()
    @ValidateNested()
    @Type(() => HumanNameDto)
    defaultValueHumanName?: HumanName

    @IsOptional()
    @ValidateNested()
    @Type(() => IdentifierDto)
    defaultValueIdentifier?: Identifier

    @IsOptional()
    @ValidateNested()
    @Type(() => MoneyDto)
    defaultValueMoney?: Money

    @IsOptional()
    @ValidateNested()
    @Type(() => PeriodDto)
    defaultValuePeriod?: Period

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
    @Type(() => RatioDto)
    defaultValueRatio?: Ratio

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    defaultValueReference?: Reference

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
    @Type(() => TimingDto)
    defaultValueTiming?: Timing

    @IsOptional()
    @ValidateNested()
    @Type(() => MetaDto)
    defaultValueMeta?: Meta

    @IsOptional()
    @IsString()
    definition?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ElementDefinitionExampleDto)
    example?: ElementDefinitionExample[]

    @IsOptional()
    @IsString()
    fixedBase64Binary?: string

    @IsNotEmpty()
    @IsBoolean()
    fixedBoolean: boolean

    @IsOptional()
    @IsString()
    fixedCode?: string

    @IsOptional()
    @IsString()
    fixedDate?: string

    @IsOptional()
    @IsString()
    fixedDateTime?: string

    @IsOptional()
    @IsNumber()
    fixedDecimal?: number

    @IsOptional()
    @IsString()
    fixedId?: string

    @IsOptional()
    @IsString()
    fixedInstant?: string

    @IsOptional()
    @IsNumber()
    fixedInteger?: number

    @IsOptional()
    @IsString()
    fixedMarkdown?: string

    @IsOptional()
    @IsString()
    fixedOid?: string

    @IsOptional()
    @IsNumber()
    fixedPositiveInt?: number

    @IsOptional()
    @IsString()
    fixedString?: string

    @IsOptional()
    @IsString()
    fixedTime?: string

    @IsOptional()
    @IsNumber()
    fixedUnsignedInt?: number

    @IsOptional()
    @IsString()
    fixedUri?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => AddressDto)
    fixedAddress?: Address

    @IsOptional()
    @ValidateNested()
    @Type(() => AgeDto)
    fixedAge?: Age

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
    @Type(() => CodeableConceptDto)
    fixedCodeableConcept?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => CodingDto)
    fixedCoding?: Coding

    @IsOptional()
    @ValidateNested()
    @Type(() => ContactPointDto)
    fixedContactPoint?: ContactPoint

    @IsOptional()
    @ValidateNested()
    @Type(() => CountDto)
    fixedCount?: Count

    @IsOptional()
    @ValidateNested()
    @Type(() => DistanceDto)
    fixedDistance?: Distance

    @IsOptional()
    @ValidateNested()
    @Type(() => DurationDto)
    fixedDuration?: Duration

    @IsOptional()
    @ValidateNested()
    @Type(() => HumanNameDto)
    fixedHumanName?: HumanName

    @IsOptional()
    @ValidateNested()
    @Type(() => IdentifierDto)
    fixedIdentifier?: Identifier

    @IsOptional()
    @ValidateNested()
    @Type(() => MoneyDto)
    fixedMoney?: Money

    @IsOptional()
    @ValidateNested()
    @Type(() => PeriodDto)
    fixedPeriod?: Period

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
    @Type(() => RatioDto)
    fixedRatio?: Ratio

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    fixedReference?: Reference

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
    @Type(() => TimingDto)
    fixedTiming?: Timing

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

    @IsOptional()
    @IsString()
    maxValueDate?: string

    @IsOptional()
    @IsString()
    maxValueDateTime?: string

    @IsOptional()
    @IsString()
    maxValueInstant?: string

    @IsOptional()
    @IsString()
    maxValueTime?: string

    @IsOptional()
    @IsNumber()
    maxValueDecimal?: number

    @IsOptional()
    @IsNumber()
    maxValueInteger?: number

    @IsOptional()
    @IsNumber()
    maxValuePositiveInt?: number

    @IsOptional()
    @IsNumber()
    maxValueUnsignedInt?: number

    @IsOptional()
    @ValidateNested()
    @Type(() => QuantityDto)
    maxValueQuantity?: Quantity

    @IsOptional()
    @IsString()
    meaningWhenMissing?: string

    @IsOptional()
    @IsNumber()
    min?: number

    @IsOptional()
    @IsString()
    minValueDate?: string

    @IsOptional()
    @IsString()
    minValueDateTime?: string

    @IsOptional()
    @IsString()
    minValueInstant?: string

    @IsOptional()
    @IsString()
    minValueTime?: string

    @IsOptional()
    @IsNumber()
    minValueDecimal?: number

    @IsOptional()
    @IsNumber()
    minValueInteger?: number

    @IsOptional()
    @IsNumber()
    minValuePositiveInt?: number

    @IsOptional()
    @IsNumber()
    minValueUnsignedInt?: number

    @IsOptional()
    @ValidateNested()
    @Type(() => QuantityDto)
    minValueQuantity?: Quantity

    @IsNotEmpty()
    @IsBoolean()
    mustSupport: boolean

    @IsOptional()
    @IsString()
    orderMeaning?: string

    @IsNotEmpty()
    @IsString()
    path: string

    @IsOptional()
    @IsString()
    patternBase64Binary?: string

    @IsNotEmpty()
    @IsBoolean()
    patternBoolean: boolean

    @IsOptional()
    @IsString()
    patternCode?: string

    @IsOptional()
    @IsString()
    patternDate?: string

    @IsOptional()
    @IsString()
    patternDateTime?: string

    @IsOptional()
    @IsNumber()
    patternDecimal?: number

    @IsOptional()
    @IsString()
    patternId?: string

    @IsOptional()
    @IsString()
    patternInstant?: string

    @IsOptional()
    @IsNumber()
    patternInteger?: number

    @IsOptional()
    @IsString()
    patternMarkdown?: string

    @IsOptional()
    @IsString()
    patternOid?: string

    @IsOptional()
    @IsNumber()
    patternPositiveInt?: number

    @IsOptional()
    @IsString()
    patternString?: string

    @IsOptional()
    @IsString()
    patternTime?: string

    @IsOptional()
    @IsNumber()
    patternUnsignedInt?: number

    @IsOptional()
    @IsString()
    patternUri?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => AddressDto)
    patternAddress?: Address

    @IsOptional()
    @ValidateNested()
    @Type(() => AgeDto)
    patternAge?: Age

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
    @Type(() => CodeableConceptDto)
    patternCodeableConcept?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => CodingDto)
    patternCoding?: Coding

    @IsOptional()
    @ValidateNested()
    @Type(() => ContactPointDto)
    patternContactPoint?: ContactPoint

    @IsOptional()
    @ValidateNested()
    @Type(() => CountDto)
    patternCount?: Count

    @IsOptional()
    @ValidateNested()
    @Type(() => DistanceDto)
    patternDistance?: Distance

    @IsOptional()
    @ValidateNested()
    @Type(() => DurationDto)
    patternDuration?: Duration

    @IsOptional()
    @ValidateNested()
    @Type(() => HumanNameDto)
    patternHumanName?: HumanName

    @IsOptional()
    @ValidateNested()
    @Type(() => IdentifierDto)
    patternIdentifier?: Identifier

    @IsOptional()
    @ValidateNested()
    @Type(() => MoneyDto)
    patternMoney?: Money

    @IsOptional()
    @ValidateNested()
    @Type(() => PeriodDto)
    patternPeriod?: Period

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
    @Type(() => RatioDto)
    patternRatio?: Ratio

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    patternReference?: Reference

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
    @Type(() => TimingDto)
    patternTiming?: Timing

    @IsOptional()
    @ValidateNested()
    @Type(() => MetaDto)
    patternMeta?: Meta

    @IsOptional()
    @IsArray()
    @IsIn(["xmlAttr", "xmlText", "typeAttr", "cdaText", "xhtml"], { each: true })
    representation?: ("xmlAttr" | "xmlText" | "typeAttr" | "cdaText" | "xhtml")[]

    @IsOptional()
    @IsString()
    requirements?: string

    @IsOptional()
    @IsString()
    short?: string

    @IsOptional()
    @IsString()
    sliceName?: string

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

    @IsOptional()
    @IsString()
    valueBase64Binary?: string

    @IsNotEmpty()
    @IsBoolean()
    valueBoolean: boolean

    @IsOptional()
    @IsString()
    valueCode?: string

    @IsOptional()
    @IsString()
    valueDate?: string

    @IsOptional()
    @IsString()
    valueDateTime?: string

    @IsOptional()
    @IsNumber()
    valueDecimal?: number

    @IsOptional()
    @IsString()
    valueId?: string

    @IsOptional()
    @IsString()
    valueInstant?: string

    @IsOptional()
    @IsNumber()
    valueInteger?: number

    @IsOptional()
    @IsString()
    valueMarkdown?: string

    @IsOptional()
    @IsString()
    valueOid?: string

    @IsOptional()
    @IsNumber()
    valuePositiveInt?: number

    @IsOptional()
    @IsString()
    valueString?: string

    @IsOptional()
    @IsString()
    valueTime?: string

    @IsOptional()
    @IsNumber()
    valueUnsignedInt?: number

    @IsOptional()
    @IsString()
    valueUri?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => AddressDto)
    valueAddress?: Address

    @IsOptional()
    @ValidateNested()
    @Type(() => AgeDto)
    valueAge?: Age

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
    @Type(() => CodeableConceptDto)
    valueCodeableConcept?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => CodingDto)
    valueCoding?: Coding

    @IsOptional()
    @ValidateNested()
    @Type(() => ContactPointDto)
    valueContactPoint?: ContactPoint

    @IsOptional()
    @ValidateNested()
    @Type(() => CountDto)
    valueCount?: Count

    @IsOptional()
    @ValidateNested()
    @Type(() => DistanceDto)
    valueDistance?: Distance

    @IsOptional()
    @ValidateNested()
    @Type(() => DurationDto)
    valueDuration?: Duration

    @IsOptional()
    @ValidateNested()
    @Type(() => HumanNameDto)
    valueHumanName?: HumanName

    @IsOptional()
    @ValidateNested()
    @Type(() => IdentifierDto)
    valueIdentifier?: Identifier

    @IsOptional()
    @ValidateNested()
    @Type(() => MoneyDto)
    valueMoney?: Money

    @IsOptional()
    @ValidateNested()
    @Type(() => PeriodDto)
    valuePeriod?: Period

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
    @Type(() => RatioDto)
    valueRatio?: Ratio

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    valueReference?: Reference

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
    @Type(() => TimingDto)
    valueTiming?: Timing

    @IsOptional()
    @ValidateNested()
    @Type(() => MetaDto)
    valueMeta?: Meta

  }
  export class HumanNameDto implements HumanName {
    @IsOptional()
    @IsString()
    family?: string

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
  export class ParameterDefinitionDto implements ParameterDefinition {
    @IsOptional()
    @IsString()
    documentation?: string

    @IsOptional()
    @IsString()
    max?: string

    @IsOptional()
    @IsNumber()
    min?: number

    @IsOptional()
    @IsString()
    name?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    profile?: Reference

    @IsNotEmpty()
    @IsString()
    type: string

    @IsNotEmpty()
    @IsIn(["in", "out"])
    use: "in" | "out"

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
    @ValidateNested()
    @Type(() => IdentifierDto)
    identifier?: Identifier

    @IsOptional()
    @IsString()
    reference?: string

  }
  export class RelatedArtifactDto implements RelatedArtifact {
    @IsOptional()
    @IsString()
    citation?: string

    @IsOptional()
    @IsString()
    display?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => AttachmentDto)
    document?: Attachment

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    resource?: Reference

    @IsNotEmpty()
    @IsIn(["documentation", "justification", "citation", "predecessor", "successor", "derived-from", "depends-on", "composed-of"])
    type: "documentation" | "justification" | "citation" | "predecessor" | "successor" | "derived-from" | "depends-on" | "composed-of"

    @IsOptional()
    @IsString()
    url?: string

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
    @IsOptional()
    @IsString()
    blob?: string

    @IsOptional()
    @IsString()
    contentType?: string

    @IsOptional()
    @IsString()
    onBehalfOfUri?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    onBehalfOfReference?: Reference

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
  export class TimingRepeatDto implements TimingRepeat {
    @IsOptional()
    @ValidateNested()
    @Type(() => DurationDto)
    boundsDuration?: Duration

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
    countMax?: number

    @IsOptional()
    @IsArray()
    @IsIn(["mon", "tue", "wed", "thu", "fri", "sat", "sun"], { each: true })
    dayOfWeek?: ("mon" | "tue" | "wed" | "thu" | "fri" | "sat" | "sun")[]

    @IsOptional()
    @IsNumber()
    duration?: number

    @IsOptional()
    @IsNumber()
    durationMax?: number

    @IsNotEmpty()
    @IsIn(["s", "min", "h", "d", "wk", "mo", "a"])
    durationUnit: "s" | "min" | "h" | "d" | "wk" | "mo" | "a"

    @IsOptional()
    @IsNumber()
    frequency?: number

    @IsOptional()
    @IsNumber()
    frequencyMax?: number

    @IsOptional()
    @IsNumber()
    offset?: number

    @IsOptional()
    @IsNumber()
    period?: number

    @IsOptional()
    @IsNumber()
    periodMax?: number

    @IsNotEmpty()
    @IsIn(["s", "min", "h", "d", "wk", "mo", "a"])
    periodUnit: "s" | "min" | "h" | "d" | "wk" | "mo" | "a"

    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    timeOfDay?: string[]

    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    when?: string[]

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
  export class TriggerDefinitionDto implements TriggerDefinition {
    @IsOptional()
    @ValidateNested()
    @Type(() => DataRequirementDto)
    eventData?: DataRequirement

    @IsOptional()
    @IsString()
    eventName?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => TimingDto)
    eventTimingTiming?: Timing

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    eventTimingReference?: Reference

    @IsOptional()
    @IsString()
    eventTimingDate?: string

    @IsOptional()
    @IsString()
    eventTimingDateTime?: string

    @IsNotEmpty()
    @IsIn(["named-event", "periodic", "data-added", "data-modified", "data-removed", "data-accessed", "data-access-ended"])
    type: "named-event" | "periodic" | "data-added" | "data-modified" | "data-removed" | "data-accessed" | "data-access-ended"

  }
  export class UsageContextDto implements UsageContext {
    @IsNotEmpty()
    @ValidateNested()
    @Type(() => CodingDto)
    code: Coding

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    valueCodeableConcept?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => QuantityDto)
    valueQuantity?: Quantity

    @IsOptional()
    @ValidateNested()
    @Type(() => RangeDto)
    valueRange?: Range

  }
  export class AccountCoverageDto implements AccountCoverage {
    @IsNotEmpty()
    @ValidateNested()
    @Type(() => ReferenceDto)
    coverage: Reference

    @IsOptional()
    @IsNumber()
    priority?: number

  }
  export class AccountGuarantorDto implements AccountGuarantor {
    @IsNotEmpty()
    @IsBoolean()
    onHold: boolean

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => ReferenceDto)
    party: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => PeriodDto)
    period?: Period

  }
  export class AccountDto implements Account {
    @IsNotEmpty()
    @IsIn(["Account"])
    resourceType: "Account"

    @IsOptional()
    @ValidateNested()
    @Type(() => PeriodDto)
    active?: Period

    @IsOptional()
    @ValidateNested()
    @Type(() => MoneyDto)
    balance?: Money

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => AccountCoverageDto)
    coverage?: AccountCoverage[]

    @IsOptional()
    @IsString()
    description?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => AccountGuarantorDto)
    guarantor?: AccountGuarantor[]

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
    @ValidateNested()
    @Type(() => PeriodDto)
    period?: Period

    @IsNotEmpty()
    @IsIn(["active", "inactive", "entered-in-error"])
    status: "active" | "inactive" | "entered-in-error"

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    subject?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    type?: CodeableConcept

  }
  export class ActivityDefinitionParticipantDto implements ActivityDefinitionParticipant {
    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    role?: CodeableConcept

    @IsNotEmpty()
    @IsIn(["patient", "practitioner", "related-person"])
    type: "patient" | "practitioner" | "related-person"

  }
  export class ActivityDefinitionDynamicValueDto implements ActivityDefinitionDynamicValue {
    @IsOptional()
    @IsString()
    description?: string

    @IsOptional()
    @IsString()
    expression?: string

    @IsOptional()
    @IsString()
    language?: string

    @IsOptional()
    @IsString()
    path?: string

  }
  export class ActivityDefinitionDto implements ActivityDefinition {
    @IsNotEmpty()
    @IsIn(["ActivityDefinition"])
    resourceType: "ActivityDefinition"

    @IsOptional()
    @IsString()
    approvalDate?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    bodySite?: CodeableConcept[]

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    code?: CodeableConcept

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ContactDetailDto)
    contact?: ContactDetail[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ContributorDto)
    contributor?: Contributor[]

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
    @Type(() => DosageDto)
    dosage?: Dosage[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ActivityDefinitionDynamicValueDto)
    dynamicValue?: ActivityDefinitionDynamicValue[]

    @IsOptional()
    @ValidateNested()
    @Type(() => PeriodDto)
    effectivePeriod?: Period

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
    @Type(() => CodeableConceptDto)
    jurisdiction?: CodeableConcept[]

    @IsOptional()
    @IsString()
    kind?: string

    @IsOptional()
    @IsString()
    lastReviewDate?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    library?: Reference[]

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    location?: Reference

    @IsOptional()
    @IsString()
    name?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ActivityDefinitionParticipantDto)
    participant?: ActivityDefinitionParticipant[]

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    productReference?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    productCodeableConcept?: CodeableConcept

    @IsOptional()
    @IsString()
    publisher?: string

    @IsOptional()
    @IsString()
    purpose?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => QuantityDto)
    quantity?: Quantity

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => RelatedArtifactDto)
    relatedArtifact?: RelatedArtifact[]

    @IsNotEmpty()
    @IsIn(["active", "draft", "retired", "unknown"])
    status: "active" | "draft" | "retired" | "unknown"

    @IsOptional()
    @ValidateNested()
    @Type(() => TimingDto)
    timingTiming?: Timing

    @IsOptional()
    @IsString()
    timingDateTime?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => PeriodDto)
    timingPeriod?: Period

    @IsOptional()
    @ValidateNested()
    @Type(() => RangeDto)
    timingRange?: Range

    @IsOptional()
    @IsString()
    title?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    topic?: CodeableConcept[]

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    transform?: Reference

    @IsOptional()
    @IsString()
    url?: string

    @IsOptional()
    @IsString()
    usage?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => UsageContextDto)
    useContext?: UsageContext[]

    @IsOptional()
    @IsString()
    version?: string

  }
  export class AdverseEventSuspectEntityDto implements AdverseEventSuspectEntity {
    @IsNotEmpty()
    @IsIn(["causality1", "causality2"])
    causality: "causality1" | "causality2"

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    causalityAssessment?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    causalityAuthor?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    causalityMethod?: CodeableConcept

    @IsOptional()
    @IsString()
    causalityProductRelatedness?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    causalityResult?: CodeableConcept

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => ReferenceDto)
    instance: Reference

  }
  export class AdverseEventDto implements AdverseEvent {
    @IsNotEmpty()
    @IsIn(["AdverseEvent"])
    resourceType: "AdverseEvent"

    @IsNotEmpty()
    @IsIn(["AE", "PAE"])
    category: "AE" | "PAE"

    @IsOptional()
    @IsString()
    date?: string

    @IsOptional()
    @IsString()
    description?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    eventParticipant?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => IdentifierDto)
    identifier?: Identifier

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    location?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    outcome?: CodeableConcept

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    reaction?: Reference[]

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    recorder?: Reference

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    referenceDocument?: Reference[]

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    seriousness?: CodeableConcept

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    study?: Reference[]

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    subject?: Reference

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    subjectMedicalHistory?: Reference[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => AdverseEventSuspectEntityDto)
    suspectEntity?: AdverseEventSuspectEntity[]

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    type?: CodeableConcept

  }
  export class AllergyIntoleranceReactionDto implements AllergyIntoleranceReaction {
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
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => AnnotationDto)
    note?: Annotation[]

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

    @IsOptional()
    @IsString()
    assertedDate?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    asserter?: Reference

    @IsOptional()
    @IsArray()
    @IsIn(["food", "medication", "environment", "biologic"], { each: true })
    category?: ("food" | "medication" | "environment" | "biologic")[]

    @IsNotEmpty()
    @IsIn(["active", "inactive", "resolved"])
    clinicalStatus: "active" | "inactive" | "resolved"

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    code?: CodeableConcept

    @IsNotEmpty()
    @IsIn(["low", "high", "unable-to-assess"])
    criticality: "low" | "high" | "unable-to-assess"

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => IdentifierDto)
    identifier?: Identifier[]

    @IsOptional()
    @IsString()
    lastOccurrence?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => AnnotationDto)
    note?: Annotation[]

    @IsOptional()
    @IsString()
    onsetDateTime?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => AgeDto)
    onsetAge?: Age

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
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => AllergyIntoleranceReactionDto)
    reaction?: AllergyIntoleranceReaction[]

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    recorder?: Reference

    @IsNotEmpty()
    @IsIn(["allergy", "intolerance"])
    type: "allergy" | "intolerance"

    @IsNotEmpty()
    @IsIn(["entered-in-error", "unconfirmed", "confirmed", "refuted"])
    verificationStatus: "entered-in-error" | "unconfirmed" | "confirmed" | "refuted"

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
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    appointmentType?: CodeableConcept

    @IsOptional()
    @IsString()
    comment?: string

    @IsOptional()
    @IsString()
    created?: string

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
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    reason?: CodeableConcept[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => PeriodDto)
    requestedPeriod?: Period[]

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    serviceCategory?: CodeableConcept

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    serviceType?: CodeableConcept[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    slot?: Reference[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    specialty?: CodeableConcept[]

    @IsOptional()
    @IsString()
    start?: string

    @IsNotEmpty()
    @IsIn(["entered-in-error", "proposed", "pending", "booked", "arrived", "fulfilled", "cancelled", "noshow"])
    status: "entered-in-error" | "proposed" | "pending" | "booked" | "arrived" | "fulfilled" | "cancelled" | "noshow"

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    supportingInformation?: Reference[]

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
    @IsIn(["accepted", "declined", "tentative", "needs-action"])
    participantStatus: "accepted" | "declined" | "tentative" | "needs-action"

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    participantType?: CodeableConcept[]

    @IsOptional()
    @IsString()
    start?: string

  }
  export class AuditEventAgentNetworkDto implements AuditEventAgentNetwork {
    @IsOptional()
    @IsString()
    address?: string

    @IsOptional()
    @IsString()
    type?: string

  }
  export class AuditEventAgentDto implements AuditEventAgent {
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
    @Type(() => AuditEventAgentNetworkDto)
    network?: AuditEventAgentNetwork

    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    policy?: string[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    purposeOfUse?: CodeableConcept[]

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
  export class AuditEventEntityDetailDto implements AuditEventEntityDetail {
    @IsNotEmpty()
    @IsString()
    type: string

    @IsNotEmpty()
    @IsString()
    value: string

  }
  export class AuditEventEntityDto implements AuditEventEntity {
    @IsOptional()
    @IsString()
    description?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => AuditEventEntityDetailDto)
    detail?: AuditEventEntityDetail[]

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

    @IsOptional()
    @IsString()
    action?: string

    @IsNotEmpty()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => AuditEventAgentDto)
    agent: AuditEventAgent[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => AuditEventEntityDto)
    entity?: AuditEventEntity[]

    @IsOptional()
    @IsString()
    outcome?: string

    @IsOptional()
    @IsString()
    outcomeDesc?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    purposeOfEvent?: CodeableConcept[]

    @IsNotEmpty()
    @IsString()
    recorded: string

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => AuditEventSourceDto)
    source: AuditEventSource

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

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    securityContext?: Reference

  }
  export class BodySiteDto implements BodySite {
    @IsNotEmpty()
    @IsIn(["BodySite"])
    resourceType: "BodySite"

    @IsNotEmpty()
    @IsBoolean()
    active: boolean

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

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => ReferenceDto)
    patient: Reference

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    qualifier?: CodeableConcept[]

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
    outcome: Account | ActivityDefinition | AdverseEvent | AllergyIntolerance | Appointment | AppointmentResponse | AuditEvent | Basic | Binary | BodySite | Bundle<FhirResource> | CapabilityStatement | CarePlan | CareTeam | ChargeItem | Claim | ClaimResponse | ClinicalImpression | CodeSystem | Communication | CommunicationRequest | CompartmentDefinition | Composition | ConceptMap | Condition | Consent | Contract | Coverage | DataElement | DetectedIssue | Device | DeviceComponent | DeviceMetric | DeviceRequest | DeviceUseStatement | DiagnosticReport | DocumentManifest | DocumentReference | EligibilityRequest | EligibilityResponse | Encounter | Endpoint | EnrollmentRequest | EnrollmentResponse | EpisodeOfCare | ExpansionProfile | ExplanationOfBenefit | FamilyMemberHistory | Flag | Goal | GraphDefinition | Group | GuidanceResponse | HealthcareService | ImagingManifest | ImagingStudy | Immunization | ImmunizationRecommendation | ImplementationGuide | Library | Linkage | List | Location | Measure | MeasureReport | Media | Medication | MedicationAdministration | MedicationDispense | MedicationRequest | MedicationStatement | MessageDefinition | MessageHeader | NamingSystem | NutritionOrder | Observation | OperationDefinition | OperationOutcome | Organization | Parameters | Patient | PaymentNotice | PaymentReconciliation | Person | PlanDefinition | Practitioner | PractitionerRole | Procedure | ProcedureRequest | ProcessRequest | ProcessResponse | Provenance | Questionnaire | QuestionnaireResponse | ReferralRequest | RelatedPerson | RequestGroup | ResearchStudy | ResearchSubject | RiskAssessment | Schedule | SearchParameter | Sequence | ServiceDefinition | Slot | Specimen | StructureDefinition | StructureMap | Subscription | Substance | SupplyDelivery | SupplyRequest | Task | TestReport | TestScript | ValueSet | VisionPrescription

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
    @ValidateNested({ each: true })
    entry?: BundleEntry<BundleContentType>[]

    @IsOptional()
    @ValidateNested()
    @Type(() => IdentifierDto)
    identifier?: Identifier

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
  export class CapabilityStatementSoftwareDto implements CapabilityStatementSoftware {
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
  export class CapabilityStatementImplementationDto implements CapabilityStatementImplementation {
    @IsNotEmpty()
    @IsString()
    description: string

    @IsOptional()
    @IsString()
    url?: string

  }
  export class CapabilityStatementRestSecurityCertificateDto implements CapabilityStatementRestSecurityCertificate {
    @IsOptional()
    @IsString()
    blob?: string

    @IsOptional()
    @IsString()
    type?: string

  }
  export class CapabilityStatementRestSecurityDto implements CapabilityStatementRestSecurity {
    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CapabilityStatementRestSecurityCertificateDto)
    certificate?: CapabilityStatementRestSecurityCertificate[]

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
  export class CapabilityStatementRestResourceInteractionDto implements CapabilityStatementRestResourceInteraction {
    @IsNotEmpty()
    @IsIn(["read", "vread", "update", "patch", "delete", "history-instance", "history-type", "create", "search-type"])
    code: "read" | "vread" | "update" | "patch" | "delete" | "history-instance" | "history-type" | "create" | "search-type"

    @IsOptional()
    @IsString()
    documentation?: string

  }
  export class CapabilityStatementRestResourceSearchParamDto implements CapabilityStatementRestResourceSearchParam {
    @IsOptional()
    @IsString()
    definition?: string

    @IsOptional()
    @IsString()
    documentation?: string

    @IsNotEmpty()
    @IsString()
    name: string

    @IsNotEmpty()
    @IsIn(["string", "number", "date", "token", "reference", "composite", "quantity", "uri"])
    type: "string" | "number" | "date" | "token" | "reference" | "composite" | "quantity" | "uri"

  }
  export class CapabilityStatementRestResourceDto implements CapabilityStatementRestResource {
    @IsNotEmpty()
    @IsBoolean()
    conditionalCreate: boolean

    @IsNotEmpty()
    @IsIn(["not-supported", "single", "multiple"])
    conditionalDelete: "not-supported" | "single" | "multiple"

    @IsNotEmpty()
    @IsIn(["not-supported", "modified-since", "not-match", "full-support"])
    conditionalRead: "not-supported" | "modified-since" | "not-match" | "full-support"

    @IsNotEmpty()
    @IsBoolean()
    conditionalUpdate: boolean

    @IsOptional()
    @IsString()
    documentation?: string

    @IsNotEmpty()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CapabilityStatementRestResourceInteractionDto)
    interaction: CapabilityStatementRestResourceInteraction[]

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    profile?: Reference

    @IsNotEmpty()
    @IsBoolean()
    readHistory: boolean

    @IsOptional()
    @IsArray()
    @IsIn(["literal", "logical", "resolves", "enforced", "local"], { each: true })
    referencePolicy?: ("literal" | "logical" | "resolves" | "enforced" | "local")[]

    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    searchInclude?: string[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CapabilityStatementRestResourceSearchParamDto)
    searchParam?: CapabilityStatementRestResourceSearchParam[]

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
  export class CapabilityStatementRestInteractionDto implements CapabilityStatementRestInteraction {
    @IsNotEmpty()
    @IsIn(["transaction", "batch", "search-system", "history-system"])
    code: "transaction" | "batch" | "search-system" | "history-system"

    @IsOptional()
    @IsString()
    documentation?: string

  }
  export class CapabilityStatementRestOperationDto implements CapabilityStatementRestOperation {
    @IsNotEmpty()
    @ValidateNested()
    @Type(() => ReferenceDto)
    definition: Reference

    @IsNotEmpty()
    @IsString()
    name: string

  }
  export class CapabilityStatementRestDto implements CapabilityStatementRest {
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
    @Type(() => CapabilityStatementRestInteractionDto)
    interaction?: CapabilityStatementRestInteraction[]

    @IsNotEmpty()
    @IsIn(["client", "server"])
    mode: "client" | "server"

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CapabilityStatementRestOperationDto)
    operation?: CapabilityStatementRestOperation[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CapabilityStatementRestResourceDto)
    resource?: CapabilityStatementRestResource[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CapabilityStatementRestResourceSearchParamDto)
    searchParam?: CapabilityStatementRestResourceSearchParam[]

    @IsOptional()
    @ValidateNested()
    @Type(() => CapabilityStatementRestSecurityDto)
    security?: CapabilityStatementRestSecurity

  }
  export class CapabilityStatementMessagingEndpointDto implements CapabilityStatementMessagingEndpoint {
    @IsNotEmpty()
    @IsString()
    address: string

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => CodingDto)
    protocol: Coding

  }
  export class CapabilityStatementMessagingSupportedMessageDto implements CapabilityStatementMessagingSupportedMessage {
    @IsNotEmpty()
    @ValidateNested()
    @Type(() => ReferenceDto)
    definition: Reference

    @IsNotEmpty()
    @IsIn(["sender", "receiver"])
    mode: "sender" | "receiver"

  }
  export class CapabilityStatementMessagingEventDto implements CapabilityStatementMessagingEvent {
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
  export class CapabilityStatementMessagingDto implements CapabilityStatementMessaging {
    @IsOptional()
    @IsString()
    documentation?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CapabilityStatementMessagingEndpointDto)
    endpoint?: CapabilityStatementMessagingEndpoint[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CapabilityStatementMessagingEventDto)
    event?: CapabilityStatementMessagingEvent[]

    @IsOptional()
    @IsNumber()
    reliableCache?: number

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CapabilityStatementMessagingSupportedMessageDto)
    supportedMessage?: CapabilityStatementMessagingSupportedMessage[]

  }
  export class CapabilityStatementDocumentDto implements CapabilityStatementDocument {
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
  export class CapabilityStatementDto implements CapabilityStatement {
    @IsNotEmpty()
    @IsIn(["CapabilityStatement"])
    resourceType: "CapabilityStatement"

    @IsNotEmpty()
    @IsIn(["both", "extensions", "no", "elements"])
    acceptUnknown: "both" | "extensions" | "no" | "elements"

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ContactDetailDto)
    contact?: ContactDetail[]

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
    @Type(() => CapabilityStatementDocumentDto)
    document?: CapabilityStatementDocument[]

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
    @Type(() => CapabilityStatementImplementationDto)
    implementation?: CapabilityStatementImplementation

    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    implementationGuide?: string[]

    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    instantiates?: string[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    jurisdiction?: CodeableConcept[]

    @IsNotEmpty()
    @IsIn(["instance", "capability", "requirements"])
    kind: "instance" | "capability" | "requirements"

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CapabilityStatementMessagingDto)
    messaging?: CapabilityStatementMessaging[]

    @IsOptional()
    @IsString()
    name?: string

    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    patchFormat?: string[]

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
    purpose?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CapabilityStatementRestDto)
    rest?: CapabilityStatementRest[]

    @IsOptional()
    @ValidateNested()
    @Type(() => CapabilityStatementSoftwareDto)
    software?: CapabilityStatementSoftware

    @IsNotEmpty()
    @IsIn(["active", "draft", "retired", "unknown"])
    status: "active" | "draft" | "retired" | "unknown"

    @IsOptional()
    @IsString()
    title?: string

    @IsOptional()
    @IsString()
    url?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => UsageContextDto)
    useContext?: UsageContext[]

    @IsOptional()
    @IsString()
    version?: string

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
    @ValidateNested()
    @Type(() => ReferenceDto)
    definition?: Reference

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
    @IsIn(["unknown", "cancelled", "not-started", "scheduled", "in-progress", "on-hold", "completed"])
    status: "unknown" | "cancelled" | "not-started" | "scheduled" | "in-progress" | "on-hold" | "completed"

    @IsOptional()
    @IsString()
    statusReason?: string

  }
  export class CarePlanActivityDto implements CarePlanActivity {
    @IsOptional()
    @ValidateNested()
    @Type(() => CarePlanActivityDetailDto)
    detail?: CarePlanActivityDetail

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    outcomeCodeableConcept?: CodeableConcept[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    outcomeReference?: Reference[]

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
    @Type(() => ReferenceDto)
    basedOn?: Reference[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    careTeam?: Reference[]

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
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    definition?: Reference[]

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

    @IsNotEmpty()
    @IsIn(["proposal", "plan", "order", "option"])
    intent: "proposal" | "plan" | "order" | "option"

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => AnnotationDto)
    note?: Annotation[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    partOf?: Reference[]

    @IsOptional()
    @ValidateNested()
    @Type(() => PeriodDto)
    period?: Period

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    replaces?: Reference[]

    @IsNotEmpty()
    @IsIn(["active", "entered-in-error", "draft", "unknown", "cancelled", "completed", "suspended"])
    status: "active" | "entered-in-error" | "draft" | "unknown" | "cancelled" | "completed" | "suspended"

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => ReferenceDto)
    subject: Reference

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    supportingInfo?: Reference[]

    @IsOptional()
    @IsString()
    title?: string

  }
  export class CareTeamParticipantDto implements CareTeamParticipant {
    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    member?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    onBehalfOf?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => PeriodDto)
    period?: Period

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    role?: CodeableConcept

  }
  export class CareTeamDto implements CareTeam {
    @IsNotEmpty()
    @IsIn(["CareTeam"])
    resourceType: "CareTeam"

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
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => IdentifierDto)
    identifier?: Identifier[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    managingOrganization?: Reference[]

    @IsOptional()
    @IsString()
    name?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => AnnotationDto)
    note?: Annotation[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CareTeamParticipantDto)
    participant?: CareTeamParticipant[]

    @IsOptional()
    @ValidateNested()
    @Type(() => PeriodDto)
    period?: Period

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

    @IsNotEmpty()
    @IsIn(["active", "inactive", "entered-in-error", "proposed", "suspended"])
    status: "active" | "inactive" | "entered-in-error" | "proposed" | "suspended"

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    subject?: Reference

  }
  export class ChargeItemParticipantDto implements ChargeItemParticipant {
    @IsNotEmpty()
    @ValidateNested()
    @Type(() => ReferenceDto)
    actor: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    role?: CodeableConcept

  }
  export class ChargeItemDto implements ChargeItem {
    @IsNotEmpty()
    @IsIn(["ChargeItem"])
    resourceType: "ChargeItem"

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    account?: Reference[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    bodysite?: CodeableConcept[]

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    code: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    context?: Reference

    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    definition?: string[]

    @IsOptional()
    @IsString()
    enteredDate?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    enterer?: Reference

    @IsOptional()
    @IsNumber()
    factorOverride?: number

    @IsOptional()
    @ValidateNested()
    @Type(() => IdentifierDto)
    identifier?: Identifier

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => AnnotationDto)
    note?: Annotation[]

    @IsOptional()
    @IsString()
    occurrenceDateTime?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => PeriodDto)
    occurrencePeriod?: Period

    @IsOptional()
    @ValidateNested()
    @Type(() => TimingDto)
    occurrenceTiming?: Timing

    @IsOptional()
    @IsString()
    overrideReason?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ChargeItemParticipantDto)
    participant?: ChargeItemParticipant[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    partOf?: Reference[]

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    performingOrganization?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => MoneyDto)
    priceOverride?: Money

    @IsOptional()
    @ValidateNested()
    @Type(() => QuantityDto)
    quantity?: Quantity

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    reason?: CodeableConcept[]

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    requestingOrganization?: Reference

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    service?: Reference[]

    @IsNotEmpty()
    @IsIn(["entered-in-error", "unknown", "planned", "billable", "not-billable", "aborted", "billed"])
    status: "entered-in-error" | "unknown" | "planned" | "billable" | "not-billable" | "aborted" | "billed"

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
  export class ClaimRelatedDto implements ClaimRelated {
    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    claim?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => IdentifierDto)
    reference?: Identifier

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    relationship?: CodeableConcept

  }
  export class ClaimPayeeDto implements ClaimPayee {
    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    party?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => CodingDto)
    resourceType?: Coding

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    type: CodeableConcept

  }
  export class ClaimCareTeamDto implements ClaimCareTeam {
    @IsNotEmpty()
    @ValidateNested()
    @Type(() => ReferenceDto)
    provider: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    qualification?: CodeableConcept

    @IsNotEmpty()
    @IsBoolean()
    responsible: boolean

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    role?: CodeableConcept

    @IsNotEmpty()
    @IsNumber()
    sequence: number

  }
  export class ClaimInformationDto implements ClaimInformation {
    @IsNotEmpty()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    category: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    code?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    reason?: CodeableConcept

    @IsNotEmpty()
    @IsNumber()
    sequence: number

    @IsOptional()
    @IsString()
    timingDate?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => PeriodDto)
    timingPeriod?: Period

    @IsOptional()
    @IsString()
    valueString?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => QuantityDto)
    valueQuantity?: Quantity

    @IsOptional()
    @ValidateNested()
    @Type(() => AttachmentDto)
    valueAttachment?: Attachment

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    valueReference?: Reference

  }
  export class ClaimDiagnosisDto implements ClaimDiagnosis {
    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    diagnosisCodeableConcept?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    diagnosisReference?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    packageCode?: CodeableConcept

    @IsNotEmpty()
    @IsNumber()
    sequence: number

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    type?: CodeableConcept[]

  }
  export class ClaimProcedureDto implements ClaimProcedure {
    @IsOptional()
    @IsString()
    date?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    procedureCodeableConcept?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    procedureReference?: Reference

    @IsNotEmpty()
    @IsNumber()
    sequence: number

  }
  export class ClaimInsuranceDto implements ClaimInsurance {
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
    @IsArray()
    @IsString({ each: true })
    preAuthRef?: string[]

    @IsNotEmpty()
    @IsNumber()
    sequence: number

  }
  export class ClaimAccidentDto implements ClaimAccident {
    @IsNotEmpty()
    @IsString()
    date: string

    @IsOptional()
    @ValidateNested()
    @Type(() => AddressDto)
    locationAddress?: Address

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    locationReference?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    type?: CodeableConcept

  }
  export class ClaimItemDetailSubDetailDto implements ClaimItemDetailSubDetail {
    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    category?: CodeableConcept

    @IsOptional()
    @IsNumber()
    factor?: number

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    modifier?: CodeableConcept[]

    @IsOptional()
    @ValidateNested()
    @Type(() => MoneyDto)
    net?: Money

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    programCode?: CodeableConcept[]

    @IsOptional()
    @ValidateNested()
    @Type(() => QuantityDto)
    quantity?: Quantity

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    revenue?: CodeableConcept

    @IsNotEmpty()
    @IsNumber()
    sequence: number

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    service?: CodeableConcept

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    udi?: Reference[]

    @IsOptional()
    @ValidateNested()
    @Type(() => MoneyDto)
    unitPrice?: Money

  }
  export class ClaimItemDetailDto implements ClaimItemDetail {
    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    category?: CodeableConcept

    @IsOptional()
    @IsNumber()
    factor?: number

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    modifier?: CodeableConcept[]

    @IsOptional()
    @ValidateNested()
    @Type(() => MoneyDto)
    net?: Money

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    programCode?: CodeableConcept[]

    @IsOptional()
    @ValidateNested()
    @Type(() => QuantityDto)
    quantity?: Quantity

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    revenue?: CodeableConcept

    @IsNotEmpty()
    @IsNumber()
    sequence: number

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    service?: CodeableConcept

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ClaimItemDetailSubDetailDto)
    subDetail?: ClaimItemDetailSubDetail[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    udi?: Reference[]

    @IsOptional()
    @ValidateNested()
    @Type(() => MoneyDto)
    unitPrice?: Money

  }
  export class ClaimItemDto implements ClaimItem {
    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    bodySite?: CodeableConcept

    @IsOptional()
    @IsArray()
    @IsNumber({}, { each: true })
    careTeamLinkId?: number[]

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    category?: CodeableConcept

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
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    encounter?: Reference[]

    @IsOptional()
    @IsNumber()
    factor?: number

    @IsOptional()
    @IsArray()
    @IsNumber({}, { each: true })
    informationLinkId?: number[]

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    locationCodeableConcept?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => AddressDto)
    locationAddress?: Address

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    locationReference?: Reference

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    modifier?: CodeableConcept[]

    @IsOptional()
    @ValidateNested()
    @Type(() => MoneyDto)
    net?: Money

    @IsOptional()
    @IsArray()
    @IsNumber({}, { each: true })
    procedureLinkId?: number[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    programCode?: CodeableConcept[]

    @IsOptional()
    @ValidateNested()
    @Type(() => QuantityDto)
    quantity?: Quantity

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    revenue?: CodeableConcept

    @IsNotEmpty()
    @IsNumber()
    sequence: number

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    service?: CodeableConcept

    @IsOptional()
    @IsString()
    servicedDate?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => PeriodDto)
    servicedPeriod?: Period

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    subSite?: CodeableConcept[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    udi?: Reference[]

    @IsOptional()
    @ValidateNested()
    @Type(() => MoneyDto)
    unitPrice?: Money

  }
  export class ClaimDto implements Claim {
    @IsNotEmpty()
    @IsIn(["Claim"])
    resourceType: "Claim"

    @IsOptional()
    @ValidateNested()
    @Type(() => ClaimAccidentDto)
    accident?: ClaimAccident

    @IsOptional()
    @ValidateNested()
    @Type(() => PeriodDto)
    billablePeriod?: Period

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ClaimCareTeamDto)
    careTeam?: ClaimCareTeam[]

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
    @Type(() => PeriodDto)
    employmentImpacted?: Period

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    enterer?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    facility?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    fundsReserve?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => PeriodDto)
    hospitalization?: Period

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => IdentifierDto)
    identifier?: Identifier[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ClaimInformationDto)
    information?: ClaimInformation[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ClaimInsuranceDto)
    insurance?: ClaimInsurance[]

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    insurer?: Reference

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ClaimItemDto)
    item?: ClaimItem[]

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
    @Type(() => ReferenceDto)
    patient?: Reference

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
    @Type(() => CodeableConceptDto)
    priority?: CodeableConcept

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ClaimProcedureDto)
    procedure?: ClaimProcedure[]

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    provider?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    referral?: Reference

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ClaimRelatedDto)
    related?: ClaimRelated[]

    @IsNotEmpty()
    @IsIn(["active", "entered-in-error", "draft", "cancelled"])
    status: "active" | "entered-in-error" | "draft" | "cancelled"

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    subType?: CodeableConcept[]

    @IsOptional()
    @ValidateNested()
    @Type(() => MoneyDto)
    total?: Money

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    type?: CodeableConcept

    @IsNotEmpty()
    @IsIn(["other", "proposed", "complete", "exploratory"])
    use: "other" | "proposed" | "complete" | "exploratory"

  }
  export class ClaimResponseItemAdjudicationDto implements ClaimResponseItemAdjudication {
    @IsOptional()
    @ValidateNested()
    @Type(() => MoneyDto)
    amount?: Money

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    category: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    reason?: CodeableConcept

    @IsOptional()
    @IsNumber()
    value?: number

  }
  export class ClaimResponseItemDetailSubDetailDto implements ClaimResponseItemDetailSubDetail {
    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ClaimResponseItemAdjudicationDto)
    adjudication?: ClaimResponseItemAdjudication[]

    @IsOptional()
    @IsArray()
    @IsNumber({}, { each: true })
    noteNumber?: number[]

    @IsNotEmpty()
    @IsNumber()
    sequenceLinkId: number

  }
  export class ClaimResponseItemDetailDto implements ClaimResponseItemDetail {
    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ClaimResponseItemAdjudicationDto)
    adjudication?: ClaimResponseItemAdjudication[]

    @IsOptional()
    @IsArray()
    @IsNumber({}, { each: true })
    noteNumber?: number[]

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
  export class ClaimResponseAddItemDetailDto implements ClaimResponseAddItemDetail {
    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ClaimResponseItemAdjudicationDto)
    adjudication?: ClaimResponseItemAdjudication[]

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    category?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => MoneyDto)
    fee?: Money

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    modifier?: CodeableConcept[]

    @IsOptional()
    @IsArray()
    @IsNumber({}, { each: true })
    noteNumber?: number[]

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    revenue?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    service?: CodeableConcept

  }
  export class ClaimResponseAddItemDto implements ClaimResponseAddItem {
    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ClaimResponseItemAdjudicationDto)
    adjudication?: ClaimResponseItemAdjudication[]

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    category?: CodeableConcept

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ClaimResponseAddItemDetailDto)
    detail?: ClaimResponseAddItemDetail[]

    @IsOptional()
    @ValidateNested()
    @Type(() => MoneyDto)
    fee?: Money

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    modifier?: CodeableConcept[]

    @IsOptional()
    @IsArray()
    @IsNumber({}, { each: true })
    noteNumber?: number[]

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    revenue?: CodeableConcept

    @IsOptional()
    @IsArray()
    @IsNumber({}, { each: true })
    sequenceLinkId?: number[]

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    service?: CodeableConcept

  }
  export class ClaimResponseErrorDto implements ClaimResponseError {
    @IsNotEmpty()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    code: CodeableConcept

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
  export class ClaimResponsePaymentDto implements ClaimResponsePayment {
    @IsOptional()
    @ValidateNested()
    @Type(() => MoneyDto)
    adjustment?: Money

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    adjustmentReason?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => MoneyDto)
    amount?: Money

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
    type?: CodeableConcept

  }
  export class ClaimResponseProcessNoteDto implements ClaimResponseProcessNote {
    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    language?: CodeableConcept

    @IsOptional()
    @IsNumber()
    number?: number

    @IsOptional()
    @IsString()
    text?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    type?: CodeableConcept

  }
  export class ClaimResponseInsuranceDto implements ClaimResponseInsurance {
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
    @IsArray()
    @IsString({ each: true })
    preAuthRef?: string[]

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
    @Type(() => ReferenceDto)
    communicationRequest?: Reference[]

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
    @Type(() => CodeableConceptDto)
    form?: CodeableConcept

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => IdentifierDto)
    identifier?: Identifier[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ClaimResponseInsuranceDto)
    insurance?: ClaimResponseInsurance[]

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    insurer?: Reference

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ClaimResponseItemDto)
    item?: ClaimResponseItem[]

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    outcome?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    patient?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    payeeType?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => ClaimResponsePaymentDto)
    payment?: ClaimResponsePayment

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ClaimResponseProcessNoteDto)
    processNote?: ClaimResponseProcessNote[]

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

    @IsNotEmpty()
    @IsIn(["active", "entered-in-error", "draft", "cancelled"])
    status: "active" | "entered-in-error" | "draft" | "cancelled"

    @IsOptional()
    @ValidateNested()
    @Type(() => MoneyDto)
    totalBenefit?: Money

    @IsOptional()
    @ValidateNested()
    @Type(() => MoneyDto)
    totalCost?: Money

    @IsOptional()
    @ValidateNested()
    @Type(() => MoneyDto)
    unallocDeductable?: Money

  }
  export class ClinicalImpressionInvestigationDto implements ClinicalImpressionInvestigation {
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
    basis?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    itemCodeableConcept?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    itemReference?: Reference

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
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    code?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    context?: Reference

    @IsOptional()
    @IsString()
    date?: string

    @IsOptional()
    @IsString()
    description?: string

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
    @Type(() => ClinicalImpressionFindingDto)
    finding?: ClinicalImpressionFinding[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => IdentifierDto)
    identifier?: Identifier[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ClinicalImpressionInvestigationDto)
    investigation?: ClinicalImpressionInvestigation[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => AnnotationDto)
    note?: Annotation[]

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
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    prognosisCodeableConcept?: CodeableConcept[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    prognosisReference?: Reference[]

    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    protocol?: string[]

    @IsNotEmpty()
    @IsIn(["entered-in-error", "draft", "completed"])
    status: "entered-in-error" | "draft" | "completed"

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => ReferenceDto)
    subject: Reference

    @IsOptional()
    @IsString()
    summary?: string

  }
  export class CodeSystemFilterDto implements CodeSystemFilter {
    @IsNotEmpty()
    @IsString()
    code: string

    @IsOptional()
    @IsString()
    description?: string

    @IsNotEmpty()
    @IsArray()
    @IsString({ each: true })
    operator: string[]

    @IsNotEmpty()
    @IsString()
    value: string

  }
  export class CodeSystemPropertyDto implements CodeSystemProperty {
    @IsNotEmpty()
    @IsString()
    code: string

    @IsOptional()
    @IsString()
    description?: string

    @IsNotEmpty()
    @IsIn(["string", "boolean", "code", "Coding", "integer", "dateTime"])
    type: "string" | "boolean" | "code" | "Coding" | "integer" | "dateTime"

    @IsOptional()
    @IsString()
    uri?: string

  }
  export class CodeSystemConceptDesignationDto implements CodeSystemConceptDesignation {
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
  export class CodeSystemConceptPropertyDto implements CodeSystemConceptProperty {
    @IsNotEmpty()
    @IsString()
    code: string

    @IsOptional()
    @IsString()
    valueCode?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => CodingDto)
    valueCoding?: Coding

    @IsOptional()
    @IsString()
    valueString?: string

    @IsOptional()
    @IsNumber()
    valueInteger?: number

    @IsNotEmpty()
    @IsBoolean()
    valueBoolean: boolean

    @IsOptional()
    @IsString()
    valueDateTime?: string

  }
  export class CodeSystemConceptDto implements CodeSystemConcept {
    @IsNotEmpty()
    @IsString()
    code: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeSystemConceptDto)
    concept?: CodeSystemConcept[]

    @IsOptional()
    @IsString()
    definition?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeSystemConceptDesignationDto)
    designation?: CodeSystemConceptDesignation[]

    @IsOptional()
    @IsString()
    display?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeSystemConceptPropertyDto)
    property?: CodeSystemConceptProperty[]

  }
  export class CodeSystemDto implements CodeSystem {
    @IsNotEmpty()
    @IsIn(["CodeSystem"])
    resourceType: "CodeSystem"

    @IsNotEmpty()
    @IsBoolean()
    caseSensitive: boolean

    @IsNotEmpty()
    @IsBoolean()
    compositional: boolean

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeSystemConceptDto)
    concept?: CodeSystemConcept[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ContactDetailDto)
    contact?: ContactDetail[]

    @IsNotEmpty()
    @IsIn(["example", "complete", "not-present", "fragment"])
    content: "example" | "complete" | "not-present" | "fragment"

    @IsOptional()
    @IsString()
    copyright?: string

    @IsOptional()
    @IsNumber()
    count?: number

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
    @Type(() => CodeSystemFilterDto)
    filter?: CodeSystemFilter[]

    @IsNotEmpty()
    @IsIn(["grouped-by", "is-a", "part-of", "classified-with"])
    hierarchyMeaning: "grouped-by" | "is-a" | "part-of" | "classified-with"

    @IsOptional()
    @ValidateNested()
    @Type(() => IdentifierDto)
    identifier?: Identifier

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    jurisdiction?: CodeableConcept[]

    @IsOptional()
    @IsString()
    name?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeSystemPropertyDto)
    property?: CodeSystemProperty[]

    @IsOptional()
    @IsString()
    publisher?: string

    @IsOptional()
    @IsString()
    purpose?: string

    @IsNotEmpty()
    @IsIn(["active", "draft", "retired", "unknown"])
    status: "active" | "draft" | "retired" | "unknown"

    @IsOptional()
    @IsString()
    title?: string

    @IsOptional()
    @IsString()
    url?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => UsageContextDto)
    useContext?: UsageContext[]

    @IsOptional()
    @IsString()
    valueSet?: string

    @IsOptional()
    @IsString()
    version?: string

    @IsNotEmpty()
    @IsBoolean()
    versionNeeded: boolean

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
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    basedOn?: Reference[]

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
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    definition?: Reference[]

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

    @IsNotEmpty()
    @IsBoolean()
    notDone: boolean

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    notDoneReason?: CodeableConcept

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => AnnotationDto)
    note?: Annotation[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    partOf?: Reference[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CommunicationPayloadDto)
    payload?: CommunicationPayload[]

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
    sender?: Reference

    @IsOptional()
    @IsString()
    sent?: string

    @IsNotEmpty()
    @IsIn(["entered-in-error", "unknown", "in-progress", "completed", "suspended", "aborted", "preparation"])
    status: "entered-in-error" | "unknown" | "in-progress" | "completed" | "suspended" | "aborted" | "preparation"

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    subject?: Reference

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    topic?: Reference[]

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
  export class CommunicationRequestRequesterDto implements CommunicationRequestRequester {
    @IsNotEmpty()
    @ValidateNested()
    @Type(() => ReferenceDto)
    agent: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    onBehalfOf?: Reference

  }
  export class CommunicationRequestDto implements CommunicationRequest {
    @IsNotEmpty()
    @IsIn(["CommunicationRequest"])
    resourceType: "CommunicationRequest"

    @IsOptional()
    @IsString()
    authoredOn?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    basedOn?: Reference[]

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
    @ValidateNested()
    @Type(() => IdentifierDto)
    groupIdentifier?: Identifier

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
    @Type(() => AnnotationDto)
    note?: Annotation[]

    @IsOptional()
    @IsString()
    occurrenceDateTime?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => PeriodDto)
    occurrencePeriod?: Period

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CommunicationRequestPayloadDto)
    payload?: CommunicationRequestPayload[]

    @IsOptional()
    @IsString()
    priority?: string

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
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    recipient?: Reference[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    replaces?: Reference[]

    @IsOptional()
    @ValidateNested()
    @Type(() => CommunicationRequestRequesterDto)
    requester?: CommunicationRequestRequester

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    sender?: Reference

    @IsNotEmpty()
    @IsIn(["active", "entered-in-error", "draft", "unknown", "cancelled", "completed", "suspended"])
    status: "active" | "entered-in-error" | "draft" | "unknown" | "cancelled" | "completed" | "suspended"

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    subject?: Reference

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    topic?: Reference[]

  }
  export class CompartmentDefinitionResourceDto implements CompartmentDefinitionResource {
    @IsNotEmpty()
    @IsString()
    code: string

    @IsOptional()
    @IsString()
    documentation?: string

    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    param?: string[]

  }
  export class CompartmentDefinitionDto implements CompartmentDefinition {
    @IsNotEmpty()
    @IsIn(["CompartmentDefinition"])
    resourceType: "CompartmentDefinition"

    @IsNotEmpty()
    @IsIn(["Patient", "Encounter", "RelatedPerson", "Practitioner", "Device"])
    code: "Patient" | "Encounter" | "RelatedPerson" | "Practitioner" | "Device"

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ContactDetailDto)
    contact?: ContactDetail[]

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
    @Type(() => CodeableConceptDto)
    jurisdiction?: CodeableConcept[]

    @IsNotEmpty()
    @IsString()
    name: string

    @IsOptional()
    @IsString()
    publisher?: string

    @IsOptional()
    @IsString()
    purpose?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CompartmentDefinitionResourceDto)
    resource?: CompartmentDefinitionResource[]

    @IsNotEmpty()
    @IsBoolean()
    search: boolean

    @IsNotEmpty()
    @IsIn(["active", "draft", "retired", "unknown"])
    status: "active" | "draft" | "retired" | "unknown"

    @IsOptional()
    @IsString()
    title?: string

    @IsNotEmpty()
    @IsString()
    url: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => UsageContextDto)
    useContext?: UsageContext[]

  }
  export class CompositionAttesterDto implements CompositionAttester {
    @IsNotEmpty()
    @IsArray()
    @IsIn(["official", "personal", "professional", "legal"], { each: true })
    mode: ("official" | "personal" | "professional" | "legal")[]

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    party?: Reference

    @IsOptional()
    @IsString()
    time?: string

  }
  export class CompositionRelatesToDto implements CompositionRelatesTo {
    @IsNotEmpty()
    @IsIn(["replaces", "transforms", "signs", "appends"])
    code: "replaces" | "transforms" | "signs" | "appends"

    @IsOptional()
    @ValidateNested()
    @Type(() => IdentifierDto)
    targetIdentifier?: Identifier

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    targetReference?: Reference

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
    @Type(() => CompositionRelatesToDto)
    relatesTo?: CompositionRelatesTo[]

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
  export class ConceptMapGroupElementTargetDependsOnDto implements ConceptMapGroupElementTargetDependsOn {
    @IsNotEmpty()
    @IsString()
    code: string

    @IsOptional()
    @IsString()
    display?: string

    @IsNotEmpty()
    @IsString()
    property: string

    @IsOptional()
    @IsString()
    system?: string

  }
  export class ConceptMapGroupElementTargetDto implements ConceptMapGroupElementTarget {
    @IsOptional()
    @IsString()
    code?: string

    @IsOptional()
    @IsString()
    comment?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ConceptMapGroupElementTargetDependsOnDto)
    dependsOn?: ConceptMapGroupElementTargetDependsOn[]

    @IsOptional()
    @IsString()
    display?: string

    @IsNotEmpty()
    @IsIn(["relatedto", "equivalent", "equal", "wider", "subsumes", "narrower", "specializes", "inexact", "unmatched", "disjoint"])
    equivalence: "relatedto" | "equivalent" | "equal" | "wider" | "subsumes" | "narrower" | "specializes" | "inexact" | "unmatched" | "disjoint"

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ConceptMapGroupElementTargetDependsOnDto)
    product?: ConceptMapGroupElementTargetDependsOn[]

  }
  export class ConceptMapGroupElementDto implements ConceptMapGroupElement {
    @IsOptional()
    @IsString()
    code?: string

    @IsOptional()
    @IsString()
    display?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ConceptMapGroupElementTargetDto)
    target?: ConceptMapGroupElementTarget[]

  }
  export class ConceptMapGroupUnmappedDto implements ConceptMapGroupUnmapped {
    @IsOptional()
    @IsString()
    code?: string

    @IsOptional()
    @IsString()
    display?: string

    @IsNotEmpty()
    @IsIn(["provided", "fixed", "other-map"])
    mode: "provided" | "fixed" | "other-map"

    @IsOptional()
    @IsString()
    url?: string

  }
  export class ConceptMapGroupDto implements ConceptMapGroup {
    @IsNotEmpty()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ConceptMapGroupElementDto)
    element: ConceptMapGroupElement[]

    @IsOptional()
    @IsString()
    source?: string

    @IsOptional()
    @IsString()
    sourceVersion?: string

    @IsOptional()
    @IsString()
    target?: string

    @IsOptional()
    @IsString()
    targetVersion?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => ConceptMapGroupUnmappedDto)
    unmapped?: ConceptMapGroupUnmapped

  }
  export class ConceptMapDto implements ConceptMap {
    @IsNotEmpty()
    @IsIn(["ConceptMap"])
    resourceType: "ConceptMap"

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ContactDetailDto)
    contact?: ContactDetail[]

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
    @Type(() => ConceptMapGroupDto)
    group?: ConceptMapGroup[]

    @IsOptional()
    @ValidateNested()
    @Type(() => IdentifierDto)
    identifier?: Identifier

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    jurisdiction?: CodeableConcept[]

    @IsOptional()
    @IsString()
    name?: string

    @IsOptional()
    @IsString()
    publisher?: string

    @IsOptional()
    @IsString()
    purpose?: string

    @IsOptional()
    @IsString()
    sourceUri?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    sourceReference?: Reference

    @IsNotEmpty()
    @IsIn(["active", "draft", "retired", "unknown"])
    status: "active" | "draft" | "retired" | "unknown"

    @IsOptional()
    @IsString()
    targetUri?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    targetReference?: Reference

    @IsOptional()
    @IsString()
    title?: string

    @IsOptional()
    @IsString()
    url?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => UsageContextDto)
    useContext?: UsageContext[]

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
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    code?: CodeableConcept[]

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
    @Type(() => AgeDto)
    abatementAge?: Age

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
    @IsString()
    assertedDate?: string

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
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    category?: CodeableConcept[]

    @IsNotEmpty()
    @IsIn(["active", "inactive", "resolved", "recurrence", "remission"])
    clinicalStatus: "active" | "inactive" | "resolved" | "recurrence" | "remission"

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    code?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    context?: Reference

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
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => AnnotationDto)
    note?: Annotation[]

    @IsOptional()
    @IsString()
    onsetDateTime?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => AgeDto)
    onsetAge?: Age

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

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    severity?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => ConditionStageDto)
    stage?: ConditionStage

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => ReferenceDto)
    subject: Reference

    @IsNotEmpty()
    @IsIn(["entered-in-error", "unknown", "confirmed", "refuted", "provisional", "differential"])
    verificationStatus: "entered-in-error" | "unknown" | "confirmed" | "refuted" | "provisional" | "differential"

  }
  export class ConsentActorDto implements ConsentActor {
    @IsNotEmpty()
    @ValidateNested()
    @Type(() => ReferenceDto)
    reference: Reference

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    role: CodeableConcept

  }
  export class ConsentPolicyDto implements ConsentPolicy {
    @IsOptional()
    @IsString()
    authority?: string

    @IsOptional()
    @IsString()
    uri?: string

  }
  export class ConsentDataDto implements ConsentData {
    @IsNotEmpty()
    @IsIn(["instance", "related", "dependents", "authoredby"])
    meaning: "instance" | "related" | "dependents" | "authoredby"

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => ReferenceDto)
    reference: Reference

  }
  export class ConsentExceptActorDto implements ConsentExceptActor {
    @IsNotEmpty()
    @ValidateNested()
    @Type(() => ReferenceDto)
    reference: Reference

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    role: CodeableConcept

  }
  export class ConsentExceptDataDto implements ConsentExceptData {
    @IsNotEmpty()
    @IsIn(["instance", "related", "dependents", "authoredby"])
    meaning: "instance" | "related" | "dependents" | "authoredby"

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => ReferenceDto)
    reference: Reference

  }
  export class ConsentExceptDto implements ConsentExcept {
    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    action?: CodeableConcept[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ConsentExceptActorDto)
    actor?: ConsentExceptActor[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodingDto)
    class?: Coding[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodingDto)
    code?: Coding[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ConsentExceptDataDto)
    data?: ConsentExceptData[]

    @IsOptional()
    @ValidateNested()
    @Type(() => PeriodDto)
    dataPeriod?: Period

    @IsOptional()
    @ValidateNested()
    @Type(() => PeriodDto)
    period?: Period

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodingDto)
    purpose?: Coding[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodingDto)
    securityLabel?: Coding[]

    @IsNotEmpty()
    @IsIn(["deny", "permit"])
    type: "deny" | "permit"

  }
  export class ConsentDto implements Consent {
    @IsNotEmpty()
    @IsIn(["Consent"])
    resourceType: "Consent"

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    action?: CodeableConcept[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ConsentActorDto)
    actor?: ConsentActor[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    category?: CodeableConcept[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    consentingParty?: Reference[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ConsentDataDto)
    data?: ConsentData[]

    @IsOptional()
    @ValidateNested()
    @Type(() => PeriodDto)
    dataPeriod?: Period

    @IsOptional()
    @IsString()
    dateTime?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ConsentExceptDto)
    except?: ConsentExcept[]

    @IsOptional()
    @ValidateNested()
    @Type(() => IdentifierDto)
    identifier?: Identifier

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    organization?: Reference[]

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
    @Type(() => ConsentPolicyDto)
    policy?: ConsentPolicy[]

    @IsOptional()
    @IsString()
    policyRule?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodingDto)
    purpose?: Coding[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodingDto)
    securityLabel?: Coding[]

    @IsOptional()
    @ValidateNested()
    @Type(() => AttachmentDto)
    sourceAttachment?: Attachment

    @IsOptional()
    @ValidateNested()
    @Type(() => IdentifierDto)
    sourceIdentifier?: Identifier

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    sourceReference?: Reference

    @IsNotEmpty()
    @IsIn(["active", "inactive", "entered-in-error", "draft", "proposed", "rejected"])
    status: "active" | "inactive" | "entered-in-error" | "draft" | "proposed" | "rejected"

  }
  export class ContractAgentDto implements ContractAgent {
    @IsNotEmpty()
    @ValidateNested()
    @Type(() => ReferenceDto)
    actor: Reference

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    role?: CodeableConcept[]

  }
  export class ContractSignerDto implements ContractSigner {
    @IsNotEmpty()
    @ValidateNested()
    @Type(() => ReferenceDto)
    party: Reference

    @IsNotEmpty()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => SignatureDto)
    signature: Signature[]

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => CodingDto)
    type: Coding

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
    @Type(() => MoneyDto)
    net?: Money

    @IsOptional()
    @IsNumber()
    points?: number

    @IsOptional()
    @ValidateNested()
    @Type(() => QuantityDto)
    quantity?: Quantity

    @IsOptional()
    @ValidateNested()
    @Type(() => MoneyDto)
    unitPrice?: Money

  }
  export class ContractTermAgentDto implements ContractTermAgent {
    @IsNotEmpty()
    @ValidateNested()
    @Type(() => ReferenceDto)
    actor: Reference

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
    @Type(() => MoneyDto)
    net?: Money

    @IsOptional()
    @IsNumber()
    points?: number

    @IsOptional()
    @ValidateNested()
    @Type(() => QuantityDto)
    quantity?: Quantity

    @IsOptional()
    @ValidateNested()
    @Type(() => MoneyDto)
    unitPrice?: Money

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
    @Type(() => ContractTermAgentDto)
    agent?: ContractTermAgent[]

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
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodingDto)
    securityLabel?: Coding[]

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    subType?: CodeableConcept

    @IsOptional()
    @IsString()
    text?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    topic?: Reference[]

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
    @Type(() => ContractAgentDto)
    agent?: ContractAgent[]

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
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    contentDerivative?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    decisionType?: CodeableConcept

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
    @Type(() => CodingDto)
    securityLabel?: Coding[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ContractSignerDto)
    signer?: ContractSigner[]

    @IsNotEmpty()
    @IsIn(["entered-in-error", "resolved", "cancelled", "amended", "rejected", "appended", "disputed", "executable", "executed", "negotiable", "offered", "policy", "renewed", "revoked", "terminated"])
    status: "entered-in-error" | "resolved" | "cancelled" | "amended" | "rejected" | "appended" | "disputed" | "executable" | "executed" | "negotiable" | "offered" | "policy" | "renewed" | "revoked" | "terminated"

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
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    topic?: Reference[]

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
  export class CoverageGroupingDto implements CoverageGrouping {
    @IsOptional()
    @IsString()
    class?: string

    @IsOptional()
    @IsString()
    classDisplay?: string

    @IsOptional()
    @IsString()
    group?: string

    @IsOptional()
    @IsString()
    groupDisplay?: string

    @IsOptional()
    @IsString()
    plan?: string

    @IsOptional()
    @IsString()
    planDisplay?: string

    @IsOptional()
    @IsString()
    subClass?: string

    @IsOptional()
    @IsString()
    subClassDisplay?: string

    @IsOptional()
    @IsString()
    subGroup?: string

    @IsOptional()
    @IsString()
    subGroupDisplay?: string

    @IsOptional()
    @IsString()
    subPlan?: string

    @IsOptional()
    @IsString()
    subPlanDisplay?: string

  }
  export class CoverageDto implements Coverage {
    @IsNotEmpty()
    @IsIn(["Coverage"])
    resourceType: "Coverage"

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    beneficiary?: Reference

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    contract?: Reference[]

    @IsOptional()
    @IsString()
    dependent?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => CoverageGroupingDto)
    grouping?: CoverageGrouping

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => IdentifierDto)
    identifier?: Identifier[]

    @IsOptional()
    @IsString()
    network?: string

    @IsOptional()
    @IsNumber()
    order?: number

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    payor?: Reference[]

    @IsOptional()
    @ValidateNested()
    @Type(() => PeriodDto)
    period?: Period

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    policyHolder?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    relationship?: CodeableConcept

    @IsOptional()
    @IsString()
    sequence?: string

    @IsNotEmpty()
    @IsIn(["active", "entered-in-error", "draft", "cancelled"])
    status: "active" | "entered-in-error" | "draft" | "cancelled"

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    subscriber?: Reference

    @IsOptional()
    @IsString()
    subscriberId?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    type?: CodeableConcept

  }
  export class DataElementMappingDto implements DataElementMapping {
    @IsOptional()
    @IsString()
    comment?: string

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
    @Type(() => ContactDetailDto)
    contact?: ContactDetail[]

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
    @Type(() => CodeableConceptDto)
    jurisdiction?: CodeableConcept[]

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
    @IsIn(["active", "draft", "retired", "unknown"])
    status: "active" | "draft" | "retired" | "unknown"

    @IsNotEmpty()
    @IsIn(["equivalent", "comparable", "fully-specified", "convertable", "scaleable", "flexible"])
    stringency: "equivalent" | "comparable" | "fully-specified" | "convertable" | "scaleable" | "flexible"

    @IsOptional()
    @IsString()
    title?: string

    @IsOptional()
    @IsString()
    url?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => UsageContextDto)
    useContext?: UsageContext[]

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
    @IsIn(["moderate", "low", "high"])
    severity: "moderate" | "low" | "high"

    @IsNotEmpty()
    @IsIn(["entered-in-error", "unknown", "cancelled", "preliminary", "final", "amended", "registered", "corrected"])
    status: "entered-in-error" | "unknown" | "cancelled" | "preliminary" | "final" | "amended" | "registered" | "corrected"

  }
  export class DeviceUdiDto implements DeviceUdi {
    @IsOptional()
    @IsString()
    carrierAIDC?: string

    @IsOptional()
    @IsString()
    carrierHRF?: string

    @IsOptional()
    @IsString()
    deviceIdentifier?: string

    @IsNotEmpty()
    @IsIn(["unknown", "barcode", "rfid", "manual", "card", "self-reported"])
    entryType: "unknown" | "barcode" | "rfid" | "manual" | "card" | "self-reported"

    @IsOptional()
    @IsString()
    issuer?: string

    @IsOptional()
    @IsString()
    jurisdiction?: string

    @IsOptional()
    @IsString()
    name?: string

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
    expirationDate?: string

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

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    safety?: CodeableConcept[]

    @IsNotEmpty()
    @IsIn(["active", "inactive", "entered-in-error", "unknown"])
    status: "active" | "inactive" | "entered-in-error" | "unknown"

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    type?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => DeviceUdiDto)
    udi?: DeviceUdi

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

    @IsOptional()
    @IsString()
    lastSystemChange?: string

    @IsNotEmpty()
    @IsIn(["other", "manual", "chemical", "electrical", "impedance", "nuclear", "optical", "thermal", "biological", "mechanical", "acoustical"])
    measurementPrinciple: "other" | "manual" | "chemical" | "electrical" | "impedance" | "nuclear" | "optical" | "thermal" | "biological" | "mechanical" | "acoustical"

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
    @IsIn(["entered-in-error", "on", "off", "standby"])
    operationalStatus: "entered-in-error" | "on" | "off" | "standby"

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
  export class DeviceRequestRequesterDto implements DeviceRequestRequester {
    @IsNotEmpty()
    @ValidateNested()
    @Type(() => ReferenceDto)
    agent: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    onBehalfOf?: Reference

  }
  export class DeviceRequestDto implements DeviceRequest {
    @IsNotEmpty()
    @IsIn(["DeviceRequest"])
    resourceType: "DeviceRequest"

    @IsOptional()
    @IsString()
    authoredOn?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    basedOn?: Reference[]

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    codeReference?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    codeCodeableConcept?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    context?: Reference

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    definition?: Reference[]

    @IsOptional()
    @ValidateNested()
    @Type(() => IdentifierDto)
    groupIdentifier?: Identifier

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => IdentifierDto)
    identifier?: Identifier[]

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    intent: CodeableConcept

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => AnnotationDto)
    note?: Annotation[]

    @IsOptional()
    @IsString()
    occurrenceDateTime?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => PeriodDto)
    occurrencePeriod?: Period

    @IsOptional()
    @ValidateNested()
    @Type(() => TimingDto)
    occurrenceTiming?: Timing

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    performer?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    performerType?: CodeableConcept

    @IsOptional()
    @IsString()
    priority?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    priorRequest?: Reference[]

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
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    relevantHistory?: Reference[]

    @IsOptional()
    @ValidateNested()
    @Type(() => DeviceRequestRequesterDto)
    requester?: DeviceRequestRequester

    @IsNotEmpty()
    @IsIn(["active", "entered-in-error", "draft", "unknown", "cancelled", "completed", "suspended"])
    status: "active" | "entered-in-error" | "draft" | "unknown" | "cancelled" | "completed" | "suspended"

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => ReferenceDto)
    subject: Reference

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    supportingInfo?: Reference[]

  }
  export class DeviceUseStatementDto implements DeviceUseStatement {
    @IsNotEmpty()
    @IsIn(["DeviceUseStatement"])
    resourceType: "DeviceUseStatement"

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    bodySite?: CodeableConcept

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
    @ValidateNested({ each: true })
    @Type(() => AnnotationDto)
    note?: Annotation[]

    @IsOptional()
    @IsString()
    recordedOn?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    source?: Reference

    @IsNotEmpty()
    @IsIn(["active", "entered-in-error", "on-hold", "completed", "intended", "stopped"])
    status: "active" | "entered-in-error" | "on-hold" | "completed" | "intended" | "stopped"

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
  export class DiagnosticReportPerformerDto implements DiagnosticReportPerformer {
    @IsNotEmpty()
    @ValidateNested()
    @Type(() => ReferenceDto)
    actor: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    role?: CodeableConcept

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
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    basedOn?: Reference[]

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
    @ValidateNested()
    @Type(() => ReferenceDto)
    context?: Reference

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
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => DiagnosticReportImageDto)
    image?: DiagnosticReportImage[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    imagingStudy?: Reference[]

    @IsOptional()
    @IsString()
    issued?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => DiagnosticReportPerformerDto)
    performer?: DiagnosticReportPerformer[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => AttachmentDto)
    presentedForm?: Attachment[]

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
    @IsIn(["entered-in-error", "unknown", "cancelled", "preliminary", "final", "amended", "appended", "registered", "corrected", "partial"])
    status: "entered-in-error" | "unknown" | "cancelled" | "preliminary" | "final" | "amended" | "appended" | "registered" | "corrected" | "partial"

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    subject?: Reference

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
    @ValidateNested()
    @Type(() => CodingDto)
    format?: Coding

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

    @IsNotEmpty()
    @IsIn(["entered-in-error", "preliminary", "final", "amended"])
    docStatus: "entered-in-error" | "preliminary" | "final" | "amended"

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
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    benefitCategory?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    benefitSubCategory?: CodeableConcept

    @IsOptional()
    @IsString()
    businessArrangement?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    coverage?: Reference

    @IsOptional()
    @IsString()
    created?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    enterer?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    facility?: Reference

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => IdentifierDto)
    identifier?: Identifier[]

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    insurer?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    organization?: Reference

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
    @Type(() => ReferenceDto)
    provider?: Reference

    @IsOptional()
    @IsString()
    servicedDate?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => PeriodDto)
    servicedPeriod?: Period

    @IsNotEmpty()
    @IsIn(["active", "entered-in-error", "draft", "cancelled"])
    status: "active" | "entered-in-error" | "draft" | "cancelled"

  }
  export class EligibilityResponseInsuranceBenefitBalanceFinancialDto implements EligibilityResponseInsuranceBenefitBalanceFinancial {
    @IsOptional()
    @IsNumber()
    allowedUnsignedInt?: number

    @IsOptional()
    @IsString()
    allowedString?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => MoneyDto)
    allowedMoney?: Money

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    type: CodeableConcept

    @IsOptional()
    @IsNumber()
    usedUnsignedInt?: number

    @IsOptional()
    @ValidateNested()
    @Type(() => MoneyDto)
    usedMoney?: Money

  }
  export class EligibilityResponseInsuranceBenefitBalanceDto implements EligibilityResponseInsuranceBenefitBalance {
    @IsNotEmpty()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    category: CodeableConcept

    @IsOptional()
    @IsString()
    description?: string

    @IsNotEmpty()
    @IsBoolean()
    excluded: boolean

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => EligibilityResponseInsuranceBenefitBalanceFinancialDto)
    financial?: EligibilityResponseInsuranceBenefitBalanceFinancial[]

    @IsOptional()
    @IsString()
    name?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    network?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    subCategory?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    term?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    unit?: CodeableConcept

  }
  export class EligibilityResponseInsuranceDto implements EligibilityResponseInsurance {
    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => EligibilityResponseInsuranceBenefitBalanceDto)
    benefitBalance?: EligibilityResponseInsuranceBenefitBalance[]

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    contract?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    coverage?: Reference

  }
  export class EligibilityResponseErrorDto implements EligibilityResponseError {
    @IsNotEmpty()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    code: CodeableConcept

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
    @Type(() => EligibilityResponseErrorDto)
    error?: EligibilityResponseError[]

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    form?: CodeableConcept

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => IdentifierDto)
    identifier?: Identifier[]

    @IsNotEmpty()
    @IsBoolean()
    inforce: boolean

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => EligibilityResponseInsuranceDto)
    insurance?: EligibilityResponseInsurance[]

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    insurer?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    outcome?: CodeableConcept

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

    @IsNotEmpty()
    @IsIn(["active", "entered-in-error", "draft", "cancelled"])
    status: "active" | "entered-in-error" | "draft" | "cancelled"

  }
  export class EncounterStatusHistoryDto implements EncounterStatusHistory {
    @IsNotEmpty()
    @ValidateNested()
    @Type(() => PeriodDto)
    period: Period

    @IsNotEmpty()
    @IsIn(["entered-in-error", "unknown", "arrived", "cancelled", "in-progress", "planned", "triaged", "onleave", "finished"])
    status: "entered-in-error" | "unknown" | "arrived" | "cancelled" | "in-progress" | "planned" | "triaged" | "onleave" | "finished"

  }
  export class EncounterClassHistoryDto implements EncounterClassHistory {
    @IsNotEmpty()
    @ValidateNested()
    @Type(() => CodingDto)
    class: Coding

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => PeriodDto)
    period: Period

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
  export class EncounterDiagnosisDto implements EncounterDiagnosis {
    @IsNotEmpty()
    @ValidateNested()
    @Type(() => ReferenceDto)
    condition: Reference

    @IsOptional()
    @IsNumber()
    rank?: number

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    role?: CodeableConcept

  }
  export class EncounterHospitalizationDto implements EncounterHospitalization {
    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    admitSource?: CodeableConcept

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
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    account?: Reference[]

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    appointment?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => CodingDto)
    class?: Coding

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => EncounterClassHistoryDto)
    classHistory?: EncounterClassHistory[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => EncounterDiagnosisDto)
    diagnosis?: EncounterDiagnosis[]

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
    @ValidateNested()
    @Type(() => DurationDto)
    length?: Duration

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
    @IsIn(["entered-in-error", "unknown", "arrived", "cancelled", "in-progress", "planned", "triaged", "onleave", "finished"])
    status: "entered-in-error" | "unknown" | "arrived" | "cancelled" | "in-progress" | "planned" | "triaged" | "onleave" | "finished"

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => EncounterStatusHistoryDto)
    statusHistory?: EncounterStatusHistory[]

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    subject?: Reference

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    type?: CodeableConcept[]

  }
  export class EndpointDto implements Endpoint {
    @IsNotEmpty()
    @IsIn(["Endpoint"])
    resourceType: "Endpoint"

    @IsNotEmpty()
    @IsString()
    address: string

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => CodingDto)
    connectionType: Coding

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ContactPointDto)
    contact?: ContactPoint[]

    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    header?: string[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => IdentifierDto)
    identifier?: Identifier[]

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    managingOrganization?: Reference

    @IsOptional()
    @IsString()
    name?: string

    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    payloadMimeType?: string[]

    @IsNotEmpty()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    payloadType: CodeableConcept[]

    @IsOptional()
    @ValidateNested()
    @Type(() => PeriodDto)
    period?: Period

    @IsNotEmpty()
    @IsIn(["error", "active", "entered-in-error", "suspended", "off", "test"])
    status: "error" | "active" | "entered-in-error" | "suspended" | "off" | "test"

  }
  export class EnrollmentRequestDto implements EnrollmentRequest {
    @IsNotEmpty()
    @IsIn(["EnrollmentRequest"])
    resourceType: "EnrollmentRequest"

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    coverage?: Reference

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
    insurer?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    organization?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    provider?: Reference

    @IsNotEmpty()
    @IsIn(["active", "entered-in-error", "draft", "cancelled"])
    status: "active" | "entered-in-error" | "draft" | "cancelled"

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    subject?: Reference

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
    @Type(() => CodeableConceptDto)
    outcome?: CodeableConcept

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

    @IsNotEmpty()
    @IsIn(["active", "entered-in-error", "draft", "cancelled"])
    status: "active" | "entered-in-error" | "draft" | "cancelled"

  }
  export class EpisodeOfCareStatusHistoryDto implements EpisodeOfCareStatusHistory {
    @IsNotEmpty()
    @ValidateNested()
    @Type(() => PeriodDto)
    period: Period

    @IsNotEmpty()
    @IsIn(["active", "entered-in-error", "cancelled", "planned", "finished", "waitlist", "onhold"])
    status: "active" | "entered-in-error" | "cancelled" | "planned" | "finished" | "waitlist" | "onhold"

  }
  export class EpisodeOfCareDiagnosisDto implements EpisodeOfCareDiagnosis {
    @IsNotEmpty()
    @ValidateNested()
    @Type(() => ReferenceDto)
    condition: Reference

    @IsOptional()
    @IsNumber()
    rank?: number

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    role?: CodeableConcept

  }
  export class EpisodeOfCareDto implements EpisodeOfCare {
    @IsNotEmpty()
    @IsIn(["EpisodeOfCare"])
    resourceType: "EpisodeOfCare"

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    account?: Reference[]

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    careManager?: Reference

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => EpisodeOfCareDiagnosisDto)
    diagnosis?: EpisodeOfCareDiagnosis[]

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
    @IsIn(["active", "entered-in-error", "cancelled", "planned", "finished", "waitlist", "onhold"])
    status: "active" | "entered-in-error" | "cancelled" | "planned" | "finished" | "waitlist" | "onhold"

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => EpisodeOfCareStatusHistoryDto)
    statusHistory?: EpisodeOfCareStatusHistory[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    team?: Reference[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    type?: CodeableConcept[]

  }
  export class ExpansionProfileFixedVersionDto implements ExpansionProfileFixedVersion {
    @IsNotEmpty()
    @IsIn(["default", "check", "override"])
    mode: "default" | "check" | "override"

    @IsNotEmpty()
    @IsString()
    system: string

    @IsNotEmpty()
    @IsString()
    version: string

  }
  export class ExpansionProfileExcludedSystemDto implements ExpansionProfileExcludedSystem {
    @IsNotEmpty()
    @IsString()
    system: string

    @IsOptional()
    @IsString()
    version?: string

  }
  export class ExpansionProfileDesignationIncludeDesignationDto implements ExpansionProfileDesignationIncludeDesignation {
    @IsOptional()
    @IsString()
    language?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => CodingDto)
    use?: Coding

  }
  export class ExpansionProfileDesignationIncludeDto implements ExpansionProfileDesignationInclude {
    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ExpansionProfileDesignationIncludeDesignationDto)
    designation?: ExpansionProfileDesignationIncludeDesignation[]

  }
  export class ExpansionProfileDesignationExcludeDesignationDto implements ExpansionProfileDesignationExcludeDesignation {
    @IsOptional()
    @IsString()
    language?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => CodingDto)
    use?: Coding

  }
  export class ExpansionProfileDesignationExcludeDto implements ExpansionProfileDesignationExclude {
    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ExpansionProfileDesignationExcludeDesignationDto)
    designation?: ExpansionProfileDesignationExcludeDesignation[]

  }
  export class ExpansionProfileDesignationDto implements ExpansionProfileDesignation {
    @IsOptional()
    @ValidateNested()
    @Type(() => ExpansionProfileDesignationExcludeDto)
    exclude?: ExpansionProfileDesignationExclude

    @IsOptional()
    @ValidateNested()
    @Type(() => ExpansionProfileDesignationIncludeDto)
    include?: ExpansionProfileDesignationInclude

  }
  export class ExpansionProfileDto implements ExpansionProfile {
    @IsNotEmpty()
    @IsIn(["ExpansionProfile"])
    resourceType: "ExpansionProfile"

    @IsNotEmpty()
    @IsBoolean()
    activeOnly: boolean

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ContactDetailDto)
    contact?: ContactDetail[]

    @IsOptional()
    @IsString()
    date?: string

    @IsOptional()
    @IsString()
    description?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => ExpansionProfileDesignationDto)
    designation?: ExpansionProfileDesignation

    @IsOptional()
    @IsString()
    displayLanguage?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => ExpansionProfileExcludedSystemDto)
    excludedSystem?: ExpansionProfileExcludedSystem

    @IsNotEmpty()
    @IsBoolean()
    excludeNested: boolean

    @IsNotEmpty()
    @IsBoolean()
    excludeNotForUI: boolean

    @IsNotEmpty()
    @IsBoolean()
    excludePostCoordinated: boolean

    @IsNotEmpty()
    @IsBoolean()
    experimental: boolean

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ExpansionProfileFixedVersionDto)
    fixedVersion?: ExpansionProfileFixedVersion[]

    @IsOptional()
    @ValidateNested()
    @Type(() => IdentifierDto)
    identifier?: Identifier

    @IsNotEmpty()
    @IsBoolean()
    includeDefinition: boolean

    @IsNotEmpty()
    @IsBoolean()
    includeDesignations: boolean

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    jurisdiction?: CodeableConcept[]

    @IsNotEmpty()
    @IsBoolean()
    limitedExpansion: boolean

    @IsOptional()
    @IsString()
    name?: string

    @IsOptional()
    @IsString()
    publisher?: string

    @IsNotEmpty()
    @IsIn(["active", "draft", "retired", "unknown"])
    status: "active" | "draft" | "retired" | "unknown"

    @IsOptional()
    @IsString()
    url?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => UsageContextDto)
    useContext?: UsageContext[]

    @IsOptional()
    @IsString()
    version?: string

  }
  export class ExplanationOfBenefitRelatedDto implements ExplanationOfBenefitRelated {
    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    claim?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => IdentifierDto)
    reference?: Identifier

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    relationship?: CodeableConcept

  }
  export class ExplanationOfBenefitPayeeDto implements ExplanationOfBenefitPayee {
    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    party?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    resourceType?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    type?: CodeableConcept

  }
  export class ExplanationOfBenefitInformationDto implements ExplanationOfBenefitInformation {
    @IsNotEmpty()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    category: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    code?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => CodingDto)
    reason?: Coding

    @IsNotEmpty()
    @IsNumber()
    sequence: number

    @IsOptional()
    @IsString()
    timingDate?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => PeriodDto)
    timingPeriod?: Period

    @IsOptional()
    @IsString()
    valueString?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => QuantityDto)
    valueQuantity?: Quantity

    @IsOptional()
    @ValidateNested()
    @Type(() => AttachmentDto)
    valueAttachment?: Attachment

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    valueReference?: Reference

  }
  export class ExplanationOfBenefitCareTeamDto implements ExplanationOfBenefitCareTeam {
    @IsNotEmpty()
    @ValidateNested()
    @Type(() => ReferenceDto)
    provider: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    qualification?: CodeableConcept

    @IsNotEmpty()
    @IsBoolean()
    responsible: boolean

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    role?: CodeableConcept

    @IsNotEmpty()
    @IsNumber()
    sequence: number

  }
  export class ExplanationOfBenefitDiagnosisDto implements ExplanationOfBenefitDiagnosis {
    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    diagnosisCodeableConcept?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    diagnosisReference?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    packageCode?: CodeableConcept

    @IsNotEmpty()
    @IsNumber()
    sequence: number

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    type?: CodeableConcept[]

  }
  export class ExplanationOfBenefitProcedureDto implements ExplanationOfBenefitProcedure {
    @IsOptional()
    @IsString()
    date?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    procedureCodeableConcept?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    procedureReference?: Reference

    @IsNotEmpty()
    @IsNumber()
    sequence: number

  }
  export class ExplanationOfBenefitInsuranceDto implements ExplanationOfBenefitInsurance {
    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    coverage?: Reference

    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    preAuthRef?: string[]

  }
  export class ExplanationOfBenefitAccidentDto implements ExplanationOfBenefitAccident {
    @IsOptional()
    @IsString()
    date?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => AddressDto)
    locationAddress?: Address

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    locationReference?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    type?: CodeableConcept

  }
  export class ExplanationOfBenefitItemAdjudicationDto implements ExplanationOfBenefitItemAdjudication {
    @IsOptional()
    @ValidateNested()
    @Type(() => MoneyDto)
    amount?: Money

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    category: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    reason?: CodeableConcept

    @IsOptional()
    @IsNumber()
    value?: number

  }
  export class ExplanationOfBenefitItemDetailSubDetailDto implements ExplanationOfBenefitItemDetailSubDetail {
    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ExplanationOfBenefitItemAdjudicationDto)
    adjudication?: ExplanationOfBenefitItemAdjudication[]

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    category?: CodeableConcept

    @IsOptional()
    @IsNumber()
    factor?: number

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    modifier?: CodeableConcept[]

    @IsOptional()
    @ValidateNested()
    @Type(() => MoneyDto)
    net?: Money

    @IsOptional()
    @IsArray()
    @IsNumber({}, { each: true })
    noteNumber?: number[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    programCode?: CodeableConcept[]

    @IsOptional()
    @ValidateNested()
    @Type(() => QuantityDto)
    quantity?: Quantity

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    revenue?: CodeableConcept

    @IsNotEmpty()
    @IsNumber()
    sequence: number

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    service?: CodeableConcept

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    type: CodeableConcept

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    udi?: Reference[]

    @IsOptional()
    @ValidateNested()
    @Type(() => MoneyDto)
    unitPrice?: Money

  }
  export class ExplanationOfBenefitItemDetailDto implements ExplanationOfBenefitItemDetail {
    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ExplanationOfBenefitItemAdjudicationDto)
    adjudication?: ExplanationOfBenefitItemAdjudication[]

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    category?: CodeableConcept

    @IsOptional()
    @IsNumber()
    factor?: number

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    modifier?: CodeableConcept[]

    @IsOptional()
    @ValidateNested()
    @Type(() => MoneyDto)
    net?: Money

    @IsOptional()
    @IsArray()
    @IsNumber({}, { each: true })
    noteNumber?: number[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    programCode?: CodeableConcept[]

    @IsOptional()
    @ValidateNested()
    @Type(() => QuantityDto)
    quantity?: Quantity

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    revenue?: CodeableConcept

    @IsNotEmpty()
    @IsNumber()
    sequence: number

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    service?: CodeableConcept

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ExplanationOfBenefitItemDetailSubDetailDto)
    subDetail?: ExplanationOfBenefitItemDetailSubDetail[]

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    type: CodeableConcept

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    udi?: Reference[]

    @IsOptional()
    @ValidateNested()
    @Type(() => MoneyDto)
    unitPrice?: Money

  }
  export class ExplanationOfBenefitItemDto implements ExplanationOfBenefitItem {
    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ExplanationOfBenefitItemAdjudicationDto)
    adjudication?: ExplanationOfBenefitItemAdjudication[]

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    bodySite?: CodeableConcept

    @IsOptional()
    @IsArray()
    @IsNumber({}, { each: true })
    careTeamLinkId?: number[]

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    category?: CodeableConcept

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ExplanationOfBenefitItemDetailDto)
    detail?: ExplanationOfBenefitItemDetail[]

    @IsOptional()
    @IsArray()
    @IsNumber({}, { each: true })
    diagnosisLinkId?: number[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    encounter?: Reference[]

    @IsOptional()
    @IsNumber()
    factor?: number

    @IsOptional()
    @IsArray()
    @IsNumber({}, { each: true })
    informationLinkId?: number[]

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    locationCodeableConcept?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => AddressDto)
    locationAddress?: Address

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    locationReference?: Reference

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    modifier?: CodeableConcept[]

    @IsOptional()
    @ValidateNested()
    @Type(() => MoneyDto)
    net?: Money

    @IsOptional()
    @IsArray()
    @IsNumber({}, { each: true })
    noteNumber?: number[]

    @IsOptional()
    @IsArray()
    @IsNumber({}, { each: true })
    procedureLinkId?: number[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    programCode?: CodeableConcept[]

    @IsOptional()
    @ValidateNested()
    @Type(() => QuantityDto)
    quantity?: Quantity

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    revenue?: CodeableConcept

    @IsNotEmpty()
    @IsNumber()
    sequence: number

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    service?: CodeableConcept

    @IsOptional()
    @IsString()
    servicedDate?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => PeriodDto)
    servicedPeriod?: Period

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    subSite?: CodeableConcept[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    udi?: Reference[]

    @IsOptional()
    @ValidateNested()
    @Type(() => MoneyDto)
    unitPrice?: Money

  }
  export class ExplanationOfBenefitAddItemDetailDto implements ExplanationOfBenefitAddItemDetail {
    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ExplanationOfBenefitItemAdjudicationDto)
    adjudication?: ExplanationOfBenefitItemAdjudication[]

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    category?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => MoneyDto)
    fee?: Money

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    modifier?: CodeableConcept[]

    @IsOptional()
    @IsArray()
    @IsNumber({}, { each: true })
    noteNumber?: number[]

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    revenue?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    service?: CodeableConcept

  }
  export class ExplanationOfBenefitAddItemDto implements ExplanationOfBenefitAddItem {
    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ExplanationOfBenefitItemAdjudicationDto)
    adjudication?: ExplanationOfBenefitItemAdjudication[]

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    category?: CodeableConcept

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ExplanationOfBenefitAddItemDetailDto)
    detail?: ExplanationOfBenefitAddItemDetail[]

    @IsOptional()
    @ValidateNested()
    @Type(() => MoneyDto)
    fee?: Money

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    modifier?: CodeableConcept[]

    @IsOptional()
    @IsArray()
    @IsNumber({}, { each: true })
    noteNumber?: number[]

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    revenue?: CodeableConcept

    @IsOptional()
    @IsArray()
    @IsNumber({}, { each: true })
    sequenceLinkId?: number[]

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    service?: CodeableConcept

  }
  export class ExplanationOfBenefitPaymentDto implements ExplanationOfBenefitPayment {
    @IsOptional()
    @ValidateNested()
    @Type(() => MoneyDto)
    adjustment?: Money

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    adjustmentReason?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => MoneyDto)
    amount?: Money

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
    type?: CodeableConcept

  }
  export class ExplanationOfBenefitProcessNoteDto implements ExplanationOfBenefitProcessNote {
    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    language?: CodeableConcept

    @IsOptional()
    @IsNumber()
    number?: number

    @IsOptional()
    @IsString()
    text?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    type?: CodeableConcept

  }
  export class ExplanationOfBenefitBenefitBalanceFinancialDto implements ExplanationOfBenefitBenefitBalanceFinancial {
    @IsOptional()
    @IsNumber()
    allowedUnsignedInt?: number

    @IsOptional()
    @IsString()
    allowedString?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => MoneyDto)
    allowedMoney?: Money

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    type: CodeableConcept

    @IsOptional()
    @IsNumber()
    usedUnsignedInt?: number

    @IsOptional()
    @ValidateNested()
    @Type(() => MoneyDto)
    usedMoney?: Money

  }
  export class ExplanationOfBenefitBenefitBalanceDto implements ExplanationOfBenefitBenefitBalance {
    @IsNotEmpty()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    category: CodeableConcept

    @IsOptional()
    @IsString()
    description?: string

    @IsNotEmpty()
    @IsBoolean()
    excluded: boolean

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ExplanationOfBenefitBenefitBalanceFinancialDto)
    financial?: ExplanationOfBenefitBenefitBalanceFinancial[]

    @IsOptional()
    @IsString()
    name?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    network?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    subCategory?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    term?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    unit?: CodeableConcept

  }
  export class ExplanationOfBenefitDto implements ExplanationOfBenefit {
    @IsNotEmpty()
    @IsIn(["ExplanationOfBenefit"])
    resourceType: "ExplanationOfBenefit"

    @IsOptional()
    @ValidateNested()
    @Type(() => ExplanationOfBenefitAccidentDto)
    accident?: ExplanationOfBenefitAccident

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ExplanationOfBenefitAddItemDto)
    addItem?: ExplanationOfBenefitAddItem[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ExplanationOfBenefitBenefitBalanceDto)
    benefitBalance?: ExplanationOfBenefitBenefitBalance[]

    @IsOptional()
    @ValidateNested()
    @Type(() => PeriodDto)
    billablePeriod?: Period

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ExplanationOfBenefitCareTeamDto)
    careTeam?: ExplanationOfBenefitCareTeam[]

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    claim?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    claimResponse?: Reference

    @IsOptional()
    @IsString()
    created?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ExplanationOfBenefitDiagnosisDto)
    diagnosis?: ExplanationOfBenefitDiagnosis[]

    @IsOptional()
    @IsString()
    disposition?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => PeriodDto)
    employmentImpacted?: Period

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    enterer?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    facility?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    form?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => PeriodDto)
    hospitalization?: Period

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => IdentifierDto)
    identifier?: Identifier[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ExplanationOfBenefitInformationDto)
    information?: ExplanationOfBenefitInformation[]

    @IsOptional()
    @ValidateNested()
    @Type(() => ExplanationOfBenefitInsuranceDto)
    insurance?: ExplanationOfBenefitInsurance

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    insurer?: Reference

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ExplanationOfBenefitItemDto)
    item?: ExplanationOfBenefitItem[]

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
    @Type(() => CodeableConceptDto)
    outcome?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    patient?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => ExplanationOfBenefitPayeeDto)
    payee?: ExplanationOfBenefitPayee

    @IsOptional()
    @ValidateNested()
    @Type(() => ExplanationOfBenefitPaymentDto)
    payment?: ExplanationOfBenefitPayment

    @IsOptional()
    @IsNumber()
    precedence?: number

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    prescription?: Reference

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ExplanationOfBenefitProcedureDto)
    procedure?: ExplanationOfBenefitProcedure[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ExplanationOfBenefitProcessNoteDto)
    processNote?: ExplanationOfBenefitProcessNote[]

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    provider?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    referral?: Reference

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ExplanationOfBenefitRelatedDto)
    related?: ExplanationOfBenefitRelated[]

    @IsNotEmpty()
    @IsIn(["active", "entered-in-error", "draft", "cancelled"])
    status: "active" | "entered-in-error" | "draft" | "cancelled"

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    subType?: CodeableConcept[]

    @IsOptional()
    @ValidateNested()
    @Type(() => MoneyDto)
    totalBenefit?: Money

    @IsOptional()
    @ValidateNested()
    @Type(() => MoneyDto)
    totalCost?: Money

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    type?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => MoneyDto)
    unallocDeductable?: Money

  }
  export class FamilyMemberHistoryConditionDto implements FamilyMemberHistoryCondition {
    @IsNotEmpty()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    code: CodeableConcept

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => AnnotationDto)
    note?: Annotation[]

    @IsOptional()
    @ValidateNested()
    @Type(() => AgeDto)
    onsetAge?: Age

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
    @Type(() => AgeDto)
    ageAge?: Age

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
    @Type(() => AgeDto)
    deceasedAge?: Age

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

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    definition?: Reference[]

    @IsNotEmpty()
    @IsBoolean()
    estimatedAge: boolean

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

    @IsNotEmpty()
    @IsBoolean()
    notDone: boolean

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    notDoneReason?: CodeableConcept

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
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    reasonCode?: CodeableConcept[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    reasonReference?: Reference[]

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
  export class GoalTargetDto implements GoalTarget {
    @IsOptional()
    @ValidateNested()
    @Type(() => QuantityDto)
    detailQuantity?: Quantity

    @IsOptional()
    @ValidateNested()
    @Type(() => RangeDto)
    detailRange?: Range

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    detailCodeableConcept?: CodeableConcept

    @IsOptional()
    @IsString()
    dueDate?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => DurationDto)
    dueDuration?: Duration

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    measure?: CodeableConcept

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
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    category?: CodeableConcept[]

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    description: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    expressedBy?: Reference

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
    @Type(() => CodeableConceptDto)
    outcomeCode?: CodeableConcept[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    outcomeReference?: Reference[]

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
    @IsIn(["entered-in-error", "accepted", "proposed", "cancelled", "in-progress", "on-hold", "planned", "rejected", "on-target", "ahead-of-target", "behind-target", "sustaining", "achieved"])
    status: "entered-in-error" | "accepted" | "proposed" | "cancelled" | "in-progress" | "on-hold" | "planned" | "rejected" | "on-target" | "ahead-of-target" | "behind-target" | "sustaining" | "achieved"

    @IsOptional()
    @IsString()
    statusDate?: string

    @IsOptional()
    @IsString()
    statusReason?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    subject?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => GoalTargetDto)
    target?: GoalTarget

  }
  export class GraphDefinitionLinkTargetCompartmentDto implements GraphDefinitionLinkTargetCompartment {
    @IsNotEmpty()
    @IsString()
    code: string

    @IsOptional()
    @IsString()
    description?: string

    @IsOptional()
    @IsString()
    expression?: string

    @IsNotEmpty()
    @IsIn(["identical", "matching", "different", "custom"])
    rule: "identical" | "matching" | "different" | "custom"

  }
  export class GraphDefinitionLinkTargetDto implements GraphDefinitionLinkTarget {
    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => GraphDefinitionLinkTargetCompartmentDto)
    compartment?: GraphDefinitionLinkTargetCompartment[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => GraphDefinitionLinkDto)
    link?: GraphDefinitionLink[]

    @IsOptional()
    @IsString()
    profile?: string

    @IsNotEmpty()
    @IsString()
    type: string

  }
  export class GraphDefinitionLinkDto implements GraphDefinitionLink {
    @IsOptional()
    @IsString()
    description?: string

    @IsOptional()
    @IsString()
    max?: string

    @IsOptional()
    @IsNumber()
    min?: number

    @IsNotEmpty()
    @IsString()
    path: string

    @IsOptional()
    @IsString()
    sliceName?: string

    @IsNotEmpty()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => GraphDefinitionLinkTargetDto)
    target: GraphDefinitionLinkTarget[]

  }
  export class GraphDefinitionDto implements GraphDefinition {
    @IsNotEmpty()
    @IsIn(["GraphDefinition"])
    resourceType: "GraphDefinition"

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ContactDetailDto)
    contact?: ContactDetail[]

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
    @Type(() => CodeableConceptDto)
    jurisdiction?: CodeableConcept[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => GraphDefinitionLinkDto)
    link?: GraphDefinitionLink[]

    @IsNotEmpty()
    @IsString()
    name: string

    @IsOptional()
    @IsString()
    profile?: string

    @IsOptional()
    @IsString()
    publisher?: string

    @IsOptional()
    @IsString()
    purpose?: string

    @IsNotEmpty()
    @IsString()
    start: string

    @IsNotEmpty()
    @IsIn(["active", "draft", "retired", "unknown"])
    status: "active" | "draft" | "retired" | "unknown"

    @IsOptional()
    @IsString()
    url?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => UsageContextDto)
    useContext?: UsageContext[]

    @IsOptional()
    @IsString()
    version?: string

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
    active: boolean

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
    @IsIn(["practitioner", "medication", "person", "animal", "device", "substance"])
    type: "practitioner" | "medication" | "person" | "animal" | "device" | "substance"

  }
  export class GuidanceResponseDto implements GuidanceResponse {
    @IsNotEmpty()
    @IsIn(["GuidanceResponse"])
    resourceType: "GuidanceResponse"

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    context?: Reference

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => DataRequirementDto)
    dataRequirement?: DataRequirement[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    evaluationMessage?: Reference[]

    @IsOptional()
    @ValidateNested()
    @Type(() => IdentifierDto)
    identifier?: Identifier

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => ReferenceDto)
    module: Reference

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => AnnotationDto)
    note?: Annotation[]

    @IsOptional()
    @IsString()
    occurrenceDateTime?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    outputParameters?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    performer?: Reference

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
    requestId?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    result?: Reference

    @IsNotEmpty()
    @IsIn(["entered-in-error", "in-progress", "success", "data-requested", "data-required", "failure"])
    status: "entered-in-error" | "in-progress" | "success" | "data-requested" | "data-required" | "failure"

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    subject?: Reference

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
    active: boolean

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
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    category?: CodeableConcept

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
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    endpoint?: Reference[]

    @IsOptional()
    @IsString()
    extraDetails?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => IdentifierDto)
    identifier?: Identifier[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    location?: Reference[]

    @IsOptional()
    @IsString()
    name?: string

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
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    referralMethod?: CodeableConcept[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    serviceProvisionCode?: CodeableConcept[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    specialty?: CodeableConcept[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ContactPointDto)
    telecom?: ContactPoint[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    type?: CodeableConcept[]

  }
  export class ImagingManifestStudySeriesInstanceDto implements ImagingManifestStudySeriesInstance {
    @IsNotEmpty()
    @IsString()
    sopClass: string

    @IsNotEmpty()
    @IsString()
    uid: string

  }
  export class ImagingManifestStudySeriesDto implements ImagingManifestStudySeries {
    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    endpoint?: Reference[]

    @IsNotEmpty()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ImagingManifestStudySeriesInstanceDto)
    instance: ImagingManifestStudySeriesInstance[]

    @IsNotEmpty()
    @IsString()
    uid: string

  }
  export class ImagingManifestStudyDto implements ImagingManifestStudy {
    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    endpoint?: Reference[]

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    imagingStudy?: Reference

    @IsNotEmpty()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ImagingManifestStudySeriesDto)
    series: ImagingManifestStudySeries[]

    @IsNotEmpty()
    @IsString()
    uid: string

  }
  export class ImagingManifestDto implements ImagingManifest {
    @IsNotEmpty()
    @IsIn(["ImagingManifest"])
    resourceType: "ImagingManifest"

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

    @IsOptional()
    @ValidateNested()
    @Type(() => IdentifierDto)
    identifier?: Identifier

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => ReferenceDto)
    patient: Reference

    @IsNotEmpty()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ImagingManifestStudyDto)
    study: ImagingManifestStudy[]

  }
  export class ImagingStudySeriesInstanceDto implements ImagingStudySeriesInstance {
    @IsOptional()
    @IsNumber()
    number?: number

    @IsNotEmpty()
    @IsString()
    sopClass: string

    @IsOptional()
    @IsString()
    title?: string

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
    @Type(() => ReferenceDto)
    endpoint?: Reference[]

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

    @IsOptional()
    @IsNumber()
    numberOfInstances?: number

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    performer?: Reference[]

    @IsOptional()
    @IsString()
    started?: string

    @IsNotEmpty()
    @IsString()
    uid: string

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
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    basedOn?: Reference[]

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
    endpoint?: Reference[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => IdentifierDto)
    identifier?: Identifier[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    interpreter?: Reference[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodingDto)
    modalityList?: Coding[]

    @IsOptional()
    @IsNumber()
    numberOfInstances?: number

    @IsOptional()
    @IsNumber()
    numberOfSeries?: number

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => ReferenceDto)
    patient: Reference

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    procedureCode?: CodeableConcept[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    procedureReference?: Reference[]

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    reason?: CodeableConcept

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

  }
  export class ImmunizationPractitionerDto implements ImmunizationPractitioner {
    @IsNotEmpty()
    @ValidateNested()
    @Type(() => ReferenceDto)
    actor: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    role?: CodeableConcept

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

    @IsOptional()
    @IsNumber()
    doseSequence?: number

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
    @IsBoolean()
    notGiven: boolean

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => ReferenceDto)
    patient: Reference

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ImmunizationPractitionerDto)
    practitioner?: ImmunizationPractitioner[]

    @IsNotEmpty()
    @IsBoolean()
    primarySource: boolean

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ImmunizationReactionDto)
    reaction?: ImmunizationReaction[]

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    reportOrigin?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    route?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    site?: CodeableConcept

    @IsNotEmpty()
    @IsIn(["entered-in-error", "completed"])
    status: "entered-in-error" | "completed"

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ImmunizationVaccinationProtocolDto)
    vaccinationProtocol?: ImmunizationVaccinationProtocol[]

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    vaccineCode: CodeableConcept

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

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    targetDisease?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    vaccineCode?: CodeableConcept

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

    @IsNotEmpty()
    @IsBoolean()
    example: boolean

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    exampleFor?: Reference

    @IsOptional()
    @IsString()
    name?: string

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
    @IsIn(["example", "include", "page", "list", "directory", "dictionary", "toc", "resource"])
    kind: "example" | "include" | "page" | "list" | "directory" | "dictionary" | "toc" | "resource"

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

    @IsNotEmpty()
    @IsString()
    title: string

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
    @Type(() => ContactDetailDto)
    contact?: ContactDetail[]

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

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    jurisdiction?: CodeableConcept[]

    @IsNotEmpty()
    @IsString()
    name: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ImplementationGuidePackageDto)
    package?: ImplementationGuidePackage[]

    @IsOptional()
    @ValidateNested()
    @Type(() => ImplementationGuidePageDto)
    page?: ImplementationGuidePage

    @IsOptional()
    @IsString()
    publisher?: string

    @IsNotEmpty()
    @IsIn(["active", "draft", "retired", "unknown"])
    status: "active" | "draft" | "retired" | "unknown"

    @IsNotEmpty()
    @IsString()
    url: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => UsageContextDto)
    useContext?: UsageContext[]

    @IsOptional()
    @IsString()
    version?: string

  }
  export class LibraryDto implements Library {
    @IsNotEmpty()
    @IsIn(["Library"])
    resourceType: "Library"

    @IsOptional()
    @IsString()
    approvalDate?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ContactDetailDto)
    contact?: ContactDetail[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => AttachmentDto)
    content?: Attachment[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ContributorDto)
    contributor?: Contributor[]

    @IsOptional()
    @IsString()
    copyright?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => DataRequirementDto)
    dataRequirement?: DataRequirement[]

    @IsOptional()
    @IsString()
    date?: string

    @IsOptional()
    @IsString()
    description?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => PeriodDto)
    effectivePeriod?: Period

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
    @Type(() => CodeableConceptDto)
    jurisdiction?: CodeableConcept[]

    @IsOptional()
    @IsString()
    lastReviewDate?: string

    @IsOptional()
    @IsString()
    name?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ParameterDefinitionDto)
    parameter?: ParameterDefinition[]

    @IsOptional()
    @IsString()
    publisher?: string

    @IsOptional()
    @IsString()
    purpose?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => RelatedArtifactDto)
    relatedArtifact?: RelatedArtifact[]

    @IsNotEmpty()
    @IsIn(["active", "draft", "retired", "unknown"])
    status: "active" | "draft" | "retired" | "unknown"

    @IsOptional()
    @IsString()
    title?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    topic?: CodeableConcept[]

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    type: CodeableConcept

    @IsOptional()
    @IsString()
    url?: string

    @IsOptional()
    @IsString()
    usage?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => UsageContextDto)
    useContext?: UsageContext[]

    @IsOptional()
    @IsString()
    version?: string

  }
  export class LinkageItemDto implements LinkageItem {
    @IsNotEmpty()
    @ValidateNested()
    @Type(() => ReferenceDto)
    resource: Reference

    @IsNotEmpty()
    @IsIn(["source", "alternate", "historical"])
    type: "source" | "alternate" | "historical"

  }
  export class LinkageDto implements Linkage {
    @IsNotEmpty()
    @IsIn(["Linkage"])
    resourceType: "Linkage"

    @IsNotEmpty()
    @IsBoolean()
    active: boolean

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    author?: Reference

    @IsNotEmpty()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => LinkageItemDto)
    item: LinkageItem[]

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
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => AnnotationDto)
    note?: Annotation[]

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
    @IsArray()
    @IsString({ each: true })
    alias?: string[]

    @IsOptional()
    @IsString()
    description?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    endpoint?: Reference[]

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
    @Type(() => CodingDto)
    operationalStatus?: Coding

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
  export class MeasureGroupPopulationDto implements MeasureGroupPopulation {
    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    code?: CodeableConcept

    @IsNotEmpty()
    @IsString()
    criteria: string

    @IsOptional()
    @IsString()
    description?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => IdentifierDto)
    identifier?: Identifier

    @IsOptional()
    @IsString()
    name?: string

  }
  export class MeasureGroupStratifierDto implements MeasureGroupStratifier {
    @IsOptional()
    @IsString()
    criteria?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => IdentifierDto)
    identifier?: Identifier

    @IsOptional()
    @IsString()
    path?: string

  }
  export class MeasureGroupDto implements MeasureGroup {
    @IsOptional()
    @IsString()
    description?: string

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => IdentifierDto)
    identifier: Identifier

    @IsOptional()
    @IsString()
    name?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => MeasureGroupPopulationDto)
    population?: MeasureGroupPopulation[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => MeasureGroupStratifierDto)
    stratifier?: MeasureGroupStratifier[]

  }
  export class MeasureSupplementalDataDto implements MeasureSupplementalData {
    @IsOptional()
    @IsString()
    criteria?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => IdentifierDto)
    identifier?: Identifier

    @IsOptional()
    @IsString()
    path?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    usage?: CodeableConcept[]

  }
  export class MeasureDto implements Measure {
    @IsNotEmpty()
    @IsIn(["Measure"])
    resourceType: "Measure"

    @IsOptional()
    @IsString()
    approvalDate?: string

    @IsOptional()
    @IsString()
    clinicalRecommendationStatement?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    compositeScoring?: CodeableConcept

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ContactDetailDto)
    contact?: ContactDetail[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ContributorDto)
    contributor?: Contributor[]

    @IsOptional()
    @IsString()
    copyright?: string

    @IsOptional()
    @IsString()
    date?: string

    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    definition?: string[]

    @IsOptional()
    @IsString()
    description?: string

    @IsOptional()
    @IsString()
    disclaimer?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => PeriodDto)
    effectivePeriod?: Period

    @IsNotEmpty()
    @IsBoolean()
    experimental: boolean

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => MeasureGroupDto)
    group?: MeasureGroup[]

    @IsOptional()
    @IsString()
    guidance?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => IdentifierDto)
    identifier?: Identifier[]

    @IsOptional()
    @IsString()
    improvementNotation?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    jurisdiction?: CodeableConcept[]

    @IsOptional()
    @IsString()
    lastReviewDate?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    library?: Reference[]

    @IsOptional()
    @IsString()
    name?: string

    @IsOptional()
    @IsString()
    publisher?: string

    @IsOptional()
    @IsString()
    purpose?: string

    @IsOptional()
    @IsString()
    rateAggregation?: string

    @IsOptional()
    @IsString()
    rationale?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => RelatedArtifactDto)
    relatedArtifact?: RelatedArtifact[]

    @IsOptional()
    @IsString()
    riskAdjustment?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    scoring?: CodeableConcept

    @IsOptional()
    @IsString()
    set?: string

    @IsNotEmpty()
    @IsIn(["active", "draft", "retired", "unknown"])
    status: "active" | "draft" | "retired" | "unknown"

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => MeasureSupplementalDataDto)
    supplementalData?: MeasureSupplementalData[]

    @IsOptional()
    @IsString()
    title?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    topic?: CodeableConcept[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    type?: CodeableConcept[]

    @IsOptional()
    @IsString()
    url?: string

    @IsOptional()
    @IsString()
    usage?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => UsageContextDto)
    useContext?: UsageContext[]

    @IsOptional()
    @IsString()
    version?: string

  }
  export class MeasureReportGroupPopulationDto implements MeasureReportGroupPopulation {
    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    code?: CodeableConcept

    @IsOptional()
    @IsNumber()
    count?: number

    @IsOptional()
    @ValidateNested()
    @Type(() => IdentifierDto)
    identifier?: Identifier

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    patients?: Reference

  }
  export class MeasureReportGroupStratifierStratumPopulationDto implements MeasureReportGroupStratifierStratumPopulation {
    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    code?: CodeableConcept

    @IsOptional()
    @IsNumber()
    count?: number

    @IsOptional()
    @ValidateNested()
    @Type(() => IdentifierDto)
    identifier?: Identifier

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    patients?: Reference

  }
  export class MeasureReportGroupStratifierStratumDto implements MeasureReportGroupStratifierStratum {
    @IsOptional()
    @IsNumber()
    measureScore?: number

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => MeasureReportGroupStratifierStratumPopulationDto)
    population?: MeasureReportGroupStratifierStratumPopulation[]

    @IsNotEmpty()
    @IsString()
    value: string

  }
  export class MeasureReportGroupStratifierDto implements MeasureReportGroupStratifier {
    @IsOptional()
    @ValidateNested()
    @Type(() => IdentifierDto)
    identifier?: Identifier

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => MeasureReportGroupStratifierStratumDto)
    stratum?: MeasureReportGroupStratifierStratum[]

  }
  export class MeasureReportGroupDto implements MeasureReportGroup {
    @IsNotEmpty()
    @ValidateNested()
    @Type(() => IdentifierDto)
    identifier: Identifier

    @IsOptional()
    @IsNumber()
    measureScore?: number

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => MeasureReportGroupPopulationDto)
    population?: MeasureReportGroupPopulation[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => MeasureReportGroupStratifierDto)
    stratifier?: MeasureReportGroupStratifier[]

  }
  export class MeasureReportDto implements MeasureReport {
    @IsNotEmpty()
    @IsIn(["MeasureReport"])
    resourceType: "MeasureReport"

    @IsOptional()
    @IsString()
    date?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    evaluatedResources?: Reference

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => MeasureReportGroupDto)
    group?: MeasureReportGroup[]

    @IsOptional()
    @ValidateNested()
    @Type(() => IdentifierDto)
    identifier?: Identifier

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => ReferenceDto)
    measure: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    patient?: Reference

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => PeriodDto)
    period: Period

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    reportingOrganization?: Reference

    @IsNotEmpty()
    @IsIn(["error", "pending", "complete"])
    status: "error" | "pending" | "complete"

    @IsNotEmpty()
    @IsIn(["individual", "patient-list", "summary"])
    type: "individual" | "patient-list" | "summary"

  }
  export class MediaDto implements Media {
    @IsNotEmpty()
    @IsIn(["Media"])
    resourceType: "Media"

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    basedOn?: Reference[]

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    bodySite?: CodeableConcept

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => AttachmentDto)
    content: Attachment

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    context?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    device?: Reference

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
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => AnnotationDto)
    note?: Annotation[]

    @IsOptional()
    @IsString()
    occurrenceDateTime?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => PeriodDto)
    occurrencePeriod?: Period

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    operator?: Reference

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    reasonCode?: CodeableConcept[]

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
  export class MedicationIngredientDto implements MedicationIngredient {
    @IsOptional()
    @ValidateNested()
    @Type(() => RatioDto)
    amount?: Ratio

    @IsNotEmpty()
    @IsBoolean()
    isActive: boolean

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    itemCodeableConcept?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    itemReference?: Reference

  }
  export class MedicationPackageContentDto implements MedicationPackageContent {
    @IsOptional()
    @ValidateNested()
    @Type(() => QuantityDto)
    amount?: Quantity

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    itemCodeableConcept?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    itemReference?: Reference

  }
  export class MedicationPackageBatchDto implements MedicationPackageBatch {
    @IsOptional()
    @IsString()
    expirationDate?: string

    @IsOptional()
    @IsString()
    lotNumber?: string

  }
  export class MedicationPackageDto implements MedicationPackage {
    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => MedicationPackageBatchDto)
    batch?: MedicationPackageBatch[]

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

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    form?: CodeableConcept

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => AttachmentDto)
    image?: Attachment[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => MedicationIngredientDto)
    ingredient?: MedicationIngredient[]

    @IsNotEmpty()
    @IsBoolean()
    isBrand: boolean

    @IsNotEmpty()
    @IsBoolean()
    isOverTheCounter: boolean

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    manufacturer?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => MedicationPackageDto)
    package?: MedicationPackage

    @IsNotEmpty()
    @IsIn(["active", "inactive", "entered-in-error"])
    status: "active" | "inactive" | "entered-in-error"

  }
  export class MedicationAdministrationPerformerDto implements MedicationAdministrationPerformer {
    @IsNotEmpty()
    @ValidateNested()
    @Type(() => ReferenceDto)
    actor: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    onBehalfOf?: Reference

  }
  export class MedicationAdministrationDosageDto implements MedicationAdministrationDosage {
    @IsOptional()
    @ValidateNested()
    @Type(() => QuantityDto)
    dose?: Quantity

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
    @Type(() => QuantityDto)
    rateQuantity?: Quantity

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    route?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    site?: CodeableConcept

    @IsOptional()
    @IsString()
    text?: string

  }
  export class MedicationAdministrationDto implements MedicationAdministration {
    @IsNotEmpty()
    @IsIn(["MedicationAdministration"])
    resourceType: "MedicationAdministration"

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    category?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    context?: Reference

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    definition?: Reference[]

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
    effectiveDateTime?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => PeriodDto)
    effectivePeriod?: Period

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    eventHistory?: Reference[]

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
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => AnnotationDto)
    note?: Annotation[]

    @IsNotEmpty()
    @IsBoolean()
    notGiven: boolean

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    partOf?: Reference[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => MedicationAdministrationPerformerDto)
    performer?: MedicationAdministrationPerformer[]

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    prescription?: Reference

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    reasonCode?: CodeableConcept[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    reasonNotGiven?: CodeableConcept[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    reasonReference?: Reference[]

    @IsNotEmpty()
    @IsIn(["entered-in-error", "unknown", "in-progress", "on-hold", "completed", "stopped"])
    status: "entered-in-error" | "unknown" | "in-progress" | "on-hold" | "completed" | "stopped"

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
  export class MedicationDispensePerformerDto implements MedicationDispensePerformer {
    @IsNotEmpty()
    @ValidateNested()
    @Type(() => ReferenceDto)
    actor: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    onBehalfOf?: Reference

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

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    type?: CodeableConcept

    @IsNotEmpty()
    @IsBoolean()
    wasSubstituted: boolean

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
    @Type(() => CodeableConceptDto)
    category?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    context?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => QuantityDto)
    daysSupply?: Quantity

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    destination?: Reference

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    detectedIssue?: Reference[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => DosageDto)
    dosageInstruction?: Dosage[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    eventHistory?: Reference[]

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

    @IsNotEmpty()
    @IsBoolean()
    notDone: boolean

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    notDoneReasonCodeableConcept?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    notDoneReasonReference?: Reference

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => AnnotationDto)
    note?: Annotation[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    partOf?: Reference[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => MedicationDispensePerformerDto)
    performer?: MedicationDispensePerformer[]

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
    @IsIn(["entered-in-error", "in-progress", "on-hold", "completed", "preparation", "stopped"])
    status: "entered-in-error" | "in-progress" | "on-hold" | "completed" | "preparation" | "stopped"

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    subject?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => MedicationDispenseSubstitutionDto)
    substitution?: MedicationDispenseSubstitution

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    supportingInformation?: Reference[]

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
  export class MedicationRequestRequesterDto implements MedicationRequestRequester {
    @IsNotEmpty()
    @ValidateNested()
    @Type(() => ReferenceDto)
    agent: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    onBehalfOf?: Reference

  }
  export class MedicationRequestDispenseRequestDto implements MedicationRequestDispenseRequest {
    @IsOptional()
    @ValidateNested()
    @Type(() => DurationDto)
    expectedSupplyDuration?: Duration

    @IsOptional()
    @IsNumber()
    numberOfRepeatsAllowed?: number

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    performer?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => QuantityDto)
    quantity?: Quantity

    @IsOptional()
    @ValidateNested()
    @Type(() => PeriodDto)
    validityPeriod?: Period

  }
  export class MedicationRequestSubstitutionDto implements MedicationRequestSubstitution {
    @IsNotEmpty()
    @IsBoolean()
    allowed: boolean

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    reason?: CodeableConcept

  }
  export class MedicationRequestDto implements MedicationRequest {
    @IsNotEmpty()
    @IsIn(["MedicationRequest"])
    resourceType: "MedicationRequest"

    @IsOptional()
    @IsString()
    authoredOn?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    basedOn?: Reference[]

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    category?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    context?: Reference

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    definition?: Reference[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    detectedIssue?: Reference[]

    @IsOptional()
    @ValidateNested()
    @Type(() => MedicationRequestDispenseRequestDto)
    dispenseRequest?: MedicationRequestDispenseRequest

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => DosageDto)
    dosageInstruction?: Dosage[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    eventHistory?: Reference[]

    @IsOptional()
    @ValidateNested()
    @Type(() => IdentifierDto)
    groupIdentifier?: Identifier

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => IdentifierDto)
    identifier?: Identifier[]

    @IsNotEmpty()
    @IsIn(["proposal", "plan", "order", "instance-order"])
    intent: "proposal" | "plan" | "order" | "instance-order"

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    medicationCodeableConcept?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    medicationReference?: Reference

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => AnnotationDto)
    note?: Annotation[]

    @IsNotEmpty()
    @IsIn(["routine", "urgent", "stat", "asap"])
    priority: "routine" | "urgent" | "stat" | "asap"

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    priorPrescription?: Reference

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
    @Type(() => ReferenceDto)
    recorder?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => MedicationRequestRequesterDto)
    requester?: MedicationRequestRequester

    @IsNotEmpty()
    @IsIn(["active", "entered-in-error", "draft", "unknown", "cancelled", "on-hold", "completed", "stopped"])
    status: "active" | "entered-in-error" | "draft" | "unknown" | "cancelled" | "on-hold" | "completed" | "stopped"

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => ReferenceDto)
    subject: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => MedicationRequestSubstitutionDto)
    substitution?: MedicationRequestSubstitution

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    supportingInformation?: Reference[]

  }
  export class MedicationStatementDto implements MedicationStatement {
    @IsNotEmpty()
    @IsIn(["MedicationStatement"])
    resourceType: "MedicationStatement"

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    basedOn?: Reference[]

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    category?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    context?: Reference

    @IsOptional()
    @IsString()
    dateAsserted?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    derivedFrom?: Reference[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => DosageDto)
    dosage?: Dosage[]

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
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => AnnotationDto)
    note?: Annotation[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    partOf?: Reference[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    reasonCode?: CodeableConcept[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    reasonNotTaken?: CodeableConcept[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    reasonReference?: Reference[]

    @IsNotEmpty()
    @IsIn(["active", "entered-in-error", "on-hold", "completed", "intended", "stopped"])
    status: "active" | "entered-in-error" | "on-hold" | "completed" | "intended" | "stopped"

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => ReferenceDto)
    subject: Reference

    @IsNotEmpty()
    @IsIn(["y", "n", "unk", "na"])
    taken: "y" | "n" | "unk" | "na"

  }
  export class MessageDefinitionFocusDto implements MessageDefinitionFocus {
    @IsNotEmpty()
    @IsString()
    code: string

    @IsOptional()
    @IsString()
    max?: string

    @IsOptional()
    @IsNumber()
    min?: number

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    profile?: Reference

  }
  export class MessageDefinitionAllowedResponseDto implements MessageDefinitionAllowedResponse {
    @IsNotEmpty()
    @ValidateNested()
    @Type(() => ReferenceDto)
    message: Reference

    @IsOptional()
    @IsString()
    situation?: string

  }
  export class MessageDefinitionDto implements MessageDefinition {
    @IsNotEmpty()
    @IsIn(["MessageDefinition"])
    resourceType: "MessageDefinition"

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => MessageDefinitionAllowedResponseDto)
    allowedResponse?: MessageDefinitionAllowedResponse[]

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    base?: Reference

    @IsNotEmpty()
    @IsIn(["Consequence", "Currency", "Notification"])
    category: "Consequence" | "Currency" | "Notification"

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ContactDetailDto)
    contact?: ContactDetail[]

    @IsOptional()
    @IsString()
    copyright?: string

    @IsNotEmpty()
    @IsString()
    date: string

    @IsOptional()
    @IsString()
    description?: string

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => CodingDto)
    event: Coding

    @IsNotEmpty()
    @IsBoolean()
    experimental: boolean

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => MessageDefinitionFocusDto)
    focus?: MessageDefinitionFocus[]

    @IsOptional()
    @ValidateNested()
    @Type(() => IdentifierDto)
    identifier?: Identifier

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    jurisdiction?: CodeableConcept[]

    @IsOptional()
    @IsString()
    name?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    parent?: Reference[]

    @IsOptional()
    @IsString()
    publisher?: string

    @IsOptional()
    @IsString()
    purpose?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    replaces?: Reference[]

    @IsNotEmpty()
    @IsBoolean()
    responseRequired: boolean

    @IsNotEmpty()
    @IsIn(["active", "draft", "retired", "unknown"])
    status: "active" | "draft" | "retired" | "unknown"

    @IsOptional()
    @IsString()
    title?: string

    @IsOptional()
    @IsString()
    url?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => UsageContextDto)
    useContext?: UsageContext[]

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
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    focus?: Reference[]

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

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    sender?: Reference

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => MessageHeaderSourceDto)
    source: MessageHeaderSource

    @IsNotEmpty()
    @IsString()
    timestamp: string

  }
  export class NamingSystemUniqueIdDto implements NamingSystemUniqueId {
    @IsOptional()
    @IsString()
    comment?: string

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
    @Type(() => ContactDetailDto)
    contact?: ContactDetail[]

    @IsNotEmpty()
    @IsString()
    date: string

    @IsOptional()
    @IsString()
    description?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    jurisdiction?: CodeableConcept[]

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
    @IsIn(["active", "draft", "retired", "unknown"])
    status: "active" | "draft" | "retired" | "unknown"

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
    @Type(() => UsageContextDto)
    useContext?: UsageContext[]

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
    @IsIn(["active", "entered-in-error", "draft", "proposed", "cancelled", "on-hold", "completed", "planned", "requested"])
    status: "active" | "entered-in-error" | "draft" | "proposed" | "cancelled" | "on-hold" | "completed" | "planned" | "requested"

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
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    appliesTo?: CodeableConcept[]

    @IsOptional()
    @ValidateNested()
    @Type(() => QuantityDto)
    high?: Quantity

    @IsOptional()
    @ValidateNested()
    @Type(() => QuantityDto)
    low?: Quantity

    @IsOptional()
    @IsString()
    text?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    type?: CodeableConcept

  }
  export class ObservationRelatedDto implements ObservationRelated {
    @IsNotEmpty()
    @ValidateNested()
    @Type(() => ReferenceDto)
    target: Reference

    @IsNotEmpty()
    @IsIn(["derived-from", "replaces", "has-member", "sequel-to", "qualified-by", "interfered-by"])
    type: "derived-from" | "replaces" | "has-member" | "sequel-to" | "qualified-by" | "interfered-by"

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
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    interpretation?: CodeableConcept

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
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    basedOn?: Reference[]

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    bodySite?: CodeableConcept

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
    comment?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ObservationComponentDto)
    component?: ObservationComponent[]

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    context?: Reference

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
    @IsIn(["entered-in-error", "unknown", "cancelled", "preliminary", "final", "amended", "registered", "corrected"])
    status: "entered-in-error" | "unknown" | "cancelled" | "preliminary" | "final" | "amended" | "registered" | "corrected"

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

    @IsNotEmpty()
    @IsBoolean()
    valueBoolean: boolean

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

    @IsNotEmpty()
    @IsIn(["string", "number", "date", "token", "reference", "composite", "quantity", "uri"])
    searchType: "string" | "number" | "date" | "token" | "reference" | "composite" | "quantity" | "uri"

    @IsOptional()
    @IsString()
    type?: string

    @IsNotEmpty()
    @IsIn(["in", "out"])
    use: "in" | "out"

  }
  export class OperationDefinitionOverloadDto implements OperationDefinitionOverload {
    @IsOptional()
    @IsString()
    comment?: string

    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    parameterName?: string[]

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
    @IsString()
    comment?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ContactDetailDto)
    contact?: ContactDetail[]

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

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    jurisdiction?: CodeableConcept[]

    @IsNotEmpty()
    @IsIn(["operation", "query"])
    kind: "operation" | "query"

    @IsNotEmpty()
    @IsString()
    name: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => OperationDefinitionOverloadDto)
    overload?: OperationDefinitionOverload[]

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
    purpose?: string

    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    resource?: string[]

    @IsNotEmpty()
    @IsIn(["active", "draft", "retired", "unknown"])
    status: "active" | "draft" | "retired" | "unknown"

    @IsNotEmpty()
    @IsBoolean()
    system: boolean

    @IsNotEmpty()
    @IsBoolean()
    type: boolean

    @IsOptional()
    @IsString()
    url?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => UsageContextDto)
    useContext?: UsageContext[]

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
    expression?: string[]

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
    @IsString({ each: true })
    alias?: string[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => OrganizationContactDto)
    contact?: OrganizationContact[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    endpoint?: Reference[]

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
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    type?: CodeableConcept[]

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
    resource: Account | ActivityDefinition | AdverseEvent | AllergyIntolerance | Appointment | AppointmentResponse | AuditEvent | Basic | Binary | BodySite | Bundle<FhirResource> | CapabilityStatement | CarePlan | CareTeam | ChargeItem | Claim | ClaimResponse | ClinicalImpression | CodeSystem | Communication | CommunicationRequest | CompartmentDefinition | Composition | ConceptMap | Condition | Consent | Contract | Coverage | DataElement | DetectedIssue | Device | DeviceComponent | DeviceMetric | DeviceRequest | DeviceUseStatement | DiagnosticReport | DocumentManifest | DocumentReference | EligibilityRequest | EligibilityResponse | Encounter | Endpoint | EnrollmentRequest | EnrollmentResponse | EpisodeOfCare | ExpansionProfile | ExplanationOfBenefit | FamilyMemberHistory | Flag | Goal | GraphDefinition | Group | GuidanceResponse | HealthcareService | ImagingManifest | ImagingStudy | Immunization | ImmunizationRecommendation | ImplementationGuide | Library | Linkage | List | Location | Measure | MeasureReport | Media | Medication | MedicationAdministration | MedicationDispense | MedicationRequest | MedicationStatement | MessageDefinition | MessageHeader | NamingSystem | NutritionOrder | Observation | OperationDefinition | OperationOutcome | Organization | Parameters | Patient | PaymentNotice | PaymentReconciliation | Person | PlanDefinition | Practitioner | PractitionerRole | Procedure | ProcedureRequest | ProcessRequest | ProcessResponse | Provenance | Questionnaire | QuestionnaireResponse | ReferralRequest | RelatedPerson | RequestGroup | ResearchStudy | ResearchSubject | RiskAssessment | Schedule | SearchParameter | Sequence | ServiceDefinition | Slot | Specimen | StructureDefinition | StructureMap | Subscription | Substance | SupplyDelivery | SupplyRequest | Task | TestReport | TestScript | ValueSet | VisionPrescription

    @IsOptional()
    @IsString()
    valueBase64Binary?: string

    @IsNotEmpty()
    @IsBoolean()
    valueBoolean: boolean

    @IsOptional()
    @IsString()
    valueCode?: string

    @IsOptional()
    @IsString()
    valueDate?: string

    @IsOptional()
    @IsString()
    valueDateTime?: string

    @IsOptional()
    @IsNumber()
    valueDecimal?: number

    @IsOptional()
    @IsString()
    valueId?: string

    @IsOptional()
    @IsString()
    valueInstant?: string

    @IsOptional()
    @IsNumber()
    valueInteger?: number

    @IsOptional()
    @IsString()
    valueMarkdown?: string

    @IsOptional()
    @IsString()
    valueOid?: string

    @IsOptional()
    @IsNumber()
    valuePositiveInt?: number

    @IsOptional()
    @IsString()
    valueString?: string

    @IsOptional()
    @IsString()
    valueTime?: string

    @IsOptional()
    @IsNumber()
    valueUnsignedInt?: number

    @IsOptional()
    @IsString()
    valueUri?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => AddressDto)
    valueAddress?: Address

    @IsOptional()
    @ValidateNested()
    @Type(() => AgeDto)
    valueAge?: Age

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
    @Type(() => CodeableConceptDto)
    valueCodeableConcept?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => CodingDto)
    valueCoding?: Coding

    @IsOptional()
    @ValidateNested()
    @Type(() => ContactPointDto)
    valueContactPoint?: ContactPoint

    @IsOptional()
    @ValidateNested()
    @Type(() => CountDto)
    valueCount?: Count

    @IsOptional()
    @ValidateNested()
    @Type(() => DistanceDto)
    valueDistance?: Distance

    @IsOptional()
    @ValidateNested()
    @Type(() => DurationDto)
    valueDuration?: Duration

    @IsOptional()
    @ValidateNested()
    @Type(() => HumanNameDto)
    valueHumanName?: HumanName

    @IsOptional()
    @ValidateNested()
    @Type(() => IdentifierDto)
    valueIdentifier?: Identifier

    @IsOptional()
    @ValidateNested()
    @Type(() => MoneyDto)
    valueMoney?: Money

    @IsOptional()
    @ValidateNested()
    @Type(() => PeriodDto)
    valuePeriod?: Period

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
    @Type(() => RatioDto)
    valueRatio?: Ratio

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    valueReference?: Reference

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
    @Type(() => TimingDto)
    valueTiming?: Timing

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
    @IsIn(["replaces", "replaced-by", "refer", "seealso"])
    type: "replaces" | "replaced-by" | "refer" | "seealso"

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
    @Type(() => ReferenceDto)
    generalPractitioner?: Reference[]

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
    @Type(() => CodeableConceptDto)
    paymentStatus?: CodeableConcept

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

    @IsNotEmpty()
    @IsIn(["active", "entered-in-error", "draft", "cancelled"])
    status: "active" | "entered-in-error" | "draft" | "cancelled"

    @IsOptional()
    @IsString()
    statusDate?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    target?: Reference

  }
  export class PaymentReconciliationDetailDto implements PaymentReconciliationDetail {
    @IsOptional()
    @ValidateNested()
    @Type(() => MoneyDto)
    amount?: Money

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
    response?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    submitter?: Reference

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    type: CodeableConcept

  }
  export class PaymentReconciliationProcessNoteDto implements PaymentReconciliationProcessNote {
    @IsOptional()
    @IsString()
    text?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    type?: CodeableConcept

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
    @Type(() => CodeableConceptDto)
    form?: CodeableConcept

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
    @Type(() => CodeableConceptDto)
    outcome?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => PeriodDto)
    period?: Period

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => PaymentReconciliationProcessNoteDto)
    processNote?: PaymentReconciliationProcessNote[]

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

    @IsNotEmpty()
    @IsIn(["active", "entered-in-error", "draft", "cancelled"])
    status: "active" | "entered-in-error" | "draft" | "cancelled"

    @IsOptional()
    @ValidateNested()
    @Type(() => MoneyDto)
    total?: Money

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
  export class PlanDefinitionGoalTargetDto implements PlanDefinitionGoalTarget {
    @IsOptional()
    @ValidateNested()
    @Type(() => QuantityDto)
    detailQuantity?: Quantity

    @IsOptional()
    @ValidateNested()
    @Type(() => RangeDto)
    detailRange?: Range

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    detailCodeableConcept?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => DurationDto)
    due?: Duration

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    measure?: CodeableConcept

  }
  export class PlanDefinitionGoalDto implements PlanDefinitionGoal {
    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    addresses?: CodeableConcept[]

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    category?: CodeableConcept

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    description: CodeableConcept

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => RelatedArtifactDto)
    documentation?: RelatedArtifact[]

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    priority?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    start?: CodeableConcept

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => PlanDefinitionGoalTargetDto)
    target?: PlanDefinitionGoalTarget[]

  }
  export class PlanDefinitionActionConditionDto implements PlanDefinitionActionCondition {
    @IsOptional()
    @IsString()
    description?: string

    @IsOptional()
    @IsString()
    expression?: string

    @IsNotEmpty()
    @IsIn(["applicability", "start", "stop"])
    kind: "applicability" | "start" | "stop"

    @IsOptional()
    @IsString()
    language?: string

  }
  export class PlanDefinitionActionRelatedActionDto implements PlanDefinitionActionRelatedAction {
    @IsNotEmpty()
    @IsString()
    actionId: string

    @IsOptional()
    @ValidateNested()
    @Type(() => DurationDto)
    offsetDuration?: Duration

    @IsOptional()
    @ValidateNested()
    @Type(() => RangeDto)
    offsetRange?: Range

    @IsNotEmpty()
    @IsIn(["before-start", "before", "before-end", "concurrent-with-start", "concurrent", "concurrent-with-end", "after-start", "after", "after-end"])
    relationship: "before-start" | "before" | "before-end" | "concurrent-with-start" | "concurrent" | "concurrent-with-end" | "after-start" | "after" | "after-end"

  }
  export class PlanDefinitionActionParticipantDto implements PlanDefinitionActionParticipant {
    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    role?: CodeableConcept

    @IsNotEmpty()
    @IsIn(["patient", "practitioner", "related-person"])
    type: "patient" | "practitioner" | "related-person"

  }
  export class PlanDefinitionActionDynamicValueDto implements PlanDefinitionActionDynamicValue {
    @IsOptional()
    @IsString()
    description?: string

    @IsOptional()
    @IsString()
    expression?: string

    @IsOptional()
    @IsString()
    language?: string

    @IsOptional()
    @IsString()
    path?: string

  }
  export class PlanDefinitionActionDto implements PlanDefinitionAction {
    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => PlanDefinitionActionDto)
    action?: PlanDefinitionAction[]

    @IsNotEmpty()
    @IsIn(["single", "multiple"])
    cardinalityBehavior: "single" | "multiple"

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    code?: CodeableConcept[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => PlanDefinitionActionConditionDto)
    condition?: PlanDefinitionActionCondition[]

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    definition?: Reference

    @IsOptional()
    @IsString()
    description?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => RelatedArtifactDto)
    documentation?: RelatedArtifact[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => PlanDefinitionActionDynamicValueDto)
    dynamicValue?: PlanDefinitionActionDynamicValue[]

    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    goalId?: string[]

    @IsNotEmpty()
    @IsIn(["visual-group", "logical-group", "sentence-group"])
    groupingBehavior: "visual-group" | "logical-group" | "sentence-group"

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => DataRequirementDto)
    input?: DataRequirement[]

    @IsOptional()
    @IsString()
    label?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => DataRequirementDto)
    output?: DataRequirement[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => PlanDefinitionActionParticipantDto)
    participant?: PlanDefinitionActionParticipant[]

    @IsNotEmpty()
    @IsIn(["no", "yes"])
    precheckBehavior: "no" | "yes"

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    reason?: CodeableConcept[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => PlanDefinitionActionRelatedActionDto)
    relatedAction?: PlanDefinitionActionRelatedAction[]

    @IsNotEmpty()
    @IsIn(["must", "could", "must-unless-documented"])
    requiredBehavior: "must" | "could" | "must-unless-documented"

    @IsNotEmpty()
    @IsIn(["any", "all", "all-or-none", "exactly-one", "at-most-one", "one-or-more"])
    selectionBehavior: "any" | "all" | "all-or-none" | "exactly-one" | "at-most-one" | "one-or-more"

    @IsOptional()
    @IsString()
    textEquivalent?: string

    @IsOptional()
    @IsString()
    timingDateTime?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => PeriodDto)
    timingPeriod?: Period

    @IsOptional()
    @ValidateNested()
    @Type(() => DurationDto)
    timingDuration?: Duration

    @IsOptional()
    @ValidateNested()
    @Type(() => RangeDto)
    timingRange?: Range

    @IsOptional()
    @ValidateNested()
    @Type(() => TimingDto)
    timingTiming?: Timing

    @IsOptional()
    @IsString()
    title?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    transform?: Reference

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => TriggerDefinitionDto)
    triggerDefinition?: TriggerDefinition[]

    @IsOptional()
    @ValidateNested()
    @Type(() => CodingDto)
    type?: Coding

  }
  export class PlanDefinitionDto implements PlanDefinition {
    @IsNotEmpty()
    @IsIn(["PlanDefinition"])
    resourceType: "PlanDefinition"

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => PlanDefinitionActionDto)
    action?: PlanDefinitionAction[]

    @IsOptional()
    @IsString()
    approvalDate?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ContactDetailDto)
    contact?: ContactDetail[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ContributorDto)
    contributor?: Contributor[]

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
    @Type(() => PeriodDto)
    effectivePeriod?: Period

    @IsNotEmpty()
    @IsBoolean()
    experimental: boolean

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => PlanDefinitionGoalDto)
    goal?: PlanDefinitionGoal[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => IdentifierDto)
    identifier?: Identifier[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    jurisdiction?: CodeableConcept[]

    @IsOptional()
    @IsString()
    lastReviewDate?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    library?: Reference[]

    @IsOptional()
    @IsString()
    name?: string

    @IsOptional()
    @IsString()
    publisher?: string

    @IsOptional()
    @IsString()
    purpose?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => RelatedArtifactDto)
    relatedArtifact?: RelatedArtifact[]

    @IsNotEmpty()
    @IsIn(["active", "draft", "retired", "unknown"])
    status: "active" | "draft" | "retired" | "unknown"

    @IsOptional()
    @IsString()
    title?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    topic?: CodeableConcept[]

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    type?: CodeableConcept

    @IsOptional()
    @IsString()
    url?: string

    @IsOptional()
    @IsString()
    usage?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => UsageContextDto)
    useContext?: UsageContext[]

    @IsOptional()
    @IsString()
    version?: string

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
    @Type(() => PractitionerQualificationDto)
    qualification?: PractitionerQualification[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ContactPointDto)
    telecom?: ContactPoint[]

  }
  export class PractitionerRoleAvailableTimeDto implements PractitionerRoleAvailableTime {
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
  export class PractitionerRoleNotAvailableDto implements PractitionerRoleNotAvailable {
    @IsNotEmpty()
    @IsString()
    description: string

    @IsOptional()
    @ValidateNested()
    @Type(() => PeriodDto)
    during?: Period

  }
  export class PractitionerRoleDto implements PractitionerRole {
    @IsNotEmpty()
    @IsIn(["PractitionerRole"])
    resourceType: "PractitionerRole"

    @IsNotEmpty()
    @IsBoolean()
    active: boolean

    @IsOptional()
    @IsString()
    availabilityExceptions?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => PractitionerRoleAvailableTimeDto)
    availableTime?: PractitionerRoleAvailableTime[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    code?: CodeableConcept[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    endpoint?: Reference[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    healthcareService?: Reference[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => IdentifierDto)
    identifier?: Identifier[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    location?: Reference[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => PractitionerRoleNotAvailableDto)
    notAvailable?: PractitionerRoleNotAvailable[]

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    organization?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => PeriodDto)
    period?: Period

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    practitioner?: Reference

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    specialty?: CodeableConcept[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ContactPointDto)
    telecom?: ContactPoint[]

  }
  export class ProcedurePerformerDto implements ProcedurePerformer {
    @IsNotEmpty()
    @ValidateNested()
    @Type(() => ReferenceDto)
    actor: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    onBehalfOf?: Reference

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
    @Type(() => ReferenceDto)
    basedOn?: Reference[]

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
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    code?: CodeableConcept

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    complication?: CodeableConcept[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    complicationDetail?: Reference[]

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    context?: Reference

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    definition?: Reference[]

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

    @IsNotEmpty()
    @IsBoolean()
    notDone: boolean

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    notDoneReason?: CodeableConcept

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => AnnotationDto)
    note?: Annotation[]

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    outcome?: CodeableConcept

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    partOf?: Reference[]

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
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    report?: Reference[]

    @IsNotEmpty()
    @IsIn(["entered-in-error", "unknown", "in-progress", "completed", "suspended", "aborted", "preparation"])
    status: "entered-in-error" | "unknown" | "in-progress" | "completed" | "suspended" | "aborted" | "preparation"

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => ReferenceDto)
    subject: Reference

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    usedCode?: CodeableConcept[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    usedReference?: Reference[]

  }
  export class ProcedureRequestRequesterDto implements ProcedureRequestRequester {
    @IsNotEmpty()
    @ValidateNested()
    @Type(() => ReferenceDto)
    agent: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    onBehalfOf?: Reference

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
    @IsString()
    authoredOn?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    basedOn?: Reference[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    bodySite?: CodeableConcept[]

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
    @ValidateNested()
    @Type(() => ReferenceDto)
    context?: Reference

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    definition?: Reference[]

    @IsNotEmpty()
    @IsBoolean()
    doNotPerform: boolean

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => IdentifierDto)
    identifier?: Identifier[]

    @IsNotEmpty()
    @IsIn(["proposal", "plan", "order", "option", "instance-order", "original-order", "reflex-order", "filler-order"])
    intent: "proposal" | "plan" | "order" | "option" | "instance-order" | "original-order" | "reflex-order" | "filler-order"

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => AnnotationDto)
    note?: Annotation[]

    @IsOptional()
    @IsString()
    occurrenceDateTime?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => PeriodDto)
    occurrencePeriod?: Period

    @IsOptional()
    @ValidateNested()
    @Type(() => TimingDto)
    occurrenceTiming?: Timing

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    performer?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    performerType?: CodeableConcept

    @IsNotEmpty()
    @IsIn(["routine", "urgent", "stat", "asap"])
    priority: "routine" | "urgent" | "stat" | "asap"

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
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    relevantHistory?: Reference[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    replaces?: Reference[]

    @IsOptional()
    @ValidateNested()
    @Type(() => ProcedureRequestRequesterDto)
    requester?: ProcedureRequestRequester

    @IsOptional()
    @ValidateNested()
    @Type(() => IdentifierDto)
    requisition?: Identifier

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    specimen?: Reference[]

    @IsNotEmpty()
    @IsIn(["active", "entered-in-error", "draft", "unknown", "cancelled", "completed", "suspended"])
    status: "active" | "entered-in-error" | "draft" | "unknown" | "cancelled" | "completed" | "suspended"

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => ReferenceDto)
    subject: Reference

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    supportingInfo?: Reference[]

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

    @IsNotEmpty()
    @IsIn(["active", "entered-in-error", "draft", "cancelled"])
    status: "active" | "entered-in-error" | "draft" | "cancelled"

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    target?: Reference

  }
  export class ProcessResponseProcessNoteDto implements ProcessResponseProcessNote {
    @IsOptional()
    @IsString()
    text?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    type?: CodeableConcept

  }
  export class ProcessResponseDto implements ProcessResponse {
    @IsNotEmpty()
    @IsIn(["ProcessResponse"])
    resourceType: "ProcessResponse"

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    communicationRequest?: Reference[]

    @IsOptional()
    @IsString()
    created?: string

    @IsOptional()
    @IsString()
    disposition?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    error?: CodeableConcept[]

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    form?: CodeableConcept

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
    @Type(() => CodeableConceptDto)
    outcome?: CodeableConcept

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ProcessResponseProcessNoteDto)
    processNote?: ProcessResponseProcessNote[]

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

    @IsNotEmpty()
    @IsIn(["active", "entered-in-error", "draft", "cancelled"])
    status: "active" | "entered-in-error" | "draft" | "cancelled"

  }
  export class ProvenanceAgentDto implements ProvenanceAgent {
    @IsOptional()
    @IsString()
    onBehalfOfUri?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    onBehalfOfReference?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    relatedAgentType?: CodeableConcept

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    role?: CodeableConcept[]

    @IsOptional()
    @IsString()
    whoUri?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    whoReference?: Reference

  }
  export class ProvenanceEntityDto implements ProvenanceEntity {
    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ProvenanceAgentDto)
    agent?: ProvenanceAgent[]

    @IsNotEmpty()
    @IsIn(["source", "derivation", "revision", "quotation", "removal"])
    role: "source" | "derivation" | "revision" | "quotation" | "removal"

    @IsOptional()
    @IsString()
    whatUri?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    whatReference?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => IdentifierDto)
    whatIdentifier?: Identifier

  }
  export class ProvenanceDto implements Provenance {
    @IsNotEmpty()
    @IsIn(["Provenance"])
    resourceType: "Provenance"

    @IsOptional()
    @ValidateNested()
    @Type(() => CodingDto)
    activity?: Coding

    @IsNotEmpty()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ProvenanceAgentDto)
    agent: ProvenanceAgent[]

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
    @Type(() => CodingDto)
    reason?: Coding[]

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
  export class QuestionnaireItemEnableWhenDto implements QuestionnaireItemEnableWhen {
    @IsNotEmpty()
    @IsBoolean()
    answerBoolean: boolean

    @IsOptional()
    @IsNumber()
    answerDecimal?: number

    @IsOptional()
    @IsNumber()
    answerInteger?: number

    @IsOptional()
    @IsString()
    answerDate?: string

    @IsOptional()
    @IsString()
    answerDateTime?: string

    @IsOptional()
    @IsString()
    answerTime?: string

    @IsOptional()
    @IsString()
    answerString?: string

    @IsOptional()
    @IsString()
    answerUri?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => AttachmentDto)
    answerAttachment?: Attachment

    @IsOptional()
    @ValidateNested()
    @Type(() => CodingDto)
    answerCoding?: Coding

    @IsOptional()
    @ValidateNested()
    @Type(() => QuantityDto)
    answerQuantity?: Quantity

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    answerReference?: Reference

    @IsNotEmpty()
    @IsBoolean()
    hasAnswer: boolean

    @IsNotEmpty()
    @IsString()
    question: string

  }
  export class QuestionnaireItemOptionDto implements QuestionnaireItemOption {
    @IsOptional()
    @IsNumber()
    valueInteger?: number

    @IsOptional()
    @IsString()
    valueDate?: string

    @IsOptional()
    @IsString()
    valueTime?: string

    @IsOptional()
    @IsString()
    valueString?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => CodingDto)
    valueCoding?: Coding

  }
  export class QuestionnaireItemDto implements QuestionnaireItem {
    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodingDto)
    code?: Coding[]

    @IsOptional()
    @IsString()
    definition?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => QuestionnaireItemEnableWhenDto)
    enableWhen?: QuestionnaireItemEnableWhen[]

    @IsNotEmpty()
    @IsBoolean()
    initialBoolean: boolean

    @IsOptional()
    @IsNumber()
    initialDecimal?: number

    @IsOptional()
    @IsNumber()
    initialInteger?: number

    @IsOptional()
    @IsString()
    initialDate?: string

    @IsOptional()
    @IsString()
    initialDateTime?: string

    @IsOptional()
    @IsString()
    initialTime?: string

    @IsOptional()
    @IsString()
    initialString?: string

    @IsOptional()
    @IsString()
    initialUri?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => AttachmentDto)
    initialAttachment?: Attachment

    @IsOptional()
    @ValidateNested()
    @Type(() => CodingDto)
    initialCoding?: Coding

    @IsOptional()
    @ValidateNested()
    @Type(() => QuantityDto)
    initialQuantity?: Quantity

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    initialReference?: Reference

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => QuestionnaireItemDto)
    item?: QuestionnaireItem[]

    @IsNotEmpty()
    @IsString()
    linkId: string

    @IsOptional()
    @IsNumber()
    maxLength?: number

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => QuestionnaireItemOptionDto)
    option?: QuestionnaireItemOption[]

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    options?: Reference

    @IsOptional()
    @IsString()
    prefix?: string

    @IsNotEmpty()
    @IsBoolean()
    readOnly: boolean

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
    @IsIn(["string", "boolean", "url", "date", "reference", "quantity", "integer", "dateTime", "group", "display", "question", "decimal", "time", "text", "choice", "open-choice", "attachment"])
    type: "string" | "boolean" | "url" | "date" | "reference" | "quantity" | "integer" | "dateTime" | "group" | "display" | "question" | "decimal" | "time" | "text" | "choice" | "open-choice" | "attachment"

  }
  export class QuestionnaireDto implements Questionnaire {
    @IsNotEmpty()
    @IsIn(["Questionnaire"])
    resourceType: "Questionnaire"

    @IsOptional()
    @IsString()
    approvalDate?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodingDto)
    code?: Coding[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ContactDetailDto)
    contact?: ContactDetail[]

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
    @Type(() => PeriodDto)
    effectivePeriod?: Period

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
    @Type(() => QuestionnaireItemDto)
    item?: QuestionnaireItem[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    jurisdiction?: CodeableConcept[]

    @IsOptional()
    @IsString()
    lastReviewDate?: string

    @IsOptional()
    @IsString()
    name?: string

    @IsOptional()
    @IsString()
    publisher?: string

    @IsOptional()
    @IsString()
    purpose?: string

    @IsNotEmpty()
    @IsIn(["active", "draft", "retired", "unknown"])
    status: "active" | "draft" | "retired" | "unknown"

    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    subjectType?: string[]

    @IsOptional()
    @IsString()
    title?: string

    @IsOptional()
    @IsString()
    url?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => UsageContextDto)
    useContext?: UsageContext[]

    @IsOptional()
    @IsString()
    version?: string

  }
  export class QuestionnaireResponseItemAnswerDto implements QuestionnaireResponseItemAnswer {
    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => QuestionnaireResponseItemDto)
    item?: QuestionnaireResponseItem[]

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
  export class QuestionnaireResponseItemDto implements QuestionnaireResponseItem {
    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => QuestionnaireResponseItemAnswerDto)
    answer?: QuestionnaireResponseItemAnswer[]

    @IsOptional()
    @IsString()
    definition?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => QuestionnaireResponseItemDto)
    item?: QuestionnaireResponseItem[]

    @IsNotEmpty()
    @IsString()
    linkId: string

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    subject?: Reference

    @IsOptional()
    @IsString()
    text?: string

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
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    basedOn?: Reference[]

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    context?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => IdentifierDto)
    identifier?: Identifier

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => QuestionnaireResponseItemDto)
    item?: QuestionnaireResponseItem[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    parent?: Reference[]

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    questionnaire?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    source?: Reference

    @IsNotEmpty()
    @IsIn(["entered-in-error", "in-progress", "completed", "amended", "stopped"])
    status: "entered-in-error" | "in-progress" | "completed" | "amended" | "stopped"

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    subject?: Reference

  }
  export class ReferralRequestRequesterDto implements ReferralRequestRequester {
    @IsNotEmpty()
    @ValidateNested()
    @Type(() => ReferenceDto)
    agent: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    onBehalfOf?: Reference

  }
  export class ReferralRequestDto implements ReferralRequest {
    @IsNotEmpty()
    @IsIn(["ReferralRequest"])
    resourceType: "ReferralRequest"

    @IsOptional()
    @IsString()
    authoredOn?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    basedOn?: Reference[]

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    context?: Reference

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    definition?: Reference[]

    @IsOptional()
    @IsString()
    description?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => IdentifierDto)
    groupIdentifier?: Identifier

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => IdentifierDto)
    identifier?: Identifier[]

    @IsNotEmpty()
    @IsIn(["proposal", "plan", "order", "option", "instance-order", "original-order", "reflex-order", "filler-order"])
    intent: "proposal" | "plan" | "order" | "option" | "instance-order" | "original-order" | "reflex-order" | "filler-order"

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => AnnotationDto)
    note?: Annotation[]

    @IsOptional()
    @IsString()
    occurrenceDateTime?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => PeriodDto)
    occurrencePeriod?: Period

    @IsOptional()
    @IsString()
    priority?: string

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
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    recipient?: Reference[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    relevantHistory?: Reference[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    replaces?: Reference[]

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferralRequestRequesterDto)
    requester?: ReferralRequestRequester

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
    @IsIn(["active", "entered-in-error", "draft", "unknown", "cancelled", "completed", "suspended"])
    status: "active" | "entered-in-error" | "draft" | "unknown" | "cancelled" | "completed" | "suspended"

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => ReferenceDto)
    subject: Reference

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    supportingInfo?: Reference[]

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    type?: CodeableConcept

  }
  export class RelatedPersonDto implements RelatedPerson {
    @IsNotEmpty()
    @IsIn(["RelatedPerson"])
    resourceType: "RelatedPerson"

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
    @Type(() => HumanNameDto)
    name?: HumanName[]

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
  export class RequestGroupActionConditionDto implements RequestGroupActionCondition {
    @IsOptional()
    @IsString()
    description?: string

    @IsOptional()
    @IsString()
    expression?: string

    @IsNotEmpty()
    @IsIn(["applicability", "start", "stop"])
    kind: "applicability" | "start" | "stop"

    @IsOptional()
    @IsString()
    language?: string

  }
  export class RequestGroupActionRelatedActionDto implements RequestGroupActionRelatedAction {
    @IsNotEmpty()
    @IsString()
    actionId: string

    @IsOptional()
    @ValidateNested()
    @Type(() => DurationDto)
    offsetDuration?: Duration

    @IsOptional()
    @ValidateNested()
    @Type(() => RangeDto)
    offsetRange?: Range

    @IsNotEmpty()
    @IsIn(["before-start", "before", "before-end", "concurrent-with-start", "concurrent", "concurrent-with-end", "after-start", "after", "after-end"])
    relationship: "before-start" | "before" | "before-end" | "concurrent-with-start" | "concurrent" | "concurrent-with-end" | "after-start" | "after" | "after-end"

  }
  export class RequestGroupActionDto implements RequestGroupAction {
    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => RequestGroupActionDto)
    action?: RequestGroupAction[]

    @IsNotEmpty()
    @IsIn(["single", "multiple"])
    cardinalityBehavior: "single" | "multiple"

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    code?: CodeableConcept[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => RequestGroupActionConditionDto)
    condition?: RequestGroupActionCondition[]

    @IsOptional()
    @IsString()
    description?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => RelatedArtifactDto)
    documentation?: RelatedArtifact[]

    @IsNotEmpty()
    @IsIn(["visual-group", "logical-group", "sentence-group"])
    groupingBehavior: "visual-group" | "logical-group" | "sentence-group"

    @IsOptional()
    @IsString()
    label?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    participant?: Reference[]

    @IsNotEmpty()
    @IsIn(["no", "yes"])
    precheckBehavior: "no" | "yes"

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => RequestGroupActionRelatedActionDto)
    relatedAction?: RequestGroupActionRelatedAction[]

    @IsNotEmpty()
    @IsIn(["must", "could", "must-unless-documented"])
    requiredBehavior: "must" | "could" | "must-unless-documented"

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    resource?: Reference

    @IsNotEmpty()
    @IsIn(["any", "all", "all-or-none", "exactly-one", "at-most-one", "one-or-more"])
    selectionBehavior: "any" | "all" | "all-or-none" | "exactly-one" | "at-most-one" | "one-or-more"

    @IsOptional()
    @IsString()
    textEquivalent?: string

    @IsOptional()
    @IsString()
    timingDateTime?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => PeriodDto)
    timingPeriod?: Period

    @IsOptional()
    @ValidateNested()
    @Type(() => DurationDto)
    timingDuration?: Duration

    @IsOptional()
    @ValidateNested()
    @Type(() => RangeDto)
    timingRange?: Range

    @IsOptional()
    @ValidateNested()
    @Type(() => TimingDto)
    timingTiming?: Timing

    @IsOptional()
    @IsString()
    title?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => CodingDto)
    type?: Coding

  }
  export class RequestGroupDto implements RequestGroup {
    @IsNotEmpty()
    @IsIn(["RequestGroup"])
    resourceType: "RequestGroup"

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => RequestGroupActionDto)
    action?: RequestGroupAction[]

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    author?: Reference

    @IsOptional()
    @IsString()
    authoredOn?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    basedOn?: Reference[]

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    context?: Reference

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    definition?: Reference[]

    @IsOptional()
    @ValidateNested()
    @Type(() => IdentifierDto)
    groupIdentifier?: Identifier

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => IdentifierDto)
    identifier?: Identifier[]

    @IsNotEmpty()
    @IsIn(["proposal", "plan", "order", "option", "instance-order", "original-order", "reflex-order", "filler-order"])
    intent: "proposal" | "plan" | "order" | "option" | "instance-order" | "original-order" | "reflex-order" | "filler-order"

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => AnnotationDto)
    note?: Annotation[]

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
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    replaces?: Reference[]

    @IsNotEmpty()
    @IsIn(["active", "entered-in-error", "draft", "unknown", "cancelled", "completed", "suspended"])
    status: "active" | "entered-in-error" | "draft" | "unknown" | "cancelled" | "completed" | "suspended"

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    subject?: Reference

  }
  export class ResearchStudyArmDto implements ResearchStudyArm {
    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    code?: CodeableConcept

    @IsOptional()
    @IsString()
    description?: string

    @IsNotEmpty()
    @IsString()
    name: string

  }
  export class ResearchStudyDto implements ResearchStudy {
    @IsNotEmpty()
    @IsIn(["ResearchStudy"])
    resourceType: "ResearchStudy"

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ResearchStudyArmDto)
    arm?: ResearchStudyArm[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    category?: CodeableConcept[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ContactDetailDto)
    contact?: ContactDetail[]

    @IsOptional()
    @IsString()
    description?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    enrollment?: Reference[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    focus?: CodeableConcept[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => IdentifierDto)
    identifier?: Identifier[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    jurisdiction?: CodeableConcept[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    keyword?: CodeableConcept[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => AnnotationDto)
    note?: Annotation[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    partOf?: Reference[]

    @IsOptional()
    @ValidateNested()
    @Type(() => PeriodDto)
    period?: Period

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    principalInvestigator?: Reference

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    protocol?: Reference[]

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    reasonStopped?: CodeableConcept

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => RelatedArtifactDto)
    relatedArtifact?: RelatedArtifact[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    site?: Reference[]

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    sponsor?: Reference

    @IsNotEmpty()
    @IsIn(["entered-in-error", "draft", "in-progress", "completed", "suspended", "stopped"])
    status: "entered-in-error" | "draft" | "in-progress" | "completed" | "suspended" | "stopped"

    @IsOptional()
    @IsString()
    title?: string

  }
  export class ResearchSubjectDto implements ResearchSubject {
    @IsNotEmpty()
    @IsIn(["ResearchSubject"])
    resourceType: "ResearchSubject"

    @IsOptional()
    @IsString()
    actualArm?: string

    @IsOptional()
    @IsString()
    assignedArm?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    consent?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => IdentifierDto)
    identifier?: Identifier

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => ReferenceDto)
    individual: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => PeriodDto)
    period?: Period

    @IsNotEmpty()
    @IsIn(["active", "completed", "suspended", "candidate", "enrolled", "withdrawn"])
    status: "active" | "completed" | "suspended" | "candidate" | "enrolled" | "withdrawn"

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => ReferenceDto)
    study: Reference

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
    qualitativeRisk?: CodeableConcept

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
    @ValidateNested()
    @Type(() => ReferenceDto)
    basedOn?: Reference

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    basis?: Reference[]

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    code?: CodeableConcept

    @IsOptional()
    @IsString()
    comment?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    condition?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    context?: Reference

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
    @IsString()
    occurrenceDateTime?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => PeriodDto)
    occurrencePeriod?: Period

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    parent?: Reference

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
    @Type(() => CodeableConceptDto)
    reasonCodeableConcept?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    reasonReference?: Reference

    @IsNotEmpty()
    @IsIn(["entered-in-error", "unknown", "cancelled", "preliminary", "final", "amended", "registered", "corrected"])
    status: "entered-in-error" | "unknown" | "cancelled" | "preliminary" | "final" | "amended" | "registered" | "corrected"

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
    @IsBoolean()
    active: boolean

    @IsNotEmpty()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    actor: Reference[]

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
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    serviceCategory?: CodeableConcept

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    serviceType?: CodeableConcept[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    specialty?: CodeableConcept[]

  }
  export class SearchParameterComponentDto implements SearchParameterComponent {
    @IsNotEmpty()
    @ValidateNested()
    @Type(() => ReferenceDto)
    definition: Reference

    @IsNotEmpty()
    @IsString()
    expression: string

  }
  export class SearchParameterDto implements SearchParameter {
    @IsNotEmpty()
    @IsIn(["SearchParameter"])
    resourceType: "SearchParameter"

    @IsNotEmpty()
    @IsArray()
    @IsString({ each: true })
    base: string[]

    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    chain?: string[]

    @IsNotEmpty()
    @IsString()
    code: string

    @IsOptional()
    @IsArray()
    @IsIn(["eq", "ne", "gt", "lt", "ge", "le", "sa", "eb", "ap"], { each: true })
    comparator?: ("eq" | "ne" | "gt" | "lt" | "ge" | "le" | "sa" | "eb" | "ap")[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => SearchParameterComponentDto)
    component?: SearchParameterComponent[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ContactDetailDto)
    contact?: ContactDetail[]

    @IsOptional()
    @IsString()
    date?: string

    @IsOptional()
    @IsString()
    derivedFrom?: string

    @IsNotEmpty()
    @IsString()
    description: string

    @IsNotEmpty()
    @IsBoolean()
    experimental: boolean

    @IsOptional()
    @IsString()
    expression?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    jurisdiction?: CodeableConcept[]

    @IsOptional()
    @IsArray()
    @IsIn(["type", "in", "text", "missing", "exact", "contains", "not", "not-in", "below", "above"], { each: true })
    modifier?: ("type" | "in" | "text" | "missing" | "exact" | "contains" | "not" | "not-in" | "below" | "above")[]

    @IsNotEmpty()
    @IsString()
    name: string

    @IsOptional()
    @IsString()
    publisher?: string

    @IsOptional()
    @IsString()
    purpose?: string

    @IsNotEmpty()
    @IsIn(["active", "draft", "retired", "unknown"])
    status: "active" | "draft" | "retired" | "unknown"

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
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => UsageContextDto)
    useContext?: UsageContext[]

    @IsOptional()
    @IsString()
    version?: string

    @IsOptional()
    @IsString()
    xpath?: string

    @IsNotEmpty()
    @IsIn(["other", "normal", "phonetic", "nearby", "distance"])
    xpathUsage: "other" | "normal" | "phonetic" | "nearby" | "distance"

  }
  export class SequenceReferenceSeqDto implements SequenceReferenceSeq {
    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    chromosome?: CodeableConcept

    @IsOptional()
    @IsString()
    genomeBuild?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    referenceSeqId?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    referenceSeqPointer?: Reference

    @IsOptional()
    @IsString()
    referenceSeqString?: string

    @IsOptional()
    @IsNumber()
    strand?: number

    @IsNotEmpty()
    @IsNumber()
    windowEnd: number

    @IsNotEmpty()
    @IsNumber()
    windowStart: number

  }
  export class SequenceVariantDto implements SequenceVariant {
    @IsOptional()
    @IsString()
    cigar?: string

    @IsOptional()
    @IsNumber()
    end?: number

    @IsOptional()
    @IsString()
    observedAllele?: string

    @IsOptional()
    @IsString()
    referenceAllele?: string

    @IsOptional()
    @IsNumber()
    start?: number

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    variantPointer?: Reference

  }
  export class SequenceQualityDto implements SequenceQuality {
    @IsOptional()
    @IsNumber()
    end?: number

    @IsOptional()
    @IsNumber()
    fScore?: number

    @IsOptional()
    @IsNumber()
    gtFP?: number

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    method?: CodeableConcept

    @IsOptional()
    @IsNumber()
    precision?: number

    @IsOptional()
    @IsNumber()
    queryFP?: number

    @IsOptional()
    @IsNumber()
    queryTP?: number

    @IsOptional()
    @IsNumber()
    recall?: number

    @IsOptional()
    @ValidateNested()
    @Type(() => QuantityDto)
    score?: Quantity

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    standardSequence?: CodeableConcept

    @IsOptional()
    @IsNumber()
    start?: number

    @IsOptional()
    @IsNumber()
    truthFN?: number

    @IsOptional()
    @IsNumber()
    truthTP?: number

    @IsNotEmpty()
    @IsIn(["unknown", "indel", "snp"])
    type: "unknown" | "indel" | "snp"

  }
  export class SequenceRepositoryDto implements SequenceRepository {
    @IsOptional()
    @IsString()
    datasetId?: string

    @IsOptional()
    @IsString()
    name?: string

    @IsOptional()
    @IsString()
    readsetId?: string

    @IsNotEmpty()
    @IsIn(["other", "directlink", "openapi", "login", "oauth"])
    type: "other" | "directlink" | "openapi" | "login" | "oauth"

    @IsOptional()
    @IsString()
    url?: string

    @IsOptional()
    @IsString()
    variantsetId?: string

  }
  export class SequenceDto implements Sequence {
    @IsNotEmpty()
    @IsIn(["Sequence"])
    resourceType: "Sequence"

    @IsNotEmpty()
    @IsNumber()
    coordinateSystem: number

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    device?: Reference

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => IdentifierDto)
    identifier?: Identifier[]

    @IsOptional()
    @IsString()
    observedSeq?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    patient?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    performer?: Reference

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    pointer?: Reference[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => SequenceQualityDto)
    quality?: SequenceQuality[]

    @IsOptional()
    @ValidateNested()
    @Type(() => QuantityDto)
    quantity?: Quantity

    @IsOptional()
    @IsNumber()
    readCoverage?: number

    @IsOptional()
    @ValidateNested()
    @Type(() => SequenceReferenceSeqDto)
    referenceSeq?: SequenceReferenceSeq

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => SequenceRepositoryDto)
    repository?: SequenceRepository[]

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    specimen?: Reference

    @IsOptional()
    @IsString()
    type?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => SequenceVariantDto)
    variant?: SequenceVariant[]

  }
  export class ServiceDefinitionDto implements ServiceDefinition {
    @IsNotEmpty()
    @IsIn(["ServiceDefinition"])
    resourceType: "ServiceDefinition"

    @IsOptional()
    @IsString()
    approvalDate?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ContactDetailDto)
    contact?: ContactDetail[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ContributorDto)
    contributor?: Contributor[]

    @IsOptional()
    @IsString()
    copyright?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => DataRequirementDto)
    dataRequirement?: DataRequirement[]

    @IsOptional()
    @IsString()
    date?: string

    @IsOptional()
    @IsString()
    description?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => PeriodDto)
    effectivePeriod?: Period

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
    @Type(() => CodeableConceptDto)
    jurisdiction?: CodeableConcept[]

    @IsOptional()
    @IsString()
    lastReviewDate?: string

    @IsOptional()
    @IsString()
    name?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    operationDefinition?: Reference

    @IsOptional()
    @IsString()
    publisher?: string

    @IsOptional()
    @IsString()
    purpose?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => RelatedArtifactDto)
    relatedArtifact?: RelatedArtifact[]

    @IsNotEmpty()
    @IsIn(["active", "draft", "retired", "unknown"])
    status: "active" | "draft" | "retired" | "unknown"

    @IsOptional()
    @IsString()
    title?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    topic?: CodeableConcept[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => TriggerDefinitionDto)
    trigger?: TriggerDefinition[]

    @IsOptional()
    @IsString()
    url?: string

    @IsOptional()
    @IsString()
    usage?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => UsageContextDto)
    useContext?: UsageContext[]

    @IsOptional()
    @IsString()
    version?: string

  }
  export class SlotDto implements Slot {
    @IsNotEmpty()
    @IsIn(["Slot"])
    resourceType: "Slot"

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    appointmentType?: CodeableConcept

    @IsOptional()
    @IsString()
    comment?: string

    @IsNotEmpty()
    @IsString()
    end: string

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

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    serviceCategory?: CodeableConcept

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    serviceType?: CodeableConcept[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    specialty?: CodeableConcept[]

    @IsNotEmpty()
    @IsString()
    start: string

    @IsNotEmpty()
    @IsIn(["entered-in-error", "busy", "free", "busy-unavailable", "busy-tentative"])
    status: "entered-in-error" | "busy" | "free" | "busy-unavailable" | "busy-tentative"

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
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    method?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => QuantityDto)
    quantity?: Quantity

  }
  export class SpecimenProcessingDto implements SpecimenProcessing {
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

    @IsOptional()
    @IsString()
    timeDateTime?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => PeriodDto)
    timePeriod?: Period

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
    @Type(() => AnnotationDto)
    note?: Annotation[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    parent?: Reference[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => SpecimenProcessingDto)
    processing?: SpecimenProcessing[]

    @IsOptional()
    @IsString()
    receivedTime?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    request?: Reference[]

    @IsNotEmpty()
    @IsIn(["entered-in-error", "available", "unavailable", "unsatisfactory"])
    status: "entered-in-error" | "available" | "unavailable" | "unsatisfactory"

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => ReferenceDto)
    subject: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    type?: CodeableConcept

  }
  export class StructureDefinitionMappingDto implements StructureDefinitionMapping {
    @IsOptional()
    @IsString()
    comment?: string

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
    baseDefinition?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ContactDetailDto)
    contact?: ContactDetail[]

    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    context?: string[]

    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    contextInvariant?: string[]

    @IsNotEmpty()
    @IsIn(["resource", "datatype", "extension"])
    contextType: "resource" | "datatype" | "extension"

    @IsOptional()
    @IsString()
    copyright?: string

    @IsOptional()
    @IsString()
    date?: string

    @IsNotEmpty()
    @IsIn(["specialization", "constraint"])
    derivation: "specialization" | "constraint"

    @IsOptional()
    @IsString()
    description?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => StructureDefinitionDifferentialDto)
    differential?: StructureDefinitionDifferential

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

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    jurisdiction?: CodeableConcept[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodingDto)
    keyword?: Coding[]

    @IsNotEmpty()
    @IsIn(["logical", "resource", "primitive-type", "complex-type"])
    kind: "logical" | "resource" | "primitive-type" | "complex-type"

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
    purpose?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => StructureDefinitionSnapshotDto)
    snapshot?: StructureDefinitionSnapshot

    @IsNotEmpty()
    @IsIn(["active", "draft", "retired", "unknown"])
    status: "active" | "draft" | "retired" | "unknown"

    @IsOptional()
    @IsString()
    title?: string

    @IsNotEmpty()
    @IsString()
    type: string

    @IsNotEmpty()
    @IsString()
    url: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => UsageContextDto)
    useContext?: UsageContext[]

    @IsOptional()
    @IsString()
    version?: string

  }
  export class StructureMapStructureDto implements StructureMapStructure {
    @IsOptional()
    @IsString()
    alias?: string

    @IsOptional()
    @IsString()
    documentation?: string

    @IsNotEmpty()
    @IsIn(["source", "queried", "target", "produced"])
    mode: "source" | "queried" | "target" | "produced"

    @IsNotEmpty()
    @IsString()
    url: string

  }
  export class StructureMapGroupInputDto implements StructureMapGroupInput {
    @IsOptional()
    @IsString()
    documentation?: string

    @IsNotEmpty()
    @IsIn(["source", "target"])
    mode: "source" | "target"

    @IsNotEmpty()
    @IsString()
    name: string

    @IsOptional()
    @IsString()
    type?: string

  }
  export class StructureMapGroupRuleSourceDto implements StructureMapGroupRuleSource {
    @IsOptional()
    @IsString()
    check?: string

    @IsOptional()
    @IsString()
    condition?: string

    @IsNotEmpty()
    @IsString()
    context: string

    @IsOptional()
    @IsString()
    defaultValueBase64Binary?: string

    @IsNotEmpty()
    @IsBoolean()
    defaultValueBoolean: boolean

    @IsOptional()
    @IsString()
    defaultValueCode?: string

    @IsOptional()
    @IsString()
    defaultValueDate?: string

    @IsOptional()
    @IsString()
    defaultValueDateTime?: string

    @IsOptional()
    @IsNumber()
    defaultValueDecimal?: number

    @IsOptional()
    @IsString()
    defaultValueId?: string

    @IsOptional()
    @IsString()
    defaultValueInstant?: string

    @IsOptional()
    @IsNumber()
    defaultValueInteger?: number

    @IsOptional()
    @IsString()
    defaultValueMarkdown?: string

    @IsOptional()
    @IsString()
    defaultValueOid?: string

    @IsOptional()
    @IsNumber()
    defaultValuePositiveInt?: number

    @IsOptional()
    @IsString()
    defaultValueString?: string

    @IsOptional()
    @IsString()
    defaultValueTime?: string

    @IsOptional()
    @IsNumber()
    defaultValueUnsignedInt?: number

    @IsOptional()
    @IsString()
    defaultValueUri?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => AddressDto)
    defaultValueAddress?: Address

    @IsOptional()
    @ValidateNested()
    @Type(() => AgeDto)
    defaultValueAge?: Age

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
    @Type(() => CodeableConceptDto)
    defaultValueCodeableConcept?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => CodingDto)
    defaultValueCoding?: Coding

    @IsOptional()
    @ValidateNested()
    @Type(() => ContactPointDto)
    defaultValueContactPoint?: ContactPoint

    @IsOptional()
    @ValidateNested()
    @Type(() => CountDto)
    defaultValueCount?: Count

    @IsOptional()
    @ValidateNested()
    @Type(() => DistanceDto)
    defaultValueDistance?: Distance

    @IsOptional()
    @ValidateNested()
    @Type(() => DurationDto)
    defaultValueDuration?: Duration

    @IsOptional()
    @ValidateNested()
    @Type(() => HumanNameDto)
    defaultValueHumanName?: HumanName

    @IsOptional()
    @ValidateNested()
    @Type(() => IdentifierDto)
    defaultValueIdentifier?: Identifier

    @IsOptional()
    @ValidateNested()
    @Type(() => MoneyDto)
    defaultValueMoney?: Money

    @IsOptional()
    @ValidateNested()
    @Type(() => PeriodDto)
    defaultValuePeriod?: Period

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
    @Type(() => RatioDto)
    defaultValueRatio?: Ratio

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    defaultValueReference?: Reference

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
    @Type(() => TimingDto)
    defaultValueTiming?: Timing

    @IsOptional()
    @ValidateNested()
    @Type(() => MetaDto)
    defaultValueMeta?: Meta

    @IsOptional()
    @IsString()
    element?: string

    @IsNotEmpty()
    @IsIn(["first", "not_first", "last", "not_last", "only_one"])
    listMode: "first" | "not_first" | "last" | "not_last" | "only_one"

    @IsOptional()
    @IsString()
    max?: string

    @IsOptional()
    @IsNumber()
    min?: number

    @IsOptional()
    @IsString()
    type?: string

    @IsOptional()
    @IsString()
    variable?: string

  }
  export class StructureMapGroupRuleTargetParameterDto implements StructureMapGroupRuleTargetParameter {
    @IsOptional()
    @IsString()
    valueId?: string

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

  }
  export class StructureMapGroupRuleTargetDto implements StructureMapGroupRuleTarget {
    @IsOptional()
    @IsString()
    context?: string

    @IsNotEmpty()
    @IsIn(["type", "variable"])
    contextType: "type" | "variable"

    @IsOptional()
    @IsString()
    element?: string

    @IsOptional()
    @IsArray()
    @IsIn(["first", "last", "share", "collate"], { each: true })
    listMode?: ("first" | "last" | "share" | "collate")[]

    @IsOptional()
    @IsString()
    listRuleId?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => StructureMapGroupRuleTargetParameterDto)
    parameter?: StructureMapGroupRuleTargetParameter[]

    @IsNotEmpty()
    @IsIn(["create", "reference", "uuid", "copy", "truncate", "escape", "cast", "append", "translate", "dateOp", "pointer", "evaluate", "cc", "c", "qty", "id", "cp"])
    transform: "create" | "reference" | "uuid" | "copy" | "truncate" | "escape" | "cast" | "append" | "translate" | "dateOp" | "pointer" | "evaluate" | "cc" | "c" | "qty" | "id" | "cp"

    @IsOptional()
    @IsString()
    variable?: string

  }
  export class StructureMapGroupRuleDependentDto implements StructureMapGroupRuleDependent {
    @IsNotEmpty()
    @IsString()
    name: string

    @IsNotEmpty()
    @IsArray()
    @IsString({ each: true })
    variable: string[]

  }
  export class StructureMapGroupRuleDto implements StructureMapGroupRule {
    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => StructureMapGroupRuleDependentDto)
    dependent?: StructureMapGroupRuleDependent[]

    @IsOptional()
    @IsString()
    documentation?: string

    @IsNotEmpty()
    @IsString()
    name: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => StructureMapGroupRuleDto)
    rule?: StructureMapGroupRule[]

    @IsNotEmpty()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => StructureMapGroupRuleSourceDto)
    source: StructureMapGroupRuleSource[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => StructureMapGroupRuleTargetDto)
    target?: StructureMapGroupRuleTarget[]

  }
  export class StructureMapGroupDto implements StructureMapGroup {
    @IsOptional()
    @IsString()
    documentation?: string

    @IsOptional()
    @IsString()
    extends?: string

    @IsNotEmpty()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => StructureMapGroupInputDto)
    input: StructureMapGroupInput[]

    @IsNotEmpty()
    @IsString()
    name: string

    @IsNotEmpty()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => StructureMapGroupRuleDto)
    rule: StructureMapGroupRule[]

    @IsNotEmpty()
    @IsIn(["none", "types", "type-and-types"])
    typeMode: "none" | "types" | "type-and-types"

  }
  export class StructureMapDto implements StructureMap {
    @IsNotEmpty()
    @IsIn(["StructureMap"])
    resourceType: "StructureMap"

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ContactDetailDto)
    contact?: ContactDetail[]

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

    @IsNotEmpty()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => StructureMapGroupDto)
    group: StructureMapGroup[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => IdentifierDto)
    identifier?: Identifier[]

    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    import?: string[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    jurisdiction?: CodeableConcept[]

    @IsNotEmpty()
    @IsString()
    name: string

    @IsOptional()
    @IsString()
    publisher?: string

    @IsOptional()
    @IsString()
    purpose?: string

    @IsNotEmpty()
    @IsIn(["active", "draft", "retired", "unknown"])
    status: "active" | "draft" | "retired" | "unknown"

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => StructureMapStructureDto)
    structure?: StructureMapStructure[]

    @IsOptional()
    @IsString()
    title?: string

    @IsNotEmpty()
    @IsString()
    url: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => UsageContextDto)
    useContext?: UsageContext[]

    @IsOptional()
    @IsString()
    version?: string

  }
  export class SubscriptionChannelDto implements SubscriptionChannel {
    @IsOptional()
    @IsString()
    endpoint?: string

    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    header?: string[]

    @IsOptional()
    @IsString()
    payload?: string

    @IsNotEmpty()
    @IsIn(["email", "sms", "message", "rest-hook", "websocket"])
    type: "email" | "sms" | "message" | "rest-hook" | "websocket"

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
    @IsIn(["error", "active", "off", "requested"])
    status: "error" | "active" | "off" | "requested"

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

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    substanceCodeableConcept?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    substanceReference?: Reference

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

    @IsNotEmpty()
    @IsIn(["active", "inactive", "entered-in-error"])
    status: "active" | "inactive" | "entered-in-error"

  }
  export class SupplyDeliverySuppliedItemDto implements SupplyDeliverySuppliedItem {
    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    itemCodeableConcept?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    itemReference?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => QuantityDto)
    quantity?: Quantity

  }
  export class SupplyDeliveryDto implements SupplyDelivery {
    @IsNotEmpty()
    @IsIn(["SupplyDelivery"])
    resourceType: "SupplyDelivery"

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    basedOn?: Reference[]

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    destination?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => IdentifierDto)
    identifier?: Identifier

    @IsOptional()
    @IsString()
    occurrenceDateTime?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => PeriodDto)
    occurrencePeriod?: Period

    @IsOptional()
    @ValidateNested()
    @Type(() => TimingDto)
    occurrenceTiming?: Timing

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    partOf?: Reference[]

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    patient?: Reference

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    receiver?: Reference[]

    @IsNotEmpty()
    @IsIn(["entered-in-error", "in-progress", "completed", "abandoned"])
    status: "entered-in-error" | "in-progress" | "completed" | "abandoned"

    @IsOptional()
    @ValidateNested()
    @Type(() => SupplyDeliverySuppliedItemDto)
    suppliedItem?: SupplyDeliverySuppliedItem

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    supplier?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    type?: CodeableConcept

  }
  export class SupplyRequestOrderedItemDto implements SupplyRequestOrderedItem {
    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    itemCodeableConcept?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    itemReference?: Reference

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => QuantityDto)
    quantity: Quantity

  }
  export class SupplyRequestRequesterDto implements SupplyRequestRequester {
    @IsNotEmpty()
    @ValidateNested()
    @Type(() => ReferenceDto)
    agent: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    onBehalfOf?: Reference

  }
  export class SupplyRequestDto implements SupplyRequest {
    @IsNotEmpty()
    @IsIn(["SupplyRequest"])
    resourceType: "SupplyRequest"

    @IsOptional()
    @IsString()
    authoredOn?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    category?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    deliverFrom?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    deliverTo?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => IdentifierDto)
    identifier?: Identifier

    @IsOptional()
    @IsString()
    occurrenceDateTime?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => PeriodDto)
    occurrencePeriod?: Period

    @IsOptional()
    @ValidateNested()
    @Type(() => TimingDto)
    occurrenceTiming?: Timing

    @IsOptional()
    @ValidateNested()
    @Type(() => SupplyRequestOrderedItemDto)
    orderedItem?: SupplyRequestOrderedItem

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
    @ValidateNested()
    @Type(() => SupplyRequestRequesterDto)
    requester?: SupplyRequestRequester

    @IsNotEmpty()
    @IsIn(["active", "entered-in-error", "draft", "unknown", "cancelled", "completed", "suspended"])
    status: "active" | "entered-in-error" | "draft" | "unknown" | "cancelled" | "completed" | "suspended"

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    supplier?: Reference[]

  }
  export class TaskRequesterDto implements TaskRequester {
    @IsNotEmpty()
    @ValidateNested()
    @Type(() => ReferenceDto)
    agent: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    onBehalfOf?: Reference

  }
  export class TaskRestrictionDto implements TaskRestriction {
    @IsOptional()
    @ValidateNested()
    @Type(() => PeriodDto)
    period?: Period

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    recipient?: Reference[]

    @IsOptional()
    @IsNumber()
    repetitions?: number

  }
  export class TaskInputDto implements TaskInput {
    @IsNotEmpty()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    type: CodeableConcept

    @IsOptional()
    @IsString()
    valueBase64Binary?: string

    @IsNotEmpty()
    @IsBoolean()
    valueBoolean: boolean

    @IsOptional()
    @IsString()
    valueCode?: string

    @IsOptional()
    @IsString()
    valueDate?: string

    @IsOptional()
    @IsString()
    valueDateTime?: string

    @IsOptional()
    @IsNumber()
    valueDecimal?: number

    @IsOptional()
    @IsString()
    valueId?: string

    @IsOptional()
    @IsString()
    valueInstant?: string

    @IsOptional()
    @IsNumber()
    valueInteger?: number

    @IsOptional()
    @IsString()
    valueMarkdown?: string

    @IsOptional()
    @IsString()
    valueOid?: string

    @IsOptional()
    @IsNumber()
    valuePositiveInt?: number

    @IsOptional()
    @IsString()
    valueString?: string

    @IsOptional()
    @IsString()
    valueTime?: string

    @IsOptional()
    @IsNumber()
    valueUnsignedInt?: number

    @IsOptional()
    @IsString()
    valueUri?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => AddressDto)
    valueAddress?: Address

    @IsOptional()
    @ValidateNested()
    @Type(() => AgeDto)
    valueAge?: Age

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
    @Type(() => CodeableConceptDto)
    valueCodeableConcept?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => CodingDto)
    valueCoding?: Coding

    @IsOptional()
    @ValidateNested()
    @Type(() => ContactPointDto)
    valueContactPoint?: ContactPoint

    @IsOptional()
    @ValidateNested()
    @Type(() => CountDto)
    valueCount?: Count

    @IsOptional()
    @ValidateNested()
    @Type(() => DistanceDto)
    valueDistance?: Distance

    @IsOptional()
    @ValidateNested()
    @Type(() => DurationDto)
    valueDuration?: Duration

    @IsOptional()
    @ValidateNested()
    @Type(() => HumanNameDto)
    valueHumanName?: HumanName

    @IsOptional()
    @ValidateNested()
    @Type(() => IdentifierDto)
    valueIdentifier?: Identifier

    @IsOptional()
    @ValidateNested()
    @Type(() => MoneyDto)
    valueMoney?: Money

    @IsOptional()
    @ValidateNested()
    @Type(() => PeriodDto)
    valuePeriod?: Period

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
    @Type(() => RatioDto)
    valueRatio?: Ratio

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    valueReference?: Reference

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
    @Type(() => TimingDto)
    valueTiming?: Timing

    @IsOptional()
    @ValidateNested()
    @Type(() => MetaDto)
    valueMeta?: Meta

  }
  export class TaskOutputDto implements TaskOutput {
    @IsNotEmpty()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    type: CodeableConcept

    @IsOptional()
    @IsString()
    valueBase64Binary?: string

    @IsNotEmpty()
    @IsBoolean()
    valueBoolean: boolean

    @IsOptional()
    @IsString()
    valueCode?: string

    @IsOptional()
    @IsString()
    valueDate?: string

    @IsOptional()
    @IsString()
    valueDateTime?: string

    @IsOptional()
    @IsNumber()
    valueDecimal?: number

    @IsOptional()
    @IsString()
    valueId?: string

    @IsOptional()
    @IsString()
    valueInstant?: string

    @IsOptional()
    @IsNumber()
    valueInteger?: number

    @IsOptional()
    @IsString()
    valueMarkdown?: string

    @IsOptional()
    @IsString()
    valueOid?: string

    @IsOptional()
    @IsNumber()
    valuePositiveInt?: number

    @IsOptional()
    @IsString()
    valueString?: string

    @IsOptional()
    @IsString()
    valueTime?: string

    @IsOptional()
    @IsNumber()
    valueUnsignedInt?: number

    @IsOptional()
    @IsString()
    valueUri?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => AddressDto)
    valueAddress?: Address

    @IsOptional()
    @ValidateNested()
    @Type(() => AgeDto)
    valueAge?: Age

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
    @Type(() => CodeableConceptDto)
    valueCodeableConcept?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => CodingDto)
    valueCoding?: Coding

    @IsOptional()
    @ValidateNested()
    @Type(() => ContactPointDto)
    valueContactPoint?: ContactPoint

    @IsOptional()
    @ValidateNested()
    @Type(() => CountDto)
    valueCount?: Count

    @IsOptional()
    @ValidateNested()
    @Type(() => DistanceDto)
    valueDistance?: Distance

    @IsOptional()
    @ValidateNested()
    @Type(() => DurationDto)
    valueDuration?: Duration

    @IsOptional()
    @ValidateNested()
    @Type(() => HumanNameDto)
    valueHumanName?: HumanName

    @IsOptional()
    @ValidateNested()
    @Type(() => IdentifierDto)
    valueIdentifier?: Identifier

    @IsOptional()
    @ValidateNested()
    @Type(() => MoneyDto)
    valueMoney?: Money

    @IsOptional()
    @ValidateNested()
    @Type(() => PeriodDto)
    valuePeriod?: Period

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
    @Type(() => RatioDto)
    valueRatio?: Ratio

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    valueReference?: Reference

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
    @Type(() => TimingDto)
    valueTiming?: Timing

    @IsOptional()
    @ValidateNested()
    @Type(() => MetaDto)
    valueMeta?: Meta

  }
  export class TaskDto implements Task {
    @IsNotEmpty()
    @IsIn(["Task"])
    resourceType: "Task"

    @IsOptional()
    @IsString()
    authoredOn?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    basedOn?: Reference[]

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    businessStatus?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    code?: CodeableConcept

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    context?: Reference

    @IsOptional()
    @IsString()
    definitionUri?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    definitionReference?: Reference

    @IsOptional()
    @IsString()
    description?: string

    @IsOptional()
    @ValidateNested()
    @Type(() => PeriodDto)
    executionPeriod?: Period

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    focus?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    for?: Reference

    @IsOptional()
    @ValidateNested()
    @Type(() => IdentifierDto)
    groupIdentifier?: Identifier

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => IdentifierDto)
    identifier?: Identifier[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => TaskInputDto)
    input?: TaskInput[]

    @IsNotEmpty()
    @IsIn(["proposal", "plan", "order", "option", "instance-order", "original-order", "reflex-order", "filler-order"])
    intent: "proposal" | "plan" | "order" | "option" | "instance-order" | "original-order" | "reflex-order" | "filler-order"

    @IsOptional()
    @IsString()
    lastModified?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => AnnotationDto)
    note?: Annotation[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => TaskOutputDto)
    output?: TaskOutput[]

    @IsOptional()
    @ValidateNested()
    @Type(() => ReferenceDto)
    owner?: Reference

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    partOf?: Reference[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    performerType?: CodeableConcept[]

    @IsNotEmpty()
    @IsIn(["routine", "urgent", "stat", "asap"])
    priority: "routine" | "urgent" | "stat" | "asap"

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    reason?: CodeableConcept

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ReferenceDto)
    relevantHistory?: Reference[]

    @IsOptional()
    @ValidateNested()
    @Type(() => TaskRequesterDto)
    requester?: TaskRequester

    @IsOptional()
    @ValidateNested()
    @Type(() => TaskRestrictionDto)
    restriction?: TaskRestriction

    @IsNotEmpty()
    @IsIn(["entered-in-error", "draft", "accepted", "cancelled", "in-progress", "on-hold", "completed", "rejected", "requested", "received", "ready", "failed"])
    status: "entered-in-error" | "draft" | "accepted" | "cancelled" | "in-progress" | "on-hold" | "completed" | "rejected" | "requested" | "received" | "ready" | "failed"

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    statusReason?: CodeableConcept

  }
  export class TestReportParticipantDto implements TestReportParticipant {
    @IsOptional()
    @IsString()
    display?: string

    @IsNotEmpty()
    @IsIn(["client", "server", "test-engine"])
    type: "client" | "server" | "test-engine"

    @IsNotEmpty()
    @IsString()
    uri: string

  }
  export class TestReportSetupActionOperationDto implements TestReportSetupActionOperation {
    @IsOptional()
    @IsString()
    detail?: string

    @IsOptional()
    @IsString()
    message?: string

    @IsNotEmpty()
    @IsIn(["error", "warning", "pass", "skip", "fail"])
    result: "error" | "warning" | "pass" | "skip" | "fail"

  }
  export class TestReportSetupActionAssertDto implements TestReportSetupActionAssert {
    @IsOptional()
    @IsString()
    detail?: string

    @IsOptional()
    @IsString()
    message?: string

    @IsNotEmpty()
    @IsIn(["error", "warning", "pass", "skip", "fail"])
    result: "error" | "warning" | "pass" | "skip" | "fail"

  }
  export class TestReportSetupActionDto implements TestReportSetupAction {
    @IsOptional()
    @ValidateNested()
    @Type(() => TestReportSetupActionAssertDto)
    assert?: TestReportSetupActionAssert

    @IsOptional()
    @ValidateNested()
    @Type(() => TestReportSetupActionOperationDto)
    operation?: TestReportSetupActionOperation

  }
  export class TestReportSetupDto implements TestReportSetup {
    @IsNotEmpty()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => TestReportSetupActionDto)
    action: TestReportSetupAction[]

  }
  export class TestReportTestActionDto implements TestReportTestAction {
    @IsOptional()
    @ValidateNested()
    @Type(() => TestReportSetupActionAssertDto)
    assert?: TestReportSetupActionAssert

    @IsOptional()
    @ValidateNested()
    @Type(() => TestReportSetupActionOperationDto)
    operation?: TestReportSetupActionOperation

  }
  export class TestReportTestDto implements TestReportTest {
    @IsNotEmpty()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => TestReportTestActionDto)
    action: TestReportTestAction[]

    @IsOptional()
    @IsString()
    description?: string

    @IsOptional()
    @IsString()
    name?: string

  }
  export class TestReportTeardownActionDto implements TestReportTeardownAction {
    @IsNotEmpty()
    @ValidateNested()
    @Type(() => TestReportSetupActionOperationDto)
    operation: TestReportSetupActionOperation

  }
  export class TestReportTeardownDto implements TestReportTeardown {
    @IsNotEmpty()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => TestReportTeardownActionDto)
    action: TestReportTeardownAction[]

  }
  export class TestReportDto implements TestReport {
    @IsNotEmpty()
    @IsIn(["TestReport"])
    resourceType: "TestReport"

    @IsOptional()
    @ValidateNested()
    @Type(() => IdentifierDto)
    identifier?: Identifier

    @IsOptional()
    @IsString()
    issued?: string

    @IsOptional()
    @IsString()
    name?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => TestReportParticipantDto)
    participant?: TestReportParticipant[]

    @IsNotEmpty()
    @IsIn(["pending", "pass", "fail"])
    result: "pending" | "pass" | "fail"

    @IsOptional()
    @IsNumber()
    score?: number

    @IsOptional()
    @ValidateNested()
    @Type(() => TestReportSetupDto)
    setup?: TestReportSetup

    @IsNotEmpty()
    @IsIn(["entered-in-error", "in-progress", "completed", "stopped", "waiting"])
    status: "entered-in-error" | "in-progress" | "completed" | "stopped" | "waiting"

    @IsOptional()
    @ValidateNested()
    @Type(() => TestReportTeardownDto)
    teardown?: TestReportTeardown

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => TestReportTestDto)
    test?: TestReportTest[]

    @IsOptional()
    @IsString()
    tester?: string

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => ReferenceDto)
    testScript: Reference

  }
  export class TestScriptOriginDto implements TestScriptOrigin {
    @IsNotEmpty()
    @IsNumber()
    index: number

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => CodingDto)
    profile: Coding

  }
  export class TestScriptDestinationDto implements TestScriptDestination {
    @IsNotEmpty()
    @IsNumber()
    index: number

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => CodingDto)
    profile: Coding

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
    capabilities: Reference

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

    @IsOptional()
    @IsArray()
    @IsNumber({}, { each: true })
    origin?: number[]

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
    defaultValue?: string

    @IsOptional()
    @IsString()
    description?: string

    @IsOptional()
    @IsString()
    expression?: string

    @IsOptional()
    @IsString()
    headerField?: string

    @IsOptional()
    @IsString()
    hint?: string

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
  export class TestScriptRuleParamDto implements TestScriptRuleParam {
    @IsNotEmpty()
    @IsString()
    name: string

    @IsOptional()
    @IsString()
    value?: string

  }
  export class TestScriptRuleDto implements TestScriptRule {
    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => TestScriptRuleParamDto)
    param?: TestScriptRuleParam[]

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => ReferenceDto)
    resource: Reference

  }
  export class TestScriptRulesetRuleParamDto implements TestScriptRulesetRuleParam {
    @IsNotEmpty()
    @IsString()
    name: string

    @IsOptional()
    @IsString()
    value?: string

  }
  export class TestScriptRulesetRuleDto implements TestScriptRulesetRule {
    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => TestScriptRulesetRuleParamDto)
    param?: TestScriptRulesetRuleParam[]

    @IsNotEmpty()
    @IsString()
    ruleId: string

  }
  export class TestScriptRulesetDto implements TestScriptRuleset {
    @IsNotEmpty()
    @ValidateNested()
    @Type(() => ReferenceDto)
    resource: Reference

    @IsNotEmpty()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => TestScriptRulesetRuleDto)
    rule: TestScriptRulesetRule[]

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
    @IsIn(["none", "xml", "json", "ttl"])
    accept: "none" | "xml" | "json" | "ttl"

    @IsNotEmpty()
    @IsIn(["none", "xml", "json", "ttl"])
    contentType: "none" | "xml" | "json" | "ttl"

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
    @IsNumber()
    origin?: number

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
    requestId?: string

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
  export class TestScriptSetupActionAssertRuleParamDto implements TestScriptSetupActionAssertRuleParam {
    @IsNotEmpty()
    @IsString()
    name: string

    @IsNotEmpty()
    @IsString()
    value: string

  }
  export class TestScriptSetupActionAssertRuleDto implements TestScriptSetupActionAssertRule {
    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => TestScriptSetupActionAssertRuleParamDto)
    param?: TestScriptSetupActionAssertRuleParam[]

    @IsNotEmpty()
    @IsString()
    ruleId: string

  }
  export class TestScriptSetupActionAssertRulesetRuleParamDto implements TestScriptSetupActionAssertRulesetRuleParam {
    @IsNotEmpty()
    @IsString()
    name: string

    @IsNotEmpty()
    @IsString()
    value: string

  }
  export class TestScriptSetupActionAssertRulesetRuleDto implements TestScriptSetupActionAssertRulesetRule {
    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => TestScriptSetupActionAssertRulesetRuleParamDto)
    param?: TestScriptSetupActionAssertRulesetRuleParam[]

    @IsNotEmpty()
    @IsString()
    ruleId: string

  }
  export class TestScriptSetupActionAssertRulesetDto implements TestScriptSetupActionAssertRuleset {
    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => TestScriptSetupActionAssertRulesetRuleDto)
    rule?: TestScriptSetupActionAssertRulesetRule[]

    @IsNotEmpty()
    @IsString()
    rulesetId: string

  }
  export class TestScriptSetupActionAssertDto implements TestScriptSetupActionAssert {
    @IsOptional()
    @IsString()
    compareToSourceExpression?: string

    @IsOptional()
    @IsString()
    compareToSourceId?: string

    @IsOptional()
    @IsString()
    compareToSourcePath?: string

    @IsNotEmpty()
    @IsIn(["none", "xml", "json", "ttl"])
    contentType: "none" | "xml" | "json" | "ttl"

    @IsOptional()
    @IsString()
    description?: string

    @IsNotEmpty()
    @IsIn(["response", "request"])
    direction: "response" | "request"

    @IsOptional()
    @IsString()
    expression?: string

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
    @IsIn(["empty", "in", "contains", "equals", "notEquals", "notIn", "greaterThan", "lessThan", "notEmpty", "notContains", "eval"])
    operator: "empty" | "in" | "contains" | "equals" | "notEquals" | "notIn" | "greaterThan" | "lessThan" | "notEmpty" | "notContains" | "eval"

    @IsOptional()
    @IsString()
    path?: string

    @IsNotEmpty()
    @IsIn(["patch", "delete", "get", "options", "post", "put"])
    requestMethod: "patch" | "delete" | "get" | "options" | "post" | "put"

    @IsOptional()
    @IsString()
    requestURL?: string

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
    @ValidateNested()
    @Type(() => TestScriptSetupActionAssertRuleDto)
    rule?: TestScriptSetupActionAssertRule

    @IsOptional()
    @ValidateNested()
    @Type(() => TestScriptSetupActionAssertRulesetDto)
    ruleset?: TestScriptSetupActionAssertRuleset

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
    @IsString()
    name?: string

  }
  export class TestScriptTeardownActionDto implements TestScriptTeardownAction {
    @IsNotEmpty()
    @ValidateNested()
    @Type(() => TestScriptSetupActionOperationDto)
    operation: TestScriptSetupActionOperation

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
    @Type(() => ContactDetailDto)
    contact?: ContactDetail[]

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
    @Type(() => TestScriptDestinationDto)
    destination?: TestScriptDestination[]

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
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    jurisdiction?: CodeableConcept[]

    @IsOptional()
    @ValidateNested()
    @Type(() => TestScriptMetadataDto)
    metadata?: TestScriptMetadata

    @IsNotEmpty()
    @IsString()
    name: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => TestScriptOriginDto)
    origin?: TestScriptOrigin[]

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
    purpose?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => TestScriptRuleDto)
    rule?: TestScriptRule[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => TestScriptRulesetDto)
    ruleset?: TestScriptRuleset[]

    @IsOptional()
    @ValidateNested()
    @Type(() => TestScriptSetupDto)
    setup?: TestScriptSetup

    @IsNotEmpty()
    @IsIn(["active", "draft", "retired", "unknown"])
    status: "active" | "draft" | "retired" | "unknown"

    @IsOptional()
    @ValidateNested()
    @Type(() => TestScriptTeardownDto)
    teardown?: TestScriptTeardown

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => TestScriptTestDto)
    test?: TestScriptTest[]

    @IsOptional()
    @IsString()
    title?: string

    @IsNotEmpty()
    @IsString()
    url: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => UsageContextDto)
    useContext?: UsageContext[]

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => TestScriptVariableDto)
    variable?: TestScriptVariable[]

    @IsOptional()
    @IsString()
    version?: string

  }
  export class ValueSetComposeIncludeConceptDesignationDto implements ValueSetComposeIncludeConceptDesignation {
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
  export class ValueSetComposeIncludeConceptDto implements ValueSetComposeIncludeConcept {
    @IsNotEmpty()
    @IsString()
    code: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ValueSetComposeIncludeConceptDesignationDto)
    designation?: ValueSetComposeIncludeConceptDesignation[]

    @IsOptional()
    @IsString()
    display?: string

  }
  export class ValueSetComposeIncludeFilterDto implements ValueSetComposeIncludeFilter {
    @IsNotEmpty()
    @IsIn(["exists", "in", "is-a", "not-in", "=", "descendent-of", "is-not-a", "regex", "generalizes"])
    op: "exists" | "in" | "is-a" | "not-in" | "=" | "descendent-of" | "is-not-a" | "regex" | "generalizes"

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

    @IsOptional()
    @IsString()
    system?: string

    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    valueSet?: string[]

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

    @IsNotEmpty()
    @IsBoolean()
    inactive: boolean

    @IsNotEmpty()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ValueSetComposeIncludeDto)
    include: ValueSetComposeInclude[]

    @IsOptional()
    @IsString()
    lockedDate?: string

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
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ValueSetComposeIncludeConceptDesignationDto)
    designation?: ValueSetComposeIncludeConceptDesignation[]

    @IsOptional()
    @IsString()
    display?: string

    @IsNotEmpty()
    @IsBoolean()
    inactive: boolean

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
    @Type(() => ValueSetComposeDto)
    compose?: ValueSetCompose

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ContactDetailDto)
    contact?: ContactDetail[]

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
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => IdentifierDto)
    identifier?: Identifier[]

    @IsNotEmpty()
    @IsBoolean()
    immutable: boolean

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CodeableConceptDto)
    jurisdiction?: CodeableConcept[]

    @IsOptional()
    @IsString()
    name?: string

    @IsOptional()
    @IsString()
    publisher?: string

    @IsOptional()
    @IsString()
    purpose?: string

    @IsNotEmpty()
    @IsIn(["active", "draft", "retired", "unknown"])
    status: "active" | "draft" | "retired" | "unknown"

    @IsOptional()
    @IsString()
    title?: string

    @IsOptional()
    @IsString()
    url?: string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => UsageContextDto)
    useContext?: UsageContext[]

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
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => AnnotationDto)
    note?: Annotation[]

    @IsOptional()
    @IsNumber()
    power?: number

    @IsOptional()
    @IsNumber()
    prism?: number

    @IsOptional()
    @ValidateNested()
    @Type(() => CodeableConceptDto)
    product?: CodeableConcept

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

    @IsNotEmpty()
    @IsIn(["active", "entered-in-error", "draft", "cancelled"])
    status: "active" | "entered-in-error" | "draft" | "cancelled"

  }
}