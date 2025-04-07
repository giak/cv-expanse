<template>
  <div class="volunteer-section space-y-6">
    <h2 class="text-lg font-semibold border-b border-[--color-border] pb-2 mb-4 text-[--color-text-primary]">Bénévolat</h2>
    <div v-for="(volunteer, index) in volunteerList" :key="index">
      <VolunteerItemForm v-model="volunteerList[index]" @delete="removeVolunteerItem(index)" />
    </div>
    <div class="mt-4 text-center">
      <BaseButton variant="secondary" @click="addVolunteerItem">+ Ajouter une expérience de bénévolat</BaseButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineModel } from 'vue';
import type { VolunteerEntityInterface } from '@cv-generator/core';
import VolunteerItemForm from './VolunteerItemForm.vue';
import { BaseButton } from './base';

const volunteerList = defineModel<VolunteerEntityInterface[]>({ required: true });

const addVolunteerItem = () => {
  if (!Array.isArray(volunteerList.value)) {
    volunteerList.value = [];
  }
  volunteerList.value.push({
    organization: '',
    position: '',
    startDate: '',
    endDate: '',
    summary: '',
    url: '',
    highlights: [],
  });
};

const removeVolunteerItem = (index: number) => {
  if (Array.isArray(volunteerList.value) && index >= 0 && index < volunteerList.value.length) {
    volunteerList.value.splice(index, 1);
  }
};
</script> 