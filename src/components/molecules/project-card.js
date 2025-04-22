"use client";
import Image from "next/image";
import Link from "next/link";

/**
 * ProjectCard displays a project thumbnail, title, badges, description, and links.
 */
export default function ProjectCard({ project }) {
  return (
    <div
    className="
        group
        text-sm
        bg-[rgb(var(--background-start-rgb))]
        border border-white dark:border-gray-700
        shadow
        px-2 py-1
        rounded-lg
        overflow-hidden
        transform transition duration-300
        hover:shadow-lg hover:scale-105
      "
    >
      {project.thumbnail && (
        <div className="relative w-full h-48">
          <Image
            src={project.thumbnail}
            alt={`Thumbnails are a work in progress`}
            fill
            className="object-cover group-hover:opacity-90 transition-opacity duration-300"
            priority={false}
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-balance mb-2">{project.title}</h3>
        {project.badges && (
          <div className="flex flex-wrap gap-2 mb-4">
            {project.badges.map((badge, i) => (
              <span
                key={i}
                className="text-sm bg-primary text-onPrimary rounded shadow px-2 py-1 rounded transition"
              >
                {badge}
              </span>
            ))}
          </div>
        )}
        <p className="text-base leading-relaxed mb-4">{project.description}</p>
        <div className="flex space-x-4">
          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Live Demo →
            </Link>
          )}
          {project.repoUrl && (
            <Link
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Source Code →
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}