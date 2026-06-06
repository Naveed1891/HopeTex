"use client";

import { DashboardPage } from "@/components/dashboard/dashboard-page";
import { DepthCard } from "@/components/motion/depth-card";
import { mockChatMessages } from "@/lib/mock/dashboard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function ChatPage() {
  return (
    <DashboardPage title="Chat" description="Message our support team in real time.">
      <div className="flex h-[calc(100vh-8rem)] flex-col p-6 lg:p-10">
        <DepthCard className="flex flex-1 flex-col overflow-hidden p-0">
          <div className="flex-1 space-y-4 overflow-y-auto p-5">
            {mockChatMessages.map((msg) => (
              <div
                key={msg.id}
                className={cn(
                  "max-w-[80%] rounded-xl px-4 py-3 text-sm",
                  msg.from === "You"
                    ? "ml-auto bg-primary text-primary-foreground"
                    : "bg-muted text-foreground"
                )}
              >
                <p className="font-medium text-caption opacity-80">{msg.from}</p>
                <p className="mt-1">{msg.preview}</p>
                <p className="mt-2 text-caption opacity-70">{msg.time}</p>
              </div>
            ))}
          </div>
          <form
            className="flex gap-2 border-t border-border p-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <Input placeholder="Type a message…" className="flex-1" />
            <Button type="submit">Send</Button>
          </form>
        </DepthCard>
      </div>
    </DashboardPage>
  );
}
