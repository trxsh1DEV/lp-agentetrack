"use client";
import Script from "next/script";

export function ConversionTracking() {
  return (
    <Script id="conversion-tracking" strategy="afterInteractive">
      {`
        gtag('event', 'conversion', {
          'send_to': 'AW-16871047013/fPfWCJnD7KAaEOX-3uw-',
          'value': 1.0,
          'currency': 'BRL'
        });
      `}
    </Script>
  );
}
