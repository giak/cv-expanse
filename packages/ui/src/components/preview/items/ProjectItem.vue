<template>
  <div class="mb-4 last:mb-0">
    <div class="flex justify-between items-baseline mb-1">
      <h4 class="text-lg font-medium text-[--color-text-primary]">
         <a v-if="item.url" :href="item.url" target="_blank" rel="noopener noreferrer" class="text-[--color-primary-600] hover:text-[--color-primary-700] hover:underline">{{ item.name }}</a>
         <span v-else>{{ item.name }}</span>
      </h4>
      <span class="text-sm text-[--color-text-tertiary]">{{ formatDateRange(item.startDate, item.endDate) }}</span>
    </div>
    <p v-if="item.entity || item.type" class="text-md font-normal text-[--color-text-secondary] mb-1">
       <span v-if="item.entity">{{ item.entity }}</span>
       <span v-if="item.entity && item.type"> - </span>
       <span v-if="item.type">{{ item.type }}</span>
    </p>
    <p v-if="item.description" class="text-base text-[--color-text-secondary] leading-relaxed mb-2">{{ item.description }}</p>
    <ul v-if="item.roles && item.roles.length > 0" class="list-disc list-inside text-base text-[--color-text-secondary] space-y-1 pl-4 mb-2">
      <li v-for="(role, rIndex) in item.roles" :key="rIndex">{{ role }}</li>
    </ul>
    <p v-if="item.keywords && item.keywords.length > 0" class="text-sm text-[--color-text-secondary] leading-relaxed">
      <span class="font-medium text-[--color-text-primary]">Technologies:</span> {{ item.keywords.join(', ') }}
    </p>
  </div>
</template>

<script setup lang="ts">
import type { ProjectEntityInterface } from '@cv-generator/core';

// Define props
const props = defineProps<{
  item: ProjectEntityInterface;
}>();

// Helper function to format date ranges (copied from ResumePreview for now)
// TODO: Consider moving helper functions to a shared utility file
const formatDateRange = (start: string | undefined, end: string | undefined): string => {
    if (!start && !end) return '';
    if (start && !end) return `${start} - Présent`;
    if (!start && end) return `Jusqu'à ${end}`;
    if (start === end) return start ?? '';
    return `${start} - ${end}`;
};
</script> 