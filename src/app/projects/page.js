import { ProjectCard } from '@/components';

export default function Projects() {
  return (
    <section className="pt-[var(--header-height)] w-full flex flex-col items-center px-4">
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-balance">Projects</h1>

        {/* static examples with new shape */}
        <div className="grid gap-8 sm:grid-cols-2">
          <ProjectCard
            key="Teddy Talk"
            project={{
              title: 'Teddy Talk',
              course: 'COMP_SCI 338',
              location: 'Evanston, IL',
              start: 'January 2025',
              end: 'March 2025',
              description:
                'Utilized OpenAI models to create a teddy bear which uses AI to converse with a child.',
              thumbnail: '/projects/TeddyTalk.png',
              badges: ['OpenAI', 'React', 'Prompt Engineering'],
              liveUrl: '',
              repoUrl: 'https://github.com/ericpolanski/teddy-talk'
            }}
          />

          <ProjectCard
            key="DoughJo"
            project={{
              title: 'DoughJo',
              course: 'COMP_SCI 394',
              location: 'Evanston, IL',
              start: 'April 2025',
              end: 'June 2025',
              description:
                'Developed a web application for home pizza makers, featuring an AI chatbot to support user guidance.',
              thumbnail: '/projects/Doughjo.png',
              badges: ['Google Gemini', 'React', 'Web Development', 'Prompt Engineering'],
              liveUrl: 'https://pizza-app-394.web.app/',
              repoUrl: ''
            }}
          />

          <ProjectCard
            key="BugSnacks"
            project={{
              title: 'BugSnacks',
              course: 'COMP_SCI 394',
              location: 'Evanston, IL',
              start: 'April 2025',
              end: 'June 2025',
              description:
                'A service for Northwestern students to help debug one another’s projects.',
              thumbnail: '/projects/BugSnacks.png',
              badges: ['React', 'Web Development', 'Firebase'],
              liveUrl: 'https://bugsnacks2.web.app/',
              repoUrl: ''
            }}
          />

          <ProjectCard
            key="Newsfeed"
            project={{
              title: 'Newsfeed',
              course: 'COMP_SCI 303',
              location: 'Evanston, IL',
              start: 'April 2025',
              end: 'June 2025',
              description:
                'A newsfeed application that allows users to post and interact with content.',
              thumbnail: '/projects/Newsfeed.png',
              badges: ['Django', 'User Authentication', 'GraphQL', 'Next.js'],
              liveUrl: '',
              repoUrl: 'https://github.com/ericpolanski/newsfeed'
            }}
          />
        </div>
      </div>
    </section>
  );
}