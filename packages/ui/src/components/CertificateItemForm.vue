<template>
  <CardWrapper :noPadding="true" class="mb-6">
    <template #header>
      <div class="flex justify-between items-center">
        <h4 class="text-md font-semibold text-[--color-text-primary]">Certificat / Formation</h4>
        <BaseButton 
            variant="danger" 
            @click="$emit('delete')" 
            aria-label="Supprimer ce certificat"
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
                <FormLabel :for="`cert-name-${uuid}`">Nom du Certificat</FormLabel>
            </template>
            <BaseInput :id="`cert-name-${uuid}`" type="text" v-model="model.name" placeholder="Ex: Certified Kubernetes Administrator" />
        </FormGroup>
        
        <FormGroup>
            <template #label>
                <FormLabel :for="`cert-issuer-${uuid}`">Organisation Émettrice</FormLabel>
            </template>
            <BaseInput :id="`cert-issuer-${uuid}`" type="text" v-model="model.issuer" placeholder="Ex: CNCF, Google Cloud" />
        </FormGroup>

        <FormGroup>
             <template #label>
                <FormLabel :for="`cert-date-${uuid}`">Date d'Obtention</FormLabel>
             </template>
            <BaseInput :id="`cert-date-${uuid}`" type="text" v-model="model.date" placeholder="YYYY-MM-DD ou YYYY" />
        </FormGroup>

        <FormGroup fullWidth>
             <template #label>
                <FormLabel :for="`cert-url-${uuid}`">URL (Optionnel)</FormLabel>
             </template>
            <BaseInput :id="`cert-url-${uuid}`" type="url" v-model="model.url" placeholder="Lien vers le certificat/badge" />
        </FormGroup>
    </div>
  </CardWrapper>
</template>

<script setup lang="ts">
import type { CertificateEntityInterface } from '@cv-generator/core';
import { v4 as uuidv4 } from 'uuid';
import { 
    BaseInput, 
    FormLabel, 
    FormGroup, 
    BaseButton, 
    CardWrapper 
} from './base';

const uuid = uuidv4().slice(0, 8);
const model = defineModel<CertificateEntityInterface>({ required: true });
defineEmits(['delete']);

</script>