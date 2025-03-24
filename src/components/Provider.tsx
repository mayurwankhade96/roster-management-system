import { Icon } from "./Icon";
import clinicIcon from "../assets/icons/clinic.svg";
import videoCamIcon from "../assets/icons/video-cam.svg";
import rightIconOrange from "../assets/icons/right-icon-orange.svg";
import leftIcon from "../assets/icons/leftIIconGrey.svg";
import rightIcon from "../assets/icons/rightIconGrey.svg";
import { useRef } from "react";

type ClinicDetails = {
  id: number;
  name: string;
};

type Blocked = {
  slot: string;
  reason: string;
};

export type Availability = {
  online_slots: string[];
  offline_slots: string[];
  both_slots: string[];
  online_booked_slots: string[];
  offline_booked_slots: string[];
  blocked_slots: Blocked[];
};

export type Provider = {
  id: number;
  name: string;
  provider_usertype: string;
  is_inhouse: boolean;
  image: string;
  clinic_details: ClinicDetails;
  availabilities: Availability[];
};

type ProviderProps = {
  provider: Provider;
  setDisplayCalendar: React.Dispatch<React.SetStateAction<boolean>>;
};

const timings = [
  "08:00",
  "08:15",
  "08:30",
  "08:45",
  "09:00",
  "09:15",
  "09:30",
  "09:45",
  "10:00",
  "10:15",
  "10:30",
  "10:45",
  "11:00",
  "11:15",
  "11:30",
  "11:45",
  "12:00",
  "12:15",
  "12:30",
  "12:45",
  "13:00",
  "13:15",
  "13:30",
  "13:45",
  "14:00",
  "14:15",
  "14:30",
  "14:45",
  "15:00",
  "15:15",
  "15:30",
  "15:45",
  "16:00",
  "16:15",
  "16:30",
  "16:45",
  "17:00",
  "17:15",
  "17:30",
  "17:45",
  "18:00",
  "18:15",
  "18:30",
  "18:45",
  "19:00",
  "19:15",
  "19:30",
  "19:45",
  "20:00",
  "20:15",
  "20:30",
  "20:45",
  "21:00",
  "21:15",
  "21:30",
  "21:45",
  "22:00",
  "22:15",
  "22:30",
  "22:45",
  "23:00",
  "23:15",
  "23:30",
  "23:45",
];

export const Provider = ({ provider, setDisplayCalendar }: ProviderProps) => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const getBackgroundColor = (timeToMatch: string) => {
    if (provider.availabilities[0].online_slots.includes(timeToMatch)) {
      return { background: "#97cc95", color: "#fff", title: "" };
    }
    if (provider.availabilities[0].offline_slots.includes(timeToMatch)) {
      return { background: "#e76943", color: "#fff", title: "" };
    }
    if (provider.availabilities[0].both_slots.includes(timeToMatch)) {
      return { background: "#5aa9a8", color: "#fff", title: "" };
    }
    if (provider.availabilities[0].online_booked_slots.includes(timeToMatch)) {
      return { background: "#355e80", color: "#fff", title: "" };
    }
    if (provider.availabilities[0].offline_booked_slots.includes(timeToMatch)) {
      return { background: "#80490b", color: "#fff", title: "" };
    }
    if (
      provider.availabilities[0].blocked_slots
        .map((o) => o.slot)
        .includes(timeToMatch)
    ) {
      const reason = provider.availabilities[0].blocked_slots.find(
        (o) => o.slot === timeToMatch,
      )?.reason;
      return { background: "#c73031", color: "#fff", title: reason || "" };
    }
    return { background: "#eee", color: "#4c4c4c", title: "" };
  };

  const handleLeftScroll = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  };

  const handleRightScroll = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        left: scrollContainerRef.current?.scrollWidth || 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex h-60 gap-4 py-4">
      <div className="flex h-full min-w-40 flex-col justify-between">
        <div>
          <img
            className="mb-2 rounded-full"
            src={provider.image}
            alt={provider.name}
            width={64}
          />
          <h5 className="text-sm leading-6 font-semibold text-[#607447] underline">
            {provider.name}
          </h5>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex h-6 w-11 items-center gap-1 rounded-lg bg-[#f7f7f7] text-[#4c4c4c]">
            <Icon src={clinicIcon} /> 5
          </div>
          <div className="flex h-6 w-11 items-center gap-1 rounded-lg bg-[#f7f7f7] text-[#4c4c4c]">
            <Icon src={videoCamIcon} /> 5
          </div>
        </div>
        <button
          className="flex cursor-pointer items-center gap-2 text-sm leading-6 font-semibold text-[#e76943] underline"
          onClick={() => setDisplayCalendar(true)}
        >
          View Calendar <Icon src={rightIconOrange} />
        </button>
      </div>

      <div className="flex min-w-0 grow border border-solid border-[#e0e0e0]">
        <button
          className="flex w-10 shrink-0 cursor-pointer items-center justify-center border-r border-solid border-[#e0e0e0] hover:bg-gray-200"
          onClick={handleLeftScroll}
        >
          <Icon src={leftIcon} width={8} />
        </button>

        <div
          className="scroll-container flex flex-col flex-wrap justify-between gap-3.5 overflow-x-auto p-4"
          ref={scrollContainerRef}
        >
          {timings.map((time) => {
            return (
              <div
                key={time}
                className={`flex h-7 w-16 items-center justify-center rounded-lg text-center text-xs leading-5 font-medium`}
                style={{
                  backgroundColor: getBackgroundColor(time).background,
                  color: getBackgroundColor(time).color,
                }}
                title={getBackgroundColor(time).title}
              >
                {time}
              </div>
            );
          })}
        </div>

        <button
          className="flex w-10 shrink-0 cursor-pointer items-center justify-center border-l border-solid border-[#e0e0e0] hover:bg-gray-200"
          onClick={handleRightScroll}
        >
          <Icon src={rightIcon} width={8} />
        </button>
      </div>
    </div>
  );
};
