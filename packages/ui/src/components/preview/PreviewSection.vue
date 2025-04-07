<template>
  <section v-if="hasContent" class="mb-[var(--preview-section-spacing)]">
    <!-- Section Title: Apply common styling -->
    <h3 v-if="title" class="text-[var(--preview-text-xl)] font-semibold text-[var(--preview-color-text-primary)] font-[var(--preview-font-heading)] border-b border-[var(--preview-color-border)] pb-1 mb-3">
      {{ title }}
    </h3>
    <!-- Slot for the section content (loops, items, etc.) -->
    <slot></slot>
  </section>
</template>

<script setup lang="ts">
import { computed, useSlots } from 'vue';

// Define props
const props = defineProps<{
  title?: string; // Title is optional
}>();

// Check if the default slot has content to prevent rendering empty sections
const slots = useSlots();
const hasContent = computed(() => !!slots.default?.());

</script>
