export default function Footer() {
  return (
    <footer id="contact" className="bg-[#0f2a2a]  py-20 sm:py-24">
      <div className="mx-auto max-w-[1080px] px-5 sm:px-8">
        <div className="max-w-[640px]">
          <h2 className="font-display text-[30px] leading-[1.12] sm:text-[46px]  text-brass">
            Let&apos;s open a file.
          </h2>
          <p className="mt-4 max-w-[52ch] text-[15.5px] text-brass">
            Strategic partnerships, investment, mediation matters, or just a
            conversation about building something new — every connection
            starts with a first line.
          </p>
          <div className="mt-8 flex flex-wrap gap-3.5">
            <a
              href="https://www.linkedin.com/in/nagzz"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm bg-brass px-6 py-3 font-mono text-[12.5px] uppercase tracking-[0.06em] text-ink transition-colors hover:bg-[#ddbf7f]"
            >
              LinkedIn
            </a>
            <a
              href="https://www.visualytes.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm border border-brass px-6 py-3 font-mono text-[12.5px] uppercase tracking-[0.06em]  transition-colors hover:border-brass hover:text-brass"
            >
              Visualytes.com
            </a>
          </div>
        </div>

        <div className="mt-20 flex flex-wrap justify-between gap-3 border-t border- text-brass pt-6 font-mono text-[11.5px] text- text-brass">
          <span>Nagendra Mishra · Southampton, England, UK</span>
          <span>© 2026</span>
        </div>
      </div>
    </footer>
  );
}
