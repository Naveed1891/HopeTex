"use client";

import { DashboardPage } from "@/components/dashboard/dashboard-page";
import { DepthCard } from "@/components/motion/depth-card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function SettingsPage() {
  return (
    <DashboardPage title="Settings" description="Manage your account and preferences.">
      <div className="max-w-xl space-y-6 p-6 lg:p-10">
        <DepthCard>
          <h3 className="font-semibold">Profile</h3>
          <form className="mt-5 space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue="Jane Founder" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" defaultValue="jane@acme.global" />
            </div>
            <Button type="submit">Save changes</Button>
          </form>
        </DepthCard>
      </div>
    </DashboardPage>
  );
}
