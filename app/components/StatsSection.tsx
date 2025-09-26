interface Stat {
  label: string;
  value: number;
  suffix?: string;
}

interface StatsSectionProps {
  stats: Stat[];
}

export default function StatsSection({ stats }: StatsSectionProps) {
  return (
    <div className="grid grid-cols-2 gap-4 rounded-lg bg-lightGray p-8 md:grid-cols-4">
      {stats.map(stat => (
        <div key={stat.label} className="text-center">
          <p className="text-4xl font-bold text-primary">
            {stat.value}
            {stat.suffix}
          </p>
          <p className="mt-2 text-darkGray">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
