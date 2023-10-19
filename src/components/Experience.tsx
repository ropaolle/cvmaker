import { ReactNode } from "react";



type Props = {
  title: string;
  company: string;
  location: string;
  start: string;
  end: string;
  children: ReactNode;
};

export default function Experience({
  title,
  company,
  location,
  start,
  end,
  children,
}: Props) {
  return (
    <article className="break-inside-avoid-page">
      <h3 className="mt-4 text-xl font-semibold">{title}</h3>
      <div className="flex flex-row justify-between border-b-2 text-xs ">
        <div>
          {company}
          {location && `, ${location}`}
        </div>
        <div>
          {start} - {end}
        </div>
      </div>
      <div className=" mt-2 text-justify text-sm leading-normal">
        {children}
      </div>
    </article>
  );
}
