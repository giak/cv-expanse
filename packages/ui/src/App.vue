<template>
  <!-- Global container: utilisant les classes du système de thèmes -->
  <div class="flex flex-col min-h-screen bg-theme-primary text-theme-primary font-sans transition-standard">
    <!-- Header -->
    <header class="shadow-md sticky top-0 z-50 transition-standard bg-theme-secondary">
      <div class="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 class="text-xl font-bold text-primary-color">CV Generator Pro</h1>
        <div class="flex items-center space-x-3">
          <!-- Template Selector -->
          <div class="relative">
             <select 
                v-model="selectedTemplateName"
                class="block appearance-none w-full md:w-auto bg-theme-card border border-[--color-border] text-theme-primary py-1.5 pl-3 pr-8 rounded-[--radius-md] leading-tight focus:outline-none focus:bg-theme-secondary focus:border-[--color-border-dark] text-sm transition-standard"
                aria-label="Choisir un template de CV"
              >
                <option value="classic">Classique</option>
                <option value="modern">Moderne</option>
                <!-- Add more options as templates are created -->
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-theme-tertiary">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
          </div>

          <ThemeToggle />
          <BaseButton @click="loadResume" variant="secondary">
            Charger
          </BaseButton>
          <BaseButton @click="saveResume" :disabled="!isSavable">Sauvegarder</BaseButton>
        </div>
      </div>
    </header>

    <!-- Main Content Area -->
    <div class="flex flex-col md:flex-row flex-grow container mx-auto w-full px-2 py-4 md:px-6 md:py-6 gap-6 overflow-hidden">
      <!-- Editor Pane: using CardWrapper -->
      <CardWrapper as="main" class="w-full md:w-1/2 lg:w-3/5 overflow-y-auto flex-shrink-0">
        <form @submit.prevent="saveResume" class="space-y-8">
          <BasicsForm v-if="resumeState.basics" v-model="resumeState.basics" />
          <WorkSection v-if="resumeState.work" v-model="resumeState.work" />
          <EducationSection v-if="resumeState.education" v-model="resumeState.education" />
          <SkillsSection v-if="resumeState.skills" v-model="resumeState.skills" />
          <ProjectsSection v-if="resumeState.projects" v-model="resumeState.projects" />
          <VolunteerSection v-if="resumeState.volunteer" v-model="resumeState.volunteer" />
          <CertificatesSection v-if="resumeState.certificates" v-model="resumeState.certificates" />
          <PublicationsSection v-if="resumeState.publications" v-model="resumeState.publications" />
          <LanguagesSection v-if="resumeState.languages" v-model="resumeState.languages" />
          <InterestsSection v-if="resumeState.interests" v-model="resumeState.interests" />
          <ReferencesSection v-if="resumeState.references" v-model="resumeState.references" />
          <AwardsSection v-if="resumeState.awards" v-model="resumeState.awards" />
        </form>

        <!-- Debug state -->
        <!--
        <hr class="border-neutral-700">
        <details class="p-2 bg-neutral-950 rounded text-xs">
          <summary>État actuel (Debug)</summary>
          <pre class="overflow-x-auto"><code>{{ resumeState }}</code></pre>
        </details>
        -->
      </CardWrapper>

      <!-- Preview Pane: using CardWrapper, flex-shrink needed -->
      <CardWrapper as="aside" class="w-full md:w-1/2 lg:w-2/5 overflow-y-auto flex-shrink">
          <ResumePreview :resume="resumeState" :templateName="selectedTemplateName" />
      </CardWrapper>
    </div>

    <!-- Footer -->
    <footer class="p-4 mt-auto transition-standard bg-theme-secondary">
      <div class="container mx-auto text-center text-sm text-theme-tertiary">
        <p>&copy; {{ new Date().getFullYear() }} CV Generator - Built with Vue & Tailwind CSS</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
// Import necessary types (adjust paths/exports as needed based on monorepo setup)
import type { ResumeEntityInterface, BasicsEntityInterface } from '@cv-generator/core';
import { LocalStorageResumeRepository } from '@cv-generator/infrastructure';

// Import components
// import HomePage from './pages/HomePage.vue'; // Removed for now
import BasicsForm from './components/BasicsForm.vue';
import WorkSection from './components/WorkSection.vue';
import EducationSection from './components/EducationSection.vue';
import SkillsSection from './components/SkillsSection.vue';
import ProjectsSection from './components/ProjectsSection.vue';
import VolunteerSection from './components/VolunteerSection.vue';
import CertificatesSection from './components/CertificatesSection.vue';
import PublicationsSection from './components/PublicationsSection.vue';
import LanguagesSection from './components/LanguagesSection.vue';
import InterestsSection from './components/InterestsSection.vue';
import ReferencesSection from './components/ReferencesSection.vue';
import AwardsSection from './components/AwardsSection.vue';
import ResumePreview from './components/preview/ResumePreview.vue';
import { BaseButton, CardWrapper } from './components/base'; // Import CardWrapper
import ThemeToggle from './components/ThemeToggle.vue';

// Initialize repository
const resumeRepository = new LocalStorageResumeRepository();

// Constants for localStorage keys
const TEMPLATE_STORAGE_KEY = 'cv-generator-template';

// Reactive state for the entire resume
// Initialize with a default structure to prevent template errors before loading
const resumeState = ref<ResumeEntityInterface>({
    basics: {
        name: '',
        label: '',
        email: '',
        phone: '',
        url: '',
        summary: '',
        location: {
            address: '',
            postalCode: '',
            city: '',
            countryCode: '',
            region: ''
        },
        profiles: []
    },
    work: [],
    education: [],
    skills: [],
    projects: [],
    volunteer: [],
    certificates: [],
    publications: [],
    languages: [],
    interests: [],
    references: [],
    awards: []
});

const selectedTemplateName = ref<string>('classic'); // Add state for selected template

// Function to ensure all sections/arrays exist in the loaded data or default state
const ensureResumeStructure = (resume: ResumeEntityInterface) => {
    if (!resume.basics) resume.basics = { location: {}, profiles: [] };
    else {
        if (!resume.basics.location) resume.basics.location = {};
        if (!resume.basics.profiles) resume.basics.profiles = [];
    }
    if (!resume.work) resume.work = [];
    if (!resume.education) resume.education = [];
    if (!resume.skills) resume.skills = [];
    if (!resume.projects) resume.projects = [];
    if (!resume.volunteer) resume.volunteer = [];
    if (!resume.certificates) resume.certificates = [];
    if (!resume.publications) resume.publications = [];
    if (!resume.languages) resume.languages = [];
    if (!resume.interests) resume.interests = [];
    if (!resume.references) resume.references = [];
    if (!resume.awards) resume.awards = [];
    return resume;
};

// Load resume data when component mounts
onMounted(async () => {
  const loadedResume = await resumeRepository.load();
  if (loadedResume) {
    resumeState.value = ensureResumeStructure(loadedResume);
    console.log('Resume loaded:', resumeState.value);
  } else {
    console.log('No resume found in localStorage, using initial state.');
    resumeState.value = ensureResumeStructure(resumeState.value);
  }
  
  // Load selected template name
  try {
    if (typeof localStorage !== 'undefined') {
      const savedTemplate = localStorage.getItem(TEMPLATE_STORAGE_KEY);
      if (savedTemplate && ['classic', 'modern'].includes(savedTemplate)) { // Basic validation
        selectedTemplateName.value = savedTemplate;
        console.log('Template preference loaded:', savedTemplate);
      }
    }
  } catch (error) {
    console.error('Failed to load template preference:', error);
  }
});

// Load resume data from button click
const loadResume = async () => {
    const loadedResume = await resumeRepository.load();
    if (loadedResume) {
        resumeState.value = ensureResumeStructure(loadedResume);
        alert('CV Chargé !');
        console.log('Resume loaded:', resumeState.value);
    } else {
        alert('Aucun CV sauvegardé trouvé.');
    }
};

// Save resume data
const saveResume = async () => {
  try {
    await resumeRepository.save(resumeState.value);
    
    // Save selected template name
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(TEMPLATE_STORAGE_KEY, selectedTemplateName.value);
    }
    
    alert('CV et préférences sauvegardés !');
    console.log('Resume saved:', resumeState.value);
    console.log('Template preference saved:', selectedTemplateName.value);

  } catch (error) {
    console.error('Failed to save resume or template preference:', error);
    alert('Erreur lors de la sauvegarde.');
  }
};

// Computed property to determine if the save button should be enabled
// For now, always enable it. Could be enhanced later.
const isSavable = computed(() => {
    // Add logic here to check if changes have been made
    // For simplicity, always return true for now
    return true;
});

</script> 