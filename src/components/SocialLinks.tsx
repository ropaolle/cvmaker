import github from "../assets/github.svg";
import globe from "../assets/globe.svg";
import linkedin from "../assets/linkedin.svg";
import twitter from "../assets/twitter.svg";

export default function SocialLinks() {
  return (
    <>
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
    </>
  );
}
