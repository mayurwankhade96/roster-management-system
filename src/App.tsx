import { useEffect, useState } from "react";
import { DateCarousel } from "./components/DateCarousel";
import { Header } from "./components/Header";
import { Providers } from "./components/Providers";
import { FormValues, Sidebar } from "./components/Sidebar";
import rosterData from "./data.json";
import { AutoComplete } from "./components/AutoComplete";
import { Provider } from "./components/Provider";
import { Calendar } from "./components/Calendar";

function App() {
  const [providers, setProviders] = useState(rosterData);
  const [query, setQuery] = useState("");
  const [formValues, setFormValues] = useState({
    service: "all",
    type: "all",
    center: "all",
  });
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [selectedSuggestions, setSelectedSuggestions] = useState<string[]>([]);
  const [displayCalendar, setDisplayCalendar] = useState(false);

  useEffect(() => {
    if (!query) {
      setSuggestions([]);
      return;
    }

    setSuggestions(
      rosterData
        .filter(
          (provider) =>
            provider.name.toLowerCase().includes(query.toLowerCase()) &&
            !selectedSuggestions.includes(provider.name),
        )
        .map((o) => o.name),
    );
  }, [query, JSON.stringify(selectedSuggestions)]);

  useEffect(() => {
    if (selectedSuggestions.length > 0) {
      setProviders(
        rosterData.filter((provider) =>
          selectedSuggestions.includes(provider.name),
        ),
      );
    } else {
      setProviders(rosterData);
    }
  }, [JSON.stringify(selectedSuggestions)]);

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
      <Header
        displayCalendar={displayCalendar}
        setDisplayCalendar={setDisplayCalendar}
      />
      <div className="flex grow">
        <Sidebar
          centerOptions={centerOptions}
          typeOptions={typeOptions}
          getFilteredProviders={getFilteredProviders}
          setFormValues={setFormValues}
          formValues={formValues}
          query={query}
          selectedSuggestions={selectedSuggestions}
        >
          <AutoComplete
            query={query}
            setQuery={setQuery}
            suggestions={suggestions}
            setSuggestions={setSuggestions}
            selectedSuggestions={selectedSuggestions}
            setSelectedSuggestions={setSelectedSuggestions}
            formValues={formValues}
          />
        </Sidebar>
        <main
          className={`w-[calc(100%-360px)] px-6 pt-4 ${displayCalendar && "hidden"}`}
        >
          <DateCarousel />
          <Providers>
            {providers.map((provider) => {
              return (
                <Provider
                  key={provider.id}
                  provider={provider}
                  setDisplayCalendar={setDisplayCalendar}
                />
              );
            })}
          </Providers>
        </main>
        <main
          className={`w-[calc(100%-360px)] px-6 pt-4 ${!displayCalendar && "hidden"}`}
        >
          <Calendar />
        </main>
      </div>
    </div>
  );
}

export default App;
