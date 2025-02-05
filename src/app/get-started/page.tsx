'use client'

import { MultiStepForm } from '@/components/blocks/multi-step-form'

const getStartedConfig = {
  title: 'Get Started',
  submitButtonText: 'Get Started',
  formType: 'get-started' as const,
  header: {
    title: "Elevate Your Sales Outreach",
    description: "Join forward-thinking teams using AI to create messages that feel personal, not automated."
  },
  calendlyHeader: {
    title: "Let's Make AI Work for You",
    description: "Schedule a conversation to see how we can customize our platform for your unique sales approach."
  },
  steps: {
    basics: {
      title: 'Basic Information',
      description: 'Tell us about you and your company'
    },
    industry: {
      title: 'Industry & CRM',
      description: 'Help us understand your business context'
    }
  },
  calendlyUrl: 'https://calendly.com/angus-messagelm/30min?background_color=fafafa&text_color=111a2c&primary_color=ef4444'
}

export default function GetStartedPage() {
  return <MultiStepForm config={getStartedConfig} />
} 