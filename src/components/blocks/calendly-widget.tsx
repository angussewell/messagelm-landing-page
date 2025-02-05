'use client'

import { motion } from 'framer-motion'
import Script from 'next/script'

interface CalendlyWidgetProps {
  url: string
}

export function CalendlyWidget({ url }: CalendlyWidgetProps) {
  return (
    <motion.div
      key="calendly"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="relative -mx-4 -my-2"
    >
      <div 
        className="calendly-inline-widget" 
        data-url={url}
        style={{ minWidth: '320px', height: '700px' }}
      />
      <Script 
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
    </motion.div>
  )
} 