import React from "react";
import SkillLevel from "./SkillLevel";

type SkillObject = { name: string; level: number };

type Skill = string | SkillObject;

type SkillGroup = {
  title: string;
  priority: number;
  skills: (string | SkillObject)[];
};

const sortByPriority = (a: SkillGroup, b: SkillGroup) =>
  b.priority - a.priority;

export default function Skills({ skills }: { skills: SkillGroup[] }) {
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
      <div className="text-lg uppercase tracking-wide text-sky-500">
        Kompetenser
      </div>
      {skills.sort(sortByPriority).map(({ title, skills }) => (
        <React.Fragment key={title}>
          <div className="mt-4 font-semibold text-sky-500">{title}</div>
          <div>{skillList(skills)}</div>
        </React.Fragment>
      ))}
    </>
  );
}
