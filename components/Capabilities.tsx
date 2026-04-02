const CAPABILITIES = [
  {
    index: "01",
    title: "Agentic RAG",
    description: "Multi-agent workflows with LangGraph for complex reasoning and retrieval pipelines.",
  },
  {
    index: "02",
    title: "AI Pipelines",
    description: "End-to-end automation from data ingestion to LLM inference in production.",
  },
  {
    index: "03",
    title: "Vector Storage",
    description: "pgVector implementation for semantic search at scale.",
  },
  {
    index: "04",
    title: "Data Backends",
    description: "Complex schemas, caching strategies, and high-throughput API design.",
  },
];

export default function Capabilities() {
  return (
    <section
      id="capabilities"
      aria-label="Capabilities"
      className="px-6 md:px-8 lg:px-16 py-24"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-12">
          <span className="font-mono text-[10px] tracking-[0.2em] text-[#00ff88] uppercase">
            02 // CAPABILITIES
          </span>
          <h2 className="font-headline font-bold text-3xl md:text-4xl text-[#f9f5f8] mt-2 tracking-[-0.02em]">
            What I Build
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[rgba(118,117,119,0.15)]">
          {CAPABILITIES.map((cap) => (
            <article
              key={cap.index}
              className="cap-card group bg-[#0e0e10] p-6 flex flex-col gap-4 hover:bg-[#141416] transition-colors cursor-default"
            >
              <span className="font-mono text-[10px] tracking-[0.2em] text-[#8c8c8e] uppercase">
                {cap.index}
              </span>
              {/* Expanding green bar */}
              <span className="cap-bar" aria-hidden="true" />
              <h3 className="font-headline font-semibold text-lg text-[#f9f5f8] tracking-tight">
                {cap.title}
              </h3>
              <p className="font-body text-sm text-[#8c8c8e] leading-relaxed">
                {cap.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
