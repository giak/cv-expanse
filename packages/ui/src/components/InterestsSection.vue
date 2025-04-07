<template>
  <div class="interests-section space-y-6">
    <h2 class="text-lg font-semibold border-b border-[--color-border] pb-2 mb-4 text-[--color-text-primary]">Centres d'intérêt</h2>
    <div v-for="(interest, index) in interestsList" :key="index">
      <InterestItemForm v-model="interestsList[index]" @delete="removeInterestItem(index)" />
    </div>
    <div class="mt-4 text-center">
      <BaseButton variant="secondary" @click="addInterestItem">+ Ajouter un centre d'intérêt</BaseButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineModel } from 'vue';
import type { InterestEntityInterface } from '@cv-generator/core';
import InterestItemForm from './InterestItemForm.vue';
import { BaseButton } from './base';

// v-model for the interests array
const interestsList = defineModel<InterestEntityInterface[]>({ required: true });

// Function to add a new blank interest entry
const addInterestItem = () => {
  if (!Array.isArray(interestsList.value)) {
    interestsList.value = [];
  }
  interestsList.value.push({
    name: '',
    keywords: []
  });
};

// Function to remove an interest entry by index
const removeInterestItem = (index: number) => {
  if (Array.isArray(interestsList.value) && index >= 0 && index < interestsList.value.length) {
    interestsList.value.splice(index, 1);
  }
};

</script>