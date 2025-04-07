<template>
  <div class="languages-section space-y-6">
    <h2 class="text-lg font-semibold border-b border-[--color-border] pb-2 mb-4 text-[--color-text-primary]">Langues</h2>
    <div v-for="(language, index) in languagesList" :key="index">
      <LanguageItemForm v-model="languagesList[index]" @delete="removeLanguageItem(index)" />
    </div>
    <div class="mt-4 text-center">
      <BaseButton variant="secondary" @click="addLanguageItem">+ Ajouter une langue</BaseButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineModel } from 'vue';
import type { LanguageEntityInterface } from '@cv-generator/core';
import LanguageItemForm from './LanguageItemForm.vue';
import { BaseButton } from './base';

// v-model for the languages array
const languagesList = defineModel<LanguageEntityInterface[]>({ required: true });

// Function to add a new blank language entry
const addLanguageItem = () => {
  if (!Array.isArray(languagesList.value)) {
    languagesList.value = [];
  }
  languagesList.value.push({
    language: '',
    fluency: ''
  });
};

// Function to remove a language entry by index
const removeLanguageItem = (index: number) => {
  if (Array.isArray(languagesList.value) && index >= 0 && index < languagesList.value.length) {
    languagesList.value.splice(index, 1);
  }
};

</script> 