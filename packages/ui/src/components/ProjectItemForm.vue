<template>
  <CardWrapper :noPadding="true" class="mb-6">
    <template #header>
      <div class="flex justify-between items-center">
        <h4 class="text-md font-semibold text-[--color-text-primary]">Projet</h4>
        <BaseButton 
            variant="danger" 
            @click="$emit('delete')" 
            aria-label="Supprimer ce projet"
            class="px-2 py-0.5 text-xs"
        >
          &times;
        </BaseButton>
      </div>
    </template>

    <!-- Default slot for card content -->
    <div class="p-4 grid grid-cols-1 md:grid-cols-2 gap-x-4">
        <FormGroup>
            <template #label>
                <FormLabel :for="`project-name-${uuid}`">Nom du Projet</FormLabel>
            </template>
            <BaseInput :id="`project-name-${uuid}`" type="text" v-model="model.name" placeholder="Ex: Mon Super Projet" />
        </FormGroup>
        
        <FormGroup>
            <template #label>
                <FormLabel :for="`project-url-${uuid}`">URL (Optionnel)</FormLabel>
            </template>
            <BaseInput :id="`project-url-${uuid}`" type="url" v-model="model.url" placeholder="https://github.com/user/repo" />
        </FormGroup>

        <FormGroup>
             <template #label>
                <FormLabel :for="`project-startDate-${uuid}`">Date début</FormLabel>
             </template>
            <BaseInput :id="`project-startDate-${uuid}`" type="text" v-model="model.startDate" placeholder="YYYY-MM ou YYYY" />
        </FormGroup>

        <FormGroup>
             <template #label>
                <FormLabel :for="`project-endDate-${uuid}`">Date fin</FormLabel>
             </template>
            <BaseInput :id="`project-endDate-${uuid}`" type="text" v-model="model.endDate" placeholder="YYYY-MM, YYYY ou En cours" />
        </FormGroup>

         <FormGroup>
             <template #label>
                <FormLabel :for="`project-entity-${uuid}`">Entité (Optionnel)</FormLabel>
             </template>
            <BaseInput :id="`project-entity-${uuid}`" type="text" v-model="model.entity" placeholder="Ex: Nom entreprise, École" />
        </FormGroup>

         <FormGroup>
             <template #label>
                <FormLabel :for="`project-type-${uuid}`">Type (Optionnel)</FormLabel>
             </template>
            <BaseInput :id="`project-type-${uuid}`" type="text" v-model="model.type" placeholder="Ex: Application Web, API REST" />
        </FormGroup>

        <FormGroup fullWidth>
             <template #label>
                <FormLabel :for="`project-description-${uuid}`">Description</FormLabel>
             </template>
            <BaseTextarea :id="`project-description-${uuid}`" v-model="model.description" :rows="3"
                          placeholder="Description du projet..." />
        </FormGroup>

        <FormGroup fullWidth>
             <template #label>
                <FormLabel :for="`project-roles-${uuid}`">Rôles (un par ligne)</FormLabel>
             </template>
            <BaseTextarea :id="`project-roles-${uuid}`" v-model="rolesText" :rows="3"
                          placeholder="- Développement front-end\n- Gestion de projet" />
        </FormGroup>
        
        <FormGroup fullWidth>
             <template #label>
                <FormLabel :for="`project-keywords-${uuid}`">Technologies / Concepts (un par ligne)</FormLabel>
             </template>
            <BaseTextarea :id="`project-keywords-${uuid}`" v-model="keywordsText" :rows="4"
                          placeholder="Vue.js\nTypeScript\nNode.js\nDocker" />
        </FormGroup>
    </div>
  </CardWrapper>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { ProjectEntityInterface } from '@cv-generator/core';
import { v4 as uuidv4 } from 'uuid';
import {
    BaseInput,
    BaseTextarea,
    FormLabel,
    FormGroup,
    BaseButton,
    CardWrapper
} from './base';

const uuid = uuidv4().slice(0, 8);
const model = defineModel<ProjectEntityInterface>({ required: true });
defineEmits(['delete']);

// Computed property for keywords array <-> textarea
const keywordsText = computed({
  get: () => model.value.keywords?.join('\n') ?? '',
  set: (value) => {
    model.value.keywords = value.split('\n').map(line => line.trim()).filter(line => line);
  }
});

// Computed property for roles array <-> textarea
const rolesText = computed({
  get: () => model.value.roles?.join('\n') ?? '',
  set: (value) => {
    model.value.roles = value.split('\n').map(line => line.trim()).filter(line => line);
  }
});

</script> 