"use client";
import { useEffect } from "react";

export default function SiteEnhancements() {
  useEffect(() => {
    const body = document.body;
    const sidebar = document.querySelector(".sidebar");
    const overlay = document.querySelector(".sidebar-overlay");
    const menu = document.querySelector(".menu-togg, .menu-toggle");
    const toggleImg = document.getElementById("darkModeToggle");

    const close = () => {
      sidebar?.classList.remove("active");
      overlay?.classList.remove("active");
      body.style.overflow = "";
    };
    const open = () => {
      sidebar?.classList.add("active");
      overlay?.classList.add("active");
      body.style.overflow = "hidden";
    };
    const menuClick = (e) => {
      e.preventDefault();
      sidebar?.classList.contains("active") ? close() : open();
    };
    const key = (e) => { if (e.key === "Escape") close(); };

    menu?.addEventListener("click", menuClick);
    overlay?.addEventListener("click", close);
    document.addEventListener("keydown", key);

    const dark = "/images/dark-mode.svg";
    const light = "/images/light-mode.svg";
    const update = () => {
      if (toggleImg) {
        toggleImg.src = body.classList.contains("dark-mode") ? light : dark;
      }
    };
    const toggleDark = () => {
      body.classList.toggle("dark-mode");
      body.classList.toggle("light-mode");
      update();
    };
    toggleImg?.addEventListener("click", toggleDark);
    update();

    return () => {
      menu?.removeEventListener("click", menuClick);
      overlay?.removeEventListener("click", close);
      document.removeEventListener("keydown", key);
      toggleImg?.removeEventListener("click", toggleDark);
    };
  }, []);

  return null;
}
