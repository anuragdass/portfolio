const ROLES = [
  {
    title: "SOFTWARE ENGINEER",
    company: "CYNET",
    period: "DEC 2025 — PRESENT",
    description:
      "Architecting Agentic RAG systems using LangGraph and Vertex AI. Focused on building autonomous reasoning layers for complex enterprise data environments.",
    current: true,
  },
  {
    title: "SOFTWARE ENGINEER",
    company: "RUBICOIT",
    period: "SEP 2024 — DEC 2025",
    description:
      "Built LLM-driven RAG solutions and optimized high-throughput background tasks with Celery and Redis. Deployed scalable microservices on GCP Cloud Run.",
    current: false,
  },
  {
    title: "ASSOCIATE SOFTWARE ENGINEER",
    company: "RUBICOIT",
    period: "NOV 2023 — SEP 2024",
    description:
      "Developed robust backend reporting pipelines using Django and MSSQL, focusing on query optimization and reliable data delivery.",
    current: false,
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      aria-label="Work experience"
      className="py-32 px-8 bg-surface-container-low border-y border-outline-variant/10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-20">
          {/* Left heading */}
          <div className="md:w-1/3">
            <h2 className="font-headline text-4xl font-bold tracking-tighter mb-4">
              04 // HISTORY
            </h2>
            <p className="text-on-surface-variant font-body leading-relaxed">
              Professional trajectory in high-performance computing and AI
              architecture.
            </p>
          </div>

          {/* Timeline */}
          <div className="md:w-2/3 space-y-16">
            {ROLES.map((role) => (
              <div
                key={`${role.title}-${role.company}`}
                className={`relative pl-10 border-l ${
                  role.current
                    ? "border-primary/30"
                    : "border-outline-variant/30"
                }`}
              >
                {/* Dot */}
                <div
                  className={`absolute left-[-5px] top-0 w-[9px] h-[9px] ${
                    role.current ? "bg-primary" : "bg-outline-variant"
                  }`}
                />

                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-headline text-xl font-bold text-on-surface">
                      {role.title}
                    </h3>
                    <div
                      className={`font-label text-xs tracking-widest mt-1 ${
                        role.current ? "text-primary" : "text-on-surface-variant"
                      }`}
                    >
                      {role.company}
                    </div>
                  </div>
                  <span className="font-label text-on-surface-variant text-xs shrink-0 ml-4">
                    {role.period}
                  </span>
                </div>

                <p className="text-on-surface-variant text-sm leading-relaxed max-w-xl">
                  {role.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
