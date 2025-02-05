import React from 'react'
import { HeroSection } from "@/components/blocks/hero-section";
import { Features } from '@/components/sections/Features'
import { HowItWorks } from '@/components/sections/HowItWorks'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection
        title="AI outreach that feels unmistakably human"
        description="We build custom AI models that give sales based organizations an unfair advantage"
        actions={[
          {
            text: "Get Started",
            href: "/get-started",
            variant: "default",
          },
          {
            text: "View Examples",
            href: "/demo",
            variant: "glow",
          },
        ]}
      />
      <Features />
      <HowItWorks />
    </main>
  )
} 