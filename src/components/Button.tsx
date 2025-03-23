type ButtonProps = {
  children: React.ReactNode;
  disabled?: boolean;
  className: string;
  onClick?: () => void;
  type?: "button" | "reset" | "submit";
};

export const Button = ({
  children,
  disabled,
  className,
  onClick,
  type = "submit",
}: ButtonProps) => {
  return (
    <button
      className={`mb-4 cursor-pointer rounded-lg px-6 py-2 font-semibold disabled:cursor-not-allowed disabled:bg-[#bdbdbd] disabled:text-white ${className}`}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};
