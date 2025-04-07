<template>
  <div class="education-section space-y-6">
    <h2 class="text-lg font-semibold border-b border-[--color-border] pb-2 mb-4 text-[--color-text-primary]">Formation</h2>
    <div v-for="(item, index) in educationList" :key="index">
        <EducationItemForm v-model="educationList[index]" @delete="removeEducationItem(index)"/>
    </div>
    <div class="mt-4 text-center">
        <BaseButton variant="secondary" @click="addEducationItem">+ Ajouter une formation</BaseButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineModel } from 'vue';
import type { EducationEntityInterface } from '@cv-generator/core';
import EducationItemForm from './EducationItemForm.vue';
import { BaseButton } from './base';

// v-model for the education array
const educationList = defineModel<EducationEntityInterface[]>({ required: true });

// Function to add a new blank education entry
const addEducationItem = () => {
  if (!Array.isArray(educationList.value)) {
      educationList.value = [];
  }
  educationList.value.push({
    institution: '',
    url: '',
    area: '',
    studyType: '',
    startDate: '',
    endDate: '',
    score: '',
    courses: []
  });
};

// Function to remove an education entry by index
const removeEducationItem = (index: number) => {
  if (Array.isArray(educationList.value) && index >= 0 && index < educationList.value.length) {
    educationList.value.splice(index, 1);
  }
};

</script>

<!-- Style block removed --> 