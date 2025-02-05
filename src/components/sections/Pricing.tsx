import React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const plans = [
  {
    name: 'Enterprise',
    description: 'Full-service AI sales enablement with expert prompt engineering and custom scenarios.',
    price: '$1,500',
    features: [
      'Custom-built AI models',
      'Expert prompt engineering team',
      'Dedicated support',
      'CRM integration',
      'Custom scenario development',
      '5,000 monthly requests',
      'Priority updates',
      'Advanced analytics',
    ],
    cta: 'Contact Sales',
    href: '/contact',
    featured: true,
  },
  {
    name: 'Software',
    description: 'Self-service platform for teams who want to manage their own AI sales enablement.',
    price: '$300',
    features: [
      'Access to MessageLM platform',
      'Basic prompt templates',
      'Standard support',
      'CRM integration',
      'Pre-built scenarios',
      '5,000 monthly requests',
      'Regular updates',
      'Basic analytics',
    ],
    cta: 'Join Waitlist',
    href: '/waitlist',
    featured: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-8 sm:py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">Pricing</h2>
          <p className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            Choose the right plan for your team
          </p>
        </div>
        <p className="mx-auto mt-4 sm:mt-6 max-w-2xl text-center text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
          Start with our full-service Enterprise plan, or join the waitlist for our upcoming self-service platform.
        </p>
        <div className="mx-auto mt-8 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-12 sm:gap-y-8 lg:max-w-4xl lg:grid-cols-2 lg:gap-x-8">
          {plans.map((plan, planIdx) => (
            <div
              key={plan.name}
              className={cn(
                "flex flex-col justify-between rounded-3xl p-6 sm:p-8 xl:p-10 ring-1",
                plan.featured ? 'bg-gray-900 text-white ring-gray-900' : 'bg-white ring-gray-200',
                planIdx === 0 ? 'lg:z-10 lg:rounded-r-none' : 'lg:rounded-l-none'
              )}
            >
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h3 className={cn(
                    "text-lg sm:text-xl font-semibold leading-8",
                    plan.featured ? 'text-white' : 'text-gray-900'
                  )}>
                    {plan.name}
                  </h3>
                </div>
                <p className={cn(
                  "mt-4 text-sm sm:text-base leading-6",
                  plan.featured ? 'text-gray-300' : 'text-gray-600'
                )}>
                  {plan.description}
                </p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className={cn(
                    "text-3xl sm:text-4xl font-bold tracking-tight",
                    plan.featured ? 'text-white' : 'text-gray-900'
                  )}>
                    {plan.price}
                  </span>
                  <span className={cn(
                    "text-sm font-semibold leading-6",
                    plan.featured ? 'text-gray-300' : 'text-gray-600'
                  )}>
                    /month
                  </span>
                </p>
                <ul role="list" className={cn(
                  "mt-8 space-y-3 text-sm sm:text-base leading-6",
                  plan.featured ? 'text-gray-300' : 'text-gray-600'
                )}>
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <svg
                        className={cn(
                          "h-5 w-5 sm:h-6 sm:w-5 flex-none",
                          plan.featured ? 'text-primary-400' : 'text-primary-600'
                        )}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href={plan.href}
                className={cn(
                  "mt-8 block rounded-md px-3 py-2.5 sm:py-3 text-center text-sm sm:text-base font-semibold leading-6",
                  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
                  plan.featured
                    ? 'bg-primary-500 text-white hover:bg-primary-400 focus-visible:outline-primary-500'
                    : 'bg-primary-600 text-white hover:bg-primary-500 focus-visible:outline-primary-600'
                )}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 