import Link from 'next/link';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="section-dark mt-12">
      <div className="container mx-auto grid grid-cols-1 gap-8 px-4 py-12 md:grid-cols-4">
        <div className="space-y-3">
          <h3 className="text-xl font-bold uppercase tracking-widest text-white">
            G.TRAVAUX
          </h3>
          <p className="mb-2 flex items-center text-white/90">
            <FaMapMarkerAlt className="mr-2 text-brand-orange-400" /> 3 Rue du
            Vingt-Deux Novembre, 67000 Strasbourg
          </p>
          <p className="mb-2 flex items-center text-white/90">
            <FaPhone className="mr-2 text-brand-orange-400" />
            <a
              href="tel:+33367102653"
              className="transition-colors hover:text-brand-orange-300"
            >
              03 67 10 26 53
            </a>
          </p>
          <p className="flex items-center text-white/90">
            <FaEnvelope className="mr-2 text-brand-orange-400" />
            <a
              href="mailto:contact@g-travaux.fr"
              className="transition-colors hover:text-brand-orange-300"
            >
              contact@g-travaux.fr
            </a>
          </p>
        </div>
        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest">
            Navigation
          </h4>
          <ul className="space-y-2 text-white/90">
            <li>
              <Link href="/" className="transition-colors hover:text-white">
                Accueil
              </Link>
            </li>
            <li>
              <Link
                href="/realisations"
                className="transition-colors hover:text-white"
              >
                Réalisations
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="transition-colors hover:text-white"
              >
                À propos
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="transition-colors hover:text-white"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest">
            Aides
          </h4>
          <ul className="space-y-2 text-white/90">
            <li>
              <Link
                href="/mentions-legales"
                className="transition-colors hover:text-white"
              >
                Mentions légales
              </Link>
            </li>
            <li>
              <Link
                href="/confidentialite"
                className="transition-colors hover:text-white"
              >
                Politique de confidentialité
              </Link>
            </li>
            <li>
              <Link
                href="/cookies"
                className="transition-colors hover:text-white"
              >
                Politique de cookies
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-2">
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest">
            Informations
          </h4>
          <p className="mb-2 text-white/90">
            Basés à Strasbourg — interventions dans toute la France.
          </p>
          <p className="mb-2 text-white/90">SIRET : 930 621 875 00010</p>
          <p className="mb-2 text-white/90">Assurance décennale incluse.</p>
          <p className="mb-2 text-white/90">Certifications : RGE, Qualibat</p>
          <p className="text-xs text-white/60">
            © {new Date().getFullYear()} G.TRAVAUX — Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}