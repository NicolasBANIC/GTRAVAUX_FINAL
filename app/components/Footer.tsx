import Link from 'next/link';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-primary text-white mt-12">
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-3">
          <h3 className="text-xl font-bold tracking-widest uppercase">G.TRAVAUX</h3>
          <p className="mb-2 flex items-center text-white/90">
            <FaMapMarkerAlt className="mr-2 text-accent-400" /> 3 Rue du Vingt-Deux Novembre, 67000 Strasbourg
          </p>
          <p className="mb-2 flex items-center text-white/90">
            <FaPhone className="mr-2 text-success-400" />
            <a href="tel:+33972123456" className="hover:text-accent-300 transition-colors">+33 9 72 12 34 56</a>
          </p>
          <p className="flex items-center text-white/90">
            <FaEnvelope className="mr-2 text-accent-400" />
            <a href="mailto:contact.gtravaux@gmail.com" className="hover:text-accent-300 transition-colors">
              contact.gtravaux@gmail.com
            </a>
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-4 uppercase tracking-widest">Navigation</h4>
          <ul className="space-y-2 text-white/90">
            <li>
              <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
            </li>
            <li>
              <Link href="/realisations" className="hover:text-white transition-colors">Réalisations</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white transition-colors">À propos</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-4 uppercase tracking-widest">Aides</h4>
          <ul className="space-y-2 text-white/90">
            <li>
              <Link href="/mentions-legales" className="hover:text-white transition-colors">Mentions légales</Link>
            </li>
            <li>
              <Link href="/confidentialite" className="hover:text-white transition-colors">Politique de confidentialité</Link>
            </li>
            <li>
              <Link href="/cookies" className="hover:text-white transition-colors">Politique de cookies</Link>
            </li>
          </ul>
        </div>
        <div className="space-y-2">
          <h4 className="text-sm font-semibold mb-4 uppercase tracking-widest">Informations</h4>
          <p className="mb-2 text-white/90">Basés à Strasbourg — interventions dans toute la France.</p>
          <p className="mb-2 text-white/90">SIRET : 123 456 789 00012</p>
          <p className="mb-2 text-white/90">Assurance décennale incluse.</p>
          <p className="mb-2 text-white/90">Certifications : RGE, Qualibat</p>
          <p className="text-xs text-white/60">© {new Date().getFullYear()} G.TRAVAUX — Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}