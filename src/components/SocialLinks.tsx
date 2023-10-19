import github from "../assets/github.svg";
import globe from "../assets/globe.svg";
import linkedin from "../assets/linkedin.svg";
import twitter from "../assets/twitter.svg";

export default function SocialLinks() {
  return (
    <>
      <div className="flex">
        <img src={globe} className="mr-2 h-6 w-6" />
        <a href="https://www.ropaolle.se">www.ropaolle.se</a>
      </div>
      <div className="flex">
        <img src={linkedin} className="mr-2 h-6 w-6" />
        <a href="https://linkedin.com/in/ropaolle">linkedin.com/in/ropaolle</a>
      </div>
      <div className="flex">
        <img src={github} className="mr-2 h-6 w-6" />
        <a href="https://github.com/ropaolle">github.com/ropaolle</a>
      </div>
      <div className="flex">
        <img src={twitter} className="mr-2 h-6 w-6" />
        <a href="https://x.com/ropaolle">x.com/ropaolle</a>
      </div>
    </>
  );
}
