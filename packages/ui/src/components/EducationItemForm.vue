<template>
  <CardWrapper :noPadding="true" class="mb-6">
    <template #header>
      <div class="flex justify-between items-center">
        <h4 class="text-md font-semibold text-[--color-text-primary]">Formation</h4>
        <BaseButton 
            variant="danger" 
            @click="$emit('delete')" 
            aria-label="Supprimer cette formation"
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
                <FormLabel :for="`edu-institution-${uuid}`">Établissement</FormLabel>
            </template>
            <BaseInput :id="`edu-institution-${uuid}`" type="text" v-model="model.institution" placeholder="Nom de l'école ou université" />
        </FormGroup>
        
        <FormGroup>
            <template #label>
                <FormLabel :for="`edu-url-${uuid}`">URL Établissement (Optionnel)</FormLabel>
            </template>
            <BaseInput :id="`edu-url-${uuid}`" type="url" v-model="model.url" placeholder="https://ecole.com" />
        </FormGroup>

        <FormGroup>
             <template #label>
                <FormLabel :for="`edu-area-${uuid}`">Domaine d'étude</FormLabel>
             </template>
            <BaseInput :id="`edu-area-${uuid}`" type="text" v-model="model.area" placeholder="Ex: Informatique, Lettres" />
        </FormGroup>

        <FormGroup>
             <template #label>
                <FormLabel :for="`edu-studyType-${uuid}`">Type de diplôme</FormLabel>
             </template>
            <BaseInput :id="`edu-studyType-${uuid}`" type="text" v-model="model.studyType" placeholder="Ex: Licence, Master, BTS" />
        </FormGroup>

        <FormGroup>
             <template #label>
                <FormLabel :for="`edu-startDate-${uuid}`">Date début</FormLabel>
             </template>
            <BaseInput :id="`edu-startDate-${uuid}`" type="text" v-model="model.startDate" placeholder="YYYY-MM ou YYYY" />
        </FormGroup>

        <FormGroup>
             <template #label>
                <FormLabel :for="`edu-endDate-${uuid}`">Date fin</FormLabel>
             </template>
            <BaseInput :id="`edu-endDate-${uuid}`" type="text" v-model="model.endDate" placeholder="YYYY-MM, YYYY ou Présent" />
        </FormGroup>

        <FormGroup fullWidth>
             <template #label>
                <FormLabel :for="`edu-score-${uuid}`">Score / Mention (Optionnel)</FormLabel>
             </template>
            <BaseInput :id="`edu-score-${uuid}`" type="text" v-model="model.score" placeholder="Ex: 3.8/4.0, Mention Très Bien" />
        </FormGroup>

        <FormGroup fullWidth>
             <template #label>
                <FormLabel :for="`edu-courses-${uuid}`">Cours pertinents (un par ligne)</FormLabel>
             </template>
            <BaseTextarea :id="`edu-courses-${uuid}`" v-model="coursesText" :rows="4"
                          placeholder="- Algorithmique Avancée\n- Systèmes Distribués" />
        </FormGroup>
    </div>
  </CardWrapper>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { EducationEntityInterface } from '@cv-generator/core';
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
const model = defineModel<EducationEntityInterface>({ required: true });
defineEmits(['delete']);

// Computed property for courses array <-> textarea
const coursesText = computed({
  get: () => model.value.courses?.join('\n') ?? '',
  set: (value) => {
    model.value.courses = value.split('\n').map(line => line.trim()).filter(line => line);
  }
});

</script>

<!-- Style block removed --> 