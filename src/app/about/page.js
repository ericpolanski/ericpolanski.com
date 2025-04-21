import Image from 'next/image';
import { resume } from '@/data/resume';

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
                I began my academic career at the College of Lake County, completing 56 credits toward a bachelor’s degree with a 3.9 GPA and a certificate of Academic Distinction.
              </p>
              <ul className="list-disc list-inside pl-4 mb-4 space-y-1 text-base leading-relaxed">
                <li>Founded the Chess Club</li>
                <li>Served as Student Government President</li>
                <li>Recognized as the most influential student on campus</li>
              </ul>
              <p className="text-base leading-relaxed">
                In 2023, I transferred to Northwestern University to pursue a Bachelor of Science in Computer Science. At Northwestern, I immerse myself in rigorous coursework, serve on the Computer Science Advisory Council, and mentor new students through the Computer Science Peer Mentor Program.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-3 text-balance">Personal Life & Interests</h2>
              <p className="text-base leading-relaxed">
                In my free time, I enjoy:
              </p>
              <ul className="list-disc list-inside pl-4 space-y-1 text-base leading-relaxed">
                <li>Traveling and exploring new cultures</li>
                <li>Hiking in nature</li>
                <li>Relaxing on beaches</li>
                <li>Reading books to gain new perspectives</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
