import Image from 'next/image';

export default function About() {
  return (
    <section className="pt-[var(--header-height)] w-full flex justify-center px-4">
      <div className="max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-balance">About</h1>
        <div className="flex flex-col md:flex-row items-start md:space-x-12">
          {/* Image section */}
          <div className="w-full md:w-2/5 flex justify-center mb-8 md:mb-0 shrink-0">
            <Image
              src="/eric-images/eric-iceland.jpg"
              alt="Eric in Iceland"
              width={500}
              height={400}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
          {/* Text sections */}
          <div className="w-full md:w-3/5 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-3 text-balance">My Journey into AI</h2>
              <p className="text-base leading-relaxed mb-3">
                I discovered my passion for AI during my first bioinformatics internship at AbbVie in 2023,
                where I saw firsthand how machine learning could accelerate scientific discovery.
                Automating data pipelines and building tools that saved researchers hours of manual work
                showed me the real-world impact AI can have.
              </p>
              <p className="text-base leading-relaxed">
                Since then, I&apos;ve focused on building AI systems that solve practical problems, from
                RAG pipelines that standardize medical data to conversational AI that keeps children safe.
                I&apos;m driven by the challenge of turning complex, unstructured information into
                actionable insights.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-3 text-balance">Education</h2>
              <p className="text-base leading-relaxed mb-3">
                I&apos;ve completed my B.S. in Computer Science with an AI concentration at
                Northwestern University (December 2025). Before Northwestern, I spent two years at
                College of Lake County where I served as Student Government President and founded
                the Chess Club.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-3 text-balance">Outside of Work</h2>
              <p className="text-base leading-relaxed">
                When I&apos;m not coding, you&apos;ll find me traveling (that&apos;s me in Iceland!),
                biking, studying football film, or watching movies.
              </p>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
