"use client";

import { SearchableSelect } from "@/components/ui/searchable-select";
import { countries, searchCountries } from "@/data/geo";
import { useMemo } from "react";

type CountrySelectorProps = {
  name?: string;
  value?: string;
  onValueChange?: (code: string) => void;
  required?: boolean;
  disabled?: boolean;
  id?: string;
};

export function CountrySelector({
  name = "country",
  value,
  onValueChange,
  required,
  disabled,
  id,
}: CountrySelectorProps) {
  const options = useMemo(
    () =>
      countries.map((c) => ({
        value: c.code,
        label: c.name,
        meta: c.code,
      })),
    []
  );

  return (
    <SearchableSelect
      id={id}
      name={name}
      options={options}
      value={value}
      onValueChange={onValueChange}
      required={required}
      disabled={disabled}
      placeholder="Select country"
      searchPlaceholder="Search countries…"
      aria-label="Country"
      onSearch={(query) =>
        searchCountries(query).map((c) => ({
          value: c.code,
          label: c.name,
          meta: c.code,
        }))
      }
    />
  );
}
