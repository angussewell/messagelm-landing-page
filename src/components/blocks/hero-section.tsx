"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { Glow } from "@/components/ui/glow";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { DashboardMockup } from "@/components/ui/dashboard-mockup";
import { MarqueeDemo } from "@/components/ui/marquee-demo";

interface HeroAction {
  text: string;
  href: string;
  icon?: React.ReactNode;
  variant?: "default" | "glow";
}

interface HeroProps {
  badge?: {
    text: string;
    action: {
      text: string;
      href: string;
    };
  };
  title: string;
  description: string;
  actions: HeroAction[];
}

export function HeroSection({
  badge,
  title,
  description,
  actions,
}: HeroProps) {
  return (
    <section
      className={cn(
        "bg-background text-foreground relative",
        "pt-20 pb-6 sm:pt-32 md:pt-40 lg:pt-48 sm:pb-12 md:pb-16 px-3 sm:px-6",
        "overflow-hidden"
      )}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        {/* Ambient glow effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] aspect-square">
            {/* Modern AI gradient effect */}
            <div className="absolute inset-0 bg-gradient-radial from-brand/20 via-brand-purple/10 to-background blur-3xl opacity-30" />
            <div className="absolute inset-0 bg-gradient-conic from-brand via-brand-purple to-brand-blue opacity-5" />
          </div>
        </div>
      </div>
      
      <div className="mx-auto flex max-w-container flex-col gap-4 sm:gap-8 md:gap-10">
        <div className="flex flex-col items-center gap-3 sm:gap-6 text-center px-1 sm:px-0">
          {/* Badge */}
          {badge && (
            <Badge variant="outline" className="animate-appear gap-1.5 sm:gap-2 text-xs sm:text-sm">
              <span className="text-muted-foreground">{badge.text}</span>
              <a href={badge.action.href} className="flex items-center gap-1">
                {badge.action.text}
                <ArrowRight className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
              </a>
            </Badge>
          )}

          {/* Title */}
          <motion.h1 
            className="relative z-10 inline-block animate-appear bg-gradient-to-br from-brand via-brand-purple to-brand-blue bg-clip-text text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight text-transparent drop-shadow-sm sm:leading-tight md:leading-tight px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {title}
          </motion.h1>

          {/* Description */}
          <motion.p 
            className="text-sm sm:text-md md:text-xl relative z-10 max-w-[600px] font-medium text-muted-foreground px-2 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {description}
          </motion.p>

          {/* Actions */}
          <motion.div 
            className="relative z-10 flex flex-col sm:flex-row justify-center gap-2 sm:gap-4 w-full sm:w-auto px-4 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            {actions.map((action, index) => (
              <Button
                key={action.text}
                variant={action.variant === "glow" ? "glow" : "default"}
                className="w-full sm:w-auto text-sm sm:text-base py-2 sm:py-2.5"
                asChild
              >
                <a href={action.href} className="flex items-center justify-center gap-2">
                  {action.text}
                  {action.icon}
                </a>
              </Button>
            ))}
          </motion.div>
        </div>

        {/* Dashboard Mockup */}
        <motion.div
          className="relative z-10 w-full -mx-2 sm:mx-0 px-0.5 sm:px-0"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <DashboardMockup />
          <Glow variant="center" className="opacity-50 sm:opacity-100" />
        </motion.div>

        {/* Marquee Demo */}
        <motion.div
          className="relative z-10 w-full mt-4 sm:mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <MarqueeDemo />
        </motion.div>
      </div>
    </section>
  );
} 