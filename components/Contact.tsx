"use client";

import { useState, type FormEvent } from "react";
import { supabase } from "@/lib/supabase";

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot — bots fill this hidden field, humans don't
    if (data.get("_hp")) return;

    setStatus("loading");

    const { error } = await supabase.from("contact_messages").insert({
      name: data.get("name") as string,
      email: data.get("email") as string,
      message: data.get("message") as string,
    });

    setStatus(error ? "error" : "success");
  }

  return (
    <section
      id="contact"
      aria-label="Contact"
      className="py-32 px-8 max-w-7xl mx-auto"
    >
      <div className="flex flex-col md:flex-row gap-20">
        {/* ── Left ──────────────────────────────────────────────────────── */}
        <div className="md:w-1/2">
          <h2 className="font-headline text-6xl font-bold tracking-tighter mb-8 text-glow">
            INITIATE
            <br />
            COMM_LINK
          </h2>
          <p className="text-on-surface-variant font-body text-lg mb-12">
            Available for architectural consultation, GenAI implementations,
            and scalable backend engineering.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-primary">alternate_email</span>
              <span className="font-label text-sm tracking-widest">
                MAIL: anuragdas95000@gmail.com
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-primary">link</span>
              <a
                href="https://linkedin.com/in/anuragdas99"
                target="_blank"
                rel="noopener noreferrer"
                className="font-label text-sm tracking-widest hover:text-primary transition-colors"
              >
                LINKEDIN: anuragdas99
              </a>
            </div>
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-primary">code</span>
              <a
                href="https://github.com/anuragdass"
                target="_blank"
                rel="noopener noreferrer"
                className="font-label text-sm tracking-widest hover:text-primary transition-colors"
              >
                GITHUB: anuragdass
              </a>
            </div>
          </div>
        </div>

        {/* ── Right: Form ───────────────────────────────────────────────── */}
        <div className="md:w-1/2 bg-surface-container-high p-8 ghost-border">
          {status === "success" ? (
            <div className="flex items-center justify-center h-64">
              <p className="font-mono text-sm tracking-widest text-primary uppercase text-glow">
                TRANSMISSION RECEIVED.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8" noValidate>
              {/* Honeypot — hidden from real users */}
              <input
                type="text"
                name="_hp"
                aria-hidden="true"
                tabIndex={-1}
                className="absolute opacity-0 h-0 w-0 pointer-events-none"
                autoComplete="off"
              />

              <div>
                <label
                  htmlFor="name"
                  className="block font-label text-[10px] text-primary tracking-[0.2em] mb-2 uppercase"
                >
                  01 / IDENTIFIER
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="YOUR_NAME"
                  className="w-full bg-surface-container-lowest border-0 border-b border-outline-variant focus:border-primary outline-none transition-all p-4 font-label text-sm text-on-surface placeholder:text-outline-variant"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block font-label text-[10px] text-primary tracking-[0.2em] mb-2 uppercase"
                >
                  02 / PROTOCOL_ADDRESS
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="EMAIL_ADDRESS"
                  className="w-full bg-surface-container-lowest border-0 border-b border-outline-variant focus:border-primary outline-none transition-all p-4 font-label text-sm text-on-surface placeholder:text-outline-variant"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block font-label text-[10px] text-primary tracking-[0.2em] mb-2 uppercase"
                >
                  03 / PAYLOAD
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="MESSAGE_DETAILS..."
                  className="w-full bg-surface-container-lowest border-0 border-b border-outline-variant focus:border-primary outline-none transition-all p-4 font-label text-sm text-on-surface resize-none placeholder:text-outline-variant"
                />
              </div>

              {status === "error" && (
                <p className="font-mono text-xs text-error tracking-widest uppercase">
                  TRANSMISSION FAILED. RETRY.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-primary text-on-primary font-headline font-bold py-5 tracking-[0.3em] hover:bg-[#00ed7e] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "loading" ? "TRANSMITTING..." : "EXECUTE_SEND"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
