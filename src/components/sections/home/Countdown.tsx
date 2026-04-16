"use client";

import { useState, useEffect } from "react";
import { useDict } from "@/i18n/DictContext";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownProps {
  compact?: boolean;
}

function getTimeLeft(target: Date): TimeLeft {
  const now = new Date().getTime();
  const diff = target.getTime() - now;

  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function Countdown({ compact = false }: CountdownProps) {
  const { dict } = useDict();
  const targetDate = new Date(
    process.env.NEXT_PUBLIC_LISTING_DATE || "2027-12-31T00:00:00+09:00"
  );

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [mounted, setMounted] = useState(false);

  const labels = [dict.countdown.days, dict.countdown.hours, dict.countdown.minutes, dict.countdown.seconds];

  useEffect(() => {
    setMounted(true);
    setTimeLeft(getTimeLeft(targetDate));
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate));
    }, 1000);
    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!mounted) {
    return (
      <div className="text-center">
        <p className="text-gray-400 text-xs tracking-[0.2em] uppercase mb-3">
          {dict.countdown.label}
        </p>
        <div className="flex justify-center items-center gap-2 sm:gap-3">
          {labels.map((label) => (
            <div key={label} className="flex items-center gap-2 sm:gap-3">
              <div
                className={`${
                  compact ? "px-3 py-2" : "px-4 py-3 sm:px-6 sm:py-4"
                } rounded-lg bg-[rgba(76,175,125,0.08)] border border-[rgba(76,175,125,0.3)]`}
              >
                <div
                  className={`text-gray-900 font-bold ${
                    compact ? "text-lg" : "text-2xl sm:text-3xl"
                  }`}
                >
                  --
                </div>
                <div className="text-gray-400 text-[10px] uppercase tracking-wider mt-1">
                  {label}
                </div>
              </div>
              {label !== dict.countdown.seconds && (
                <span className="text-primary-green text-xl font-bold">:</span>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }

  const units = [
    { label: labels[0], value: timeLeft.days },
    { label: labels[1], value: timeLeft.hours },
    { label: labels[2], value: timeLeft.minutes },
    { label: labels[3], value: timeLeft.seconds },
  ];

  return (
    <div className="text-center">
      <p className="text-gray-400 text-xs tracking-[0.2em] uppercase mb-3">
        {dict.countdown.label}
      </p>
      <div className="flex justify-center items-center gap-2 sm:gap-3">
        {units.map(({ label, value }, i) => (
          <div key={label} className="flex items-center gap-2 sm:gap-3">
            <div
              className={`${
                compact ? "px-3 py-2" : "px-4 py-3 sm:px-6 sm:py-4"
              } rounded-lg bg-[rgba(76,175,125,0.08)] border border-[rgba(76,175,125,0.3)]`}
            >
              <div
                className={`text-gray-900 font-bold ${
                  compact ? "text-lg" : "text-2xl sm:text-3xl"
                }`}
              >
                {String(value).padStart(2, "0")}
              </div>
              <div className="text-gray-400 text-[10px] uppercase tracking-wider mt-1">
                {label}
              </div>
            </div>
            {i < units.length - 1 && (
              <span className="text-primary-green text-xl font-bold">:</span>
            )}
          </div>
        ))}
      </div>
      <p className="text-gray-400 text-xs mt-3">{dict.countdown.expected}</p>
    </div>
  );
}
