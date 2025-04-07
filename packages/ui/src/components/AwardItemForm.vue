<template>
  <CardWrapper :noPadding="true" class="mb-6">
    <template #header>
      <div class="flex justify-between items-center">
        <h4 class="text-md font-semibold text-[--color-text-primary]">Récompense / Distinction</h4>
        <BaseButton 
            variant="danger" 
            @click="$emit('delete')" 
            aria-label="Supprimer cette récompense"
            class="px-2 py-0.5 text-xs"
        >
          &times;
        </BaseButton>
      </div>
    </template>

    <!-- Default slot for card content -->
    <div class="p-4 grid grid-cols-1 md:grid-cols-2 gap-x-4">
        <FormGroup fullWidth>
            <template #label>
                <FormLabel :for="`award-title-${uuid}`">Titre</FormLabel>
            </template>
            <BaseInput :id="`award-title-${uuid}`" type="text" v-model="model.title" placeholder="Ex: Gagnant Hackathon XYZ" />
        </FormGroup>
        
        <FormGroup>
            <template #label>
                <FormLabel :for="`award-awarder-${uuid}`">Organisation</FormLabel>
            </template>
            <BaseInput :id="`award-awarder-${uuid}`" type="text" v-model="model.awarder" placeholder="Ex: Tech Events Inc." />
        </FormGroup>

        <FormGroup>
             <template #label>
                <FormLabel :for="`award-date-${uuid}`">Date</FormLabel>
             </template>
            <BaseInput :id="`award-date-${uuid}`" type="text" v-model="model.date" placeholder="YYYY-MM-DD ou YYYY" />
        </FormGroup>

        <FormGroup fullWidth>
             <template #label>
                <FormLabel :for="`award-summary-${uuid}`">Résumé (Optionnel)</FormLabel>
             </template>
            <BaseTextarea :id="`award-summary-${uuid}`" v-model="model.summary" :rows="2"
                          placeholder="Brève description..." 
                          class="min-h-[60px]"/>
        </FormGroup>
    </div>
  </CardWrapper>
</template>

<script setup lang="ts">
import type { AwardEntityInterface } from '@cv-generator/core';
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
const model = defineModel<AwardEntityInterface>({ required: true });
defineEmits(['delete']);

</script>

<!-- Style block removed --> 