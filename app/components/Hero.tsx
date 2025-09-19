import Link from 'next/link';
import Image from 'next/image';

interface HeroProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  cta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  showForm?: boolean;
  formComponent?: React.ReactNode;
}

export default function Hero({ title, subtitle, imageSrc, cta, secondaryCta, showForm, formComponent }: HeroProps) {
  return (
    <section className="relative min-h-[70vh] lg:min-h-[75vh] flex items-center justify-center text-white pt-20">
      {/* Background Image + overlay plus neutre comme ATB */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 from-black/40 via-black/55 to-black/70 bg-gradient-to-b"></div>
        {/* Trame douce type grille sombre + léger cyan */}
        <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:80px_80px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 w-full">
        {showForm ? (
          /* Layout avec formulaire à droite */
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="text-left">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold mb-6 leading-tight tracking-[0.12em] uppercase">
                {title}
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl mb-10 leading-relaxed opacity-95">
                {subtitle}
              </p>
              
              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                {cta && (
                  <Link
                    href={cta.href}
                    className="button-accent text-center"
                  >
                    {cta.label}
                  </Link>
                )}
                {secondaryCta && (
                  <Link
                    href={secondaryCta.href}
                    className="glass-button border-2 border-accent-400 text-white hover:text-white"
                  >
                    {secondaryCta.label}
                  </Link>
                )}
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              {formComponent}
            </div>
          </div>
        ) : (
          /* Layout centré classique - HARMONISÉ avec le style de la page d'accueil */
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold mb-6 leading-tight tracking-[0.12em] uppercase">
              {title}
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed opacity-95">
              {subtitle}
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {cta && (
                <Link
                  href={cta.href}
                  className="button-accent"
                >
                  {cta.label}
                </Link>
              )}
              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className="glass-button border-2 border-accent-400 text-white hover:text-white"
                >
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
