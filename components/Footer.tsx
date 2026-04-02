export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      aria-label="Site footer"
      className="px-6 md:px-8 lg:px-16 py-8 border-t border-[rgba(118,117,119,0.12)]"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-[10px] tracking-[0.15em] text-[#3a3a3c] uppercase">
          © {year} Anurag Das — All Rights Reserved
        </p>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/anuragdas"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="font-mono text-[10px] tracking-widest text-[#3a3a3c] hover:text-[#00ff88] transition-colors uppercase"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/anuragdas"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="font-mono text-[10px] tracking-widest text-[#3a3a3c] hover:text-[#00ff88] transition-colors uppercase"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
