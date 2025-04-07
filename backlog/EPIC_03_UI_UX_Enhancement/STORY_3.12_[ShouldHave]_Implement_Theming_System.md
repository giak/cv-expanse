# STORY 3.12: [ShouldHave] Implémenter un Système de Thèmes

**En tant qu'** Utilisateur,
**Je veux** pouvoir choisir entre différents thèmes pour l'application (notamment clair/sombre),
**Afin de** personnaliser l'interface selon mes préférences et améliorer le confort visuel dans différentes conditions d'éclairage.

## Critères d'Acceptation

-   [x] L'application dispose d'un thème clair par défaut.
-   [x] Un thème sombre complet est disponible comme alternative.
-   [x] Les utilisateurs peuvent basculer entre les thèmes via un bouton/toggle visible dans l'interface.
-   [x] Le choix de thème est persistant (stocké dans localStorage) et automatiquement appliqué lors des visites ultérieures.
-   [x] L'application respecte la préférence système pour le thème initial (via prefers-color-scheme media query) si aucun choix n'a été fait.
-   [x] Tous les composants de l'UI s'adaptent correctement aux changements de thème sans nécessiter de rafraîchissement.
-   [ ] Les contrastes de couleurs restent accessibles (conformes à WCAG AA) dans tous les thèmes.

## Tâches Techniques

-   [x] **TASK 3.12.1 :** Créer un système de variables CSS de thème dans `packages/ui/src/assets/themes.css` avec des variables pour :
    -   Couleurs primaires/secondaires
    -   Couleurs de texte
    -   Couleurs d'arrière-plan
    -   Couleurs de bordure
    -   Couleurs d'état (erreur, succès, etc.)
-   [x] **TASK 3.12.2 :** Définir le thème clair (valeurs par défaut) et le thème sombre en utilisant des attributs de données ou classes CSS.
-   [x] **TASK 3.12.3 :** Créer un composant `ThemeToggle.vue` avec un bouton/interrupteur pour changer de thème.
-   [x] **TASK 3.12.4 :** Implémenter un service de thème (`useTheme.ts`) utilisant Composition API pour gérer :
    -   Changement de thème
    -   Persistance dans localStorage
    -   Détection de la préférence système
-   [x] **TASK 3.12.5 :** Intégrer le composant `ThemeToggle` dans l'interface utilisateur (layout principal).
-   [x] **TASK 3.12.6 :** Refactoriser les composants clés (au moins les composants de base) pour utiliser les variables de thème au lieu de classes Tailwind codées en dur.
-   [ ] **TASK 3.12.7 :** Tester les transitions entre thèmes dans différents navigateurs.
-   [ ] **TASK 3.12.8 :** Maintenir les contrastes accessibles conformes à WCAG AA pour tous les thèmes.

## Notes d'implémentation

### Architecture du système de thèmes

1. **Approche recommandée** : Utiliser CSS custom properties (variables) avec un attribut `data-theme` sur l'élément racine (`<html>` ou `#app`).

```css
/* Thème clair (par défaut) */
:root {
  --color-bg-primary: #ffffff;
  --color-text-primary: #1a202c;
  /* ... autres variables ... */
}

/* Thème sombre */
[data-theme="dark"] {
  --color-bg-primary: #1a202c;
  --color-text-primary: #f7fafc;
  /* ... autres variables ... */
}
```

2. **Intégration avec Tailwind** : Étendre la configuration pour utiliser ces variables via `theme.extend.colors` dans `tailwind.config.js` :

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        'theme-bg': 'var(--color-bg-primary)',
        'theme-text': 'var(--color-text-primary)',
        // ... autres mappings ...
      }
    }
  }
}
```

3. **Logique de basculement** : 
   - Store global ou hook de composition avec méthodes `toggleTheme()`, `setTheme(theme)`, etc.
   - Écoute des changements de préférence système via `window.matchMedia('(prefers-color-scheme: dark)')`.

### Testabilité
- Tester sur différents périphériques et navigateurs.
- Vérifier que le changement de thème n'entraîne pas de rechargement de page.
- Valider la persistance du thème entre les sessions.

### Performance
- Éviter les flashs de contenu incorrect (FOUC) en initialisant le thème au plus tôt.
- Utiliser des transitions CSS pour les changements de couleur pour une meilleure UX. 