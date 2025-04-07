export interface LocationInterface {
  address?: string;
  postalCode?: string;
  city?: string;
  countryCode?: string;
  region?: string;
}

export interface ProfileInterface {
  network?: string;
  username?: string;
  url?: string;
}

export interface BasicsInterface {
  name?: string;
  label?: string;
  image?: string;
  email?: string;
  phone?: string;
  url?: string;
  summary?: string;
  location?: LocationInterface;
  profiles?: ProfileInterface[];
}

export interface WorkExperienceInterface {
  name?: string; // Nom de l'entreprise
  position?: string; // Poste occupé
  url?: string; // URL de l'entreprise
  startDate?: string; // Format YYYY-MM-DD ou YYYY
  endDate?: string; // Format YYYY-MM-DD ou YYYY, ou 'Present'
  summary?: string; // Description du rôle/entreprise
  highlights?: string[]; // Liste des réalisations/points clés
  location?: string; // Lieu (moins courant que dans Basics)
}

export interface EducationInterface {
  institution?: string; // Nom de l'établissement
  url?: string; // URL de l'établissement (ajouté)
  area?: string; // Domaine d'études (ex: Informatique)
  studyType?: string; // Type de diplôme (ex: Licence, Master)
  startDate?: string; // Format YYYY-MM-DD ou YYYY
  endDate?: string; // Format YYYY-MM-DD ou YYYY
  score?: string; // Note/Mention (ex: 3.8/4.0, Mention Bien)
  courses?: string[]; // Liste des cours pertinents
}

export interface SkillInterface {
  name?: string; // Nom de la catégorie (ex: Langages Web, Bases de données)
  level?: string; // Niveau (ex: Master, Intermediate, Beginner) - Optionnel pour l'instant
  keywords?: string[]; // Liste des compétences/mots-clés (ex: JavaScript, SQL, Docker)
}

export interface ProjectInterface {
  name?: string; // Nom du projet
  description?: string; // Description du projet
  url?: string; // URL du projet (ex: GitHub, démo live)
  keywords?: string[]; // Technologies/Concepts utilisés
  startDate?: string; // Format YYYY-MM-DD ou YYYY
  endDate?: string; // Format YYYY-MM-DD ou YYYY
  entity?: string; // Entité pour laquelle le projet a été réalisé (ex: Nom entreprise, École)
  type?: string; // Type de projet (ex: Application web, Bibliothèque)
  roles?: string[]; // Rôles tenus dans le projet
}

export interface VolunteerInterface {
  organization?: string;
  position?: string;
  url?: string;
  startDate?: string;
  endDate?: string;
  summary?: string;
  highlights?: string[];
}

export interface CertificateInterface {
  name?: string; // e.g. Certified Kubernetes Administrator
  date?: string; // e.g. 2021-01-07
  issuer?: string; // e.g. Cloud Native Computing Foundation
  url?: string; // e.g. https://example.com/certificate
}

export interface PublicationInterface {
  name?: string; // e.g. My Awesome Paper
  publisher?: string; // e.g. ACM
  releaseDate?: string; // e.g. 2021-10-01
  url?: string; // e.g. https://doi.org/...
  summary?: string; // e.g. Brief summary of the publication...
}

export interface LanguageInterface {
  language?: string; // e.g. English, French
  fluency?: string; // e.g. Native speaker, C1, Fluent
}

export interface InterestInterface {
  name?: string; // e.g. Photography, Open Source
  keywords?: string[]; // e.g. Landscape, Portrait, Linux, JavaScript
}

export interface ReferenceInterface {
  name?: string; // e.g. Jane Doe
  reference?: string; // e.g. Reference available upon request. OR Contact details.
}

export interface AwardInterface {
  title?: string; // e.g. ACM ICPC World Finalist
  date?: string; // e.g. 2014-06-24
  awarder?: string; // e.g. Association for Computing Machinery
  summary?: string; // e.g. Placed 1st...
}

/**
 * Defines the overall structure of the resume based on JSON Resume schema.
 * Other sections (work, education, skills, etc.) will be added later.
 */
export interface ResumeInterface {
  basics?: BasicsInterface;
  work?: WorkExperienceInterface[];
  education?: EducationInterface[];
  skills?: SkillInterface[];
  projects?: ProjectInterface[];
  volunteer?: VolunteerInterface[];
  certificates?: CertificateInterface[];
  publications?: PublicationInterface[];
  languages?: LanguageInterface[];
  interests?: InterestInterface[];
  references?: ReferenceInterface[];
  awards?: AwardInterface[];
  // references?: ReferenceInterface[];
  // certificates?: CertificateInterface[];
} 