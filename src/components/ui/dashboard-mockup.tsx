'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { LayoutGrid, Settings, Code2, Terminal, Braces, Database, Workflow, Zap, Server, GitBranch, Boxes, Sparkles, Puzzle, Users, MessageCircle, Target, Gauge } from 'lucide-react'

interface DashboardMockupProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
}

export function DashboardMockup({ className, ...props }: DashboardMockupProps) {
  return (
    <div className={cn("relative w-full", className)} {...props}>
      {/* Main Dashboard Section */}
      <section className="py-8 sm:py-12 md:py-24">
        <div className="max-w-6xl mx-auto px-2 sm:px-4 md:px-6">
          <div className="relative">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background rounded-xl sm:rounded-2xl" />
            
            {/* Main Container */}
            <motion.div 
              className="relative bg-background/95 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-border/50 shadow-2xl overflow-hidden"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* App Layout */}
              <div className="flex h-[350px] sm:h-[500px] md:h-[650px] overflow-hidden">
                {/* Navigation Sidebar - Hidden on mobile */}
                <div className="hidden sm:flex w-14 border-r border-border/50 flex-col items-center py-4 gap-4">
                  <div className="h-2 w-2 rounded-full bg-brand/20 mb-4" />
                  {[
                    { icon: LayoutGrid, label: "Dashboard" },
                    { icon: Workflow, label: "Scenarios", active: true },
                    { icon: Code2, label: "Models" },
                    { icon: Terminal, label: "Console" },
                    { icon: Settings, label: "Settings" }
                  ].map((item, i) => (
                    <motion.button
                      key={item.label}
                      className={cn(
                        "p-2.5 rounded-lg transition-colors",
                        item.active ? "bg-brand/10 text-brand" : "text-foreground/40 hover:text-foreground/60"
                      )}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.3 + (i * 0.1) }}
                    >
                      <item.icon className="w-4 h-4" />
                    </motion.button>
                  ))}
                </div>

                {/* Secondary Sidebar - Hidden on mobile */}
                <div className="hidden md:flex w-64 border-r border-border/50 flex-col">
                  {/* Scenarios List */}
                  <div className="p-3 border-b border-border/50">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-sm font-medium text-foreground/70">Scenarios</h3>
                      <button className="p-1.5 rounded-lg hover:bg-foreground/5">
                        <GitBranch className="w-3.5 h-3.5 text-foreground/40" />
                      </button>
                    </div>
                    {[
                      { name: "Lead Engagement", type: "Production", status: "Training" },
                      { name: "Meeting Follow-up", type: "Development", status: "Active" },
                      { name: "Resource Sharing", type: "Testing", status: "Draft" }
                    ].map((scenario, i) => (
                      <motion.div
                        key={scenario.name}
                        className={cn(
                          "p-2 rounded-lg mb-2 hover:bg-foreground/5 cursor-pointer",
                          i === 0 ? "bg-foreground/5" : ""
                        )}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.4 + (i * 0.1) }}
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-sm font-medium">{scenario.name}</span>
                          <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-foreground/5 text-foreground/40">{scenario.type}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex-1 h-1 bg-foreground/10 rounded-full overflow-hidden">
                            <motion.div 
                              className="h-full bg-gradient-to-r from-brand via-brand-purple to-brand-blue rounded-full"
                              initial={{ width: 0 }}
                              animate={{ width: i === 0 ? "85%" : i === 1 ? "100%" : "40%" }}
                              transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                            />
                          </div>
                          <span className="text-[10px] text-foreground/40">{scenario.status}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* System Status */}
                  <div className="p-3 border-b border-border/50">
                    <h3 className="text-sm font-medium text-foreground/70 mb-3">System Status</h3>
                    <div className="space-y-2">
                      {[
                        { name: "API Gateway", status: "Operational", latency: "23ms" },
                        { name: "Model Server", status: "Training", latency: "156ms" },
                        { name: "Database", status: "Operational", latency: "45ms" }
                      ].map((service, i) => (
                        <motion.div
                          key={service.name}
                          className="flex items-center justify-between p-2 rounded-lg bg-foreground/5 text-xs"
                          initial={{ x: -10, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.6 + (i * 0.1) }}
                        >
                          <div className="flex items-center gap-2">
                            <Server className="w-3 h-3 text-foreground/40" />
                            <span className="text-foreground/60">{service.name}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-foreground/40">{service.latency}</span>
                            <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-brand to-brand-purple" />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Connected Services */}
                  <div className="p-3">
                    <h3 className="text-sm font-medium text-foreground/70 mb-3">Connected Services</h3>
                    <div className="space-y-2">
                      {[
                        { icon: "/logos/Gmail_icon_(2020).svg.webp", name: "Email API", status: "Connected" },
                        { icon: "/logos/LinkedIn_icon.svg.png", name: "LinkedIn API", status: "Connected" },
                        { icon: "/logos/google drive logo.webp", name: "Drive API", status: "Connected" },
                        { icon: "/logos/perplexity-ai-icon.webp", name: "Research API", status: "Connected" }
                      ].map((service, i) => (
                        <motion.div
                          key={service.name}
                          className="flex items-center gap-2 p-2 rounded-lg bg-foreground/5"
                          initial={{ x: -10, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.7 + (i * 0.1) }}
                        >
                          <div className="relative w-4 h-4">
                            <Image 
                              src={service.icon}
                              alt={service.name}
                              fill
                              className="object-contain opacity-60" 
                            />
                          </div>
                          <span className="text-xs text-foreground/60">{service.name}</span>
                          <div className="ml-auto w-1.5 h-1.5 rounded-full bg-gradient-to-br from-brand to-brand-purple" />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Main Content */}
                <div className="flex-1 flex flex-col">
                  {/* Header */}
                  <div className="p-2.5 sm:p-4 border-b border-border/50">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0 mb-2 sm:mb-3">
                      <div>
                        <h2 className="text-base sm:text-lg font-medium mb-1">Lead Engagement</h2>
                        <div className="flex items-center gap-1.5 sm:gap-3 text-xs sm:text-sm text-foreground/40">
                          <div className="flex items-center gap-1">
                            <Database className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
                            <span>v1.2.4</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Boxes className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
                            <span>85% trained</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-foreground/5 text-foreground/60 text-xs sm:text-sm hover:bg-foreground/10 transition-colors">
                          View Logs
                        </button>
                        <button className="px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-gradient-to-r from-brand/10 via-brand-purple/10 to-brand-blue/10 text-brand text-xs sm:text-sm flex items-center gap-1 sm:gap-2 hover:from-brand/20 hover:via-brand-purple/20 hover:to-brand-blue/20 transition-colors">
                          <Zap className="w-3 sm:w-4 h-3 sm:h-4" />
                          <span>Deploy</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Flow Builder */}
                  <div className="flex-1 p-2.5 sm:p-4">
                    <div className="h-full flex flex-col gap-2.5 sm:gap-4">
                      {/* Configuration Panel */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3">
                        <motion.div
                          className="p-3 rounded-xl bg-background border border-border/50"
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.8 }}
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <Database className="w-4 h-4 text-foreground/40" />
                            <span className="text-xs font-medium">Model Performance</span>
                          </div>
                          <div className="space-y-2">
                            <div>
                              <div className="flex items-center justify-between text-xs mb-1">
                                <span className="text-foreground/40">Quality Score</span>
                                <span>92%</span>
                              </div>
                              <div className="h-1 bg-foreground/10 rounded-full overflow-hidden">
                                <motion.div 
                                  className="h-full bg-gradient-to-r from-brand via-brand-purple to-brand-blue rounded-full"
                                  initial={{ width: 0 }}
                                  animate={{ width: "92%" }}
                                  transition={{ duration: 1, delay: 1.1 }}
                                />
                              </div>
                            </div>
                            <div>
                              <div className="flex items-center justify-between text-xs mb-1">
                                <span className="text-foreground/40">Response Time</span>
                                <span>156ms</span>
                              </div>
                              <div className="h-1 bg-foreground/10 rounded-full overflow-hidden">
                                <motion.div 
                                  className="h-full bg-gradient-to-r from-brand via-brand-purple to-brand-blue rounded-full"
                                  initial={{ width: 0 }}
                                  animate={{ width: "78%" }}
                                  transition={{ duration: 1, delay: 1.2 }}
                                />
                              </div>
                            </div>
                          </div>
                        </motion.div>

                        <motion.div
                          className="p-3 rounded-xl bg-background border border-border/50"
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.9 }}
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <Boxes className="w-4 h-4 text-foreground/40" />
                            <span className="text-xs font-medium">Training Status</span>
                          </div>
                          <div className="space-y-2">
                            <div>
                              <div className="flex items-center justify-between text-xs mb-1">
                                <span className="text-foreground/40">Epochs</span>
                                <span>17/20</span>
                              </div>
                              <div className="h-1 bg-foreground/10 rounded-full overflow-hidden">
                                <motion.div 
                                  className="h-full bg-gradient-to-r from-brand via-brand-purple to-brand-blue rounded-full"
                                  initial={{ width: 0 }}
                                  animate={{ width: "85%" }}
                                  transition={{ duration: 1, delay: 1.3 }}
                                />
                              </div>
                            </div>
                            <div>
                              <div className="flex items-center justify-between text-xs mb-1">
                                <span className="text-foreground/40">Loss</span>
                                <span>0.0023</span>
                              </div>
                              <div className="h-1 bg-foreground/10 rounded-full overflow-hidden">
                                <motion.div 
                                  className="h-full bg-brand/50 rounded-full"
                                  initial={{ width: 0 }}
                                  animate={{ width: "95%" }}
                                  transition={{ duration: 1, delay: 1.4 }}
                                />
                              </div>
                            </div>
                          </div>
                        </motion.div>

                        <motion.div
                          className="p-3 rounded-xl bg-background border border-border/50"
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 1 }}
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <Server className="w-4 h-4 text-foreground/40" />
                            <span className="text-xs font-medium">System Resources</span>
                          </div>
                          <div className="space-y-2">
                            <div>
                              <div className="flex items-center justify-between text-xs mb-1">
                                <span className="text-foreground/40">GPU Usage</span>
                                <span>78%</span>
                              </div>
                              <div className="h-1 bg-foreground/10 rounded-full overflow-hidden">
                                <motion.div 
                                  className="h-full bg-brand/50 rounded-full"
                                  initial={{ width: 0 }}
                                  animate={{ width: "78%" }}
                                  transition={{ duration: 1, delay: 1.5 }}
                                />
                              </div>
                            </div>
                            <div>
                              <div className="flex items-center justify-between text-xs mb-1">
                                <span className="text-foreground/40">Memory</span>
                                <span>12.4GB</span>
                              </div>
                              <div className="h-1 bg-foreground/10 rounded-full overflow-hidden">
                                <motion.div 
                                  className="h-full bg-brand/50 rounded-full"
                                  initial={{ width: 0 }}
                                  animate={{ width: "62%" }}
                                  transition={{ duration: 1, delay: 1.6 }}
                                />
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      </div>

                      {/* Flow Canvas */}
                      <div className="flex-1 relative">
                        <div className="absolute inset-0 bg-foreground/5 rounded-lg sm:rounded-xl p-2.5 sm:p-4">
                          <div className="relative h-full">
                            {/* Flow Nodes */}
                            <div className="absolute inset-0 flex items-center justify-between px-4">
                              <motion.div
                                className="w-[45%] p-3 rounded-xl bg-background border border-border/50"
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 1.1 }}
                              >
                                <div className="flex items-center gap-2 mb-2">
                                  <Database className="w-4 h-4 text-foreground/80" />
                                  <span className="text-xs font-medium">Input Processing</span>
                                </div>
                                <div className="space-y-1.5">
                                  <div className="flex items-center justify-between text-xs">
                                    <span className="text-foreground/40">Source</span>
                                    <span>LinkedIn API</span>
                                  </div>
                                  <div className="flex items-center justify-between text-xs">
                                    <span className="text-foreground/40">Format</span>
                                    <span>JSON</span>
                                  </div>
                                  <div className="flex items-center justify-between text-xs">
                                    <span className="text-foreground/40">Schema</span>
                                    <span>v2.1.0</span>
                                  </div>
                                </div>
                              </motion.div>

                              <motion.div
                                className="w-[45%] p-3 rounded-xl bg-background border border-border/50"
                                initial={{ x: 20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 1.2 }}
                              >
                                <div className="flex items-center gap-2 mb-2">
                                  <Boxes className="w-4 h-4 text-foreground/80" />
                                  <span className="text-xs font-medium">Model Pipeline</span>
                                </div>
                                <div className="space-y-1.5">
                                  <div className="flex items-center justify-between text-xs">
                                    <span className="text-foreground/40">Engine</span>
                                    <span>GPT-4</span>
                                  </div>
                                  <div className="flex items-center justify-between text-xs">
                                    <span className="text-foreground/40">Temperature</span>
                                    <span>0.7</span>
                                  </div>
                                  <div className="flex items-center justify-between text-xs">
                                    <span className="text-foreground/40">Max Tokens</span>
                                    <span>2048</span>
                                  </div>
                                </div>
                              </motion.div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Code Editor */}
                      <motion.div
                        className="h-36 sm:h-48 rounded-lg sm:rounded-xl bg-background border border-border/50 overflow-hidden"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1.3 }}
                      >
                        <div className="flex items-center justify-between px-3 py-2 border-b border-border/50">
                          <div className="flex items-center gap-2">
                            <Braces className="w-4 h-4 text-foreground/40" />
                            <span className="text-xs font-medium">Prompt Template</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-foreground/40">prompt.json</span>
                            <button className="p-1 rounded hover:bg-foreground/5">
                              <Code2 className="w-3.5 h-3.5 text-foreground/40" />
                            </button>
                          </div>
                        </div>
                        <div className="p-3 font-mono text-xs leading-relaxed text-foreground/60">
                          {`{
  "system": "You are an AI sales assistant trained to engage with leads...",
  "template": "Based on {{context}} from {{source}}, generate a personalized...",
  "parameters": {
    "tone": "professional",
    "max_length": 150,
    "style": "consultative"
  }
}`}
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
} 