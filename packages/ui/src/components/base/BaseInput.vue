<template>
  <input
    :value="modelValue" 
    @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    :type="type"
    :id="id"
    :placeholder="placeholder"
    :disabled="disabled"
    :required="required"
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
      'disabled:opacity-60 disabled:cursor-not-allowed'
    ]"
  />
</template>

<script setup lang="ts">
// Define props for v-model and standard input attributes
defineProps<{
  modelValue: string | number | null | undefined; // For v-model
  id?: string;
  type?: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
}>();

// Define emits for v-model update
defineEmits(['update:modelValue']);

// No reactive logic needed inside this simple base component
</script>

<!-- No <style> block --> 