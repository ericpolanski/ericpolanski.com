// Skill component
export default function Skill({ skill }) {
    return (
      <span
        className="
          text-sm bg-primary 
          text-onPrimary 
          rounded shadow 
          px-2 py-1 
          rounded transition"
      >
        {skill}
      </span>
    );
  }