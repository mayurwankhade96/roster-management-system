import { Icon } from "./Icon";
import searchIcon from "../assets/icons/search.svg";
import { Chip } from "./Chip";
import { Button } from "./Button";
import { FormValues } from "./Sidebar";

type AutoCompleteProps = {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  suggestions: string[];
  setSuggestions: React.Dispatch<React.SetStateAction<string[]>>;
  selectedSuggestions: string[];
  setSelectedSuggestions: React.Dispatch<React.SetStateAction<string[]>>;
  formValues: FormValues;
};

export const AutoComplete = ({
  query,
  setQuery,
  suggestions,
  setSuggestions,
  selectedSuggestions,
  setSelectedSuggestions,
  formValues,
}: AutoCompleteProps) => {
  const isDisabled =
    formValues.center !== "all" ||
    formValues.service !== "all" ||
    formValues.type !== "all";

  return (
    <>
      <div className="relative mb-4 flex items-center gap-2 rounded-lg border border-solid border-[#9e9e9e] px-1 py-2">
        <Icon src={searchIcon} alt="Search Icon" />
        <input
          className="grow outline-none disabled:cursor-not-allowed"
          type="search"
          name="query"
          placeholder="Search provider"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          disabled={isDisabled}
          title={
            isDisabled
              ? "Please use either filters or name search to refine the provider list."
              : ""
          }
        />
        {suggestions.length > 0 && (
          <ul className="absolute top-10 left-0 w-full rounded-lg border border-solid border-[#e0e0e0]">
            {suggestions.map((suggestion) => {
              return (
                <li
                  key={suggestion}
                  className="cursor-pointer bg-white px-2 py-1 hover:bg-gray-100"
                  onClick={() => {
                    setSelectedSuggestions([
                      ...selectedSuggestions,
                      suggestion,
                    ]);
                    setSuggestions([]);
                    setQuery("");
                  }}
                >
                  {suggestion}
                </li>
              );
            })}
          </ul>
        )}
      </div>

      {selectedSuggestions.length > 0 ? (
        <>
          {selectedSuggestions.map((suggestion, index) => {
            return (
              <Chip
                key={suggestion}
                suggestion={suggestion}
                index={index}
                setSelectedSuggestions={setSelectedSuggestions}
                selectedSuggestions={selectedSuggestions}
              />
            );
          })}
          <Button
            className="border-0 bg-[#FFF5F2] text-[#E76943]"
            onClick={() => setSelectedSuggestions([])}
          >
            Clear All
          </Button>
        </>
      ) : (
        <p className="text-sm font-medium text-[#4c4c4c]">
          You can search up to 5 provider to view their availability
          specifically.
        </p>
      )}
    </>
  );
};
