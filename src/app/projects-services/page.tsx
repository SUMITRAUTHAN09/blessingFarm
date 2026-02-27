"use client";

import { useState } from "react";
import Link from "next/link";
import { SERVICES, VENUE_STATS, PROCESS_STEPS } from "@/lib/constants";
import { ServiceCard }   from "@/components/ui/ServiceCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PageHero }      from "@/components/ui/PageHero";
import { GoldDivider }   from "@/components/ui/GoldDivider";
import { CtaBanner }     from "@/components/sections/CtaBanner";
import { cn } from "@/lib/utils";

type Tab = "All" | "Weddings" | "Events" | "Facilities";
const TABS: Tab[] = ["All", "Weddings", "Events", "Facilities"];

export default function ProjectsServicesPage() {
  const [activeTab, setActiveTab] = useState<Tab>("All");

  const filtered =
    activeTab === "All" ? SERVICES : SERVICES.filter((s) => s.category === activeTab);

  return (
    <>
      <PageHero
        label="Our Offerings"
        title={<>Projects &amp; <span className="shimmer-text">Services</span></>}
        subtitle="Every event deserves to be extraordinary. Explore our full suite of premium services."
      />

      {/* Tab bar */}
      <div className="sticky top-20 z-40 bg-gold-50/95 backdrop-blur-sm border-b border-gold-400/20 px-6">
        <div className="max-w-6xl mx-auto flex overflow-x-auto">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "flex-shrink-0 px-7 py-5 font-montserrat text-[11px] font-semibold tracking-widest uppercase transition-all duration-300 border-b-2",
                activeTab === tab
                  ? "border-gold-400 text-gold-400"
                  : "border-transparent text-gold-700 hover:text-gold-500",
              )}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Services grid */}
      <section className="dot-pattern py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((s) => (
            <ServiceCard key={s.title} icon={s.icon} title={s.title} desc={s.desc} features={s.features} highlight={s.highlight} />
          ))}
        </div>
      </section>

      {/* Grand Hall feature */}
      <section className="py-20 px-6 bg-gold-100">
        <div className="max-w-6xl mx-auto">
          <div className="relative bg-gradient-to-br from-gold-950 to-gold-900 p-14 overflow-hidden">
            <div className="absolute top-0 right-0 w-72 h-72 bg-gold-400/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute inset-6 border border-gold-400/10 pointer-events-none" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center relative z-10">
              <div>
                <p className="font-cormorant text-gold-400 text-lg italic mb-3">Featured Venue</p>
                <h2 className="font-playfair text-4xl md:text-5xl text-white leading-tight mb-5">
                  The Grand <span className="shimmer-text">Wedding Hall</span>
                </h2>
                <p className="font-montserrat text-sm text-white/60 leading-loose mb-8">
                  Our crown jewel — a majestic air-conditioned hall designed to host grand Indian weddings
                  with all the pomp, grandeur, and emotional depth that these ceremonies deserve.
                  Accommodating 500+ guests with unparalleled style.
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center px-8 py-3.5 text-[11px] font-montserrat font-semibold tracking-widest uppercase bg-gradient-to-r from-gold-700 via-gold-400 to-gold-300 text-gold-950 transition-all duration-300 hover:brightness-110 hover:-translate-y-0.5"
                >
                  Book This Venue
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-5">
                {VENUE_STATS.map(({ num, label }) => (
                  <div key={label} className="bg-gold-400/[0.08] border border-gold-400/20 p-6 text-center">
                    <p className="shimmer-text font-playfair text-3xl font-bold mb-2">{num}</p>
                    <p className="font-montserrat text-[9px] tracking-[2px] uppercase text-white/40">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking process */}
      <section className="py-24 px-6 bg-gold-50">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            label="How It Works"
            title={<>Simple <span className="text-gold-400">Booking</span> Process</>}
            className="mb-16"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {PROCESS_STEPS.map(({ step, title, desc }) => (
              <div key={step} className="text-center">
                <p className="font-cormorant text-6xl text-gold-400/20 font-bold leading-none mb-3">{step}</p>
                <h3 className="font-playfair text-lg text-gold-950 mb-3">{title}</h3>
                <GoldDivider className="w-8 mx-auto mb-3" />
                <p className="font-montserrat text-[12px] text-gold-700 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
