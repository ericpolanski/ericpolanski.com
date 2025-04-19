import { resume } from '@/data/resume';

export default function Projects() {
  return (
    <section className="pt-[80px] w-full flex flex-col items-center px-4">
      <div className="max-w-4xl w-full space-y-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Projects</h1>
        {resume.projects.map((proj, idx) => (
          <div key={idx}>
            <h2 className="text-2xl font-semibold">{proj.title}</h2>
            <p className="italic text-base mb-2">
              {proj.course} – {proj.location}
            </p>
            <p className="text-base leading-relaxed">{proj.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}