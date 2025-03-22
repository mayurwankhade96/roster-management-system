const legendData = [
  {
    text: "Online",
    color: "#97cc95",
  },
  {
    text: "Offline",
    color: "#e76943",
  },
  {
    text: "Online+Offline",
    color: "#5aa9a8",
  },
  {
    text: "Online Booked",
    color: "#355e80",
  },
  {
    text: "Offline Booked",
    color: "#80490b",
  },
  {
    text: "Blocked",
    color: "#c73031",
  },
];

export const Legend = () => {
  return (
    <>
      {legendData.map((o) => {
        return (
          <div
            key={o.text}
            className="flex items-center gap-1 text-xs leading-5 font-medium text-[#4c4c4c]"
          >
            <div
              className="h-2 w-4 rounded-lg"
              style={{ backgroundColor: o.color }}
            ></div>
            {o.text}
          </div>
        );
      })}
    </>
  );
};
