"use client";

import { PageLayout } from "@/components/templates/page-layout";
import { PageHero } from "@/components/templates/page-hero";
import { contactContent } from "@/lib/content";
import { siteConfig } from "@/config/site";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { DepthCard } from "@/components/motion/depth-card";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <PageLayout
      hero={
        <PageHero
          title={contactContent.title}
          description={contactContent.description}
        />
      }
    >
      <div className="grid gap-10 lg:grid-cols-2">
        <DepthCard>
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" required placeholder="Your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" required placeholder="you@company.com" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" name="subject" required placeholder="How can we help?" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="flex w-full rounded-lg border border-input bg-surface-1 px-3.5 py-2.5 text-sm shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                placeholder="Tell us about your business goals…"
              />
            </div>
            <Button type="submit" variant="premium" size="lg" className="w-full sm:w-auto">
              Send message
            </Button>
          </form>
        </DepthCard>
        <div className="space-y-5">
          <DepthCard className="flex gap-4">
            <Mail className="h-5 w-5 text-primary" />
            <div>
              <p className="font-medium">Email</p>
              <a href={`mailto:${siteConfig.contact.email}`} className="text-sm text-muted-foreground hover:text-foreground">
                {siteConfig.contact.email}
              </a>
            </div>
          </DepthCard>
          <DepthCard className="flex gap-4">
            <Phone className="h-5 w-5 text-primary" />
            <div>
              <p className="font-medium">Phone</p>
              <a href={`tel:${siteConfig.contact.phone}`} className="text-sm text-muted-foreground hover:text-foreground">
                {siteConfig.contact.phoneDisplay}
              </a>
            </div>
          </DepthCard>
          {contactContent.offices.map((office) => (
            <DepthCard key={office.label} className="flex gap-4">
              <MapPin className="h-5 w-5 shrink-0 text-primary" />
              <div>
                <p className="font-medium">{office.label}</p>
                <p className="text-sm text-muted-foreground">{office.address}</p>
              </div>
            </DepthCard>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
