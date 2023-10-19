import Experience from "./components/cv/Experience";
import Skills from "./components/cv/Skills";
import Contact from "./components/cv/Contact";
import Header from "./components/cv/Header";
import Profile from "./components/cv/Profile";
import EducationAndReferences from "./components/cv/EducationAndReferences";
import { cvs } from "./data/data";

function App() {
  const { role, profile, name, experiences, skills, version } = cvs[0];

  return (
    <div className="m-auto flex h-full flex-col print:invisible  ">
      <header className="bg-neutral-200 p-12  print:hidden">Header</header>

      <main className="m-auto flex flex-1 flex-col px-12 py-12 print:m-0 print:p-0">
        {/* <article className="max-w-full text-center print:hidden">
          <h1>My fancy CV</h1>
          <p>How should I make sure that my CV get any attention?</p>
        </article> */}

        <div className="m-auto my-4 flex h-a4 w-a4 flex-col bg-slate-100 shadow-lg print:visible print:my-0">
          <Header name={name} role={role} />
          <Profile>{profile}</Profile>
          <div className="flex flex-1">
            <div className="w-[33%] bg-slate-700 p-8 text-sm text-slate-100">
              <Contact />
            </div>
            <div className="w-[67%] bg-slate-100 px-8 py-4">
              <h2 className="mt-4 text-2xl uppercase">Arbetslivserfarenhet</h2>
              <Experience {...experiences[0]} />
              <Experience {...experiences[1]} />
            </div>
          </div>
        </div>

        <div className="m-auto my-4 flex h-a4 w-a4 flex-col bg-slate-100 shadow-lg  print:visible print:my-0">
          <div className="flex flex-1">
            <div className="relative w-[33%] bg-slate-700 p-8 text-sm text-slate-100">
              <Skills skills={skills} />
            </div>
            <div className="relative w-[67%] bg-slate-100 px-8 py-4">
              <Experience {...experiences[1]} />
              <EducationAndReferences />
              <div className="absolute bottom-1 right-2 text-xs text-slate-500">
                {version}
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-neutral-200 p-12  print:hidden">Footer</footer>
    </div>
  );
}

export default App;
