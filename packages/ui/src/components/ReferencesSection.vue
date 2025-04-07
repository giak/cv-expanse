<template>
  <div class="references-section space-y-6">
    <h2 class="text-lg font-semibold border-b border-[--color-border] pb-2 mb-4 text-[--color-text-primary]">Références</h2>
    <div v-for="(reference, index) in referencesList" :key="index">
        <ReferenceItemForm v-model="referencesList[index]" @delete="removeReferenceItem(index)"/>
    </div>
    <div class="mt-4 text-center">
        <BaseButton variant="secondary" @click="addReferenceItem">+ Ajouter une référence</BaseButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineModel } from 'vue';
import type { ReferenceEntityInterface } from '@cv-generator/core';
import ReferenceItemForm from './ReferenceItemForm.vue';
import { BaseButton } from './base';

// v-model for the references array
const referencesList = defineModel<ReferenceEntityInterface[]>({ required: true });

// Function to add a new blank reference entry
const addReferenceItem = () => {
  if (!Array.isArray(referencesList.value)) {
    referencesList.value = [];
  }
  referencesList.value.push({
    name: '',
    reference: ''
  });
};

// Function to remove a reference entry by index
const removeReferenceItem = (index: number) => {
  if (Array.isArray(referencesList.value) && index >= 0 && index < referencesList.value.length) {
    referencesList.value.splice(index, 1);
  }
};

</script> 