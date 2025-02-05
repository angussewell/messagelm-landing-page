"use client"

import { MultiStepForm } from '@/components/blocks/multi-step-form'

const pricingConfig = {
  title: 'Request Pricing',
  submitButtonText: 'Request Quote',
  formType: 'pricing' as const,
  header: {
    title: "Custom AI, Tailored to Your Business",
    description: "Get pricing for a solution built specifically for your team's unique communication needs."
  },
  calendlyHeader: {
    title: "Let's Discuss Your Custom Solution",
    description: "Schedule a conversation to explore how we can build the perfect AI platform for your team."
  },
  steps: {
    basics: {
      title: 'Basic Information',
      description: 'Tell us about you and your company'
    },
    industry: {
      title: 'Industry & CRM',
      description: 'Help us understand your needs'
    }
  },
  calendlyUrl: 'https://calendly.com/angus-messagelm/30min?background_color=fafafa&text_color=111a2c&primary_color=ef4444'
}

export default function PricingPage() {
  return <MultiStepForm config={pricingConfig} />
} 