# STORY 4.3: [Must Have] Integrate Base Components into Forms

**As a** Developer,
**I want** to replace standard HTML form elements (`input`, `textarea`, `label`, `button`, container `div`s) within the form sections and items with the newly created base UI components (`BaseInput`, `BaseTextarea`, `FormLabel`, `BaseButton`, `FormGroup`, `CardWrapper`),
**So that** the form structure and styling become consistent, maintainable, and the parent templates are significantly simplified.

---

## Acceptance Criteria

-   [ ] Standard `<input>` elements in form components (`BasicsForm.vue`, `*ItemForm.vue`, etc.) are replaced by `<BaseInput>`. `v-model` and other necessary attributes (`type`, `placeholder`, `id`) are correctly passed.
-   [ ] Standard `<textarea>` elements are replaced by `<BaseTextarea>`.
-   [ ] Standard `<label>` elements are replaced by `<FormLabel>`.
-   [ ] Standard `<button>` elements (especially for Add/Delete actions) are replaced by `<BaseButton>`, using appropriate `variant` props (e.g., `variant="primary"` for add, `variant="danger"` for delete).
-   [ ] Label/Input pairs are wrapped consistently using `<FormGroup>` where appropriate.
-   [ ] Outer container `div`s for form items or sections (like those previously styled as cards) are replaced by `<CardWrapper>`.
-   [ ] The templates of the form components (`BasicsForm.vue`, `WorkSection.vue`, `WorkExperienceForm.vue`, `EducationSection.vue`, `EducationItemForm.vue`, etc.) are noticeably cleaner and contain fewer raw HTML elements with long Tailwind class strings.
-   [ ] Forms remain fully functional and visually consistent with the styles defined in the base components.
-   [ ] Theme switching (light/dark) works correctly for all form elements, inheriting styles from the base components.

---

## Technical Tasks

-   [ ] **TASK 4.3.1:** Systematically refactor each form-related component (`BasicsForm.vue`, `ProfileItemForm.vue`, `WorkSection.vue`, `WorkExperienceForm.vue`, `EducationSection.vue`, `EducationItemForm.vue`, `SkillsSection.vue`, `SkillCategoryForm.vue`, `ProjectsSection.vue`, `ProjectItemForm.vue`, `VolunteerSection.vue`, `VolunteerItemForm.vue`, `CertificatesSection.vue`, `CertificateItemForm.vue`, `PublicationsSection.vue`, `PublicationItemForm.vue`, `LanguagesSection.vue`, `LanguageItemForm.vue`, `InterestsSection.vue`, `InterestItemForm.vue`, `ReferencesSection.vue`, `ReferenceItemForm.vue`, `AwardsSection.vue`, `AwardItemForm.vue`):
    *   Import the necessary base components (`BaseInput`, `BaseTextarea`, `FormLabel`, `BaseButton`, `FormGroup`, `CardWrapper`) from `../base/`.
    *   Replace corresponding HTML elements with the base components, ensuring props and `v-model` are correctly bound.
    *   Use `<FormGroup>` to wrap label/input pairs.
    *   Use `<CardWrapper>` for the main container of item forms (like `WorkExperienceForm`, `CertificateItemForm`, etc.).
    *   Adjust `BaseButton` usage for 'Add' (likely primary/secondary variant) and 'Delete' (danger variant) actions.
-   [ ] **TASK 4.3.2:** Remove any redundant Tailwind utility classes from the parent form components that are now handled by the base components (e.g., remove padding/background classes if using `CardWrapper`).
-   [ ] **TASK 4.3.3:** Test each form section after refactoring to ensure functionality, layout, styling consistency, and theme switching are correct.

---

## Notes

-   This story involves modifying a large number of existing components.
-   It directly leverages the base components created in STORY 4.2.
-   The primary goal is template simplification and consistency by using the new abstractions.
-   Pay attention to prop drilling if necessary, though `v-model` helps significantly for inputs/textareas.
-   Focus on replacing the structure; fine-tuning layout details within the base components might occur in later iterations if needed. 