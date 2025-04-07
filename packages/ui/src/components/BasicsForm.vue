<template>
  <CardWrapper class="form-section">
    <template #header>
      <h2 class="text-lg font-semibold text-[--color-text-primary]">Informations Personnelles</h2>
    </template>

    <!-- Default slot content -->
    <div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-x-4">
        
        <FormGroup>
          <template #label>
              <FormLabel for="basics-name">Nom Complet</FormLabel>
          </template>
          <BaseInput id="basics-name" type="text" v-model="model.name" placeholder="Votre nom" />
        </FormGroup>

        <FormGroup>
          <template #label>
              <FormLabel for="basics-label">Titre / Profession</FormLabel>
          </template>
          <BaseInput id="basics-label" type="text" v-model="model.label" placeholder="Ex: Développeur Full Stack" />
        </FormGroup>

        <FormGroup>
          <template #label>
              <FormLabel for="basics-email">Email</FormLabel>
          </template>
          <BaseInput id="basics-email" type="email" v-model="model.email" placeholder="email@exemple.com" />
        </FormGroup>

        <FormGroup>
          <template #label>
              <FormLabel for="basics-phone">Téléphone</FormLabel>
          </template>
          <BaseInput id="basics-phone" type="tel" v-model="model.phone" placeholder="+33 6 12 34 56 78" />
        </FormGroup>

        <FormGroup fullWidth>
          <template #label>
              <FormLabel for="basics-url">Site Web / Portfolio (URL)</FormLabel>
          </template>
          <BaseInput id="basics-url" type="url" v-model="model.url" placeholder="https://mon-site.com" />
        </FormGroup>

        <FormGroup fullWidth>
          <template #label>
              <FormLabel for="basics-summary">Résumé Professionnel</FormLabel>
          </template>
          <BaseTextarea id="basics-summary" v-model="model.summary" :rows="5"
                        placeholder="Décrivez brièvement votre profil et vos objectifs..." />
        </FormGroup>
      </div>

      <!-- Location Sub-Section -->
      <div class="mt-6 border-t border-[--color-border] pt-6">
          <h3 class="text-md font-semibold mb-4 text-[--color-text-secondary]">Localisation</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-x-4">
              <FormGroup>
                  <template #label>
                      <FormLabel for="basics-loc-address">Adresse</FormLabel>
                  </template>
                  <BaseInput id="basics-loc-address" type="text" v-model="location.address" placeholder="123 Rue Principale" />
              </FormGroup>
              <FormGroup>
                  <template #label>
                      <FormLabel for="basics-loc-postalCode">Code Postal</FormLabel>
                  </template>
                  <BaseInput id="basics-loc-postalCode" type="text" v-model="location.postalCode" placeholder="75001" />
              </FormGroup>
              <FormGroup>
                  <template #label>
                      <FormLabel for="basics-loc-city">Ville</FormLabel>
                  </template>
                  <BaseInput id="basics-loc-city" type="text" v-model="location.city" placeholder="Paris" />
              </FormGroup>
              <FormGroup>
                  <template #label>
                      <FormLabel for="basics-loc-region">Région / Département</FormLabel>
                  </template>
                  <BaseInput id="basics-loc-region" type="text" v-model="location.region" placeholder="Île-de-France" />
              </FormGroup>
              <FormGroup fullWidth>
                  <template #label>
                      <FormLabel for="basics-loc-countryCode">Code Pays</FormLabel>
                  </template>
                  <BaseInput id="basics-loc-countryCode" type="text" v-model="location.countryCode" placeholder="FR" />
              </FormGroup>
          </div>
      </div>

      <!-- Profiles Sub-Section -->
      <div class="mt-6 border-t border-[--color-border] pt-6">
          <h3 class="text-md font-semibold mb-4 text-[--color-text-secondary]">Profils Sociaux</h3>
          <div class="space-y-3 mb-4">
              <ProfileItemForm 
                  v-for="(profile, index) in profiles" 
                  :key="index"
                  v-model="profiles[index]"
                  @delete="removeProfile(index)"
              />
          </div>
          <div class="text-center">
              <BaseButton variant="secondary" @click="addProfile">
                  + Ajouter un profil
              </BaseButton>
          </div>
      </div>
    </div>
    <!-- End of default slot content -->

  </CardWrapper>
</template>

<script setup lang="ts">
import { defineModel, ref, watchEffect } from 'vue';
import type { BasicsEntityInterface } from '@cv-generator/core';
// Import interfaces from shared package
import type { LocationInterface, ProfileInterface } from '@cv-generator/shared'; 
import ProfileItemForm from './ProfileItemForm.vue';
import { 
    BaseInput, 
    BaseTextarea, 
    FormLabel, 
    FormGroup, 
    BaseButton,
    CardWrapper
} from './base';

// Define v-model (receives the whole basics object)
const model = defineModel<BasicsEntityInterface>({ required: true });

// Create local refs for potentially undefined nested objects
const location = ref<LocationInterface>({});
const profiles = ref<ProfileInterface[]>([]);

// Sync local refs with model value when it changes (or initially)
watchEffect(() => {
  // Ensure we have a fallback empty object/array if the model value is null/undefined
  location.value = { ...(model.value.location ?? {}) }; 
  profiles.value = [ ...(model.value.profiles ?? []) ]; 
});

// Watch local refs and update the main model (v-model)
watchEffect(() => {
  // Only update if the local ref is actually different from the model's current value (deep comparison might be needed for arrays/objects)
  // For simplicity, we might just assign it back, letting Vue handle reactivity
  model.value.location = location.value;
});
watchEffect(() => {
  model.value.profiles = profiles.value;
});


// --- Profile Management ---
const addProfile = () => {
  // Push directly to the local ref, which will trigger the watchEffect to update the model
  profiles.value.push({ network: '', username: '', url: '' }); 
};

const removeProfile = (index: number) => {
  if (index >= 0 && index < profiles.value.length) {
    profiles.value.splice(index, 1); 
  }
};

</script>

<!-- No <style> block --> 