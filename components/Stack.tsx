type BentoItem = {
  index: string;
  title: string;
  techs: string[];
  span?: string;
  accent?: boolean;
};

const BENTO_ITEMS: BentoItem[] = [
  {
    index: "01",
    title: "Core Languages & Web",
    techs: ["Python", "Django", "FastAPI"],
    span: "col-span-2",
  },
  {
    index: "02",
    title: "Gen AI Engineering",
    techs: ["LangChain", "LangGraph", "Vertex AI", "RAG Systems"],
    span: "col-span-2",
    accent: true,
  },
  {
    index: "03",
    title: "Data Persistence",
    techs: ["PostgreSQL", "pgVector", "Redis", "MSSQL"],
    span: "col-span-1",
  },
  {
    index: "04",
    title: "Cloud & Infra",
    techs: ["GCP Cloud Run", "Docker", "Celery", "GitHub Actions"],
    span: "col-span-3",
  },
];

function Tag({ label }: { label: string }) {
  return (
    <span className="font-mono text-[10px] tracking-[0.15em] px-2 py-1 border border-[rgba(118,117,119,0.15)] text-[#8c8c8e] uppercase">
      {label}
    </span>
  );
}

export default function Stack() {
  return (
    <section
      id="stack"
      aria-label="Technology stack"
      className="px-6 md:px-8 lg:px-16 py-24"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-12">
          <span className="font-mono text-[10px] tracking-[0.2em] text-[#00ff88] uppercase">
            01 // THE STACK
          </span>
          <h2 className="font-headline font-bold text-3xl md:text-4xl text-[#f9f5f8] mt-2 tracking-[-0.02em]">
            Technologies I Work With
          </h2>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[rgba(118,117,119,0.15)]">
          {BENTO_ITEMS.map((item) => (
            <article
              key={item.index}
              className={`${item.span ?? ""} bg-[#0e0e10] p-6 flex flex-col gap-4 hover:bg-[#141416] transition-colors`}
            >
              <span className="font-mono text-[10px] tracking-[0.2em] text-[#00ff88] uppercase">
                {item.index}
              </span>
              <h3
                className={`font-headline font-semibold text-base tracking-tight ${
                  item.accent ? "text-[#00ff88]" : "text-[#f9f5f8]"
                }`}
              >
                {item.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {item.techs.map((t) => (
                  <Tag key={t} label={t} />
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
