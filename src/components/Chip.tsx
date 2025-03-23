import closeIcon from "../assets/icons/close-icon.svg";
import { Icon } from "./Icon";

type ChipProps = {
  suggestion: string;
  index: number;
  selectedSuggestions: string[];
  setSelectedSuggestions: React.Dispatch<React.SetStateAction<string[]>>;
};

export const Chip = ({
  suggestion,
  index,
  selectedSuggestions,
  setSelectedSuggestions,
}: ChipProps) => {
  return (
    <div
      className={`mb-4 flex items-center justify-between rounded-lg p-3 text-sm leading-6 font-medium text-[#4c4c4c] ${index % 2 === 0 ? "bg-[#e3f2ff]" : "#ebe3f5"}`}
    >
      {suggestion}
      <button
        className="cursor-pointer"
        onClick={() =>
          setSelectedSuggestions(
            selectedSuggestions.filter((name) => name !== suggestion),
          )
        }
      >
        <Icon src={closeIcon} alt="Close Icon" />
      </button>
    </div>
  );
};
