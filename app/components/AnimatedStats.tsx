'use client';

import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

interface StatItem {
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
  icon?: React.ReactNode;
}

interface AnimatedStatsProps {
  stats: StatItem[];
  className?: string;
  columns?: 2 | 3 | 4;
  animated?: boolean;
  duration?: number;
}

export default function AnimatedStats({
  stats,
  className = '',
  columns = 4,
  animated = true,
  duration = 2000,
}: AnimatedStatsProps) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [counters, setCounters] = useState<number[]>(stats.map(() => 0));

  // Définir les styles de colonnes pour les différentes tailles d'écran
  const getColumnStyles = () => {
    switch (columns) {
      case 2:
        return 'grid-cols-1 sm:grid-cols-2';
      case 3:
        return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3';
      case 4:
        return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4';
      default:
        return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4';
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    if (!isInView || !animated) {
      return undefined;
    }

    const stepDuration = 20; // ms par étape
    const steps = duration / stepDuration;

    const intervals = stats.map((stat, index) => {
      const stepValue = stat.value / steps;
      let currentValue = 0;

      return setInterval(() => {
        currentValue += stepValue;

        if (currentValue >= stat.value) {
          currentValue = stat.value;
          clearInterval(intervals[index]);
        }

        setCounters(prev => {
          const newCounters = [...prev];
          newCounters[index] = Math.floor(currentValue);
          return newCounters;
        });
      }, stepDuration);
    });

    return () => {
      intervals.forEach(interval => clearInterval(interval));
    };
  }, [isInView, stats, animated, duration]);

  return (
    <div ref={ref} className={`grid ${getColumnStyles()} gap-8 ${className}`}>
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          className="rounded-xl bg-white p-6 text-center shadow-md"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          {stat.icon && (
            <div className="mb-4 flex justify-center">
              <div className="text-3xl text-primary">{stat.icon}</div>
            </div>
          )}
          <div className="mb-2 text-4xl font-bold text-primary">
            {stat.prefix}
            {isInView ? counters[index] : 0}
            {stat.suffix}
          </div>
          <div className="font-medium text-darkGray">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
}
