import Contact from "@/components/Contact";
import EducationAndReferences from "@/components/EducationAndReferences";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import Page from "@/components/Page";
import Profile from "@/components/Profile";
import RightCornerImage from "@/components/RightCornerImage";
import Skills from "@/components/Skills";
import { Dotts } from "@/components/patterns";
import { experiences, roles, skills } from "@/cv-data";

export default function Fancy() {
  const { position, name, profile, version } = roles.fullstackDeveloper;

  return (
    <>
      <Page>
        <Header name={name} role={position} />
        <Profile title="Profil">{profile}</Profile>
        <div className="flex flex-1">
          <div className="w-[33%] bg-slate-700 p-8 text-sm text-slate-100">
            <Contact />
          </div>
          <div className="w-[67%] bg-slate-100 px-8 py-4 last:overflow-clip">
            <h2 className="mt-4 text-2xl uppercase tracking-wide text-slate-800 drop-shadow-md">
              Arbetslivserfarenhet
            </h2>
            {/* <div className="mt-2 w-16 rounded border-4 border-sky-500"></div> */}
            <Experience {...experiences[0]} />
            <Experience {...experiences[1]} />
            <Experience {...experiences[2]} />
          </div>
        </div>
        <Dotts className="absolute bottom-0 h-32 w-64 rotate-45 text-slate-500" />
      </Page>

      <Page>
        <div className="flex flex-1">
          <div className="relative w-[33%] bg-slate-700 p-8 text-sm text-slate-100">
            <Skills skills={skills} />
          </div>
          <div className="relative w-[67%] overflow-clip bg-slate-100 px-8 py-4">
            <div className="last:overflow-y-clip">
              <Experience {...experiences[3]} />
              <Experience {...experiences[4]} />
              <Experience {...experiences[5]} />
            </div>
             <EducationAndReferences />
            {/*<RightCornerImage />
            <div className="absolute bottom-1 right-1 text-xs text-slate-400">
              {version}
            </div> */}
          </div>
        </div>
        <Dotts className="absolute bottom-0 h-32 w-64 rotate-45  text-slate-500" />
      </Page>
    </>
  );
}
