import Skills from "@/components/molecules/skills";

export default function ResumeInfo() {
    return (
      <div className="max-w-4xl w-full mt-12 space-y-12">
        {/* Professional Experience */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Professional Experience</h2>
          <div className="space-y-6">
            <div key= "Bioinformatics Intern 2024">
              <h3 className="text-xl font-bold">
                Bioinformatics Intern at <span className="italic">AbbVie</span>
              </h3>
              <p className="italic text-base mb-2">
                June 2024 - August 2024, North Chicago, IL
              </p>
              <ul className="list-disc list-inside pl-4 text-base leading-relaxed space-y-1">
                <li>Engineered an automated data pipeline for constructing gene regulatory networks from single-cell RNA sequencing data using Python, significantly streamlining data processing and downstream analysis workflows. </li>
                <li>Optimized analysis algorithms enhancing key biological markers achieving a 25% improvement in detection accuracy over established baselines. </li>
                <li>Designed, and maintained relational databases to centralize and automate access to historical genomics analyses, improving data retrieval and inter-team collaboration. </li>
              </ul>
            </div>
            <div key= "Bioinformatics Intern 2023">
              <h3 className="text-xl font-bold">
                Bioinformatics Intern at <span className="italic">AbbVie</span>
              </h3>
              <p className="italic text-base mb-2">
                June 2023 - August 2023, North Chicago, IL
              </p>
              <ul className="list-disc list-inside pl-4 text-base leading-relaxed space-y-1">
                <li>Developed and deployed a script leveraging to automate the generation of genomics data visualizations on server-side hosting. </li>
                <li>Achieved 90% reduction in data processing time and minimized entry errors. </li>
                <li>Resolved technical challenges in data integration and cross-platform formatting, ensuring seamless automated data flow and visualization compatibility for diverse genomics datasets. </li>
              </ul>
            </div>
            <div key= "Public Relations and Marketing Student Worker">
              <h3 className="text-xl font-bold">
                Public Relations and Marketing Student Worker at <span className="italic">College of Lake County</span>
              </h3>
              <p className="italic text-base mb-2">
                September 2021 - May 2023
              </p>
              <ul className="list-disc list-inside pl-4 text-base leading-relaxed space-y-1">
                <li>Maintain the college website using content creation tool and management tools. </li>
                <li>Managed and prioritized over 700 technical support requests for web updates, ensuring timely resolution and stakeholder satisfaction. </li>
                <li>Recipient of 2022 College of Lake County Purpose Award </li>
              </ul>
            </div>
          </div>
        </section>
        {/* Education */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Education</h2>
          <div className="space-y-6">
            <div key="Northwestern University">
              <h3 className="text-xl font-bold">
                Northwestern University
              </h3>
              <p className="italic text-base mb-2">
                September 2023 - December 2025
              </p>
              <p className="text-base leading-relaxed mb-2">
                Bachelor of Science, Computer Science, Major GPA 3.8/4.0 
              </p>
              <ul className="list-disc list-inside pl-4 text-base leading-relaxed space-y-1">
                <li>Computer Science Advisory Council Member </li>
                <li>Computer Science Student Mentor </li>
              </ul>
            </div>
            <div key="College of Lake County">
              <h3 className="text-xl font-bold">
                College of Lake County
              </h3>
              <p className="italic text-base mb-2">
                August 2021 - July 2023
              </p>
              <p className="text-base leading-relaxed mb-2">
                Completed 56 credits towards Bachelor’s degree, GPA 3.9/4.0 
              </p>
              <ul className="list-disc list-inside pl-4 text-base leading-relaxed space-y-1">
                <li>Student Government President </li>
                <li>Chess Club Founder </li>
                <li>Phi Theta Kappa Honors Society Member </li>
                <li>Governance Coordinating Council Member </li>
              </ul>
            </div>
          </div>
        </section>
        {/* Skills */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-balance">Skills</h2>
          <div className="space-y-6">
            {/* Programming Languages */}
            <div key="Programming Languages" className="w-full">
              <div className="mb-2">
                <span className="font-semibold capitalize">Programming Languages</span>
              </div>
              <Skills skills={["Python", "JavaScript/TypeScript", "Java", "C++", "R"]} />
            </div>
            {/* AI/ML Technologies & Frameworks */}
            <div key="AI/ML Technologies & Frameworks" className="w-full">
              <div className="mb-2">
                <span className="font-semibold capitalize">AI/ML Technologies & Frameworks</span>
              </div>
              <Skills skills={["Google Gemini API", "OpenAI API", "TensorFlow", "Zapier"]} />
            </div>
            {/* Developer Tools & Platforms */}
            <div key="Developer Tools & Platforms" className="w-full">
              <div className="mb-2">
                <span className="font-semibold capitalize">Developer Tools & Platforms</span>
              </div>
              <Skills skills={["Git", "Docker", "VS Code", "Jupyter Notebooks"]} />
            </div>
          </div>
        </section>
      </div>
    )
}