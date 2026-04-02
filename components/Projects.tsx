const PROJECTS = [
  {
    tag: "AGENTIC_SQL",
    tagAlign: "left" as const,
    label: "/ CYNET_GPT_v1",
    title: "CynetGPT",
    description:
      "Developing Vertex AI powered SQL agents integrated with PostgreSQL. Built complex data ingestion pipelines and intelligent retrieval mechanisms for enterprise-scale structured data.",
    techs: ["Vertex AI", "PostgreSQL", "Python"],
    // CSS gradient abstract — replace with real screenshot when available
    gradient:
      "radial-gradient(ellipse 80% 60% at 60% 50%, rgba(0,255,136,0.06) 0%, transparent 60%), radial-gradient(ellipse 40% 40% at 80% 30%, rgba(0,200,100,0.04) 0%, transparent 50%)",
    liveUrl: "",
    sourceUrl: "",
    reverse: false,
  },
  {
    tag: "ED_TECH_AI",
    tagAlign: "right" as const,
    label: "/ ROCKET_RECALL",
    title: "RocketRecall",
    description:
      "AI-powered flashcard generation platform. Features automated LLM evaluation workflows and integrated GCS for dynamic image generation and cloud storage handling. Built with Django and optimized for educational workflows.",
    techs: ["LLM Eval", "GCS", "Django"],
    gradient:
      "radial-gradient(ellipse 60% 70% at 30% 60%, rgba(0,255,136,0.05) 0%, transparent 55%), radial-gradient(ellipse 50% 40% at 70% 20%, rgba(0,180,90,0.04) 0%, transparent 50%)",
    liveUrl: "",
    sourceUrl: "https://github.com/anuragdass",
    reverse: true,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      aria-label="Selected projects"
      className="py-32 px-8 max-w-7xl mx-auto"
    >
      <div className="flex justify-between items-end mb-20">
        <div>
          <h2 className="font-headline text-4xl font-bold tracking-tighter">
            03 // SELECTED PROJECTS
          </h2>
          <p className="text-on-surface-variant font-body mt-2">
            Production-grade AI and scalable architectures.
          </p>
        </div>
      </div>

      <div className="space-y-32">
        {PROJECTS.map((p) => (
          <article
            key={p.title}
            className={`flex flex-col gap-12 items-center ${
              p.reverse ? "md:flex-row-reverse" : "md:flex-row"
            }`}
          >
            {/* Abstract image card */}
            <div className="w-full md:w-3/5 aspect-video bg-surface-container-high relative overflow-hidden ghost-border group">
              {/* Atmospheric gradient background */}
              <div
                className="absolute inset-0"
                style={{ background: p.gradient }}
              />
              {/* Subtle grid lines */}
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(0,255,136,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,136,0.5) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />
              {/* Scan line overlay */}
              <div className="scanlines" />
              {/* Project tag */}
              <div
                className={`absolute top-6 ${p.tagAlign === "right" ? "right-6" : "left-6"} font-label bg-background px-3 py-1 text-[10px] tracking-widest text-primary border border-primary/20 z-10`}
              >
                {p.tag}
              </div>
            </div>

            {/* Text */}
            <div className="w-full md:w-2/5">
              <div className="font-label text-primary text-xs mb-4">{p.label}</div>
              <h3 className="font-headline text-3xl font-bold mb-6 tracking-tight">
                {p.title}
              </h3>
              <p className="text-on-surface-variant mb-8 leading-relaxed">
                {p.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-10">
                {p.techs.map((t, i) => (
                  <span key={t}>
                    <span className="text-[10px] font-label text-on-surface/40 uppercase tracking-widest">
                      {t}
                    </span>
                    {i < p.techs.length - 1 && (
                      <span className="text-[10px] font-label text-on-surface/40 uppercase tracking-widest ml-2">
                        /
                      </span>
                    )}
                  </span>
                ))}
              </div>

              {p.liveUrl && (
                <a
                  href={p.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-headline font-bold text-sm tracking-widest flex items-center gap-2 group mb-4"
                >
                  VIEW_DETAILS{" "}
                  <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </a>
              )}
              {p.sourceUrl && (
                <a
                  href={p.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-headline font-bold text-sm tracking-widest flex items-center gap-2 group"
                >
                  VIEW_SOURCE{" "}
                  <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
