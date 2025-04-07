# STORY 1.2: [Must Have] Définitions Initiales des Entités et Ports du Core

**En tant que** Développeur,
**Je veux** que le package `core` contienne les définitions initiales des entités du domaine (ex: `Resume`, `Basics`) et les ports (interfaces) pour les dépendances externes (ex: `ResumeRepository`),
**Afin d'** établir la base du modèle métier et les contrats pour les couches externes.

---

## Critères d'Acceptation

-   Le package `shared` contient les définitions de type TypeScript de base correspondant au schéma JSON Resume (au moins pour `Basics` et la structure générale de `Resume`).
-   Le package `core` contient les fichiers source pour les entités initiales (ex: `src/domain/entities/Resume.ts`, `src/domain/entities/Basics.ts`), même s'ils sont encore squelettiques.
-   Le package `core` définit une interface `ResumeRepository` (ex: dans `src/application/ports/ResumeRepository.ts`) décrivant les méthodes nécessaires pour la persistance (ex: `save`, `load`).
-   Les types et interfaces sont correctement exportés depuis leurs modules respectifs.
-   Le code compile sans erreurs TypeScript (`pnpm -r exec tsc --noEmit`).

---

## Tâches Techniques

-   [X] **TASK 1.2.1 :** Définir les types TypeScript de base pour le schéma JSON Resume (structures `Resume`, `Basics`, `Location`, `Profile`, etc.) dans le package `shared`. Créer les fichiers correspondants (ex: `packages/shared/src/types/resume.ts`).
-   [X] **TASK 1.2.2 :** Implémenter les classes ou interfaces initiales pour les entités `Resume` et `Basics` dans `packages/core/src/domain/entities/`. Elles peuvent être simples au début, important surtout la structure et les relations.
-   [X] **TASK 1.2.3 :** Définir l'interface `ResumeRepository` dans `packages/core/src/application/ports/` avec les méthodes de base (ex: `save(resume: Resume): Promise<void>`, `load(): Promise<Resume | null>`).
-   [X] **TASK 1.2.4 :** S'assurer que les types et interfaces définis sont correctement exportés depuis leurs modules respectifs pour être utilisables par d'autres packages.

---

## Notes

-   Se concentrer sur la structure et les types pour le moment, la logique métier complexe sera ajoutée plus tard.
-   Utiliser les types définis dans `shared` comme base pour les entités dans `core`.
-   Penser à la distinction entre les types bruts du schéma (dans `shared`) et les entités enrichies du domaine (dans `core`) qui pourraient contenir de la logique ou des méthodes. Pour cette story, ils peuvent être très similaires.
-   Le dossier `src/application/ports` dans `core` est une convention pour placer les interfaces que l'infrastructure doit implémenter.
