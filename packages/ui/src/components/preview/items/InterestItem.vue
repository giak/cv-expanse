<template>
  <div class="mb-2 last:mb-0">
    <h4 class="text-lg font-medium text-[--color-text-primary] inline mr-2">{{ item.name }}</h4>
    <span v-if="item.keywords && item.keywords.length > 0" class="text-base text-[--color-text-secondary]">
      ({{ item.keywords.join(', ') }})
    </span>
  </div>
</template>

<script setup lang="ts">
import type { InterestEntityInterface } from '@cv-generator/core';

// Define props
const props = defineProps<{
  item: InterestEntityInterface;
}>();
</script> 