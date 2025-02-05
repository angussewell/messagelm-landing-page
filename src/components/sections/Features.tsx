'use client'

import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Target, MessageCircle, Sparkles } from 'lucide-react'

const features = [
  {
    title: 'Market-Aware AI',
    description: 'AI models that understand your industry context and adapt to your unique communication patterns',
    icon: Target,
  },
  {
    title: 'Authentic Engagement',
    description: 'Create conversations that feel personal and genuine, moving beyond standard AI-generated messages',
    icon: MessageCircle,
  },
  {
    title: 'Continuous Evolution',
    description: 'Your platform learns and improves through expert guidance, ensuring consistently impactful communication',
    icon: Sparkles,
  },
]

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { 
    opacity: 0,
    y: 20,
  },
  show: { 
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 0.8,
    },
  },
}

export function Features() {
  const { scrollYProgress } = useScroll()
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])

  return (
    <section className="relative py-16 sm:py-20 md:py-24 overflow-hidden">
      {/* Background Effects */}
      <motion.div 
        className="absolute inset-0 -z-10"
        style={{ y: backgroundY }}
      >
        <div className="absolute inset-0 bg-gradient-radial from-background/80 via-background/60 to-background" />
      </motion.div>

      <div className="container px-4 sm:px-6 mx-auto">
        <div className="max-w-3xl mx-auto mb-12 sm:mb-16 text-center">
          <motion.h2 
            className="text-3xl sm:text-4xl font-semibold mb-4 sm:mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Built for teams who value meaningful connections over volume.
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our platform combines advanced AI with expert guidance to create outreach that resonates.
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-foreground/[0.02] to-foreground/[0.02] rounded-3xl blur-xl transition-opacity opacity-0 group-hover:opacity-100" />
                <div className="relative bg-background/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 sm:p-8 hover:border-border transition-colors">
                  <div className="mb-5 sm:mb-6 inline-block rounded-xl bg-gradient-to-br from-brand/10 via-brand-purple/10 to-brand-blue/10 p-2.5 sm:p-3">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-brand" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{feature.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">{feature.description}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
} 