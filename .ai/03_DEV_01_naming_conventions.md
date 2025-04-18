---
description: ENFORCE consistent naming conventions across all project files to ensure code readability, maintainability, and searchability
globs: **/*
tags: [naming, conventions, code-quality, readability]
priority: 1
alwaysApply: true
---

# Naming Conventions

## Context
- Apply these naming conventions to all code elements including files, folders, functions, classes, interfaces, types, enums, etc.
- These conventions ensure code consistency, improve readability, and reduce cognitive load
- Follow these guidelines for all new code and when refactoring existing code

## Requirements

### 1. General Principles
- Names must be descriptive and reveal intent
- Names should be searchable and not too short
- Avoid abbreviations except for widely accepted ones (e.g., `id`, `http`, `url`)
- Avoid redundant or meaningless words (e.g., `data`, `info`)
- Maximum name length: 50 characters
- Maintain consistent casing patterns as defined below

### 2. File & Folder Naming

#### Files
- **Source Code**: `kebab-case.extension` (e.g., `resume-builder.ts`)
- **React/Vue Components**: `PascalCase.{jsx,tsx,vue}` (e.g., `ResumeForm.vue`)
- **Tests**: `[filename].spec.extension` or `[filename].test.extension` (e.g., `resume-service.spec.ts`). Tests should reside in a dedicated `__tests__` directory mirroring the `src` structure (see Folder Naming below).
- **Type Declaration Files**: `kebab-case.d.ts` (e.g., `resume-types.d.ts`)
- **Configuration Files**: `kebab-case.config.{js,ts}` (e.g., `tailwind.config.js`)
- **Constants/Data Files**: `SCREAMING_SNAKE_CASE.{js,ts}` (e.g., `DEFAULT_RESUME_TEMPLATE.ts`)

#### Folders
- **General Purpose Folders**: `kebab-case` (e.g., `error-handling`)
- **Domain/Feature Folders**: `kebab-case` (e.g., `resume-builder`)
- **Clean Architecture Layers**: `kebab-case` (e.g., `domain`, `application`, `infrastructure`, `presentation`)
- **Component Collections**: `kebab-case` (e.g., `ui-components`)
- **Test Folders**: `__tests__` at the package root, mirroring the structure of the `src` directory. (e.g., `packages/core/__tests__/domain/entities/` would contain tests for files in `packages/core/src/domain/entities/`).

### 3. JavaScript/TypeScript Elements

#### Variables
- **Regular Variables**: `camelCase` (e.g., `userProfile`)
- **Private Class Variables**: `_camelCase` (e.g., `_userData`)
- **Boolean Variables**: `isPrefixed` or `hasPrefixed` (e.g., `isValid`, `hasErrors`)

#### Constants
- **Module-level Constants**: `SCREAMING_SNAKE_CASE` (e.g., `MAX_FILE_SIZE`)
- **Class Constants**: `SCREAMING_SNAKE_CASE` (e.g., `static readonly MAX_ENTRIES = 50`)
- **Enum Constants**: `SCREAMING_SNAKE_CASE` (e.g., `ERROR_TYPES.VALIDATION`)

#### Functions & Methods
- **Regular Functions/Methods**: `camelCase` (e.g., `calculateTotal()`)
- **Private Class Methods**: `_camelCase` (e.g., `_validateInput()`)
- **Boolean-returning Functions**: `isPrefixed` or `hasPrefixed` (e.g., `isValidEmail()`)
- **Factory Functions**: `createPrefixed` (e.g., `createUserProfile()`)
- **Event Handlers**: `handlePrefixed` (e.g., `handleSubmit()`)

#### Classes
- **Class Names**: `PascalCase` (e.g., `ResumeBuilder`)
- **Abstract Classes**: `AbstractPascalCase` (e.g., `AbstractRepository`)
- **Service Classes**: `PascalCaseService` (e.g., `ValidationService`)
- **Repository Classes**: `PascalCaseRepository` (e.g., `ResumeRepository`)
- **Controller Classes**: `PascalCaseController` (e.g., `ResumeController`)

#### Interfaces & Types
- **Interfaces**: `PascalCaseInterface` (e.g., `ResumeDataInterface`)
- **Type Aliases**: `PascalCaseType`  (e.g., `ResumeTemplateType`)
- **Type Parameters/Generics**: Single uppercase letter or `PascalCaseType` (e.g., `EntityType`)
- **Prop Types**: `PascalCaseProps` (e.g., `ResumeFormProps`)

#### Enums
- **Enum Names**: `PascalCaseEnum` (e.g., `ValidationResultEnum`)
- **Enum Members**: `SCREAMING_SNAKE_CASE` (e.g., `ValidationResultEnum.INVALID_EMAIL`)

#### React/Vue Specific
- **Component Names**: `PascalCase` (e.g., `ResumeForm`)
- **Custom Hooks**: `useCamelCase` (e.g., `useFormValidation`)
- **Context Providers**: `PascalCaseProvider` (e.g., `ResumeProvider`)
- **Higher-Order Components**: `withPascalCase` (e.g., `withAuthentication`)

### 4. CSS & Styling

- **CSS Classes**: `kebab-case` (e.g., `resume-container`)
- **CSS Variables**: `--kebab-case` (e.g., `--primary-color`)
- **CSS Modules**: `camelCase` when imported in JS/TS (e.g., `import styles from './styles.module.css'`)
- **Tailwind Custom Classes**: `kebab-case` (e.g., `@apply bg-primary text-white;`)

### 5. Backend Specific

- **API Endpoints**: `kebab-case` (e.g., `/api/resume-templates`)
- **Database Tables/Collections**: `snake_case` (e.g., `user_resumes`)
- **Database Fields/Keys**: `snake_case` (e.g., `resume_title`)
- **Environment Variables**: `SCREAMING_SNAKE_CASE` (e.g., `DATABASE_URL`)

### 6. Clean Architecture Specific

- **Use Cases**: `PascalCaseUseCase` (e.g., `CreateResumeUseCase`)
- **Entities**: `PascalCaseEntity` (e.g., `ResumeEntity`)
- **Value Objects**: `PascalCase` (e.g., `Email`, `PhoneNumber`)
- **DTOs**: `PascalCaseDTO` (e.g., `ResumeDTO`)
- **Repositories Interfaces**: `PascalCaseRepositoryInterface` (e.g., `ResumeRepositoryInterface`)
- **Implementation Classes**: Follow their respective type conventions plus implementation detail (e.g., `LocalStorageResumeRepository`)

### 7. Testing Specific

- **Test Suites**: `describe('PascalCase', ...)` (e.g., `describe('ResumeService', ...)`)
- **Test Cases**: `it('should do something', ...)` or `test('should do something', ...)`
- **Test Fixtures**: `camelCaseMock` or `mockPascalCase` (e.g., `resumeDataMock`)
- **Test Helpers**: `camelCaseHelper` (e.g., `createTestUser`)

## Examples

<example>
// Good file naming
resume-service.ts
ResumeForm.vue
resume-repository.spec.ts 
TEMPLATE_CONSTANTS.ts

// Good variable naming
const userData = fetchUserData();
const isValid = validateEmail(email);
const MAX_FILE_SIZE = 5 * 1024 * 1024;

// Good function naming
function calculateTotalExperience(workHistory) {...}
function isValidEmail(email) {...}
function handleSubmit() {...}

// Good class naming
class ResumeBuilder {...}
class LocalStorageResumeRepository implements ResumeRepositoryInterface {...}
class ValidationService {...}

// Good interface & type naming
interface ResumeDataInterface {...}
type ResumeTemplateType = {...}
type EntityIdType<T> = {...}
type ResumeFormProps = {...}

// Good enum naming
enum ValidationResultEnum {
  VALID,
  INVALID_EMAIL,
  MISSING_REQUIRED_FIELD
}

// Good component naming
const ProfileSection = () => {...}
const useFormValidation = () => {...}
</example>

<example type="invalid">
// Bad file naming
resume_service.ts  // Uses snake_case instead of kebab-case
resumeForm.vue     // Uses camelCase instead of PascalCase for component
ResumeRepo.test.ts // Inconsistent test naming

// Bad variable naming
const data = fetch();     // Too vague
const r = calculateTax(); // Too short and meaningless
const valid = check();    // Boolean should use is/has prefix

// Bad function naming
function validate() {...}           // Too vague
function process_data() {...}       // Uses snake_case
function returnTrueIfUserExists() {...} // Too verbose

// Bad class naming
class resume_builder {...}     // Uses snake_case
class validationservices {...} // Not properly capitalized
class Repository_Local {...}   // Inconsistent casing

// Bad interface & type naming
interface resumeData {...}     // Should be PascalCaseInterface
type data = {...}              // Too vague and not PascalCaseType
type tEntity = {...}           // Inconsistent casing

// Bad enum naming
enum validationResults { // Should be ValidationResultsEnum
  valid,           // Should be SCREAMING_SNAKE_CASE
  invalid_email,   // Should be SCREAMING_SNAKE_CASE
  MissingField     // Inconsistent casing
}

// Bad component naming
const profilesection = () => {...}  // Should be PascalCase
const FormValidation = () => {...}  // Custom hook should use usePrefix
</example> 