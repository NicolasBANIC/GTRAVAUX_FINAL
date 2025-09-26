'use client';

import React from 'react';

interface ClientWrapperProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Wrapper générique pour composants nécessitant une exécution côté client
 * Utilisé pour isoler les parties interactives des Server Components
 */
export default function ClientWrapper({ 
  children, 
  className = '' 
}: ClientWrapperProps) {
  return <div className={className}>{children}</div>;
}