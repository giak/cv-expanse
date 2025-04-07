# STORY 5.4: [Could Have] Implement Basic 'Modern' Template Layout

**As a** Developer,
**I want** to implement the structure and basic layout for the `ModernTemplate.vue` component, potentially using a two-column format,
**So that** users have a visually distinct alternative to the Classic template, showcasing the flexibility of the templating system.

---

## Acceptance Criteria

1.  `ModernTemplate.vue` exists and receives the `resume` data object as a prop.
2.  The template implements a different layout structure compared to `ClassicTemplate` (e.g., a two-column layout using Flexbox or Grid).
    *   Example: Sidebar (left) for Basics, Skills, Languages. Main content area (right) for Work, Education, Projects.
3.  It renders the relevant CV sections using `PreviewSection.vue` and the item components (`WorkItem.vue`, etc.).
4.  Conditional rendering (`v-if`) is used appropriately.
5.  The template uses the same `--preview-*` CSS variables for styling, ensuring it respects the base theme settings.
6.  (Optional) The `ModernTemplate.vue` *could* demonstrate overriding a few `--preview-*` variables (e.g., `--preview-color-primary`, `--preview-font-heading`) by applying a specific class or data attribute to its root element and defining override rules in `themes.css`, but the primary goal is layout differentiation.

---

## Technical Tasks

-   [X] **TASK 5.4.1:** Ensure `ModernTemplate.vue` defines the `resume` prop.
-   [X] **TASK 5.4.2:** Import `PreviewSection.vue` and necessary item components.
-   [X] **TASK 5.4.3:** Design and implement the alternative layout structure (e.g., two columns) using Tailwind Flexbox/Grid utilities within `ModernTemplate.vue`.
-   [X] **TASK 5.4.4:** Place the `<PreviewSection>` components (with their looped item components inside) into the appropriate columns of the new layout.
-   [X] **TASK 5.4.5:** Ensure all styling uses Tailwind classes referencing the standard `--preview-*` variables.
-   [X] **TASK 5.4.6:** Test rendering and responsiveness of the Modern template.
-   [ ] **TASK 5.4.7 (Optional):** If desired, add a class (e.g., `.modern-theme-overrides`) to the root element of `ModernTemplate.vue`. Define rules for this class in `themes.css` that override specific `--preview-*` variables (e.g., `.modern-theme-overrides { --preview-color-primary: var(--color-teal-600); }`).

---

## Notes

-   This story focuses on demonstrating layout flexibility.
-   Advanced styling differences or theme overrides are secondary for this story.
-   Reusing `PreviewSection` and item components is key. 