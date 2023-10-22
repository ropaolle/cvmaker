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
    <article className="relative ml-6 break-inside-avoid-page">
      <div className="absolute left-[-28px] top-[6px] h-4 w-4 rounded-full bg-sky-600" />
      <div className="absolute left-[-22px] top-[6px] h-[180%] w-1 bg-sky-600" />
      <h3 className="mt-4 text-xl font-semibold">{title}</h3>
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
