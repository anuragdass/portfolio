"use client";

import { useEffect, useRef } from "react";

const NAV_ITEMS = [
  { label: "/PROJECTS", href: "#projects" },
  { label: "/STACK", href: "#stack" },
  { label: "/EXPERIENCE", href: "#experience" },
  { label: "/CONTACT", href: "#contact" },
] as const;

export default function Nav() {
  const linksRef = useRef<HTMLAnchorElement[]>([]);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    function onScroll() {
      let current = "";
      sections.forEach((section) => {
        const top = (section as HTMLElement).offsetTop;
        if (window.scrollY >= top - 150) {
          current = section.getAttribute("id") ?? "";
        }
      });

      linksRef.current.forEach((link) => {
        link.classList.remove("nav-link-active");
        link.classList.add("text-[#f9f5f8]/60");
        if (current && link.getAttribute("href")?.includes(current)) {
          link.classList.add("nav-link-active");
          link.classList.remove("text-[#f9f5f8]/60");
        }
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ── Desktop Nav ─────────────────────────────────────────────────── */}
      <nav
        aria-label="Primary navigation"
        className="fixed top-0 w-full z-50 bg-[#0e0e10]/80 backdrop-blur-xl border-b border-[#00FF88]/10 flex justify-between items-center px-8 h-20"
      >
        <div className="font-headline font-bold text-xl tracking-tighter text-[#f9f5f8]">
          ANURAG DAS
        </div>

        <div
          id="main-nav"
          className="hidden md:flex gap-8 font-headline tracking-tight uppercase text-sm"
        >
          {NAV_ITEMS.map(({ label, href }, i) => (
            <a
              key={label}
              href={href}
              ref={(el) => { if (el) linksRef.current[i] = el; }}
              className="text-[#f9f5f8]/60 hover:text-[#f9f5f8] transition-colors"
            >
              {label}
            </a>
          ))}
        </div>

        <a
          href="mailto:anuragdas95000@gmail.com"
          className="bg-[#00FF88] text-on-primary px-6 py-2 font-headline font-bold text-xs tracking-widest hover:bg-[#00ed7e] transition-all active:opacity-80"
        >
          RESUME
        </a>
      </nav>

      {/* ── Mobile Bottom Nav ───────────────────────────────────────────── */}
      <nav
        aria-label="Mobile navigation"
        className="fixed bottom-0 w-full z-50 sm:hidden bg-[#0e0e10]/90 backdrop-blur-lg border-t border-[#00FF88]/20 flex justify-around items-center h-16 px-4 shadow-[0_-4px_12px_rgba(0,255,136,0.1)]"
      >
        <a href="#projects" className="flex flex-col items-center justify-center text-[#f9f5f8]/40 active:text-[#00FF88] transition-all">
          <span className="material-symbols-outlined text-xl">terminal</span>
          <span className="font-label text-[8px] tracking-widest mt-1 uppercase">WORK</span>
        </a>
        <a href="#stack" className="flex flex-col items-center justify-center text-[#f9f5f8]/40 active:text-[#00FF88] transition-all">
          <span className="material-symbols-outlined text-xl">memory</span>
          <span className="font-label text-[8px] tracking-widest mt-1 uppercase">TECH</span>
        </a>
        <a href="#experience" className="flex flex-col items-center justify-center text-[#f9f5f8]/40 active:text-[#00FF88] transition-all">
          <span className="material-symbols-outlined text-xl">history</span>
          <span className="font-label text-[8px] tracking-widest mt-1 uppercase">BIO</span>
        </a>
        <a href="#contact" className="flex flex-col items-center justify-center text-[#f9f5f8]/40 active:text-[#00FF88] transition-all">
          <span className="material-symbols-outlined text-xl">alternate_email</span>
          <span className="font-label text-[8px] tracking-widest mt-1 uppercase">MAIL</span>
        </a>
      </nav>
    </>
  );
}
