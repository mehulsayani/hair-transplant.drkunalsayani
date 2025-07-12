import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ScrollTop from "./ScrollTop";
import Whatsapp from "./Whatsapp";
import CTA from "./CTA";

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
    "Looking for the best hair transplant in Mumbai? Dr. Kunal Sayani offers advanced FUE & FUT techniques with natural, permanent results.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <CTA />
        <Whatsapp />
        <ScrollTop />
      </body>
    </html>
  );
}
