import { GitHub, Globe, LinkedIn, Twitter } from "./icons";

export default function SocialLinks() {
  return (
    <>
      <div className="flex">
        <Globe className="mr-2 h-6 w-6" />
        <a
          href="https://www.ropaolle.se"
          className="decoration-slate-400 underline-offset-4 hover:underline hover:decoration-2"
        >
          www.ropaolle.se
        </a>
      </div>
      <div className="flex">
        <LinkedIn className="mr-2 h-6 w-6" />
        <a
          href="https://linkedin.com/in/ropaolle"
          className="decoration-slate-400 underline-offset-4 hover:underline hover:decoration-2"
        >
          linkedin.com/in/ropaolle
        </a>
      </div>
      <div className="flex">
        <GitHub className="mr-2 h-6 w-6" />
        <a
          href="https://github.com/ropaolle"
          className="decoration-slate-400 underline-offset-4 hover:underline hover:decoration-2"
        >
          github.com/ropaolle
        </a>
      </div>
      <div className="flex">
        <Twitter className="mr-2 h-6 w-6" />
        <a
          href="https://x.com/ropaolle"
          className="decoration-slate-400 underline-offset-4 hover:underline hover:decoration-2"
        >
          x.com/ropaolle
        </a>
      </div>
    </>
  );
}
