import headshotSquare from "@/assets/olle-headshot-small-square.jpg";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Page from "@/components/Page";
import Skills from "@/components/Skills";
import SocialLinks from "@/components/SocialLinks";
import { Dotts, Octocat } from "@/components/patterns";
import { experiences, roles, skills } from "@/cv-data";

function SectionList({
  content: { title, items },
}: {
  content: { title: string; items: string[] };
}) {
  return (
    <>
      <h2 className="mt-8 text-2xl uppercase text-slate-900">{title}</h2>
      <div className="mt-2 text-justify text-sm leading-normal">
        <ul className="ml-4 list-disc">
          {items.map((value, i) => (
            <li key={i}>{value}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default function Fancy() {
  const {
    position,
    name,
    profile,
    version,
    profileTitle,
    education,
    other,
    references,
  } = roles.fullstackDeveloper;

  return (
    <>
      <Page page={1}>
        <div className="flex justify-center">
          <div className="flex w-[33%] flex-col justify-center space-y-3 bg-slate-700 p-8 text-sm text-gray-50">
            <SocialLinks />
          </div>
          <div className="flex w-[67%] flex-col justify-end bg-slate-100 p-8">
            <h1 className="text-[4rem] font-bold leading-none text-slate-700 drop-shadow-md">
              {name}
            </h1>
            <h2 className="mt-4 text-2xl font-semibold uppercase tracking-wide text-sky-600">
              {position}
            </h2>
          </div>
        </div>

        <div className="flex bg-sky-400">
          <div className="px-8+ py-4+ flex w-[33%] flex-col items-center justify-center">
            <img
              src={headshotSquare}
              className="h-40  w-40 rounded-full border-8"
              // className="absolute h-48 w-48 rounded border-8"
            />
          </div>
          <div className="w-[67%] px-8 py-4">
            <div className="font-semibold uppercase tracking-wide text-slate-50">
              {profileTitle}
            </div>

            <div className="hyphens-auto">{profile}</div>
          </div>
        </div>

        <div className="flex flex-1">
          <div className="w-[33%] bg-slate-700 p-8 text-sm text-slate-100">
            <Contact headingColor="text-sky-500" />
          </div>
          <div className="w-[67%] bg-slate-100 px-8 py-4 pr-12">
            <h2 className="mt-4 text-2xl uppercase tracking-wide text-slate-800 drop-shadow-md">
              Arbetslivserfarenhet
            </h2>
            <div className="overflow-y-clip">
              <Experience {...experiences[0]} />
              <Experience {...experiences[1]} />
              <Experience {...experiences[2]} />
            </div>
          </div>
        </div>
        <Dotts className="absolute bottom-0 h-32 w-64 rotate-45 text-slate-500" />
      </Page>

      <Page page={2}>
        <div className="flex flex-1">
          <div className="relative w-[33%] bg-slate-700 p-8 text-sm text-slate-100">
            <Skills skills={skills} />
          </div>
          <div className="relative w-[67%] overflow-clip bg-slate-100 px-8 py-4">
            <div className="overflow-y-clip">
              <Experience {...experiences[3]} />
              <Experience {...experiences[4]} />
              <Experience {...experiences[5]} />
            </div>
            <SectionList content={education} />
            <SectionList content={other} />
            <SectionList content={references} />
            <Octocat />
          </div>
        </div>

        <Dotts className="absolute bottom-0 h-32 w-64 rotate-45" />
        <div className="absolute bottom-1 left-2 text-xs text-slate-500">
          {version}
        </div>
      </Page>
    </>
  );
}
