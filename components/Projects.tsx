import Image from "next/image";

type Project = {
  index: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  liveUrl?: string;
  sourceUrl?: string;
  imageLeft: boolean;
};

const PROJECTS: Project[] = [
  {
    index: "01",
    title: "CynetGPT",
    description:
      "Vertex AI powered SQL agents that translate natural language into optimised PostgreSQL queries. Built with LangGraph multi-agent orchestration, pgVector for semantic search, and a FastAPI backend serving sub-200ms responses.",
    tags: ["Vertex AI", "LangGraph", "PostgreSQL", "FastAPI", "pgVector"],
    image: "/images/cynetgpt.jpg",
    liveUrl: "#",
    sourceUrl: "#",
    imageLeft: false,
  },
  {
    index: "02",
    title: "RocketRecall",
    description:
      "AI-powered flashcard generation with LLM-based evaluation. Ingests documents via GCS, runs through a Django pipeline, and produces spaced-repetition decks with automated difficulty scoring.",
    tags: ["Django", "LangChain", "GCS", "PostgreSQL", "Celery"],
    image: "/images/rocketrecall.jpg",
    liveUrl: "#",
    sourceUrl: "#",
    imageLeft: true,
  },
];

function Tag({ label }: { label: string }) {
  return (
    <span className="font-mono text-[10px] tracking-[0.15em] px-2 py-1 border border-[rgba(118,117,119,0.15)] text-[#8c8c8e] uppercase">
      {label}
    </span>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      aria-label="Selected projects"
      className="px-6 md:px-8 lg:px-16 py-24"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <span className="font-mono text-[10px] tracking-[0.2em] text-[#00ff88] uppercase">
            03 // SELECTED PROJECTS
          </span>
          <h2 className="font-headline font-bold text-3xl md:text-4xl text-[#f9f5f8] mt-2 tracking-[-0.02em]">
            Work I&apos;m Proud Of
          </h2>
        </div>

        {/* Project list */}
        <div className="flex flex-col gap-24">
          {PROJECTS.map((project) => (
            <article
              key={project.index}
              className={`grid grid-cols-1 md:grid-cols-10 gap-8 items-center`}
            >
              {/* Image — alternating position */}
              <div
                className={`relative md:col-span-6 overflow-hidden group ${
                  project.imageLeft ? "md:order-first" : "md:order-last"
                }`}
              >
                <div className="relative scanlines ghost-border overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    width={720}
                    height={450}
                    className="img-noir w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Text */}
              <div
                className={`md:col-span-4 flex flex-col gap-5 ${
                  project.imageLeft ? "md:order-last" : "md:order-first"
                }`}
              >
                <span className="font-mono text-[10px] tracking-[0.2em] text-[#8c8c8e] uppercase">
                  {project.index}
                </span>
                <h3 className="font-headline font-bold text-2xl md:text-3xl text-[#f9f5f8] tracking-[-0.02em]">
                  {project.title}
                </h3>
                <p className="font-body text-sm text-[#8c8c8e] leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((t) => (
                    <Tag key={t} label={t} />
                  ))}
                </div>
                <div className="flex gap-4 mt-2">
                  {project.liveUrl && project.liveUrl !== "#" && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-[10px] tracking-widest text-[#00ff88] hover:text-glow transition-all uppercase"
                    >
                      VIEW_DETAILS →
                    </a>
                  )}
                  {project.sourceUrl && project.sourceUrl !== "#" && (
                    <a
                      href={project.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-[10px] tracking-widest text-[#8c8c8e] hover:text-[#f9f5f8] transition-colors uppercase"
                    >
                      VIEW_SOURCE →
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
