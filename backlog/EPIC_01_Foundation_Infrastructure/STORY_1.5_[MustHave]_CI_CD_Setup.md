# STORY 1.5: [Must Have] Configuration de Base de l'Intégration Continue (CI)

**En tant que** Développeur,
**Je veux** un pipeline d'Intégration Continue (CI) de base configuré pour le projet,
**Afin que** la qualité du code (linting, tests, build) soit automatiquement vérifiée à chaque push ou pull request.

---

## Critères d'Acceptation

1.  Un fichier de configuration pour un service de CI (ex: `.github/workflows/ci.yml` pour GitHub Actions) est créé.
2.  Le pipeline CI se déclenche automatiquement sur les pushs vers la branche principale (`main` ou `master`) et sur les Pull Requests ciblant cette branche.
3.  Le pipeline exécute les étapes suivantes avec succès pour l'ensemble du monorepo :
    *   Checkout du code.
    *   Mise en place de l'environnement Node.js et PNPM.
    *   Installation des dépendances (`pnpm install`).
    *   Vérification du formatage/linting du code (ex: `pnpm lint`).
    *   Exécution des tests unitaires (ex: `pnpm test`).
    *   Construction de tous les packages (ex: `pnpm -r build`).
4.  Le statut du pipeline (succès/échec) est visible (ex: sur GitHub).

---

## Tâches Techniques

-   [X] **TASK 1.5.1 :** Créer la structure de répertoires `.github/workflows` si elle n'existe pas.
-   [X] **TASK 1.5.2 :** Créer un fichier de workflow CI (ex: `ci.yml`) dans `.github/workflows`.
-   [X] **TASK 1.5.3 :** Définir les déclencheurs (triggers) du workflow (push sur `main`, pull requests vers `main`).
-   [X] **TASK 1.5.4 :** Configurer le job CI principal :
    *   Utiliser une image de base appropriée (ex: `ubuntu-latest`).
    *   Ajouter l'étape de checkout du code (`actions/checkout@vX`).
    *   Ajouter l'étape de configuration de PNPM (`pnpm/action-setup@vX`).
    *   Ajouter l'étape de configuration de Node.js (`actions/setup-node@vX`), en incluant la mise en cache des dépendances PNPM.
    *   Ajouter l'étape d'installation des dépendances (`pnpm install`).
    *   Ajouter l'étape pour exécuter le linting (nécessite de définir un script `lint` à la racine, ex: `pnpm -r lint`).
    *   Ajouter l'étape pour exécuter les tests (nécessite de définir un script `test` à la racine, ex: `pnpm -r test`).
    *   Ajouter l'étape pour exécuter le build (nécessite de définir un script `build` à la racine, ex: `pnpm -r build`).
-   [X] **TASK 1.5.5 :** Définir les scripts `lint`, `test`, et `build` dans le `package.json` racine, qui exécuteront les commandes correspondantes dans chaque package du workspace (`pnpm -r <script>`). (Scripts déjà présents)

---

## Notes

-   Nous utiliserons GitHub Actions comme plateforme CI/CD.
-   Cette première version se concentre sur l'intégration continue (vérification du code). Le déploiement continu (CD) sera abordé dans des stories ultérieures.
-   Il faudra s'assurer que les scripts `lint`, `test`, `build` existent bien (ou les créer) dans les `package.json` respectifs des sous-packages, ou au moins que la commande `pnpm -r <script>` ne génère pas d'erreur si un package ne définit pas le script.
