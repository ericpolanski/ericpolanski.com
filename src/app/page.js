import Image from 'next/image';
import ResumeInfo from '@/components/organisms/resumeinfo';
import { Achievements, FeaturedProjects } from '@/components';

export default function Home() {
  return (
    <section className="pt-[var(--header-height)] w-full flex flex-col items-center px-4">
      {/* Hero Section */}
      <div className="max-w-4xl w-full flex flex-col md:flex-row items-center md:space-x-12 py-8 md:py-12">
        {/* Profile Image */}
        <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0 fade-in">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-primaryHover rounded-full blur-2xl opacity-20 scale-110"></div>
            <Image
              src="/eric-images/eric-podium.jpg"
              alt="Eric Polanski - AI Engineer"
              width={350}
              height={350}
              className="relative rounded-full shadow-xl object-cover border-4 border-white/10"
              priority
              placeholder="blur"
              blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAAUEBA=="
            />
          </div>
        </div>

        {/* Hero Content */}
        <div className="w-full md:w-1/2 max-w-prose fade-in stagger-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-balance leading-tight">
            Hi, I&apos;m{' '}
            <span className="underline-animate gradient-text">Eric Polanski</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-60 font-medium mb-6">
            AI Engineer
          </p>
          <p className="text-base md:text-lg leading-relaxed mb-8 opacity-80">
            I build production AI systems that transform unstructured data into actionable insights.
            At AbbVie, I architected RAG pipelines achieving 90% data coverage. At Paper Tube Co.,
            I automated customer communications, reducing latency by 40% and saving 15+ hours monthly.
          </p>

          {/* Call-to-action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="/projects"
              className="px-8 py-3 bg-primary text-onPrimary rounded-lg shadow-lg hover:bg-primaryHover hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 font-medium text-center"
            >
              View Projects
            </a>
            <a
              href="/contact"
              className="px-8 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-onPrimary transform hover:-translate-y-0.5 transition-all duration-200 font-medium text-center"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>

      {/* Key Achievements Section */}
      <Achievements />

      {/* Featured AI Projects Section */}
      <FeaturedProjects />

      {/* Resume Info Section */}
      <ResumeInfo />
    </section>
  );
}
