<template>
  <CardWrapper :noPadding="true" class="mb-6">
    <template #header>
      <div class="flex justify-between items-center">
        <h4 class="text-md font-semibold text-[--color-text-primary]">Expérience Bénévole</h4>
        <BaseButton 
            variant="danger" 
            @click="$emit('delete')" 
            aria-label="Supprimer cette expérience bénévole"
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
                <FormLabel :for="`vol-organization-${uuid}`">Organisation</FormLabel>
            </template>
            <BaseInput :id="`vol-organization-${uuid}`" type="text" v-model="model.organization" placeholder="Nom de l'organisation" />
        </FormGroup>
        
        <FormGroup>
            <template #label>
                <FormLabel :for="`vol-position-${uuid}`">Poste / Rôle</FormLabel>
            </template>
            <BaseInput :id="`vol-position-${uuid}`" type="text" v-model="model.position" placeholder="Rôle occupé" />
        </FormGroup>

        <FormGroup>
             <template #label>
                <FormLabel :for="`vol-url-${uuid}`">URL Organisation (Optionnel)</FormLabel>
             </template>
            <BaseInput :id="`vol-url-${uuid}`" type="url" v-model="model.url" placeholder="https://organisation.org" />
        </FormGroup>

         <FormGroup>
             <!-- Spacer or another field -->
        </FormGroup>

        <FormGroup>
             <template #label>
                <FormLabel :for="`vol-startDate-${uuid}`">Date début</FormLabel>
             </template>
            <BaseInput :id="`vol-startDate-${uuid}`" type="text" v-model="model.startDate" placeholder="YYYY-MM ou YYYY" />
        </FormGroup>

        <FormGroup>
             <template #label>
                <FormLabel :for="`vol-endDate-${uuid}`">Date fin</FormLabel>
             </template>
            <BaseInput :id="`vol-endDate-${uuid}`" type="text" v-model="model.endDate" placeholder="YYYY-MM, YYYY ou Présent" />
        </FormGroup>

        <FormGroup fullWidth>
             <template #label>
                <FormLabel :for="`vol-summary-${uuid}`">Résumé</FormLabel>
             </template>
            <BaseTextarea :id="`vol-summary-${uuid}`" v-model="model.summary" :rows="3"
                          placeholder="Brève description de vos activités..." />
        </FormGroup>

        <FormGroup fullWidth>
             <template #label>
                <FormLabel :for="`vol-highlights-${uuid}`">Points clés / Réalisations (un par ligne)</FormLabel>
             </template>
            <BaseTextarea :id="`vol-highlights-${uuid}`" v-model="highlightsText" :rows="4"
                          placeholder="- Organisation événement X\n- Levée de fonds pour Y" />
        </FormGroup>
    </div>
  </CardWrapper>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { VolunteerEntityInterface } from '@cv-generator/core';
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
const model = defineModel<VolunteerEntityInterface>({ required: true });
defineEmits(['delete']);

// Computed property for highlights array <-> textarea
const highlightsText = computed({
  get: () => model.value.highlights?.join('\n') ?? '',
  set: (value) => {
    model.value.highlights = value.split('\n').map(line => line.trim()).filter(line => line);
  }
});

</script>

<!-- Style block removed --> 