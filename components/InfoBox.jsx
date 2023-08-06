export default function InfoBox({ title, info }) {
  return (
    <div className="flex w-full items-center justify-between border border-solid border-lightSilver px-6 py-4 md:flex-col md:items-start">
      <span className="text-xs font-bold leading-4 tracking-wider text-lightSilver">
        {title}
      </span>
      <span className="font-antonio text-xl uppercase lg:mb-4 lg:mt-1 lg:text-4xl">
        {info}
      </span>
    </div>
  );
}
