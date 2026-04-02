"use client";

import { useState, type FormEvent } from "react";

const CONTACT_LINKS = [
  {
    label: "EMAIL",
    value: "anuragdas@example.com",
    href: "mailto:anuragdas@example.com",
  },
  {
    label: "LINKEDIN",
    value: "linkedin.com/in/anuragdas",
    href: "https://linkedin.com/in/anuragdas",
  },
  {
    label: "GITHUB",
    value: "github.com/anuragdas",
    href: "https://github.com/anuragdas",
  },
];

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: wire up form submission (Formspree / Resend / mailto fallback)
    setStatus("sent");
  }

  return (
    <section
      id="contact"
      aria-label="Contact"
      className="px-6 md:px-8 lg:px-16 py-24"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

        {/* ── Left: Heading + links ─────────────────────────────────────── */}
        <div className="flex flex-col gap-8">
          <div>
            <span className="font-mono text-[10px] tracking-[0.2em] text-[#00ff88] uppercase">
              05 // INITIATE COMM_LINK
            </span>
            <h2 className="font-headline font-bold text-3xl md:text-4xl text-[#f9f5f8] mt-3 tracking-[-0.02em] text-glow">
              Let&apos;s Build Something.
            </h2>
          </div>

          <p className="font-body text-sm text-[#8c8c8e] leading-relaxed max-w-sm">
            Open to backend and AI engineering roles. Drop a message or reach
            out directly through any channel.
          </p>

          <ul className="flex flex-col gap-4" role="list">
            {CONTACT_LINKS.map(({ label, value, href }) => (
              <li key={label}>
                <span className="font-mono text-[10px] tracking-[0.2em] text-[#8c8c8e] uppercase block mb-1">
                  {label}
                </span>
                <a
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  className="font-mono text-sm text-[#f9f5f8] hover:text-[#00ff88] transition-colors"
                >
                  {value}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Right: Form ───────────────────────────────────────────────── */}
        {status === "sent" ? (
          <div className="flex items-center justify-center h-64 ghost-border p-8">
            <p className="font-mono text-sm tracking-widest text-[#00ff88] uppercase text-glow">
              TRANSMISSION RECEIVED. I&apos;LL BE IN TOUCH.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6"
            noValidate
          >
            {/* Name */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="font-mono text-[10px] tracking-[0.2em] text-[#8c8c8e] uppercase"
              >
                IDENTIFIER
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Your name"
                className="bg-[#000000] border-b border-[rgba(118,117,119,0.3)] focus:border-[#00ff88] outline-none px-0 py-3 text-sm text-[#f9f5f8] font-body placeholder:text-[#3a3a3c] transition-colors"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="font-mono text-[10px] tracking-[0.2em] text-[#8c8c8e] uppercase"
              >
                PROTOCOL_ADDRESS
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="your@email.com"
                className="bg-[#000000] border-b border-[rgba(118,117,119,0.3)] focus:border-[#00ff88] outline-none px-0 py-3 text-sm text-[#f9f5f8] font-body placeholder:text-[#3a3a3c] transition-colors"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="message"
                className="font-mono text-[10px] tracking-[0.2em] text-[#8c8c8e] uppercase"
              >
                PAYLOAD
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="What would you like to build?"
                className="bg-[#000000] border-b border-[rgba(118,117,119,0.3)] focus:border-[#00ff88] outline-none px-0 py-3 text-sm text-[#f9f5f8] font-body placeholder:text-[#3a3a3c] resize-none transition-colors"
              />
            </div>

            <button
              type="submit"
              className="font-mono text-xs tracking-widest px-6 py-3 bg-[#00ff88] text-[#0e0e10] font-bold hover:bg-[#00e07a] transition-colors self-start mt-2"
            >
              EXECUTE
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
