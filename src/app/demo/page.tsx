'use client'

import { CalendlyWidget } from '@/components/blocks/calendly-widget'
import { motion } from 'framer-motion'

export default function DemoPage() {
  return (
    <main className="min-h-screen pt-16 sm:pt-20 md:pt-24 pb-12 sm:pb-16 px-4">
      {/* Header text container */}
      <div className="max-w-3xl mx-auto mb-8 sm:mb-12">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl sm:text-4xl font-semibold mb-3 sm:mb-4 bg-gradient-to-br from-brand via-brand-purple to-brand-blue bg-clip-text text-transparent">
            How to Make AI Sound Genuinely Human
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            We've cracked the code on natural-sounding AI messages. See our approach in action.
          </p>
        </motion.div>
      </div>

      {/* Wider Calendly container */}
      <div className="max-w-6xl mx-auto">
        <CalendlyWidget url="https://calendly.com/angus-messagelm/30min?background_color=fafafa&text_color=111a2c&primary_color=ef4444" />
      </div>
    </main>
  )
} 