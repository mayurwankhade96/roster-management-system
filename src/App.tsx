import { useState } from "react";
import { DateCarousel } from "./components/DateCarousel";
import { Header } from "./components/Header";
import { Providers } from "./components/Providers";
import { FormValues, Sidebar } from "./components/Sidebar";
import rosterData from "./data.json";

function App() {
  const [providers, setProviders] = useState(rosterData);
  const [query, setQuery] = useState("");
  const [formValues, setFormValues] = useState({
    service: "all",
    type: "all",
    center: "all",
  });

  const getFilteredProviders = (formValues: FormValues) => {
    if (
      formValues.service === "all" &&
      formValues.type === "all" &&
      formValues.center === "all"
    ) {
      setProviders(rosterData);
      return;
    }

    setProviders(
      rosterData.filter((provider) => {
        return (
          provider.provider_usertype === formValues.type ||
          String(provider.clinic_details.id) === formValues.center
        );
      }),
    );
  };

  const centerOptions = rosterData.map((roster) => ({
    label: roster.clinic_details.name,
    value: roster.clinic_details.id,
  }));

  const uniqueProviderTypes = [
    ...new Set(rosterData.map((roster) => roster.provider_usertype)),
  ];
  const typeOptions = uniqueProviderTypes.map((type) => ({
    label: `${type[0].toUpperCase()}${type.slice(1)}`,
    value: type,
  }));

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="flex grow">
        <Sidebar
          centerOptions={centerOptions}
          typeOptions={typeOptions}
          getFilteredProviders={getFilteredProviders}
          setFormValues={setFormValues}
          formValues={formValues}
          setQuery={setQuery}
          query={query}
        />
        <main className="w-[calc(100%-360px)] px-6 pt-4">
          <DateCarousel />
          <Providers providers={providers} />
        </main>
      </div>
    </div>
  );
}

export default App;
