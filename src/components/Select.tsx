export type Option = {
  label: string;
  value: string | number;
};

type SelectProps = {
  name: string;
  options: Option[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string | number | readonly string[] | undefined;
};

export const Select = ({ name, options, onChange, value }: SelectProps) => {
  return (
    <div className="mb-4 rounded-lg border border-solid border-[#9e9e9e] px-1 py-2">
      <select
        className="w-full font-medium text-[#4c4c4c] outline-none"
        name={name}
        onChange={onChange}
        value={value}
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
