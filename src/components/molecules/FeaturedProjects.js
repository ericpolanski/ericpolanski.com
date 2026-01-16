import Link from 'next/link';
import ProjectCard from './project-card';

/**
 * FeaturedProjects - Showcase of top AI projects for homepage
 */

const featuredProjects = [
  {
    title: 'Teddy Talk',
    description:
      'Conversational AI companion using OpenAI GPT with context-window management for persona consistency. Features real-time content moderation via Moderation API with SMS alerts to parents.',
    thumbnail: '/projects/TeddyTalk.png',
    badges: ['OpenAI GPT', 'Next.js', 'Moderation API'],
    repoUrl: 'https://github.com/ericpolanski/teddy-talk',
  },
  {
    title: 'FAAM Newsletter',
    description:
      'AI-driven reporting tool for the Fellowship of Afro-American Men (FAAM) Basketball League that transforms raw stats into readable newsletters using NLP and predictive modeling.',
    thumbnail: '/projects/BasketballNewsletter.png',
    badges: ['Python', 'NLP', 'Predictive Modeling'],
  },
  {
    title: 'DoughJo',
    description:
      'Pizza-making assistant featuring a Google Gemini chatbot for step-by-step guidance, ingredient substitutions, and troubleshooting common baking issues.',
    thumbnail: '/projects/Doughjo.png',
    badges: ['Google Gemini', 'React', 'Prompt Engineering'],
    repoUrl: 'https://github.com/NU394-s2025TTh/Tribe-Z',
  },
];

export default function FeaturedProjects() {
  return (
    <div className="w-full max-w-4xl mx-auto py-8 fade-in">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-sm font-medium text-primary tracking-wide uppercase">
          Featured AI Projects
        </h2>
        <Link
          href="/projects"
          className="text-sm font-medium text-primary hover:text-primaryHover transition-colors flex items-center gap-1"
        >
          View All
          <span className="transform hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {featuredProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}
