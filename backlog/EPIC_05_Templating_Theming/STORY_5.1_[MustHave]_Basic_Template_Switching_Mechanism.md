# STORY 5.1: [Must Have] Basic Template Switching Mechanism

**As a** Developer,
**I want** to implement a mechanism within the UI (e.g., in `App.vue`) that allows selecting between different CV template components (starting with 'Classic' and 'Modern') and dynamically rendering the chosen one in the preview area,
**So that** the foundation for multiple CV appearances is established.

---

## Acceptance Criteria

1.  A UI element (e.g., a dropdown `select`, radio buttons, or simple buttons) exists in `App.vue` (or a dedicated settings panel) allowing the user to choose a template (options: 'Classic', 'Modern').
2.  The selected template name is stored in a reactive state variable (e.g., `selectedTemplateName` in `App.vue`).
3.  The `ResumePreview.vue` component accepts the `selectedTemplateName` as a prop.
4.  `ResumePreview.vue` uses dynamic component loading (`<component :is="...">` with `defineAsyncComponent`) to render the appropriate template component (`ClassicTemplate.vue` or `ModernTemplate.vue`) based on the prop.
5.  The selected template name is persisted (e.g., using `localStorage` with a specific key like `cv-generator-template`) when changed.
6.  The persisted template name is loaded when the application starts, setting the initial state.

---

## Technical Tasks

-   [X] **TASK 5.1.1:** Create basic template component files: `packages/ui/src/components/preview/templates/ClassicTemplate.vue` and `ModernTemplate.vue` (can be simple placeholders initially).
-   [X] **TASK 5.1.2:** Add a reactive ref (`selectedTemplateName`) to `App.vue`, defaulting to 'classic'.
-   [X] **TASK 5.1.3:** Add UI controls (e.g., `<select>`) in `App.vue`'s template, bound to `selectedTemplateName`, allowing selection between 'classic' and 'modern'.
-   [X] **TASK 5.1.4:** Modify `ResumePreview.vue` to accept a `templateName` prop.
-   [X] **TASK 5.1.5:** Implement dynamic component loading in `ResumePreview.vue` using `computed` and `defineAsyncComponent` to resolve the component based on the `templateName` prop.
-   [X] **TASK 5.1.6:** Pass the `selectedTemplateName` from `App.vue` as a prop to `<ResumePreview>`.
-   [X] **TASK 5.1.7:** Implement saving the `selectedTemplateName` to `localStorage` whenever it changes (using a `watch` or within the save function).
-   [X] **TASK 5.1.8:** Implement loading the saved template name from `localStorage` when `App.vue` mounts.

---

## Notes

-   `defineAsyncComponent` is important for lazy-loading templates, preventing them from increasing the initial bundle size if not used.
-   Need a fallback mechanism in `ResumePreview.vue` if an invalid template name is provided (e.g., default to 'classic').
-   LocalStorage key should be defined, perhaps in `shared`. 