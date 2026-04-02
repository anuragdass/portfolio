type Role = {
  title: string;
  company: string;
  period: string;
  bullets: string[];
  current?: boolean;
};

const ROLES: Role[] = [
  {
    title: "Software Engineer",
    company: "Cynet",
    period: "DEC 2025 — PRESENT",
    current: true,
    bullets: [
      "Architecting agentic RAG systems with LangGraph and Vertex AI for enterprise NL-to-SQL.",
      "Designing multi-agent orchestration pipelines with sub-200ms end-to-end latency.",
      "Implementing pgVector semantic search on PostgreSQL at production scale.",
    ],
  },
  {
    title: "Software Engineer",
    company: "Rubicoit",
    period: "SEP 2024 — DEC 2025",
    bullets: [
      "Built LLM-driven RAG pipelines serving thousands of daily queries.",
      "Designed Celery + Redis task queues for async document processing.",
      "Deployed microservices to GCP Cloud Run with GitHub Actions CI/CD.",
    ],
  },
  {
    title: "Associate Software Engineer",
    company: "Rubicoit",
    period: "NOV 2023 — SEP 2024",
    bullets: [
      "Developed Django REST APIs backed by MSSQL with complex reporting queries.",
      "Built automated data pipeline integrations reducing manual effort by 60%.",
      "Led migration of legacy SOAP services to RESTful architecture.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      aria-label="Work experience"
      className="px-6 md:px-8 lg:px-16 py-24"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <span className="font-mono text-[10px] tracking-[0.2em] text-[#00ff88] uppercase">
            04 // HISTORY
          </span>
          <h2 className="font-headline font-bold text-3xl md:text-4xl text-[#f9f5f8] mt-2 tracking-[-0.02em]">
            Where I&apos;ve Worked
          </h2>
        </div>

        {/* Timeline */}
        <ol className="relative border-l border-[rgba(118,117,119,0.2)] flex flex-col gap-12" aria-label="Career timeline">
          {ROLES.map((role, i) => (
            <li key={i} className="ml-6 relative">
              {/* Timeline dot */}
              <span
                className={`absolute -left-[1.625rem] top-1 w-3 h-3 border-2 ${
                  role.current
                    ? "bg-[#00ff88] border-[#00ff88]"
                    : "bg-[#0e0e10] border-[rgba(118,117,119,0.4)]"
                }`}
                aria-hidden="true"
              />

              <div className="flex flex-col gap-3">
                {/* Period */}
                <span className="font-mono text-[10px] tracking-[0.2em] text-[#8c8c8e] uppercase">
                  {role.period}
                </span>

                {/* Title & Company */}
                <div>
                  <h3
                    className={`font-headline font-bold text-lg tracking-tight ${
                      role.current ? "text-[#00ff88]" : "text-[#f9f5f8]"
                    }`}
                  >
                    {role.title}
                  </h3>
                  <p className="font-mono text-xs tracking-widest text-[#8c8c8e] uppercase mt-1">
                    @ {role.company}
                  </p>
                </div>

                {/* Bullets */}
                <ul className="flex flex-col gap-2" role="list">
                  {role.bullets.map((bullet, j) => (
                    <li key={j} className="flex gap-3 items-start">
                      <span className="font-mono text-[#00ff88] text-xs mt-0.5 shrink-0" aria-hidden="true">
                        //
                      </span>
                      <span className="font-body text-sm text-[#8c8c8e] leading-relaxed">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
