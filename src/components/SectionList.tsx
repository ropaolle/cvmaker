export default function SectionList({
  content: { title, items },
}: {
  content: { title: string; items: string[] };
}) {
  return (
    <>
      <h2 className="mt-8 text-2xl uppercase text-slate-900">{title}</h2>
      <div className="mt-2 text-justify text-sm leading-normal">
        <ul className="ml-4 list-disc">
          {items.map((value, i) => (
            <li key={i}>{value}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
