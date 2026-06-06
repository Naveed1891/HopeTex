"use client";

import { useState } from "react";
import type { ServiceFormConfig } from "@/config/forms";
import { FormFieldRenderer } from "@/components/forms/form-field";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Timeline } from "@/components/motion/timeline";
import { formatCurrency } from "@/lib/utils";
import { m, AnimatePresence } from "framer-motion";
import { fadeIn, transitionBase } from "@/lib/motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

type ServiceFormWizardProps = {
  config: ServiceFormConfig;
  onSubmit?: (data: FormData) => void;
};

export function ServiceFormWizard({ config, onSubmit }: ServiceFormWizardProps) {
  const [stepIndex, setStepIndex] = useState(0);
  const step = config.steps[stepIndex];
  const isLast = stepIndex === config.steps.length - 1;

  const timelineSteps = config.steps.map((s, i) => ({
    id: s.id,
    title: s.title,
    step: i + 1,
    description: i === stepIndex ? "Current step" : undefined,
  }));

  return (
    <div className="grid gap-12 lg:grid-cols-[minmax(220px,280px)_1fr]">
      <aside className="hidden lg:block">
        <Timeline steps={timelineSteps} />
      </aside>
      <Card className="overflow-hidden border-border shadow-md">
        <CardHeader className="border-b border-border bg-surface-2/80 px-8 py-6">
          <div className="flex items-start justify-between gap-6">
            <div>
              <CardTitle className="text-xl">{config.title}</CardTitle>
              <p className="mt-1.5 text-sm text-muted-foreground">
                Step {stepIndex + 1} of {config.steps.length} — {step.title}
              </p>
            </div>
            {config.basePrice != null && config.basePrice > 0 && (
              <p className="text-xl font-semibold tabular-nums tracking-tight">
                {formatCurrency(config.basePrice, config.currency ?? "USD")}
              </p>
            )}
          </div>
        </CardHeader>
        <CardContent className="p-8">
          <AnimatePresence mode="wait">
            <m.form
              key={step.id}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={fadeIn}
              transition={transitionBase}
              className="space-y-8"
              onSubmit={(e) => {
                e.preventDefault();
                if (!isLast) {
                  setStepIndex((i) => i + 1);
                  return;
                }
                onSubmit?.(new FormData(e.currentTarget));
              }}
            >
              {step.description && (
                <p className="text-sm text-muted-foreground">{step.description}</p>
              )}
              <div className="grid gap-6 sm:grid-cols-2">
                {step.fields.map((field) => (
                  <div
                    key={field.name}
                    className={
                      field.type === "textarea" ||
                      field.type === "country" ||
                      field.type === "us-state"
                        ? "sm:col-span-2"
                        : undefined
                    }
                  >
                    <FormFieldRenderer field={field} />
                  </div>
                ))}
              </div>
              <div className="flex justify-between border-t border-border pt-8">
                <Button
                  type="button"
                  variant="premiumOutline"
                  size="lg"
                  disabled={stepIndex === 0}
                  onClick={() => setStepIndex((i) => i - 1)}
                >
                  <ChevronLeft className="h-4 w-4" />
                  Back
                </Button>
                <Button type="submit" variant="premium" size="lg">
                  {isLast ? "Submit application" : "Continue"}
                  {!isLast && <ChevronRight className="h-4 w-4" />}
                </Button>
              </div>
            </m.form>
          </AnimatePresence>
        </CardContent>
      </Card>
    </div>
  );
}
