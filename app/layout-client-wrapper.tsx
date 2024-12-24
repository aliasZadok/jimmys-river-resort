"use client";

import { usePathname } from "next/navigation";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer/index";
import { AvailabilityProvider } from "@/components/ui/availability";

export default function LayoutClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  // List of valid routes
  const validRoutes = ["/", "/about", "/rooms", "/rooms/deluxe-rooms", "/rooms/family-rooms"];

  // Get the current pathname
  const pathname = usePathname();

  // Check if the current route is valid
  const isValidRoute = validRoutes.includes(pathname);

  return isValidRoute ? (
    <AvailabilityProvider>
      <Navigation />
      {children}
      <Footer />
    </AvailabilityProvider>
  ) : (
    <>{children}</>
  );
}
