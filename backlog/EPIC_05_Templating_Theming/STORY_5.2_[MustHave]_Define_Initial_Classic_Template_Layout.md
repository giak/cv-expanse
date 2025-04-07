# STORY 5.2: [Must Have] Define Initial 'Classic' Template Layout

**As a** Developer,
**I want** to implement the structure and basic styling for the `ClassicTemplate.vue` component, displaying all the standard CV sections in a clean, single-column format,
**So that** users have a functional default template resembling a traditional CV layout.

---

## Acceptance Criteria

1.  `ClassicTemplate.vue` exists and receives the `resume` data object as a prop.
2.  The template renders all sections present in the `resume` data (`Basics`, `Work`, `Education`, `Skills`, `Projects`, `Volunteer`, `Awards`, `Certificates`, `Publications`, `Languages`, `Interests`, `References`).
3.  Each section is rendered using the shared `PreviewSection.vue` component for consistency in titles and spacing.
4.  The content within each section (e.g., list items for Work, Education) is rendered using the corresponding item components (`WorkItem.vue`, `EducationItem.vue`, etc.).
5.  Conditional rendering (`v-if`) is used to display sections and items only if they have data.
6.  The layout is a single, vertical column.
7.  Basic styling (fonts, colors, spacing) is applied using the initial set of `--preview-*` CSS variables (defined in STORY 5.3). For now, these variables will likely point to standard neutral colors and sans-serif fonts.
8.  Helper functions (like `formatDateRange`, `formatLocation`) needed specifically for display are included or imported into the template's script setup.

---

## Technical Tasks

-   [X] **TASK 5.2.1:** Ensure `ClassicTemplate.vue` defines the `resume` prop (`defineProps<{ resume: ResumeEntityInterface }>()`).
-   [X] **TASK 5.2.2:** Import `PreviewSection.vue` and all necessary item components (`WorkItem.vue`, `EducationItem.vue`, `SkillItem.vue`, etc.) into `ClassicTemplate.vue`.
-   [X] **TASK 5.2.3:** Structure the template using `<PreviewSection>` for each CV section (e.g., `<PreviewSection title="Work Experience" v-if="resume.work?.length">`).
-   [X] **TASK 5.2.4:** Inside each `<PreviewSection>`, implement the `v-for` loop to iterate over the corresponding array in the `resume` object (e.g., `resume.work`) and render the appropriate item component (e.g., `<WorkItem :item="workItem" />`).
-   [X] **TASK 5.2.5:** Implement the rendering for the `Basics` section (which might not use `PreviewSection` if its structure is unique).
-   [X] **TASK 5.2.6:** Ensure the template uses Tailwind classes referencing `--preview-*` variables for key styles (e.g., `class="font-[var(--preview-font-body)] text-[var(--preview-color-text-primary)]"`).
-   [X] **TASK 5.2.7:** Copy or import necessary helper functions (like `formatDateRange`) into `ClassicTemplate.vue`'s script setup.
-   [X] **TASK 5.2.8:** Test rendering with sample resume data to ensure all sections display correctly.

---

## Notes

-   This template serves as the baseline.
-   Focus on correct data display and structure using the components created earlier.
-   The styling relies heavily on the `--preview-*` variables being defined in the next story. 