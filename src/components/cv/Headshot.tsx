import headshotSquare from "../../assets/olle-headshot-small-square.jpg";
import { cn } from "../utils";

export default function Headshot({ type }: { type: "square" | "circle" }) {
  return (
    <img
      src={headshotSquare}
      className={cn(
        type === "circle"
          ? "h-40  w-40 rounded-full border-8"
          : "absolute h-48 w-48 rounded border-8",
      )}
    />
  );
}
