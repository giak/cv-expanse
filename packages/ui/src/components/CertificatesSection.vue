<template>
  <div class="certificates-section space-y-6">
    <h2 class="text-lg font-semibold border-b border-[--color-border] pb-2 mb-4 text-[--color-text-primary]">Certificats</h2>
    <div v-for="(certificate, index) in certificatesList" :key="index">
      <CertificateItemForm v-model="certificatesList[index]" @delete="removeCertificateItem(index)" />
    </div>
    <div class="mt-4 text-center">
      <BaseButton variant="secondary" @click="addCertificateItem">+ Ajouter un certificat</BaseButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineModel } from 'vue';
import type { CertificateEntityInterface } from '@cv-generator/core';
import CertificateItemForm from './CertificateItemForm.vue';
import { BaseButton } from './base';

// v-model for the certificates array
const certificatesList = defineModel<CertificateEntityInterface[]>({ required: true });

// Function to add a new blank certificate entry
const addCertificateItem = () => {
  if (!Array.isArray(certificatesList.value)) {
    certificatesList.value = [];
  }
  certificatesList.value.push({
    name: '',
    date: '',
    issuer: '',
    url: ''
  });
};

// Function to remove a certificate entry by index
const removeCertificateItem = (index: number) => {
  if (Array.isArray(certificatesList.value) && index >= 0 && index < certificatesList.value.length) {
    certificatesList.value.splice(index, 1);
  }
};

</script> 