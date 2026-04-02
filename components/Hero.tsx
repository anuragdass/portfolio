import Image from "next/image";

const MARQUEE_TEXT =
  "PYTHON // DJANGO // FASTAPI // LANGCHAIN // LANGGRAPH // VERTEX AI // POSTGRESQL // CELERY // DOCKER // RAG SYSTEMS // ";

export default function Hero() {
  return (
    <section
      id="home"
      aria-label="Introduction"
      className="min-h-[calc(100vh-5rem)] flex flex-col md:flex-row relative overflow-hidden border-b border-outline-variant/10"
    >
      {/* ── Abstract radial glow — cinematic depth behind headline ───── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 60% at 15% 50%, rgba(0,255,136,0.05) 0%, transparent 70%)",
        }}
      />

      {/* ── Left: Text content ────────────────────────────────────────── */}
      <div className="flex-1 flex flex-col justify-center px-8 md:px-16 py-20 z-10">
        <div className="font-label text-primary mb-6 tracking-[0.4em] text-xs">
          / SOFTWARE ENGINEER · AI &amp; BACKEND ARCHITECT
        </div>

        <h1 className="font-headline text-6xl md:text-8xl font-extrabold tracking-tighter leading-[0.9] mb-8">
          BACKEND
          <br />
          ARCHITECT
        </h1>

        <p className="max-w-md text-on-surface-variant font-body text-lg mb-12 leading-relaxed">
          Building scalable backend systems and production-grade Generative AI
          solutions with a focus on low-latency performance.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="bg-primary text-on-primary px-10 py-4 font-headline font-bold tracking-widest text-sm hover:-translate-y-0.5 transition-transform"
          >
            VIEW PROJECTS
          </a>
          <a
            href="#contact"
            className="border border-outline px-10 py-4 font-headline font-bold tracking-widest text-sm text-on-surface hover:bg-on-surface hover:text-background transition-all"
          >
            GET IN TOUCH
          </a>
        </div>

        {/* Education */}
        <div className="mt-16 pt-8 border-t border-outline-variant/20 flex items-center gap-6">
          <div>
            <div className="font-label text-on-surface-variant text-[10px] tracking-widest mb-1 uppercase">
              Academic_Background
            </div>
            <div className="font-headline text-sm font-bold text-on-surface">
              MCA IN AI &amp; ML
            </div>
            <div className="text-[10px] text-primary tracking-widest">
              SRHU · 9.1 CGPA
            </div>
          </div>
        </div>
      </div>

      {/* ── Right: Tech Noir Panel ─────────────────────────────────────── */}
      <div className="hidden md:flex w-[35%] border-l border-outline-variant/20 relative bg-surface-container-lowest overflow-hidden z-10 flex-col items-center justify-center">
        {/* Vertical tech marquee — background */}
        <div
          aria-hidden="true"
          className="absolute inset-0 z-0 flex justify-center pointer-events-none select-none overflow-hidden"
        >
          <div className="flex flex-col animate-marquee-vertical h-fit whitespace-nowrap">
            <span className="font-mono text-7xl font-black text-outline opacity-[0.05] tracking-tighter uppercase [writing-mode:vertical-rl] py-8">
              {MARQUEE_TEXT}
            </span>
            <span className="font-mono text-7xl font-black text-outline opacity-[0.05] tracking-tighter uppercase [writing-mode:vertical-rl] py-8">
              {MARQUEE_TEXT}
            </span>
          </div>
        </div>

        {/* Profile image */}
        <div className="relative z-20 w-3/4 aspect-square max-w-sm group">
          <div className="absolute inset-0 border border-primary/20 image-glow transition-all duration-500 group-hover:border-primary/40" />
          <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-primary" />
          <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-primary" />
          <div className="relative w-full h-full overflow-hidden bg-black/50 tech-noir-image">
            <Image
              src="/images/profile.png"
              alt="Anurag Das"
              fill
              className="object-cover grayscale mix-blend-luminosity opacity-80 group-hover:scale-105 transition-transform duration-1000"
              priority
            />
            <div className="scanlines" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
          </div>

          {/* UID overlay */}
          <div className="absolute bottom-4 left-4 font-mono text-[10px] text-primary tracking-widest bg-black/80 px-2 py-1 border border-primary/20 backdrop-blur-sm z-30">
            UID: AD_ARCHITECT_99
          </div>
        </div>

        {/* Status */}
        <div className="absolute bottom-12 right-12 text-right z-20">
          <div className="font-label text-primary text-[10px] tracking-widest mb-1 opacity-60 uppercase">
            SYSTEM_STATUS
          </div>
          <div className="font-headline text-3xl font-bold text-on-surface">
            OPTIMAL
          </div>
        </div>
      </div>
    </section>
  );
}
