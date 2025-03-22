import { Provider } from "./Provider";

type ProvidersProp = {
  providers: Provider[];
};

export const Providers = ({ providers }: ProvidersProp) => {
  return (
    <div className="h-[calc(100vh-260px)] overflow-y-auto">
      {providers.map((provider) => {
        return <Provider key={provider.id} provider={provider} />;
      })}
    </div>
  );
};
