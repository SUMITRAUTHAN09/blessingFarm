"use client";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

export interface SliderImage {
  readonly src: string;
  readonly alt: string;
  readonly caption?: string;
  readonly tag?: string;
}

interface ImageSliderProps {
  images: readonly SliderImage[];
  title?: string;
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

export function ImageSlider({
  images,
  title,
  autoPlay = true,
  autoPlayInterval = 3500,
}: ImageSliderProps) {
  const [current, setCurrent]           = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIdx, setLightboxIdx]   = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const total   = images.length;

  /* ── navigation ── */
  const goTo = useCallback((idx: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent(((idx % total) + total) % total);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning, total]);

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  /* ── autoplay ── */
  const resetAuto = useCallback(() => {
    if (autoRef.current) clearInterval(autoRef.current);
    if (autoPlay) autoRef.current = setInterval(() => {
      setCurrent(c => (c + 1) % total);
    }, autoPlayInterval);
  }, [autoPlay, autoPlayInterval, total]);

  useEffect(() => {
    resetAuto();
    return () => { if (autoRef.current) clearInterval(autoRef.current); };
  }, [resetAuto]);

  /* ── keyboard ── */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (lightboxOpen) {
        if (e.key === "ArrowRight") setLightboxIdx(i => (i + 1) % total);
        if (e.key === "ArrowLeft")  setLightboxIdx(i => (i - 1 + total) % total);
        if (e.key === "Escape")     setLightboxOpen(false);
      } else {
        if (e.key === "ArrowRight") { next(); resetAuto(); }
        if (e.key === "ArrowLeft")  { prev(); resetAuto(); }
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxOpen, total, next, prev, resetAuto]);

  /* ── lock scroll when lightbox open ── */
  useEffect(() => {
    document.body.style.overflow = lightboxOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightboxOpen]);

  /* ── touch swipe ── */
  const touchStartX = useRef<number | null>(null);
  const onTouchStart = (x: number) => { touchStartX.current = x; };
  const onTouchEnd   = (x: number) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - x;
    if (Math.abs(diff) > 40) { diff > 0 ? next() : prev(); resetAuto(); }
    touchStartX.current = null;
  };

  /* ── compute relative offset: -2 -1 0 1 2 ── */
  const getOffset = (idx: number) => {
    let off = idx - current;
    if (off >  total / 2) off -= total;
    if (off < -total / 2) off += total;
    return off;
  };

  /* ── card visual style based on offset ── */
  const getCardStyle = (off: number): React.CSSProperties => {
    const abs = Math.abs(off);

    // Hide cards beyond ±2
    if (abs > 2) return { opacity: 0, pointerEvents: "none", visibility: "hidden" };

    // Positional values
    const configs = {
      0:  { x: "0%",      scale: 1,     opacity: 1,    z: 50,  blur: 0   },
      1:  { x: "105%",    scale: 0.82,  opacity: 0.75, z: 30,  blur: 0   },
      "-1":{ x: "-105%",  scale: 0.82,  opacity: 0.75, z: 30,  blur: 0   },
      2:  { x: "195%",    scale: 0.62,  opacity: 0.4,  z: 10,  blur: 1.5 },
      "-2":{ x: "-195%",  scale: 0.62,  opacity: 0.4,  z: 10,  blur: 1.5 },
    } as Record<string, { x: string; scale: number; opacity: number; z: number; blur: number }>;

    const key = String(off);
    const cfg = configs[key] ?? configs["0"];

    return {
      transform:  `translateX(${cfg.x}) scale(${cfg.scale})`,
      opacity:    cfg.opacity,
      zIndex:     cfg.z,
      filter:     cfg.blur ? `blur(${cfg.blur}px)` : "none",
      transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
      pointerEvents: abs === 0 || abs === 1 ? "auto" : "none",
    };
  };

  return (
    <section
      className="py-24 px-6 bg-gradient-to-b from-gold-950 to-gold-900 overflow-hidden"
      onTouchStart={(e) => onTouchStart(e.touches[0].clientX)}
      onTouchEnd={(e)   => onTouchEnd(e.changedTouches[0].clientX)}
    >
      {/* ── Header ── */}
      {title && (
        <div className="text-center mb-14">
          <p className="font-montserrat text-[10px] font-semibold tracking-[4px] uppercase text-gold-400 mb-3">
            Gallery
          </p>
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-14 bg-gradient-to-r from-transparent to-gold-400" />
            <span className="text-gold-400 text-base">✦</span>
            <div className="h-px w-14 bg-gradient-to-l from-transparent to-gold-400" />
          </div>
          <h2 className="font-playfair text-4xl md:text-5xl text-white">{title}</h2>
        </div>
      )}

      {/* ── Carousel stage ── */}
      <div className="relative mx-auto" style={{ maxWidth: 900, height: 400 }}>

        {images.map((img, idx) => {
          const off      = getOffset(idx);
          const isCenter = off === 0;
          const abs      = Math.abs(off);
          if (abs > 2) return null;

          return (
            <div
              key={idx}
              className="absolute top-0"
              style={{
                left: "50%",
                width: 300,
                height: 380,
                marginLeft: -150,  // centre the card
                ...getCardStyle(off),
              }}
              onClick={() => {
                if (isCenter) {
                  setLightboxIdx(idx);
                  setLightboxOpen(true);
                } else {
                  goTo(idx);
                  resetAuto();
                }
              }}
            >
              <div
                className={cn(
                  "relative w-full h-full rounded-2xl overflow-hidden border",
                  "cursor-pointer transition-shadow duration-500",
                  isCenter
                    ? "border-gold-400/70 shadow-[0_0_50px_rgba(201,168,76,0.35),0_25px_50px_rgba(0,0,0,0.6)]"
                    : "border-gold-400/20 shadow-[0_8px_25px_rgba(0,0,0,0.5)]",
                )}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="300px"
                  draggable={false}
                  priority={isCenter}
                />

                {/* Dark overlay */}
                <div className={cn(
                  "absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent transition-opacity duration-500",
                  !isCenter && "bg-gold-950/30"
                )} />

                {/* Tag */}
                {img.tag && isCenter && (
                  <span className="absolute top-4 left-4 bg-gold-400 text-gold-950 font-montserrat font-bold text-[9px] tracking-widest uppercase px-3 py-1 rounded-full shadow-lg">
                    {img.tag}
                  </span>
                )}

                {/* Zoom hint — centre only */}
                {isCenter && (
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-gold-400 opacity-80">
                    <ZoomIn size={14} />
                  </div>
                )}

                {/* Caption — centre only */}
                {img.caption && isCenter && (
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="font-cormorant text-white text-lg italic leading-snug drop-shadow">
                      {img.caption}
                    </p>
                  </div>
                )}

                {/* Side card — click to centre hint */}
                {!isCenter && abs === 1 && (
                  <div className="absolute inset-0 flex items-center justify-center bg-transparent opacity-0 hover:opacity-100 hover:bg-gold-950/20 transition-all duration-200">
                    <span className="font-montserrat text-[9px] tracking-widest uppercase text-white/80 bg-black/40 px-3 py-1.5 rounded-full">
                      View
                    </span>
                  </div>
                )}
              </div>
            </div>
          );
        })}

        {/* ── Prev / Next arrows ── */}
        <button
          onClick={() => { prev(); resetAuto(); }}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full z-50 w-11 h-11 rounded-full bg-gold-950/90 border border-gold-400/40 backdrop-blur-sm flex items-center justify-center text-gold-400 hover:bg-gold-400 hover:text-gold-950 transition-all duration-200 hover:scale-110 shadow-lg ml-2"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={() => { next(); resetAuto(); }}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full z-50 w-11 h-11 rounded-full bg-gold-950/90 border border-gold-400/40 backdrop-blur-sm flex items-center justify-center text-gold-400 hover:bg-gold-400 hover:text-gold-950 transition-all duration-200 hover:scale-110 shadow-lg mr-2"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* ── Dot indicators ── */}
      <div className="flex items-center justify-center gap-2 mt-10">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => { goTo(idx); resetAuto(); }}
            className={cn(
              "rounded-full transition-all duration-300",
              idx === current
                ? "w-8 h-2 bg-gold-400"
                : "w-2 h-2 bg-gold-400/25 hover:bg-gold-400/60",
            )}
          />
        ))}
      </div>

      <p className="text-center font-montserrat text-[10px] tracking-[3px] uppercase text-gold-400/40 mt-3">
        {current + 1} / {total}
      </p>

      {/* ── shadcn Dialog Lightbox ── */}
      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent
          className="max-w-[95vw] w-full p-0 bg-black/97 border border-gold-400/25 rounded-2xl overflow-hidden gap-0"
          style={{ maxHeight: "95vh" }}
        >
          <DialogTitle className="sr-only">
            {images[lightboxIdx]?.alt}
          </DialogTitle>

          {/* Lightbox header */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-gold-400/10 flex-shrink-0">
            <p className="font-montserrat text-[10px] tracking-[3px] uppercase text-white/40">
              {lightboxIdx + 1} / {total}
            </p>
            {images[lightboxIdx]?.tag && (
              <span className="bg-gold-400 text-gold-950 font-montserrat font-bold text-[9px] tracking-widest uppercase px-3 py-1 rounded-full">
                {images[lightboxIdx].tag}
              </span>
            )}
            <button
              onClick={() => setLightboxOpen(false)}
              className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-gold-400 hover:text-gold-950 transition-all"
            >
              <X size={15} />
            </button>
          </div>

          {/* Main image */}
          <div className="relative flex-1" style={{ height: "65vh" }}>
            <button
              onClick={() => setLightboxIdx(i => (i - 1 + total) % total)}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-gold-400 hover:text-gold-950 transition-all"
            >
              <ChevronLeft size={22} />
            </button>

            <div className="relative w-full h-full">
              <Image
                src={images[lightboxIdx]?.src ?? ""}
                alt={images[lightboxIdx]?.alt ?? ""}
                fill
                className="object-contain"
                sizes="95vw"
                priority
              />
            </div>

            <button
              onClick={() => setLightboxIdx(i => (i + 1) % total)}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-gold-400 hover:text-gold-950 transition-all"
            >
              <ChevronRight size={22} />
            </button>
          </div>

          {/* Caption */}
          {images[lightboxIdx]?.caption && (
            <div className="px-6 py-3 border-t border-gold-400/10 bg-black/60 flex-shrink-0">
              <p className="font-cormorant text-white text-xl italic text-center">
                {images[lightboxIdx].caption}
              </p>
            </div>
          )}

          {/* Thumbnail strip */}
          <div className="flex items-center justify-center gap-2.5 px-5 py-3 overflow-x-auto border-t border-gold-400/10 flex-shrink-0">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setLightboxIdx(idx)}
                className={cn(
                  "relative flex-shrink-0 w-16 h-11 rounded-lg overflow-hidden border-2 transition-all duration-200",
                  idx === lightboxIdx
                    ? "border-gold-400 shadow-[0_0_12px_rgba(201,168,76,0.5)] scale-110"
                    : "border-white/15 opacity-45 hover:opacity-75 hover:border-gold-400/40",
                )}
              >
                <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="64px" />
              </button>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}