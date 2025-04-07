<template>
  <div class="skills-section space-y-6">
    <h2 class="text-lg font-semibold border-b border-[--color-border] pb-2 mb-4 text-[--color-text-primary]">Compétences</h2>
    <div v-for="(category, index) in skillsList" :key="index">
      <SkillCategoryForm v-model="skillsList[index]" @delete="removeSkillCategory(index)" />
    </div>
    <div class="mt-4 text-center">
      <BaseButton variant="secondary" @click="addSkillCategory">+ Ajouter une catégorie de compétences</BaseButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineModel } from 'vue';
import type { SkillEntityInterface } from '@cv-generator/core';
import SkillCategoryForm from './SkillCategoryForm.vue';
import { BaseButton } from './base';

// v-model for the skills array (array of categories)
const skillsList = defineModel<SkillEntityInterface[]>({ required: true });

// Function to add a new blank skill category
const addSkillCategory = () => {
  if (!Array.isArray(skillsList.value)) {
      skillsList.value = [];
  }
  skillsList.value.push({
    name: '', // Empty category name initially
    level: '', // Optional level
    keywords: [] // Empty keywords list initially
  });
};

// Function to remove a skill category by index
const removeSkillCategory = (index: number) => {
  if (Array.isArray(skillsList.value) && index >= 0 && index < skillsList.value.length) {
    skillsList.value.splice(index, 1);
  }
};

</script> 