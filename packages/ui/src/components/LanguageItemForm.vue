<template>
  <div class="language-item-form grid grid-cols-1 sm:grid-cols-[1fr_1fr_auto] gap-3 items-end p-3 border border-[--color-border] rounded-[--radius-md] mb-3 bg-[--color-bg-card]">
    <FormGroup class="mb-0">
      <template #label>
        <FormLabel :for="`lang-name-${uuid}`" class="!mb-0.5 text-xs">Langue</FormLabel>
      </template>
      <BaseInput :id="`lang-name-${uuid}`" type="text" v-model="model.language" placeholder="Ex: Français, Anglais" class="px-2 py-1 text-sm" />
    </FormGroup>
    
    <FormGroup class="mb-0">
       <template #label>
        <FormLabel :for="`lang-fluency-${uuid}`" class="!mb-0.5 text-xs">Niveau</FormLabel>
       </template>
      <BaseInput :id="`lang-fluency-${uuid}`" type="text" v-model="model.fluency" placeholder="Ex: Natif, Courant, C1" class="px-2 py-1 text-sm" />
      <!-- Alternative: Dropdown/Select -->
      <!--
      <select :id="`lang-fluency-${uuid}`" v-model="model.fluency"
             class="block w-full px-2 py-1 bg-neutral-600 border border-neutral-500 rounded-md shadow-sm text-sm text-neutral-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:border-primary-500">
        <option value="" class="text-neutral-500">-- Sélectionner --</option>
        <option value="Natif">Natif</option>
        <option value="Bilingue">Bilingue</option>
        <option value="Courant">Courant</option>
        <option value="Intermédiaire (Avancé)">Intermédiaire (Avancé)</option>
        <option value="Intermédiaire">Intermédiaire</option>
        <option value="Débutant">Débutant</option>
      </select>
      -->
    </FormGroup>
    
    <BaseButton 
        variant="danger" 
        @click="$emit('delete')" 
        aria-label="Supprimer cette langue"
        class="px-2 py-1.5 text-xs self-end mb-px sm:justify-self-end"
    >
      &times;
    </BaseButton>
  </div>
</template>

<script setup lang="ts">
import type { LanguageEntityInterface } from '@cv-generator/core';
import { v4 as uuidv4 } from 'uuid';
import { 
    BaseInput, 
    FormLabel, 
    FormGroup, 
    BaseButton 
} from './base';

const uuid = uuidv4().slice(0, 8);
const model = defineModel<LanguageEntityInterface>({ required: true });
defineEmits(['delete']);

</script>

<!-- Style block removed --> 