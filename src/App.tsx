import { DateCarousel } from "./components/DateCarousel";
import { Header } from "./components/Header";
import { Providers } from "./components/Providers";
import { Sidebar } from "./components/Sidebar";
import rosterData from "./data.json";

function App() {
  const centerOptions = rosterData.map((roster) => ({
    label: roster.clinic_details.name,
    value: roster.clinic_details.id,
  }));

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="flex grow">
        <Sidebar centerOptions={centerOptions} />
        <main className="w-[calc(100%-360px)] px-6 py-4">
          <DateCarousel />
          <Providers providers={rosterData} />
        </main>
      </div>
    </div>
  );
}

export default App;
