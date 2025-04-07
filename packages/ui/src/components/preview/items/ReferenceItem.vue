<template>
  <div class="mb-2 last:mb-0">
    <p class="text-base text-[--color-text-secondary]">
       <strong class="font-medium text-[--color-text-primary]">{{ item.name }}:</strong> {{ item.reference }}
    </p>
  </div>
</template>

<script setup lang="ts">
import type { ReferenceEntityInterface } from '@cv-generator/core';

// Define props
const props = defineProps<{
  item: ReferenceEntityInterface;
}>();
</script>