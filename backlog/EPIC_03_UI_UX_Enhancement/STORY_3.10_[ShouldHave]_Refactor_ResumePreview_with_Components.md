# STORY 3.10: Refactor ResumePreview with Component Composition

**[Should Have]**

**As a** Developer,
**I want** to refactor `ResumePreview.vue` using component composition,
**So that** the template is cleaner, more maintainable, and easier to style consistently.

## Acceptance Criteria

-   [x] A new component `PreviewSection.vue` is created in `packages/ui/src/components/preview/`.
-   [x] `PreviewSection.vue` accepts a `title` prop (optional) and uses a default `<slot>` for content.
-   [x] `PreviewSection.vue` handles basic section layout (e.g., margin-bottom) and title styling (if title is provided).
-   [x] `PreviewSection.vue` only renders if its default slot contains content or if a title is explicitly provided (to allow for empty sections with just a title if needed, though current use case only renders if content exists).
-   [x] The main `ResumePreview.vue` template is simplified by using `<PreviewSection>` for repeating sections (Work, Education, Skills, Projects, etc.).
-   [x] The `v-for` loops and conditional rendering logic for each section's items are placed *inside* the `<slot>` of the corresponding `<PreviewSection>` in `ResumePreview.vue`.
-   [x] The overall visual appearance of the preview remains consistent with the previous Tailwind implementation.
-   [x] The "Basics" section might remain as is, or be partially refactored if a common pattern emerges, but is not the primary focus.
-   [x] No *new* item-specific components (e.g., `WorkItem.vue`, `EducationItem.vue`) are created in this specific story.

## Technical Tasks

-   [x] **Create Component:** Create `packages/ui/src/components/preview/PreviewSection.vue`.
-   [x] **Define Props & Slot:** Implement the `title` prop and default `<slot>` in `PreviewSection.vue`.
-   [x] **Add Basic Styling:** Apply common Tailwind classes for margin and title styling within `PreviewSection.vue`.
-   [x] **Implement Conditional Rendering:** Add logic (`v-if` based on slot content) to `PreviewSection.vue` to avoid rendering empty sections.
-   [x] **Import Component:** Import `PreviewSection.vue` into `ResumePreview.vue`.
-   [x] **Refactor Template:** Iterate through each section (Work, Education, Skills, etc.) in `ResumePreview.vue`:
    -   Replace the outer `<section>` tag and `<h3>` title with `<PreviewSection :title="...">`.
    -   Move the existing content (the `v-if` for the section's data array and the `v-for` loop) inside the `<PreviewSection>` tags.
-   [x] **Verify Appearance:** Manually check the preview in the browser to ensure the layout and styling haven't broken.
-   [x] **Clean Up:** Remove any redundant container divs or styling classes from `ResumePreview.vue` that are now handled by `PreviewSection.vue`. 