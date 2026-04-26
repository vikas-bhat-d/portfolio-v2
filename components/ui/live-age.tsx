"use client";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { animate, motion, useMotionValue, useTransform } from "motion/react";

// Height of each row in the digit drum
const ROW_H = 1.2; // em
// Number of times we repeat 0-9 in the column before needing a reset
const NUM_COLS = 3;

function DigitSlot({ char }: { char: string }) {
  const isDigit = /\d/.test(char);

  // Which column repetition we're currently in (0, 1, or 2)
  const colRef = useRef(0);
  const prevDigitRef = useRef(isDigit ? parseInt(char) : 0);

  // Numeric row index into the 30-item column — this value only ever increases,
  // so Framer Motion always animates forward (downward) and never reverses.
  const rowIndex = useMotionValue(isDigit ? parseInt(char) : 0);
  // Convert the numeric index to a CSS em string on every frame
  const y = useTransform(rowIndex, (i) => `${-i * ROW_H}em`);

  useEffect(() => {
    if (!isDigit) return;
    const prev = prevDigitRef.current;
    const next = parseInt(char);
    if (prev === next) return;
    prevDigitRef.current = next;

    // next < prev means this digit wrapped from 9 → 0 (or similar)
    const isWrap = next < prev;

    if (isWrap) {
      // Advance to the next column so we keep scrolling downward
      const nextCol = colRef.current + 1;
      const targetIndex = nextCol * 10 + next;

      animate(rowIndex, targetIndex, {
        duration: 0.45,
        ease: [0.42, 0, 0.58, 1],
        onComplete: () => {
          if (nextCol >= NUM_COLS - 1) {
            // We've used all columns — silently snap back to column 0.
            // Both column 2 and column 0 show the same digit so this is invisible.
            colRef.current = 0;
            rowIndex.set(next);
          } else {
            colRef.current = nextCol;
          }
        },
      });
    } else {
      // Normal forward increment within the current column
      animate(rowIndex, colRef.current * 10 + next, {
        duration: 0.45,
        ease: [0.42, 0, 0.58, 1],
      });
    }
  }, [char, isDigit, rowIndex]);

  if (!isDigit) {
    return (
      <span
        className="inline-block font-mono tabular-nums"
        style={{ lineHeight: `${ROW_H}em` }}
      >
        {char}
      </span>
    );
  }

  return (
    <span
      className="inline-block overflow-hidden align-middle"
      style={{ height: `${ROW_H}em` }}
    >
      <motion.span
        className="flex flex-col select-none pointer-events-none"
        style={{ y }}
      >
        {Array.from({ length: 10 * NUM_COLS }, (_, i) => (
          <span
            key={i}
            className="block text-center font-mono tabular-nums"
            style={{ height: `${ROW_H}em`, lineHeight: `${ROW_H}em` }}
          >
            {i % 10}
          </span>
        ))}
      </motion.span>
    </span>
  );
}

type LiveAgeProps = {
  birthDate: string;
  // 7 decimal places: slowest-changing digit flips every ~3.15s,
  // well above the 0.45s animation — so no animation ever gets interrupted.
  precision?: number;
  className?: string;
};

export function LiveAge({
  birthDate,
  precision = 7,
  className,
}: LiveAgeProps) {
  const birthTime = new Date(birthDate).getTime();
  const [ageStr, setAgeStr] = useState("");

  useEffect(() => {
    const MS_PER_YEAR = 1000 * 60 * 60 * 24 * 365.2425;

    const updateAge = () => {
      const age = (Date.now() - birthTime) / MS_PER_YEAR;
      setAgeStr(age.toFixed(precision));
    };

    updateAge();
    const interval = setInterval(updateAge, 100);
    return () => clearInterval(interval);
  }, [birthTime, precision]);

  return (
    <span className={cn("inline-flex items-center font-mono tabular-nums", className)}>
      {ageStr.split("").map((char, i) => (
        <DigitSlot key={i} char={char} />
      ))}
    </span>
  );
}