"use client";

import Link from 'next/link';

interface ServiceParagraphProps {
  title: string;
  description: string;
  href: string;
  imagePosition: 'left' | 'right';
  imagePlaceholder?: string;
}

export default function ServiceParagraph({ 
  title, 
  description, 
  href, 
  imagePosition,
  imagePlaceholder = `/images/placeholder/service-${title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, '').replace(/\./g, '')}.jpg`
}: ServiceParagraphProps) {
  return (
    <div className={`flex flex-col ${imagePosition === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 mb-16 last:mb-0`}>
      {/* Image placeholder */}
      <div className="w-full md:w-1/2">
        <div className="aspect-video bg-lightGray rounded-lg border border-gray-200 flex items-center justify-center text-darkGray/60">
          <span className="text-sm">Image - {title}</span>
        </div>
      </div>
      
      {/* Content */}
      <div className="w-full md:w-1/2 space-y-6">
        <h3 className="text-2xl font-semibold text-primary">{title}</h3>
        <p className="text-darkGray leading-relaxed">{description}</p>
        <Link 
          href={href} 
          className="inline-block bg-transparent border border-primary text-primary px-6 py-2 rounded-md hover:bg-primary hover:text-white transition-colors duration-200 font-medium"
        >
          En savoir plus
        </Link>
      </div>
    </div>
  );
}