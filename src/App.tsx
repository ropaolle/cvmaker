function App() {
  return (
    <div className="flex flex-col h-full m-auto">
      {/* <div className="flex flex-col h-a4 w-a4 bg-slate-50  my-4 shadow-lg m-auto"> */}
      <header className="bg-neutral-200 p-12">Header</header>

      <main className=" container+ flex flex-col flex-1 py-12 px-12 m-auto ">
        <article className="prose text-center lg:prose-xl max-w-full">
          <h1>My fancy CV</h1>
          <p>How should I make sure that my CV get any attention?</p>
        </article>

        <div className="grid grid-cols-3 h-a4 w-a4 bg-slate-100 my-4 shadow-lg m-auto">
          <div className="grid-item bg-slate-500 ">1</div>
          <div className=" px-8 grid-item bg-slate-100 col-span-2 ">
            <article className="prose ">
              <h1 className="text-[5rem] text-slate-00  mb-0">Olof Sjögren</h1>
              <h2 className="">Fullstackutvecklare</h2>
            </article>
          </div>
          <div className="grid-item bg-sky-500 "></div>
          <div className="grid-item bg-sky-500 col-span-2 p-8">
            <article className="prose ">
              Jag är en erfaren DevOps/utvecklare som älskar problemlösning och
              ny teknik. Automatisera och bygga CD/CI pipelines har alltid varit
              något jag försökt driva på i projekt jag arbetat med. Lätt att
              anpassa mig och arbeta i team, gärna agilt. Lösningsorienterad och
              van att ta ansvar och tillsammans med teamet driva projekten i
              mål.
            </article>
          </div>
          <div className="grid-item bg-slate-500">4</div>
          <div className="grid-item bg-slate-100 col-span-2">
            5<div>asd</div>
            <div>asd</div>
            <div>asd</div>
            <div>asd</div>
            <div>asd</div>
            <div>asd</div>
            <div>asd</div>
            <div>asd</div>
            <div>asd</div>
            <div>asd</div>
            <div>asd</div>
            <div>asd</div>
            <div>asd</div>
            <div>asd</div>
            <div>asd</div>
            <div>asd</div>
            <div>asd</div>
            <div>asd</div>
            <div>asd</div>
          </div>
        </div>
      </main>

      <footer className="bg-neutral-200 p-12">Footer</footer>
    </div>
  );
}

export default App;
