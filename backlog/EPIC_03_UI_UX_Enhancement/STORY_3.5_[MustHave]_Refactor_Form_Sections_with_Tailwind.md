# STORY 3.5: [Must Have] Refactoriser les Sections de Formulaire avec Tailwind

**En tant que** Développeur,
**Je veux** refactoriser le style des composants de section de formulaire (ex: `BasicsForm`, `WorkSection`, `WorkExperienceForm`, `EducationSection`, etc.) en utilisant les classes utilitaires Tailwind et les composants de base créés (`BaseButton`),
**Afin d'** harmoniser l'apparence des formulaires avec le nouveau système de design et supprimer les anciens styles CSS scoped.

---

## Critères d'Acceptation

1.  Les styles `<style scoped>` des composants de formulaire principaux (`BasicsForm`, `WorkSection`, `EducationSection`, `SkillsSection`, `ProjectsSection`, etc.) sont supprimés ou réduits au minimum.
2.  Les styles des éléments de formulaire (labels, inputs, textareas, titres de section, conteneurs `card`) sont remplacés par des classes utilitaires Tailwind.
3.  Les classes Tailwind appliquent les couleurs du thème (texte, fond, bordures) et les espacements définis dans les design tokens.
4.  Les composants enfants (ex: `WorkExperienceForm`, `EducationItemForm`) sont également refactorisés pour utiliser Tailwind.
5.  L'apparence des formulaires est cohérente avec la mise en page générale (thème sombre, espacements).
6.  Le composant `BaseButton` est utilisé pour les boutons "Ajouter" et "Supprimer" (au lieu de boutons stylisés localement).

---

## Tâches Techniques

-   [X] **TASK 3.5.1 :** Pour chaque composant de section/item de formulaire (`BasicsForm`, `WorkSection`, `WorkExperienceForm`, `EducationSection`, `EducationItemForm`, `SkillsSection`, `SkillCategoryForm`, `ProjectsSection`, `ProjectItemForm`, `VolunteerSection`, `VolunteerItemForm`, `CertificatesSection`, `CertificateItemForm`, `PublicationsSection`, `PublicationItemForm`, `LanguagesSection`, `LanguageItemForm`, `InterestsSection`, `InterestItemForm`, `ReferencesSection`, `ReferenceItemForm`, `AwardsSection`, `AwardItemForm`, `ProfileItemForm`) :
    *   Analyser les styles scoped existants.
    *   Identifier les éléments HTML principaux (conteneurs, titres, labels, inputs, textareas, boutons).
    *   Supprimer les styles scoped.
    *   Appliquer les classes utilitaires Tailwind pour recréer l'apparence (couleurs `bg-neutral-*`, `text-neutral-*`, `border-neutral-*`, padding `p-*`, marges `m-*`, espacement `space-y-*`, `gap-*`, polices `font-*`, tailles `text-*`, rayons `rounded-*`, ombres `shadow`).
    *   Utiliser les classes des états `hover:`, `focus:`, `focus-visible:` pour les éléments interactifs.
    *   Remplacer les boutons personnalisés par `<BaseButton>` (éventuellement avec des props pour les variantes si nécessaire, ex: bouton supprimer en rouge).
-   [X] **TASK 3.5.2 :** Vérifier la cohérence visuelle entre les différentes sections de formulaire.
-   [X] **TASK 3.5.3 :** S'assurer que les styles de la prévisualisation (`ResumePreview.vue`) ne sont *pas* affectés négativement (ils seront traités dans une story dédiée). 

---

## Notes

-   C'est une tâche potentiellement longue car elle touche de nombreux composants.
-   Prioriser la cohérence sur la perfection pixel-perfect à ce stade.
-   Utiliser les composants `BaseInput` et `Card` si créés dans la story précédente pour simplifier.
-   Pour les boutons "Supprimer", on pourrait envisager une variante "danger" de `BaseButton` ou appliquer des classes spécifiques (`bg-error-600`, `hover:bg-error-700`). Pour l'instant, utiliser `BaseButton` standard est acceptable.
-   Nettoyer également les styles globaux résiduels dans `App.vue` qui pourraient cibler des éléments de formulaire. 