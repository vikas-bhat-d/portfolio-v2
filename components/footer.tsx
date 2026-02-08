"use client";
import { useEffect, useState } from "react";
import { AiOutlineEye } from "react-icons/ai";

const Footer = () => {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const fetchCount = async () => {
      try {
        const res = await fetch("/api/visits", { cache: "no-store" });
        const data = await res.json();
        console.log(data)
        setCount(data.count);
      } catch (err) {
        console.error("Failed to fetch visit count");
      }
    };

    fetchCount();
  }, []);

  return (
    <footer className="mt-24 py-6 flex items-center justify-center text-secondary text-sm">
      
      <div className="flex items-center gap-2 opacity-80">
        <AiOutlineEye className="text-primary text-base" />
        <span>
          {count !== null ? count.toLocaleString() : "--"} visits | Made with ❤️: VBD
        </span>
      </div>
    </footer>
  );
};

export default Footer;
