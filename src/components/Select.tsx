export type Option = {
  label: string;
  value: string | number;
};

type SelectProps = {
  name?: string;
  options: Option[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string | number | readonly string[] | undefined;
  className?: string;
};

export const Select = ({
  name,
  options,
  onChange,
  value,
  className = "",
}: SelectProps) => {
  return (
    <div
      className={`rounded-lg border border-solid border-[#9e9e9e] px-1 py-2 ${className}`}
    >
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
