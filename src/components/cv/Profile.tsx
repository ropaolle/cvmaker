import { ReactNode } from "react";
import Headshot from "./Headshot";

export default function Profile({
  title = "Profile",
  children,
}: {
  title?: string;
  children: ReactNode;
}) {
  return (
    <div className="flex bg-sky-500">
      <div className="px-8+ py-4+ flex w-[33%] flex-col items-center justify-center ">
        <Headshot type="circle" />
      </div>
      <div className="w-[67%] px-8 py-4 text-justify">
        {title && (
          <div className="font-semibold uppercase text-slate-50">{title}</div>
        )}
        {children}
      </div>
    </div>
  );
}
