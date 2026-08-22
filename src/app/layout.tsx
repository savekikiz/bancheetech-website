import type { Metadata } from "next";
import { Anuphan, IBM_Plex_Sans_Thai } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Display — geometric, ทันสมัย, รองรับไทยเต็มรูปแบบ
const anuphan = Anuphan({
  variable: "--font-anuphan",
  subsets: ["thai", "latin"],
  weight: ["300", "400", "600", "700"],
  display: "swap",
});

// Body — อ่านง่ายที่ 16-18px
const plexThai = IBM_Plex_Sans_Thai({
  variable: "--font-plex-thai",
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
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
      className={`${anuphan.variable} ${plexThai.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
