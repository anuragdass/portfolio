import Image from "next/image";

const MARQUEE_ITEMS = [
  "Python",
  "Django",
  "FastAPI",
  "LangChain",
  "LangGraph",
  "Vertex AI",
  "PostgreSQL",
  "Celery",
  "Docker",
  "RAG Systems",
];

export default function Hero() {
  // Duplicate for seamless loop
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="min-h-screen pt-20 pb-16 md:pt-0 flex items-center px-6 md:px-8 lg:px-16"
    >
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 items-center">

        {/* ── Left: Text ────────────────────────────────────────────────── */}
        <div className="flex flex-col gap-6">
          {/* Micro-label */}
          <span className="font-mono text-xs tracking-[0.2em] text-[#00ff88] uppercase">
            00 // BACKEND ARCHITECT
          </span>

          {/* Main headline */}
          <h1
            className="font-headline font-bold text-5xl md:text-7xl lg:text-8xl leading-none tracking-[-0.03em] text-[#f9f5f8] uppercase"
          >
            BACKEND
            <br />
            ARCHITECT
          </h1>

          {/* Tagline */}
          <p className="font-mono text-sm tracking-widest text-[#8c8c8e] uppercase">
            Software Engineer · AI &amp; Backend Architect
          </p>

          {/* Description */}
          <p className="font-body text-base leading-relaxed text-[#8c8c8e] max-w-lg">
            Building scalable backend systems and production-grade Generative AI
            solutions with a focus on low-latency performance.
          </p>

          {/* Education badge */}
          <div className="flex items-center gap-3">
            <span className="font-mono text-[10px] tracking-[0.15em] text-[#8c8c8e] uppercase border border-[rgba(118,117,119,0.15)] px-3 py-1">
              MCA IN AI &amp; ML · SRHU · 9.1 CGPA
            </span>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mt-2">
            <a
              href="#projects"
              className="font-mono text-xs tracking-widest px-6 py-3 bg-[#00ff88] text-[#0e0e10] font-bold hover:bg-[#00e07a] transition-colors"
            >
              VIEW PROJECTS
            </a>
            <a
              href="#contact"
              className="font-mono text-xs tracking-widest px-6 py-3 border border-[#f9f5f8] text-[#f9f5f8] hover:border-[#00ff88] hover:text-[#00ff88] transition-colors"
            >
              GET IN TOUCH
            </a>
          </div>

          {/* Status indicator */}
          <div className="flex items-center gap-2 mt-2">
            <span className="inline-block w-2 h-2 rounded-none bg-[#00ff88] animate-pulse" />
            <span className="font-mono text-[10px] tracking-[0.2em] text-[#00ff88] uppercase">
              STATUS: OPTIMAL
            </span>
          </div>
        </div>

        {/* ── Right: Profile Image + Marquee ────────────────────────────── */}
        <div className="relative flex items-center gap-4 justify-center md:justify-end">
          {/* Vertical marquee */}
          <div
            aria-hidden="true"
            className="hidden lg:flex flex-col overflow-hidden h-80 w-20"
          >
            <div
              className="flex flex-col gap-6"
              style={{ animation: "marquee-vertical 30s linear infinite" }}
            >
              {items.map((tech, i) => (
                <span
                  key={i}
                  className="font-mono text-[9px] tracking-[0.2em] text-[#1f1f22] uppercase whitespace-nowrap"
                  style={{ writingMode: "vertical-rl" }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Image frame */}
          <div className="relative neon-border corner-bracket scanlines">
            <Image
              src="/images/profile.jpg"
              alt="Anurag Das"
              width={320}
              height={400}
              className="img-noir block"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
}
