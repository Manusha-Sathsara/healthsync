import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HealthSync - AI-Powered Healthcare Platform",
  description:
    "Transform healthcare with AI-powered patient monitoring, predictive analytics, and personalized care coordination.",
  keywords:
    "healthcare, AI, patient monitoring, telemedicine, health analytics",
  openGraph: {
    title: "HealthSync - AI-Powered Healthcare Platform",
    description:
      "Transform healthcare with AI-powered patient monitoring, predictive analytics, and personalized care coordination.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gradient-to-br from-background to-muted`}
      >
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
