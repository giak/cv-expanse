# STORY 4.1: [Must Have] Theme Harmonization & CSS Cleanup

**As a** Developer,
**I want** to ensure the entire application UI, including `ResumePreview.vue`, consistently reflects the selected theme (light/dark) and consolidate the CSS file structure,
**So that** the visual presentation is unified, and the CSS organization is simplified and maintainable.

---

## Acceptance Criteria

-   [X] `ResumePreview.vue` correctly displays styles based on the active theme (light/dark) by utilizing CSS variables (e.g., `bg-[--color-bg-card]`) instead of hardcoded light-theme styles (`bg-white`).
-   [X] The CSS variables defined in `themes.css` cover all necessary themeable aspects (backgrounds, text colors, borders, accents) used throughout the application, including the preview.
-   [X] The `forms.css` file is completely removed from the project (`packages/ui/src/assets/`).
-   [X] The import statement for `forms.css` is removed from `packages/ui/src/main.ts`.
-   [X] Any essential global styles previously in `forms.css` (if any, unlikely) are migrated appropriately (e.g., to `@layer base` in `main.css` if truly global, or removed if now handled by utilities/components).
-   [X] `main.css` primarily contains `@import "tailwindcss";`, `@font-face` rules, and base layer styles. It does *not* contain component-specific styles or `@apply` rules for components.
-   [ ] The application functions correctly after removing `forms.css` and refactoring `ResumePreview.vue` styles. (Requires Testing)

---

## Technical Tasks

-   [X] **TASK 4.1.1:** Review CSS variables in `themes.css`. Add any missing variables required for backgrounds, text, borders, etc., needed for full theme support in both editor and preview.
-   [X] **TASK 4.1.2:** Refactor `ResumePreview.vue`: Replace Tailwind classes using hardcoded colors (like `bg-white`, `text-neutral-800`) with classes using CSS variables (e.g., `bg-[--color-bg-card]`, `text-[--color-text-primary]`, `border-[--color-border]`).
-   [X] **TASK 4.1.3:** Refactor item components used in `ResumePreview` (`WorkItem.vue`, `EducationItem.vue`, etc.) to use theme variables.
-   [X] **TASK 4.1.4:** Delete the file `packages/ui/src/assets/forms.css`.
-   [X] **TASK 4.1.5:** Remove the line `import './assets/forms.css';` from `packages/ui/src/main.ts`.
-   [ ] **TASK 4.1.6:** Test the application thoroughly in both light and dark modes, paying close attention to the preview and form elements to ensure styles are applied correctly and consistently. Fix any visual regressions resulting from removing `forms.css`.

---

## Notes

-   This story focuses on making the preview theme-aware and cleaning up the CSS structure.
-   It directly prepares the ground for consistent component styling in subsequent stories.
-   Visual regressions in forms after removing `forms.css` indicate styles that need to be reimplemented using utility classes or component encapsulation in later stories. 