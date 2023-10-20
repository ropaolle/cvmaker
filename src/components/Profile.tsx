import { ReactNode } from "react";
import Headshot from "./Headshot";

export default function Profile({
  title,
  children,
}: {
  title?: string;
  children: ReactNode;
}) {
  return (
    <div className="flex bg-sky-400">
      <div className="px-8+ py-4+ flex w-[33%] flex-col items-center justify-center">
        <Headshot type="circle" />
      </div>
      <div className="w-[67%] px-8 py-4">
        {title && (
          <div className="font-semibold uppercase tracking-wide text-slate-50">
            {title}
          </div>
        )}
        <div className="hyphens-auto">{children}</div>
      </div>
    </div>
  );
}
