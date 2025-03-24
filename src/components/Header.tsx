import chevronsRight from "../assets/icons/chevrons-right.svg";
import list from "../assets/icons/list.svg";
import stroke from "../assets/icons/stroke-icon.svg";
import { Icon } from "./Icon";

type HeaderProps = {
  displayCalendar: boolean;
  setDisplayCalendar: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Header = ({
  displayCalendar,
  setDisplayCalendar,
}: HeaderProps) => {
  return (
    <header className="border-b border-solid border-[#e0e0e0] px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            className="cursor-pointer p-2"
            onClick={() => setDisplayCalendar(false)}
          >
            <Icon src={chevronsRight} />
          </button>
          <h1 className="text-xl leading-8 font-semibold text-[#4c4c4c]">
            Provider Calendar
          </h1>
        </div>
        <div className="flex items-center">
          <button
            className={`rounded-l-lg border border-r-0 border-solid border-[#e0e0e0] p-2 hover:bg-[#dbe7cc] ${!displayCalendar && "bg-[#dbe7cc]"} cursor-pointer`}
            onClick={() => setDisplayCalendar(false)}
          >
            <Icon src={list} />
          </button>
          <button
            className={`rounded-r-lg border border-solid border-[#e0e0e0] p-2 hover:bg-[#dbe7cc] ${displayCalendar && "bg-[#dbe7cc]"} cursor-pointer`}
            onClick={() => setDisplayCalendar(true)}
          >
            <Icon src={stroke} />
          </button>
        </div>
      </div>
    </header>
  );
};
