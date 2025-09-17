import Link from 'next/link';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-steelBlue text-white mt-12">
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">G.TRAVAUX</h3>
          <p className="mb-2 flex items-center">
            <FaMapMarkerAlt className="mr-2" /> 3 Rue du Vingt-Deux Novembre, 67000 Strasbourg
          </p>
          <p className="mb-2 flex items-center">
            <FaPhone className="mr-2" />
            <a href="tel:+33972123456" className="hover:underline">+33 9 72 12 34 56</a>
          </p>
          <p className="flex items-center">
            <FaEnvelope className="mr-2" />
            <a href="mailto:contact.gtravaux@gmail.com" className="hover:underline">
              contact.gtravaux@gmail.com
            </a>
          </p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Navigation</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:underline">Accueil</Link>
            </li>
            <li>
              <Link href="/realisations" className="hover:underline">Réalisations</Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">À propos</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Informations</h4>
          <p className="mb-2">Basés à Strasbourg — interventions dans toute la France.</p>
          <p className="mb-2">SIRET : 123 456 789 00012</p>
          <p className="mb-2">Assurance décennale incluse.</p>
          <p className="mb-2">Certifications : RGE, Qualibat</p>
          <p className="text-sm text-lightGray">© {new Date().getFullYear()} G.TRAVAUX — Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}