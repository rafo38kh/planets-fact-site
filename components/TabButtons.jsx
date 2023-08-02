export default function TabButtons({ tabs, color, tabName, setTabName }) {
  // console.log(tabs.filter((el) => ));

  return (
    <>
      {tabs.map((tab, index) => (
        <li
          key={tab}
          className={`font-spartan ${
            tabName === tab ? "text-white" : "text-lightSilver"
          }   md:border-solid md:border md:border-lightSilver md:w-full md:mb-4  md:hover:bg-darkSilver  lg:text-lightWhite`}
        >
          <div className="flex items-center justify-center gap-6">
            <div className="pt-2 pl-4 hidden md:block  lg:block">
              {String(index + 1).padStart(2, "0")}
            </div>
            <button
              onClick={() => setTabName(tab)}
              type="button"
              className="uppercase text-xs font-bold tracking-[2px] pb-4 md:pb-2 md:pt-4 w-full md:text-left"
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
