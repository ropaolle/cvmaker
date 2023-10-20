import SocialLinks from "./SocialLinks";

export default function CvHeader({
  name,
  role,
}: {
  name: string;
  role: string;
}) {
  return (
    <>
      <div className="flex justify-center">
        <div className="flex w-[33%] flex-col justify-center space-y-3 bg-slate-700 p-8 text-sm text-gray-50">
          <SocialLinks />
        </div>
        <div className="flex w-[67%] flex-col justify-end bg-slate-100 p-8">
          <h1 className="text-[4rem] font-bold leading-none text-slate-700">
            {name}
          </h1>
          <h2 className="mt-4 text-2xl font-semibold uppercase tracking-wide text-sky-600">
            {role}
          </h2>
        </div>
      </div>
    </>
  );
}
