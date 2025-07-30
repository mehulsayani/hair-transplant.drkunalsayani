import React from 'react';
import { CheckCircle } from 'lucide-react'; // Optional: use any icon lib

export default function page() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 text-center">
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
      <CheckCircle className="text-green-500 w-16 h-16 mb-4" />
      <h1 className="text-3xl font-bold mb-2">Thank You for Booking!</h1>
      <p className="text-gray-600 mb-4 max-w-md">
        Your appointment at <span className="font-semibold text-black">TVAMEVA Clinic</span> for hair treatment has been successfully booked.
      </p>
      {/* <p className="text-gray-500 text-sm">
        We’ve sent a confirmation email with your appointment details. If you have any questions, feel free to contact us.
      </p> */}
    </div>
  );
}
