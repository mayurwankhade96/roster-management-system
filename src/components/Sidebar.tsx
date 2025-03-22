import { Button } from "./Button";
import { Icon } from "./Icon";
import { Option, Select } from "./Select";
import searchIcon from "../assets/icons/search.svg";

type SidebarProps = {
  centerOptions: Option[];
};

export const Sidebar = ({ centerOptions }: SidebarProps) => {
  return (
    <aside className="w-[360px] border-r border-solid border-[#e0e0e0] p-6">
      <form className="border-b border-solid border-[#e0e0e0]">
        <Select
          name="service"
          options={[{ label: "All services", value: "all" }]}
        />

        <Select name="type" options={[{ label: "All types", value: "all" }]} />

        <Select
          name="center"
          options={[{ label: "All centers", value: "all" }, ...centerOptions]}
        />
        <Button disabled>Apply</Button>
      </form>
      <div className="my-4 flex items-center gap-2 rounded-lg border border-solid border-[#9e9e9e] px-1 py-2">
        <Icon src={searchIcon} alt="Search Icon" />
        <input
          className="grow outline-none"
          type="search"
          name="query"
          placeholder="Search provider"
        />
      </div>
      <p className="text-sm font-medium text-[#4c4c4c]">
        You can search up to 5 provider to view their availability specifically.
      </p>
    </aside>
  );
};
