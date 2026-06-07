"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export default function MetaPixelEvents() {
  const pathname = usePathname();

  useEffect(() => {
    const firePageView = () => {
      window.fbq?.("track", "PageView");
    };

    firePageView();
    const retry = window.setTimeout(firePageView, 600);

    return () => window.clearTimeout(retry);
  }, [pathname]);

  return null;
}
