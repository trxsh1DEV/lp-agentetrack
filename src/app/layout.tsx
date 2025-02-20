/* eslint-disable @next/next/next-script-for-ga */
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
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-16871047013"
        ></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16871047013');
          `}
        </script>
      </head>
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
