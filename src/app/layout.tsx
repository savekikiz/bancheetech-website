import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MessengerButton from "@/components/MessengerButton";

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
    default: "BancheeTech - Transform ระบบบัญชีด้วย AI",
    template: "%s | BancheeTech",
  },
  description:
    "BancheeTech ให้บริการวางและ Transform ระบบบัญชีให้ทันสมัยด้วย AI เพื่อประสิทธิภาพสูงสุด สำหรับผู้ประกอบการและสำนักงานบัญชี",
  keywords: [
    "ระบบบัญชี",
    "AI",
    "Accounting",
    "Digital Transformation",
    "สำนักงานบัญชี",
    "BancheeTech",
  ],
  openGraph: {
    type: "website",
    locale: "th_TH",
    siteName: "BancheeTech",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="th"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <MessengerButton />
      </body>
    </html>
  );
}
