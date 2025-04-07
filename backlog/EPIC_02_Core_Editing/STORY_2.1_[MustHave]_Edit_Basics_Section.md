# STORY 2.1: [Must Have] Édition de la Section "Basics"

**En tant que** Utilisateur,
**Je veux** pouvoir modifier les informations de la section "Basics" de mon CV (nom, titre, email, téléphone, site web, résumé, localisation) via l'interface utilisateur,
**Afin de** pouvoir saisir et mettre à jour mes informations personnelles de base.

---

## Critères d'Acceptation

1.  L'interface utilisateur (UI) affiche un formulaire ou des champs éditables pour les propriétés de `BasicsInterface` (name, label, email, phone, url, summary, location).
2.  Les modifications effectuées dans les champs du formulaire mettent à jour l'état de l'application qui contient les données du CV.
3.  Les données mises à jour du CV (spécifiquement la section `basics`) peuvent être sauvegardées en utilisant le mécanisme de persistance existant (`LocalStorageResumeRepository`).
4.  Au chargement de l'application, les données "Basics" sauvegardées sont correctement chargées depuis `localStorage` et affichées dans les champs correspondants.
5.  Le formulaire gère correctement les champs imbriqués de `location` (adresse, ville, etc.).

---

## Tâches Techniques

-   [X] **TASK 2.1.1 :** Créer un composant Vue dédié à l'édition de la section Basics (ex: `BasicsForm.vue` dans `packages/ui/src/components/`).
-   [X] **TASK 2.1.2 :** Implémenter les champs de saisie dans `BasicsForm.vue` pour chaque propriété éditable de `BasicsInterface` (incluant les sous-champs de `location`).
-   [X] **TASK 2.1.3 :** Mettre en place un mécanisme simple de gestion d'état dans le package `ui` pour contenir les données actuelles du CV (ex: un `ref` réactif de Vue 3 pour l'objet `ResumeEntityInterface`).
-   [X] **TASK 2.1.4 :** Connecter les champs de saisie de `BasicsForm.vue` à l'état réactif en utilisant `v-model` pour assurer la liaison bidirectionnelle des données.
-   [X] **TASK 2.1.5 :** Intégrer (directement ou via une abstraction) `LocalStorageResumeRepository` dans la logique UI pour :
    *   Charger les données initiales au démarrage de l'application.
    *   Sauvegarder les données modifiées.
-   [X] **TASK 2.1.6 :** Ajouter un bouton "Sauvegarder" dans l'UI qui déclenche l'appel à la méthode `save` du repository avec les données de l'état actuel.
-   [X] **TASK 2.1.7 :** Afficher le composant `BasicsForm.vue` dans la page principale (ex: `HomePage.vue` ou `App.vue`).

---

## Notes

-   Se concentrer sur le flux principal : Afficher -> Lier -> Mettre à jour l'état -> Sauvegarder.
-   La validation avancée des entrées sera traitée dans une story ultérieure.
-   Pour cette première étape d'édition, l'utilisation directe du repository depuis l'UI est acceptable, mais nous pourrions introduire une couche de service/use case plus tard pour découpler.
-   Penser à la manière dont l'état est initialisé (charger depuis localStorage ou un objet vide si rien n'existe).
