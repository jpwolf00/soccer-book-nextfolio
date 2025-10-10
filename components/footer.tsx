import Link from 'next/link'
import { siteConfig } from '@/app/config'

export function Footer() {
  return (
    <footer className="border-t bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Left column */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl">⚽</span>
              <span className="text-xl font-bold">{siteConfig.name.split(' ').slice(0, 3).join(' ')}</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Master soccer tactics through interactive animations and historic moments.
            </p>
            <p className="mt-4 text-xs text-gray-500 dark:text-gray-500">
              © {new Date().getFullYear()} {siteConfig.author}. All rights reserved.
            </p>
          </div>

          {/* Center column */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-gray-900 dark:text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-gray-600 hover:text-soccer-green-600 dark:text-gray-400">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-gray-600 hover:text-soccer-green-600 dark:text-gray-400">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/tactics" className="text-sm text-gray-600 hover:text-soccer-green-600 dark:text-gray-400">
                  Interactive Tactics
                </Link>
              </li>
              <li>
                <Link href="/moments" className="text-sm text-gray-600 hover:text-soccer-green-600 dark:text-gray-400">
                  Historic Moments
                </Link>
              </li>
              <li>
                <Link href="/book" className="text-sm text-gray-600 hover:text-soccer-green-600 dark:text-gray-400">
                  The Book
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-gray-600 hover:text-soccer-green-600 dark:text-gray-400">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Right column */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-gray-900 dark:text-white">Connect</h3>
            <ul className="space-y-2">
              {siteConfig.links.twitter && (
                <li>
                  <a
                    href={siteConfig.links.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-600 hover:text-soccer-green-600 dark:text-gray-400"
                  >
                    Twitter/X
                  </a>
                </li>
              )}
              {siteConfig.links.github && (
                <li>
                  <a
                    href={siteConfig.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-600 hover:text-soccer-green-600 dark:text-gray-400"
                  >
                    GitHub
                  </a>
                </li>
              )}
              <li>
                <a
                  href="mailto:contact@example.com"
                  className="text-sm text-gray-600 hover:text-soccer-green-600 dark:text-gray-400"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
