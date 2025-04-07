# KB: Bonnes Pratiques PNPM pour les Monorepos

## Contexte
Ce document résume les bonnes pratiques et les conventions adoptées pour la gestion du monorepo de ce projet à l'aide de PNPM. Il vise à compléter la documentation officielle de PNPM en se concentrant sur les aspects les plus pertinents pour notre configuration.

## Pourquoi PNPM ?
PNPM a été choisi pour plusieurs raisons clés, particulièrement avantageuses dans un contexte monorepo :
- **Efficacité Disque :** Utilise un store adressable par contenu (`~/.pnpm-store`) et des liens (hard links ou reflinks) vers les dépendances. Les fichiers ne sont stockés qu'une seule fois sur le disque, peu importe le nombre de projets ou de versions les utilisant.
- **Rapidité d'Installation :** Les installations sont généralement plus rapides que NPM ou Yarn, surtout lors de réinstallations ou avec des dépendances partagées.
- **Structure `node_modules` Non-Plate :** PNPM crée une structure `node_modules` qui évite les "dépendances fantômes" (accès à des packages non déclarés explicitement). Cela renforce la fiabilité et la prévisibilité.
- **Support Monorepo Intégré :** Fournit des fonctionnalités natives pour gérer les workspaces (`pnpm-workspace.yaml`, commandes `--filter` et `-r`).

## Configuration du Workspace
- Le fichier `pnpm-workspace.yaml` à la racine définit les emplacements des packages du monorepo (ex: `packages/*`).
- Chaque sous-répertoire correspondant à un package (ex: `packages/ui`, `packages/core`) contient son propre `package.json`.

## Gestion des Dépendances

- **Installer toutes les dépendances :**
  ```bash
  # À la racine du projet
  pnpm install # ou pnpm i
  ```
  Cette commande installe les dépendances pour *tous* les packages définis dans `pnpm-workspace.yaml` ainsi que les dépendances racine.

- **Ajouter une dépendance à la racine (ex: outil de dev partagé) :**
  ```bash
  # À la racine du projet
  pnpm add -D -w <nom-du-package>
  # -D pour devDependency
  # -w pour spécifier que c'est pour la racine (workspace root)
  ```

- **Ajouter une dépendance à un package spécifique :**
  ```bash
  # À la racine du projet
  pnpm add <nom-du-package> --filter <nom-du-workspace>
  # Ex: pnpm add zod --filter @cv-generator/shared
  # Pour une devDependency, ajouter -D
  # Ex: pnpm add -D @types/react --filter @cv-generator/ui
  ```
  *Note :* `<nom-du-workspace>` correspond au `name` dans le `package.json` du sous-package (ex: `@cv-generator/ui`).

- **Supprimer une dépendance :** Utiliser `pnpm remove` avec les mêmes flags (`-w`, `--filter`).

## Exécution de Scripts

- **Exécuter un script dans *tous* les packages qui le définissent :**
  ```bash
  # À la racine du projet
  pnpm -r <nom-du-script>
  # Ex: pnpm -r build
  # Ex: pnpm -r test
  ```
  Le flag `-r` signifie récursif.

- **Exécuter un script dans *un seul* package spécifique :**
  *Méthode 1 (avec filtre) :*
    ```bash
    # À la racine du projet
    pnpm --filter <nom-du-workspace> <nom-du-script>
    # Ex: pnpm --filter @cv-generator/ui dev
    ```
  *Méthode 2 (avec changement de répertoire) :*
    ```bash
    # À la racine du projet
    pnpm -C <chemin-vers-le-package> <nom-du-script>
    # Ex: pnpm -C packages/ui dev
    ```
    La méthode avec `-C` est souvent plus simple et directe pour les scripts définis à la racine qui ciblent un seul package (comme le script `dev` dans notre `package.json` racine).

- **Exécuter un script dans plusieurs packages spécifiques :** Utiliser plusieurs flags `--filter`.
  ```bash
  # À la racine du projet
  pnpm --filter <package-1> --filter <package-2> <script>
  ```

## Liens entre Packages Locaux
- PNPM gère automatiquement les liens symboliques entre les packages locaux du workspace.
- Si `@cv-generator/ui` déclare `@cv-generator/core` dans ses dépendances (`package.json`), PNPM s'assure que l'import fonctionne correctement sans nécessiter de publication ou de `pnpm link` manuel.
- **Important:** Pour que les outils de build/dev (comme Vite) ou TypeScript résolvent correctement ces imports pendant le développement, il faut souvent configurer des **alias** (ex: dans `vite.config.ts`) et/ou des **paths** (dans `tsconfig.json`) qui pointent vers les répertoires `src` des packages dépendants.

## Fichier `pnpm-lock.yaml`
- Ce fichier est crucial pour garantir des installations reproductibles.
- **Il doit toujours être commité dans le contrôle de version (Git).**

## Points d'Attention / Bonnes Pratiques
- **Scripts Racine Simplifiés :** Préférer l'utilisation de `pnpm -C <path>` dans les scripts du `package.json` racine pour cibler un sous-package, c'est plus lisible que `--filter`. (Comme fait pour les scripts `dev` et `test:e2e`).
- **Dépendances Fantômes :** Grâce à PNPM, si vous essayez d'importer un package qui n'est pas explicitement listé dans le `package.json` de votre workspace, vous obtiendrez probablement une erreur, ce qui est une *bonne chose*. Cela évite les dépendances implicites et fragiles.
- **Cohérence des Versions :** Veiller à ce que les versions des dépendances partagées (comme Vue, TypeScript) soient gérées de manière cohérente, souvent en les déclarant à la racine ou en utilisant des plages de versions compatibles.
- **Nettoyage :** Utiliser `pnpm -r clean` (si un script `clean` est défini pour supprimer `node_modules` et `dist`) ou explorer les commandes PNPM pour purger le store si nécessaire (rarement utile).

## Ressources
- **Documentation Officielle PNPM :** [https://pnpm.io/fr/](https://pnpm.io/fr/)
- **Workspaces PNPM :** [https://pnpm.io/fr/workspaces](https://pnpm.io/fr/workspaces)
- **Command `filter` :** [https://pnpm.io/fr/filtering](https://pnpm.io/fr/filtering)
