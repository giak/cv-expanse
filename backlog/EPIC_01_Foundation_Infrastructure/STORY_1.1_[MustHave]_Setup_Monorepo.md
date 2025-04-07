# STORY 1.1: [Must Have] Configuration de la Structure du Monorepo

**En tant que** Développeur,
**Je veux** que la structure du monorepo PNPM soit configurée avec les packages `ui`, `core`, `infrastructure`, et `shared`,
**Afin que** le code soit organisé selon les principes de la Clean Architecture dès le départ.

---

## Critères d'Acceptation

-   Le dépôt contient un fichier `pnpm-workspace.yaml` valide qui référence les packages dans le répertoire `packages`.
-   Les répertoires `packages/ui`, `packages/core`, `packages/infrastructure`, `packages/shared` existent.
-   Chaque répertoire de package (`ui`, `core`, `infrastructure`, `shared`) contient un fichier `package.json` de base avec au moins un nom de package (ex: `@cv-generator/ui`).
-   Le répertoire racine contient un fichier `package.json` principal.
-   Les dépendances de développement essentielles (TypeScript, Vite, Vitest, Biome, Vue) sont listées dans le `package.json` racine.
-   Les configurations `tsconfig.json` (à la racine et/ou dans les packages) sont mises en place pour permettre la résolution correcte des références entre les packages du monorepo.
-   La commande `pnpm install` exécutée à la racine réussit sans erreurs.
-   Une commande de build de base (ex: `pnpm -r build` ou `pnpm -r exec tsc --noEmit`) peut être exécutée sans erreur de configuration majeure (même si les packages ne produisent rien de concret à ce stade).

---

## Tâches Techniques

-   [X] **TASK 1.1.1 :** Initialiser le workspace PNPM (`pnpm init`, configuration `pnpm-workspace.yaml`).
-   [X] **TASK 1.1.2 :** Créer la structure des répertoires (`mkdir -p packages/{ui,core,infrastructure,shared}`).
-   [X] **TASK 1.1.3 :** Configurer les `package.json` initiaux pour chaque package (avec `name`, `version`, `main`/`module`) et à la racine (`private: true`, `workspaces`).
-   [X] **TASK 1.1.4 :** Installer les dépendances de développement de base à la racine (`pnpm add -D -w typescript vite vitest @biomejs/biome vue @vue/tsconfig ...`).
-   [X] **TASK 1.1.5 :** Configurer les fichiers `tsconfig.json` de base à la racine et pour chaque package, en utilisant les `paths` ou les `references` pour gérer les dépendances internes du workspace.

---

## Notes

-   S'assurer que les noms de package suivent bien la convention `@cv-generator/` (ex: `@cv-generator/ui`).
-   Utiliser les versions spécifiées dans le PFD/Architecture pour les dépendances clés si possible.
-   Vérifier que PNPM est configuré pour utiliser le mode `hoist=false` ou la stratégie recommandée pour les monorepos TypeScript afin d'éviter les problèmes de résolution de types.
