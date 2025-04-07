# KB: Guide des Versions de Tailwind CSS

## Contexte
Ce document vise à clarifier les différences majeures entre les versions de Tailwind CSS, notamment entre la v3 et la v4 (spécifiquement v4.1+ utilisée dans ce projet), afin d'éviter les confusions lors de la configuration et de l'utilisation avec Vite.

## Tailwind CSS v3 (Stable Précédente)

-   **Configuration :** Utilise principalement `tailwind.config.js`.
-   **Intégration Vite :** Repose sur le plugin `@tailwindcss/vite`.
-   **Directives CSS :** Utilise `@tailwind base;`, `@tailwind components;`, `@tailwind utilities;` dans le fichier CSS principal.
-   **Dépendances :** Nécessite `tailwindcss` (v3.x), `postcss`, `autoprefixer` et `@tailwindcss/vite`.

## Tailwind CSS v4 (v4.1+ - **Utilisée dans ce projet**)

-   **Objectif :** Performance accrue, configuration simplifiée par rapport aux versions de développement antérieures.
-   **Configuration :** Utilise `tailwind.config.js` (ou `.ts`) principalement pour l'option `content`.
-   **Intégration Vite :** Repose à nouveau sur le plugin officiel **`@tailwindcss/vite`** (contrairement aux versions `@next` précédentes qui nécessitaient `@tailwindcss/postcss`).
-   **Importation CSS :** Utilise **`@import "tailwindcss";`** comme point d'entrée principal dans le CSS.
-   **Dépendances :** Nécessite `tailwindcss` (v4.1+) et **`@tailwindcss/vite`**. Le paquet `@tailwindcss/postcss` n'est *pas* nécessaire avec le plugin Vite.
-   **Documentation de référence :** [https://tailwindcss.com/docs/installation/using-vite](https://tailwindcss.com/docs/installation/using-vite) (s'assurer que la version sélectionnée est v4+)

## Points Clés pour ce Projet (Utilisant v4.1+)

1.  **Dépendances Installées :** `tailwindcss` (v4.1+), **`@tailwindcss/vite`**. Les dépendances `postcss` et `autoprefixer` ont été retirées car elles ne sont pas des dépendances directes de `@tailwindcss/vite`.
2.  **Configuration Tailwind :** Pas de `tailwind.config.js`.
3.  **Configuration PostCSS :** Aucun fichier `postcss.config.js` manuel n'est requis.
4.  **CSS Principal (`main.css`) :** Doit commencer par `@import "tailwindcss";`.
5.  **Vite (`vite.config.ts`) :** Doit importer et utiliser le plugin `tailwindcss()` de `@tailwindcss/vite`. 