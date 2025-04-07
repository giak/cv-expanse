<template>
  <div class="awards-section space-y-6">
    <h2 class="text-lg font-semibold border-b border-[--color-border] pb-2 mb-4 text-[--color-text-primary]">Prix et Récompenses</h2>
    <div v-for="(award, index) in awardsList" :key="index">
      <AwardItemForm v-model="awardsList[index]" @delete="removeAwardItem(index)" />
    </div>
    <div class="mt-4 text-center">
      <BaseButton variant="secondary" @click="addAwardItem">+ Ajouter un prix</BaseButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineModel } from 'vue';
import type { AwardEntityInterface } from '@cv-generator/core';
import AwardItemForm from './AwardItemForm.vue';
import { BaseButton } from './base';

// v-model for the awards array
const awardsList = defineModel<AwardEntityInterface[]>({ required: true });

// Function to add a new blank award entry
const addAwardItem = () => {
  if (!Array.isArray(awardsList.value)) {
    awardsList.value = [];
  }
  awardsList.value.push({
    title: '',
    date: '',
    awarder: '',
    summary: ''
  });
};

// Function to remove an award entry by index
const removeAwardItem = (index: number) => {
  if (Array.isArray(awardsList.value) && index >= 0 && index < awardsList.value.length) {
    awardsList.value.splice(index, 1);
  }
};

</script> 