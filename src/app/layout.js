import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ScrollTop from "./ScrollTop";
import Whatsapp from "./Whatsapp";
import CTA from "./CTA";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title:
    "Best Hair Transplant in Mumbai | Dr. Kunal Sayani – FUE & FUT Specialist",
  description:
    "Looking for the best hair transplant in Mumbai? Dr. Kunal Sayani offers advanced FUE & FUT techniques with natural, permanent results.",
  verification: {
    google: "TRM5uN2AbAEpuMZ-oECmvatuvFw9rdvoKtm-UK8NCsI",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* Google Ads Tag */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-16907003627"
          strategy="afterInteractive"
        />
        <Script id="google-ads-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16907003627');
          `}
        </Script>

        {/* Google Analytics Tag */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-D4QH25NNC5"
          strategy="afterInteractive"
        />
        <Script id="google-analytics-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-D4QH25NNC5');
          `}
        </Script>
      </head>
      <body className="bg-white text-black">
        {children}
        <CTA />
        <Whatsapp />
        <ScrollTop />
      </body>
    </html>
  );
}
