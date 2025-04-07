<template>
  <div v-if="resume" class="resume-preview">
    <!-- Dynamic component rendering based on templateName -->
    <component :is="selectedTemplateComponent" :resume="resume" />
  </div>
</template>

<script setup lang="ts">
import { computed, defineAsyncComponent } from 'vue'; // Import defineAsyncComponent
import type { ResumeEntityInterface } from '@cv-generator/core';

// --- Template Loading ---
// Define a type for the template components map
type TemplateComponentsMap = {
  [key: string]: ReturnType<typeof defineAsyncComponent>;
};

// Use defineAsyncComponent for lazy loading templates
const templateComponents: TemplateComponentsMap = {
  classic: defineAsyncComponent(() => import('./templates/ClassicTemplate.vue')),
  modern: defineAsyncComponent(() => import('./templates/ModernTemplate.vue')),
  // Add more templates here as they are created
};

// Define props
const props = withDefaults(defineProps<{ 
  resume: ResumeEntityInterface | null;
  templateName?: string; // Optional: Name of the template to use
}>(), {
  templateName: 'classic', // Default to 'classic'
});

// Determine which component to render
const selectedTemplateComponent = computed(() => {
  return templateComponents[props.templateName] || templateComponents.classic; // Fallback to classic
});

// --- Helper Functions (No longer needed here, move to templates or utils) ---
// const formatLocation = (location: LocationInterface | undefined): string => { ... };
// const formatDateRange = (start: string | undefined, end: string | undefined): string => { ... };

</script>

<!-- No <style scoped> block -->