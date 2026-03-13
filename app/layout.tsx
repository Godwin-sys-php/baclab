import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "BacLab — Cours particuliers pour le Bac",
    template: "%s | BacLab",
  },
  description:
    "Des cours particuliers par des alumni d'excellence, en petits groupes de 5, avec un suivi quotidien. Prépare ton baccalauréat avec BacLab.",
  openGraph: {
    title: "BacLab — Cours particuliers pour le Bac",
    description:
      "Des cours particuliers par des alumni d'excellence, en petits groupes de 5, avec un suivi quotidien.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${playfair.variable} ${dmSans.variable} antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
