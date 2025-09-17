import { FaPhoneAlt } from 'react-icons/fa';

/**
 * Sticky urgent call-to-action button. Always visible at the bottom right
 * of the page. On click, triggers a phone call for emergency repairs.
 */
export default function StickyCta() {
  return (
    <a
      href="tel:+33972123456"
      className="sticky-cta flex items-center space-x-2"
      aria-label="Dépannage urgent"
    >
      <FaPhoneAlt />
      <span>Dépannage urgent</span>
    </a>
  );
}
