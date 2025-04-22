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
                <li>Developed a pipeline to create gene regulatory networks using single-cell RNA-seq & ATAC-seq data.</li>
                <li>Modified analysis algorithms which helped find key information over 25% more accurately.</li>
                <li>Created and hosted databases to communicate previous group analysis.</li>
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
                <li>Built a script to automate the visualization of genomic data on servers.</li>
                <li>Improved efficiency of adding data to proprietary software by 90%.</li>
                <li>Demonstrated strong problem-solving skills by addressing technical challenges related to data integration, formatting, and visualization compatibility.</li>
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
                <li>Maintain the college website using content creation tools, management tools, and digital media.</li>
                <li>Resolved over 700 requests from college employees desiring various web updates.</li>
                <li>Conducted assessments of code to verify its validity, appropriate structure, adherence to industry standards, and compatibility with browsers, devices, and operating systems.</li>
                <li>Recipient of 2022 College of Lake County Purpose Award</li>
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
                Bachelor of Science, Computer Science, GPA 3.2/4.0
              </p>
              <ul className="list-disc list-inside pl-4 text-base leading-relaxed space-y-1">
                <li>Computer Science Advisory Council Member</li>
                <li>Computer Science Peer Mentor</li>
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
                Completed 56 credits towards bachelor's degree, GPA 3.9/4.0
              </p>
              <ul className="list-disc list-inside pl-4 text-base leading-relaxed space-y-1">
                <li>Student Government President</li>
                <li>Chess Club Founder</li>
                <li>Phi Theta Kappa Honors Society Member</li>
                <li>Governance Coordinating Council Member</li>
                <li>Student Success Council Member</li>
              </ul>
            </div>
          </div>
        </section>
        {/* Skills */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-balance">Skills</h2>
          <div className="space-y-6">
            {/* Programming */}
            <div key="Programming" className="w-full">
              {/* Label */}
              <div className="mb-2">
                <span className="font-semibold capitalize">Programming</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="text-sm bg-primary text-onPrimary rounded shadow px-2 py-1 rounded transition">Python</span>
                <span className="text-sm bg-primary text-onPrimary rounded shadow px-2 py-1 rounded transition">R</span>
                <span className="text-sm bg-primary text-onPrimary rounded shadow px-2 py-1 rounded transition">C++</span>
                <span className="text-sm bg-primary text-onPrimary rounded shadow px-2 py-1 rounded transition">C</span>
                <span className="text-sm bg-primary text-onPrimary rounded shadow px-2 py-1 rounded transition">CSS</span>
                <span className="text-sm bg-primary text-onPrimary rounded shadow px-2 py-1 rounded transition">React</span>
              </div>
            </div>
            {/* Computer */}
            <div key="Computer" className="w-full">
              <div className="mb-2">
                <span className="font-semibold capitalize">Computer</span>
              </div>
              <div className="flex flex-wrap gap-2">
              <span className="text-sm bg-primary text-onPrimary rounded shadow px-2 py-1 rounded transition">Excel</span>
              <span className="text-sm bg-primary text-onPrimary rounded shadow px-2 py-1 rounded transition">Word</span>
              <span className="text-sm bg-primary text-onPrimary rounded shadow px-2 py-1 rounded transition">PowerPoint</span>
              </div>
            </div>
            {/* Languages */}
            <div key="Languages" className="w-full">
              <div className="mb-2">
                <span className="font-semibold capitalize">Languages</span>
              </div>
              <div className="flex flex-wrap gap-2">
              <span className="text-sm bg-primary text-onPrimary rounded shadow px-2 py-1 rounded transition">English</span>
              <span className="text-sm bg-primary text-onPrimary rounded shadow px-2 py-1 rounded transition">Polish</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
}