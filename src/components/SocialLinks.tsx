import { GitHub, Globe, LinkedIn, Twitter } from "./icons";

export default function SocialLinks() {
  return (
    <>
      <div className="flex">
        <Globe className="mr-2 h-6 w-6" />
        <a href="https://www.ropaolle.se">www.ropaolle.se</a>
      </div>
      <div className="flex">
        <LinkedIn className="mr-2 h-6 w-6" />
        <a href="https://linkedin.com/in/ropaolle">linkedin.com/in/ropaolle</a>
      </div>
      <div className="flex">
        <GitHub className="mr-2 h-6 w-6" />
        <a href="https://github.com/ropaolle">github.com/ropaolle</a>
      </div>
      <div className="flex">
        <Twitter className="mr-2 h-6 w-6" />
        <a href="https://x.com/ropaolle">x.com/ropaolle</a>
      </div>
    </>
  );
}
