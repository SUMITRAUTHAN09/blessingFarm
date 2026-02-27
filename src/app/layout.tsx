import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { PageLoader } from "@/components/ui/PageLoader";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Blessing Farm & Resort | श्रेष्ठ संस्कारो का पावन आंगन",
  description:
    "Blessing Farm & Resort — Premier wedding venue and event space in Sitamarhi, Bihar. Weddings, parties, corporate events with full catering, decoration, AC hall and parking.",
    icons: {
    icon: "/Logo.jpeg",        
    shortcut: "/Logo.jpeg",    
    apple: "/Logo.jpeg",        
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <PageLoader duration={3000}/>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
