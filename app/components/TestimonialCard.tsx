interface TestimonialCardProps {
  name: string;
  location: string;
  message: string;
}

export default function TestimonialCard({ name, location, message }: TestimonialCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
      <p className="italic text-darkGray mb-4">"{message}"</p>
      <p className="font-semibold text-primary">{name}</p>
      <p className="text-sm text-darkGray">{location}</p>
    </div>
  );
}
