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
      className={`section-hero section-light relative mt-0 flex items-center pt-0 ${alignmentClass} ${
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
              className="size-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${imageSrc})`,
                minHeight: '100%',
                aspectRatio: '16 / 9',
              }}
              role="img"
              aria-label="Image d'arrière-plan"
            />
          )
        )}
      </div>

      {/* Overlay sombre pour améliorer la lisibilité */}
      <div className="absolute inset-0 -z-0" />

      {/* Content Container */}
      <div className="container relative z-10 mx-auto px-4 py-6 sm:px-6 md:py-12">
        {/* Dynamic layout: responsive stacking for mobile, two-column for desktop */}
        {showForm ? (
          // Responsive layout: mobile stacked (text above form), desktop two-column
          <div className="flex flex-col items-center gap-6 lg:grid lg:grid-cols-2 lg:gap-12">
            {/* Text Content - Full width on mobile, proper alignment responsive */}
            <ClientMotionDiv immediateVisible={true} delay={0.2} className="order-1">
              <div
                className={`
                  relative z-10 max-w-3xl rounded-brand
                  bg-black/60 p-4
                  text-white sm:bg-transparent sm:p-0
                  ${centerText
                    ? 'text-center'
                    : 'text-center md:max-w-none md:text-left'
                  }
                `}
              >
                <h1 className="section-title mb-4 text-[clamp(2rem,4vw,3.5rem)] leading-tight text-white sm:mb-5 sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight lg:mb-6 lg:text-6xl lg:leading-tight">
                  {title}
                </h1>
                <p className="section-sub mx-auto mb-6 mt-4 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg md:mx-0 md:mb-7 md:max-w-2xl md:text-xl md:leading-relaxed lg:mb-8">
                  {subtitle}
                </p>
                {cta && (
                  <Link
                    href={cta.href}
                    className="btn btn-primary inline-block px-5 py-3 text-sm transition-all hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-orange-700 sm:px-7 sm:py-3.5 sm:text-base md:px-8 md:py-4 md:text-lg"
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
            <div className="mx-auto w-full max-w-4xl px-4 sm:px-6">
              <ClientMotionDiv immediateVisible={true} delay={0.2}>
                <div className="
                  relative z-10 mx-auto max-w-3xl
                  rounded-brand bg-black/60
                  p-4 text-center text-white
                  sm:bg-transparent sm:p-0
                ">
                  <h1 className="section-title mb-6 text-4xl leading-tight text-white md:text-5xl lg:text-6xl">
                    {title}
                  </h1>
                  <p className="section-sub mb-8 mt-4 text-xl leading-relaxed text-white/90">
                    {subtitle}
                  </p>
                  {cta && (
                    <Link
                      href={cta.href}
                      className="btn btn-primary inline-block px-8 py-4 text-lg transition-all hover:scale-105"
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
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          immediateVisible={true}
          delay={1.2}
        >
          <div className="flex flex-col items-center">
            <span className="mb-2 text-sm text-white/80">Découvrez nos services</span>
            <div className="flex h-10 w-6 justify-center rounded-full border-2 border-white/50">
              <div className="mt-2 h-3 w-1 animate-bounce rounded-full bg-white/80"></div>
            </div>
          </div>
        </ClientMotionDiv>
      )}
    </section>
  );
}