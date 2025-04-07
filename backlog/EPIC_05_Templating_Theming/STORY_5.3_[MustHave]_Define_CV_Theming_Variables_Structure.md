# STORY 5.3: [Must Have] Define CV Theming Variables & Structure

**As a** Developer,
**I want** to define a dedicated set of CSS variables prefixed with `--preview-*` within `themes.css` to control the styling specific to the CV preview area (fonts, colors, spacing),
**So that** different templates (`ClassicTemplate`, `ModernTemplate`, etc.) can easily override these variables to achieve distinct visual appearances without affecting the main editor UI theme.

---

## Acceptance Criteria

1.  A new section exists in `packages/ui/src/assets/themes.css` dedicated to preview theming variables.
2.  CSS variables are defined for key stylistic elements of the preview, prefixed with `--preview-`:
    *   `--preview-font-body`, `--preview-font-heading`, `--preview-font-mono`
    *   `--preview-color-background` (page background)
    *   `--preview-color-text-primary`, `--preview-color-text-secondary`, `--preview-color-text-tertiary`
    *   `--preview-color-primary`, `--preview-color-primary-hover` (accents, links)
    *   `--preview-color-border` (section borders, etc.)
    *   `--preview-section-spacing` (vertical space between sections)
    *   `--preview-text-sm`, `--preview-text-base`, `--preview-text-lg`, `--preview-text-xl`, `--preview-text-2xl` (font sizes)
3.  These variables are defined within the `:root` selector to provide default values (e.g., corresponding to the 'Classic' theme style - typically light background, dark text).
4.  The shared preview components (`PreviewSection.vue`) and item components (`WorkItem.vue`, `EducationItem.vue`, etc.) are updated to use these `--preview-*` variables via Tailwind utility classes (e.g., `class="mb-[var(--preview-section-spacing)]"`, `class="text-[var(--preview-color-primary)]"`).
5.  The 'Classic' template renders correctly using these default variable values.

---

## Technical Tasks

-   [X] **TASK 5.3.1:** Add a dedicated comment block and section in `themes.css` for preview variables.
-   [X] **TASK 5.3.2:** Define the `--preview-*` variables listed in the AC within `:root {}` in `themes.css`, assigning default values suitable for a standard light-background CV (using existing neutral/primary theme colors is fine for defaults).
-   [X] **TASK 5.3.3:** Refactor `PreviewSection.vue` to use `--preview-*` variables for title color, font, border color, and bottom margin (`--preview-section-spacing`).
-   [X] **TASK 5.3.4:** Refactor all item components (`WorkItem.vue`, `EducationItem.vue`, etc.) to use `--preview-*` variables for text colors, link colors, fonts, and potentially spacing where applicable.
-   [X] **TASK 5.3.5:** Verify that `ClassicTemplate.vue` (and thus the preview) renders correctly using the new variables and defaults.

---

## Notes

-   This establishes the *mechanism* for theming the preview.
-   Actual theme *overrides* (e.g., for a dark modern template) would involve redefining these variables within a specific CSS class or data attribute selector applied to the template's root element.
-   Prefixing is crucial to avoid conflicts with main UI theme variables. 