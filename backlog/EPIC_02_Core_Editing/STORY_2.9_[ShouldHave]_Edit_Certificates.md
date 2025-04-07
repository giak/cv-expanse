# STORY 2.9: [Should Have] Édition de la Section "Certificates"

**En tant que** Utilisateur,
**Je veux** pouvoir ajouter, modifier et supprimer des certifications dans la section "Certificates" de mon CV,
**Afin de** pouvoir lister mes certifications professionnelles.

---

## Critères d'Acceptation

1.  L'UI affiche une section pour gérer les certifications (`certificates`).
2.  Un bouton "Ajouter un certificat" permet de créer une nouvelle entrée vide.
3.  Chaque certificat affiché possède des champs éditables (ex: `name`, `date`, `issuer`, `url`).
4.  Les modifications sont reflétées dans l'état (`resumeState.certificates`).
5.  Un bouton "Supprimer" est disponible pour chaque certificat.
6.  Les données sont sauvegardées et chargées correctement.

---

## Tâches Techniques

-   [X] **TASK 2.9.1 :** Définir `CertificateInterface` dans `shared`.
-   [X] **TASK 2.9.2 :** Définir `CertificateEntityInterface` dans `core` et l'ajouter à `ResumeEntityInterface`.
-   [X] **TASK 2.9.3 :** Initialiser `certificates: []` dans `App.vue`.
-   [X] **TASK 2.9.4 :** Créer `CertificateItemForm.vue`.
-   [X] **TASK 2.9.5 :** Créer `CertificatesSection.vue`.
-   [X] **TASK 2.9.6 :** Intégrer `CertificatesSection.vue` dans `App.vue`.
-   [X] **TASK 2.9.7 :** Assurer sauvegarde/chargement.

---

## Notes
- Similaire aux autres sections liste. 