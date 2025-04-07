import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { LocalStorageResumeRepository } from '../../src/repositories/local-storage-resume-repository'; // Adjusted path
import { RESUME_STORAGE_KEY } from '@cv-generator/shared';
import type { ResumeEntityInterface } from '@cv-generator/core';

// Mock data conforming to the interface structure
const mockResume: ResumeEntityInterface = {
  basics: {
    name: 'Test User',
    email: 'test@example.com',
  },
};

describe('LocalStorageResumeRepository', () => {
  let repository: LocalStorageResumeRepository;
  let localStorageMock: Storage;

  beforeEach(() => {
    // Setup mock for localStorage before each test
    localStorageMock = {
      getItem: vi.fn(),
      setItem: vi.fn(),
      removeItem: vi.fn(),
      clear: vi.fn(),
      key: vi.fn(),
      length: 0,
    };
    vi.stubGlobal('localStorage', localStorageMock);

    repository = new LocalStorageResumeRepository();
  });

  afterEach(() => {
    // Restore original localStorage after each test
    vi.unstubAllGlobals();
  });

  it('should save resume data to localStorage', async () => {
    await repository.save(mockResume);

    expect(localStorageMock.setItem).toHaveBeenCalledOnce();
    expect(localStorageMock.setItem).toHaveBeenCalledWith(
      RESUME_STORAGE_KEY,
      JSON.stringify(mockResume)
    );
  });

  it('should load resume data from localStorage', async () => {
    vi.mocked(localStorageMock.getItem).mockReturnValue(
      JSON.stringify(mockResume)
    );

    const loadedResume = await repository.load();

    expect(localStorageMock.getItem).toHaveBeenCalledOnce();
    expect(localStorageMock.getItem).toHaveBeenCalledWith(RESUME_STORAGE_KEY);
    expect(loadedResume).toEqual(mockResume);
  });

  it('should return null when no data is in localStorage', async () => {
    vi.mocked(localStorageMock.getItem).mockReturnValue(null);

    const loadedResume = await repository.load();

    expect(localStorageMock.getItem).toHaveBeenCalledOnce();
    expect(localStorageMock.getItem).toHaveBeenCalledWith(RESUME_STORAGE_KEY);
    expect(loadedResume).toBeNull();
  });

  it('should return null if data in localStorage is corrupted', async () => {
    vi.mocked(localStorageMock.getItem).mockReturnValue('invalid json');

    // Spy on console.error to check if error is logged
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    const loadedResume = await repository.load();

    expect(localStorageMock.getItem).toHaveBeenCalledOnce();
    expect(loadedResume).toBeNull();
    expect(consoleSpy).toHaveBeenCalled();

    consoleSpy.mockRestore();
  });

  it('should handle localStorage not being available during save', async () => {
    vi.stubGlobal('localStorage', undefined);
    repository = new LocalStorageResumeRepository(); // Re-instantiate with undefined localStorage
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    // Expecting save to potentially throw or just log error and return
    // Adjust based on final error handling strategy
    await expect(repository.save(mockResume)).resolves.toBeUndefined(); // Or reject if it throws
    expect(consoleSpy).toHaveBeenCalledWith('localStorage is not available.');

    consoleSpy.mockRestore();
  });

   it('should handle localStorage not being available during load', async () => {
    vi.stubGlobal('localStorage', undefined);
    repository = new LocalStorageResumeRepository(); // Re-instantiate with undefined localStorage
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    const result = await repository.load();

    expect(result).toBeNull();
    expect(consoleSpy).toHaveBeenCalledWith('localStorage is not available.');

    consoleSpy.mockRestore();
  });
}); 