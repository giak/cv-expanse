import type { ResumeInterface } from '@cv-generator/shared';
import type { BasicsEntityInterface } from './basics-entity'; // Assuming BasicsEntity is defined
import type { WorkExperienceEntityInterface } from './work-experience-entity'; // <-- Import the new entity type
import type { EducationEntityInterface } from './education-entity'; // <-- Import
import type { SkillEntityInterface } from './skill-entity'; // <-- Import
import type { ProjectEntityInterface } from './project-entity'; // <-- Import
import type { VolunteerEntityInterface } from './volunteer-entity'; // <-- Import
import type { CertificateEntityInterface } from './certificate-entity'; // <-- Import CertificateEntityInterface
import type { PublicationEntityInterface } from './publication-entity'; // <-- Import PublicationEntityInterface
import type { LanguageEntityInterface } from './language-entity'; // <-- Import LanguageEntityInterface
import type { InterestEntityInterface } from './interest-entity'; // <-- Import InterestEntityInterface
import type { ReferenceEntityInterface } from './reference-entity'; // <-- Import ReferenceEntityInterface
import type { AwardEntityInterface } from './award-entity'; // <-- Import AwardEntityInterface

/**
 * Represents the root Resume entity in the domain layer.
 * It composes other entities like BasicsEntity.
 */
export interface ResumeEntityInterface extends Omit<ResumeInterface, 'basics' | 'work' | 'education' | 'skills' | 'projects' | 'volunteer' | 'certificates' | 'publications' | 'languages' | 'interests' | 'references' | 'awards'> {
  basics?: BasicsEntityInterface;
  work?: WorkExperienceEntityInterface[]; // <-- Add the work property
  education?: EducationEntityInterface[]; // <-- Add
  skills?: SkillEntityInterface[]; // <-- Add
  projects?: ProjectEntityInterface[]; // <-- Add
  volunteer?: VolunteerEntityInterface[]; // <-- Add
  certificates?: CertificateEntityInterface[]; // <-- Add certificates property
  publications?: PublicationEntityInterface[]; // <-- Add publications property
  languages?: LanguageEntityInterface[]; // <-- Add languages property
  interests?: InterestEntityInterface[]; // <-- Add interests property
  references?: ReferenceEntityInterface[]; // <-- Add references property
  awards?: AwardEntityInterface[]; // <-- Add awards property
  // Potentially override other properties with their EntityInterface types
  // projects?: ProjectEntityInterface[];
  // ... etc
}

// Potential future extension:
// export class ResumeEntity implements ResumeEntityInterface {
//   public readonly basics?: BasicsEntity;
//   // ... other entities
//
//   constructor(data: ResumeInterface) {
//     this.basics = data.basics ? new BasicsEntity(data.basics) : undefined;
//     // ... instantiate other entities
//   }
//
//   // ... domain logic methods ...
// } 