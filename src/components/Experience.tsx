import { ReactNode } from "react";

type Props = {
  title: string;
  company: string;
  location: string;
  start: string;
  end: string;
  description: ReactNode;
};

export default function Experience({
  title,
  company,
  location,
  start,
  end,
  description,
}: Props) {
  return (
    <article className="break-inside-avoid-page">
      <h3 className="mt-4 text-xl font-semibold text-slate-700">{title}</h3>
      <div className="mt-1 flex flex-row justify-between border-b-2 text-xs">
        <div>
          <span className="font-semibold text-slate-900">{company}</span>
          {location && `, ${location}`}
        </div>
        <div>
          {start} - {end}
        </div>
      </div>
      <div className="mt-2 hyphens-auto text-sm leading-normal">
        {description}
      </div>
    </article>
  );
}
