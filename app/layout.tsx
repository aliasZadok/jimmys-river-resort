import type { Metadata } from "next";
import { caprasimo, nunitoSans } from "@/lib/fonts";
import "./globals.css";
import LayoutClientWrapper from "./layout-client-wrapper";

export const metadata: Metadata = {
  title: "Jimmy's River Resort",
  description: "Find peace away from the crowds with local flavours, riverside views, and warm hospitality.",
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
