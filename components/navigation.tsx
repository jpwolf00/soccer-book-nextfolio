'use client'

import Link from 'next/link'
import { useState } from 'react'
import { siteConfig } from '@/app/config'

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/blog', label: 'Blog' },
    { href: '/tactics', label: 'Interactive Tactics' },
    { href: '/moments', label: 'Historic Moments' },
  ]

  return (
    <nav className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-sm dark:bg-gray-950/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl">⚽</span>
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                {siteConfig.name.split(' ').slice(0, 2).join(' ')}
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-gray-600 transition-colors hover:text-soccer-green-600 dark:text-gray-300 dark:hover:text-soccer-green-400"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={siteConfig.links.amazon}
              className="rounded-lg bg-soccer-green-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-soccer-green-700"
            >
              Get the Book
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-2 text-gray-600 hover:text-soccer-green-600 dark:text-gray-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={siteConfig.links.amazon}
              className="mt-2 block rounded-lg bg-soccer-green-600 px-4 py-2 text-center text-sm font-medium text-white"
            >
              Get the Book
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
