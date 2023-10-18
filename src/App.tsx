import headshot from "./assets/olle-headshot-small.jpg";
import { Linkedin, Globe, Github, X } from "lucide-react";

function App() {
  return (
    <div className="m-auto flex h-full flex-col">
      <header className="bg-neutral-200 p-12">Header</header>

      <main className=" container+ m-auto flex flex-1 flex-col px-12 py-12 ">
        <article className="prose max-w-full text-center lg:prose-xl">
          <h1>My fancy CV</h1>
          <p>How should I make sure that my CV get any attention?</p>
        </article>

        <div className="m-auto my-4 flex h-a4 w-a4 flex-col bg-slate-100 shadow-lg">
          <div className="flex justify-center">
            <div className="flex flex-col justify-between  w-[33%] space-y-4+ bg-slate-700 px-4 py-12 text-sm text-gray-50">
              <div className="flex">
                <Globe size={20} className="relative mr-1 mt-[1px]" />
                www.ropaolle.se
              </div>
              <div className="flex">
                <Linkedin size={20} className="relative mr-1 mt-[1px]" />
                linkedin.com/in/ropaolle
              </div>
              <div className="flex">
                <Github size={20} className="relative mr-1 mt-[1px]" />
                github.com/ropaolle
              </div>
              <div className="flex">
                <X size={20} className="relative mr-1 mt-[1px]" />
                x.com/ropaolle
              </div>
            </div>
            <div className="w-[67%] bg-slate-100 px-8 py-4">
              <h1 className="mb-0 mt-12 text-[5rem] font-semibold  leading-none text-slate-800">Olof Sjögren</h1>
              <h2 className="text-[2rem] my-4">Fullstackutvecklare</h2>
            </div>
          </div>

          <div className="flex bg-sky-500">
            <div className="w-[33%] overflow-visible px-8 py-4 ">
              <img
                src={headshot}
                className="absolute max-w-[200px] rounded border-4 "
              />
            </div>
            <div className="w-[67%] px-8 py-4 ">
              Jag är en erfaren DevOps/utvecklare som älskar problemlösning och
              ny teknik. Automatisera och bygga CD/CI pipelines har alltid varit
              något jag försökt driva på i projekt jag arbetat med. Lätt att
              anpassa mig och arbeta i team, gärna agilt. Lösningsorienterad och
              van att ta ansvar och tillsammans med teamet driva projekten i
              mål.
            </div>
          </div>

          {/* <div><img src={headshot} className='border-4 rounded max-w-[200px] mt-[-200px]'/></div> */}

          <div className="flex flex-1">
            <div className="w-[33%] bg-slate-500 p-4"></div>
            <div className="w-[67%] bg-slate-100 px-8 py-4">
              <h2 className="">Tjänst 1</h2>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-neutral-200 p-12">Footer</footer>
    </div>
  );
}

export default App;
