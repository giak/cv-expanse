<template>
  <div class="publications-section space-y-6">
    <h2 class="text-lg font-semibold border-b border-[--color-border] pb-2 mb-4 text-[--color-text-primary]">Publications</h2>
    <div v-for="(publication, index) in publicationsList" :key="index">
      <PublicationItemForm v-model="publicationsList[index]" @delete="removePublicationItem(index)" />
    </div>
    <div class="mt-4 text-center">
      <BaseButton variant="secondary" @click="addPublicationItem">+ Ajouter une publication</BaseButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineModel } from 'vue';
import type { PublicationEntityInterface } from '@cv-generator/core';
import PublicationItemForm from './PublicationItemForm.vue';
import { BaseButton } from './base';

// v-model for the publications array
const publicationsList = defineModel<PublicationEntityInterface[]>({ required: true });

// Function to add a new blank publication entry
const addPublicationItem = () => {
  if (!Array.isArray(publicationsList.value)) {
    publicationsList.value = [];
  }
  publicationsList.value.push({
    name: '',
    publisher: '',
    releaseDate: '',
    url: '',
    summary: ''
  });
};

// Function to remove a publication entry by index
const removePublicationItem = (index: number) => {
  if (Array.isArray(publicationsList.value) && index >= 0 && index < publicationsList.value.length) {
    publicationsList.value.splice(index, 1);
  }
};

</script> 