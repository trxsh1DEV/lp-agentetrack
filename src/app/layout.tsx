import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script"; // Importação necessária para scripts no Next.js
import "./globals.css";
import Navbar from "@/components/navbar";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";

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
        {/* Google Tag Manager - HEAD */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-53QPWRBG');
          `}
        </Script>

        {/* Google Analytics - GTag */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-16871047013"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16871047013');
          `}
        </Script>
      </head>
      <body className={`${poppins.style} antialiased bg-slate-900`}>
        {/* Google Tag Manager - NOSCRIPT (no <body>) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-53QPWRBG"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <main>
          <Toaster />
          {/* <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          > */}
          <Navbar />

          {children}
          {/* </ThemeProvider> */}
        </main>
      </body>
    </html>
  );
}
