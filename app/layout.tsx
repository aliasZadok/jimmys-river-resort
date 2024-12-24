import type { Metadata } from "next";
import { caprasimo, nunitoSans } from "@/lib/fonts";
import "./globals.css";
import LayoutClientWrapper from "./layout-client-wrapper";

export const metadata: Metadata = {
  title: {
    default: "Jimmy's River Resort",
    template: "%s | Jimmy's River Resort"
  },
  description: "Find peace away from the crowds with local flavours, riverside views, and warm hospitality at Jimmy's River Resort, Chamba.",
  metadataBase: new URL('https://jimmysriverresort.com'),
  openGraph: {
    title: "Jimmy's River Resort",
    description: "Your serene riverside escape in Chamba, Himachal Pradesh",
    url: 'https://jimmysriverresort.com',
    siteName: "Jimmy's River Resort",
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/OG_image.png',
        width: 1200,
        height: 630,
        alt: "Jimmy's River Resort - Your serene riverside escape in Chamba, Himachal Pradesh."
      }
    ]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: "Jimmy's River Resort",
    card: 'summary_large_image',
    description: "Your serene riverside escape in Chamba, Himachal Pradesh",
    images: ['/OG_image.png'],
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${caprasimo.variable} ${nunitoSans.variable}`}
    >
      <body>
        <LayoutClientWrapper>{children}</LayoutClientWrapper>
      </body>
    </html>
  );
}