<template>
  <div class="mb-3 last:mb-0">
    <h4 class="text-lg font-medium text-[--color-text-primary] mb-1">
      {{ item.name }}
      <span v-if="item.level" class="text-sm text-[--color-text-tertiary] font-normal"> ({{ item.level }})</span>
    </h4>
    <p v-if="item.keywords && item.keywords.length > 0" class="text-base text-[--color-text-secondary] leading-relaxed">
      {{ item.keywords.join(', ') }}
    </p>
  </div>
</template>

<script setup lang="ts">
import type { SkillEntityInterface } from '@cv-generator/core';

// Define props
const props = defineProps<{
  item: SkillEntityInterface;
}>();
</script> 