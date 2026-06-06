"use client";

import { SearchableSelect } from "@/components/ui/searchable-select";
import { searchUsStates, usStates } from "@/data/geo";
import { useMemo } from "react";

type StateSelectorProps = {
  name?: string;
  value?: string;
  onValueChange?: (code: string) => void;
  required?: boolean;
  disabled?: boolean;
  id?: string;
};

export function StateSelector({
  name = "state",
  value,
  onValueChange,
  required,
  disabled,
  id,
}: StateSelectorProps) {
  const options = useMemo(
    () =>
      usStates.map((s) => ({
        value: s.code,
        label: s.name,
        meta: s.code,
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
      placeholder="Select state or territory"
      searchPlaceholder="Search states…"
      aria-label="US state or territory"
      onSearch={(query) =>
        searchUsStates(query).map((s) => ({
          value: s.code,
          label: s.name,
          meta: s.code,
        }))
      }
    />
  );
}
