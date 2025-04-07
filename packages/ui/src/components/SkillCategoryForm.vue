<template>
  <CardWrapper :noPadding="true" class="mb-6">
    <template #header>
      <div class="flex justify-between items-center">
        <!-- Editable category name -->
        <input 
            :id="`skill-name-${uuid}`"
            type="text" 
            v-model="model.name" 
            placeholder="Nom de la catégorie (Ex: Langages)"
            class="flex-grow bg-transparent border-none p-0 text-md font-semibold text-[--color-text-primary] focus:ring-0 mr-3 h-auto"
        />
        <BaseButton 
            variant="danger" 
            @click="$emit('delete')" 
            aria-label="Supprimer cette catégorie de compétences"
            class="px-2 py-0.5 text-xs"
        >
          &times;
        </BaseButton>
      </div>
    </template>

    <!-- Default slot for card content -->
    <div class="p-4">
        <!-- Optional Level Field -->
        <FormGroup class="mb-3">
            <template #label>
                <FormLabel :for="`skill-level-${uuid}`">Niveau (Optionnel)</FormLabel>
            </template>
            <BaseInput :id="`skill-level-${uuid}`" type="text" v-model="model.level" placeholder="Ex: Avancé, Intermédiaire" />
        </FormGroup>

        <!-- Keywords Textarea -->
        <FormGroup>
             <template #label>
                <FormLabel :for="`skill-keywords-${uuid}`">Compétences / Mots-clés (un par ligne)</FormLabel>
             </template>
            <BaseTextarea :id="`skill-keywords-${uuid}`" v-model="keywordsText" :rows="4"
                          placeholder="JavaScript\nPython\nSQL\nDocker" />
        </FormGroup>
    </div>
  </CardWrapper>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { SkillEntityInterface } from '@cv-generator/core';
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
const model = defineModel<SkillEntityInterface>({ required: true });
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