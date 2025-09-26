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
    <div className="rounded-lg border border-gray-200 bg-white p-6">
      <p className="mb-4 italic text-darkGray">"{message}"</p>
      <p className="font-semibold text-primary">{name}</p>
      <p className="text-sm text-darkGray">{location}</p>
    </div>
  );
}
