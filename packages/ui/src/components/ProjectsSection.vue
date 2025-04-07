<template>
  <div class="projects-section space-y-6">
    <h2 class="text-lg font-semibold border-b border-[--color-border] pb-2 mb-4 text-[--color-text-primary]">Projets</h2>
    <div v-for="(project, index) in projectsList" :key="index">
      <ProjectItemForm v-model="projectsList[index]" @delete="removeProject(index)" />
    </div>
    <div class="mt-4 text-center">
      <BaseButton variant="secondary" @click="addProject">+ Ajouter un projet</BaseButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineModel } from 'vue';
import type { ProjectEntityInterface } from '@cv-generator/core';
import ProjectItemForm from './ProjectItemForm.vue';
import { BaseButton } from './base';

const projectsList = defineModel<ProjectEntityInterface[]>({ required: true });

const addProject = () => {
  if (!Array.isArray(projectsList.value)) {
    projectsList.value = [];
  }
  projectsList.value.push({
    name: '',
    description: '',
    url: '',
    keywords: [],
    roles: []
  });
};

const removeProject = (index: number) => {
  if (Array.isArray(projectsList.value) && index >= 0 && index < projectsList.value.length) {
    projectsList.value.splice(index, 1);
  }
};

</script> 