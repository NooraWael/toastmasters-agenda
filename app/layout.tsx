import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
import LanguageSelector from "@/components/LanguageSelector";
import { LanguageProvider } from "@/context/LanguageContext";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://toasmasters-agenda.nqasim.dev"),
  title: "Toastmasters Agenda Generator",
  description:
    "Generate polished Toastmasters meeting agendas in seconds. Built for clubs today, ready for multi-language and contextual agendas tomorrow.",
  keywords: [
    "Toastmasters",
    "agenda generator",
    "meeting agenda",
    "club agenda",
    "public speaking",
    "toastmasters tools",
  ],
  openGraph: {
    type: "website",
    url: "https://toasmasters-agenda.nqasim.dev",
    title: "Toastmasters Agenda Generator",
    siteName: "Toastmasters Agenda Generator",
    description:
      "Create professional Toastmasters meeting agendas quickly. Future-ready for multilingual and contextual agenda templates.",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Toastmasters Agenda Generator",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Toastmasters Agenda Generator",
    description:
      "Build clean, printable Toastmasters meeting agendas instantly. Designed for clubs, built to grow with new templates and languages.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "https://toasmasters-agenda.nqasim.dev",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <Analytics />
    <html lang="en">
      <body className={`${montserrat.className} ${montserrat.variable} font-montserrat antialiased`}>
        <LanguageProvider>
          <LanguageSelector />
          {children}
        </LanguageProvider>
      </body>
    </html>
    </>
  );
}
