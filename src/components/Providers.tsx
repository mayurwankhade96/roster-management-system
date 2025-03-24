type ProvidersProp = {
  children: React.ReactNode;
};

export const Providers = ({ children }: ProvidersProp) => {
  return (
    <div className="h-[calc(100vh-250px)] overflow-y-auto">{children}</div>
  );
};
