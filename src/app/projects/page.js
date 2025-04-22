import { resume } from '@/data/resume';
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
            key="Walkies"
            project={{
              title: 'Walkies',
              course: 'COMP_SCI 330',
              location: 'Evanston, IL',
              start: 'September 2024',
              end: 'December 2024',
              description:
                'Designed a user interface wireframe for a mobile app to connect with students.',
              thumbnail: '/projects/walkies.png',
              badges: ['Figma', 'HCI Design'],
              liveUrl: 'https://www.figma.com/proto/pI5rea7IZ1x2JI7Ag0N2dY/HCI330-Project?node-id=20-1581&p=f&t=1yLpFM9zIRJQ0KgX-1&scaling=min-zoom&content-scaling=fixed&page-id=7%3A272',
              repoUrl: ''
            }}
          />

          <ProjectCard
            key="Lumi‑Ride"
            project={{
              title: 'Lumi‑Ride',
              course: 'DSGN 106',
              location: 'Evanston, IL',
              start: 'January 2024',
              end: 'April 2024',
              description:
                'A wheelchair illumination device to improve the ability of cerebral palsy patients with impaired dexterity to navigate in a motorized wheelchair.',
              thumbnail: '/projects/lumi-ride.png',
              badges: ['Arduino', 'Autodesk Fusion 360', '3D-Printing'],
              liveUrl: '',
              repoUrl: ''
            }}
          />

          <ProjectCard
            key="FrostGuard"
            project={{
              title: 'FrostGuard',
              course: 'DSGN 106',
              location: 'Evanston, IL',
              start: 'April 2024',
              end: 'June 2024',
              description:
                'Modified a chicken coop to reduce freezing in the chicken drinking system.',
              thumbnail: '/projects/frostguard.png',
              badges: ['Autodesk Fusion 360', '3D-Printing'],
              liveUrl: '',
              repoUrl: ''
            }}
          />
        </div>
      </div>
    </section>
  );
}