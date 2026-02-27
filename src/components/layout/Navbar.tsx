"use client";

import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Home",                href: "/" },
  { label: "Projects & Services", href: "/projects-services" },
  { label: "About",               href: "/about" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navBg    = scrolled
    ? "bg-gold-50/95 backdrop-blur-md shadow-[0_2px_30px_rgba(201,168,76,0.12)]"
    : isHome
    ? "bg-transparent"
    : "bg-gold-950/90 backdrop-blur-md";

  const logoGold  = isHome && !scrolled ? "text-gold-300"                    : "text-gold-400";
  const logoSub   = isHome && !scrolled ? "text-white/40"                    : "text-gold-600";
  const linkBase  = isHome && !scrolled ? "text-white/80 hover:text-gold-300": "text-gold-950 hover:text-gold-500";
  const iconColor = isHome && !scrolled ? "text-gold-300"                    : "text-gold-400";

  return (
    <nav className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6", navBg)}>
      <div className="max-w-6xl mx-auto flex items-center justify-between h-20">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/Logo.jpeg"
            alt="Blessing Farm and Resort Logo"
            width={48}
            height={48}
            className="rounded-full object-cover border border-gold-400/30"
          />
          <div className="flex flex-col leading-none">
            <span className={cn("font-playfair text-xl transition-colors duration-300", logoGold)}>
              Blessing Farm
            </span>
            <span className={cn("font-montserrat text-[10px] tracking-[4px] uppercase transition-colors duration-300", logoSub)}>
              &amp; Resort
            </span>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map(({ label, href }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  "font-montserrat text-[11px] tracking-[2px] uppercase relative pb-1 transition-colors duration-300",
                  "after:absolute after:bottom-0 after:left-0 after:h-px after:bg-gold-400 after:transition-all after:duration-300",
                  active
                    ? "after:w-full text-gold-400"
                    : cn("after:w-0 hover:after:w-full", linkBase),
                )}
              >
                {label}
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <Link
          href="/about"
          className="hidden md:inline-flex items-center px-6 py-2.5 text-[10px] font-montserrat font-semibold tracking-widest uppercase bg-gradient-to-r from-gold-700 via-gold-400 to-gold-300 text-gold-950 transition-all duration-300 hover:brightness-110 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(201,168,76,0.4)]"
        >
          Contact Us
        </Link>

        {/* Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={cn("md:hidden transition-colors", iconColor)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-gold-950 border-t border-gold-400/10">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMobileOpen(false)}
              className={cn(
                "block px-6 py-4 font-montserrat text-[11px] tracking-widest uppercase border-b border-gold-400/10 transition-colors",
                pathname === href ? "text-gold-400" : "text-white/60 hover:text-gold-400",
              )}
            >
              {label}
            </Link>
          ))}
          <div className="px-6 py-4">
            <Link
              href="/about"
              onClick={() => setMobileOpen(false)}
              className="block text-center py-3 bg-gradient-to-r from-gold-700 via-gold-400 to-gold-300 text-gold-950 font-montserrat font-semibold text-[10px] tracking-widest uppercase"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}