# EPIC 05: Templating & Theming System

**Goal:** Implement a flexible system that allows users to choose different visual templates for their CV preview and enable theme customization (starting with basic CSS variables).

**Description:** This EPIC focuses on decoupling the CV data structure from its visual presentation. It involves creating multiple Vue components representing different CV layouts (e.g., 'Classic', 'Modern'), implementing a mechanism to switch between them, and establishing a system of CSS variables specifically for the preview area to allow templates to easily override visual styles like fonts, colors, and spacing.

**User Value:**
-   Users can choose a CV appearance that best suits their style or industry.
-   Provides a foundation for more advanced theme customization in the future.
-   Separates presentation logic from data management, improving maintainability.

**Scope:**
-   Develop a mechanism in `App.vue` or `ResumePreview.vue` to select the active template.
-   Create at least two distinct template components (`ClassicTemplate.vue`, `ModernTemplate.vue`).
-   Refactor `ResumePreview.vue` to dynamically render the selected template component.
-   Define a set of CSS variables specifically for the preview (`--preview-*`) in `themes.css`.
-   Apply these `--preview-*` variables within the template components and the shared `PreviewSection.vue`.
-   Persist the user's template choice (e.g., in localStorage).

**Stories:**
-   STORY 5.1: [Must Have] Basic Template Switching Mechanism
-   STORY 5.2: [Must Have] Define Initial 'Classic' Template Layout
-   STORY 5.3: [Must Have] Define CV Theming Variables & Structure
-   STORY 5.4: [Could Have] Implement Basic 'Modern' Template Layout

**Success Criteria:**
-   User can select between 'Classic' and 'Modern' templates via the UI.
-   The `ResumePreview.vue` component renders the selected template correctly.
-   The template choice is saved and restored across sessions.
-   Templates use `--preview-*` CSS variables for styling key elements.
-   The visual appearance differs noticeably between the 'Classic' and 'Modern' templates. 