import headshotSquare from "@/assets/olle-headshot-small-square.jpg";
import Contact from "@/components/Contact";
import DownloadButton from "@/components/DownloadButton";
import Experience from "@/components/Experience";
import Page from "@/components/Page";
import SectionList from "@/components/SectionList";
import Skills from "@/components/Skills";
import SocialLinks from "@/components/SocialLinks";
import { Dotts } from "@/components/patterns";
import { experiences, roles, skills } from "@/cv-data";

export default function Fancy() {
  const { position, name, profile, version, education, other, references } =
    roles.fullstackDeveloper;

  return (
    <>
      <Page page={1}>
        <div className="relative flex h-full justify-center bg-white">
          <div className="flex w-[37%] flex-col p-8">
            <h1 className="text-6xl font-bold leading-none">{name}</h1>
            <div className="my-8">
              <img src={headshotSquare} className="p- rounded-full border-8" />
            </div>
            <Contact textColor="text-black" headingColor="text-black" />
            <div className="mt-4 font-semibold">Länkar</div>
            <SocialLinks />
          </div>

          <div className="flex w-[63%] flex-col py-8 pr-8">
            <h2 className="break-words text-xl font-semibold uppercase tracking-wide">
              {position}
            </h2>
            <div className="absolute+ h-2 w-32 rounded bg-sky-600" />
            <div className="mt-2 hyphens-auto">{profile}</div>
            <h2 className="mt-8 text-2xl uppercase tracking-wide">
              Arbetslivserfarenhet
            </h2>
            <div className="overflow-y-clip">
              <Experience {...experiences[0]} />
              <Experience {...experiences[1]} />
              <Experience {...experiences[2]} />
              <Experience {...experiences[3]} />
            </div>
          </div>
        </div>
        <Dotts className="absolute bottom-0 h-32 w-64 rotate-45 opacity-40" />
      </Page>

      <Page page={2}>
        <div className="relative flex h-full justify-center bg-white">
          <div className="absolute h-2 w-full bg-slate-500" />
          <div className="flex w-[37%] flex-col p-8">
            <Skills skills={skills} />
          </div>

          <div className="flex w-[63%] flex-col py-8 pr-8">
            <div className="overflow-y-clip">
              <Experience {...experiences[4]} />
              <Experience {...experiences[5]} />
            </div>
            <SectionList content={education} />
            <SectionList content={other} />
            <SectionList content={references} />
          </div>
        </div>
        <Dotts className="absolute bottom-0 h-32 w-64 rotate-45 opacity-40" />
        <div className="absolute bottom-1 left-2 text-xs text-slate-500">
          {version}
        </div>
      </Page>

      <DownloadButton href="./cv_fullstackutvecklare_olofsjogren_20231020.pdf" />
    </>
  );
}
