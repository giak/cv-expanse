<template>
  <div :class="['mb-4', { 'md:col-span-2': fullWidth }]">
    <!-- Slot for Label (e.g., <FormLabel>) -->
    <slot name="label"></slot>
    
    <!-- Default Slot for Input/Textarea/Select (e.g., <BaseInput>) -->
    <slot></slot>

    <!-- Optional Slot for description or error message -->
    <slot name="description"></slot>
    <slot name="error"></slot>
  </div>
</template>

<script setup lang="ts">
// Prop to allow spanning multiple columns in a grid layout
defineProps<{
  fullWidth?: boolean;
}>();
</script>

<!-- No <style> block --> 