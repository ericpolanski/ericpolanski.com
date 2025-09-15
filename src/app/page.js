import Image from 'next/image';
import ResumeInfo from '@/components/organisms/resumeinfo';

export default function Home() {
  return (
    <section className="pt-[var(--header-height)] w-full flex flex-col items-center px-4">
      {/* Intro with image and blurb */}
      <div className="max-w-4xl w-full flex flex-col md:flex-row items-center md:space-x-8">
        <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
          <Image
            src="/eric-images/eric-podium.jpg"
            alt="Eric's professional headshot"
            width={400}
            height={400}
            className="rounded-full shadow-lg object-cover"
            priority
            placeholder="blur"
            blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAAUEBA=="
          />
        </div>
        <div className="w-full md:w-1/2 max-w-prose">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 underline-animate text-balance">
            Hi, I'm <br />
            <span className="underline-animate">Eric Polanski</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-500 italic mb-4">
            AI Engineer
          </p>
          <p className="text-lg leading-relaxed">
            I specialize in building intelligent, automated solutions that streamline business processes and unlock new possibilities. 
            With a strong foundation in artificial intelligence, I design, develop, and deploy robust applications and tools powered by modern language models for business services.
          </p>
          <p className="text-lg leading-relaxed">
            
          </p>
          {/* Call-to-action */}
          <div className="mt-6 flex space-x-4">
            <a
              href="/resume"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-primary text-onPrimary rounded shadow hover:bg-primaryHover transition"
            >
              View Resume
            </a>
          </div>
        </div>
      </div>
      <ResumeInfo />
    </section>
  );
}
