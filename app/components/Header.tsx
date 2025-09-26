'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes, FaChevronDown, FaPhone } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

interface SubNavItem {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href?: string;
  dropdown?: SubNavItem[];
}

// Type guard pour vérifier qu'un NavItem a un href
function hasHref(item: NavItem): item is NavItem & { href: string } {
  return typeof item.href === 'string';
}

// Définition du menu principal optimisé
const navItems: NavItem[] = [
  { label: 'Accueil', href: '/' },
  {
    label: 'Services',
    dropdown: [
      { label: 'Démolition', href: '/services/demolition' },
      { label: 'Électricité & plomberie', href: '/services/electricite-plomberie' },
      { label: 'Isolation intérieure', href: '/services/isolation-interieure' },
      { label: 'Maçonnerie légère', href: '/services/maconnerie-legere' },
      { label: 'Peinture & finitions', href: '/services/peinture-finitions' },
      { label: 'Plâtrerie & placo', href: '/services/platrerie-placo' },
      { label: 'Pose de sol', href: '/services/pose-de-sol' },
      { label: 'Sanitaires', href: '/services/sanitaires' },
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
  // Gestion d'état React classique
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const dropdownRefs = useRef<Array<HTMLButtonElement | null>>([]); // FIX: refs pour navigation clavier

  const toggleDropdown = (label: string) => {
    setOpenDropdown(prev => (prev === label ? null : label));
  };

  // FIX: gestion clavier pour accessibilité menu déroulant
  const handleDropdownKeyDown = (
    event: React.KeyboardEvent,
    label: string,
    idx: number
  ) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleDropdown(label);
    } else if (event.key === 'ArrowDown') {
      event.preventDefault();
      setOpenDropdown(label);
      // Focus sur le premier élément du dropdown
      const dropdownMenu = document.getElementById(toMenuId(label));
      if (dropdownMenu) {
        const firstItem = dropdownMenu.querySelector('a, button');
        (firstItem as HTMLElement)?.focus();
      }
    } else if (event.key === 'Tab' && openDropdown === label) {
      setOpenDropdown(null);
    } else if (event.key === 'Escape') {
      setOpenDropdown(null);
      dropdownRefs.current[idx]?.focus();
    }
  };

  // Fermer le menu déroulant si on clique ailleurs ou avec Escape
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
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
    <header
      ref={headerRef}
      className="glass-header fixed left-0 top-0 z-40 w-full"
    >
      {/* Ligne unique: logo à gauche, menu au centre, téléphone + bouton à droite */}
      <div className="container mx-auto flex h-16 md:h-20 items-center gap-4 px-4">
        {/* Logo */}
        <Link
          href="/"
          className="shrink-0 text-2xl font-semibold tracking-widest text-white"
        >
          G.TRAVAUX
        </Link>

        {/* Menu desktop décalé vers la droite */}
        <nav className="mr-8 hidden flex-1 items-center justify-end gap-8 text-white md:flex">
          {navItems.map(item => {
            const menuId = toMenuId(item.label);
            const idx = navItems.findIndex(nav => nav.label === item.label);
            return (
              <div key={item.label} className="relative">
                {item.dropdown ? (
                  <>
                    <button
                      className="flex items-center uppercase tracking-wider text-white/90 transition-colors hover:text-success-600 focus:outline-none"
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === item.label ? null : item.label
                        )
                      }
                      onKeyDown={e => handleDropdownKeyDown(e, item.label, idx)}
                      aria-haspopup="true"
                      aria-expanded={openDropdown === item.label}
                      aria-controls={menuId}
                      ref={el => {
                        dropdownRefs.current[idx] = el;
                      }}
                      tabIndex={0}
                    >
                      {item.label}
                      <FaChevronDown
                        className={`ml-1 transition-transform duration-200 ${
                          openDropdown === item.label ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {openDropdown === item.label && (
                        <motion.div
                          id={menuId}
                          role="menu"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="absolute left-0 z-50 mt-2 w-64 rounded-xl border border-white/20 bg-white/95 py-2 shadow-xl backdrop-blur-md"
                        >
                          {item.dropdown.map(sub => (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              role="menuitem"
                              className="block rounded-lg px-4 py-2 uppercase tracking-wide text-darkGray transition-colors hover:bg-lightGray hover:text-primary"
                              onClick={() => setOpenDropdown(null)}
                              onKeyDown={e => {
                                if (e.key === 'Escape') {
                                  setOpenDropdown(null);
                                  dropdownRefs.current[idx]?.focus();
                                }
                              }}
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : hasHref(item) ? (
                  <Link
                    href={item.href}
                    className="uppercase tracking-wider text-white/90 transition-colors hover:text-success-600"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="uppercase tracking-wider text-white/90">
                    {item.label}
                  </span>
                )}
              </div>
            );
          })}
        </nav>

        {/* Téléphone + bouton devis (droite) */}
        <div className="hidden shrink-0 items-center gap-6 md:flex">
          <a
            href="tel:+33604007499"
            className="group flex items-center rounded-lg border-2 border-success-400/20 bg-success-400/10 px-3 py-2 font-bold text-success-600 transition-all duration-300 hover:scale-105 hover:border-success-400/60 hover:bg-success-400/20 hover:text-success-400 hover:shadow-lg hover:shadow-success-400/20"
            aria-label="Urgence 24h/24"
          >
            <FaPhone className="mr-2 animate-pulse text-success-600 transition-colors duration-300 group-hover:text-success-400" />
            <div className="flex flex-col">
              <span className="text-sm font-bold text-white/80">
                URGENCE 24h/24
              </span>
              <span className="text-lg font-black text-white">
                06 04 00 74 99
              </span>
            </div>
          </a>
          <Link
            href="/contact"
            className="button-accent"
            aria-label="Demander un devis"
          >
            Devis gratuit
          </Link>
        </div>

        {/* Bouton menu mobile */}
        <button
          className="ml-auto text-white focus:outline-none md:hidden"
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
            className="bg-white/95 pb-24 shadow-inner backdrop-blur-md md:hidden"
          >
            <ul className="flex flex-col space-y-2 p-4">
              {navItems.map(item => (
                <li key={item.label} className="border-b pb-2 last:border-b-0">
                  {item.dropdown ? (
                    <details className="group">
                      <summary className="flex cursor-pointer items-center justify-between text-darkGray hover:text-primary">
                        {item.label}
                        <FaChevronDown className="transition-transform duration-200 group-open:rotate-180" />
                      </summary>
                      <ul className="ml-4 mt-2 space-y-1">
                        {item.dropdown.map(sub => (
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
                  ) : hasHref(item) ? (
                    <Link
                      href={item.href}
                      className="block text-darkGray hover:text-primary"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span className="block text-darkGray">{item.label}</span>
                  )}
                </li>
              ))}
              <li className="pt-4">
                <div className="flex items-center justify-between gap-4">
                  <a
                    href="tel:+33604007499"
                    className="group flex items-center font-semibold text-success-600 transition-colors duration-300 hover:text-success-400"
                    aria-label="Téléphoner"
                  >
                    <FaPhone className="mr-2 text-success-600 transition-colors duration-300 group-hover:text-success-400" />
                    <span>06 04 00 74 99</span>
                  </a>
                  <Link
                    href="/contact"
                    className="button-accent"
                    aria-label="Demander un devis"
                    onClick={() => setMobileMenuOpen(false)}
                  >
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
