'use client';

import { useState, useRef, useEffect } from 'react';
import {
  FaComments,
  FaTimes,
  FaPaperPlane,
  FaPhone,
  FaUser,
} from 'react-icons/fa';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'agent';
  timestamp: Date;
}

// Système de détection de mots-clés avancé
interface KeywordPattern {
  keywords: string[];
  response: string;
  priority: number; // Plus le nombre est élevé, plus la priorité est haute
}

export default function LiveChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Bonjour ! 👋 Je suis votre assistant virtuel G.TRAVAUX. Comment puis-je vous aider aujourd\'hui ? Urgence, devis, informations sur nos services ?',
      sender: 'agent',
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [_conversationContext, setConversationContext] = useState<string[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const quickResponses = [
    'Urgence plomberie',
    'Urgence électricité',
    'Dégât des eaux',
    'Demander un devis',
    'Prendre rendez-vous',
    'Vos services',
    'Zone d\'intervention',
    'Horaires',
  ];

  // Système de réponses intelligent avec détection de mots-clés multiples
  const keywordPatterns: KeywordPattern[] = [
    // URGENCES (Priorité maximale)
    {
      keywords: ['urgence', 'urgent', 'immédiat', 'tout de suite', 'maintenant', 'rapide', 'vite', 'sinistre', 'catastrophe', 'grave'],
      response: '🚨 URGENCE DÉTECTÉE ! Pour toute intervention urgente, contactez-nous immédiatement au 03 67 10 26 53. Nous sommes disponibles 24h/24 et 7j/7 pour les urgences. Nos équipes peuvent intervenir sous 2h en Alsace-Lorraine.',
      priority: 100,
    },
    
    // PLOMBERIE
    {
      keywords: ['plomberie', 'plombier', 'fuite', 'eau', 'robinet', 'tuyau', 'canalisation', 'wc', 'toilette', 'évier', 'lavabo', 'douche', 'baignoire', 'chauffe-eau', 'ballon', 'chaudière'],
      response: '🔧 Plomberie : G.TRAVAUX intervient pour tous vos besoins en plomberie : fuites, installations sanitaires, réparations, remplacement de chauffe-eau, débouchage, etc. Urgence 24h/24 au 03 67 10 26 53. Souhaitez-vous un devis ou une intervention rapide ?',
      priority: 90,
    },
    
    // ÉLECTRICITÉ
    {
      keywords: ['électricité', 'électrique', 'électricien', 'panne', 'courant', 'disjoncteur', 'tableau électrique', 'prise', 'interrupteur', 'lumière', 'éclairage', 'court-circuit', 'installation électrique'],
      response: '⚡ Électricité : Nos électriciens qualifiés interviennent pour : pannes électriques, installations, mises aux normes, tableaux électriques, éclairages, prises, etc. Pour une urgence électrique, appelez le 03 67 10 26 53. Besoin d\'un devis ?',
      priority: 90,
    },
    
    // DÉGÂT DES EAUX
    {
      keywords: ['dégât des eaux', 'dégats', 'inondation', 'inondé', 'eau partout', 'fuite importante', 'débordement'],
      response: '💧 Dégât des eaux : Intervention d\'urgence 24h/24 ! Appelez immédiatement le 03 67 10 26 53. Nous intervenons rapidement pour limiter les dégâts, assécher, réparer et remettre en état. Nos équipes sont équipées pour gérer tous types de sinistres.',
      priority: 95,
    },
    
    // DÉMOLITION
    {
      keywords: ['démolition', 'démolir', 'casser', 'abattre', 'détruire', 'mur', 'cloison', 'destruction'],
      response: '🔨 Démolition : Nous réalisons tous travaux de démolition : murs porteurs, cloisons, sols, dépose complète. Intervention sécurisée avec évacuation des gravats. Devis gratuit disponible sur notre site ou par téléphone au 03 67 10 26 53.',
      priority: 80,
    },
    
    // MAÇONNERIE
    {
      keywords: ['maçonnerie', 'maçon', 'mur', 'béton', 'parpaing', 'brique', 'fondation', 'dalle', 'chape', 'enduit'],
      response: '🧱 Maçonnerie : G.TRAVAUX réalise tous vos travaux de maçonnerie : construction de murs, dalles, chapes, fondations, enduits, réparations. Artisans qualifiés et matériaux de qualité. Demandez votre devis gratuit !',
      priority: 80,
    },
    
    // PLÂTRERIE / PLACO
    {
      keywords: ['plâtrerie', 'placo', 'placoplatre', 'plâtre', 'cloison', 'faux plafond', 'isolation phonique', 'ba13'],
      response: '🏗️ Plâtrerie & Placo : Pose de cloisons, faux plafonds, isolation phonique et thermique, finitions. Travail soigné et respect des normes. Devis gratuit en ligne ou au 03 67 10 26 53.',
      priority: 80,
    },
    
    // PEINTURE
    {
      keywords: ['peinture', 'peindre', 'peintre', 'repeindre', 'finition', 'décoration', 'couleur', 'mur', 'plafond'],
      response: '🎨 Peinture & Finitions : Peinture intérieure et extérieure, finitions soignées, conseils déco. Nous utilisons des peintures de qualité professionnelle. Demandez votre devis personnalisé !',
      priority: 80,
    },
    
    // ISOLATION
    {
      keywords: ['isolation', 'isoler', 'thermique', 'phonique', 'laine de verre', 'laine de roche', 'froid', 'chaleur', 'bruit'],
      response: '🏠 Isolation intérieure : Amélioration de votre confort thermique et phonique. Isolation des murs, plafonds, combles. Économies d\'énergie garanties. Devis gratuit disponible !',
      priority: 80,
    },
    
    // POSE DE SOL
    {
      keywords: ['sol', 'carrelage', 'parquet', 'lino', 'vinyle', 'revêtement', 'plancher', 'pose'],
      response: '🔲 Pose de sol : Carrelage, parquet, vinyle, lino... Tous types de revêtements de sol. Pose professionnelle et soignée. Conseils sur le choix des matériaux. Devis gratuit !',
      priority: 80,
    },
    
    // SANITAIRES
    {
      keywords: ['sanitaire', 'salle de bain', 'sdb', 'douche', 'baignoire', 'wc', 'lavabo', 'vasque', 'meuble'],
      response: '🚿 Sanitaires : Rénovation complète de salles de bain, installation de douches, baignoires, WC, meubles vasques. Du design à la réalisation. Devis personnalisé gratuit !',
      priority: 80,
    },
    
    // DEVIS
    {
      keywords: ['devis', 'estimation', 'prix', 'tarif', 'coût', 'combien', 'budget', 'gratuit'],
      response: '📋 Devis gratuit : Vous pouvez obtenir un devis de 3 façons : 1) Utilisez notre calculateur en ligne pour une estimation immédiate, 2) Remplissez notre formulaire de contact détaillé, 3) Appelez-nous au 03 67 10 26 53. Tous nos devis sont gratuits et sans engagement !',
      priority: 85,
    },
    
    // RENDEZ-VOUS
    {
      keywords: ['rendez-vous', 'rdv', 'rencontrer', 'visite', 'passer', 'venir', 'disponibilité', 'planning'],
      response: '📅 Prise de rendez-vous : Vous pouvez prendre rendez-vous directement via notre planificateur en ligne sur notre site, ou nous appeler au 03 67 10 26 53. Nous nous adaptons à vos disponibilités. Quand seriez-vous disponible ?',
      priority: 85,
    },
    
    // DÉLAIS
    {
      keywords: ['délai', 'combien de temps', 'durée', 'quand', 'rapidité', 'attente'],
      response: '⏱️ Nos délais : Urgences sous 2h en Alsace-Lorraine, devis sous 48h, travaux planifiés selon vos disponibilités et l\'ampleur du chantier. Pour un projet spécifique, contactez-nous pour un planning personnalisé.',
      priority: 75,
    },
    
    // ZONE D'INTERVENTION
    {
      keywords: ['zone', 'secteur', 'région', 'où', 'intervenez', 'déplacez', 'strasbourg', 'metz', 'nancy', 'mulhouse', 'colmar', 'alsace', 'lorraine'],
      response: '📍 Zone d\'intervention : Nous intervenons principalement en Alsace-Lorraine (Strasbourg, Metz, Nancy, Mulhouse, Colmar et environs). Pour les urgences, nous pouvons nous déplacer dans toute la France. Indiquez-nous votre localisation pour confirmer !',
      priority: 75,
    },
    
    // HORAIRES
    {
      keywords: ['horaire', 'heure', 'ouvert', 'fermé', 'disponible', 'joignable'],
      response: '🕐 Horaires : Nos bureaux sont ouverts du lundi au vendredi de 8h à 18h, et le samedi de 9h à 12h. Pour les URGENCES, nous sommes disponibles 24h/24 et 7j/7 au 03 67 10 26 53 !',
      priority: 75,
    },
    
    // QUALIFICATIONS / CERTIFICATIONS
    {
      keywords: ['qualification', 'certification', 'assurance', 'garantie', 'décennale', 'rge', 'qualibat'],
      response: '✅ Qualifications : G.TRAVAUX est une entreprise certifiée avec toutes les assurances professionnelles requises (décennale, RC Pro). Nos artisans sont qualifiés et expérimentés. Travail garanti et conforme aux normes en vigueur.',
      priority: 75,
    },
    
    // PAIEMENT
    {
      keywords: ['paiement', 'payer', 'règlement', 'facilité', 'échelonné', 'crédit', 'financement'],
      response: '💳 Modalités de paiement : Nous acceptons tous les modes de paiement (CB, virement, chèque). Possibilité de paiement échelonné selon le montant des travaux. Discutons-en lors de l\'établissement du devis !',
      priority: 70,
    },
    
    // GARANTIES
    {
      keywords: ['garantie', 'sav', 'après-vente', 'problème après', 'défaut'],
      response: '🛡️ Garanties : Tous nos travaux sont garantis (garantie décennale, biennale, parfait achèvement selon les travaux). En cas de problème, notre SAV est réactif. Votre satisfaction est notre priorité !',
      priority: 70,
    },
    
    // RÉALISATIONS
    {
      keywords: ['réalisation', 'exemple', 'photo', 'chantier', 'référence', 'portfolio', 'travaux réalisés'],
      response: '📸 Nos réalisations : Découvrez nos chantiers terminés dans la section "Réalisations" de notre site. Photos avant/après, témoignages clients. Nous sommes fiers de notre travail et transparents sur nos résultats !',
      priority: 70,
    },
    
    // AVIS / TÉMOIGNAGES
    {
      keywords: ['avis', 'témoignage', 'retour', 'satisfaction', 'client', 'note', 'évaluation'],
      response: '⭐ Avis clients : Consultez les avis de nos clients satisfaits sur Google et notre site. Note moyenne de 4.8/5. La satisfaction client est au cœur de nos préoccupations. Rejoignez nos clients satisfaits !',
      priority: 70,
    },
    
    // CONTACT
    {
      keywords: ['contact', 'contacter', 'joindre', 'appeler', 'téléphone', 'mail', 'email'],
      response: '📞 Nous contacter : Téléphone : 03 67 10 26 53 (urgences 24h/24), Email via notre formulaire de contact sur le site, ou prenez rendez-vous directement en ligne. Nous répondons rapidement à toutes vos demandes !',
      priority: 75,
    },
    
    // SALUTATIONS
    {
      keywords: ['bonjour', 'bonsoir', 'salut', 'hello', 'coucou'],
      response: 'Bonjour ! 😊 Ravi de vous accueillir. Je suis là pour répondre à toutes vos questions sur nos services de rénovation et travaux. Comment puis-je vous aider ?',
      priority: 60,
    },
    
    // REMERCIEMENTS
    {
      keywords: ['merci', 'merçi', 'thanks', 'super', 'parfait', 'génial', 'top'],
      response: 'Avec plaisir ! 😊 N\'hésitez pas si vous avez d\'autres questions. Notre équipe est là pour vous accompagner dans tous vos projets de travaux !',
      priority: 60,
    },
  ];

  const detectIntent = (text: string): string => {
    const lowerText = text.toLowerCase().trim();
    
    // Normalisation du texte (suppression des accents pour une meilleure détection)
    const normalizedText = lowerText
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
    
    let bestMatch: KeywordPattern | null = null;
    let highestPriority = 0;

    // Recherche du meilleur match basé sur les mots-clés et la priorité
    for (const pattern of keywordPatterns) {
      let currentMatchCount = 0;
      
      for (const keyword of pattern.keywords) {
        const normalizedKeyword = keyword
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '');
        
        if (normalizedText.includes(normalizedKeyword)) {
          currentMatchCount++;
        }
      }
      
      // Si on trouve des correspondances et que la priorité est plus élevée
      if (currentMatchCount > 0) {
        const effectivePriority = pattern.priority + (currentMatchCount * 5);
        
        if (effectivePriority > highestPriority) {
          highestPriority = effectivePriority;
          bestMatch = pattern;
        }
      }
    }

    // Si on a trouvé un match, on retourne la réponse
    if (bestMatch) {
      // Ajouter le contexte de la conversation
      setConversationContext(prev => [...prev, bestMatch.keywords[0]]);
      return bestMatch.response;
    }

    // Réponse par défaut si aucun mot-clé n'est détecté
    return 'Merci pour votre message ! 😊 Je n\'ai pas bien compris votre demande. Pouvez-vous préciser ? Vous pouvez me parler de : urgences, devis, services (plomberie, électricité, maçonnerie, etc.), zones d\'intervention, ou appelez directement le 03 67 10 26 53.';
  };

  const sendMessage = (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: text.trim(),
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulation de réponse automatique avec détection intelligente
    setTimeout(() => {
      const response = detectIntent(text);

      const agentMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        sender: 'agent',
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, agentMessage]);
      setIsTyping(false);
    }, 1200);
  };

  const handleQuickResponse = (response: string) => {
    sendMessage(response);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(inputMessage);
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`btn btn-primary fixed bottom-6 left-6 z-50 p-4 shadow-lg transition-all hover:scale-110 ${
          isOpen ? 'hidden' : 'flex'
        } items-center justify-center group`}
        aria-label="Ouvrir le chat d'assistance"
      >
        <FaComments size={24} className="transition-transform group-hover:rotate-12" />
        <span className="absolute -right-2 -top-2 flex size-6 animate-pulse items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white shadow-lg">
          !
        </span>
        <span className="absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-brand-graphite-900 px-3 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
          Besoin d'aide ? 💬
        </span>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 flex h-96 w-80 flex-col rounded-lg border bg-white shadow-2xl">
          {/* Header */}
          <div className="section-dark flex items-center justify-between rounded-t-lg p-4">
            <div className="flex items-center">
              <div className="relative mr-2">
                <div className="bg-green size-3 animate-pulse rounded-full"></div>
                <div className="bg-green absolute inset-0 size-3 animate-ping rounded-full opacity-75"></div>
              </div>
              <div>
                <h4 className="font-semibold">Assistant G.TRAVAUX 🤖</h4>
                <p className="text-xs opacity-90">Réponses instantanées • 24h/24</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white transition-colors hover:text-gray-300"
              aria-label="Fermer le chat"
            >
              <FaTimes size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 space-y-3 overflow-y-auto p-4">
            {messages.map(message => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs rounded-lg px-3 py-2 text-sm ${
                    message.sender === 'user'
                      ? 'bg-brand-orange-600 text-white'
                      : 'bg-lightGray text-darkGray'
                  }`}
                >
                  {message.sender === 'agent' && (
                    <div className="mb-1 flex items-center">
                      <FaUser size={12} className="mr-1" />
                      <span className="text-xs font-medium">
                        Conseiller G.TRAVAUX
                      </span>
                    </div>
                  )}
                  <p>{message.text}</p>
                  <p
                    className="mt-1 text-xs opacity-70"
                    suppressHydrationWarning
                  >
                    {message.timestamp.toLocaleTimeString('fr-FR', {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </p>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="rounded-lg bg-lightGray px-3 py-2 text-sm text-darkGray">
                  <div className="flex items-center">
                    <div className="flex space-x-1">
                      <div className="size-2 animate-bounce rounded-full bg-darkGray"></div>
                      <div
                        className="size-2 animate-bounce rounded-full bg-darkGray"
                        style={{ animationDelay: '0.1s' }}
                      ></div>
                      <div
                        className="size-2 animate-bounce rounded-full bg-darkGray"
                        style={{ animationDelay: '0.2s' }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Responses - Dynamiques selon le contexte */}
          {messages.length <= 4 && (
            <div className="px-4 pb-2">
              <p className="mb-2 text-xs text-darkGray">
                {messages.length <= 2 ? '💡 Suggestions :' : '🔍 Autres questions :'}
              </p>
              <div className="flex flex-wrap gap-1">
                {(messages.length <= 2 
                  ? quickResponses.slice(0, 4)
                  : quickResponses.slice(4, 8)
                ).map(response => (
                  <button
                    key={response}
                    onClick={() => handleQuickResponse(response)}
                    className="rounded bg-lightGray px-2 py-1 text-xs text-darkGray transition-colors hover:bg-brand-orange-600 hover:text-white"
                  >
                    {response}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <form onSubmit={handleSubmit} className="border-t p-4">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={e => setInputMessage(e.target.value)}
                placeholder="Tapez votre message..."
                className="flex-1 rounded-lg border border-lightGray p-2 text-sm focus:border-brand-orange-600 focus:outline-none"
              />
              <button
                type="submit"
                disabled={!inputMessage.trim()}
                className="btn btn-primary p-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <FaPaperPlane size={14} />
              </button>
            </div>
            <div className="mt-2 flex items-center justify-between">
              <p className="text-xs text-darkGray">
                Urgence ?
                <a
                  href="tel:+33367102653"
                  className="text-green ml-1 font-medium"
                >
                  <FaPhone className="mr-1 inline" size={10} />
                  03 67 10 26 53
                </a>
              </p>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
