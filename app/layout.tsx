import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "ChimmerJim — Your Neighborhood Chimney Experts",
    template: "%s | ChimmerJim",
  },
  description:
    "ChimmerJim provides NFPA-certified chimney cleaning, inspection, repair, and fireplace services across 23 US metro areas. Licensed & insured. Same-day available.",
  metadataBase: new URL("https://chimmerjim.com"),
  openGraph: {
    type: "website",
    siteName: "ChimmerJim",
    images: [{ url: "/og-chimmerjim.jpg", width: 1376, height: 768 }],
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <head>
        {/* Deferred GTM — loads after user interaction, not blocking render */}
        <script
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: `
(function(){var loaded=false;function load(){if(loaded)return;loaded=true;(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f)})(window,document,'script','dataLayer','GTM-REPLACE_ME');['scroll','click','touchstart','keydown'].forEach(function(e){document.removeEventListener(e,load,{capture:true})});}['scroll','click','touchstart','keydown'].forEach(function(e){document.addEventListener(e,load,{capture:true,once:true,passive:true});});})();
            `,
          }}
        />
      </head>
      <body suppressHydrationWarning className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
