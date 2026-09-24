"use client";

import { useEffect } from "react";

export default function ArticleInteractions() {
  useEffect(() => {
    const links = Array.from(document.querySelectorAll(".toc li"));
    const sections = links.map(li => document.getElementById(li.dataset.target)).filter(Boolean);
    const progress = document.getElementById("progressFill");
    if (!links.length && !progress) return;

    const onScroll = () => {
      let currentIndex = 0;
      const scrollPos = window.scrollY + 140;
      sections.forEach((section, i) => {
        if (section.offsetTop <= scrollPos) currentIndex = i;
      });
      links.forEach((li, i) => li.classList.toggle("active", i === currentIndex));
      if (progress) {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        progress.style.width = `${max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0}%`;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}
