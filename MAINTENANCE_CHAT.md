# 🔧 Guide de Maintenance du Chat d'Urgence

## 📋 Table des Matières
1. [Modifications Courantes](#modifications-courantes)
2. [Ajout de Contenu](#ajout-de-contenu)
3. [Dépannage](#dépannage)
4. [Optimisation](#optimisation)
5. [Évolutions Futures](#évolutions-futures)

---

## 🛠️ Modifications Courantes

### 1. Modifier une Réponse Existante

**Fichier :** `app/components/LiveChat.tsx`

**Étapes :**
1. Ouvrez le fichier
2. Cherchez `keywordPatterns`
3. Trouvez la catégorie (ex: "PLOMBERIE")
4. Modifiez le champ `response`

**Exemple :**
```typescript
// AVANT
{
  keywords: ['plomberie', 'plombier', 'fuite', ...],
  response: '🔧 Plomberie : G.TRAVAUX intervient pour...',
  priority: 90,
}

// APRÈS (modification)
{
  keywords: ['plomberie', 'plombier', 'fuite', ...],
  response: '🔧 Plomberie : Votre nouveau texte ici...',
  priority: 90,
}
```

**Commandes :**
```powershell
# Après modification
npm run build
npm run dev  # Pour tester en local
```

---

### 2. Changer le Numéro de Téléphone

**Rechercher et remplacer :** `06 04 00 74 99`

**Fichiers concernés :**
- `app/components/LiveChat.tsx` (plusieurs occurrences)

**Méthode rapide :**
1. Ctrl+H (Rechercher/Remplacer) dans VS Code
2. Rechercher : `06 04 00 74 99`
3. Remplacer par : `VOTRE_NOUVEAU_NUMERO`
4. Remplacer tout

---

### 3. Modifier le Message d'Accueil

**Fichier :** `app/components/LiveChat.tsx`

**Ligne ~28-34 :**
```typescript
const [messages, setMessages] = useState<Message[]>([
  {
    id: '1',
    text: 'Bonjour ! 👋 Je suis votre assistant virtuel G.TRAVAUX. Comment puis-je vous aider aujourd\'hui ? Urgence, devis, informations sur nos services ?',
    sender: 'agent',
    timestamp: new Date(),
  },
]);
```

**Modifiez le champ `text` :**
```typescript
text: 'Votre nouveau message d\'accueil ici...',
```

---

### 4. Changer les Suggestions Rapides

**Fichier :** `app/components/LiveChat.tsx`

**Ligne ~50-58 :**
```typescript
const quickResponses = [
  'Urgence plomberie',        // Suggestion 1
  'Urgence électricité',      // Suggestion 2
  'Dégât des eaux',           // Suggestion 3
  'Demander un devis',        // Suggestion 4
  'Prendre rendez-vous',      // Suggestion 5
  'Vos services',             // Suggestion 6
  'Zone d\'intervention',     // Suggestion 7
  'Horaires',                 // Suggestion 8
];
```

**Modifiez les textes selon vos besoins.**

---

## ➕ Ajout de Contenu

### 1. Ajouter une Nouvelle Catégorie de Réponse

**Fichier :** `app/components/LiveChat.tsx`

**Étapes :**
1. Trouvez le tableau `keywordPatterns` (ligne ~61)
2. Ajoutez un nouveau pattern à la fin (avant le `]`)

**Template :**
```typescript
// VOTRE NOUVELLE CATÉGORIE
{
  keywords: ['mot1', 'mot2', 'mot3', 'synonyme1', 'synonyme2'],
  response: '🎯 Titre : Votre réponse détaillée ici. Incluez des informations utiles et un appel à l\'action.',
  priority: 75, // 60-100 selon l'importance
},
```

**Exemple concret - Ajout "Rénovation Énergétique" :**
```typescript
// RÉNOVATION ÉNERGÉTIQUE
{
  keywords: ['rénovation énergétique', 'économie énergie', 'prime', 'aide', 'subvention', 'maprimerénov'],
  response: '🌱 Rénovation Énergétique : Nous vous accompagnons dans vos projets de rénovation énergétique. Isolation, chauffage, ventilation. Éligibilité aux aides (MaPrimeRénov, CEE). Contactez-nous pour un audit gratuit au 06 04 00 74 99.',
  priority: 80,
},
```

---

### 2. Ajouter des Mots-Clés à une Catégorie Existante

**Exemple - Ajouter "tuyauterie" à Plomberie :**

**AVANT :**
```typescript
keywords: ['plomberie', 'plombier', 'fuite', 'eau', 'robinet'],
```

**APRÈS :**
```typescript
keywords: ['plomberie', 'plombier', 'fuite', 'eau', 'robinet', 'tuyauterie'],
```

---

### 3. Ajouter un Lien dans une Réponse

**Exemple - Lien vers la page devis :**

```typescript
response: '📋 Devis gratuit : Vous pouvez obtenir un devis de 3 façons : 1) Utilisez notre calculateur en ligne (https://votresite.com/devis), 2) Remplissez notre formulaire de contact, 3) Appelez-nous au 06 04 00 74 99.',
```

**Note :** Les liens ne sont pas cliquables dans le chat actuel. Pour les rendre cliquables, il faudrait modifier le composant pour parser les URLs.

---

## 🐛 Dépannage

### Problème 1 : Le Chat ne S'Ouvre Pas

**Causes possibles :**
1. Erreur JavaScript
2. Composant non importé
3. Conflit CSS

**Solutions :**
```powershell
# 1. Vérifier les erreurs dans la console
# Ouvrez le navigateur → F12 → Console

# 2. Recompiler
npm run build

# 3. Vider le cache
# Ctrl+Shift+R dans le navigateur
```

---

### Problème 2 : Les Réponses ne Sont Pas Pertinentes

**Causes possibles :**
1. Mots-clés manquants
2. Priorités mal configurées
3. Fautes de frappe dans les mots-clés

**Solutions :**
1. **Ajouter des mots-clés :**
   - Notez les questions qui ne fonctionnent pas
   - Identifiez les mots-clés manquants
   - Ajoutez-les à la catégorie appropriée

2. **Ajuster les priorités :**
   - Si une réponse moins pertinente apparaît, baissez sa priorité
   - Si une réponse importante n'apparaît pas, augmentez sa priorité

3. **Vérifier l'orthographe :**
   - Les mots-clés doivent être en minuscules
   - Pas d'espaces superflus

---

### Problème 3 : Le Chat est Lent

**Causes possibles :**
1. Délai de réponse trop long
2. Trop de patterns à analyser
3. Problème de performance

**Solutions :**
1. **Réduire le délai :**
```typescript
// Ligne ~295
setTimeout(() => {
  const response = detectIntent(text);
  // ...
}, 1200); // ← Réduire à 800 ou 1000
```

2. **Optimiser les patterns :**
   - Regrouper les mots-clés similaires
   - Supprimer les doublons

---

### Problème 4 : Erreur de Compilation

**Message d'erreur courant :**
```
Error: Cannot find module 'react-icons/fa'
```

**Solution :**
```powershell
npm install react-icons
npm run build
```

---

## 🚀 Optimisation

### 1. Améliorer la Détection

**Ajouter des Variantes Orthographiques :**
```typescript
keywords: [
  'plomberie', 'plombier',
  'plombrie', 'plonberie',  // Fautes courantes
  'plombier', 'plombière',  // Variantes
],
```

**Ajouter des Expressions :**
```typescript
keywords: [
  'fuite d\'eau',
  'fuite eau',
  'eau qui coule',
  'robinet qui fuit',
],
```

---

### 2. Personnaliser par Région

**Exemple - Ajouter des villes :**
```typescript
// ZONE D'INTERVENTION
{
  keywords: [
    'zone', 'secteur', 'région', 'où', 'intervenez',
    // Villes principales
    'strasbourg', 'metz', 'nancy', 'mulhouse', 'colmar',
    // Villes secondaires
    'haguenau', 'saverne', 'sélestat', 'thionville', 'épinal',
  ],
  response: '📍 Zone d\'intervention : Nous intervenons en Alsace-Lorraine : Strasbourg, Metz, Nancy, Mulhouse, Colmar, Haguenau, Saverne, Sélestat, Thionville, Épinal et environs. Pour les urgences, nous pouvons nous déplacer dans toute la France.',
  priority: 75,
},
```

---

### 3. Ajouter des Réponses Contextuelles

**Exemple - Réponse différente selon l'heure :**

```typescript
const sendMessage = (text: string) => {
  // ... code existant ...
  
  setTimeout(() => {
    let response = detectIntent(text);
    
    // Ajouter un message selon l'heure
    const hour = new Date().getHours();
    if (hour < 8 || hour > 18) {
      response += '\n\n⏰ Nos bureaux sont actuellement fermés, mais pour les urgences, appelez le 06 04 00 74 99 (24h/24).';
    }
    
    // ... reste du code ...
  }, 1200);
};
```

---

### 4. Améliorer l'Accessibilité

**Ajouter des Labels ARIA :**
```typescript
<button
  onClick={() => setIsOpen(true)}
  className="..."
  aria-label="Ouvrir le chat d'assistance G.TRAVAUX"
  aria-describedby="chat-description"
>
  {/* ... */}
</button>

<span id="chat-description" className="sr-only">
  Chat d'assistance disponible 24h/24 pour répondre à vos questions
</span>
```

---

## 🔮 Évolutions Futures

### Phase 1 : Améliorations Simples (Court Terme)

#### 1.1 Liens Cliquables dans les Réponses
```typescript
// Fonction pour parser les URLs
const parseMessage = (text: string) => {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  return text.replace(urlRegex, '<a href="$1" target="_blank">$1</a>');
};
```

#### 1.2 Historique Persistant (localStorage)
```typescript
// Sauvegarder les messages
useEffect(() => {
  localStorage.setItem('chatHistory', JSON.stringify(messages));
}, [messages]);

// Charger l'historique au démarrage
useEffect(() => {
  const saved = localStorage.getItem('chatHistory');
  if (saved) {
    setMessages(JSON.parse(saved));
  }
}, []);
```

#### 1.3 Bouton "Effacer l'Historique"
```typescript
const clearHistory = () => {
  setMessages([/* message d'accueil */]);
  localStorage.removeItem('chatHistory');
};
```

---

### Phase 2 : Intégration Backend (Moyen Terme)

#### 2.1 API pour Enregistrer les Conversations
```typescript
// Envoyer les messages à une API
const sendToAPI = async (message: Message) => {
  await fetch('/api/chat/log', {
    method: 'POST',
    body: JSON.stringify(message),
  });
};
```

#### 2.2 Statistiques d'Utilisation
- Nombre de conversations
- Questions les plus fréquentes
- Taux de conversion
- Mots-clés non détectés

#### 2.3 Transfert vers Agent Humain
```typescript
// Bouton pour parler à un humain
<button onClick={transferToHuman}>
  Parler à un conseiller
</button>
```

---

### Phase 3 : Intelligence Artificielle (Long Terme)

#### 3.1 Intégration GPT/Claude
```typescript
const getAIResponse = async (text: string) => {
  const response = await fetch('/api/chat/ai', {
    method: 'POST',
    body: JSON.stringify({ message: text }),
  });
  return response.json();
};
```

#### 3.2 Apprentissage Automatique
- Analyse des conversations
- Amélioration automatique des réponses
- Détection de sentiment

#### 3.3 Personnalisation Avancée
- Recommandations basées sur l'historique
- Suggestions proactives
- Détection d'intention complexe

---

## 📊 Métriques à Suivre

### Métriques Actuelles (Manuelles)
- [ ] Nombre de clics sur le bouton chat
- [ ] Nombre de messages envoyés
- [ ] Questions les plus fréquentes (noter manuellement)

### Métriques Futures (Automatiques)
- [ ] Taux d'ouverture du chat
- [ ] Durée moyenne des conversations
- [ ] Taux de satisfaction
- [ ] Taux de conversion (chat → contact)
- [ ] Mots-clés non détectés

---

## 🔒 Sécurité

### Bonnes Pratiques

1. **Validation des Entrées**
   - Limiter la longueur des messages
   - Filtrer les caractères spéciaux dangereux

2. **Protection contre le Spam**
   - Limiter le nombre de messages par minute
   - Captcha si nécessaire

3. **Données Personnelles**
   - Ne pas stocker d'informations sensibles
   - Respecter le RGPD

**Exemple - Limitation de longueur :**
```typescript
const sendMessage = (text: string) => {
  if (!text.trim()) return;
  if (text.length > 500) {
    alert('Message trop long (max 500 caractères)');
    return;
  }
  // ... reste du code
};
```

---

## 📝 Checklist de Maintenance Mensuelle

### À Faire Chaque Mois
- [ ] Vérifier que tous les liens fonctionnent
- [ ] Tester 10-15 questions courantes
- [ ] Vérifier le numéro de téléphone
- [ ] Mettre à jour les informations (horaires, zones, etc.)
- [ ] Ajouter de nouveaux mots-clés si nécessaire
- [ ] Vérifier les performances (temps de réponse)
- [ ] Lire les retours utilisateurs

### À Faire Chaque Trimestre
- [ ] Analyser les questions non comprises
- [ ] Optimiser les réponses selon les retours
- [ ] Ajouter de nouvelles catégories si besoin
- [ ] Mettre à jour la documentation
- [ ] Former l'équipe aux nouveautés

---

## 🆘 Support

### Ressources
- **Documentation :** `GUIDE_UTILISATION_CHAT.md`
- **Tests :** `TEST_CHAT_SCENARIOS.md`
- **Détails techniques :** `AMELIORATIONS_CHAT_URGENCE.md`
- **Démo :** `DEMO_CHAT_VISUELLE.md`

### Contact Développeur
Si vous avez besoin d'aide pour :
- Modifications complexes
- Intégration backend
- Problèmes techniques
- Évolutions majeures

Contactez votre développeur avec :
1. Description du problème/besoin
2. Captures d'écran si applicable
3. Messages d'erreur (console)
4. Comportement attendu vs observé

---

## 🎓 Formation de l'Équipe

### Points Clés à Transmettre

1. **Le chat est automatique**
   - Réponses instantanées
   - Disponible 24h/24
   - Ne remplace pas le contact humain

2. **Quand intervenir**
   - Cas complexes
   - Demandes spécifiques
   - Finalisation de devis/RDV

3. **Comment améliorer**
   - Noter les questions mal comprises
   - Suggérer de nouveaux mots-clés
   - Remonter les bugs

4. **Utilisation optimale**
   - Encourager les visiteurs à l'utiliser
   - Expliquer ses capacités
   - Rediriger vers le chat pour questions simples

---

## ✅ Résumé

Le chat d'urgence est maintenant :
- ✅ Facile à maintenir
- ✅ Évolutif
- ✅ Documenté
- ✅ Optimisable

**Avec ce guide, vous pouvez gérer le chat en autonomie ! 🚀**

---

## 📞 Urgence Technique

En cas de problème critique (chat cassé en production) :

1. **Désactiver temporairement le chat :**
   - Commentez l'import dans `app/layout.tsx`
   - Recompilez et redéployez

2. **Restaurer la version précédente :**
   - Utilisez Git pour revenir en arrière
   - `git checkout HEAD~1 app/components/LiveChat.tsx`

3. **Contacter le support technique**

**Le site continue de fonctionner sans le chat !**