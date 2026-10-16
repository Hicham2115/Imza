import type { Metadata } from "next";
import { Allura, Bodoni_Moda, DM_Sans } from "next/font/google";
import LenisProvider from "@/components/lenis-provider";
import "./globals.css";

const displayFont = Bodoni_Moda({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const bodyFont = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const scriptFont = Allura({
  variable: "--font-script",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "IMZA — Le tailleur signature",
  description:
    "Découvrez le tailleur signature IMZA : confectionné avec soin au Maroc, décliné en six couleurs.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${displayFont.variable} ${bodyFont.variable} ${scriptFont.variable}`}
    >
      <body>
        <LenisProvider />
        {children}
      </body>
    </html>
  );
}
