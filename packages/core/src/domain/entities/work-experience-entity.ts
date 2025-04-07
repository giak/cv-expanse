import type { WorkExperienceInterface } from '@cv-generator/shared';

/**
 * Represents the Work Experience entity in the domain layer.
 * Currently, it directly uses the shared interface, but could be extended
 * with domain-specific logic or validation later.
 */
export type WorkExperienceEntityInterface = WorkExperienceInterface;

// Potential future extension:
// export class WorkExperienceEntity implements WorkExperienceInterface {
//   // ... domain logic ...
// } 