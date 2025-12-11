'use client'

import { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetDate: Date;
  title: string;
  className?: string;
}

export function CountdownTimer({ targetDate, title, className = '' }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isPast, setIsPast] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const target = targetDate.getTime();
      const difference = target - now;

      if (difference <= 0) {
        setIsPast(true);
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000)
      });
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (isPast) {
    return (
      <div className={`bg-secondary/50 rounded-xl p-6 text-center ${className}`}>
        <p className="text-lg text-muted-foreground">{title}</p>
        <p className="text-2xl font-bold text-primary mt-2">انتهى الوقت!</p>
      </div>
    );
  }

  return (
    <div className={`bg-gradient-to-br from-primary/10 to-secondary/30 rounded-xl p-6 ${className}`}>
      <h3 className="text-lg font-semibold text-foreground text-center mb-4">{title}</h3>
      <div className="grid grid-cols-4 gap-2 text-center">
        <div className="bg-card rounded-lg p-3 shadow-sm">
          <div className="text-2xl md:text-3xl font-bold text-primary">{timeLeft.days}</div>
          <div className="text-xs text-muted-foreground">يوم</div>
        </div>
        <div className="bg-card rounded-lg p-3 shadow-sm">
          <div className="text-2xl md:text-3xl font-bold text-primary">{timeLeft.hours}</div>
          <div className="text-xs text-muted-foreground">ساعة</div>
        </div>
        <div className="bg-card rounded-lg p-3 shadow-sm">
          <div className="text-2xl md:text-3xl font-bold text-primary">{timeLeft.minutes}</div>
          <div className="text-xs text-muted-foreground">دقيقة</div>
        </div>
        <div className="bg-card rounded-lg p-3 shadow-sm">
          <div className="text-2xl md:text-3xl font-bold text-primary animate-pulse">{timeLeft.seconds}</div>
          <div className="text-xs text-muted-foreground">ثانية</div>
        </div>
      </div>
    </div>
  );
}
