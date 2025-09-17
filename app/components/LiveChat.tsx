'use client';

import { useState, useRef, useEffect } from 'react';
import { FaComments, FaTimes, FaPaperPlane, FaPhone, FaUser } from 'react-icons/fa';

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
      timestamp: new Date()
    }
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
    'Parler à un conseiller'
  ];

  const autoResponses: { [key: string]: string } = {
    'urgence': 'Pour toute urgence, appelez immédiatement le 06 04 00 74 99. Nous intervenons 24h/24 pour les sinistres.',
    'devis': 'Je peux vous rediriger vers notre calculateur de devis en ligne ou vous pouvez remplir notre formulaire de contact. Que préférez-vous ?',
    'rendez-vous': 'Parfait ! Vous pouvez utiliser notre planificateur de rendez-vous en ligne ou m\'indiquer vos disponibilités.',
    'prix': 'Nos tarifs dépendent du type de travaux. Utilisez notre calculateur de devis pour une estimation rapide ou contactez-nous pour un devis personnalisé.',
    'délai': 'Nos délais varient selon l\'urgence : interventions d\'urgence sous 2h, devis sous 48h, travaux planifiés selon disponibilités.',
    'zone': 'Nous intervenons principalement en Alsace-Lorraine (Strasbourg, Metz, Nancy, Mulhouse, Colmar) et dans toute la France pour les urgences.'
  };

  const sendMessage = (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: text.trim(),
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulation de réponse automatique
    setTimeout(() => {
      const lowerText = text.toLowerCase();
      let response = 'Merci pour votre message. Un conseiller va vous répondre dans quelques instants.';

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
        timestamp: new Date()
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
        className={`fixed bottom-6 left-6 z-50 bg-green text-white p-4 rounded-full shadow-lg hover:bg-green/90 transition-all duration-300 ${
          isOpen ? 'hidden' : 'flex'
        } items-center justify-center`}
        aria-label="Ouvrir le chat"
      >
        <FaComments size={24} />
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center animate-pulse">
          !
        </span>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-80 h-96 bg-white rounded-lg shadow-2xl border flex flex-col">
          {/* Header */}
          <div className="bg-primary text-white p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green rounded-full mr-2"></div>
              <div>
                <h4 className="font-semibold">Chat d'urgence</h4>
                <p className="text-xs opacity-90">En ligne maintenant</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-300 transition-colors"
            >
              <FaTimes size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                    message.sender === 'user'
                      ? 'bg-primary text-white'
                      : 'bg-lightGray text-darkGray'
                  }`}
                >
                  {message.sender === 'agent' && (
                    <div className="flex items-center mb-1">
                      <FaUser size={12} className="mr-1" />
                      <span className="text-xs font-medium">Conseiller G.TRAVAUX</span>
                    </div>
                  )}
                  <p>{message.text}</p>
                  <p className="text-xs opacity-70 mt-1">
                    {message.timestamp.toLocaleTimeString('fr-FR', { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </p>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-lightGray text-darkGray px-3 py-2 rounded-lg text-sm">
                  <div className="flex items-center">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-darkGray rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-darkGray rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-darkGray rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
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
              <p className="text-xs text-darkGray mb-2">Réponses rapides :</p>
              <div className="flex flex-wrap gap-1">
                {quickResponses.slice(0, 3).map((response) => (
                  <button
                    key={response}
                    onClick={() => handleQuickResponse(response)}
                    className="text-xs bg-lightGray text-darkGray px-2 py-1 rounded hover:bg-primary hover:text-white transition-colors"
                  >
                    {response}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-4 border-t">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Tapez votre message..."
                className="flex-1 p-2 border border-lightGray rounded-lg focus:border-primary focus:outline-none text-sm"
              />
              <button
                type="submit"
                disabled={!inputMessage.trim()}
                className="bg-primary text-white p-2 rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <FaPaperPlane size={14} />
              </button>
            </div>
            <div className="flex items-center justify-between mt-2">
              <p className="text-xs text-darkGray">
                Urgence ? 
                <a href="tel:+33604007499" className="text-green font-medium ml-1">
                  <FaPhone className="inline mr-1" size={10} />
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
