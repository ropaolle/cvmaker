import github from "./assets/github.svg";
import globe from "./assets/globe.svg";
import linkedin from "./assets/linkedin.svg";
import headshotSquare from "./assets/olle-headshot-small-square.jpg";
import twitter from "./assets/twitter.svg";

function App() {
  return (
    <div className="m-auto flex h-full flex-col">
      <header className="bg-neutral-200 p-12">Header</header>

      <main className=" container+ m-auto flex flex-1 flex-col px-12 py-12 ">
        <article className="prose max-w-full text-center lg:prose-xl">
          <h1>My fancy CV</h1>
          <p>How should I make sure that my CV get any attention?</p>
        </article>

        {/* Page 1 */}
        <div className="m-auto my-4 flex h-a4 w-a4 flex-col bg-slate-100 shadow-lg">
          <div className="flex justify-center">
            <div className="flex w-[33%] flex-col justify-between bg-slate-700 px-8 py-12 text-sm text-gray-50">
              <div className="flex">
                <img src={globe} className="mr-2 h-6 w-6" />
                www.ropaolle.se
              </div>
              <div className="flex">
                <img src={linkedin} className="mr-2 h-6 w-6" />
                linkedin.com/in/ropaolle
              </div>
              <div className="flex">
                <img src={github} className="mr-2 h-6 w-6" />
                github.com/ropaolle
              </div>
              <div className="flex">
                <img src={twitter} className="mr-2 h-6 w-6" />
                x.com/ropaolle
              </div>
            </div>
            <div className="w-[67%] bg-slate-100 px-8 py-4">
              <h1 className="mb-0 mt-16 text-[4rem] font-bold leading-none text-slate-800">
                Olof Sjögren
              </h1>
              <h2 className="mt-4 text-[2rem]">Fullstackutvecklare</h2>
            </div>
          </div>

          <div className="flex bg-sky-500">
            <div className="px-8+ py-4+ flex w-[33%] flex-col items-center justify-center ">
              <img
                src={headshotSquare}
                className="h-40  w-40 rounded-full border-8"
                // className="absolute rounded border-8 h-48"
              />
            </div>
            <div className="w-[67%] px-8 py-4 text-justify">
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
              <div className="font-semibold uppercase text-sky-500">
                Kontakt
              </div>
              <div>Olof Sjögren</div>
              <div>Fridshyddevägen 1</div>
              <div>191 36 SOLLENTUNA</div>
              <div>Sverige</div>
              <div className="mt-2">070–7165447</div>
              <div>olof.sjogren@ropaolle.se</div>
              <div className="mt-4 font-semibold text-sky-500">
                Datum/födelseort
              </div>
              <div>11 maj 1971</div>
              <div>Sollentuna</div>
              <div className="mt-4 font-semibold text-sky-500">
                Nationalitet
              </div>
              Svensk
              <div className="mt-4 font-semibold text-sky-500">Språk</div>
              <div>Svenska modersmål</div>
              <div>Engelsk flytande</div>
            </div>

            <div className="w-[67%] bg-slate-100 px-8 py-4">
              <h2 className="mt-4 text-2xl uppercase">Arbetslivserfarenhet</h2>

              {/* jobb */}
              <h3 className="mt-2 text-xl font-semibold">
                Kompetensutveckling/sabbatsår
              </h3>
              <div className="flex flex-row justify-between border-b-2 text-sm">
                <div>Frilans, Sollentuna/Öland</div>
                <div>2022 - nu</div>
              </div>
              <div className=" mt-2 text-justify text-sm">
                Underhåll av äldre webprojekt. Kompetensutveckling genom att
                bygga lösningar med senaste releaserna av till exempel NextJS,
                Vite, Astro, Supabase, Zustand, React-hook-form, Zod med mera.
                Rivit ner och designat om min privata infrastruktur. Två
                XenServer hypervisors i master/slav-läge med Docker på CoreOS.
                Som i sin tur är värd för Gitlab, GrayLog, UniFi-controller,
                Plex, webbservrar etcetera. Allt ligger bakom pfSence med
                HAProxy för domänaccess och SSL-cert.
              </div>

              {/* jobb */}
              <h3 className="mt-4 text-xl font-semibold">
                Team Swift Maintainer (konsult)
              </h3>
              <div className="flex flex-row justify-between border-b-2 text-sm">
                <div>Skandinaviska Enskilda Banken AB, Solna</div>
                <div>2020 - 2021</div>
              </div>
              <div className=" mt-2 text-justify text-sm">
                Underhåll, implementation, test och support av ett antal
                centrala system primärt för SWIFT-miljön och Anti-Money
                Laundering (AML). Ett tight team med medarbetare i Sverige och
                Lettland. Internt användes engelska. Scrum används som metodik.
                Merparten av applikationerna kom från IBM, Oracle och Swift.
              </div>

              {/* jobb */}
              <h3 className="mt-4 text-xl font-semibold">
                Team Swift Maintainer (konsult)
              </h3>
              <div className="flex flex-row justify-between border-b-2 text-sm">
                <div>Skandinaviska Enskilda Banken AB, Solna</div>
                <div>2020 - 2021</div>
              </div>
              <div className=" mt-2 text-justify text-sm">
                Underhåll, implementation, test och support av ett antal
                centrala system primärt för SWIFT-miljön och Anti-Money
                Laundering (AML). Ett tight team med medarbetare i Sverige och
                Lettland. Internt användes engelska. Scrum används som metodik.
                Merparten av applikationerna kom från IBM, Oracle och Swift.
              </div>

              {/* end */}
            </div>
          </div>
        </div>

         {/* Page 2 */}
         <div className="m-auto my-4 flex h-a4 w-a4 flex-col bg-slate-100 shadow-lg">asd</div>
      </main>

      <footer className="bg-neutral-200 p-12">Footer</footer>
    </div>
  );
}

export default App;
