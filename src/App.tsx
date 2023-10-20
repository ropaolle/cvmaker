import Page from "./components/Page";

function App() {
  console.log(import.meta.env);
  return (
    <div className="flex h-full min-w-fit flex-col print:invisible">
      <header className="flex items-center justify-between bg-neutral-200 p-6  print:hidden">
        <div className="flex h-8 justify-center align-middle text-red-500">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path
              fill="currentColor"
              d="M48 32C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48H48zm98.88 133.234c19.636 0 37.082 6.789 49.929 16.971c11.88 9.452 17.444 18.907 22.298 27.393l-33.923 16.949c-2.427-5.565-5.347-11.387-12.846-17.682c-8.248-6.552-16.478-8.484-23.524-8.484c-27.626 0-42.17 25.693-42.17 54.287c0 37.573 19.161 56.22 42.17 56.22c22.3 0 31.278-15.51 37.08-25.435L219.6 302.66c-6.315 9.926-12.374 19.635-25.95 29.069c-7.262 5.09-23.977 15.037-47.736 15.037C100.586 346.766 64 313.81 64 255.87c0-50.636 34.415-90.637 82.88-90.637zm75.483 5.328h45.565L303.31 292.24l35.125-121.678H384l-59.379 171.112H281.01l-58.647-171.111z"
            />
          </svg>
          <div className="ml-1 text-xl font-semibold text-slate-500">maker</div>
        </div>
        <div className="text-3xl font-bold text-slate-600 drop-shadow-lg">
          Curriculum vitae
        </div>
        <div className="mb-8+ text-center">
          <a
            href="./cv_fullstackutvecklare_olofsjogren_20231020.pdf"
            className="rounded bg-green-600 px-8 py-4 font-bold text-white hover:bg-green-700"
          >
            Ladda ner...
          </a>
        </div>
      </header>
      <main className="flex flex-1 flex-col p-12 print:m-0 print:p-0">
        <Page />
      </main>
      <footer className="bg-slate-800 p-12 text-center text-slate-300 print:hidden">
        CVmaker | version {import.meta.env.PACKAGE_VERSION}
      </footer>
    </div>
  );
}

export default App;
