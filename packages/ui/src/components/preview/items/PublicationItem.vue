<template>
  <div class="mb-4 last:mb-0">
    <h4 class="text-lg font-medium text-[--color-text-primary] mb-0.5">
      <a v-if="item.url" :href="item.url" target="_blank" rel="noopener noreferrer" class="text-[--color-primary-600] hover:text-[--color-primary-700] hover:underline">{{ item.name }}</a>
      <span v-else>{{ item.name }}</span>
    </h4>
    <p class="text-base text-[--color-text-secondary] mb-1">
      {{ item.publisher }} - {{ item.releaseDate }}
    </p>
    <p v-if="item.summary" class="text-base text-[--color-text-secondary] leading-relaxed">{{ item.summary }}</p>
  </div>
</template>

<script setup lang="ts">
import type { PublicationEntityInterface } from '@cv-generator/core';

// Define props
const props = defineProps<{
  item: PublicationEntityInterface;
}>();
</script> 