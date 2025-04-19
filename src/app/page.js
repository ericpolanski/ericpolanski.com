import Image from 'next/image';
import { resume } from '@/data/resume';

export default function Home() {
  return (
    <section className="pt-[80px] w-full flex flex-col items-center px-4">
      {/* Intro with image and blurb */}
      <div className="max-w-4xl w-full flex flex-col md:flex-row items-center md:space-x-8">
        <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
          <Image
            src="/eric-images/eric-profile.jpg"
            alt="Eric's professional headshot"
            width={400}
            height={400}
            className="rounded-full shadow-lg object-cover"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Hi, I'm {resume.name}</h1>
          <p className="text-lg md:text-xl text-gray-600 italic mb-4">
            Full-Stack Engineer specializing in React & Data‑Driven UIs
          </p>
          <p className="text-lg leading-relaxed">
            I'm a Full-Stack Software Engineer with expertise across both front-end and back-end development, crafting end-to-end solutions that merge intuitive user interfaces with robust, scalable systems to deliver impactful products.
          </p>
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
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <div className="text-base leading-relaxed space-y-2">
            <p>
              <span className="font-semibold">Programming:</span> {resume.skills.programming.join(', ')}
            </p>
            <p>
              <span className="font-semibold">Computer:</span> {resume.skills.computer.join(', ')}
            </p>
            <p>
              <span className="font-semibold">Languages:</span> {resume.skills.languages.join(', ')}
            </p>
          </div>
        </section>
      </div>
    </section>
  );
}
