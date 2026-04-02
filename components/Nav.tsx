"use client";

import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { label: "PROJECTS", href: "#projects" },
  { label: "STACK", href: "#stack" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "CONTACT", href: "#contact" },
] as const;

const SECTION_IDS = ["projects", "stack", "experience", "contact"] as const;

export default function Nav() {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { threshold: 0.3 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <>
      {/* ── Desktop Nav ─────────────────────────────────────────────────── */}
      <nav
        aria-label="Primary navigation"
        className="fixed top-0 left-0 right-0 z-50 hidden md:flex items-center justify-between px-8 py-5 border-b border-[rgba(118,117,119,0.12)]"
        style={{ backgroundColor: "rgba(14,14,16,0.85)", backdropFilter: "blur(12px)" }}
      >
        <a
          href="#"
          className="font-headline font-bold text-sm tracking-widest text-[#f9f5f8] uppercase"
        >
          ANURAG DAS
        </a>

        <ul className="flex items-center gap-8" role="list">
          {NAV_ITEMS.map(({ label, href }) => {
            const id = href.slice(1);
            const isActive = active === id;
            return (
              <li key={label}>
                <a
                  href={href}
                  className={`font-mono text-xs tracking-widest transition-colors ${
                    isActive ? "text-[#00ff88] nav-link-active" : "text-[#8c8c8e] hover:text-[#f9f5f8]"
                  }`}
                >
                  /{label}
                </a>
              </li>
            );
          })}
        </ul>

        <a
          href="mailto:anuragdas@example.com"
          className="font-mono text-xs tracking-widest px-4 py-2 bg-[#00ff88] text-[#0e0e10] font-bold hover:bg-[#00e07a] transition-colors"
        >
          RESUME
        </a>
      </nav>

      {/* ── Mobile Bottom Nav ───────────────────────────────────────────── */}
      <nav
        aria-label="Mobile navigation"
        className="fixed bottom-0 left-0 right-0 z-50 flex md:hidden items-center justify-around px-4 py-3 border-t border-[rgba(118,117,119,0.12)]"
        style={{ backgroundColor: "rgba(14,14,16,0.95)", backdropFilter: "blur(12px)" }}
      >
        <a href="#projects" aria-label="Work" className="flex flex-col items-center gap-1 text-[#8c8c8e] hover:text-[#00ff88] transition-colors">
          <span className="material-symbols-outlined text-xl" aria-hidden="true">work</span>
          <span className="font-mono text-[9px] tracking-widest">WORK</span>
        </a>
        <a href="#stack" aria-label="Tech stack" className="flex flex-col items-center gap-1 text-[#8c8c8e] hover:text-[#00ff88] transition-colors">
          <span className="material-symbols-outlined text-xl" aria-hidden="true">memory</span>
          <span className="font-mono text-[9px] tracking-widest">TECH</span>
        </a>
        <a href="#experience" aria-label="Bio / Experience" className="flex flex-col items-center gap-1 text-[#8c8c8e] hover:text-[#00ff88] transition-colors">
          <span className="material-symbols-outlined text-xl" aria-hidden="true">person</span>
          <span className="font-mono text-[9px] tracking-widest">BIO</span>
        </a>
        <a href="#contact" aria-label="Contact" className="flex flex-col items-center gap-1 text-[#8c8c8e] hover:text-[#00ff88] transition-colors">
          <span className="material-symbols-outlined text-xl" aria-hidden="true">mail</span>
          <span className="font-mono text-[9px] tracking-widest">MAIL</span>
        </a>
      </nav>
    </>
  );
}
