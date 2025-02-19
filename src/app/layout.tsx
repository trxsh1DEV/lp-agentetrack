import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { Toaster } from "@/components/ui/toaster";
import { GoogleTagManager } from "@next/third-parties/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Agente Track",
  description: "Gerencie todos seus ativos de TI com Agente Track",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <GoogleTagManager gtmId="GTM-53QPWRBG" />
      <body className={`${poppins.style} antialiased bg-slate-900`}>
        <main>
          <Toaster />
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
