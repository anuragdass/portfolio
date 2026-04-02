export default function Stack() {
  return (
    <section id="stack" aria-label="Technology stack" className="py-32 px-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-20 border-b border-outline-variant/30 pb-8">
        <h2 className="font-headline text-4xl font-bold tracking-tighter">
          01 // THE STACK
        </h2>
        <div className="font-label text-on-surface-variant text-xs tracking-widest uppercase">
          Verified Expertise
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Core Languages & Web */}
        <div className="md:col-span-2 bg-surface-container-low p-8 ghost-border hover:border-primary/30 transition-all">
          <div className="font-label text-primary text-xs tracking-widest mb-8">
            / CORE_LANGUAGES_&amp;_WEB
          </div>
          <div className="flex flex-wrap gap-4">
            {["PYTHON", "DJANGO", "FASTAPI"].map((t) => (
              <span
                key={t}
                className="px-4 py-2 bg-surface-container-high border border-outline-variant/20 font-label text-sm text-on-surface"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Gen AI Engineering */}
        <div className="md:col-span-2 bg-surface-container-low p-8 ghost-border hover:border-primary/30 transition-all">
          <div className="font-label text-primary text-xs tracking-widest mb-8">
            / GEN_AI_ENGINEERING
          </div>
          <div className="flex flex-wrap gap-4">
            {["LANGCHAIN", "LANGGRAPH", "VERTEX AI", "RAG SYSTEMS"].map((t) => (
              <span
                key={t}
                className="px-4 py-2 bg-primary/10 border border-primary/30 text-primary font-label text-sm"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Data Persistence */}
        <div className="md:col-span-1 bg-surface-container-low p-8 ghost-border hover:border-primary/30 transition-all">
          <div className="font-label text-primary text-xs tracking-widest mb-8">
            / DATA_PERSISTENCE
          </div>
          <ul className="space-y-4 font-label text-sm text-on-surface-variant">
            {["POSTGRESQL", "PGVECTOR", "REDIS", "MSSQL"].map((t) => (
              <li key={t}>/ {t}</li>
            ))}
          </ul>
        </div>

        {/* Cloud & Infra */}
        <div className="md:col-span-3 bg-surface-container-low p-8 ghost-border hover:border-primary/30 transition-all flex flex-col justify-between">
          <div className="font-label text-primary text-xs tracking-widest mb-8">
            / CLOUD_&amp;_INFRA
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { sub: "GCP Ecosystem", name: "CLOUD RUN" },
              { sub: "Virtualization", name: "DOCKER" },
              { sub: "Asynchronous", name: "CELERY" },
              { sub: "Pipeline", name: "GITHUB ACTIONS" },
            ].map(({ sub, name }) => (
              <div key={name} className="flex flex-col">
                <span className="text-xs text-on-surface-variant mb-1 uppercase tracking-tighter">
                  {sub}
                </span>
                <span className="font-label text-on-surface">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
