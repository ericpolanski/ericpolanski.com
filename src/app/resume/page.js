export default function ResumePage() {
  // PDF view: embed PDF via iframe for reliable loading
  return (
    <section className="pt-[var(--header-height)] w-full flex flex-col items-center px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">Resume</h1>
      <a
        href="/eric_polanski_resume_april_2025.pdf"
        download="Eric Polanski Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 bg-primary text-onPrimary rounded shadow hover:bg-primaryHover transition mb-6"
      >
        Download Resume
      </a>

      <div className="w-full max-w-4xl h-[80vh]">
        <iframe
          src="/eric_polanski_resume_april_2025.pdf#toolbar=0"
          className="w-full h-full border-2 border-[rgb(var(--foreground-rgb))]"
        />
      </div>
    </section>
  );
}