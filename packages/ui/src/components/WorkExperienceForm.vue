<template>
  <CardWrapper :noPadding="true" class="mb-6">
    <template #header>
      <div class="flex justify-between items-center">
        <h4 class="text-md font-semibold text-[--color-text-primary]">Expérience Professionnelle</h4>
        <BaseButton 
            variant="danger" 
            @click="$emit('delete')" 
            aria-label="Supprimer cette expérience professionnelle"
            class="px-2 py-0.5 text-xs"
        >
          &times;
        </BaseButton>
      </div>
    </template>

    <div class="p-4 grid grid-cols-1 md:grid-cols-2 gap-x-4">
        <FormGroup>
            <template #label>
                <FormLabel :for="`work-name-${uuid}`">Entreprise</FormLabel>
            </template>
            <BaseInput :id="`work-name-${uuid}`" type="text" v-model="model.name" placeholder="Nom de l'entreprise" />
        </FormGroup>
        
        <FormGroup>
            <template #label>
                <FormLabel :for="`work-position-${uuid}`">Poste</FormLabel>
            </template>
            <BaseInput :id="`work-position-${uuid}`" type="text" v-model="model.position" placeholder="Poste occupé" />
        </FormGroup>

        <FormGroup>
            <template #label>
                <FormLabel :for="`work-url-${uuid}`">URL Entreprise</FormLabel>
            </template>
            <BaseInput :id="`work-url-${uuid}`" type="url" v-model="model.url" placeholder="https://entreprise.com" />
        </FormGroup>

        <FormGroup>
             <template #label>
                <FormLabel :for="`work-location-${uuid}`">Lieu</FormLabel>
             </template>
            <BaseInput :id="`work-location-${uuid}`" type="text" v-model="model.location" placeholder="Ville, Pays" />
        </FormGroup>

        <FormGroup>
             <template #label>
                <FormLabel :for="`work-startDate-${uuid}`">Date début</FormLabel>
             </template>
            <BaseInput :id="`work-startDate-${uuid}`" type="text" v-model="model.startDate" placeholder="YYYY-MM ou YYYY" />
        </FormGroup>

        <FormGroup>
             <template #label>
                <FormLabel :for="`work-endDate-${uuid}`">Date fin</FormLabel>
             </template>
            <BaseInput :id="`work-endDate-${uuid}`" type="text" v-model="model.endDate" placeholder="YYYY-MM, YYYY ou Présent" />
        </FormGroup>

        <FormGroup fullWidth>
             <template #label>
                <FormLabel :for="`work-summary-${uuid}`">Résumé du poste</FormLabel>
             </template>
            <BaseTextarea :id="`work-summary-${uuid}`" v-model="model.summary" :rows="3"
                          placeholder="Brève description de vos responsabilités..." />
        </FormGroup>

        <FormGroup fullWidth>
             <template #label>
                <FormLabel :for="`work-highlights-${uuid}`">Points clés / Réalisations (un par ligne)</FormLabel>
             </template>
            <BaseTextarea :id="`work-highlights-${uuid}`" v-model="highlightsText" :rows="5"
                          placeholder="- Projet X : augmentation de Y%\n- Management d'une équipe de Z personnes" />
        </FormGroup>
    </div>
  </CardWrapper>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { WorkExperienceEntityInterface } from '@cv-generator/core';
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
const model = defineModel<WorkExperienceEntityInterface>({ required: true });
defineEmits(['delete']);

const highlightsText = computed({
  get: () => model.value.highlights?.join('\n') ?? '',
  set: (value) => {
    model.value.highlights = value.split('\n').map(line => line.trim()).filter(line => line);
  }
});

</script> 