import { Email, FlagSweden, FlagUsa, Phone } from "./icons";
import { cn } from "./utils";

export default function Contact({
  textColor,
  headingColor,
}: {
  textColor?: string;
  headingColor?: string;
}) {
  return (
    <div className={cn(textColor)}>
      <div className={cn("mb-1 text-xl uppercase tracking-wide font-semibold", headingColor)}>
        Kontakt
      </div>
      <div>Olof Sjögren</div>
      <div>Fridshyddevägen 1</div>
      <div>191 36 SOLLENTUNA</div>
      <div>Sverige</div>
      <div className="mt-2 flex items-center">
        <Phone className={cn("mr-2", textColor)} />
        070–7165447
      </div>
      <div className="flex items-center">
        <Email className="mr-2" />
        olof.sjogren@ropaolle.se
      </div>
      <div className={cn("mt-4 font-semibold", headingColor)}>
        Datum/födelseort
      </div>
      <div>11 maj 1971</div>
      <div>Sollentuna</div>
      <div className={cn("mt-4 font-semibold", headingColor)}>Nationalitet</div>
      <div>Svensk</div>
      <div className={cn("mt-4 font-semibold", headingColor)}>Språk</div>
      <div className="flex">
        <FlagSweden className="mr-2" />
        Svenska modersmål
      </div>
      <div className="flex">
        <FlagUsa className="mr-2" />
        Engelsk flytande
      </div>
    </div>
  );
}
