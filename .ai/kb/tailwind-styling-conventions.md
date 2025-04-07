# KB: Conventions de Style Tailwind pour les Composants UI

## Contexte
Ce document définit les conventions de style à suivre lors de la refactorisation des composants Vue dans le package `ui` avec Tailwind CSS v4.

## Conventions Principales

1.  **Priorité aux Utilitaires dans les Templates :**
    *   **Objectif :** Utiliser les classes utilitaires Tailwind directement dans le `<template>` comme méthode principale de stylisation.
    *   **Règle :** Composer les styles en appliquant les utilitaires nécessaires aux éléments HTML.

2.  **Composition via Composants Vue :**
    *   **Objectif :** Encapsuler la logique, la structure et le style répétitifs ou complexes.
    *   **Règle :** Pour les éléments UI distincts et réutilisables (ex: `CardWrapper`, `UserProfileBadge`, `FormGroup`), créer des composants Vue dédiés. Le style interne de ces composants se fait via des utilitaires Tailwind dans leur propre `<template>`.

3.  **Utilisation de `@apply` pour les Classes de Composants CSS :**
    *   **Objectif :** Réduire la verbosité des classes dans les templates pour des *motifs de style* très courants et simples (ex: apparence de base d'un bouton, d'un champ de saisie) qui sont appliqués à de nombreux éléments.
    *   **Règle :** Il est **permis** d'utiliser `@apply` pour définir des classes CSS sémantiques réutilisables (ex: `.btn`, `.btn-primary`, `.input-base`) **dans un fichier CSS dédié** (ex: `packages/ui/src/assets/components.css`), importé dans `main.css`. Ces classes doivent être définies dans la couche `@layer components`.
    *   **Exemple Fichier CSS :**
        ```css
        @layer components {
          .btn {
            @apply px-4 py-2 border rounded font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2;
          }
          .btn-primary {
            @apply btn bg-[--color-primary-600] text-white border-transparent hover:bg-[--color-primary-700] focus-visible:ring-[--color-primary-500];
          }
          .input-base {
            @apply block w-full px-3 py-2 bg-[--color-bg-input] border border-[--color-border] rounded-md shadow-sm placeholder-[--color-text-placeholder] focus:outline-none focus-visible:ring-2 focus-visible:ring-[--color-primary-500] focus-visible:border-[--color-primary-500] text-sm text-[--color-text-input];
          }
          /* ... autres classes ... */
        }
        ```
    *   **Exemple Template :** `<button class="btn btn-primary">Sauvegarder</button>`
    *   **Justification :** Compromis acceptable pour améliorer la lisibilité du template sans abandonner complètement l'approche utilitaire et en centralisant la définition de ces motifs communs.

4.  **Interdiction des Blocs `<style>` dans les Composants Vue :**
    *   **Objectif :** Maintenir une source unique de vérité pour le style d'un composant (son template ou les classes CSS globales définies via `@apply`).
    *   **Règle :** **Ne pas utiliser de blocs `<style>` ou `<style scoped>`** dans les composants `.vue` pour définir des styles spécifiques au composant.
    *   **Justification :** Évite la fragmentation des styles, assure la cohérence, simplifie la recherche des définitions de style.

## Styles Globaux et Thème

-   **Variables de Thème :** Définies via des variables CSS natives dans `packages/ui/src/assets/themes.css`. Les classes définies via `@apply` doivent utiliser ces variables (ex: `bg-[--color-primary-600]`) pour être theme-aware.
-   **Styles de Base Globaux :** Les styles de base (`body`, `a`, `h1-h6`, `@font-face`) résident dans `@layer base` de `packages/ui/src/assets/main.css`.

## Statut
Cette convention est **active** et remplace les précédentes pendant la durée de la refactorisation (EPIC 04 et au-delà). 