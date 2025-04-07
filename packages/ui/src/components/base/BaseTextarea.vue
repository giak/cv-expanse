<template>
  <textarea
    :value="modelValue"
    @input="$emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)"
    :id="id"
    :placeholder="placeholder"
    :disabled="disabled"
    :required="required"
    :rows="rows"
    :aria-required="required ? 'true' : undefined"
    :class="[
      'block w-full',
      'px-3 py-2',
      'bg-[--color-bg-input] text-[--color-text-input]',
      'border border-[--color-border-input]',
      'rounded-[--radius-md] shadow-sm',
      'placeholder:text-[--color-text-placeholder]',
      'focus:outline-none focus-visible:ring-2 focus-visible:ring-[--color-ring-focus] focus-visible:border-[--color-border-input-focus]',
      'transition-colors duration-[var(--transition-fast)]',
      'text-sm',
      'min-h-[80px]', // Default min height, can be overridden
      'disabled:opacity-60 disabled:cursor-not-allowed'
    ]"
  ></textarea>
</template>

<script setup lang="ts">
// Define props for v-model and standard textarea attributes
defineProps<{
  modelValue: string | null | undefined; // For v-model
  id?: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  rows?: number;
}>();

// Define emits for v-model update
defineEmits(['update:modelValue']);

</script>

<!-- No <style> block --> 