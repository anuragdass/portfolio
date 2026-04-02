"use client";

import { useState, type FormEvent } from "react";
import { supabase } from "@/lib/supabase";

type Status = "idle" | "loading" | "success" | "error";

type FieldKey = "name" | "email" | "message";

type FieldErrors = Partial<Record<FieldKey, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateFields(
  name: string,
  email: string,
  message: string
): FieldErrors {
  const err: FieldErrors = {};
  const n = name.trim();
  if (!n) err.name = "ERR::IDENTIFIER_NULL";
  else if (n.length < 2) err.name = "ERR::IDENTIFIER_TOO_SHORT";

  const em = email.trim();
  if (!em) err.email = "ERR::PROTOCOL_ADDRESS_REQUIRED";
  else if (!EMAIL_RE.test(em)) err.email = "ERR::PROTOCOL_ADDRESS_MALFORMED";

  const m = message.trim();
  if (!m) err.message = "ERR::PAYLOAD_NULL";
  else if (m.length < 10) err.message = "ERR::PAYLOAD_MIN_LENGTH_10";

  return err;
}

function fieldBorderClass(hasError: boolean) {
  return hasError
    ? "border-error focus:border-error"
    : "border-outline-variant focus:border-primary";
}

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  function clearField(key: FieldKey) {
    setFieldErrors((prev) => {
      if (!prev[key]) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    if (data.get("_hp")) return;

    const name = (data.get("name") as string) ?? "";
    const email = (data.get("email") as string) ?? "";
    const message = (data.get("message") as string) ?? "";

    const errors = validateFields(name, email, message);
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setStatus("idle");
      const first = Object.keys(errors)[0] as FieldKey;
      form.querySelector<HTMLElement>(`#${first}`)?.focus();
      return;
    }

    setFieldErrors({});
    setStatus("loading");

    const { error } = await supabase.from("contact_messages").insert({
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
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
                  className={`block font-label text-[10px] tracking-[0.2em] mb-2 uppercase transition-colors ${
                    fieldErrors.name ? "text-error" : "text-primary"
                  }`}
                >
                  01 / IDENTIFIER <span className="text-on-surface-variant/60">[REQUIRED]</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  maxLength={120}
                  placeholder="YOUR_NAME"
                  aria-invalid={fieldErrors.name ? "true" : "false"}
                  aria-describedby={fieldErrors.name ? "name-error" : undefined}
                  onInput={() => clearField("name")}
                  className={`w-full bg-surface-container-lowest border-0 border-b-2 outline-none transition-colors p-4 font-label text-sm text-on-surface placeholder:text-outline-variant ${fieldBorderClass(!!fieldErrors.name)}`}
                />
                {fieldErrors.name && (
                  <p
                    id="name-error"
                    role="alert"
                    className="mt-2 font-mono text-[10px] text-error tracking-[0.15em] uppercase"
                  >
                    {fieldErrors.name}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className={`block font-label text-[10px] tracking-[0.2em] mb-2 uppercase transition-colors ${
                    fieldErrors.email ? "text-error" : "text-primary"
                  }`}
                >
                  02 / PROTOCOL_ADDRESS <span className="text-on-surface-variant/60">[REQUIRED]</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  maxLength={254}
                  placeholder="EMAIL_ADDRESS"
                  aria-invalid={fieldErrors.email ? "true" : "false"}
                  aria-describedby={fieldErrors.email ? "email-error" : undefined}
                  onInput={() => clearField("email")}
                  className={`w-full bg-surface-container-lowest border-0 border-b-2 outline-none transition-colors p-4 font-label text-sm text-on-surface placeholder:text-outline-variant ${fieldBorderClass(!!fieldErrors.email)}`}
                />
                {fieldErrors.email && (
                  <p
                    id="email-error"
                    role="alert"
                    className="mt-2 font-mono text-[10px] text-error tracking-[0.15em] uppercase"
                  >
                    {fieldErrors.email}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className={`block font-label text-[10px] tracking-[0.2em] mb-2 uppercase transition-colors ${
                    fieldErrors.message ? "text-error" : "text-primary"
                  }`}
                >
                  03 / PAYLOAD <span className="text-on-surface-variant/60">[REQUIRED · MIN 10]</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  maxLength={5000}
                  placeholder="MESSAGE_DETAILS..."
                  aria-invalid={fieldErrors.message ? "true" : "false"}
                  aria-describedby={fieldErrors.message ? "message-error" : undefined}
                  onInput={() => clearField("message")}
                  className={`w-full bg-surface-container-lowest border-0 border-b-2 outline-none transition-colors p-4 font-label text-sm text-on-surface resize-none placeholder:text-outline-variant ${fieldBorderClass(!!fieldErrors.message)}`}
                />
                {fieldErrors.message && (
                  <p
                    id="message-error"
                    role="alert"
                    className="mt-2 font-mono text-[10px] text-error tracking-[0.15em] uppercase"
                  >
                    {fieldErrors.message}
                  </p>
                )}
              </div>

              {status === "error" && (
                <p className="font-mono text-xs text-error tracking-widest uppercase border border-error/30 bg-error/5 px-3 py-2">
                  TRANSMISSION_FAILED // RETRY_OR_CHECK_SUPABASE
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
