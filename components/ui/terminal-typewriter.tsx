"use client";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type TerminalTypewriterProps = {
  lines: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDelay?: number;
};

type Phase = "typing" | "pausing" | "deleting";

export function TerminalTypewriter({
  lines,
  className,
  typingSpeed = 40,
  deletingSpeed = 25,
  pauseDelay = 800,
}: TerminalTypewriterProps) {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<Phase>("typing");

  useEffect(() => {
    const currentLine = lines[lineIndex];
    let timeout: NodeJS.Timeout;

    if (phase === "typing") {
      if (charIndex < currentLine.length) {
        timeout = setTimeout(() => {
          setText((prev) => prev + currentLine[charIndex]);
          setCharIndex((i) => i + 1);
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => {
          setPhase("deleting");
        }, pauseDelay);
      }
    }

    if (phase === "deleting") {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setText((prev) => prev.slice(0, -1));
          setCharIndex((i) => i - 1);
        }, deletingSpeed);
      } else {
        setPhase("typing");
        setLineIndex((i) => (i + 1) % lines.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [
    charIndex,
    lineIndex,
    phase,
    lines,
    typingSpeed,
    deletingSpeed,
    pauseDelay,
  ]);

  return (
    <div
      className={cn(
        "font-jetbrains-mono whitespace-pre text-sm leading-relaxed",
        className
      )}
    >
      <span>{text}</span>
      <span className="animate-blink">_</span>
    </div>
  );
}
