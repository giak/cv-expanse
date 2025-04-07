<template>
  <label 
    :for="props.for" 
    :class="[
      'block text-sm font-medium mb-1',
      'text-[--color-text-secondary]' // Use secondary color for labels by default
      // Add other classes if needed, e.g., required indicator style
    ]"
  >
    <slot></slot> <!-- Label text goes here -->
    <span v-if="required" class="text-[--color-error-500] ml-1">*</span>
  </label>
</template>

<script setup lang="ts">
// Define props
const props = defineProps<{
  for?: string; // Corresponds to the input's id
  required?: boolean;
}>();
</script>

<!-- No <style> block --> 