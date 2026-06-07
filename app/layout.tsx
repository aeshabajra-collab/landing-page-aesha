import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import MetaPixelEvents from "@/components/MetaPixelEvents";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ??
      "https://aesha-digital-consultation.vercel.app"
  ),
  title: "Free Digital Marketing Consultation | Aesha Bhattarai Acharya",
  description:
    "Book a free 1:1 consultation call and get a customized digital marketing plan for your business.",
  openGraph: {
    title: "Get a Customized Digital Marketing Plan for Your Business",
    description:
      "Book a free 1:1 consultation call and understand what your business should do next to get more visibility, inquiries, and growth.",
    type: "website",
    images: [
      {
        url: "/aesha-logo.png",
        width: 512,
        height: 512,
        alt: "Aesha Bhattarai Acharya"
      }
    ]
  },
  twitter: {
    card: "summary",
    title: "Get a Customized Digital Marketing Plan for Your Business",
    description:
      "Book a free 1:1 consultation call and get a customized marketing plan for your business."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${playfair.variable}`}
    >
      <head>
        <script
          id="meta-pixel"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1238312628244980');
            `
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1238312628244980&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <MetaPixelEvents />
        {children}
      </body>
    </html>
  );
}
