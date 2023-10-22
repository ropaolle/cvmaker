import { ReactNode } from "react";

export default function Page({
  page,
  pageCount = 2,
  language = "sv",
  children,
}: {
  page: number;
  pageCount?: number;
  language?: "sv" | "en";
  children: ReactNode;
}) {
  return (
    <div className="relative m-auto my-4 flex h-[297mm] w-[210mm] flex-col overflow-clip bg-slate-100 shadow-lg hover:outline hover:outline-2 hover:outline-slate-400 print:visible print:my-0">
      {children}
      <div className="absolute bottom-2 right-2 text-xs text-slate-700">
        {language === "sv"
          ? `Sida ${page} av ${pageCount}`
          : `Page ${page} of {pageCount}`}
      </div>
    </div>
  );
}
