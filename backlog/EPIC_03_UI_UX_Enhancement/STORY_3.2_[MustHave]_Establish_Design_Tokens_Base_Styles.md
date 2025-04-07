# STORY 3.2: [Must Have] Établir les Design Tokens et Styles de Base

**En tant que** Développeur,
**Je veux** définir les design tokens fondamentaux (couleurs, typographie, espacement, rayons) basés sur le design existant et appliquer des styles de base globaux en utilisant Tailwind CSS v4,
**Afin que** l'application ait une apparence de base cohérente et que les composants futurs puissent utiliser ces tokens.

---

## Critères d'Acceptation

1.  Le fichier CSS principal (`packages/ui/src/assets/main.css`) contient un bloc `@theme` définissant les variables CSS pour :
    *   Les polices personnalisées (`--font-sans` pour InterTight, `--font-mono` pour FiraCode).
    *   Les palettes de couleurs primaires, neutres, succès, avertissement, erreur, info, en utilisant les valeurs RGB extraites de `_colors.scss`.
    *   Les rayons de bordure (`--radius-xs` à `--radius-full`).
    *   Les valeurs de z-index (`--z-index-*`).
    *   (Optionnel: Espacement, ombres si nécessaire au-delà des valeurs par défaut de Tailwind).
2.  Les déclarations `@font-face` pour `InterTight` et `FiraCode` sont présentes dans le CSS (probablement dans `@layer base`), référençant correctement les fichiers de police dans `packages/ui/src/assets/fonts/`.
3.  Les styles de base (`@layer base`) dans `main.css` appliquent :
    *   La police `--font-sans` au `body`.
    *   Les couleurs sémantiques du thème sombre par défaut pour le texte (`--color-neutral-200`) et l'arrière-plan (`--color-neutral-900`) du `body`.
    *   Les couleurs de lien de base utilisant la palette primaire (`--color-primary-400` / `--color-primary-300` au survol).
    *   Un style de focus visible par défaut utilisant les couleurs du thème.
    *   Des styles de barre de défilement personnalisés pour le thème sombre.
4.  L'application se lance (`pnpm dev`) et affiche correctement la police de base et les couleurs d'arrière-plan définies.

---

## Tâches Techniques

-   [X] **TASK 3.2.1 :** Extraire les variables de police, couleur, rayon et z-index depuis les fichiers `source/assets/styles/themes/_variables.scss` et `source/assets/styles/themes/_colors.scss`.
-   [X] **TASK 3.2.2 :** Définir les variables CSS correspondantes dans le bloc `@theme` de `packages/ui/src/assets/main.css`, en utilisant les noms de tokens Tailwind v4 (ex: `--font-sans`, `--color-primary-500`). Convertir les couleurs hexadécimales en RGB pour Tailwind v4.
-   [X] **TASK 3.2.3 :** Ajouter les règles `@font-face` pour `InterTight` et `FiraCode` dans `@layer base` de `main.css`, pointant vers les fichiers locaux.
-   [X] **TASK 3.2.4 :** Configurer les styles de base dans `@layer base` pour appliquer la police par défaut, les couleurs de texte et d'arrière-plan du thème sombre, les styles de lien, et les styles de focus visible.
-   [X] **TASK 3.2.5 :** Ajouter des styles de barre de défilement personnalisés pour le thème sombre dans `@layer base`.
-   [X] **TASK 3.2.6 :** Vérifier que l'application charge les polices et applique les styles de base correctement au lancement.

---

## Notes

-   Tailwind v4 utilise des variables CSS natives définies dans `@theme` pour les tokens.
-   Les couleurs doivent être définies comme des triplets RGB (ex: `236, 254, 255` pour `--color-primary-50`).
-   Les styles de base dans `@layer base` garantissent qu'ils ont une faible spécificité et peuvent être surchargés par les utilitaires Tailwind.
-   Les polices ont été placées dans `packages/ui/src/assets/fonts/`. 