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
    <div className="flex h-full flex-col print:invisible  ">
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

        <div className="m-auto my-4 flex h-a4 w-a4 flex-col bg-slate-100 shadow-lg  print:visible print:my-0">
          <div className="flex flex-1">
            <div className="relative w-[33%] bg-slate-700 p-8 text-sm text-slate-100">
              <Skills skills={skills} />
            </div>
            <div className="relative w-[67%] overflow-clip bg-slate-100 px-8  py-4">
              <Experience {...experiences[3]} />
              <Experience {...experiences[4]} />
              <EducationAndReferences />
              <div className="absolute bottom-[-4rem] right-[-7rem] text-xs text-slate-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="280"
                  height="280"
                  viewBox="0 0 24 24"
                >
                  <g fill="none">
                    <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" />
                    <path
                      fill="currentColor"
                      d="M7.024 2.31a9.08 9.08 0 0 1 2.125 1.046A11.432 11.432 0 0 1 12 3c.993 0 1.951.124 2.849.355a9.08 9.08 0 0 1 2.124-1.045c.697-.237 1.69-.621 2.28.032c.4.444.5 1.188.571 1.756c.08.634.099 1.46-.111 2.28C20.516 7.415 21 8.652 21 10c0 2.042-1.106 3.815-2.743 5.043a9.456 9.456 0 0 1-2.59 1.356c.214.49.333 1.032.333 1.601v3a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-.991c-.955.117-1.756.013-2.437-.276c-.712-.302-1.208-.77-1.581-1.218c-.354-.424-.74-1.38-1.298-1.566a1 1 0 0 1 .632-1.898c.666.222 1.1.702 1.397 1.088c.48.62.87 1.43 1.63 1.753c.313.133.772.22 1.49.122L8 17.98a3.986 3.986 0 0 1 .333-1.581a9.455 9.455 0 0 1-2.59-1.356C4.106 13.815 3 12.043 3 10c0-1.346.483-2.582 1.284-3.618c-.21-.82-.192-1.648-.112-2.283l.005-.038c.073-.582.158-1.267.566-1.719c.59-.653 1.584-.268 2.28-.031Z"
                    />
                  </g>
                </svg>
              </div>
              <div className="absolute bottom-1 right-1 text-xs text-slate-400">
                {version}
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-slate-800 p-12 text-center text-slate-300 print:hidden">
        © 2023 CVmaker
      </footer>
    </div>
  );
}

export default App;
