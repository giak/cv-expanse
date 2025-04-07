// Domain Exports
export type { BasicsEntityInterface } from './domain/entities/basics-entity';
export type { WorkExperienceEntityInterface } from './domain/entities/work-experience-entity';
export type { EducationEntityInterface } from './domain/entities/education-entity';
export type { SkillEntityInterface } from './domain/entities/skill-entity';
export type { ProjectEntityInterface } from './domain/entities/project-entity';
export type { VolunteerEntityInterface } from './domain/entities/volunteer-entity';
export type { CertificateEntityInterface } from './domain/entities/certificate-entity';
export type { PublicationEntityInterface } from './domain/entities/publication-entity';
export type { LanguageEntityInterface } from './domain/entities/language-entity';
export type { InterestEntityInterface } from './domain/entities/interest-entity';
export type { ReferenceEntityInterface } from './domain/entities/reference-entity';
export type { AwardEntityInterface } from './domain/entities/award-entity';
export type { ResumeEntityInterface } from './domain/entities/resume-entity';

// Application Ports Exports
export type { ResumeRepositoryInterface } from './application/ports/resume-repository-interface';

// Add other exports from core as they are created (e.g., UseCases, ValueObjects) 