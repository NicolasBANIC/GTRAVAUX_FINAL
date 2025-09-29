interface TestimonialCardProps {
  name: string;
  location: string;
  message: string;
}

export default function TestimonialCard({
  name,
  location,
  message,
}: TestimonialCardProps) {
  return (
    <div className="rounded-brand bg-white p-6 shadow-brand">
      <p className="mb-4 italic text-brand-graphite-600">"{message}"</p>
      <p className="font-semibold text-brand-orange-600">{name}</p>
      <p className="text-sm text-brand-graphite-500">{location}</p>
    </div>
  );
}
