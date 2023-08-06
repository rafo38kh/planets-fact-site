export default function TabButtons({ tabs, color, tabName, setTabName }) {
  return (
    <>
      {tabs.map((tab, index) => (
        <li
          key={tab}
          className={`font-spartan ${
            tabName === tab ? "text-white" : "text-lightSilver"
          }   md:mb-4 md:w-full md:border md:border-solid md:border-lightSilver  md:hover:bg-darkSilver  lg:text-lightWhite`}
        >
          <div className="flex items-center justify-center gap-6">
            <div className="hidden pl-4 pt-2 md:block  lg:block">
              {String(index + 1).padStart(2, "0")}
            </div>
            <button
              onClick={() => setTabName(tab)}
              type="button"
              className="w-full pb-4 text-xs font-bold uppercase tracking-[2px] md:pb-2 md:pt-4 md:text-left"
            >
              {tab}
            </button>
          </div>
          <div
            style={{
              // background: tabName === tab ? color : "transparent",
              borderBottom: `5px solid ${
                tabName === tab ? color : "transparent"
              }`,
            }}
          />
        </li>
      ))}
    </>
  );
}
