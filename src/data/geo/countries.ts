import countriesData from "./countries.json";

export type Country = {
  code: string;
  name: string;
};

export const countries: Country[] = countriesData as Country[];

export function getCountryByCode(code: string): Country | undefined {
  return countries.find((c) => c.code === code);
}

export function searchCountries(query: string): Country[] {
  const q = query.trim().toLowerCase();
  if (!q) return countries;
  return countries.filter(
    (c) =>
      c.name.toLowerCase().includes(q) || c.code.toLowerCase().includes(q)
  );
}
