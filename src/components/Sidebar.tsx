import { Button } from "./Button";

import { Option, Select } from "./Select";

import { useState } from "react";

export type FormValues = {
  service: string;
  type: string;
  center: string;
};

type SidebarProps = {
  centerOptions: Option[];
  typeOptions: Option[];
  getFilteredProviders: (formValues: FormValues) => void;
  setFormValues: React.Dispatch<React.SetStateAction<FormValues>>;
  formValues: FormValues;
  children: React.ReactNode;
  query: string;
  selectedSuggestions: string[];
};

export const Sidebar = ({
  centerOptions,
  typeOptions,
  getFilteredProviders,
  setFormValues,
  formValues,
  children,
  query,
  selectedSuggestions,
}: SidebarProps) => {
  const [isDisabled, setIsDisabled] = useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setIsDisabled(false);
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleResetClick = () => {
    const resetValues = {
      service: "all",
      type: "all",
      center: "all",
    };
    setIsDisabled(true);
    setFormValues(resetValues);
    getFilteredProviders(resetValues);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    getFilteredProviders(formValues);
  };

  return (
    <aside className="w-[360px] border-r border-solid border-[#e0e0e0] p-6">
      {!query && selectedSuggestions.length === 0 && (
        <form
          className="mb-4 border-b border-solid border-[#e0e0e0]"
          onSubmit={handleSubmit}
        >
          <Select
            className="mb-4"
            name="service"
            options={[{ label: "All services", value: "all" }]}
            onChange={handleChange}
            value={formValues.service}
          />

          <Select
            className="mb-4"
            name="type"
            options={[{ label: "All types", value: "all" }, ...typeOptions]}
            onChange={handleChange}
            value={formValues.type}
          />

          <Select
            className="mb-4"
            name="center"
            options={[{ label: "All centers", value: "all" }, ...centerOptions]}
            onChange={handleChange}
            value={formValues.center}
          />

          <div className="flex items-center gap-4">
            {!isDisabled && (
              <Button
                className="border-0 bg-[#FFF5F2] text-[#E76943]"
                onClick={handleResetClick}
                type="reset"
              >
                Reset
              </Button>
            )}
            <Button
              className="border-0 bg-[#E76943] text-white"
              disabled={isDisabled}
            >
              Apply
            </Button>
          </div>
        </form>
      )}

      {children}
    </aside>
  );
};
