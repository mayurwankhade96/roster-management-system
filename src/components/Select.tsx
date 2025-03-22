export type Option = {
  label: string;
  value: string | number;
};

type SelectProps = {
  name: string;
  options: Option[];
};

export const Select = ({ name, options }: SelectProps) => {
  return (
    <div className="mb-4 rounded-lg border border-solid border-[#9e9e9e] px-1 py-2">
      <select
        className="w-full font-medium text-[#4c4c4c] outline-none"
        name={name}
      >
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};
