import { Icon } from "./Icon";
import chevronLeft from "../assets/icons/chevron-left.svg";
import chevronRight from "../assets/icons/chevron-right.svg";
import { useState } from "react";
import { Legend } from "./Legend";

export const DateCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [active, setActive] = useState(0);

  const getDates = (startDay: number) => {
    const date = new Date();
    date.setDate(date.getDate() + startDay);
    return {
      date: date.toLocaleDateString("en-US", { day: "2-digit" }),
      day: date.toLocaleDateString("en-US", { weekday: "short" }),
      month: date.toLocaleDateString("en-US", { month: "short" }),
      year: date.toLocaleDateString("en-US", { year: "numeric" }),
    };
  };

  const [currentDate, setCurrentDate] = useState(getDates(currentIndex));

  const handlePreviousDatesClick = () => {
    setCurrentIndex(currentIndex - 7);
    setCurrentDate(getDates(currentIndex - 7));
    setActive(0);
  };

  const handleDateClick = (currentDateIndex: number, index: number) => {
    setActive(index);
    setCurrentDate(getDates(currentDateIndex + index));
  };

  const handleNextDatesClick = () => {
    setCurrentIndex(currentIndex + 7);
    setCurrentDate(getDates(currentIndex + 7));
    setActive(0);
  };

  return (
    <>
      <div className="flex items-center justify-between gap-4 pb-4">
        <button
          className="cursor-pointer rounded-full border border-solid border-[#e0e0e0] px-3.5 py-3"
          onClick={handlePreviousDatesClick}
        >
          <Icon src={chevronLeft} alt="Left Arrow Icon" width={8} />
        </button>

        <div className="flex grow items-center justify-between gap-4">
          {[...Array(7)].map((_, i) => {
            const date = getDates(currentIndex + i);
            return (
              <button
                key={`${date.day}-${date.month}`}
                className={`grow cursor-pointer rounded-lg border border-solid border-[#e0e0e0] px-2 py-1 ${active === i && "border-0 bg-[#4e6137]"}`}
                onClick={() => handleDateClick(currentIndex, i)}
              >
                <div className="flex flex-col">
                  <span
                    className={`text-[10px] leading-4 font-medium text-[#9e9e9e] ${active === i && "text-white"}`}
                  >
                    {date.day}
                  </span>
                  <span
                    className={`text-sm leading-6 font-bold text-[#4c4c4c] ${active === i && "text-white"}`}
                  >
                    {date.date}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        <button
          className="cursor-pointer rounded-full border border-solid border-[#e0e0e0] px-3.5 py-3"
          onClick={handleNextDatesClick}
        >
          <Icon src={chevronRight} alt="Right Arrow Icon" width={8} />
        </button>
      </div>

      <div className="flex items-center justify-between gap-4 py-4">
        <div className="grow">
          <p className="leading-6 font-bold text-[#4c4c4c]">
            Showing full schedules for {currentDate.day}, {currentDate.date}{" "}
            {currentDate.month} {currentDate.year}
          </p>
          <p className="text-xs leading-5 font-medium text-[#757575]">
            Showing slots in the 8 am to 12 am window.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-x-6 gap-y-2">
          <Legend />
        </div>
      </div>
    </>
  );
};
