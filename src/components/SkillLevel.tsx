export default function SkillLevel({ skillLevel }: { skillLevel: number }) {
  const fill = (level: number) =>
    // level < skillLevel ? "rgb(216, 216, 216)" : "rgb(77, 77, 77)";
    level < skillLevel ? "rgb(14, 165, 233)" : "rgb(77, 77, 77)";
  return (
    <div className="flex w-28">
      <svg viewBox="0 0 48 4" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="0" width="8" height="4" rx="1" ry="1" fill={fill(0)} />
        <rect x="10" y="0" width="8" height="4" rx="1" ry="1" fill={fill(1)} />
        <rect x="20" y="0" width="8" height="4" rx="1" ry="1" fill={fill(2)} />
        <rect x="30" y="0" width="8" height="4" rx="1" ry="1" fill={fill(3)} />
        <rect x="40" y="0" width="8" height="4" rx="1" ry="1" fill={fill(4)} />
      </svg>
    </div>
  );
}
