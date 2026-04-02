const CAPABILITIES = [
  {
    title: "AGENTIC RAG",
    description:
      "Developing advanced multi-agent workflows using LangGraph for complex decision making.",
  },
  {
    title: "AI PIPELINES",
    description:
      "End-to-end automation of model inference, fine-tuning workflows, and data orchestration.",
  },
  {
    title: "VECTOR STORAGE",
    description:
      "Implementing high-performance vector search using pgvector and optimized embedding strategies.",
  },
  {
    title: "DATA BACKENDS",
    description:
      "Architecting complex schemas and caching strategies for data-heavy enterprise applications.",
  },
];

export default function Capabilities() {
  return (
    <section
      id="capabilities"
      aria-label="Capabilities"
      className="bg-surface-container-lowest py-32 px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="font-headline text-4xl font-bold tracking-tighter mb-4">
            02 // CAPABILITIES
          </h2>
          <p className="text-on-surface-variant font-body max-w-lg">
            Advanced backend solutions for high-stakes digital infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {CAPABILITIES.map(({ title, description }) => (
            <div key={title} className="group">
              {/* Expanding green bar */}
              <div className="h-1 w-8 bg-primary mb-6 group-hover:w-full transition-all duration-500" />
              <h3 className="font-headline text-xl font-bold mb-4 tracking-tight">
                {title}
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
