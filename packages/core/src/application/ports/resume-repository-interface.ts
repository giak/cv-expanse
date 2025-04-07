import type { ResumeEntityInterface } from '../../domain/entities/resume-entity';

/**
 * Interface (Port) defining the contract for resume data persistence.
 * Infrastructure layer must provide an implementation (Adapter).
 */
export interface ResumeRepositoryInterface {
  /**
   * Saves the given resume data.
   * @param resume - The resume entity to save.
   * @returns A promise that resolves when saving is complete.
   */
  save(resume: ResumeEntityInterface): Promise<void>;

  /**
   * Loads the persisted resume data.
   * @returns A promise that resolves with the loaded resume entity, or null if none exists.
   */
  load(): Promise<ResumeEntityInterface | null>;
}
