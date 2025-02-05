"use client";

import React, { forwardRef, useRef } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/ui/animated-beam";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className,
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

const Icons = {
  anthropic: () => (
    <img 
      src="/logos/anthropic-icon-logo-png_seeklogo-515014.png" 
      alt="Anthropic Logo"
      className="w-8 h-8 object-contain"
    />
  ),
  deepseek: () => (
    <img 
      src="/logos/deepseek.png" 
      alt="Deepseek Logo"
      className="w-8 h-8 object-contain"
    />
  ),
  gemini: () => (
    <img 
      src="/logos/google-gemini-icon.webp" 
      alt="Google Gemini Logo"
      className="w-8 h-8 object-contain"
    />
  ),
  openai: () => (
    <img 
      src="/logos/openai-icon-2021x2048-4rpe5x7n.png" 
      alt="OpenAI Logo"
      className="w-8 h-8 object-contain"
    />
  ),
  perplexity: () => (
    <img 
      src="/logos/perplexity-ai-icon.webp" 
      alt="Perplexity Logo"
      className="w-8 h-8 object-contain"
    />
  ),
  meta: () => (
    <img 
      src="/logos/meta-6871457_1280.webp" 
      alt="Meta Logo"
      className="w-8 h-8 object-contain"
    />
  ),
  messagelm: () => (
    <img 
      src="/logos/MessageLM Icon.png" 
      alt="MessageLM Logo"
      className="w-10 h-10 object-contain"
    />
  ),
};

export function AnimatedBeamDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative flex h-[500px] w-full items-center justify-center overflow-hidden"
      ref={containerRef}
    >
      <div className="flex size-full flex-col max-w-lg max-h-[200px] items-stretch justify-between gap-10">
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div1Ref}>
            <Icons.anthropic />
          </Circle>
          <Circle ref={div5Ref}>
            <Icons.gemini />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div2Ref}>
            <Icons.deepseek />
          </Circle>
          <Circle ref={div4Ref} className="size-16">
            <Icons.messagelm />
          </Circle>
          <Circle ref={div6Ref}>
            <Icons.perplexity />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div3Ref}>
            <Icons.openai />
          </Circle>
          <Circle ref={div7Ref}>
            <Icons.meta />
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div4Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div4Ref}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div7Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
        reverse
      />
    </div>
  );
} 