export default function TabButtons({ tabs, color, tabName, setTabName }) {
  return (
    <>
      {tabs.map((tab) => (
        <li key={tab} className="uppercase">
          <button
            style={{
              borderBottom: `2px solid ${
                tabName === tab ? color : "transparent"
              }`,
            }}
            onClick={() => setTabName(tab)}
            type="button"
          >
            {tab}
          </button>
        </li>
      ))}
    </>
  );
}
