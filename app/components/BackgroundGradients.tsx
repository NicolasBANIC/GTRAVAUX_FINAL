'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function BackgroundGradients() {
  const pathname = usePathname();
  const [gradientType, setGradientType] = useState<'orange' | 'gray'>('orange');

  // Change gradient type based on pathname
  useEffect(() => {
    // Determine gradient type based on pathname
    // We'll alternate between orange and gray based on the path depth
    const pathSegments = pathname.split('/').filter(Boolean);
    setGradientType(pathSegments.length % 2 === 0 ? 'orange' : 'gray');
  }, [pathname]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Orange gradient pattern */}
      {gradientType === 'orange' && (
        <>
          <div 
            className="absolute top-0 left-0 w-2/3 h-2/3 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl transform -translate-x-1/3 -translate-y-1/3"
            style={{ animation: 'gradientFloat 15s ease-in-out infinite' }}
          />
          <div 
            className="absolute bottom-0 right-0 w-2/3 h-2/3 bg-gradient-to-tl from-primary/5 to-transparent rounded-full blur-3xl transform translate-x-1/4 translate-y-1/4"
            style={{ animation: 'gradientFloat 18s ease-in-out infinite reverse' }}
          />
          <div 
            className="absolute top-1/2 right-1/4 w-1/3 h-1/3 bg-gradient-to-bl from-primary/8 to-transparent rounded-full blur-3xl"
            style={{ animation: 'gradientFloat 20s ease-in-out infinite 1s' }}
          />
          <div 
            className="absolute top-1/3 left-1/2 w-1/4 h-1/4 bg-gradient-to-tr from-primary/7 to-transparent rounded-full blur-3xl"
            style={{ animation: 'gradientFloat 25s ease-in-out infinite 2s' }}
          />
        </>
      )}

      {/* Gray gradient pattern */}
      {gradientType === 'gray' && (
        <>
          <div 
            className="absolute top-0 right-0 w-2/3 h-2/3 bg-gradient-to-bl from-darkGray/8 to-transparent rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"
            style={{ animation: 'gradientFloat 17s ease-in-out infinite' }}
          />
          <div 
            className="absolute bottom-0 left-0 w-2/3 h-2/3 bg-gradient-to-tr from-darkGray/10 to-transparent rounded-full blur-3xl transform -translate-x-1/4 translate-y-1/4"
            style={{ animation: 'gradientFloat 22s ease-in-out infinite reverse' }}
          />
          <div 
            className="absolute top-1/3 left-1/3 w-1/3 h-1/3 bg-gradient-to-br from-darkGray/7 to-transparent rounded-full blur-3xl"
            style={{ animation: 'gradientFloat 19s ease-in-out infinite 1.5s' }}
          />
          <div 
            className="absolute bottom-1/4 right-1/3 w-1/4 h-1/4 bg-gradient-to-tl from-darkGray/6 to-transparent rounded-full blur-3xl"
            style={{ animation: 'gradientFloat 24s ease-in-out infinite 3s' }}
          />
        </>
      )}
    </div>
  );
}