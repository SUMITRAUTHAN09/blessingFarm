import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { PageLoader } from "@/components/ui/PageLoader";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Blessing Farm & Resort | श्रेष्ठ संस्कारो का पावन आंगन",
 
  description:
    "Blessing Farm & Resort is the best wedding farm and marriage garden in Sitamarhi, Bihar. Luxury outdoor wedding venue with AC hall, catering, decoration, parking and full event management services.",
  keywords: [
    "Best wedding farm in Sitamarhi",
    "Wedding venue in Sitamarhi Bihar",
    "Marriage garden in Sitamarhi",
    "Wedding resort in Bihar",
    "Wedding farm in Bihar",
    "Farmhouse for wedding in Sitamarhi",
    "Outdoor wedding venue in Bihar",
    "Event venue in Sitamarhi",
    "Blessing farm",
  ],
  authors: [{ name: "Blessing Farm & Resort" }],
  creator: "Blessing Farm & Resort",
  publisher: "Blessing Farm & Resort",
  metadataBase: new URL("https://blessingfarms.in"),
  openGraph: {
    title: "Best Wedding Venue in Sitamarhi | Blessing Farm & Resort",
    description:
      "Luxury wedding farm and marriage garden in Sitamarhi, Bihar with full decoration, catering and AC hall facilities.",
    url: "https://blessingfarms.in",
    siteName: "Blessing Farm & Resort",
    images: [
      {
        url: "/Logo.jpeg",
        width: 800,
        height: 600,
        alt: "Blessing Farm & Resort Sitamarhi Bihar",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
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
