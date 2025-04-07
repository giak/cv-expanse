<template>
  <CardWrapper :noPadding="true" class="mb-6">
    <template #header>
      <div class="flex justify-between items-center">
        <h4 class="text-md font-semibold text-[--color-text-primary]">Référence</h4>
        <BaseButton 
            variant="danger" 
            @click="$emit('delete')" 
            aria-label="Supprimer cette référence"
            class="px-2 py-0.5 text-xs"
        >
          &times;
        </BaseButton>
      </div>
    </template>

    <!-- Default slot for card content -->
    <div class="p-4 grid grid-cols-1 md:grid-cols-3 gap-x-4">
        <FormGroup class="md:col-span-1">
            <template #label>
                <FormLabel :for="`ref-name-${uuid}`">Nom</FormLabel>
            </template>
            <BaseInput :id="`ref-name-${uuid}`" type="text" v-model="model.name" placeholder="Ex: Jane Doe" />
        </FormGroup>
        
        <FormGroup class="md:col-span-2">
            <template #label>
                <FormLabel :for="`ref-reference-${uuid}`">Référence / Contact</FormLabel>
            </template>
            <BaseTextarea :id="`ref-reference-${uuid}`" v-model="model.reference" :rows="1"
                          placeholder="Ex: Disponible sur demande, ou détails..." 
                          class="min-h-[40px]"/>
        </FormGroup>
    </div>
  </CardWrapper>
</template>

<script setup lang="ts">
import type { ReferenceEntityInterface } from '@cv-generator/core';
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
const model = defineModel<ReferenceEntityInterface>({ required: true });
defineEmits(['delete']);

</script>

<!-- Style block removed --> 