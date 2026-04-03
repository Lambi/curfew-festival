'use client';

import { useState, useEffect } from 'react';

const FESTIVAL_DATE = new Date('2026-06-06T12:00:00+02:00');

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getTimeLeft(): TimeLeft {
  const now = new Date();
  const diff = Math.max(0, FESTIVAL_DATE.getTime() - now.getTime());

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function pad(n: number): string {
  return n.toString().padStart(2, '0');
}

export default function Countdown() {
  const [time, setTime] = useState<TimeLeft>(getTimeLeft());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex justify-center gap-4 md:gap-8">
      {[
        { value: time.days, label: 'DAYS' },
        { value: time.hours, label: 'HOURS' },
        { value: time.minutes, label: 'MIN' },
        { value: time.seconds, label: 'SEC' },
      ].map((unit) => (
        <div key={unit.label} className="text-center">
          <div className="font-display font-black text-golden text-3xl md:text-5xl lg:text-6xl leading-none tracking-wider">
            {pad(unit.value)}
          </div>
          <div className="text-cream/40 text-[9px] md:text-[10px] tracking-[0.3em] font-bold mt-2">
            {unit.label}
          </div>
        </div>
      ))}
    </div>
  );
}
