<template>
  <div 
    :class="[
      'border border-[--color-border]',
      'rounded-[--radius-lg]', // Use larger radius for cards
      'bg-[--color-bg-card]',
      'shadow-[--shadow-md]', // Use theme shadow
      'transition-colors duration-[var(--transition-fast)]'
      // Padding should generally be applied *inside* the card by the content,
      // or passed as a prop if needed for flexibility.
      // Consider adding default padding like 'p-4' if always desired.
    ]"
  >
    <!-- Optional Header Slot -->
    <div v-if="slots.header" 
      :class="[
        'p-3 px-4', // Adjust padding as needed
        'border-b border-[--color-border]', 
        'bg-[--color-bg-secondary]', // Slightly different bg for header
        'rounded-t-[--radius-lg]' // Match outer radius
      ]"
    >
      <slot name="header"></slot>
    </div>

    <!-- Default Content Slot -->
    <div :class="[defaultPaddingClass]">
        <slot></slot>
    </div>

    <!-- Optional Footer Slot -->
     <div v-if="slots.footer" 
      :class="[
        'p-3 px-4', // Adjust padding as needed
        'border-t border-[--color-border]', 
        'bg-[--color-bg-secondary]', // Slightly different bg for footer
        'rounded-b-[--radius-lg]' // Match outer radius
      ]"
    >
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSlots, computed } from 'vue';

// Define props
const props = defineProps<{
  noPadding?: boolean;
  paddingClass?: string; // Allow overriding default padding
}>();

// Access slots
const slots = useSlots();

// Compute padding class for the main content area
const defaultPaddingClass = computed(() => {
    if (props.noPadding) return '';
    return props.paddingClass ?? 'p-4'; // Default padding
});

</script>

<!-- No <style> block --> 