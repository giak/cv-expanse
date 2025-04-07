# STORY 3.4: [Must Have] Créer des Composants de Base Réutilisables

**En tant que** Développeur,
**Je veux** créer ou refactoriser des composants UI de base (ex: Bouton, Champ de saisie, Carte) en utilisant les classes utilitaires et les design tokens de Tailwind CSS v4,
**Afin d'** avoir des éléments d'interface cohérents, réutilisables et stylisés conformément au nouveau système de design.

---

## Critères d'Acceptation

1.  Le composant `BaseButton.vue` existant est refactorisé pour utiliser exclusivement des classes Tailwind pour son style (arrière-plan, texte, padding, bordure, états hover/focus), en remplacement de ses styles `<style scoped>`.
2.  Le style du bouton utilise les design tokens définis (ex: couleurs primaires, rayons de bordure).
3.  (Optionnel mais recommandé) Un composant `BaseInput.vue` est créé, appliquant des styles Tailwind cohérents pour les champs de saisie textuels (padding, bordure, focus, couleurs de fond/texte du thème).
4.  (Optionnel) Un composant `Card.vue` est créé pour encapsuler le style commun des conteneurs de section (arrière-plan, padding, ombre, bordure, rayon) en utilisant Tailwind.
5.  Ces composants de base sont facilement utilisables et configurables via des props si nécessaire (ex: variantes de style pour les boutons).

---

## Tâches Techniques

-   [X] **TASK 3.4.1 :** Analyser les styles existants dans `packages/ui/src/components/BaseButton.vue`.
-   [X] **TASK 3.4.2 :** Supprimer les styles `<style scoped>` de `BaseButton.vue`.
-   [X] **TASK 3.4.3 :** Appliquer les classes utilitaires Tailwind à l'élément `<button>` dans `BaseButton.vue` pour recréer l'apparence et les états (normal, hover, focus-visible) en utilisant les tokens (couleurs primaires, rayons).
-   [ ] **TASK 3.4.4 :** (Si implémenté) Créer `BaseInput.vue` avec un `<input>` stylisé via Tailwind (bordures, padding, couleurs, état focus).
-   [ ] **TASK 3.4.5 :** (Si implémenté) Créer `Card.vue` avec un `<div>` utilisant les classes Tailwind pour l'arrière-plan (`bg-neutral-800`), le padding (`p-4`), l'ombre (`shadow`), le rayon (`rounded-lg`). Utiliser `<slot>` pour le contenu.
-   [X] **TASK 3.4.6 :** Mettre à jour l'utilisation de `BaseButton` dans les autres composants (ex: `WorkSection.vue`, `App.vue`) pour s'assurer qu'il s'affiche correctement.
-   [ ] **TASK 3.4.7 :** (Si `BaseInput`/`Card` créés) Commencer à les utiliser dans un ou deux formulaires pour validation (ex: remplacer `<input>` dans `BasicsForm.vue` par `<BaseInput>`).

---

## Notes

-   L'objectif est d'encapsuler les styles répétitifs dans des composants pour la maintenabilité et la cohérence.
-   On commence par `BaseButton` qui existe déjà.
-   `BaseInput` et `Card` sont utiles mais peuvent être introduits progressivement. Pour cette story, se concentrer sur `BaseButton` est le minimum requis.
-   Penser aux états : `hover:`, `focus:`, `focus-visible:`. Utiliser `focus-visible:` pour les styles de focus afin de ne pas les afficher lors d'un clic souris. 