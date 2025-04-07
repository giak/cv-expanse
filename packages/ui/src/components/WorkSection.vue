<template>
  <div class="space-y-6">
    <h2 class="text-lg font-semibold border-b border-[--color-border] pb-2 mb-4 text-[--color-text-primary]">Expériences Professionnelles</h2>
    
    <!-- Loop through work experiences -->
    <WorkExperienceForm 
        v-for="(experience, index) in workList"
        :key="index" 
        v-model="workList[index]"
        @delete="removeWorkExperience(index)"
    />
    
    <!-- Add button -->
    <div class="mt-4 text-center">
        <BaseButton variant="secondary" @click="addWorkExperience">+ Ajouter une expérience</BaseButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineModel } from 'vue';
import type { WorkExperienceEntityInterface } from '@cv-generator/core';
import WorkExperienceForm from './WorkExperienceForm.vue';
import { BaseButton } from './base'; // Import BaseButton

// v-model for the work experience array
const workList = defineModel<WorkExperienceEntityInterface[]>({ required: true });

// Function to add a new blank work experience entry
const addWorkExperience = () => {
  // Ensure the array exists before pushing
  if (!Array.isArray(workList.value)) {
      workList.value = [];
  }
  workList.value.push({
    name: '',
    position: '',
    url: '',
    startDate: '',
    endDate: '',
    summary: '',
    highlights: [],
    location: ''
  });
};

// Function to remove a work experience entry by index
const removeWorkExperience = (index: number) => {
  if (Array.isArray(workList.value) && index >= 0 && index < workList.value.length) {
    workList.value.splice(index, 1);
  }
};

</script> 