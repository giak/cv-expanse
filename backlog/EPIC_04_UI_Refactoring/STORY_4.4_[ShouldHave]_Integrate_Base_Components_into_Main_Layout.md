# STORY 4.4: [ShouldHave] Integrate Base Components into Main Layout

**As a** Developer,
**I want** to integrate the base UI components (like `CardWrapper`, `BaseButton`) into the main application layout (`App.vue`) and potentially other top-level UI elements,
**So that** the overall application structure also benefits from component composition and styling consistency.

---

## Acceptance Criteria

-   [ ] The main layout containers in `App.vue` (e.g., for the editor pane, preview pane, header, footer) utilize `<CardWrapper>` or similar structural base components if applicable, replacing raw `div`s with extensive styling.
-   [ ] Any top-level buttons in `App.vue` (like the main "Save" button or the Theme Toggle) are implemented using `<BaseButton>` or the specific `ThemeToggle.vue` component.
-   [ ] The template of `App.vue` is cleaner and relies more on component composition rather than complex divs with many utility classes.
-   [ ] The overall layout remains visually consistent and functional.
-   [ ] Theme switching continues to work correctly for the main layout elements.

---

## Technical Tasks

-   [ ] **TASK 4.4.1:** Analyze the template structure of `App.vue`.
-   [ ] **TASK 4.4.2:** Identify sections like the header, footer, editor panel container, and preview panel container.
-   [ ] **TASK 4.4.3:** Replace the main `div` wrappers for the editor and preview panes with `<CardWrapper>` if their styling matches (or create a suitable alternative base component if needed, e.g., `PanelWrapper`). Remove redundant styling classes from `App.vue`.
-   [ ] **TASK 4.4.4:** Ensure the main "Save" button in the header uses `<BaseButton variant="primary">`.
-   [ ] **TASK 4.4.5:** Verify that the `ThemeToggle.vue` component is used for theme switching (already likely the case).
-   [ ] **TASK 4.4.6:** Refactor any other structural `div`s in `App.vue` that could benefit from a base component for consistency (less likely, but review).
-   [ ] **TASK 4.4.7:** Test the overall application layout, responsiveness, and theme switching after the changes.

---

## Notes

-   This story focuses on applying the base components created in STORY 4.2 to the top-level application structure.
-   It aims to bring the benefits of composition and reduced template clutter to `App.vue` itself.
-   The impact might be less extensive than in the forms, depending on the complexity of `App.vue`'s current structure. 