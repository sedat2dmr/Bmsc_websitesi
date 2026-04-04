import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "BMSC Global | Otomotiv Sektörü İş Geliştirme Danışmanlığı",
    template: "%s | BMSC Global",
  },
  description:
    "BMSC Global, Türk otomotiv tedarikçilerini İngiltere ve Avrupa pazarlarına bağlayan uzman iş geliştirme danışmanlık firmasıdır. Tedarikçi geliştirme, pazar erişimi, kalite yönetimi ve ihracat stratejisi.",
  keywords: [
    "otomotiv danışmanlığı",
    "tedarikçi geliştirme",
    "ihracat danışmanlığı",
    "IATF 16949",
    "UK otomotiv pazarı",
    "Türk otomotiv tedarikçileri",
    "OEM danışmanlık",
  ],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: "BMSC Global",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
