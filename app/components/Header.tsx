"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes, FaChevronDown, FaPhone } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

interface NavItem {
  label: string;
  href?: string;
  dropdown?: { label: string; href: string }[];
}

// Définition du menu principal optimisé
const navItems: NavItem[] = [
  { label: 'Accueil', href: '/' },
  {
    label: 'Services',
    dropdown: [
      { label: 'Pose de sol', href: '/services/pose-de-sol' },
      { label: 'Plâtrerie & placo', href: '/services/platrerie-placo' },
      { label: 'Maçonnerie légère', href: '/services/maconnerie-legere' },
      { label: 'Électricité & plomberie', href: '/services/electricite-plomberie' },
      { label: 'Isolation intérieure', href: '/services/isolation-interieure' },
      { label: 'Peinture & finitions', href: '/services/peinture-finitions' },
    ],
  },
  { label: 'Réalisations', href: '/realisations' },
  { label: 'À propos', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

// Sanitize un label pour en faire un id HTML valide
const toMenuId = (label: string) =>
  `${label}`
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '') // enlever les accents
    .replace(/\s+/g, '-')
    .replace(/[^a-zA-Z0-9_-]/g, '')
    .toLowerCase() + '-menu';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // Identifiant du menu déroulant actuellement ouvert (Travaux, Finitions), ou null
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  const toggleDropdown = (label: string) => {
    setOpenDropdown((prev) => (prev === label ? null : label));
  };

  // Fermer le menu déroulant si on clique ailleurs ou avec Escape
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <header ref={headerRef} className="fixed top-0 left-0 w-full bg-steelBlue shadow z-40">
      {/* Ligne unique: logo à gauche, menu au centre, téléphone + bouton à droite */}
      <div className="container mx-auto px-4 py-4 flex items-center gap-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-white shrink-0">
          G.TRAVAUX
        </Link>

        {/* Menu desktop décalé vers la droite */}
        <nav className="hidden md:flex flex-1 items-center justify-end gap-8 text-white mr-8">
          {navItems.map((item) => {
            const menuId = toMenuId(item.label);
            return (
              <div 
                key={item.label} 
                className="relative"
              >
                {item.dropdown ? (
                  <>
                    <button
                      className="flex items-center text-white hover:text-white/80 focus:outline-none"
                      onClick={() => toggleDropdown(item.label)}
                      aria-haspopup="true"
                      aria-expanded={openDropdown === item.label}
                      aria-controls={menuId}
                    >
                      {item.label}
                      <FaChevronDown className={`ml-1 transition-transform duration-200 ${
                        openDropdown === item.label ? 'rotate-180' : ''
                      }`} />
                    </button>
                    <AnimatePresence>
                      {openDropdown === item.label && (
                        <motion.ul
                          id={menuId}
                          initial={{ opacity: 0, y: -10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-0 mt-2 bg-white border rounded-lg shadow-xl p-2 space-y-1 z-50 text-darkGray min-w-[220px] max-w-xs"
                        >
                          {item.dropdown.map((sub) => (
                            <li key={sub.href}>
                              <Link
                                href={sub.href}
                                className="block px-4 py-3 text-darkGray hover:bg-primary/10 hover:text-primary rounded-md whitespace-nowrap transition-colors duration-150 font-medium"
                                onClick={() => setOpenDropdown(null)}
                              >
                                {sub.label}
                              </Link>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link href={item.href!} className="text-white hover:text-white/80">
                    {item.label}
                  </Link>
                )}
              </div>
            );
          })}
        </nav>

        {/* Téléphone + bouton devis (droite) */}
        <div className="hidden md:flex items-center gap-6 shrink-0">
          <a
            href="tel:+33604007499"
            className="flex items-center font-bold text-green hover:opacity-90 bg-green/10 px-3 py-2 rounded-lg border-2 border-green/20 hover:border-green/40 transition-all duration-300"
            aria-label="Urgence 24h/24"
          >
            <FaPhone className="mr-2 text-green animate-pulse" />
            <div className="flex flex-col">
              <span className="text-sm font-bold">URGENCE 24h/24</span>
              <span className="text-lg font-black">06 04 00 74 99</span>
            </div>
          </a>
          <Link
            href="/contact"
            className="bg-green text-white font-semibold px-4 py-2 rounded hover:opacity-90 transition-colors"
            aria-label="Demander un devis"
          >
            Devis gratuit
          </Link>
        </div>

        {/* Bouton menu mobile */}
        <button
          className="md:hidden text-white focus:outline-none ml-auto"
          aria-label="Ouvrir le menu mobile"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Menu mobile */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            className="md:hidden bg-white shadow-inner pb-24"
          >
            <ul className="flex flex-col p-4 space-y-2">
              {navItems.map((item) => (
                <li key={item.label} className="border-b pb-2 last:border-b-0">
                  {item.dropdown ? (
                    <details className="group">
                      <summary className="flex items-center justify-between cursor-pointer text-darkGray hover:text-primary">
                        {item.label}
                        <FaChevronDown className="transition-transform duration-200 group-open:rotate-180" />
                      </summary>
                      <ul className="ml-4 mt-2 space-y-1">
                        {item.dropdown.map((sub) => (
                          <li key={sub.href}>
                            <Link
                              href={sub.href}
                              className="block py-1 text-darkGray hover:text-primary"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {sub.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </details>
                  ) : (
                    <Link href={item.href!} className="block text-darkGray hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
              <li className="pt-4">
                <div className="flex items-center justify-between gap-4">
                  <a href="tel:+33604007499" className="flex items-center font-semibold text-green" aria-label="Téléphoner">
                    <FaPhone className="mr-2 text-green" />
                    <span>06 04 00 74 99</span>
                  </a>
                  <Link href="/contact" className="bg-green text-white font-semibold px-4 py-2 rounded" aria-label="Demander un devis" onClick={() => setMobileMenuOpen(false)}>
                    Devis gratuit
                  </Link>
                </div>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
