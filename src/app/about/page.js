import Image from 'next/image';
import { resume } from '@/data/resume';

export default function About() {
  return (
    <section className="pt-[80px] w-full flex justify-center px-4">
      <div className="max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">About</h1>
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
          <div className="w-full md:w-1/2 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-3">Academic Background</h2>
              <p className="text-base leading-relaxed">
                I began my academic career at the College of Lake County, where I completed 56 credits toward a bachelor’s degree with a 3.9 GPA, receiving a certificate of Academic Distinction. 
                During my time there, I founded the Chess Club and served as Student Government President, leading initiatives that improved campus life and being recognized as the most influential student on campus.
              </p>
              <br />
              <p> 
                In 2023, I transferred to Northwestern University to pursue a Bachelor of Science in Computer Science. 
                At Northwestern, I immerse myself in rigorous, but fascinating, coursework, serve on the Computer Science Advisory Council, and have become a mentor for the Computer Science Peer Mentor Program.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-3">Personal Life & Interests</h2>
              <p className="text-base leading-relaxed">
                {/* Listing extracurricular activities as personal interests */}
                In my free, you'll find me engaging in a variety of activities that keep me balanced and inspired. 
                I love to travel, explore new cultures, and immerse myself in different environments. 
                Whether it's hiking in the mountains or relaxing on a beach, I find joy in nature's beauty. 
                I'm also an avid reader, always seeking new perspectives and ideas through books.
              </p>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
