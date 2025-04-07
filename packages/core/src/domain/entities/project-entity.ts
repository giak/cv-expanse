import type { ProjectInterface } from '@cv-generator/shared';

/**
 * Represents the Project entity in the domain layer.
 * Currently, it directly uses the shared interface.
 */
export type ProjectEntityInterface = ProjectInterface;

// Potential future extension:
// export class ProjectEntity implements ProjectInterface {
//   // ... domain logic ...
// } 