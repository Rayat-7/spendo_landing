import { cn } from "@/lib/utils";
import { CheckIcon } from "@radix-ui/react-icons";
import React from "react";

type PricingPlan = {
  title: string;
  price: string;
  billed: string;
  isPopular?: boolean;
  features: string[];
};

const plans: PricingPlan[] = [
  {
    title: "Starter",
    price: "$9/mo",
    billed: "Billed annually",
    features: ["Basic support", "1 project", "Community access"],
  },
  {
    title: "Pro",
    price: "$29/mo",
    billed: "Billed annually",
    isPopular: true,
    features: ["Priority support", "Unlimited projects", "Team access"],
  },
  {
    title: "Enterprise",
    price: "Custom",
    billed: "Contact us",
    features: ["Dedicated support", "Custom solutions", "SLAs"],
  },
];

export function VioletPricing() {
  return (
    <section id="pricing" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <h2 className="text-center text-3xl font-bold text-violet-700 dark:text-violet-300 md:text-4xl">
        Choose your plan
      </h2>
      <p className="mt-2 text-center text-muted-foreground text-sm">
        Simple and transparent pricing.
      </p>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className={cn(
              "relative overflow-hidden rounded-xl border p-6 transition-all hover:border-violet-500 hover:shadow-lg dark:hover:border-violet-400",
              plan.isPopular && "border-violet-500 dark:border-violet-400"
            )}
          >
            {plan.isPopular && (
              <span className="absolute top-4 left-1/2 -translate-x-1/2 rounded-md bg-violet-100 px-3 py-1 text-xs font-semibold text-violet-700 dark:bg-violet-900 dark:text-violet-100">
                Most Popular
              </span>
            )}

            <h3 className="mt-6 text-center text-xl font-semibold">{plan.title}</h3>
            <p className="text-center text-3xl font-bold text-violet-700 dark:text-violet-300">
              {plan.price}
            </p>
            <p className="text-center text-xs text-muted-foreground">{plan.billed}</p>

            <ul className="mt-6 space-y-3">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckIcon className="mt-1 size-4 text-violet-600 dark:text-violet-300" />
                  {feature}
                </li>
              ))}
            </ul>

            <button
              className={cn(
                "mt-8 w-full rounded-md border px-4 py-2 text-sm font-medium transition-all",
                plan.isPopular
                  ? "border-violet-700 bg-violet-700 text-white hover:bg-violet-800"
                  : "border-muted text-foreground hover:border-violet-500 hover:text-violet-700 dark:hover:text-violet-300"
              )}
            >
              {plan.title === "Enterprise" ? "Contact us" : "Get Started"}
            </button>

            {/* Background grid pattern */}
            <div className="pointer-events-none absolute inset-0 z-0 [mask-image:linear-gradient(white,transparent)]">
              <GridPattern className="absolute inset-0 h-full w-full fill-violet-100 stroke-violet-200 opacity-20 dark:fill-violet-900 dark:stroke-violet-700" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function GridPattern({
  className,
  ...props
}: React.ComponentProps<"svg">) {
  const patternId = React.useId();

  return (
    <svg viewBox="0 0 100 100" className={cn("h-full w-full", className)} {...props}>
      <defs>
        <pattern id={patternId} width="10" height="10" patternUnits="userSpaceOnUse">
          <path d="M0 10 V0 H10" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  );
}
