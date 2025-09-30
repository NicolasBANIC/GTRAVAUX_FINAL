# 🧪 Scénarios de Test du Chat d'Urgence

## 📋 Guide de Test Manuel

Voici les scénarios à tester pour valider le bon fonctionnement du chat amélioré.

---

## 🚨 Tests d'Urgence (Priorité Maximale)

### Test 1 : Urgence Simple
**Message utilisateur :** `"C'est urgent !"`  
**Réponse attendue :** Détection d'urgence avec numéro 06 04 00 74 99 et mention 24h/24

### Test 2 : Urgence Plomberie
**Message utilisateur :** `"J'ai une fuite d'eau urgente"`  
**Réponse attendue :** Détection d'urgence (priorité sur plomberie)

### Test 3 : Dégât des Eaux
**Message utilisateur :** `"Inondation dans ma maison"`  
**Réponse attendue :** Réponse spécifique dégât des eaux avec urgence

---

## 🔧 Tests Services Spécifiques

### Test 4 : Plomberie
**Message utilisateur :** `"Mon robinet fuit"`  
**Réponse attendue :** Réponse plomberie avec emoji 🔧

### Test 5 : Électricité
**Message utilisateur :** `"Panne de courant"`  
**Réponse attendue :** Réponse électricité avec emoji ⚡

### Test 6 : Peinture
**Message utilisateur :** `"Je veux repeindre mon salon"`  
**Réponse attendue :** Réponse peinture avec emoji 🎨

### Test 7 : Maçonnerie
**Message utilisateur :** `"Construction d'un mur en parpaing"`  
**Réponse attendue :** Réponse maçonnerie avec emoji 🧱

### Test 8 : Salle de Bain
**Message utilisateur :** `"Rénovation salle de bain"`  
**Réponse attendue :** Réponse sanitaires avec emoji 🚿

---

## 💰 Tests Informations Pratiques

### Test 9 : Demande de Devis
**Message utilisateur :** `"Combien ça coûte ?"`  
**Réponse attendue :** Réponse devis avec 3 options (calculateur, formulaire, téléphone)

### Test 10 : Prix Spécifique
**Message utilisateur :** `"Quel est le tarif pour de la plomberie ?"`  
**Réponse attendue :** Réponse devis (mot-clé "tarif" détecté)

### Test 11 : Rendez-vous
**Message utilisateur :** `"Je voudrais prendre rendez-vous"`  
**Réponse attendue :** Réponse RDV avec planificateur en ligne

### Test 12 : Délais
**Message utilisateur :** `"Combien de temps pour intervenir ?"`  
**Réponse attendue :** Réponse délais (2h urgence, 48h devis, etc.)

---

## 📍 Tests Géographiques

### Test 13 : Zone Générale
**Message utilisateur :** `"Où intervenez-vous ?"`  
**Réponse attendue :** Réponse zone avec Alsace-Lorraine + villes

### Test 14 : Ville Spécifique
**Message utilisateur :** `"Vous travaillez à Strasbourg ?"`  
**Réponse attendue :** Réponse zone (détection "strasbourg")

### Test 15 : Région
**Message utilisateur :** `"Vous êtes en Alsace ?"`  
**Réponse attendue :** Réponse zone (détection "alsace")

---

## 🕐 Tests Horaires et Contact

### Test 16 : Horaires
**Message utilisateur :** `"Vous êtes ouverts quand ?"`  
**Réponse attendue :** Réponse horaires (Lun-Ven 8h-18h, Sam 9h-12h, urgences 24h/24)

### Test 17 : Contact
**Message utilisateur :** `"Comment vous contacter ?"`  
**Réponse attendue :** Réponse contact avec téléphone et options

---

## ✅ Tests Qualité et Garanties

### Test 18 : Certifications
**Message utilisateur :** `"Vous êtes assurés ?"`  
**Réponse attendue :** Réponse qualifications avec décennale, RC Pro

### Test 19 : Garanties
**Message utilisateur :** `"Quelle garantie sur les travaux ?"`  
**Réponse attendue :** Réponse garanties (décennale, biennale, etc.)

### Test 20 : Avis Clients
**Message utilisateur :** `"Vous avez des avis clients ?"`  
**Réponse attendue :** Réponse avis avec note 4.8/5

---

## 💳 Tests Paiement

### Test 21 : Modalités de Paiement
**Message utilisateur :** `"Comment payer ?"`  
**Réponse attendue :** Réponse paiement (CB, virement, chèque, échelonné)

### Test 22 : Facilités
**Message utilisateur :** `"Vous faites du paiement en plusieurs fois ?"`  
**Réponse attendue :** Réponse paiement avec mention échelonné

---

## 👋 Tests Interactions Sociales

### Test 23 : Salutation
**Message utilisateur :** `"Bonjour"`  
**Réponse attendue :** Réponse salutation avec emoji 😊

### Test 24 : Remerciement
**Message utilisateur :** `"Merci beaucoup"`  
**Réponse attendue :** Réponse remerciement

---

## 🔀 Tests Mots-Clés Multiples

### Test 25 : Urgence + Service
**Message utilisateur :** `"Urgence électricité, panne de courant"`  
**Réponse attendue :** Urgence (priorité plus haute que électricité)

### Test 26 : Service + Prix
**Message utilisateur :** `"Combien coûte une rénovation de salle de bain ?"`  
**Réponse attendue :** Devis ou Sanitaires (selon priorité calculée)

### Test 27 : Zone + Service
**Message utilisateur :** `"Vous faites de la plomberie à Metz ?"`  
**Réponse attendue :** Plomberie ou Zone (selon priorité)

---

## 🤔 Tests Sans Correspondance

### Test 28 : Message Vague
**Message utilisateur :** `"Hmm..."`  
**Réponse attendue :** Réponse par défaut avec suggestions

### Test 29 : Question Hors Sujet
**Message utilisateur :** `"Quelle est la météo ?"`  
**Réponse attendue :** Réponse par défaut avec liste des catégories

### Test 30 : Texte Aléatoire
**Message utilisateur :** `"azerty"`  
**Réponse attendue :** Réponse par défaut

---

## 🎨 Tests Visuels

### Test 31 : Bouton de Chat
- [ ] Le bouton est visible en bas à gauche
- [ ] Animation au survol (scale + rotation)
- [ ] Badge d'urgence "!" animé
- [ ] Tooltip "Besoin d'aide ? 💬" apparaît au survol

### Test 32 : Ouverture du Chat
- [ ] Le chat s'ouvre en bas à droite
- [ ] Taille : 320px × 384px (w-80 h-96)
- [ ] Header avec indicateur animé (pulse + ping)
- [ ] Titre : "Assistant G.TRAVAUX 🤖"

### Test 33 : Messages
- [ ] Messages utilisateur à droite (orange)
- [ ] Messages agent à gauche (gris)
- [ ] Horodatage visible
- [ ] Emoji dans les réponses

### Test 34 : Réponses Rapides
- [ ] 4 suggestions initiales visibles
- [ ] Changement après 2 messages
- [ ] Hover change la couleur en orange
- [ ] Clic envoie le message

### Test 35 : Typing Indicator
- [ ] 3 points animés pendant la "frappe"
- [ ] Disparaît quand la réponse arrive
- [ ] Délai de 1.2 secondes

### Test 36 : Input
- [ ] Placeholder : "Tapez votre message..."
- [ ] Bouton désactivé si vide
- [ ] Enter envoie le message
- [ ] Champ se vide après envoi

### Test 37 : Footer
- [ ] "Urgence ?" visible
- [ ] Lien téléphone cliquable
- [ ] Icône téléphone visible

---

## 📱 Tests Responsive

### Test 38 : Mobile
- [ ] Chat adapté à la taille d'écran
- [ ] Bouton accessible
- [ ] Messages lisibles

### Test 39 : Tablette
- [ ] Positionnement correct
- [ ] Taille appropriée

### Test 40 : Desktop
- [ ] Positionnement en bas à gauche/droite
- [ ] Pas de débordement

---

## ⚡ Tests Performance

### Test 41 : Temps de Réponse
- [ ] Réponse en ~1.2 secondes
- [ ] Pas de lag dans l'interface
- [ ] Scroll automatique fluide

### Test 42 : Mémoire
- [ ] Pas de fuite mémoire après plusieurs messages
- [ ] Historique conservé pendant la session

---

## 🔧 Tests Fonctionnels

### Test 43 : Fermeture/Réouverture
- [ ] Historique conservé après fermeture
- [ ] Réouverture rapide
- [ ] État préservé

### Test 44 : Messages Longs
- [ ] Texte long s'affiche correctement
- [ ] Pas de débordement
- [ ] Scroll fonctionne

### Test 45 : Caractères Spéciaux
- [ ] Accents détectés correctement
- [ ] Emojis affichés
- [ ] Ponctuation gérée

---

## ✅ Checklist de Validation Finale

### Fonctionnalités
- [ ] Toutes les catégories de mots-clés fonctionnent
- [ ] Système de priorités opérationnel
- [ ] Réponses personnalisées affichées
- [ ] Réponses rapides cliquables
- [ ] Numéro d'urgence toujours visible

### Interface
- [ ] Design cohérent avec le site
- [ ] Animations fluides
- [ ] Couleurs de marque respectées
- [ ] Accessibilité (aria-labels)

### Expérience Utilisateur
- [ ] Navigation intuitive
- [ ] Réponses claires et utiles
- [ ] Temps de réponse acceptable
- [ ] Guidage efficace

---

## 📊 Résultats Attendus

**Taux de réussite cible :** 95% des tests passent  
**Temps de réponse moyen :** < 1.5 secondes  
**Satisfaction utilisateur :** Réponses pertinentes dans 90% des cas  

---

## 🐛 Rapport de Bugs

Si vous trouvez des bugs pendant les tests, notez :
1. **Numéro du test**
2. **Message envoyé**
3. **Réponse obtenue**
4. **Réponse attendue**
5. **Comportement observé**

---

## 📝 Notes de Test

Espace pour vos observations :

```
Test effectué le : ___/___/______
Navigateur : _________________
Version : ____________________

Résultats :
- Tests réussis : ___/45
- Tests échoués : ___/45
- Bugs trouvés : ___

Commentaires :
_________________________________
_________________________________
_________________________________
```