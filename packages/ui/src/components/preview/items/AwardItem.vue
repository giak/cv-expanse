<template>
  <div class="mb-4 last:mb-0">
    <h4 class="text-lg font-medium text-[--color-text-primary] mb-0.5">{{ item.title }}</h4>
    <p class="text-base text-[--color-text-secondary] mb-1">
      {{ item.awarder }} - {{ item.date }}
    </p>
    <p v-if="item.summary" class="text-base text-[--color-text-secondary] leading-relaxed">{{ item.summary }}</p>
  </div>
</template>

<script setup lang="ts">
import type { AwardEntityInterface } from '@cv-generator/core';

// Define props
const props = defineProps<{
  item: AwardEntityInterface;
}>();
</script> 