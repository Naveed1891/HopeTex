"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

type FaqAccordionProps = {
  items: FaqItem[];
  className?: string;
};

export function FaqAccordion({ items, className }: FaqAccordionProps) {
  return (
    <Accordion.Root
      type="single"
      collapsible
      className={cn(
        "divide-y divide-purple-100/80 overflow-hidden rounded-[26px] border border-purple-100/80 bg-white/78 shadow-[0_24px_80px_rgba(31,41,55,.09)] backdrop-blur-xl",
        className
      )}
    >
      {items.map((item) => (
        <Accordion.Item key={item.id} value={item.id} className="px-6">
          <Accordion.Header>
            <Accordion.Trigger className="group flex w-full items-center justify-between py-5 text-left text-sm font-semibold text-slate-800 transition-all hover:text-violet-600 [&[data-state=open]>svg]:rotate-180">
              {item.question}
              <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300" />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="overflow-hidden text-sm text-muted-foreground data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
            <div className="pb-5 leading-relaxed">{item.answer}</div>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
