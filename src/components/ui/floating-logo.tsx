'use client'

import React, { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { cn } from '@/lib/utils'

interface FloatingLogoProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode
  size?: 'sm' | 'md' | 'lg'
}

export function FloatingLogo({ 
  icon, 
  size = 'md',
  className,
  ...props 
}: FloatingLogoProps) {
  const ref = useRef<HTMLDivElement>(null)
  
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  const mouseX = useSpring(x, { stiffness: 500, damping: 100 })
  const mouseY = useSpring(y, { stiffness: 500, damping: 100 })
  
  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["17.5deg", "-17.5deg"])
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-17.5deg", "17.5deg"])
  
  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      const rect = ref.current?.getBoundingClientRect()
      if (!rect) return
      
      const width = rect.width
      const height = rect.height
      
      const mouseX = e.clientX - rect.left
      const mouseY = e.clientY - rect.top
      
      const xPct = mouseX / width - 0.5
      const yPct = mouseY / height - 0.5
      
      x.set(xPct)
      y.set(yPct)
    }
    
    ref.current?.addEventListener("mousemove", handleMouseMove)
    
    return () => {
      ref.current?.removeEventListener("mousemove", handleMouseMove)
    }
  }, [x, y])
  
  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-32 h-32'
  }
  
  return (
    <div 
      ref={ref}
      style={{
        perspective: 1000,
      }}
      className={cn(
        'relative cursor-pointer select-none',
        sizeClasses[size],
        className
      )}
      {...props}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        whileHover={{ scale: 1.1 }}
        className="w-full h-full"
      >
        <div 
          className={cn(
            "absolute inset-4 bg-gradient-to-br from-brand/50 to-brand-foreground/50 rounded-xl blur-xl",
            "animate-pulse"
          )} 
        />
        <div 
          className={cn(
            "relative w-full h-full rounded-xl",
            "bg-gradient-to-br from-brand to-brand-foreground",
            "flex items-center justify-center",
            "shadow-lg shadow-brand/20",
            "border border-white/10",
            "glass-effect"
          )}
        >
          {icon || (
            <span className="font-display text-2xl text-white">ML</span>
          )}
        </div>
      </motion.div>
    </div>
  )
} 