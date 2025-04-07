import type { BasicsInterface } from '@cv-generator/shared';

/**
 * Represents the Basics entity in the domain layer.
 * Currently, it directly uses the shared interface, but could be extended
 * with domain-specific logic or validation later.
 */
export type BasicsEntityInterface = BasicsInterface;

// Potential future extension:
// export class BasicsEntity implements BasicsInterface {
//   // ... domain logic ...
// } 