import Skill from "@/components/atoms/skill";

/**
 * Displays all skills
 */
export default function Skills({ skills }) {
  return (
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <Skill key={index} skill={skill} />
      ))}
    </div>
  );
}