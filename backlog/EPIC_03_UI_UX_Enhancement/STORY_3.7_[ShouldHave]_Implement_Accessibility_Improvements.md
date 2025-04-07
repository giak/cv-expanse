# STORY 3.7: [Should Have] Implémenter les Améliorations d'Accessibilité

**En tant que** Utilisateur (y compris ceux utilisant des technologies d'assistance),
**Je veux** que l'application soit navigable, compréhensible et utilisable via le clavier et les lecteurs d'écran,
**Afin de** pouvoir créer et gérer mon CV efficacement, quelles que soient mes capacités.

---

## Critères d'Acceptation

1.  **Navigation au Clavier :** Tous les éléments interactifs (boutons, liens, champs de formulaire) sont atteignables et activables en utilisant uniquement le clavier (navigation avec `Tab`, activation avec `Entrée`/`Espace`).
2.  **Ordre de Focus Logique :** L'ordre de tabulation suit le flux visuel logique de la page.
3.  **Indicateur de Focus Visible :** L'élément qui a le focus est clairement indiqué visuellement (en utilisant les styles `focus-visible:` de Tailwind et les couleurs du thème).
4.  **Étiquettes de Formulaire :** Tous les champs de formulaire (`input`, `textarea`, `select`) ont une étiquette (`<label>`) associée via l'attribut `for`.
5.  **Texte Alternatif pour Images :** Toutes les images significatives (si présentes) ont un attribut `alt` descriptif. Les images purement décoratives ont un `alt=""`.
6.  **HTML Sémantique :** Utilisation appropriée des balises HTML sémantiques (`<main>`, `<nav>`, `<header>`, `<footer>`, `<button>`, etc.) pour structurer le contenu.
7.  **ARIA si Nécessaire :** Utilisation judicieuse des attributs ARIA (`aria-label`, `aria-labelledby`, `aria-describedby`, `role`) uniquement lorsque le HTML sémantique seul ne suffit pas (ex: pour des boutons icônes sans texte visible).
8.  **Contraste des Couleurs :** Les combinaisons de couleurs texte/arrière-plan respectent les ratios de contraste minimaux WCAG 2.1 AA (4.5:1 pour le texte normal, 3:1 pour le grand texte et les éléments graphiques/UI).

---

## Tâches Techniques

-   [ ] **TASK 3.7.1 :** Vérifier la focusabilité au clavier de *tous* les éléments interactifs (boutons d'ajout/suppression, champs de formulaire, liens potentiels). Assurer la présence et la visibilité des styles `:focus-visible`.
-   [ ] **TASK 3.7.2 :** Tester l'ordre de tabulation dans chaque section de formulaire et dans la mise en page globale (`App.vue`). Corriger si nécessaire.
-   [ ] **TASK 3.7.3 :** Revoir tous les composants `*Form.vue` et s'assurer que chaque `input`, `textarea` a une `<label>` associée avec un attribut `for` pointant vers l'`id` du champ. Utiliser les `uuid` déjà en place.
-   [ ] **TASK 3.7.4 :** Inspecter les boutons, en particulier les boutons "Supprimer" (`&times;`). S'assurer qu'ils ont un texte suffisant ou un `aria-label` descriptif (ex: `aria-label="Supprimer cette expérience"`).
-   [ ] **TASK 3.7.5 :** Revalider l'utilisation des balises sémantiques dans `App.vue` (`<header>`, `<main>`, `<footer>`).
-   [ ] **TASK 3.7.6 :** Utiliser les outils de développement du navigateur pour vérifier les contrastes de couleurs pour les textes principaux, les labels, les liens et les bordures d'input importants. Ajuster les couleurs du thème si nécessaire.
-   [ ] **TASK 3.7.7 :** [Optionnel] Installer et exécuter une extension d'accessibilité (ex: Axe DevTools, WAVE) pour un audit automatisé et identifier les problèmes potentiels.

---

## Notes

-   Objectif : Conformité WCAG 2.1 niveau AA.
-   Les couleurs du thème ont été choisies pour avoir de bons contrastes, mais une vérification est nécessaire.
-   L'utilisation de `focus-visible:` via Tailwind est essentielle pour une bonne expérience clavier sans polluer l'expérience souris.
-   Les `uuid` générés dans les formulaires sont parfaits pour lier les `label` aux `input`. 