# STORY 1.4: [Must Have] Structure de Base de l'Interface Utilisateur (UI)

**En tant que** Utilisateur final,
**Je veux** une structure de base pour l'application web (UI),
**Afin que** les futures fonctionnalités puissent être intégrées dans une interface cohérente et fonctionnelle.

---

## Critères d'Acceptation

1.  Le package `ui` est créé avec une structure de répertoires de base (ex: `src/components`, `src/pages`, `src/styles`).
2.  Un framework UI (ex: React + Vite) est configuré dans le package `ui`.
3.  Une page d'accueil simple (`HomePage`) est créée pour servir de point d'entrée.
4.  Un composant de base réutilisable (ex: `Button`) est créé pour démonstration.
5.  Les styles globaux ou un système de theming de base sont mis en place (ex: CSS global, Tailwind CSS).
6.  Le package `ui` peut être lancé localement pour le développement (ex: via `vite` ou un autre bundler/serveur de développement).

---

## Tâches Techniques

-   [X] **TASK 1.4.1 :** Créer le package `ui` dans le monorepo (`packages/ui`).
-   [X] **TASK 1.4.2 :** Choisir et configurer un framework UI (Option retenue : Vue + Vite).
-   [X] **TASK 1.4.3 :** Mettre en place la structure de répertoires initiale (`src/components`, `src/pages`, `src/assets`, `src/main.ts`).
-   [X] **TASK 1.4.4 :** Créer un composant `HomePage.vue` simple dans `src/pages`.
-   [X] **TASK 1.4.5 :** Créer un composant `BaseButton.vue` simple dans `src/components`.
-   [X] **TASK 1.4.6 :** Configurer les styles globaux ou un thème de base (ex: fichier `src/assets/main.css` et import dans `main.ts`).
-   [X] **TASK 1.4.7 :** Ajouter les scripts nécessaires dans `packages/ui/package.json` pour lancer l'application UI en mode développement (`dev`, `build`, `preview`).
-   [ ] **TASK 1.4.8 :** Exporter les composants clés depuis `packages/ui/src/index.ts` (si pertinent pour une bibliothèque de composants, sinon optionnel pour une application).

---

## Notes

-   Le framework UI choisi est Vue 3 avec Vite, conformément aux dépendances initiales du projet.
-   Nous utiliserons les Single File Components (SFC) de Vue.
-   Pour le style, nous commencerons avec un simple fichier CSS global. L'intégration d'un framework CSS comme Tailwind pourra être envisagée plus tard si nécessaire.
-   **Important Monorepo/Vite:** Pour que les imports de packages locaux (ex: `@cv-generator/core`) fonctionnent correctement pendant le développement avec Vite (`pnpm dev`), il est nécessaire de configurer des alias dans `packages/ui/vite.config.ts` via `resolve.alias`. Ces alias pointent directement vers les répertoires sources (`src`) des packages dépendants. Cela est distinct des `paths` configurés dans `tsconfig.json` qui sont utilisés par TypeScript.
