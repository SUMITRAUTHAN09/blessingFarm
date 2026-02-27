import { GoldDivider } from "@/components/ui/GoldDivider";
import { RESORT } from "@/lib/constants";
import { Clock, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gold-950 to-[#0D0900]">
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <Link href="/" className="flex items-center gap-3 align-center">
            <Image
              src="/Logo.jpeg"
              alt="Blessing Farm and Resort Logo"
              width={48}
              height={48}
              className="rounded-full object-cover border border-gold-400/30 mb-5"
            />
            <div className="flex flex-col leading-none">
              <p className="font-playfair text-2xl text-gold-400 mb-1">
                Blessing Farm
              </p>
              <p className="font-montserrat text-[10px] tracking-[4px] uppercase text-gold-600 mb-4">
                &amp; Resort
              </p>
            </div>
          </Link>
          <GoldDivider className="w-12 mb-4" />
          <p className="font-cormorant text-lg italic text-white/50 leading-relaxed">
            "{RESORT.tagline}"
          </p>
          <p className="font-montserrat text-[11px] text-white/25 mt-1">
            {RESORT.taglineEn}
          </p>
        </div>

        {/* Links */}
        <div>
          <p className="font-montserrat text-[10px] tracking-[3px] uppercase text-gold-400 mb-5">
            Quick Links
          </p>
          <div className="space-y-3">
            {[
              { label: "Home", href: "/" },
              { label: "Projects & Services", href: "/projects-services" },
              { label: "About Us", href: "/about" },
            ].map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="block font-montserrat text-[12px] text-white/50 hover:text-gold-400 transition-colors tracking-wide"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <p className="font-montserrat text-[10px] tracking-[3px] uppercase text-gold-400 mb-5">
            Contact
          </p>
          <div className="space-y-4">
            <div className="flex gap-3">
              <Phone size={14} className="text-gold-400 mt-0.5 flex-shrink-0" />
              <div>
                <a
                  href={`tel:${RESORT.phone1Raw}`}
                  className="block font-montserrat text-[12px] text-white/70 hover:text-gold-400 transition-colors"
                >
                  {RESORT.phone1}
                </a>
                <a
                  href={`tel:${RESORT.phone2Raw}`}
                  className="block font-montserrat text-[12px] text-white/70 hover:text-gold-400 transition-colors"
                >
                  {RESORT.phone2}
                </a>
              </div>
            </div>
            <div className="flex gap-3">
              <MapPin
                size={14}
                className="text-gold-400 mt-0.5 flex-shrink-0"
              />
              <p className="font-montserrat text-[12px] text-white/50 leading-relaxed">
                {RESORT.address}
              </p>
            </div>
            <div className="flex gap-3">
              <Clock size={14} className="text-gold-400 mt-0.5 flex-shrink-0" />
              <p className="font-montserrat text-[12px] text-white/50">
                Open 7 Days · By Appointment
              </p>
            </div>
          </div>
        </div>
      </div>

      <GoldDivider />
      <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="font-montserrat text-[11px] text-white/25 tracking-wide">
          © {new Date().getFullYear()} Blessing Farm &amp; Resort · All Rights
          Reserved
        </p>
        <p className="font-montserrat text-[11px] text-white/25">
          Sonbarsa Road, Sitamarhi, Bihar
        </p>
      </div>
    </footer>
  );
}
