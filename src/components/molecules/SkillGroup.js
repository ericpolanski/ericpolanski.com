/**
 * SkillGroup - Displays skills grouped by category with distinct visual styles
 */

const categoryStyles = {
  languages: {
    icon: "💻",
    bgColor: "bg-blue-500/10",
    textColor: "text-blue-600",
    borderColor: "border-blue-500/30",
    hoverBg: "hover:bg-blue-500",
  },
  tools: {
    icon: "🔧",
    bgColor: "bg-emerald-500/10",
    textColor: "text-emerald-600",
    borderColor: "border-emerald-500/30",
    hoverBg: "hover:bg-emerald-500",
  },
  frameworks: {
    icon: "⚡",
    bgColor: "bg-purple-500/10",
    textColor: "text-purple-600",
    borderColor: "border-purple-500/30",
    hoverBg: "hover:bg-purple-500",
  },
};

function SkillBadge({ skill, category }) {
  const style = categoryStyles[category] || categoryStyles.languages;

  return (
    <span
      className={`
        inline-flex items-center
        text-sm font-medium
        ${style.bgColor} ${style.textColor}
        border ${style.borderColor}
        px-3 py-1.5
        rounded-lg
        transition-all duration-200
        ${style.hoverBg} hover:text-white hover:border-transparent
        hover:shadow-md hover:-translate-y-0.5
        cursor-default
      `}
    >
      {skill}
    </span>
  );
}

export default function SkillGroup({ title, skills, category, context }) {
  const style = categoryStyles[category] || categoryStyles.languages;

  return (
    <div className="mb-6 last:mb-0">
      <div className="flex items-center gap-2 mb-1">
        <span className="text-lg" role="img" aria-label={title}>
          {style.icon}
        </span>
        <h3 className={`font-semibold ${style.textColor}`}>
          {title}
        </h3>
        <span className="text-xs opacity-50">
          ({skills.length})
        </span>
      </div>
      {context && (
        <p className="text-xs opacity-50 mb-3 ml-7">
          {context}
        </p>
      )}
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <SkillBadge key={index} skill={skill} category={category} />
        ))}
      </div>
    </div>
  );
}
