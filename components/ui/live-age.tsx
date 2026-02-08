"use client";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

type LiveAgeProps = {
  birthDate: string; // ISO format: "2003-08-14T00:00:00"
  precision?: number; // decimal places
  className?:string
};

export function LiveAge({
  birthDate,
  precision = 11,
  className
}: LiveAgeProps) {
  const birthTime = new Date(birthDate).getTime();
  const [age, setAge] = useState(0);

  useEffect(() => {
    const MS_PER_YEAR = 1000 * 60 * 60 * 24 * 365.2425;

    const updateAge = () => {
      const now = Date.now();
      setAge((now - birthTime) / MS_PER_YEAR);
    };

    updateAge();
    const interval = setInterval(updateAge, 50);
    return () => clearInterval(interval);
  }, [birthTime]);

  return (
    <span className= { cn("tabular-nums font-mono",className) } >
      {age.toFixed(precision)}
    </span>
  );
}