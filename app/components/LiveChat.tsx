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

export default function LiveChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Bonjour ! Je suis là pour vous aider. Avez-vous une urgence ou souhaitez-vous des informations sur nos services ?',
      sender: 'agent',
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
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
    'Parler à un conseiller',
  ];

  const autoResponses: { [key: string]: string } = {
    urgence:
      'Pour toute urgence, appelez immédiatement le 06 04 00 74 99. Nous intervenons 24h/24 pour les sinistres.',
    devis:
      'Je peux vous rediriger vers notre calculateur de devis en ligne ou vous pouvez remplir notre formulaire de contact. Que préférez-vous ?',
    'rendez-vous':
      "Parfait ! Vous pouvez utiliser notre planificateur de rendez-vous en ligne ou m'indiquer vos disponibilités.",
    prix: 'Nos tarifs dépendent du type de travaux. Utilisez notre calculateur de devis pour une estimation rapide ou contactez-nous pour un devis personnalisé.',
    délai:
      "Nos délais varient selon l'urgence : interventions d'urgence sous 2h, devis sous 48h, travaux planifiés selon disponibilités.",
    zone: 'Nous intervenons principalement en Alsace-Lorraine (Strasbourg, Metz, Nancy, Mulhouse, Colmar) et dans toute la France pour les urgences.',
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

    // Simulation de réponse automatique
    setTimeout(() => {
      const lowerText = text.toLowerCase();
      let response =
        'Merci pour votre message. Un conseiller va vous répondre dans quelques instants.';

      // Recherche de mots-clés pour réponses automatiques
      for (const [keyword, autoResponse] of Object.entries(autoResponses)) {
        if (lowerText.includes(keyword)) {
          response = autoResponse;
          break;
        }
      }

      const agentMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        sender: 'agent',
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, agentMessage]);
      setIsTyping(false);
    }, 1500);
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
        className={`fixed bottom-6 left-6 z-50 btn btn-primary p-4 shadow-lg ${
          isOpen ? 'hidden' : 'flex'
        } items-center justify-center`}
        aria-label="Ouvrir le chat"
      >
        <FaComments size={24} />
        <span className="absolute -right-2 -top-2 flex size-6 animate-pulse items-center justify-center rounded-full bg-red-500 text-xs text-white">
          !
        </span>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 flex h-96 w-80 flex-col rounded-lg border bg-white shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between rounded-t-lg section-dark p-4">
            <div className="flex items-center">
              <div className="mr-2 size-3 rounded-full bg-green"></div>
              <div>
                <h4 className="font-semibold">Chat d'urgence</h4>
                <p className="text-xs opacity-90">En ligne maintenant</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white transition-colors hover:text-gray-300"
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

          {/* Quick Responses */}
          {messages.length <= 2 && (
            <div className="px-4 pb-2">
              <p className="mb-2 text-xs text-darkGray">Réponses rapides :</p>
              <div className="flex flex-wrap gap-1">
                {quickResponses.slice(0, 3).map(response => (
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
                  href="tel:+33604007499"
                  className="ml-1 font-medium text-green"
                >
                  <FaPhone className="mr-1 inline" size={10} />
                  06 04 00 74 99
                </a>
              </p>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
