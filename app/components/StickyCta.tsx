import { FaPhoneAlt } from 'react-icons/fa';

/**
 * Sticky urgent call-to-action button. Always visible at the bottom right
 * of the page. On click, triggers a phone call for emergency repairs.
 */
export default function StickyCta() {
  return (
    <a
      href="tel:+33604007499"
      className="btn btn-primary group fixed bottom-6 right-6 z-50 flex items-center space-x-2 rounded-full px-5 py-3 uppercase tracking-wider text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-brand-orange-400/30 hover:brightness-110 active:scale-95"
      aria-label="Appeler G.TRAVAUX - Urgence 24h/24"
    >
      <FaPhoneAlt className="transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
      <span className="transition-all duration-300 group-hover:font-semibold">
        Dépannage urgent
      </span>
    </a>
  );
}
