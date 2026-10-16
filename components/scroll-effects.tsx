"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function ScrollEffects() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const sections = document.querySelectorAll<HTMLElement>(
      "main section:not([aria-labelledby='hero-title']), footer",
    );

    if (!("IntersectionObserver" in window)) {
      sections.forEach((section) => section.classList.add("scroll-reveal-visible"));
      return;
    }

    document.documentElement.classList.add("scroll-reveal-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("scroll-reveal-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
