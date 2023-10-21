export default function DownloadButton({
  link,
  label = "Ladda ner",
}: {
  link: string;
  label?: string;
}) {
  return (
    <div className="m-auto mb-24 mt-12">
      <a
        href={link}
        className="inline-flex items-center rounded bg-green-600 px-8 py-4 text-xl text-white hover:bg-green-700"
      >
        <svg
          className="mr-2 h-4 w-4 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
        </svg>
        <span>{label}</span>
      </a>
    </div>
  );
}
