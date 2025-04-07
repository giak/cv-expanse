<template>
  <div class="profile-item-form grid grid-cols-1 sm:grid-cols-3 md:grid-cols-[1fr_1fr_2fr_auto] gap-3 items-end p-3 border border-neutral-700 rounded-md mb-3 bg-neutral-800/50">
    <div class="form-group">
      <label :for="`profile-network-${uuid}`" class="block text-xs font-medium text-neutral-400 mb-1">Réseau</label>
      <input :id="`profile-network-${uuid}`" type="text" v-model="model.network" placeholder="Ex: LinkedIn, GitHub"
             class="block w-full px-2 py-1 bg-neutral-600 border border-neutral-500 rounded-md shadow-sm placeholder-neutral-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:border-primary-500 text-sm text-neutral-100" />
    </div>
    <div class="form-group">
      <label :for="`profile-username-${uuid}`" class="block text-xs font-medium text-neutral-400 mb-1">Nom d'utilisateur</label>
      <input :id="`profile-username-${uuid}`" type="text" v-model="model.username" placeholder="Ex: johndoe"
             class="block w-full px-2 py-1 bg-neutral-600 border border-neutral-500 rounded-md shadow-sm placeholder-neutral-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:border-primary-500 text-sm text-neutral-100" />
    </div>
    <div class="form-group sm:col-span-2 md:col-span-1"> <!-- Adjusted span for smaller screens -->
      <label :for="`profile-url-${uuid}`" class="block text-xs font-medium text-neutral-400 mb-1">URL</label>
      <input :id="`profile-url-${uuid}`" type="url" v-model="model.url" placeholder="https://linkedin.com/in/..."
             class="block w-full px-2 py-1 bg-neutral-600 border border-neutral-500 rounded-md shadow-sm placeholder-neutral-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:border-primary-500 text-sm text-neutral-100" />
    </div>
    <!-- Simple delete button styled with Tailwind -->
    <button @click="$emit('delete')"
            class="px-3 py-1.5 border border-transparent rounded text-sm font-medium text-white bg-error-700 hover:bg-error-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900 focus-visible:ring-error-500 transition-colors self-end mb-px disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Supprimer ce profil">
      &times;
    </button>
    <!-- Alternative using BaseButton if it supports variants/sizes -->
    <!-- <BaseButton @click="$emit('delete')" variant="danger" size="sm" class="self-end mb-px" title="Supprimer ce profil">
      &times;
    </BaseButton> -->
  </div>
</template>

<script setup lang="ts">
import type { ProfileInterface } from '@cv-generator/shared';
import { v4 as uuidv4 } from 'uuid';
// import BaseButton from './BaseButton.vue'; // Import if using BaseButton variant

// Unique ID for labels/inputs
const uuid = uuidv4().slice(0, 8);

// Define v-model using defineModel (Vue 3.4+)
const model = defineModel<ProfileInterface>({ required: true });

// Define emits for deletion
defineEmits(['delete']);

// No <style> block as per user request
</script> 