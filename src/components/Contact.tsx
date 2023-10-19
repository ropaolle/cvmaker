import phone from "../assets/phone.svg";
import mail from "../assets/mail.svg";

export default function Contact() {
  return (
    <>
      <div className="font-semibold uppercase text-sky-500">Kontakt</div>
      <div>Olof Sjögren</div>
      <div>Fridshyddevägen 1</div>
      <div>191 36 SOLLENTUNA</div>
      <div>Sverige</div>
      <div className="mt-2 flex">
        <img src={phone} className="mr-2 mt-[1px] h-5 w-5" />
        070–7165447
      </div>
      <div className="flex">
        <img src={mail} className="mr-2 mt-[1px] h-5 w-5" />
        olof.sjogren@ropaolle.se
      </div>
      <div className="mt-4 font-semibold text-sky-500">Datum/födelseort</div>
      <div>11 maj 1971</div>
      <div>Sollentuna</div>
      <div className="mt-4 font-semibold text-sky-500">Nationalitet</div>
      <div>Svensk</div>
      <div className="mt-4 font-semibold text-sky-500">Språk</div>
      <div>Svenska modersmål</div>
      <div>Engelsk flytande</div>
    </>
  );
}
