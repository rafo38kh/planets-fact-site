export default function InfoBox({ title, info }) {
  return (
    <div className="flex items-center md:items-start justify-between py-4 px-6 border-solid border border-lightSilver md:flex-col max-w-xs">
      <span className="text-xs font-bold leading-4 tracking-wider text-lightSilver">
        {title}
      </span>
      <span className="font-antonio text-xl uppercase lg:text-4xl lg:mt-1 lg:mb-4">
        {info}
      </span>
    </div>
  );
}
