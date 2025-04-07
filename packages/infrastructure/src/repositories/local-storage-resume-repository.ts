import type {
  ResumeRepositoryInterface,
  ResumeEntityInterface,
} from '@cv-generator/core';
import { RESUME_STORAGE_KEY } from '@cv-generator/shared';

// const LOCAL_STORAGE_KEY = 'cv-generator-resume'; // Replaced by constant

export class LocalStorageResumeRepository
  implements ResumeRepositoryInterface
{
  public async save(resume: ResumeEntityInterface): Promise<void> {
    try {
      // Simple check if localStorage is available
      if (typeof localStorage === 'undefined') {
        console.error('localStorage is not available.');
        // Potentially throw a specific error or return a failed Result
        return;
      }
      const serializedData = JSON.stringify(resume);
      localStorage.setItem(RESUME_STORAGE_KEY, serializedData);
    } catch (error) {
      console.error('Failed to save resume to localStorage:', error);
      // Basic error handling: log and potentially re-throw or return error state
      // More advanced handling (e.g., QUOTA_EXCEEDED_ERR) could be added.
      throw error; // Re-throw for now, lets the caller handle it
    }
  }

  public async load(): Promise<ResumeEntityInterface | null> {
    try {
      if (typeof localStorage === 'undefined') {
        console.error('localStorage is not available.');
        return null;
      }
      const serializedData = localStorage.getItem(RESUME_STORAGE_KEY);
      if (!serializedData) {
        return null; // No data found
      }
      const resumeData = JSON.parse(serializedData) as ResumeEntityInterface;
      // TODO: Add runtime validation (e.g., using Zod) to ensure data integrity
      // This prevents errors if the stored data structure is invalid or outdated.
      // Example: const validationResult = ResumeSchema.safeParse(resumeData);
      // if (!validationResult.success) { throw new Error('Invalid data'); }
      // return validationResult.data;
      return resumeData;
    } catch (error) {
      console.error('Failed to load or parse resume from localStorage:', error);
      // Handle potential errors (e.g., corrupted data, JSON parse error)
      // Optionally clear the corrupted data: localStorage.removeItem(RESUME_STORAGE_KEY);
      return null;
    }
  }
} 