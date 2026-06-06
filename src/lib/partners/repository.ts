import { DEFAULT_PARTNERS } from "@/data/partners";
import type { Partner } from "@/lib/partners/types";

let partnersStore: Partner[] | null = null;

function clonePartners(list: Partner[]): Partner[] {
  return list.map((p) => ({ ...p }));
}

export function resetPartnersStore(): void {
  partnersStore = clonePartners(DEFAULT_PARTNERS);
}

function ensureStore(): Partner[] {
  if (!partnersStore) {
    partnersStore = clonePartners(DEFAULT_PARTNERS);
  }
  return partnersStore;
}

export function getAllPartners(): Partner[] {
  return clonePartners(ensureStore()).sort((a, b) => a.order - b.order);
}

export function getActivePartners(): Partner[] {
  return getAllPartners().filter((p) => p.isActive);
}

export function getPartnerById(id: string): Partner | undefined {
  return ensureStore().find((p) => p.id === id);
}

export function createPartner(input: Omit<Partner, "id"> & { id?: string }): Partner {
  const store = ensureStore();
  const id =
    input.id ??
    input.name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");

  if (store.some((p) => p.id === id)) {
    throw new Error("Partner id already exists");
  }

  const partner: Partner = { ...input, id };
  store.push(partner);
  return { ...partner };
}

export function updatePartner(id: string, patch: Partial<Partner>): Partner | null {
  const store = ensureStore();
  const index = store.findIndex((p) => p.id === id);
  if (index === -1) return null;

  const updated = { ...store[index], ...patch, id };
  store[index] = updated;
  return { ...updated };
}

export function deletePartner(id: string): boolean {
  const store = ensureStore();
  const index = store.findIndex((p) => p.id === id);
  if (index === -1) return false;
  store.splice(index, 1);
  return true;
}

export function reorderPartners(orderedIds: string[]): Partner[] {
  const store = ensureStore();
  orderedIds.forEach((id, index) => {
    const partner = store.find((p) => p.id === id);
    if (partner) partner.order = index + 1;
  });
  return getAllPartners();
}
