# STORY 4.2: [Must Have] Create Core Base UI Components

**As a** Developer,
**I want** to create reusable base Vue components for common UI patterns (buttons, inputs, textareas, labels, form groups, cards) using Tailwind CSS utilities internally,
**So that** styling is encapsulated, consistent, and parent component templates can be simplified.

---

## Acceptance Criteria

-   [X] `BaseButton.vue` is fully styled using Tailwind utilities internally, supports variants (e.g., `primary`, `secondary`, `danger`) via props, and has no `<style>` block.
-   [X] A new `BaseInput.vue` component exists, encapsulating a standard `<input type="text">` (or configurable type) styled with theme-aware Tailwind utilities (using CSS variables for borders, background, text color, focus states).
-   [X] A new `BaseTextarea.vue` component exists, encapsulating a standard `<textarea>` styled with theme-aware Tailwind utilities.
-   [X] A new `FormLabel.vue` component exists, encapsulating a standard `<label>` styled with theme-aware Tailwind utilities.
-   [X] A new `FormGroup.vue` component exists, providing consistent layout (e.g., margin, spacing) for label/input combinations using `<slot>`.
-   [X] A new `CardWrapper.vue` component exists, providing a consistent container style (background, padding, border, radius, shadow) using theme-aware Tailwind utilities and `<slot>`.
-   [X] All created base components use Tailwind utility classes directly in their templates and contain no `<style>` or `<style scoped>` blocks.
-   [X] Base components effectively use CSS variables (via Tailwind utilities like `bg-[--color-...]`) to ensure theme adaptability.
-   [X] Base components are exported via `packages/ui/src/components/base/index.ts`.

---

## Technical Tasks

-   [X] **TASK 4.2.1:** Analyze `BaseButton.vue`.
-   [X] **TASK 4.2.2:** Remove `<style scoped>` from `BaseButton.vue`.
-   [X] **TASK 4.2.3:** Refactor `BaseButton.vue` styling using Tailwind utilities, theme variables, and variants.
-   [X] **TASK 4.2.4:** Create `BaseInput.vue`.
-   [X] **TASK 4.2.5:** Create `BaseTextarea.vue`.
-   [X] **TASK 4.2.6:** Create `FormLabel.vue`.
-   [X] **TASK 4.2.7:** Create `FormGroup.vue`.
-   [X] **TASK 4.2.8:** Create `CardWrapper.vue`.
-   [X] **TASK 4.2.9:** Create `index.ts` in `packages/ui/src/components/base/` to export components.

---

## Notes

-   These components form the foundation for standardizing the UI in the next stories.
-   Adherence to the no-`<style>`-block convention is critical. 