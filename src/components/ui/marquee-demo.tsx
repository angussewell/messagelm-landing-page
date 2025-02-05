"use client"

import { Marquee } from "@/components/ui/marquee"

const logos = [
  {
    src: "/logos/Jotto%20Logo.png",
    alt: "Jotto",
  },
  {
    src: "/logos/Quadrant2%20Logo.png",
    alt: "Quadrant2",
  },
  {
    src: "/logos/Vintory%20logo.png",
    alt: "Vintory",
  },
  {
    src: "/logos/Accountable%20Logo.png",
    alt: "Accountable",
  },
  {
    src: "/logos/tempo%20logo.png",
    alt: "Tempo",
  },
  {
    src: "/logos/Profitibull%20Logo.png",
    alt: "Profitibull",
  },
  {
    src: "/logos/Scale%20Your%20Cause%20Logo.png",
    alt: "Scale Your Cause",
  },
]

export function MarqueeDemo() {
  return (
    <Marquee speed={20}>
      {logos.map(({ src, alt }, index) => (
        <div
          key={index}
          className="inline-flex items-center justify-center px-6 sm:px-12"
        >
          <img
            src={src}
            alt={alt}
            className="h-24 sm:h-40 max-w-[160px] sm:max-w-[240px] object-contain opacity-80 hover:opacity-100 transition-opacity"
          />
        </div>
      ))}
    </Marquee>
  )
} 