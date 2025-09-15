import Image from 'next/image';

export default function About() {
  return (
    <section className="pt-[var(--header-height)] w-full flex justify-center px-4">
      <div className="max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-balance">About</h1>
        <div className="flex flex-col md:flex-row items-start md:space-x-12">
          {/* Image section */}
          <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
            <Image
              src="/eric-images/eric-iceland.jpg"
              alt="Eric in Iceland"
              width={500}
              height={400}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
          {/* Text sections */}
          <div className="w-full md:w-1/2 space-y-8 max-w-prose">
            <section>
              <h2 className="text-2xl font-semibold mb-3 text-balance">Academic Background</h2>
              <p className="text-base leading-relaxed">
                I began my post-secondary academic journey at the College of Lake County in 2021, completing two years of courses toward my Bachelors, receiving a certificate of Academic Distinction.
              </p>
              <p className="text-base leading-relaxed">
                In 2023, I transferred to Northwestern University to pursue a Bachelor of Science in Computer Science with a concentration in Artificial Intelligence at the McCormick School of Engineering.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-3 text-balance">Personal Life & Interests</h2>
              <p className="text-base leading-relaxed">
                In my free time, I enjoy:
              </p>
              <ul className="list-disc list-inside pl-4 space-y-1 text-base leading-relaxed">
                <li>Traveling and exploring new countries</li>
                <li>Biking and hiking</li>
                <li>Studying football film</li>
                <li>Watching movies</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
