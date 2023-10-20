import { Email, FlagSweden, FlagUsa, Phone } from "./icons";

export default function Contact() {
  return (
    <>
      <div className="mb-1 text-xl uppercase tracking-wide text-sky-500">
        Kontakt
      </div>
      <div>Olof Sjögren</div>
      <div>Fridshyddevägen 1</div>
      <div>191 36 SOLLENTUNA</div>
      <div>Sverige</div>
      <div className="mt-2 flex">
        <Phone className="mr-2" />
        070–7165447
      </div>
      <div className="flex">
        <Email className="mr-2" />
        olof.sjogren@ropaolle.se
      </div>
      <div className="mt-4 font-semibold text-sky-500">Datum/födelseort</div>
      <div>11 maj 1971</div>
      <div>Sollentuna</div>
      <div className="mt-4 font-semibold text-sky-500">Nationalitet</div>
      <div>Svensk</div>
      <div className="mt-4 font-semibold text-sky-500">Språk</div>
      <div className="flex">
        <FlagSweden className="mr-2" />
        Svenska modersmål
      </div>
      <div className="flex">
        <FlagUsa className="mr-2" />
        Engelsk flytande
      </div>
    </>
  );
}
