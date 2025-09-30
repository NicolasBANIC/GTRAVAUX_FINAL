# 📖 Guide d'Utilisation du Chat d'Urgence Amélioré

## 🎯 Vue d'Ensemble

Le chat d'urgence G.TRAVAUX est maintenant un assistant virtuel intelligent capable de répondre à la majorité des questions de vos visiteurs de manière automatique et personnalisée.

---

## 🚀 Démarrage Rapide

### Pour les Visiteurs

1. **Ouvrir le chat**
   - Cliquez sur le bouton orange en bas à gauche de la page
   - Le bouton affiche un badge "!" pour attirer l'attention
   - Au survol : tooltip "Besoin d'aide ? 💬"

2. **Poser une question**
   - Tapez votre question dans le champ de texte
   - Ou cliquez sur une des suggestions rapides
   - Appuyez sur Entrée ou cliquez sur l'icône d'envoi

3. **Recevoir une réponse**
   - La réponse arrive en ~1.2 secondes
   - Elle est personnalisée selon votre demande
   - Des suggestions supplémentaires peuvent apparaître

---

## 💡 Exemples de Questions

### Questions d'Urgence
- "J'ai une urgence !"
- "Fuite d'eau importante"
- "Panne électrique"
- "Dégât des eaux"
- "Besoin d'intervention rapide"

### Questions sur les Services
- "Vous faites de la plomberie ?"
- "Je veux rénover ma salle de bain"
- "Besoin d'un électricien"
- "Travaux de peinture"
- "Isolation de ma maison"

### Questions Pratiques
- "Combien ça coûte ?"
- "Je veux un devis"
- "Prendre rendez-vous"
- "Quels sont vos délais ?"
- "Vous intervenez où ?"
- "Quels sont vos horaires ?"

### Questions sur l'Entreprise
- "Vous êtes certifiés ?"
- "Quelles garanties ?"
- "Avis clients"
- "Voir vos réalisations"
- "Comment vous payer ?"

---

## 🎨 Interface du Chat

### Bouton de Chat
```
┌─────────────┐
│  💬  [!]    │  ← Badge d'urgence animé
└─────────────┘
   ↓ Au survol
"Besoin d'aide ? 💬"
```

### Fenêtre de Chat
```
┌──────────────────────────────────┐
│ 🟢 Assistant G.TRAVAUX 🤖        │ ← Header
│ Réponses instantanées • 24h/24   │
├──────────────────────────────────┤
│                                  │
│  Agent: Bonjour ! 👋             │ ← Messages
│  [09:30]                         │
│                                  │
│              Vous: Bonjour       │
│              [09:31]             │
│                                  │
├──────────────────────────────────┤
│ 💡 Suggestions :                 │ ← Réponses rapides
│ [Urgence] [Devis] [Services]     │
├──────────────────────────────────┤
│ [Tapez votre message...    ] [→] │ ← Input
│ Urgence ? 📞 06 04 00 74 99      │
└──────────────────────────────────┘
```

---

## 🔑 Mots-Clés Magiques

Le chat détecte automatiquement ces mots-clés (et bien d'autres) :

### 🚨 Urgences
`urgence`, `urgent`, `immédiat`, `rapide`, `vite`, `sinistre`, `grave`

### 🔧 Services
- **Plomberie :** `fuite`, `robinet`, `tuyau`, `wc`, `chauffe-eau`
- **Électricité :** `panne`, `courant`, `disjoncteur`, `prise`, `lumière`
- **Maçonnerie :** `mur`, `béton`, `parpaing`, `dalle`, `fondation`
- **Peinture :** `peindre`, `repeindre`, `couleur`, `décoration`
- **Salle de bain :** `douche`, `baignoire`, `lavabo`, `sanitaire`

### 💰 Informations
- **Prix :** `devis`, `prix`, `tarif`, `coût`, `combien`, `budget`
- **RDV :** `rendez-vous`, `rdv`, `visite`, `disponibilité`
- **Zone :** `où`, `secteur`, `région`, `strasbourg`, `metz`, `alsace`
- **Horaires :** `horaire`, `ouvert`, `fermé`, `disponible`

---

## 🎯 Système de Priorités

Le chat utilise un système intelligent de priorités :

1. **Priorité 100** : Urgences (réponse immédiate avec numéro 24h/24)
2. **Priorité 90-95** : Services urgents (plomberie, électricité, dégâts)
3. **Priorité 80-85** : Services standards et devis
4. **Priorité 70-75** : Informations pratiques
5. **Priorité 60** : Interactions sociales

**Exemple :** Si vous écrivez "urgence plomberie", le chat détecte les deux mais répond en priorité sur l'urgence.

---

## 📱 Réponses Rapides

### Suggestions Initiales (1-2 messages)
1. Urgence plomberie
2. Urgence électricité
3. Dégât des eaux
4. Demander un devis

### Suggestions Avancées (3-4 messages)
5. Prendre rendez-vous
6. Vos services
7. Zone d'intervention
8. Horaires

Les suggestions changent automatiquement selon la progression de la conversation.

---

## 🔄 Flux de Conversation Typique

### Scénario 1 : Urgence
```
Visiteur: "Fuite d'eau !"
   ↓
Chat: 🚨 URGENCE ! Appelez le 06 04 00 74 99
      Intervention sous 2h en Alsace-Lorraine
   ↓
Visiteur: [Appelle ou continue la conversation]
```

### Scénario 2 : Devis
```
Visiteur: "Combien pour rénover une salle de bain ?"
   ↓
Chat: 📋 3 options pour obtenir un devis :
      1) Calculateur en ligne
      2) Formulaire de contact
      3) Téléphone 06 04 00 74 99
   ↓
Visiteur: [Choisit une option]
```

### Scénario 3 : Information
```
Visiteur: "Vous travaillez à Strasbourg ?"
   ↓
Chat: 📍 Oui ! Alsace-Lorraine (Strasbourg, Metz, Nancy...)
      + toute la France pour urgences
   ↓
Visiteur: "Parfait, je veux un devis"
   ↓
Chat: 📋 [Options de devis]
```

---

## 🛠️ Personnalisation (Pour les Développeurs)

### Ajouter un Nouveau Mot-Clé

Dans `LiveChat.tsx`, ajoutez un pattern dans `keywordPatterns` :

```typescript
{
  keywords: ['nouveau', 'mot-clé', 'synonyme'],
  response: '🎯 Votre réponse personnalisée ici...',
  priority: 75, // 60-100
}
```

### Modifier une Réponse

Trouvez le pattern correspondant et modifiez le champ `response` :

```typescript
{
  keywords: ['devis', 'estimation', 'prix'],
  response: 'Votre nouvelle réponse ici...', // ← Modifier ici
  priority: 85,
}
```

### Changer les Réponses Rapides

Modifiez le tableau `quickResponses` :

```typescript
const quickResponses = [
  'Votre suggestion 1',
  'Votre suggestion 2',
  // ... jusqu'à 8 suggestions
];
```

---

## 📊 Statistiques d'Utilisation

### Métriques Disponibles

Le chat stocke actuellement :
- Historique des messages (session)
- Contexte de conversation (mots-clés détectés)

### Métriques Futures Possibles
- Nombre de conversations
- Questions les plus fréquentes
- Taux de conversion (chat → contact)
- Temps de réponse moyen
- Satisfaction utilisateur

---

## 🐛 Dépannage

### Le chat ne s'ouvre pas
- Vérifiez que JavaScript est activé
- Rechargez la page
- Vérifiez la console pour les erreurs

### Les réponses ne sont pas pertinentes
- Reformulez votre question
- Utilisez des mots-clés plus précis
- Essayez les suggestions rapides

### Le chat est lent
- Vérifiez votre connexion internet
- Le délai normal est de ~1.2 secondes
- Rechargez la page si nécessaire

---

## 📞 Contact d'Urgence

**En cas d'urgence réelle, appelez directement :**

# 📞 06 04 00 74 99

**Disponible 24h/24 et 7j/7**

---

## ✅ Bonnes Pratiques

### Pour les Visiteurs
✅ Soyez précis dans vos questions  
✅ Utilisez les suggestions rapides  
✅ N'hésitez pas à reformuler  
✅ Pour les urgences, appelez directement  

### Pour les Administrateurs
✅ Mettez à jour les réponses régulièrement  
✅ Ajoutez de nouveaux mots-clés selon les questions fréquentes  
✅ Testez les modifications avant déploiement  
✅ Surveillez les conversations pour améliorer le système  

---

## 🎓 Formation Rapide

### Pour le Personnel

**5 minutes pour comprendre le chat :**

1. **Qu'est-ce que c'est ?**
   - Assistant virtuel automatique
   - Répond aux questions courantes
   - Disponible 24h/24

2. **Que fait-il ?**
   - Détecte les mots-clés
   - Donne des réponses personnalisées
   - Oriente vers les bonnes ressources

3. **Que ne fait-il pas ?**
   - Ne remplace pas un humain pour les cas complexes
   - Ne prend pas de rendez-vous automatiquement
   - Ne fait pas de devis précis

4. **Quand intervenir ?**
   - Si le visiteur demande un humain
   - Pour les cas complexes
   - Pour finaliser un devis ou RDV

---

## 🔮 Évolutions Prévues

### Version 2.0 (Future)
- [ ] Intégration backend pour vraies conversations
- [ ] Historique persistant (base de données)
- [ ] Transfert vers agent humain
- [ ] Prise de RDV automatique
- [ ] Génération de devis simple

### Version 3.0 (Future)
- [ ] IA générative (GPT)
- [ ] Analyse de sentiment
- [ ] Recommandations personnalisées
- [ ] Multi-langue

---

## 📚 Ressources

### Documentation
- `AMELIORATIONS_CHAT_URGENCE.md` - Détails techniques
- `TEST_CHAT_SCENARIOS.md` - Scénarios de test
- `LiveChat.tsx` - Code source

### Support
- Email : [votre email]
- Téléphone : 06 04 00 74 99
- Documentation en ligne : [votre site]

---

## 🏆 Résumé

Le chat d'urgence G.TRAVAUX est maintenant :
- ✅ **Intelligent** : Détection avancée de mots-clés
- ✅ **Personnalisé** : Réponses adaptées au contexte
- ✅ **Complet** : Couvre tous les services et informations
- ✅ **Disponible** : 24h/24 pour les questions courantes
- ✅ **Efficace** : Réduit la charge du service client

**Profitez-en pour améliorer l'expérience de vos visiteurs ! 🚀**