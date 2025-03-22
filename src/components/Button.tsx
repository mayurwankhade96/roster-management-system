type ButtonProps = {
  children: React.ReactNode;
  disabled?: boolean;
};

export const Button = ({ children, disabled }: ButtonProps) => {
  return (
    <button
      className="mb-4 cursor-pointer rounded-lg px-6 py-2 font-semibold text-white disabled:cursor-not-allowed disabled:bg-[#bdbdbd]"
      disabled={disabled}
    >
      {children}
    </button>
  );
};
