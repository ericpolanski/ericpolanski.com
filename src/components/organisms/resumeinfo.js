import Timeline from "@/components/organisms/Timeline";
import SkillGroup from "@/components/molecules/SkillGroup";

const experiences = [
  {
    title: 'AI Data Engineer Intern',
    company: 'AbbVie',
    location: 'North Chicago, IL',
    start: 'September 2025',
    end: 'December 2025',
    bullets: [
      'Architected a scalable RAG pipeline using Python and SQL to clean & standardize raw lab data, integrating an internal GPT-4 API to ensure high data confidence for downstream analysis.',
      'Achieved 90% data coverage with 85% accuracy in mapping proprietary lab tests to standard LOINC codes, effectively converting unstructured data into queryable assets for research teams.',
    ],
  },
  {
    title: 'AI Automation Engineer Intern',
    company: 'Paper Tube Co.',
    location: 'Lincolnshire, IL',
    start: 'June 2025',
    end: 'September 2025',
    bullets: [
      'Engineered an event-driven automation system linking Salesforce, Zapier, and Google Apps Script to trigger GPT-4 generated email drafts based on production object changes.',
      'Reduced communication latency by 40% and saved 15+ hours monthly by automating personalized customer updates, utilizing JSON payloads for seamless cross-platform data transfer.',
    ],
  },
  {
    title: 'Bioinformatics Intern',
    company: 'AbbVie',
    location: 'North Chicago, IL',
    start: 'June 2024',
    end: 'August 2024',
    bullets: [
      'Developed a robust, automated Python and R data pipeline to streamline construction of gene regulatory networks, accelerating data processing for downstream analysis.',
      'Designed relational databases to centralize access to historical genomic analyses, improving organizational transparency and inter-team collaboration.',
    ],
  },
  {
    title: 'Bioinformatics Intern',
    company: 'AbbVie',
    location: 'North Chicago, IL',
    start: 'June 2023',
    end: 'August 2023',
    bullets: [
      'Developed and deployed a script to automate the generation of genomics data visualizations on server-side hosting.',
      'Achieved 90% reduction in data processing time and minimized entry errors.',
      'Resolved technical challenges in data integration and cross-platform formatting, ensuring seamless automated data flow.',
    ],
  },
  {
    title: 'Web Developer Student Worker',
    company: 'College of Lake County',
    location: 'Grayslake, IL',
    start: 'August 2021',
    end: 'May 2023',
    bullets: [
      'Maintained the college website using content creation and management tools.',
      'Managed and prioritized over 700 technical support requests for web updates.',
      'Recipient of 2022 College of Lake County Purpose Award.',
    ],
  },
];

const education = [
  {
    institution: 'Northwestern University',
    location: 'Evanston, IL',
    degree: 'Bachelor of Science, Computer Science, AI Concentration',
    dates: 'September 2023 - December 2025',
    gpa: '3.4/4.0',
    highlights: [],
  },
  {
    institution: 'College of Lake County',
    location: 'Grayslake, IL',
    degree: '65 credits toward Bachelor of Science degree',
    dates: 'August 2021 - May 2023',
    gpa: '3.9/4.0',
    highlights: [
      'Student Government President',
      'Chess Club Founder & President',
      'Phi Theta Kappa Honors Society Member',
      'Governance Coordinating Council Member',
      'Most Influential Student Award Recipient',
    ],
  },
];

const skills = {
  languages: ['Python', 'SQL', 'C++', 'JavaScript/TypeScript', 'HTML/CSS', 'Java', 'Bash/Shell'],
  tools: ['Git', 'GitHub', 'Docker', 'Azure ML', 'Google AI Platform', 'RESTful APIs'],
  frameworks: ['PyTorch', 'TensorFlow/Keras', 'Scikit-learn', 'MLflow', 'Hugging Face Transformers'],
};

export default function ResumeInfo() {
  return (
    <div className="max-w-4xl w-full mt-12 space-y-16">
      {/* Professional Experience Timeline */}
      <Timeline experiences={experiences} title="Professional Experience" />

      {/* Education Section */}
      <section className="fade-in">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <span className="h-1 w-8 bg-primary rounded-full"></span>
          Education
        </h2>
        <div className="space-y-6">
          {education.map((edu) => (
            <div
              key={edu.institution}
              className="bg-[rgb(var(--background-start-rgb))] border border-current/20 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                <div>
                  <h3 className="text-lg font-bold">{edu.institution}</h3>
                  <p className="text-primary font-medium">{edu.degree}</p>
                </div>
                <div className="text-sm opacity-60 sm:text-right shrink-0">
                  <p className="font-medium">{edu.dates}</p>
                  <p>{edu.location}</p>
                </div>
              </div>
              <p className="text-sm opacity-80 mb-2">
                GPA: {edu.gpa}
              </p>
              {edu.highlights.length > 0 && (
                <ul className="mt-3 space-y-1">
                  {edu.highlights.map((highlight, index) => (
                    <li
                      key={index}
                      className="text-sm opacity-80 flex gap-2"
                    >
                      <span className="text-primary">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="fade-in">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <span className="h-1 w-8 bg-primary rounded-full"></span>
          Skills
        </h2>
        <div className="bg-[rgb(var(--background-start-rgb))] border border-current/20 rounded-lg p-6 shadow-sm">
          <SkillGroup
            title="Languages"
            skills={skills.languages}
            category="languages"
            context="Used in: AbbVie RAG pipeline, Teddy Talk, FAAM Newsletter, Paper Tube automation"
          />
          <SkillGroup
            title="Tools & Platforms"
            skills={skills.tools}
            category="tools"
            context="Used in: AbbVie data pipelines, Paper Tube Salesforce integration, all projects"
          />
          <SkillGroup
            title="Frameworks & Libraries"
            skills={skills.frameworks}
            category="frameworks"
            context="Used in: FAAM Newsletter ML pipeline, AbbVie bioinformatics, Teddy Talk"
          />
        </div>
      </section>
    </div>
  );
}