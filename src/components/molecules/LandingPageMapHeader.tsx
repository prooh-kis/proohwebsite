export function LandingPageMapHeader({ scrollToTarget, view, setView }: any) {
  return (
    <div className="flex justify-between items-center">
      <div
        className="absolute flex justify-around top-1 right-1 transform translate-x-0 w-[20%] z-20 px-2 pt-1 border bg-[#FFFFFF] rounded-[12px] shadow-lg cursor-pointer"
        style={{ marginTop: "0px" }}
      >
        <div
          onClick={() => {
            setView("map");
          }}
          className={`truncate flex justify-between ${
            view === "map" && "border-b border-b-2 border-[#00A0FA]"
          } px-1 py-2`}
        >
          <h1
            className={`truncate text-[12px] ${
              view === "map" ? "text-[#00A0FA]" : "text-[#859FAD]"
            }`}
          >
            Map
          </h1>
        </div>
        <div
          onClick={() => {
            setView("list");
            scrollToTarget();
          }}
          className={`truncate flex justify-between ${
            view === "list" && "border-b border-b-2 border-[#00A0FA]"
          } px-1 py-2`}
        >
          <h1
            className={`truncate text-[12px] ${
              view === "list" ? "text-[#00A0FA]" : "text-[#859FAD]"
            }`}
          >
            List
          </h1>
        </div>
        <div
          onClick={() => {
            setView("table");
            scrollToTarget();
          }}
          className={`truncate flex justify-between ${
            view === "table" && "border-b border-b-2 border-[#00A0FA]"
          } px-1 py-2`}
        >
          <h1
            className={`truncate text-[12px] ${
              view === "table" ? "text-[#00A0FA]" : "text-[#859FAD]"
            }`}
          >
            Table
          </h1>
        </div>
      </div>
    </div>
  );
}
