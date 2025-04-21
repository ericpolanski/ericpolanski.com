import Image from 'next/image';
import { resume } from '@/data/resume';

export default function Home() {
  return (
    <section className="pt-[var(--header-height)] w-full flex flex-col items-center px-4">
      {/* Intro with image and blurb */}
      <div className="max-w-4xl w-full flex flex-col md:flex-row items-center md:space-x-8">
        <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
          <Image
            src="/eric-images/eric-profile.jpg"
            alt="Eric's professional headshot"
            width={400}
            height={400}
            className="rounded-full shadow-lg object-cover"
            priority
            placeholder="blur"
            blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAAUEBA=="
          />
        </div>
        <div className="w-full md:w-1/2 max-w-prose">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 underline-animate text-balance">
            Hi, I&apos;m <span className="underline-animate">{resume.name}</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-500 italic mb-4">
            Full-Stack Engineer specializing in React & Data‑Driven UIs
          </p>
          <p className="text-lg leading-relaxed">
            I'm a Full-Stack Software Engineer with expertise across both front-end and back-end development.
          </p>
          <p className="text-lg leading-relaxed">
            I craft end-to-end solutions that merge intuitive user interfaces with robust, scalable systems to deliver impactful products.
          </p>
          {/* Call-to-action */}
          <div className="mt-6 flex space-x-4">
            <a
              href="/eric_polanski_resume_april_2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-primary text-onPrimary rounded shadow hover:bg-primaryHover transition"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
      {/* Resume sections */}
      <div className="max-w-4xl w-full mt-12 space-y-12">
        {/* Professional Experience */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Professional Experience</h2>
          <div className="space-y-6">
            {resume.experiences.map((exp, idx) => (
              <div key={idx}>
                <h3 className="text-xl font-bold">
                  {exp.title} at <span className="italic">{exp.company}</span>
                </h3>
                <p className="italic text-base mb-2">
                  {exp.start} - {exp.end}
                  {exp.location ? `, ${exp.location}` : ''}
                </p>
                <ul className="list-disc list-inside pl-4 text-base leading-relaxed space-y-1">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
        {/* Education */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Education</h2>
          <div className="space-y-6">
            {resume.education.map((edu, idx) => (
              <div key={idx}>
                <h3 className="text-xl font-bold">{edu.institution}</h3>
                <p className="italic text-base mb-2">
                  {edu.start} - {edu.end}
                </p>
                <p className="text-base leading-relaxed mb-2">
                  {edu.degree || edu.description}
                  {edu.gpa ? `, GPA ${edu.gpa}` : ''}
                </p>
                {edu.activities && (
                  <ul className="list-disc list-inside pl-4 text-base leading-relaxed space-y-1">
                    {edu.activities.map((act, aIdx) => (
                      <li key={aIdx}>{act}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>
        {/* Skills */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-balance">Skills</h2>
          <div className="space-y-6">
            {/* Visualize each skill category with a progress bar and badges */}
            {Object.entries(resume.skills).map(([cat, skills], idx) => {
              // Default proficiency % by category
              const levelMap = { programming: 85, computer: 70, languages: 90 };
              const pct = levelMap[cat] || 50;
              return (
                <div key={idx} className="w-full">
                  <div className="flex justify-between mb-1">
                    <span className="font-semibold capitalize">{cat}</span>
                    <span className="text-sm text-gray-600">{pct}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full mb-2">
                    <div
                      className="bg-primary h-2 rounded-full transition-width duration-500"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-sm bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </section>
  );
}
