import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
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
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
