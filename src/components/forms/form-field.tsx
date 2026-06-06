"use client";

import { useState } from "react";
import { CountrySelector } from "@/components/forms/country-selector";
import { StateSelector } from "@/components/forms/state-selector";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { FormField as FormFieldConfig } from "@/config/forms";
import { cn } from "@/lib/utils";

type FormFieldProps = {
  field: FormFieldConfig;
  error?: string;
};

export function FormFieldRenderer({ field, error }: FormFieldProps) {
  const id = `field-${field.name}`;
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");

  return (
    <div className="space-y-2">
      <Label htmlFor={field.type === "country" || field.type === "us-state" ? undefined : id}>
        {field.label}
        {field.required && (
          <span className="text-destructive" aria-hidden>
            {" "}
            *
          </span>
        )}
      </Label>

      {field.type === "country" ? (
        <CountrySelector
          id={id}
          name={field.name}
          required={field.required}
          value={country}
          onValueChange={setCountry}
        />
      ) : field.type === "us-state" ? (
        <StateSelector
          id={id}
          name={field.name}
          required={field.required}
          value={state}
          onValueChange={setState}
        />
      ) : field.type === "textarea" ? (
        <textarea
          id={id}
          name={field.name}
          placeholder={field.placeholder}
          required={field.required}
          rows={4}
          className={cn(
            "flex min-h-[108px] w-full rounded-lg border border-input bg-surface-1 px-3.5 py-2.5 text-sm shadow-xs placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          )}
        />
      ) : field.type === "select" ? (
        <select
          id={id}
          name={field.name}
          required={field.required}
          className={cn(
            "flex h-11 w-full rounded-lg border border-input bg-surface-1 px-3.5 text-sm shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          )}
          defaultValue=""
        >
          <option value="" disabled>
            Select…
          </option>
          {field.options?.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      ) : (
        <Input
          id={id}
          name={field.name}
          type={
            field.type === "email"
              ? "email"
              : field.type === "tel"
                ? "tel"
                : "text"
          }
          placeholder={field.placeholder}
          required={field.required}
          aria-invalid={Boolean(error)}
        />
      )}

      {field.helpText && (
        <p className="text-caption text-muted-foreground">{field.helpText}</p>
      )}
      {error && (
        <p className="text-caption text-destructive" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
