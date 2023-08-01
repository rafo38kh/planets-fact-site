export default function TabButtons({ tabs, color, tabName, setTabName }) {
  return (
    <>
      {tabs.map((tab) => (
        <li
          key={tab}
          className={`font-spartan ${
            tabName === tab ? "text-white" : "text-lightSilver"
          }   md:border-solid md:border md:border-lightSilver md:w-full md:mb-4  md:hover:bg-darkSilver  lg:text-lightWhite`}
        >
          <button
            onClick={() => setTabName(tab)}
            type="button"
            className="uppercase text-xs font-bold tracking-[2px] pb-4 md:pb-2 md:pt-4 w-full "
          >
            {tab}
          </button>
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
