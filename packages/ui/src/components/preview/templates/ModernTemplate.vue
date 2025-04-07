<template>
  <div class="modern-template p-6 md:p-8 bg-[var(--preview-color-background)] text-[var(--preview-color-text-primary)] font-[var(--preview-font-body)]">
    <!-- Simple Two-Column Layout -->
    <div class="flex flex-col md:flex-row gap-8">
      <!-- Sidebar (Left Column on Medium+ screens) -->
      <aside class="w-full md:w-1/3 flex-shrink-0 space-y-[var(--preview-section-spacing)]">
        <!-- Section Basics (Condensed) -->
        <section v-if="resume.basics" id="basics">
          <h2 v-if="resume.basics.name" class="text-[var(--preview-text-2xl)] font-bold mb-1 text-[var(--preview-color-primary)] font-[var(--preview-font-heading)]">{{ resume.basics.name }}</h2>
          <p v-if="resume.basics.label" class="text-[var(--preview-text-lg)] text-[var(--preview-color-text-secondary)] mb-3">{{ resume.basics.label }}</p>
          <div class="space-y-1 text-[var(--preview-text-sm)] text-[var(--preview-color-text-tertiary)] mb-4">
            <p v-if="resume.basics.location">{{ formatLocation(resume.basics.location) }}</p>
            <p v-if="resume.basics.email"><a :href="`mailto:${resume.basics.email}`" class="text-[var(--preview-color-primary)] hover:text-[var(--preview-color-primary-hover)] hover:underline">{{ resume.basics.email }}</a></p>
            <p v-if="resume.basics.phone">{{ resume.basics.phone }}</p>
            <p v-if="resume.basics.url"><a :href="resume.basics.url" target="_blank" rel="noopener noreferrer" class="text-[var(--preview-color-primary)] hover:text-[var(--preview-color-primary-hover)] hover:underline">{{ resume.basics.url }}</a></p>
          </div>
          <div v-if="resume.basics.profiles && resume.basics.profiles.length > 0" class="flex flex-wrap gap-x-3 gap-y-1 text-[var(--preview-text-sm)]">
            <template v-for="(profile, index) in resume.basics.profiles" :key="index">
              <a v-if="profile.url" :href="profile.url" target="_blank" rel="noopener noreferrer" 
                 class="text-[var(--preview-color-primary)] hover:text-[var(--preview-color-primary-hover)] hover:underline">
                {{ profile.network }}
              </a>
            </template>
          </div>
          <p v-if="resume.basics.summary" class="mt-4 text-[var(--preview-text-base)] text-[var(--preview-color-text-secondary)] leading-relaxed">
            {{ resume.basics.summary }}
          </p>
        </section>

        <!-- Skills Section -->
        <PreviewSection title="Compétences">
           <div v-if="resume.skills && resume.skills.length > 0">
              <SkillItem v-for="(skill, index) in resume.skills" :key="index" :item="skill" />
           </div>
        </PreviewSection>

        <!-- Languages Section -->
        <PreviewSection title="Langues">
           <div v-if="resume.languages && resume.languages.length > 0">
              <div class="flex flex-col text-[var(--preview-text-base)] text-[var(--preview-color-text-secondary)] space-y-0.5">
                 <span v-for="(lang, index) in resume.languages" :key="index">
                  {{ lang.language }} <span v-if="lang.fluency" class="text-[var(--preview-color-text-tertiary)] text-[var(--preview-text-sm)]">({{ lang.fluency }})</span>
                </span>
               </div>
           </div>
        </PreviewSection>
         <!-- Can add other sidebar sections like Interests -->
      </aside>

      <!-- Main Content (Right Column on Medium+ screens) -->
      <main class="w-full md:w-2/3 space-y-[var(--preview-section-spacing)]">
        <!-- Section Work Experience -->
        <PreviewSection title="Expérience Professionnelle">
           <div v-if="resume.work && resume.work.length > 0">
              <WorkItem v-for="(job, index) in resume.work" :key="index" :item="job" />
           </div>
        </PreviewSection>

        <!-- Section Education -->
        <PreviewSection title="Formation">
           <div v-if="resume.education && resume.education.length > 0">
              <EducationItem v-for="(edu, index) in resume.education" :key="index" :item="edu" />
           </div>
        </PreviewSection>

         <!-- Projects Section -->
         <PreviewSection title="Projets">
           <div v-if="resume.projects && resume.projects.length > 0">
              <ProjectItem v-for="(project, index) in resume.projects" :key="index" :item="project" />
           </div>
         </PreviewSection>
        
        <!-- Can add other main content sections like Volunteer, Publications, Awards, etc. -->
        
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ResumeEntityInterface } from '@cv-generator/core';
import type { LocationInterface } from '@cv-generator/shared';

// Import shared components (assuming they are flexible enough)
import PreviewSection from '../PreviewSection.vue';
import WorkItem from '../items/WorkItem.vue';
import EducationItem from '../items/EducationItem.vue';
import SkillItem from '../items/SkillItem.vue';
import ProjectItem from '../items/ProjectItem.vue';
// Import others as needed

defineProps<{ 
  resume: ResumeEntityInterface 
}>();

// Helper function (can be extracted later)
const formatLocation = (location: LocationInterface | undefined): string => {
    if (!location) return '';
    const parts = [location.city, location.region, location.countryCode].filter(Boolean);
    return parts.join(', '); // Simpler format for sidebar
};
</script>

<style>
/* Example of overriding variables locally for this template */
.modern-template {
  /* --preview-font-heading: var(--font-mono); /* Example: Use mono font for headings */
  /* --preview-color-primary: var(--color-success-600); /* Example: Use green as primary */
}
</style>
