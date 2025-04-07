<template>
  <button
    :class="[
      // Base styles
      'inline-flex items-center justify-center',
      'px-4 py-2 border',
      'rounded-[--radius-md] shadow-sm',
      'text-sm font-medium',
      'transition-colors duration-[var(--transition-fast)]',
      'focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
      'disabled:opacity-50 disabled:cursor-not-allowed',
      // Variant styles
      computedClasses
    ]"
    :disabled="props.disabled"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';

// Define props
const props = defineProps({
  variant: {
    type: String as () => 'primary' | 'secondary' | 'danger',
    default: 'primary',
    validator: (value: string) => ['primary', 'secondary', 'danger'].includes(value)
  },
  disabled: {
    type: Boolean,
    default: false
  }
});

// Define emits if needed, e.g., defineEmits(['click']);

// --- Theme-Aware Variant Classes --- //

const computedClasses = computed(() => {
  const ringOffsetColor = 'focus-visible:ring-offset-[--color-bg-primary]'; // Adjust based on typical button placement

  switch (props.variant) {
    case 'secondary':
      return [
        'border-[--color-border-dark] text-[--color-text-secondary]',
        'hover:bg-[--color-bg-secondary] hover:border-[--color-border-dark]', // Subtle hover
        `focus-visible:ring-[--color-primary-500] ${ringOffsetColor}`,
        'bg-transparent',
      ];
    case 'danger':
      return [
        'bg-[--color-error-600] text-white border-transparent',
        'hover:bg-[--color-error-700]',
        `focus-visible:ring-[--color-error-500] ${ringOffsetColor}`
      ];
    case 'primary':
    default:
      return [
        'bg-[--color-primary-600] text-white border-transparent',
        'hover:bg-[--color-primary-700]',
        `focus-visible:ring-[--color-primary-500] ${ringOffsetColor}`
      ];
  }
});

// --- Event Handling --- //

const handleClick = (event: MouseEvent) => {
  // Prevent click action if disabled
  if (props.disabled) {
    event.preventDefault();
    return;
  }
  // Could emit an event here
  // emit('click', event);
  // console.log('Button clicked', event, props.variant);
};
</script>

<!-- No <style> block as per convention -->