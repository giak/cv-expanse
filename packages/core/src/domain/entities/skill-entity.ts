import type { SkillInterface } from '@cv-generator/shared';

/**
 * Represents the Skill entity (category and keywords) in the domain layer.
 * Currently, it directly uses the shared interface.
 */
export type SkillEntityInterface = SkillInterface;

// Potential future extension:
// export class SkillEntity implements SkillInterface {
//   // ... domain logic ...
// } 