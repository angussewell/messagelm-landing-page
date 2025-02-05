'use client'

import React from 'react'
import Link from 'next/link'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary-50 to-white pt-32 pb-24">
      <div className="absolute inset-0 bg-gradient-radial from-primary-100/30 via-transparent to-transparent" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-display text-5xl font-bold tracking-tight text-gray-900 sm:text-7xl">
            Sales outreach that{' '}
            <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
              resonates
            </span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Your prospects deserve thoughtful, personalized communication. We build the tools and craft the strategies 
            that make genuine connections possible at scale.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/contact"
              className="rounded-full bg-primary-500 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
            >
              Start a conversation
            </Link>
            <Link href="/demo" className="text-base font-semibold leading-6 text-gray-900">
              See our work <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
} 