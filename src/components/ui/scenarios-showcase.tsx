'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from './button'
import { cn } from '@/lib/utils'
import { MessageSquare, Users, Zap, Mail, LinkedinIcon, FileText } from 'lucide-react'

const scenarios = [
  {
    id: 'cold-outreach',
    title: 'Cold Outreach',
    description: 'Personalized first touches that spark genuine conversations',
    icon: Mail,
    channels: ['Email', 'LinkedIn', 'Twitter'],
    metrics: {
      responseRate: '35%',
      meetings: '15%',
      satisfaction: '98%'
    }
  },
  {
    id: 'event-followup',
    title: 'Event Follow-up',
    description: 'Turn event connections into meaningful relationships',
    icon: Users,
    channels: ['Email', 'LinkedIn', 'Calendar'],
    metrics: {
      responseRate: '65%',
      meetings: '40%',
      satisfaction: '99%'
    }
  },
  {
    id: 'content-engagement',
    title: 'Content Engagement',
    description: 'Engage with prospects who interact with your content',
    icon: FileText,
    channels: ['LinkedIn', 'Email', 'Blog'],
    metrics: {
      responseRate: '45%',
      meetings: '25%',
      satisfaction: '97%'
    }
  },
  {
    id: 'inbound-leads',
    title: 'Inbound Leads',
    description: 'Quick, personalized responses to inbound inquiries',
    icon: Zap,
    channels: ['Email', 'Chat', 'Forms'],
    metrics: {
      responseRate: '75%',
      meetings: '45%',
      satisfaction: '99%'
    }
  }
]

interface ScenariosShowcaseProps extends React.HTMLAttributes<HTMLDivElement> {}

export function ScenariosShowcase({ className, ...props }: ScenariosShowcaseProps) {
  const [activeScenario, setActiveScenario] = useState(scenarios[0])
  const [isTransitioning, setIsTransitioning] = useState(false)
  
  const handleScenarioChange = async (scenario: typeof scenarios[0]) => {
    if (scenario.id === activeScenario.id || isTransitioning) return
    
    setIsTransitioning(true)
    setActiveScenario(scenario)
    await new Promise(resolve => setTimeout(resolve, 500))
    setIsTransitioning(false)
  }
  
  return (
    <div 
      className={cn(
        "w-full rounded-xl overflow-hidden",
        "border border-border/50",
        "glass-effect premium-shadow",
        className
      )}
      {...props}
    >
      <div className="grid lg:grid-cols-[1fr,2fr] divide-x divide-border/50">
        {/* Scenarios List */}
        <div className="p-4 space-y-2">
          {scenarios.map((scenario) => (
            <Button
              key={scenario.id}
              variant={scenario.id === activeScenario.id ? 'default' : 'ghost'}
              className={cn(
                "w-full justify-start gap-3 h-auto py-4",
                scenario.id === activeScenario.id && "bg-brand text-white"
              )}
              onClick={() => handleScenarioChange(scenario)}
            >
              <scenario.icon className="w-5 h-5" />
              <div className="text-left">
                <div className="font-medium">{scenario.title}</div>
                <div className="text-sm opacity-80">{scenario.description}</div>
              </div>
            </Button>
          ))}
        </div>
        
        {/* Scenario Details */}
        <div className="p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeScenario.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              {/* Header */}
              <div className="space-y-2">
                <h3 className="text-2xl font-display">{activeScenario.title}</h3>
                <p className="text-muted-foreground">{activeScenario.description}</p>
              </div>
              
              {/* Channels */}
              <div>
                <h4 className="text-sm font-medium mb-3">Channels</h4>
                <div className="flex gap-2">
                  {activeScenario.channels.map((channel) => (
                    <div
                      key={channel}
                      className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm"
                    >
                      {channel}
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Metrics */}
              <div>
                <h4 className="text-sm font-medium mb-3">Performance Metrics</h4>
                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-1">
                    <div className="text-2xl font-display text-brand">
                      {activeScenario.metrics.responseRate}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Response Rate
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-2xl font-display text-brand">
                      {activeScenario.metrics.meetings}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Meeting Rate
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-2xl font-display text-brand">
                      {activeScenario.metrics.satisfaction}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Satisfaction
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
} 