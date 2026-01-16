import { ProjectCard } from '@/components';

export default function Projects() {
  return (
    <section className="pt-[var(--header-height)] w-full flex flex-col items-center px-4">
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-balance">Projects</h1>

        {/* AI & ML Projects */}
        <h2 className="text-sm font-medium text-primary mb-4 tracking-wide uppercase">
          AI & Machine Learning
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 mb-12">
          <ProjectCard
            key="Teddy Talk"
            project={{
              title: 'Teddy Talk',
              course: 'COMP_SCI 338',
              description:
                'Built a conversational AI companion using OpenAI GPT with custom context-window management for persona consistency across 50+ turn conversations. Implemented real-time content moderation via OpenAI Moderation API with SMS alerts (TextBelt) to notify parents of inappropriate content.',
              thumbnail: '/projects/TeddyTalk.png',
              badges: ['OpenAI GPT', 'Moderation API', 'Next.js', 'React'],
              repoUrl: 'https://github.com/ericpolanski/teddy-talk',
            }}
          />

          <ProjectCard
            key="FAAM Newsletter"
            project={{
              title: 'FAAM Newsletter',
              course: 'Personal Project',
              description:
                'Built an AI-driven reporting tool for the Fellowship of Afro-American Men (FAAM) Basketball League that transforms raw game statistics into readable newsletters. Leverages NLP for text generation and predictive modeling to surface key performance insights, automating hours of manual reporting.',
              thumbnail: '/projects/BasketballNewsletter.png',
              badges: ['Python', 'NLP', 'Predictive Modeling', 'Data Pipeline'],
            }}
          />

          <ProjectCard
            key="DoughJo"
            project={{
              title: 'DoughJo',
              course: 'COMP_SCI 394',
              description:
                'Developed a pizza-making assistant featuring a Google Gemini chatbot that provides step-by-step guidance, ingredient substitutions, and troubleshooting for 15+ common baking issues. Built with prompt engineering for contextual recipe understanding.',
              thumbnail: '/projects/Doughjo.png',
              badges: ['Google Gemini', 'Prompt Engineering', 'React'],
              repoUrl: 'https://github.com/NU394-s2025TTh/Tribe-Z',
            }}
          />
        </div>

        {/* Web Development Projects */}
        <h2 className="text-sm font-medium text-primary mb-4 tracking-wide uppercase">
          Web Development
        </h2>
        <div className="grid gap-8 sm:grid-cols-2">
          <ProjectCard
            key="BugSnacks"
            project={{
              title: 'BugSnacks',
              course: 'COMP_SCI 394',
              description:
                'Built a peer debugging platform for Northwestern students to request and provide code review help. Features real-time request matching, user authentication, and a reputation system to incentivize quality assistance.',
              thumbnail: '/projects/BugSnacks.png',
              badges: ['React', 'Firebase', 'Real-time DB'],
              liveUrl: 'https://bugsnacks2.web.app/',
            }}
          />

          <ProjectCard
            key="Newsfeed"
            project={{
              title: 'Newsfeed',
              course: 'COMP_SCI 303',
              description:
                'Full-stack social platform with Django backend and Next.js frontend. Implemented GraphQL API for efficient data fetching, user authentication with session management, and CRUD operations for posts and comments.',
              thumbnail: '/projects/Newsfeed.png',
              badges: ['Django', 'GraphQL', 'Next.js', 'Authentication'],
              repoUrl: 'https://github.com/ericpolanski/newsfeed',
            }}
          />
        </div>
      </div>
    </section>
  );
}
