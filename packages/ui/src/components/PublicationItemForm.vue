<template>
  <CardWrapper :noPadding="true" class="mb-6">
    <template #header>
      <div class="flex justify-between items-center">
        <h4 class="text-md font-semibold text-[--color-text-primary]">Publication</h4>
        <BaseButton 
            variant="danger" 
            @click="$emit('delete')" 
            aria-label="Supprimer cette publication"
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
                <FormLabel :for="`pub-name-${uuid}`">Nom de la Publication</FormLabel>
            </template>
            <BaseInput :id="`pub-name-${uuid}`" type="text" v-model="model.name" placeholder="Ex: My Awesome Paper" />
        </FormGroup>
        
        <FormGroup>
            <template #label>
                <FormLabel :for="`pub-publisher-${uuid}`">Éditeur</FormLabel>
            </template>
            <BaseInput :id="`pub-publisher-${uuid}`" type="text" v-model="model.publisher" placeholder="Ex: ACM, IEEE" />
        </FormGroup>

        <FormGroup>
             <template #label>
                <FormLabel :for="`pub-releaseDate-${uuid}`">Date de Publication</FormLabel>
             </template>
            <BaseInput :id="`pub-releaseDate-${uuid}`" type="text" v-model="model.releaseDate" placeholder="YYYY-MM-DD ou YYYY" />
        </FormGroup>

        <FormGroup fullWidth>
             <template #label>
                <FormLabel :for="`pub-url-${uuid}`">URL (Optionnel)</FormLabel>
             </template>
            <BaseInput :id="`pub-url-${uuid}`" type="url" v-model="model.url" placeholder="Lien vers la publication (DOI, etc.)" />
        </FormGroup>

        <FormGroup fullWidth>
             <template #label>
                <FormLabel :for="`pub-summary-${uuid}`">Résumé (Optionnel)</FormLabel>
             </template>
            <BaseTextarea :id="`pub-summary-${uuid}`" v-model="model.summary" :rows="3"
                          placeholder="Brève description de la publication..." />
        </FormGroup>
    </div>
  </CardWrapper>
</template>

<script setup lang="ts">
import type { PublicationEntityInterface } from '@cv-generator/core';
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
const model = defineModel<PublicationEntityInterface>({ required: true });
defineEmits(['delete']);

</script> 