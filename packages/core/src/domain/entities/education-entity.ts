import type { EducationInterface } from '@cv-generator/shared';

/**
 * Represents the Education history entity in the domain layer.
 * Currently, it directly uses the shared interface.
 */
export type EducationEntityInterface = EducationInterface;

// Potential future extension:
// export class EducationEntity implements EducationInterface {
//   // ... domain logic ...
// } 