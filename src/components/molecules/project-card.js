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
        flex flex-col
        bg-[rgb(var(--background-start-rgb))]
        border border-current/20
        rounded-xl
        overflow-hidden
        shadow-md
        transform transition-all duration-300
        hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1
        glow-hover
      "
    >
      {/* Thumbnail with overlay */}
      {project.thumbnail && (
        <div className="relative w-full h-48 overflow-hidden">
          <Image
            src={project.thumbnail}
            alt={`${project.title} project thumbnail`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            priority={false}
          />
          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Quick links overlay */}
          <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
            {project.liveUrl && (
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 bg-white/90 text-gray-900 rounded-md text-sm font-medium hover:bg-white transition-colors"
              >
                Live Demo
              </Link>
            )}
            {project.repoUrl && (
              <Link
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 bg-white/90 text-gray-900 rounded-md text-sm font-medium hover:bg-white transition-colors"
              >
                Source
              </Link>
            )}
          </div>
        </div>
      )}

      {/* Content */}
      <div className="flex flex-col flex-grow p-5">
        <h3 className="text-xl font-bold text-balance mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>

        {/* Course badge if available */}
        {project.course && (
          <p className="text-xs opacity-60 mb-2 font-medium">
            {project.course}
          </p>
        )}

        {/* Tech stack badges */}
        {project.badges && (
          <div className="flex flex-wrap gap-1.5 mb-3">
            {project.badges.map((badge, i) => (
              <span
                key={i}
                className="
                  text-xs font-medium
                  bg-primary/10 text-primary
                  px-2.5 py-1
                  rounded-full
                  transition-colors
                  hover:bg-primary hover:text-onPrimary
                "
              >
                {badge}
              </span>
            ))}
          </div>
        )}

        <p className="text-sm leading-relaxed opacity-80 flex-grow">
          {project.description}
        </p>

        {/* Bottom links (visible when no thumbnail or as fallback) */}
        {!project.thumbnail && (project.liveUrl || project.repoUrl) && (
          <div className="flex gap-4 mt-4 pt-4 border-t border-current/20">
            {project.liveUrl && (
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-primary hover:text-primaryHover transition-colors flex items-center gap-1"
              >
                Live Demo
                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            )}
            {project.repoUrl && (
              <Link
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-primary hover:text-primaryHover transition-colors flex items-center gap-1"
              >
                Source Code
                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
}