/** @jsxImportSource react */
'use client'

import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { AnimatedBeamDemo } from '@/components/ui/code-demo'
import Link from 'next/link'

export function HowItWorks() {
  const { scrollYProgress } = useScroll()
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])

  return (
    <section className="relative pt-16 sm:pt-20 pb-16 sm:pb-20 md:pb-24 overflow-hidden">
      <motion.div 
        className="absolute inset-0 -z-10"
        style={{ y: backgroundY }}
      >
        <div className="absolute inset-0 bg-gradient-radial from-background/80 via-background/60 to-background" />
      </motion.div>

      <div className="container px-4 sm:px-6 mx-auto">
        <div className="max-w-[72rem] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4 sm:mb-6">
                AI should enhance experiences, not just automate them.
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
                When crafted with precision, AI becomes a tool for creating exceptional interactions. We focus on quality prompting to help you deliver experiences that leave lasting impressions.
              </p>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                <div className="w-8 sm:w-12 h-px bg-border" />
                <span>Making technology more human, not less</span>
              </div>
            </motion.div>

            {/* Animated Beam Demo */}
            <div className="relative w-full">
              <AnimatedBeamDemo />
            </div>
          </div>

          {/* CTA Section */}
          <motion.div 
            className="mt-20 sm:mt-24 md:mt-32 relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-brand/5 via-brand-purple/5 to-brand-blue/5 rounded-2xl" />
            <div className="relative rounded-2xl border border-border/50 backdrop-blur-sm p-6 sm:p-8 md:p-12 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-brand/[0.02] via-brand-purple/[0.02] to-brand-blue/[0.02]" />
              <div className="relative max-w-2xl mx-auto text-center">
                <h3 className="text-2xl sm:text-3xl font-semibold mb-3 sm:mb-4">
                  Transform your CRM into something extraordinary.
                </h3>
                <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8">
                  We're building AI that amplifies human connection, not replaces it. Join us in crafting outreach that your prospects will actually want to receive.
                </p>
                <Link 
                  href="/get-started"
                  className="inline-flex items-center justify-center gap-2 bg-brand hover:bg-brand/90 text-background px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium transition-colors w-full sm:w-auto"
                >
                  Start a conversation
                  <ArrowRight className="size-3.5 sm:size-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 