'use client';

import { motion } from 'framer-motion';

interface LoaderProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'white' | 'dark';
  type?: 'spinner' | 'dots' | 'pulse';
  className?: string;
  text?: string;
}

export default function Loader({
  size = 'md',
  color = 'primary',
  type = 'spinner',
  className = '',
  text,
}: LoaderProps) {
  // Tailles
  const sizeValues = {
    sm: {
      container: 'h-4 w-4',
      text: 'text-sm',
    },
    md: {
      container: 'h-8 w-8',
      text: 'text-base',
    },
    lg: {
      container: 'h-12 w-12',
      text: 'text-lg',
    },
  };
  
  // Couleurs
  const colorValues = {
    primary: 'text-primary',
    white: 'text-white',
    dark: 'text-darkGray',
  };
  
  // Spinner
  if (type === 'spinner') {
    return (
      <div className={`flex flex-col items-center justify-center ${className}`}>
        <motion.div
          className={`${sizeValues[size].container} ${colorValues[color]} border-4 border-current border-t-transparent rounded-full`}
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          role="status"
          aria-label="Chargement"
        />
        {text && (
          <p className={`mt-2 ${sizeValues[size].text} ${colorValues[color]}`}>
            {text}
          </p>
        )}
      </div>
    );
  }
  
  // Points
  if (type === 'dots') {
    const dotSize = size === 'sm' ? 'w-1.5 h-1.5' : size === 'md' ? 'w-2.5 h-2.5' : 'w-3.5 h-3.5';
    const dotSpacing = size === 'sm' ? 'space-x-1' : size === 'md' ? 'space-x-2' : 'space-x-3';
    
    return (
      <div className={`flex flex-col items-center justify-center ${className}`}>
        <div className={`flex ${dotSpacing}`}>
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className={`${dotSize} ${colorValues[color]} rounded-full`}
              animate={{ scale: [1, 1.5, 1] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: 'loop',
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
        {text && (
          <p className={`mt-2 ${sizeValues[size].text} ${colorValues[color]}`}>
            {text}
          </p>
        )}
      </div>
    );
  }
  
  // Pulse
  if (type === 'pulse') {
    return (
      <div className={`flex flex-col items-center justify-center ${className}`}>
        <div className={`relative ${sizeValues[size].container}`}>
          <motion.div
            className={`absolute inset-0 ${colorValues[color]} rounded-full`}
            animate={{ scale: [1, 1.5, 1], opacity: [0.6, 0.2, 0.6] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
          />
          <motion.div
            className={`absolute inset-0 ${colorValues[color]} rounded-full`}
            animate={{ scale: [1, 2], opacity: [0.6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
          />
          <div className={`absolute inset-3 ${colorValues[color]} rounded-full`} />
        </div>
        {text && (
          <p className={`mt-2 ${sizeValues[size].text} ${colorValues[color]}`}>
            {text}
          </p>
        )}
      </div>
    );
  }
  
  return null;
}