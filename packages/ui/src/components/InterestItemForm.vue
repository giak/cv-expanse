<template>
  <CardWrapper :noPadding="true" class="mb-6">
    <template #header>
      <div class="flex justify-between items-center">
        <!-- Editable interest name -->
        <input 
            :id="`interest-name-${uuid}`"
            type="text" 
            v-model="model.name" 
            placeholder="Nom du centre d'intérêt (ex: Photographie)"
            class="flex-grow bg-transparent border-none p-0 text-md font-semibold text-[--color-text-primary] focus:ring-0 mr-3 h-auto"
        />
        <BaseButton 
            variant="danger" 
            @click="$emit('delete')" 
            aria-label="Supprimer ce centre d'intérêt"
            class="px-2 py-0.5 text-xs"
        >
          &times;
        </BaseButton>
      </div>
    </template>

    <!-- Default slot for card content -->
    <div class="p-4">
        <FormGroup>
             <template #label>
                <FormLabel :for="`interest-keywords-${uuid}`">Mots-clés (un par ligne)</FormLabel>
             </template>
            <BaseTextarea :id="`interest-keywords-${uuid}`" v-model="keywordsText" :rows="3"
                          placeholder="Paysage\nPortrait\nVoyage" />
        </FormGroup>
    </div>
  </CardWrapper>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { InterestEntityInterface } from '@cv-generator/core';
import { v4 as uuidv4 } from 'uuid';
import {
    BaseTextarea,
    FormLabel,
    FormGroup,
    BaseButton,
    CardWrapper
} from './base';

const uuid = uuidv4().slice(0, 8);
const model = defineModel<InterestEntityInterface>({ required: true });
defineEmits(['delete']);

// Computed property for keywords array <-> textarea
const keywordsText = computed({
  get: () => model.value.keywords?.join('\n') ?? '',
  set: (value) => {
    model.value.keywords = value.split('\n').map(line => line.trim()).filter(line => line);
  }
});

</script>

<!-- Style block removed --> 