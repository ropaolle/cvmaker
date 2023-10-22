import React from "react";
import { cn } from "./utils";

type SkillObject = { name: string; level: number };

type Skill = string | SkillObject;

type SkillGroup = {
  title: string;
  priority: number;
  skills: (string | SkillObject)[];
};

function SkillLevel({ skillLevel }: { skillLevel: number }) {
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

const sortByPriority = (a: SkillGroup, b: SkillGroup) =>
  b.priority - a.priority;

export default function Skills({
  skills,
  headingColor,
}: {
  skills: SkillGroup[];
  headingColor?: string;
}) {
  const skillList = (skills: Skill[]) => {
    const SkillListWithLevel = [];
    const SkillList = [];

    for (const skill of skills) {
      if (typeof skill === "string") {
        SkillList.push(skill);
      } else {
        SkillListWithLevel.push(
          <div
            key={skill.name}
            className="flex items-stretch justify-between whitespace-nowrap"
          >
            {skill.name}
            <SkillLevel skillLevel={skill.level} />
          </div>,
        );
      }
    }

    return (
      <>
        <div className="mb-2 empty:mb-0">{SkillListWithLevel}</div>
        {SkillList.join(", ")}
      </>
    );
  };

  return (
    <>
      <div className={cn("text-lg uppercase tracking-wide", headingColor)}>
        Kompetenser
      </div>
      {skills.sort(sortByPriority).map(({ title, skills }) => (
        <React.Fragment key={title}>
          <div className={cn("mt-4 font-semibold", headingColor)}>{title}</div>
          <div>{skillList(skills)}</div>
        </React.Fragment>
      ))}
    </>
  );
}
