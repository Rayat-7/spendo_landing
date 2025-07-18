import React from "react"
import { cn } from "@/lib/utils"
import { FeatureCard } from "./ui/FeatureCard"// adjust the import path as needed
import { LayoutDashboard, Layers, Zap } from "lucide-react"

const features = [
  {
    title: "Real-time Dashboard",
    description: "Keep track of everything from one place with instant updates and real-time metrics.",
    icon: LayoutDashboard,
  },
  {
    title: "Modular Workflows",
    description: "Build and customize your team's process using flexible, reusable blocks.",
    icon: Layers,
  },
  {
    title: "Automation Ready",
    description: "Save time with smart automations to reduce manual work across your operations.",
    icon: Zap,
  },
    {
        title: "Secure & Scalable",
        description: "Built on a robust architecture that grows with your business while keeping your data safe.",
        icon: LayoutDashboard,
    },
]

export function SideFeatures() {
  return (
    <section className="lg:container mx-auto px-6 py-24 lg:flex lg:gap-12 lg:px-12">
      {/* Left Section - Heading & CTA */}
      <div className="lg:w-1/2 space-y-6">
        <div className="space-y-2">
          <span className="text-sm font-medium text-primary">Trusted by teams</span>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Streamline Your Workflow
          </h2>
          <p className="text-muted-foreground text-base">
            From idea to execution — we’ve got the tools you need to accelerate success.
          </p>
        </div>

        <div className="flex gap-3 mt-6">
          <a
            href="/get-started"
            className="px-6 py-2 text-sm font-semibold rounded-md bg-violet-700 text-white hover:bg-primary/90 transition"
          >
            Get Started
          </a>
          <a
            href="/learn-more"
            className="px-6 py-2 text-sm font-semibold rounded-md border border-input hover:border-foreground transition"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Right Section - Feature Cards */}
      <div className="lg:w-1/2 mt-10 lg:mt-0 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {features.map((feature, i) => (
          <FeatureCard
            key={i}
            feature={feature}
            className="rounded-2xl border hover:border-primary transition duration-200 bg-card"
          />
        ))}
      </div>
    </section>
  )
}
