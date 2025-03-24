import { Icon } from "./Icon";
import chevronLeft from "../assets/icons/chevron-left.svg";
import chevronRight from "../assets/icons/chevron-right.svg";
import { Select } from "./Select";
import FullCalendar from "@fullcalendar/react";
import dayGridMonth from "@fullcalendar/daygrid";
import timeGridWeek from "@fullcalendar/timegrid";
import timeGridDay from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useState } from "react";

export const Calendar = () => {
  const [view, setView] = useState<
    "timeGridDay" | "timeGridWeek" | "dayGridMonth"
  >("timeGridWeek");

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between pb-4">
        <div className="flex items-center gap-2">
          <button className="cursor-pointer rounded-full border border-solid border-[#e0e0e0] px-3.5 py-3">
            <Icon src={chevronLeft} alt="Left Arrow Icon" width={8} />
          </button>
          <button className="cursor-pointer rounded-full border border-solid border-[#e0e0e0] px-3.5 py-3">
            <Icon src={chevronRight} alt="Right Arrow Icon" width={8} />
          </button>
          <h3 className="leading-6 font-bold text-[#4c4c4c]">23-29 Mar 2025</h3>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 text-[10px] leading-4 font-medium text-[#4c4c4c]">
            <div className="h-2 w-4 rounded-lg bg-[#757575]"></div>
            Session Event
          </div>

          <div className="flex items-center gap-1 text-[10px] leading-4 font-medium text-[#4c4c4c]">
            <div className="h-2 w-4 rounded-lg border border-solid border-[#4c4c4c] bg-[#e0e0e0]"></div>
            Calendar Event
          </div>

          <Select
            options={[
              { label: "Monthly", value: "dayGridMonth" },
              { label: "Weekly", value: "timeGridWeek" },
              { label: "Daily", value: "timeGridDay" },
            ]}
            onChange={(e) =>
              setView(
                e.target.value as
                  | "timeGridDay"
                  | "timeGridWeek"
                  | "dayGridMonth",
              )
            }
            value={view}
          />
        </div>
      </div>

      <div className="grow">
        <div className="h-[calc(100vh-160px)] overflow-y-auto">
          <FullCalendar
            plugins={[
              dayGridMonth,
              timeGridWeek,
              timeGridDay,
              interactionPlugin,
            ]}
            initialView={view}
            headerToolbar={false}
            dayHeaderContent={(args) => {
              return (
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] leading-4 font-medium text-[#9e9e9e]">
                    {args.date.toLocaleDateString("en-US", {
                      weekday: "short",
                    })}
                  </span>
                  <span className="text-sm leading-6 font-bold text-[#4c4c4c]">
                    {args.date.toLocaleDateString("en-US", {
                      day: "2-digit",
                    })}
                  </span>
                </div>
              );
            }}
            allDaySlot={false}
            slotLabelClassNames={() =>
              "text-[10px] leading-4 font-medium text-[#9e9e9e]"
            }
            slotLabelFormat={{
              hour: "numeric",
              minute: "2-digit",
              hour12: true,
            }}
          />
        </div>
      </div>
    </div>
  );
};
