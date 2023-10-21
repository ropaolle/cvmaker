import Experience from "./Experience";
import Contact from "./Contact";
import Header from "./Header";
import Profile from "./Profile";
import { cvs } from "../data/data";
import Skills from "./Skills";
import EducationAndReferences from "./EducationAndReferences";
import RightCornerImage from "./RightCornerImage";

export default function Page() {
  const { role, profile, name, experiences, skills, version } = cvs[0];

  return (
    <>
      <div className="m-auto my-4 flex h-[297mm] w-[210mm] flex-col bg-slate-100 shadow-lg print:visible print:my-0">
        <Header name={name} role={role} />
        <Profile title="Profil">{profile}</Profile>
        <div className="flex flex-1">
          <div className="w-[33%] bg-slate-700 p-8 text-sm text-slate-100">
            <Contact />
          </div>
          <div className="w-[67%] bg-slate-100 px-8 py-4">
            <h2 className="mt-4 text-2xl uppercase tracking-wide text-slate-900">
              Arbetslivserfarenhet
            </h2>
            <div className="mt-2 w-16 rounded border-4 border-sky-500"></div>
            <Experience {...experiences[0]} />
            <Experience {...experiences[1]} />
            <Experience {...experiences[2]} />
          </div>
        </div>
      </div>

      <div className="m-auto my-4 flex h-[297mm] w-[210mm] flex-col bg-slate-100 shadow-lg print:visible print:my-0">
        <div className="flex flex-1">
          <div className="relative w-[33%] bg-slate-700 p-8 text-sm text-slate-100">
            <Skills skills={skills} />
          </div>
          <div className="relative w-[67%] overflow-clip bg-slate-100 px-8  py-4">
            <Experience {...experiences[3]} />
            <Experience {...experiences[4]} />
            <Experience {...experiences[5]} />
            <EducationAndReferences />
            <RightCornerImage />
            <div className="absolute bottom-1 right-1 text-xs text-slate-400">
              {version}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
