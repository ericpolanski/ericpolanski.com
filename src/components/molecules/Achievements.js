/**
 * Achievements - Visual metrics banner showcasing key career achievements
 */

const achievements = [
  {
    metric: '90%',
    label: 'Data Coverage',
    context: 'RAG Pipeline at AbbVie',
  },
  {
    metric: '40%',
    label: 'Faster Communication',
    context: 'Automation at Paper Tube Co.',
  },
  {
    metric: '15+',
    label: 'Hours Saved Monthly',
    context: 'AI Email Automation',
  },
  {
    metric: '700+',
    label: 'Requests Resolved',
    context: 'Web Development at CLC',
  },
];

function AchievementCard({ metric, label, context }) {
  return (
    <div className="flex flex-col items-center text-center p-4 rounded-xl bg-[rgb(var(--background-start-rgb))] border border-current/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <span className="text-3xl md:text-4xl font-bold text-primary mb-1">
        {metric}
      </span>
      <span className="font-medium text-sm md:text-base mb-1">{label}</span>
      <span className="text-xs opacity-50">{context}</span>
    </div>
  );
}

export default function Achievements() {
  return (
    <div className="w-full max-w-4xl mx-auto py-8 fade-in">
      <h2 className="text-sm font-medium text-primary mb-4 tracking-wide uppercase text-center">
        Key Achievements
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {achievements.map((achievement, index) => (
          <AchievementCard key={index} {...achievement} />
        ))}
      </div>
    </div>
  );
}
