import { FaPhoneAlt } from 'react-icons/fa';

/**
 * Sticky urgent call-to-action button. Always visible at the bottom right
 * of the page. On click, triggers a phone call for emergency repairs.
 */
export default function StickyCta() {
  return (
    <a
      href="tel:+33604007499"
      className="fixed bottom-6 right-6 z-50 gradient-accent text-white rounded-full px-5 py-3 shadow-lg flex items-center space-x-2 hover:scale-110 hover:shadow-2xl hover:shadow-accent-400/30 hover:brightness-110 active:scale-95 transition-all duration-300 uppercase tracking-wider group"
      aria-label="Appeler G.TRAVAUX - Urgence 24h/24"
    >
      <FaPhoneAlt className="group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300" />
      <span className="group-hover:font-semibold transition-all duration-300">Dépannage urgent</span>
    </a>
  );
}
