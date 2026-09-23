"use client";
import { useEffect } from "react";

export default function ArticleEnhancements(){
 useEffect(()=>{
  const onScroll=()=>{
   const fill=document.getElementById("progressFill");
   if(!fill) return;
   const h=document.documentElement.scrollHeight-window.innerHeight;
   fill.style.width=(h>0?Math.min(100,(window.scrollY/h)*100):0)+"%";
   const links=[...document.querySelectorAll('.toc li')];
   const sections=links.map(li=>document.getElementById(li.dataset.target)).filter(Boolean);
   let current=0; const pos=window.scrollY+120; sections.forEach((s,i)=>{if(s.offsetTop<=pos) current=i;});
   links.forEach((li,i)=>li.classList.toggle('active',i===current));
  };
  window.addEventListener('scroll',onScroll,{passive:true}); onScroll();
  return ()=>window.removeEventListener('scroll',onScroll);
 },[]);
 return null;
}
