"use client";
import { useState } from 'react';
import { resume } from '@/data/resume';
// Client-side resume PDF viewer

export default function ResumePage() {
  const [showText, setShowText] = useState(false);

  if (showText) {
    return (
      <section className="pt-[var(--header-height)] w-full flex flex-col items-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Resume (Text View)</h1>
        <button
          onClick={() => setShowText(false)}
          className="mb-4 px-4 py-2 bg-primary text-onPrimary rounded hover:bg-primaryHover transition"
        >
          View PDF
        </button>
        <article className="w-full max-w-4xl space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-2">Professional Experience</h2>
            {resume.experiences.map((exp, idx) => (
              <div key={idx} className="mb-4">
                <h3 className="text-xl font-bold">{exp.title} at {exp.company}</h3>
                <p className="italic text-base mb-1">
                  {exp.start} - {exp.end}{exp.location ? `, ${exp.location}` : ''}
                </p>
                <ul className="list-disc list-inside pl-4 text-base space-y-1">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-2">Education</h2>
            {resume.education.map((edu, idx) => (
              <div key={idx} className="mb-4">
                <h3 className="text-xl font-bold">{edu.institution}</h3>
                <p className="italic text-base mb-1">{edu.start} - {edu.end}</p>
                <p className="text-base mb-1">{edu.degree || edu.description}{edu.gpa ? `, GPA ${edu.gpa}` : ''}</p>
                {edu.activities && (
                  <ul className="list-disc list-inside pl-4 space-y-1 text-base">
                    {edu.activities.map((act, aIdx) => (
                      <li key={aIdx}>{act}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-2">Skills</h2>
            <ul className="list-disc list-inside pl-4 space-y-1 text-base">
              {Object.entries(resume.skills).map(([cat, skills]) => (
                <li key={cat}>
                  <span className="font-semibold capitalize">{cat}:</span> {skills.join(', ')}
                </li>
              ))}
            </ul>
          </section>
        </article>
      </section>
    );
  }
  // PDF view: embed PDF via iframe for reliable loading
  return (
    <section className="pt-[var(--header-height)] w-full flex flex-col items-center px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">Resume</h1>
      <div className="w-full max-w-4xl h-[80vh]">
        <iframe
          src="/eric_polanski_resume_april_2025.pdf#toolbar=0"
          className="w-full h-full border-none"
        />
      </div>
    </section>
  );
}