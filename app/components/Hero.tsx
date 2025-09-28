import Link from 'next/link';
import ClientMotionDiv from './ClientMotionDiv';
import HeroVideo from './HeroVideo';
import CallbackFormEnhanced from './CallbackFormEnhanced';

interface HeroProps {
  title: string;
  subtitle: string;
  videoSrc?: string | string[];
  imageSrc?: string;
  cta?: {
    label: string;
    href: string;
  };
  showForm?: boolean;
  fullScreen?: boolean;

  centerText?: boolean; // Controls text alignment - true for center everywhere, false for left on large screens
}

/**
 * Hero Component - Version Server
 * Migration d'un composant Client vers Server pour améliorer les performances
 * Seules les animations sont déportées vers ClientMotionDiv
 */
export default function Hero({
  title,
  subtitle,
  videoSrc,
  imageSrc,
  cta,
  showForm = false,
  fullScreen = false,
  centerText = true, // Default to centered text (for all pages except homepage)
}: HeroProps) {
  // Hauteur adaptive selon les règles : 100vh uniquement pour accueil, ~60vh pour les autres
  const heightClass = fullScreen
    ? 'min-h-[600px] sm:min-h-[660px] md:min-h-[720px] lg:h-screen'
    : 'min-h-[520px] sm:min-h-[560px] lg:min-h-[620px]';
  const alignmentClass = fullScreen
    ? 'justify-start pt-16 sm:pt-20 md:pt-24 lg:pt-0 lg:justify-center'
    : 'justify-center';

  return (
    <section
      className={`relative flex items-center ${alignmentClass} ${
        heightClass
      }`}
    >
      {/* Background Video/Image - Static, server-rendered */}
      <div className="absolute inset-0 z-0">
        {videoSrc ? (
          <HeroVideo
            videoSrc={videoSrc}
            fallbackImage={imageSrc}
            title={title}
            poster={imageSrc}
          />
        ) : (
          imageSrc && (
            <div
              className="h-full w-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${imageSrc})` }}
              role="img"
              aria-label="Image d'arrière-plan"
            />
          )
        )}
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-6 md:py-12">
        {/* Dynamic layout: responsive stacking for mobile, two-column for desktop */}
        {showForm ? (
          // Responsive layout: mobile stacked (text above form), desktop two-column
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            {/* Text Content - Full width on mobile, proper alignment responsive */}
            <ClientMotionDiv immediateVisible={true} delay={0.2} className="order-1">
              <div
                className={
                  centerText
                    ? 'text-center'
                    : 'text-center md:text-left max-w-3xl md:max-w-none'
                }
              >
                <h1 className="text-[clamp(2rem,4vw,3.5rem)] sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-5 lg:mb-6 leading-tight sm:leading-tight md:leading-tight lg:leading-tight">
                  {title}
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 md:mb-7 lg:mb-8 leading-relaxed md:leading-relaxed max-w-xl md:max-w-2xl mx-auto md:mx-0">
                  {subtitle}
                </p>
                {cta && (
                  <Link
                    href={cta.href}
                    className="button-accent text-sm sm:text-base md:text-lg px-5 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 inline-block transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent"
                    aria-label={`${cta.label} - Ouvre la page de contact`}
                  >
                    {cta.label}
                  </Link>
                )}
              </div>
            </ClientMotionDiv>

            {/* Form Section - Full width on mobile, positioned right on desktop */}
            <div className="order-2 w-full md:max-w-md lg:max-w-lg">
              <div className="flex justify-center lg:justify-end">
                <div className="w-full max-w-md sm:max-w-lg lg:max-w-lg">
                  <CallbackFormEnhanced />
                </div>
              </div>
            </div>
          </div>
        ) : (
          // Centered single column layout for other pages without form
          <div className="flex justify-center">
            <div className="w-full max-w-4xl mx-auto px-4 sm:px-6">
              <ClientMotionDiv immediateVisible={true} delay={0.2}>
                <div className="text-center">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                    {title}
                  </h1>
                  <p className="text-xl text-white/90 mb-8 leading-relaxed">
                    {subtitle}
                  </p>
                  {cta && (
                    <Link
                      href={cta.href}
                      className="button-accent text-lg px-8 py-4 inline-block transition-all hover:scale-105"
                    >
                      {cta.label}
                    </Link>
                  )}
                </div>
              </ClientMotionDiv>
            </div>
          </div>
        )}
      </div>

      {/* Scroll Indicator - Immediate visibility with longer delay */}
      {fullScreen && (
        <ClientMotionDiv
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          immediateVisible={true}
          delay={1.2}
        >
          <div className="flex flex-col items-center">
            <span className="text-white/80 text-sm mb-2">Découvrez nos services</span>
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/80 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </ClientMotionDiv>
      )}
    </section>
  );
}