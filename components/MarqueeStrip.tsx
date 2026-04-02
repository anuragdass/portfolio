const ITEMS = [
  "PYTHON",
  "DJANGO",
  "FASTAPI",
  "LANGCHAIN",
  "LANGGRAPH",
  "VERTEX AI",
  "POSTGRESQL",
  "PGVECTOR",
  "CELERY",
  "REDIS",
  "GCP CLOUD RUN",
  "DOCKER",
  "RAG SYSTEMS",
  "GITHUB ACTIONS",
];

// Duplicate for seamless loop
const TRACK = [...ITEMS, ...ITEMS];

export default function MarqueeStrip() {
  return (
    <div
      aria-hidden="true"
      className="w-full overflow-hidden border-y border-outline-variant/20 bg-surface-container-lowest py-4 select-none"
    >
      <div
        className="flex gap-12 w-max"
        style={{ animation: "marquee 40s linear infinite" }}
      >
        {TRACK.map((item, i) => (
          <span
            key={i}
            className="font-mono text-xs tracking-[0.3em] text-on-surface-variant/40 uppercase whitespace-nowrap flex items-center gap-12"
          >
            {item}
            <span className="text-primary/40">//</span>
          </span>
        ))}
      </div>
    </div>
  );
}
