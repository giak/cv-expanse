<template>
  <div class="mb-4 last:mb-0">
    <div class="flex justify-between items-baseline mb-1">
      <h4 class="text-lg font-medium text-[--color-text-primary]">{{ item.position }}</h4>
      <span class="text-sm text-[--color-text-tertiary]">{{ formatDateRange(item.startDate, item.endDate) }}</span>
    </div>
    <p class="text-md font-normal text-[--color-text-secondary] mb-1">
      <a v-if="item.url" :href="item.url" target="_blank" rel="noopener noreferrer" class="text-[--color-primary-600] hover:text-[--color-primary-700] hover:underline">{{ item.organization }}</a>
      <span v-else>{{ item.organization }}</span>
    </p>
    <p v-if="item.summary" class="text-base text-[--color-text-secondary] leading-relaxed mb-2">{{ item.summary }}</p>
    <ul v-if="item.highlights && item.highlights.length > 0" class="list-disc list-inside text-base text-[--color-text-secondary] space-y-1 pl-4">
      <li v-for="(highlight, hIndex) in item.highlights" :key="hIndex">{{ highlight }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { VolunteerEntityInterface } from '@cv-generator/core';

// Define props
const props = defineProps<{
  item: VolunteerEntityInterface;
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