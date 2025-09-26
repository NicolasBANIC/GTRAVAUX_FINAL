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
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Orange gradient pattern */}
      {gradientType === 'orange' && (
        <>
          <div
            className="absolute left-0 top-0 size-2/3 -translate-x-1/3 -translate-y-1/3 rounded-full bg-gradient-to-br from-primary/10 to-transparent blur-3xl"
            style={{ animation: 'gradientFloat 15s ease-in-out infinite' }}
          />
          <div
            className="absolute bottom-0 right-0 size-2/3 translate-x-1/4 translate-y-1/4 rounded-full bg-gradient-to-tl from-primary/5 to-transparent blur-3xl"
            style={{
              animation: 'gradientFloat 18s ease-in-out infinite reverse',
            }}
          />
          <div
            className="from-primary/8 absolute right-1/4 top-1/2 size-1/3 rounded-full bg-gradient-to-bl to-transparent blur-3xl"
            style={{ animation: 'gradientFloat 20s ease-in-out infinite 1s' }}
          />
          <div
            className="from-primary/7 absolute left-1/2 top-1/3 size-1/4 rounded-full bg-gradient-to-tr to-transparent blur-3xl"
            style={{ animation: 'gradientFloat 25s ease-in-out infinite 2s' }}
          />
        </>
      )}

      {/* Gray gradient pattern */}
      {gradientType === 'gray' && (
        <>
          <div
            className="from-darkGray/8 absolute right-0 top-0 size-2/3 -translate-y-1/3 translate-x-1/3 rounded-full bg-gradient-to-bl to-transparent blur-3xl"
            style={{ animation: 'gradientFloat 17s ease-in-out infinite' }}
          />
          <div
            className="absolute bottom-0 left-0 size-2/3 -translate-x-1/4 translate-y-1/4 rounded-full bg-gradient-to-tr from-darkGray/10 to-transparent blur-3xl"
            style={{
              animation: 'gradientFloat 22s ease-in-out infinite reverse',
            }}
          />
          <div
            className="from-darkGray/7 absolute left-1/3 top-1/3 size-1/3 rounded-full bg-gradient-to-br to-transparent blur-3xl"
            style={{ animation: 'gradientFloat 19s ease-in-out infinite 1.5s' }}
          />
          <div
            className="from-darkGray/6 absolute bottom-1/4 right-1/3 size-1/4 rounded-full bg-gradient-to-tl to-transparent blur-3xl"
            style={{ animation: 'gradientFloat 24s ease-in-out infinite 3s' }}
          />
        </>
      )}
    </div>
  );
}
