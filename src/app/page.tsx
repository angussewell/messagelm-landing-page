import React from 'react'
import { HeroSection } from "@/components/blocks/hero-section";
import { Features } from '@/components/sections/Features'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { ArrowRight } from 'lucide-react'

export default function Home() {
  return (
    <>
      <HeroSection
        badge={{
          text: "Now accepting new clients",
          action: {
            text: "Book a demo",
            href: "/demo"
          }
        }}
        title="AI outreach that feels unmistakably human"
        description="We craft bespoke AI models that give sales organizations an unfair advantage through high-touch, personalized outreach at scale."
        actions={[
          {
            text: "Get started",
            href: "/get-started",
            icon: <ArrowRight className="w-4 h-4" />,
            variant: "glow"
          },
          {
            text: "Book a demo",
            href: "/demo"
          }
        ]}
      />
      <Features />
      <HowItWorks />
    </>
  )
} 