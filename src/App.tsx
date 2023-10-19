import Experience from "./components/Experience";
import Headshot from "./components/Headshot";
import SocialLinks from "./components/SocialLinks";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="m-auto flex h-full flex-col print:invisible  ">
      <header className="bg-neutral-200 p-12  print:hidden">Header</header>

      <main className="m-auto flex flex-1 flex-col px-12 py-12 print:m-0 print:p-0">
        <article className="max-w-full text-center print:hidden">
          <h1>My fancy CV</h1>
          <p>How should I make sure that my CV get any attention?</p>
        </article>

        <div className="m-auto my-4 flex h-a4 w-a4 flex-col bg-slate-100 shadow-lg  print:visible print:my-0">

          
          <div className="flex justify-center">
            <div className="flex w-[33%] flex-col justify-between bg-slate-700 px-8 py-12 text-sm text-gray-50">
              <SocialLinks />
            </div>
            <div className="w-[67%] bg-slate-100 px-8 py-4">
              <h1 className="mb-0 mt-16 text-[4rem] font-bold leading-none text-slate-700">
                Olof Sjögren
              </h1>
              <h2 className="mt-4 text-[2rem]">Fullstackutvecklare</h2>
            </div>
          </div>

          <div className="flex bg-sky-500">
            <div className="px-8+ py-4+ flex w-[33%] flex-col items-center justify-center ">
              <Headshot type="circle" />
            </div>
            <div className="w-[67%] px-8 py-4 text-justify">
              <div className="font-semibold uppercase text-slate-50">
                Profil
              </div>
              Jag är en erfaren DevOps/utvecklare som älskar problemlösning och
              ny teknik. Automatisera och bygga CD/CI pipelines har alltid varit
              något jag försökt driva på i projekt jag arbetat med. Lätt att
              anpassa mig och arbeta i team, gärna agilt. Lösningsorienterad och
              van att ta ansvar och tillsammans med teamet driva projekten i
              mål.
            </div>
          </div>

          <div className="flex flex-1">
            <div className="w-[33%] bg-slate-700 p-8 text-sm text-slate-100">
              <Contact />
            </div>

            <div className="w-[67%] bg-slate-100 px-8 py-4">
              <h2 className="mt-4 text-2xl uppercase">Arbetslivserfarenhet</h2>

              <Experience
                title="Kompetensutveckling/sabbatsår"
                company="Frilans"
                location="Sollentuna"
                start="2022"
                end="nu"
              >
                Underhåll av äldre webprojekt. Kompetensutveckling genom att
                bygga lösningar med senaste releaserna av till exempel NextJS,
                Vite, Astro, Supabase, Zustand, React-hook-form, Zod med mera.
                Rivit ner och designat om min privata infrastruktur. Två
                XenServer hypervisors i master/slav-läge med Docker på CoreOS.
                Som i sin tur är värd för Gitlab, GrayLog, UniFi-controller,
                Plex, webbservrar etcetera. Allt ligger bakom pfSence med
                HAProxy för domänaccess och SSL-cert.
              </Experience>

              <Experience
                title="Team Swift Maintainer (konsult)"
                company="Skandinaviska Enskilda Banken AB"
                location="Solna"
                start="2020"
                end="2021"
              >
                Underhåll, implementation, test och support av ett antal
                centrala system primärt för SWIFT-miljön och Anti-Money
                Laundering (AML). Ett tight team med medarbetare i Sverige och
                Lettland. Internt användes engelska. Scrum används som metodik.
                Merparten av applikationerna kom från IBM, Oracle och Swift.
              </Experience>

              <Experience
                title="Team Swift Maintainer (konsult)"
                company="Skandinaviska Enskilda Banken AB"
                location="Solna"
                start="2020"
                end="2021"
              >
                Underhåll, implementation, test och support av ett antal
                centrala system primärt för SWIFT-miljön och Anti-Money
                Laundering (AML). Ett tight team med medarbetare i Sverige och
                Lettland. Internt användes engelska. Scrum används som metodik.
                Merparten av applikationerna kom från IBM, Oracle och Swift.
              </Experience>
            </div>
          </div>
        </div>

        {/* Page 2 */}

        <div className="m-auto my-4 flex h-a4 w-a4 flex-col bg-slate-100 shadow-lg  print:visible print:my-0">
          <div className="flex flex-1">
            <div className="w-[33%] bg-slate-700 p-8 text-sm text-slate-100">
              <Skills />
            </div>

            <div className="w-[67%] bg-slate-100 px-8 py-4">
              <Experience
                title="Kompetensutveckling/sabbatsår"
                company="Frilans"
                location="Sollentuna"
                start="2022"
                end="nu"
              >
                Underhåll av äldre webprojekt. Kompetensutveckling genom att
                bygga lösningar med senaste releaserna av till exempel NextJS,
                Vite, Astro, Supabase, Zustand, React-hook-form, Zod med mera.
                Rivit ner och designat om min privata infrastruktur. Två
                XenServer hypervisors i master/slav-läge med Docker på CoreOS.
                Som i sin tur är värd för Gitlab, GrayLog, UniFi-controller,
                Plex, webbservrar etcetera. Allt ligger bakom pfSence med
                HAProxy för domänaccess och SSL-cert.
              </Experience>

              <h2 className="mt-4 text-2xl uppercase">Utbildning</h2>
              <div className="mt-2 text-justify text-sm leading-normal">
                <ul className="ml-4 list-disc">
                  <li>
                    Armens tekniska skola, systemdesign och telekommunikation,
                    1993
                  </li>
                  <li>Elektroingenjör 80p, Mittuniversitetet, 1990–1992</li>
                </ul>
              </div>

              <h2 className="mt-4 text-2xl uppercase">Övriga meriter</h2>
              <div className=" mt-2 text-justify text-sm leading-normal">
                <ul className="ml-4 list-disc">
                  <li>Körkort B</li>
                </ul>
              </div>

              <h2 className="mt-4 text-2xl uppercase">Referenser</h2>
              <div className=" mt-2 text-justify text-sm leading-normal">
                På begäran
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
