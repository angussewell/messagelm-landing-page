'use client'

export function Footer() {
  return (
    <footer className="border-t border-border/40">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-10 md:order-2">
          <a href="/pricing" className="text-sm leading-6 text-muted-foreground hover:text-foreground">
            Pricing
          </a>
          <a href="/contact" className="text-sm leading-6 text-muted-foreground hover:text-foreground">
            Contact
          </a>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <img
              src="/logos/MessageLM Icon.png"
              alt="MessageLM"
              className="h-6 w-6 object-contain"
              loading="lazy"
            />
            <p className="text-sm leading-6 text-muted-foreground">
              &copy; {new Date().getFullYear()} MessageLM. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
} 