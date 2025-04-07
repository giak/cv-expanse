# EPIC 04: UI Consistency & Component Refactoring

**Goal:** Enhance the application's UI consistency, maintainability, and theme adaptability by refactoring components using Tailwind CSS v4 utility classes, strictly adhering to component composition principles, and eliminating redundant CSS.

**Description:** This EPIC addresses the visual inconsistencies between different parts of the application (editor vs. preview) and the challenges of maintaining styles with verbose inline utility classes. It involves harmonizing the theme application across all components, consolidating CSS files, creating reusable base Vue components for common UI patterns (like buttons, inputs, cards), and integrating these base components to simplify parent templates. The core principle is to leverage Vue component composition and Tailwind utilities directly in templates, avoiding `@apply` and `<style>` blocks as per project conventions (`tailwind-styling-conventions.md`).

**User Value:**
-   Consistent visual experience across the entire application, regardless of the chosen theme (light/dark).
-   Improved maintainability and developer experience when making styling changes.
-   Clearer and more readable component templates.
-   Enhanced UI/UX through standardized components.

**Scope:**
-   Refactor `ResumePreview.vue` to be theme-aware.
-   Consolidate and clean up `main.css`, `themes.css`, and remove `forms.css`.
-   Create and/or refactor base Vue components (`BaseButton`, `BaseInput`, `BaseTextarea`, `FormLabel`, `FormGroup`, `CardWrapper`).
-   Integrate these base components throughout the application (`App.vue`, form sections, form items).
-   Ensure consistent theme application (light/dark modes).

**Stories:**
-   STORY 4.1: Theme Harmonization & CSS Cleanup
-   STORY 4.2: Create Core Base UI Components
-   STORY 4.3: Integrate Base Components into Forms
-   STORY 4.4: Integrate Base Components into Main Layout

**Success Criteria:**
-   The entire application UI consistently reflects the selected theme (light/dark).
-   `forms.css` is removed, and CSS structure is simplified (`main.css`, `themes.css`).
-   Reusable base UI components are created and used effectively.
-   Parent component templates are significantly cleaner, with reduced inline Tailwind class verbosity.
-   Styling changes are easier to implement by modifying base components.
-   Project styling conventions (no `@apply`, no `<style>` blocks in components) are strictly followed. 