"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface PageLoaderProps {
  duration?: number;
}

export function PageLoader({ duration = 2400 }: PageLoaderProps) {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), duration - 600);
    const hideTimer = setTimeout(() => setVisible(false), duration);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, [duration]);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gold-950"
      style={{
        transition: "opacity 0.6s ease",
        opacity: fadeOut ? 0 : 1,
        pointerEvents: fadeOut ? "none" : "all",
      }}
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gold-400/[0.06] blur-3xl pointer-events-none" />

      {/* Spinner ring container */}
      <div className="relative flex items-center justify-center" style={{ width: 250, height: 250 }}>

        {/* Conic gradient spinning ring */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: "conic-gradient(from 0deg, transparent 0%, #C9A84C 25%, #E8C96A 50%, #C9A84C 75%, transparent 100%)",
            animation: "bfSpinConic 2s linear infinite",
            padding: "2.5px",
            borderRadius: "50%",
          }}
        >
          <div className="w-full h-full rounded-full bg-[#1A1200]" />
        </div>

        {/* Reverse dashed ring */}
        <div
          className="absolute rounded-full border-2 border-dashed border-gold-400/25"
          style={{
            width: 152,
            height: 152,
            animation: "bfSpinReverse 4s linear infinite",
          }}
        />

        {/* Static subtle ring */}
        <div
          className="absolute rounded-full border border-gold-400/15"
          style={{ width: 132, height: 132 }}
        />

        {/* Logo */}
        <div
          className="relative z-10 rounded-full overflow-hidden"
          style={{
            width: 150,
            height: 150,
            animation: "bfLogoPulse 2.5s ease-in-out infinite",
          }}
        >
          <Image
            src="/Logo.jpeg"
            alt="Blessing Farm & Resort"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Text below spinner */}
      <div
        className="mt-8 text-center"
        style={{ animation: "bfFadeUp 0.8s ease both 0.4s" }}
      >
        <p
          className="font-playfair text-2xl"
          style={{
            background: "linear-gradient(90deg, #8B6914, #C9A84C, #E8C96A, #C9A84C, #8B6914)",
            backgroundSize: "200% auto",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            animation: "bfShimmer 2s linear infinite",
          }}
        >
          Blessing Farm &amp; Resort
        </p>
        <p className="font-cormorant italic text-gold-400/60 text-base mt-1 tracking-wide">
          श्रेष्ठ संस्कारो का पावन आंगन
        </p>

        {/* Bouncing dots */}
        <div className="flex items-center justify-center gap-1.5 mt-5">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-gold-400"
              style={{
                animation: "bfDot 1.2s ease-in-out infinite",
                animationDelay: `${i * 0.15}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* All keyframes scoped here */}
      <style>{`
        @keyframes bfSpinConic {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes bfSpinReverse {
          from { transform: rotate(360deg); }
          to   { transform: rotate(0deg); }
        }
        @keyframes bfLogoPulse {
          0%, 100% { transform: scale(1);    box-shadow: 0 0 0   0  rgba(201,168,76,0.25); }
          50%       { transform: scale(1.04); box-shadow: 0 0 24px 6px rgba(201,168,76,0.15); }
        }
        @keyframes bfShimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes bfDot {
          0%, 80%, 100% { transform: scale(0.6); opacity: 0.35; }
          40%            { transform: scale(1.3); opacity: 1; }
        }
        @keyframes bfFadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}