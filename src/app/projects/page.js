import { resume } from '@/data/resume';
import { ProjectCard } from '@/components';

export default function Projects() {
  return (
    <section className="pt-[var(--header-height)] w-full flex flex-col items-center px-4">
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-balance">Projects</h1>
        <div className="grid gap-8 sm:grid-cols-2">
          {resume.projects.map((proj, idx) => (
            <ProjectCard key={idx} project={proj} />
          ))}
        </div>
      </div>
    </section>
  );
}