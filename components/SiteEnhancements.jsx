"use client";
import { useEffect } from "react";

export default function SiteEnhancements() {
  useEffect(() => {
    const body=document.body;
    const sidebar=document.querySelector(".sidebar");
    const overlay=document.querySelector(".sidebar-overlay");
    const menu=document.querySelector(".menu-togg, .menu-toggle");
    const toggleImg=document.getElementById("darkModeToggle");
    const open=()=>{sidebar?.classList.add("active");overlay?.classList.add("active");body.style.overflow="hidden";};
    const close=()=>{sidebar?.classList.remove("active");overlay?.classList.remove("active");body.style.overflow="";};
    const menuClick=(e)=>{e.preventDefault(); sidebar?.classList.contains("active")?close():open();};
    menu?.addEventListener("click",menuClick); overlay?.addEventListener("click",close);
    const key=(e)=>{if(e.key==="Escape") close();}; document.addEventListener("keydown",key);
    const dark="/image/dark-mode.svg", light="/image/light-mode.svg";
    const update=()=>{if(toggleImg) toggleImg.src=body.classList.contains("dark-mode")?light:dark;};
    toggleImg?.addEventListener("click",()=>{body.classList.toggle("dark-mode");body.classList.toggle("light-mode");update();}); update();

    const cursor=document.querySelector(".cursor");
    let mx=0,my=0,cx=0,cy=0,frame=0;
    const move=e=>{mx=e.clientX;my=e.clientY;};
    const animate=()=>{if(cursor){cx+=(mx-cx)*.1;cy+=(my-cy)*.1;cursor.style.left=`${cx}px`;cursor.style.top=`${cy}px`;frame=requestAnimationFrame(animate);}};
    if(cursor){document.addEventListener("mousemove",move);animate();}
    const hoverEls=document.querySelectorAll("a,button");
    const enter=()=>cursor?.classList.add("hover"), leave=()=>cursor?.classList.remove("hover");
    hoverEls.forEach(el=>{el.addEventListener("mouseenter",enter);el.addEventListener("mouseleave",leave);});

    const grid=document.querySelector(".grid-bg");
    const parallax=e=>{if(grid) grid.style.transform=`translate(${e.clientX/window.innerWidth*20}px, ${e.clientY/window.innerHeight*20}px)`;};
    if(grid) document.addEventListener("mousemove",parallax);

    return ()=>{menu?.removeEventListener("click",menuClick);overlay?.removeEventListener("click",close);document.removeEventListener("keydown",key);toggleImg?.removeEventListener("click",update);document.removeEventListener("mousemove",move);document.removeEventListener("mousemove",parallax);if(frame) cancelAnimationFrame(frame);hoverEls.forEach(el=>{el.removeEventListener("mouseenter",enter);el.removeEventListener("mouseleave",leave);});};
  }, []);
  return null;
}
