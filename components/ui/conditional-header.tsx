"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header";

export default function ConditionalHeader() {
  const pathname = usePathname();

  // Hide header on dynamic property pages (e.g., /property/123) or agent pages (e.g., /agent/456)
  const isHiddenRoute =
    pathname.startsWith("/listing/") || pathname.startsWith("/agent/");

  if (isHiddenRoute) {
    return null;
  }

  return <Header />;
}
