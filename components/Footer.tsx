export default function Footer() {
  return (
    <footer
      aria-label="Site footer"
      className="bg-[#0e0e10] flex flex-col md:flex-row justify-between items-center gap-8 w-full border-t border-[#1f1f22] py-12 px-8"
    >
      <div className="text-[#f9f5f8] font-headline font-bold uppercase tracking-widest">
        ANURAG DAS
      </div>

      <div className="font-label text-xs tracking-[0.2em] text-[#f9f5f8]/30 uppercase">
        ©2025 CORE_PROTOCOL // ALL RIGHTS RESERVED
      </div>

      <div className="flex gap-8 font-label text-xs tracking-[0.2em] uppercase">
        <a
          href="https://github.com/anuragdass"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#f9f5f8]/30 hover:text-[#00FF88] hover:tracking-[0.3em] transition-all duration-500"
        >
          GITHUB
        </a>
        <a
          href="https://linkedin.com/in/anuragdas99"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#f9f5f8]/30 hover:text-[#00FF88] hover:tracking-[0.3em] transition-all duration-500"
        >
          LINKEDIN
        </a>
      </div>
    </footer>
  );
}
