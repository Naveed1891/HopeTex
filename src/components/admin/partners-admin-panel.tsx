"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ArrowDown, ArrowUp, Pencil, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { Partner } from "@/lib/partners/types";
import { cn } from "@/lib/utils";

type PartnerDraft = Omit<Partner, "id"> & { id?: string };

const emptyDraft = (): PartnerDraft => ({
  name: "",
  logoUrl: "",
  websiteUrl: "",
  description: "",
  category: "Payments",
  order: 1,
  isActive: true,
});

export function PartnersAdminPanel() {
  const [partners, setPartners] = useState<Partner[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [draft, setDraft] = useState<PartnerDraft>(emptyDraft());
  const [error, setError] = useState<string | null>(null);

  const loadPartners = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/admin/partners");
      if (!res.ok) throw new Error("Failed to load partners");
      const data = (await res.json()) as { partners: Partner[] };
      setPartners(data.partners);
    } catch {
      setError("Could not load partners.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadPartners();
  }, [loadPartners]);

  const startCreate = () => {
    setEditingId("new");
    setDraft({ ...emptyDraft(), order: partners.length + 1 });
  };

  const startEdit = (partner: Partner) => {
    setEditingId(partner.id);
    setDraft({ ...partner });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setDraft(emptyDraft());
  };

  const saveDraft = async () => {
    setError(null);
    const payload = {
      ...draft,
      name: draft.name.trim(),
      logoUrl: draft.logoUrl.trim(),
      websiteUrl: draft.websiteUrl.trim(),
    };

    if (!payload.name) {
      setError("Partner name is required.");
      return;
    }

    const isNew = editingId === "new";
    const res = await fetch(
      isNew ? "/api/admin/partners" : `/api/admin/partners/${editingId}`,
      {
        method: isNew ? "POST" : "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );

    if (!res.ok) {
      const data = (await res.json()) as { error?: string };
      setError(data.error ?? "Save failed.");
      return;
    }

    cancelEdit();
    await loadPartners();
  };

  const removePartner = async (id: string) => {
    if (!confirm("Delete this partner?")) return;
    const res = await fetch(`/api/admin/partners/${id}`, { method: "DELETE" });
    if (!res.ok) {
      setError("Delete failed.");
      return;
    }
    await loadPartners();
  };

  const movePartner = async (id: string, direction: "up" | "down") => {
    const index = partners.findIndex((p) => p.id === id);
    if (index === -1) return;
    const swapIndex = direction === "up" ? index - 1 : index + 1;
    if (swapIndex < 0 || swapIndex >= partners.length) return;

    const orderedIds = partners.map((p) => p.id);
    [orderedIds[index], orderedIds[swapIndex]] = [
      orderedIds[swapIndex],
      orderedIds[index],
    ];

    const res = await fetch("/api/admin/partners/reorder", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ orderedIds }),
    });

    if (!res.ok) {
      setError("Reorder failed.");
      return;
    }

    const data = (await res.json()) as { partners: Partner[] };
    setPartners(data.partners);
  };

  const toggleActive = async (partner: Partner) => {
    await fetch(`/api/admin/partners/${partner.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ isActive: !partner.isActive }),
    });
    await loadPartners();
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Partner logos</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Manage homepage marquee partners. Changes apply immediately on the marketing site.
          </p>
        </div>
        <Button variant="premium" onClick={startCreate}>
          <Plus className="size-4" />
          Add partner
        </Button>
      </div>

      {error && (
        <p className="rounded-lg border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-destructive">
          {error}
        </p>
      )}

      {editingId && (
        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
          <h2 className="text-lg font-semibold">
            {editingId === "new" ? "Add partner" : "Edit partner"}
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="partner-name">Name</Label>
              <Input
                id="partner-name"
                value={draft.name}
                onChange={(e) => setDraft((d) => ({ ...d, name: e.target.value }))}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="partner-category">Category</Label>
              <Input
                id="partner-category"
                value={draft.category ?? ""}
                onChange={(e) => setDraft((d) => ({ ...d, category: e.target.value }))}
              />
            </div>
            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="partner-logo">Logo URL</Label>
              <Input
                id="partner-logo"
                placeholder="/images/partners/stripe.svg"
                value={draft.logoUrl}
                onChange={(e) => setDraft((d) => ({ ...d, logoUrl: e.target.value }))}
              />
            </div>
            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="partner-website">Website URL</Label>
              <Input
                id="partner-website"
                placeholder="https://"
                value={draft.websiteUrl}
                onChange={(e) => setDraft((d) => ({ ...d, websiteUrl: e.target.value }))}
              />
            </div>
            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="partner-description">Description (optional)</Label>
              <Input
                id="partner-description"
                value={draft.description ?? ""}
                onChange={(e) => setDraft((d) => ({ ...d, description: e.target.value }))}
              />
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button variant="premium" onClick={saveDraft}>
              Save
            </Button>
            <Button variant="outline" onClick={cancelEdit}>
              Cancel
            </Button>
          </div>
        </div>
      )}

      {loading ? (
        <p className="text-sm text-muted-foreground">Loading partners…</p>
      ) : (
        <ul className="space-y-3">
          {partners.map((partner, index) => (
            <li
              key={partner.id}
              className="flex flex-wrap items-center gap-4 rounded-2xl border border-border bg-card p-4 shadow-sm"
            >
              <div className="flex h-16 w-28 items-center justify-center rounded-xl border border-border bg-white/90">
                {partner.logoUrl ? (
                  <Image
                    src={partner.logoUrl}
                    alt=""
                    width={96}
                    height={32}
                    className="max-h-8 max-w-[5.5rem] object-contain"
                    unoptimized
                  />
                ) : (
                  <span className="text-xs font-bold text-slate-700">{partner.name}</span>
                )}
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-semibold">{partner.name}</p>
                <p className="truncate text-xs text-muted-foreground">{partner.websiteUrl}</p>
              </div>
              <span
                className={cn(
                  "rounded-full px-2.5 py-1 text-xs font-semibold",
                  partner.isActive
                    ? "bg-primary/10 text-primary"
                    : "bg-muted text-muted-foreground"
                )}
              >
                {partner.isActive ? "Active" : "Inactive"}
              </span>
              <div className="flex flex-wrap items-center gap-1">
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Move up"
                  disabled={index === 0}
                  onClick={() => movePartner(partner.id, "up")}
                >
                  <ArrowUp className="size-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Move down"
                  disabled={index === partners.length - 1}
                  onClick={() => movePartner(partner.id, "down")}
                >
                  <ArrowDown className="size-4" />
                </Button>
                <Button variant="ghost" size="sm" onClick={() => toggleActive(partner)}>
                  {partner.isActive ? "Deactivate" : "Activate"}
                </Button>
                <Button variant="ghost" size="icon" onClick={() => startEdit(partner)}>
                  <Pencil className="size-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-destructive"
                  onClick={() => removePartner(partner.id)}
                >
                  <Trash2 className="size-4" />
                </Button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
