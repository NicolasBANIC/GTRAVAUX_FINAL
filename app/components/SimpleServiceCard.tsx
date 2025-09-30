import Link from 'next/link';
import { IconType } from 'react-icons';

interface SimpleServiceCardProps {
  title: string;
  description: string;
  href: string;
  Icon: IconType;
}

export default function SimpleServiceCard({
  title,
  description,
  href,
  Icon,
}: SimpleServiceCardProps) {
  return (
    <div className="service-card card-hover rounded-2xl bg-white/95 p-6 transition-all duration-300 hover:shadow-lg">
      <div className="tilt-inner">
        <div className="bg-accent-400/15 text-accent-600 mb-4 inline-flex size-12 items-center justify-center rounded-xl">
          <Icon size={24} />
        </div>
        <h3 className="mb-2 text-xl font-semibold uppercase tracking-widest text-primary">
          {title}
        </h3>
        <p className="mb-4 text-sm text-darkGray/80">{description}</p>
        <Link
          href={href}
          className="button-secondary border-accent-400 inline-block !text-primary"
        >
          En savoir plus
        </Link>
      </div>
    </div>
  );
}
