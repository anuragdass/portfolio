"use client";

import { useCallback, useEffect, useRef } from "react";

const NAV_ITEMS = [
  { label: "/PROJECTS", href: "#projects" },
  { label: "/STACK", href: "#stack" },
  { label: "/EXPERIENCE", href: "#experience" },
  { label: "/CONTACT", href: "#contact" },
] as const;

const MOBILE_ITEMS = [
  { icon: "terminal", short: "WORK" },
  { icon: "memory", short: "TECH" },
  { icon: "history", short: "BIO" },
  { icon: "alternate_email", short: "MAIL" },
] as const;

function sectionIdFromHref(href: string) {
  return href.startsWith("#") ? href.slice(1) : "";
}

export default function Nav() {
  const desktopLinksRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const mobileLinksRef = useRef<(HTMLAnchorElement | null)[]>([]);

  const updateActiveFromScroll = useCallback(() => {
    const sections = document.querySelectorAll("section[id]");
    let current = "";
    sections.forEach((section) => {
      const top = (section as HTMLElement).offsetTop;
      if (window.scrollY >= top - 150) {
        current = section.getAttribute("id") ?? "";
      }
    });

    NAV_ITEMS.forEach((item, i) => {
      const id = sectionIdFromHref(item.href);
      const isActive = Boolean(current && id === current);

      const desktop = desktopLinksRef.current[i];
      if (desktop) {
        desktop.classList.toggle("nav-link-active", isActive);
        desktop.classList.toggle("text-[#f9f5f8]/60", !isActive);
        if (isActive) {
          desktop.classList.remove("text-[#f9f5f8]/60");
        }
      }

      const mobile = mobileLinksRef.current[i];
      if (mobile) {
        mobile.classList.toggle("mobile-nav-link-active", isActive);
        mobile.classList.toggle("text-[#f9f5f8]/40", !isActive);
        if (isActive) mobile.setAttribute("aria-current", "page");
        else mobile.removeAttribute("aria-current");
      }
    });
  }, []);

  const scheduleNavUpdate = useCallback(() => {
    window.requestAnimationFrame(() => {
      window.setTimeout(updateActiveFromScroll, 400);
    });
  }, [updateActiveFromScroll]);

  useEffect(() => {
    updateActiveFromScroll();

    window.addEventListener("scroll", updateActiveFromScroll, { passive: true });
    window.addEventListener("hashchange", updateActiveFromScroll);
    window.addEventListener("resize", updateActiveFromScroll);

    return () => {
      window.removeEventListener("scroll", updateActiveFromScroll);
      window.removeEventListener("hashchange", updateActiveFromScroll);
      window.removeEventListener("resize", updateActiveFromScroll);
    };
  }, [updateActiveFromScroll]);

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
              ref={(el) => {
                desktopLinksRef.current[i] = el;
              }}
              onClick={scheduleNavUpdate}
              className="text-[#f9f5f8]/60 hover:text-[#f9f5f8] transition-colors"
            >
              {label}
            </a>
          ))}
        </div>

        <a
          href="/resume-anurag-das.pdf"
          download="resume_anurag_ai_engg.pdf"
          className="bg-[#00FF88] text-on-primary px-6 py-2 font-headline font-bold text-xs tracking-widest hover:bg-[#00ed7e] transition-all active:opacity-80"
        >
          RESUME
        </a>
      </nav>

      {/* ── Mobile Bottom Nav ───────────────────────────────────────────── */}
      <nav
        aria-label="Mobile navigation"
        className="fixed bottom-0 w-full z-50 sm:hidden bg-[#0e0e10]/90 backdrop-blur-lg border-t border-[#00FF88]/20 flex justify-around items-center h-16 px-4 pb-[max(0.5rem,env(safe-area-inset-bottom))] shadow-[0_-4px_12px_rgba(0,255,136,0.1)]"
      >
        {NAV_ITEMS.map(({ href }, i) => {
          const { icon, short } = MOBILE_ITEMS[i];
          return (
            <a
              key={href}
              href={href}
              ref={(el) => {
                mobileLinksRef.current[i] = el;
              }}
              onClick={scheduleNavUpdate}
              className="flex min-w-[3.5rem] flex-col items-center justify-center gap-0.5 text-[#f9f5f8]/40 transition-colors duration-200 active:opacity-80"
            >
              <span className="material-symbols-outlined text-xl leading-none">
                {icon}
              </span>
              <span className="font-label text-[8px] tracking-widest uppercase leading-none">
                {short}
              </span>
            </a>
          );
        })}
      </nav>
    </>
  );
}
