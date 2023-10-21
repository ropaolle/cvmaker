import { ReactNode } from "react";

export default function Page({ children }: { children: ReactNode }) {
  return (
    <div className="relative m-auto my-4 flex h-[297mm] w-[210mm] flex-col overflow-clip bg-slate-100 shadow-lg print:visible print:my-0">
      {children}
    </div>
  );
}
