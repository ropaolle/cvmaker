import { useState } from "react";
import Fancy from "./pages/Fancy";
import Formal from "./pages/Formal";
import Home from "./pages/Home";
import { cn } from "./components/utils";

function App() {
  const [page, setPage] = useState("fancy");

  const CurrentPage = () => {
    switch (page) {
      case "fancy":
        return <Fancy />;
      case "formal":
        return <Formal />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="flex h-full min-w-fit flex-col print:invisible">
      <header className="flex items-center justify-between bg-slate-800 p-6  print:hidden">
        <div className="flex h-8 w-48 text-red-500">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path fill="white" d="M50 50 L398 50 L398 462 L50 462 Z" />
            <path
              fill="currentColor"
              stroke="red"
              d="M48 32C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48H48zm98.88 133.234c19.636 0 37.082 6.789 49.929 16.971c11.88 9.452 17.444 18.907 22.298 27.393l-33.923 16.949c-2.427-5.565-5.347-11.387-12.846-17.682c-8.248-6.552-16.478-8.484-23.524-8.484c-27.626 0-42.17 25.693-42.17 54.287c0 37.573 19.161 56.22 42.17 56.22c22.3 0 31.278-15.51 37.08-25.435L219.6 302.66c-6.315 9.926-12.374 19.635-25.95 29.069c-7.262 5.09-23.977 15.037-47.736 15.037C100.586 346.766 64 313.81 64 255.87c0-50.636 34.415-90.637 82.88-90.637zm75.483 5.328h45.565L303.31 292.24l35.125-121.678H384l-59.379 171.112H281.01l-58.647-171.111z"
            />
          </svg>
          <div className="ml-1 text-xl font-semibold text-slate-500">maker</div>
        </div>

        <div className="text-3xl font-bold text-slate-400 drop-shadow-lg">
          Curriculum vitae
        </div>

        <div className="flex h-8 w-48 justify-end text-slate-500">
          <a
            href="https://github.com/ropaolle/cvmaker"
            target="_blank"
            className="inline-flex "
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"
              />
            </svg>
          </a>
        </div>
      </header>

      <main className="flex flex-1 flex-col p-12 print:m-0 print:p-0">
        <div className="flex justify-center space-x-4 text-slate-700 print:hidden">
          <button
            onClick={() => setPage("fancy")}
            className={cn(
              page === "fancy" &&
                "font-semibold overline decoration-slate-600 decoration-4",
            )}
          >
            Fancy
          </button>
          <button
            onClick={() => setPage("formal")}
            className={cn(
              page === "formal" &&
                "font-semibold overline decoration-slate-600 decoration-4",
            )}
          >
            Formal
          </button>
          {/* <button
            onClick={() => setPage("home")}
            className={cn(
              page === "home" &&
                "font-semibold overline decoration-slate-600 decoration-4",
            )}
          >
            Home
          </button> */}
        </div>
        <CurrentPage />
      </main>

      <footer className="bg-slate-800 p-12 text-center text-slate-300 print:hidden">
        CVmaker, version {import.meta.env.PACKAGE_VERSION}
        <div>
          tech:
          <a href="https://vitejs.dev" className="text-slate-500 mx-2">
            vite
          </a>
          |
          <a href="https://tailwindcss.com/" className="text-slate-500 mx-2 ">
            teailwindcss
          </a>{" "}
          |
          <a href="https://react.dev/" className="text-slate-500 mx-2">
            rect
          </a>{" "}
          |
          <a href="https://www.typescriptlang.org/" className="text-slate-500 mx-2">
            typescript
          </a>{" "}
          |
          <a href="https://vercel.com/" className="text-slate-500 mx-2">
            vercel
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
