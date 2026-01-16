'use client';

import { useEffect, useRef } from 'react';

/**
 * TimelineItem - Individual experience entry with scroll-triggered animation
 */
function TimelineItem({ experience, isLast }) {
  const itemRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={itemRef}
      className="relative pl-8 pb-8 group opacity-0 translate-y-6 transition-all duration-[625ms] ease-out [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0"
    >
      {/* Vertical line connector */}
      {!isLast && (
        <div className="absolute left-[5px] top-6 bottom-0 w-0.5 bg-gradient-to-b from-primary to-primary/30" />
      )}

      {/* Timeline dot */}
      <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-primary border-2 border-[rgb(var(--background-start-rgb))] shadow-md group-hover:scale-125 transition-transform duration-200" />

      {/* Content card */}
      <div className="bg-[rgb(var(--background-start-rgb))] border border-current/20 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow duration-200">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
          <div>
            <h3 className="text-lg font-bold text-balance">{experience.title}</h3>
            <p className="text-primary font-medium">{experience.company}</p>
          </div>
          <div className="text-sm opacity-60 sm:text-right shrink-0">
            <p className="font-medium">
              {experience.start} - {experience.end}
            </p>
            <p>{experience.location}</p>
          </div>
        </div>

        {/* Bullet points */}
        {experience.bullets && experience.bullets.length > 0 && (
          <ul className="space-y-2">
            {experience.bullets.map((bullet, index) => (
              <li key={index} className="text-sm opacity-80 leading-relaxed flex gap-2">
                <span className="text-primary shrink-0 mt-1">•</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

/**
 * Timeline - Vertical timeline component for displaying career progression
 */
export default function Timeline({ experiences, title = 'Professional Experience' }) {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
        <span className="h-1 w-8 bg-primary rounded-full"></span>
        {title}
      </h2>
      <div className="relative">
        {experiences.map((experience, index) => (
          <TimelineItem
            key={`${experience.company}-${experience.start}`}
            experience={experience}
            isLast={index === experiences.length - 1}
          />
        ))}
      </div>
    </section>
  );
}
