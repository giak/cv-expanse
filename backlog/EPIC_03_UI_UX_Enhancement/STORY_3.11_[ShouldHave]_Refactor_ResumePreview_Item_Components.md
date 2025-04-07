# STORY 3.11: Refactor ResumePreview with Item Components

**[Should Have]**

**As a** Developer,
**I want** to extract the rendering logic for individual resume items (like work experience, education entries, skills) from `ResumePreview.vue` into dedicated child components,
**So that** `ResumePreview.vue` becomes even simpler, item rendering logic is encapsulated, and components are more reusable.

## Acceptance Criteria

-   [x] New item-specific components are created in `packages/ui/src/components/preview/items/` (e.g., `WorkItem.vue`, `EducationItem.vue`, `SkillItem.vue`, `ProjectItem.vue`, etc.).
-   [x] Each item component accepts a single data object (e.g., `WorkExperienceEntityInterface`) as a prop.
-   [x] The rendering logic (HTML structure and Tailwind classes) for displaying one item is moved from `ResumePreview.vue` into the corresponding item component.
-   [x] `ResumePreview.vue` is updated to use these new item components within the `v-for` loops inside the `<PreviewSection>` slots.
-   [x] Helper functions like `formatDateRange` are either imported and used within the item components or the formatted values are passed down as props.
-   [x] The overall visual appearance of the preview remains identical to the previous version.
-   [x] The `ResumePreview.vue` file is significantly simplified, mainly containing `<PreviewSection>` and `v-for` loops calling the item components.

## Technical Tasks

-   [x] **Create Directory:** Create `packages/ui/src/components/preview/items/` if it doesn't exist.
-   [x] **Implement `WorkItem.vue`:**
    -   Create the file.
    -   Define props (`item: WorkExperienceEntityInterface`).
    -   Move rendering logic from `ResumePreview.vue`.
    -   Apply Tailwind classes.
    -   Handle date formatting.
-   [x] **Update `ResumePreview.vue` (Work):**
    -   Import `WorkItem.vue`.
    -   Replace the `div` inside the `v-for` loop with `<WorkItem :item="job" />`.
-   [x] **Implement `EducationItem.vue`:**
    -   Create the file.
    -   Define props (`item: EducationEntityInterface`).
    -   Move rendering logic from `ResumePreview.vue`.
    -   Apply Tailwind classes.
    -   Handle date formatting.
-   [x] **Update `ResumePreview.vue` (Education):**
    -   Import `EducationItem.vue`.
    -   Replace the `div` inside the `v-for` loop with `<EducationItem :item="edu" />`.
-   [x] **Implement `SkillItem.vue`:** (Handles skill category + keywords)
    -   Create the file.
    -   Define props (`item: SkillEntityInterface`).
    -   Move rendering logic.
-   [x] **Update `ResumePreview.vue` (Skills):**
    -   Import `SkillItem.vue`.
    -   Replace the `div` inside the `v-for` loop with `<SkillItem :item="skill" />`.
-   [x] **Implement `ProjectItem.vue`:**
    -   Create the file.
    -   Define props (`item: ProjectEntityInterface`).
    -   Move rendering logic.
    -   Handle date formatting.
-   [x] **Update `ResumePreview.vue` (Projects):**
    -   Import `ProjectItem.vue`.
    -   Replace the `div` inside the `v-for` loop with `<ProjectItem :item="project" />`.
-   [x] **Implement `VolunteerItem.vue`:** (Similar structure to WorkItem)
    -   Create the file and component.
    -   Update `ResumePreview.vue`.
-   [x] **Implement `CertificateItem.vue`:**
    -   Create the file and component.
    -   Update `ResumePreview.vue`.
-   [x] **Implement `PublicationItem.vue`:**
    -   Create the file and component.
    -   Update `ResumePreview.vue`.
-   [x] **Implement `LanguageItem.vue`:** (Note: Languages section might not need a separate item component if it's simple enough) - *Decision: Keep it inline for now.*
-   [x] **Implement `InterestItem.vue`:**
    -   Create the file and component.
    -   Update `ResumePreview.vue`.
-   [x] **Implement `ReferenceItem.vue`:**
    -   Create the file and component.
    -   Update `ResumePreview.vue`.
-   [x] **Implement `AwardItem.vue`:**
    -   Create the file and component.
    -   Update `ResumePreview.vue`.
-   [x] **Verify Appearance:** Manually check the preview for visual consistency after each section refactoring.
-   [x] **Clean Up:** Remove unused helper functions or imports from `ResumePreview.vue` if they are now solely used within item components.

## Notes
- This further enhances component composition and separation of concerns.
- Pay attention to passing props correctly and handling potential `undefined` values within item components if necessary.
- The `Basics` section and potentially `Languages` might not benefit as much from item components and can remain inline for now.
