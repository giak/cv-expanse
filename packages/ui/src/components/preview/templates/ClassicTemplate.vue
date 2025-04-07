<template>
  <div class="classic-template p-6 md:p-8 bg-[var(--preview-color-background)] text-[var(--preview-color-text-primary)] font-[var(--preview-font-body)]">
    <!-- Actual classic template layout -->
    <div class="preview-content">
      <!-- Section Basics -->
      <section v-if="resume.basics" id="basics" class="mb-[var(--preview-section-spacing)]">
        <h2 v-if="resume.basics.name" class="text-[var(--preview-text-3xl)] font-bold mb-1 text-[var(--preview-color-text-primary)] font-[var(--preview-font-heading)]">{{ resume.basics.name }}</h2>
        <p v-if="resume.basics.label" class="text-[var(--preview-text-xl)] text-[var(--preview-color-text-secondary)] mb-3">{{ resume.basics.label }}</p>
        <div class="flex flex-wrap gap-x-4 gap-y-1 text-[var(--preview-text-sm)] text-[var(--preview-color-text-tertiary)] mb-4">
          <span v-if="resume.basics.email">
            <a :href="`mailto:${resume.basics.email}`" class="text-[var(--preview-color-primary)] hover:text-[var(--preview-color-primary-hover)] hover:underline">{{ resume.basics.email }}</a>
          </span>
          <span v-if="resume.basics.phone">{{ resume.basics.phone }}</span>
          <span v-if="resume.basics.url">
            <a :href="resume.basics.url" target="_blank" rel="noopener noreferrer" class="text-[var(--preview-color-primary)] hover:text-[var(--preview-color-primary-hover)] hover:underline">{{ resume.basics.url }}</a>
          </span>
          <span v-if="resume.basics.location">{{ formatLocation(resume.basics.location) }}</span>
        </div>
        <p v-if="resume.basics.summary" class="text-[var(--preview-text-base)] text-[var(--preview-color-text-secondary)] leading-relaxed mb-4">
          {{ resume.basics.summary }}
        </p>
        <div v-if="resume.basics.profiles && resume.basics.profiles.length > 0" class="flex flex-wrap gap-x-4 gap-y-1 text-[var(--preview-text-sm)]">
          <span v-for="(profile, index) in resume.basics.profiles" :key="index">
            <a v-if="profile.url" :href="profile.url" target="_blank" rel="noopener noreferrer" class="text-[var(--preview-color-primary)] hover:text-[var(--preview-color-primary-hover)] hover:underline">
              {{ profile.network }} {{ profile.username ? `(${profile.username})` : '' }}
            </a>
            <span v-else>
               {{ profile.network }} {{ profile.username ? `(${profile.username})` : '' }}
            </span>
          </span>
        </div>
      </section>

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

       <!-- Skills Section -->
      <PreviewSection title="Compétences">
         <div v-if="resume.skills && resume.skills.length > 0">
            <SkillItem v-for="(skill, index) in resume.skills" :key="index" :item="skill" />
         </div>
      </PreviewSection>

       <!-- Projects Section -->
       <PreviewSection title="Projets">
         <div v-if="resume.projects && resume.projects.length > 0">
            <ProjectItem v-for="(project, index) in resume.projects" :key="index" :item="project" />
         </div>
       </PreviewSection>

      <!-- Volunteer Section -->
      <PreviewSection title="Bénévolat">
         <div v-if="resume.volunteer && resume.volunteer.length > 0">
            <VolunteerItem v-for="(vol, index) in resume.volunteer" :key="index" :item="vol" />
         </div>
      </PreviewSection>

      <!-- Certificates Section -->
      <PreviewSection title="Certificats">
         <div v-if="resume.certificates && resume.certificates.length > 0">
            <CertificateItem v-for="(cert, index) in resume.certificates" :key="index" :item="cert" />
         </div>
      </PreviewSection>

      <!-- Publications Section -->
      <PreviewSection title="Publications">
        <div v-if="resume.publications && resume.publications.length > 0">
           <PublicationItem v-for="(pub, index) in resume.publications" :key="index" :item="pub" />
        </div>
      </PreviewSection>

      <!-- Languages Section -->
      <PreviewSection title="Langues">
         <div v-if="resume.languages && resume.languages.length > 0">
            <div class="flex flex-wrap gap-x-4 gap-y-1 text-[var(--preview-text-base)] text-[var(--preview-color-text-secondary)]">
               <span v-for="(lang, index) in resume.languages" :key="index">
                {{ lang.language }} <span v-if="lang.fluency" class="text-[var(--preview-color-text-tertiary)]">({{ lang.fluency }})</span>
              </span>
             </div>
         </div>
      </PreviewSection>

      <!-- Interests Section -->
      <PreviewSection title="Centres d'Intérêt">
         <div v-if="resume.interests && resume.interests.length > 0">
            <InterestItem v-for="(interest, index) in resume.interests" :key="index" :item="interest" />
         </div>
      </PreviewSection>

       <!-- References Section -->
      <PreviewSection title="Références">
         <div v-if="resume.references && resume.references.length > 0">
            <ReferenceItem v-for="(ref, index) in resume.references" :key="index" :item="ref" />
         </div>
      </PreviewSection>

      <!-- Awards Section -->
      <PreviewSection title="Récompenses">
         <div v-if="resume.awards && resume.awards.length > 0">
            <AwardItem v-for="(award, index) in resume.awards" :key="index" :item="award" />
         </div>
      </PreviewSection>

    </div>
  </div>
</template>

<script setup lang="ts">
import type { ResumeEntityInterface } from '@cv-generator/core';
import type { LocationInterface } from '@cv-generator/shared'; // Needed for formatLocation

// Import utility and item components used by the template
import PreviewSection from '../PreviewSection.vue';
import WorkItem from '../items/WorkItem.vue';
import EducationItem from '../items/EducationItem.vue';
import SkillItem from '../items/SkillItem.vue';
import ProjectItem from '../items/ProjectItem.vue';
import VolunteerItem from '../items/VolunteerItem.vue';
import CertificateItem from '../items/CertificateItem.vue';
import PublicationItem from '../items/PublicationItem.vue';
import InterestItem from '../items/InterestItem.vue';
import ReferenceItem from '../items/ReferenceItem.vue';
import AwardItem from '../items/AwardItem.vue';

defineProps<{ 
  resume: ResumeEntityInterface 
}>();

// Helper function to format location (needed within this template)
const formatLocation = (location: LocationInterface | undefined): string => {
    if (!location) return '';
    const parts = [location.address, location.city, location.postalCode, location.region, location.countryCode].filter(Boolean);
    return parts.join(', ');
};

// NOTE: formatDateRange is now handled within each item component (WorkItem, EducationItem, etc.)

</script>
