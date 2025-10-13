import Link from 'next/link'
import { siteConfig } from './config'

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-soccer-green-50 via-white to-soccer-green-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Left side - Copy */}
            <div>
              <h1 className="text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl lg:text-7xl">
                Learn to Watch Soccer{' '}
                <span className="text-soccer-green-600">Like a Local</span>
              </h1>
              <p className="mt-6 text-xl text-gray-600 dark:text-gray-300">
                The only soccer instruction book with <strong>interactive tactical animations</strong> you control. 
                Master the tactics, formations, and unwritten rules of the world's game.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/tactics"
                  className="inline-flex items-center justify-center rounded-lg bg-soccer-green-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition hover:bg-soccer-green-700"
                >
                  Try Interactive Tactics →
                </Link>
                <Link
                  href="/book"
                  className="inline-flex items-center justify-center rounded-lg border-2 border-soccer-green-600 bg-white px-8 py-4 text-base font-semibold text-soccer-green-600 transition hover:bg-soccer-green-50"
                >
                  About the Book
                </Link>
              </div>
              <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
                📚 QR codes in the book link directly to animations • 🎥 Historic moments included
              </p>
            </div>

            {/* Right side - Visual */}
            <div className="relative">
              <div className="aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-soccer-green-100 to-soccer-green-200 p-8 shadow-2xl dark:from-soccer-green-900 dark:to-soccer-green-800">
                <div className="flex h-full items-center justify-center">
                  <div className="text-center">
                    <div className="text-8xl mb-6">⚽</div>
                    <p className="text-lg font-semibold text-soccer-green-900 dark:text-soccer-green-100">
                      Interactive Tool Preview
                    </p>
                    <p className="mt-2 text-sm text-soccer-green-700 dark:text-soccer-green-200">
                      Your tactical simulator will display here
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-24 dark:bg-gray-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">How It Works</h2>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
              A seamless multimedia learning experience
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {/* Step 1 */}
            <div className="text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-soccer-green-100 dark:bg-soccer-green-900">
                <svg className="h-10 w-10 text-soccer-green-600 dark:text-soccer-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-900 dark:text-white">Read the Concepts</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Each chapter explains soccer's tactics, roles, and culture in clear, conversational language.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-soccer-green-100 dark:bg-soccer-green-900">
                <svg className="h-10 w-10 text-soccer-green-600 dark:text-soccer-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-900 dark:text-white">Scan the QR Codes</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Found throughout the book, these link directly to animations and historic moments.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-soccer-green-100 dark:bg-soccer-green-900">
                <svg className="h-10 w-10 text-soccer-green-600 dark:text-soccer-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-900 dark:text-white">Control the Learning</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Pause, rewind, adjust speed. Study tactics at your own pace with interactive animations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Inside */}
      <section className="bg-gray-50 py-24 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">What's Inside</h2>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
              11 chapters covering everything from basic rules to the culture of the game
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-950">
              <h3 className="font-bold text-lg mb-3 text-soccer-green-600">Chapters 1-4: Foundations</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>• The Rules That Matter</li>
                <li>• How Formations Breathe</li>
                <li>• Reading Player Roles</li>
                <li>• Mastering Offside</li>
              </ul>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-950">
              <h3 className="font-bold text-lg mb-3 text-soccer-green-600">Chapters 5-6: Reading Matches</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>• Spotting Momentum Shifts</li>
                <li>• Tactical Adjustments in Real Time</li>
              </ul>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-950">
              <h3 className="font-bold text-lg mb-3 text-soccer-green-600">Chapters 7-8: The Business</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>• How Teams Are Built</li>
                <li>• Inside the Transfer Market</li>
              </ul>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-950 md:col-span-2 lg:col-span-3">
              <h3 className="font-bold text-lg mb-3 text-soccer-green-600">Chapters 9-11: The Culture</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>• Why Fans Act That Way • Songs, Scarves, and Rituals • American Soccer's Evolution</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link href="/book" className="inline-flex items-center text-soccer-green-600 font-semibold hover:text-soccer-green-700 dark:text-soccer-green-400">
              Read Full Chapter Descriptions →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-soccer-green-600 py-24 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold">Ready to Start Learning?</h2>
          <p className="mt-6 text-xl text-soccer-green-100">
            Get the book and access all interactive content
          </p>
          <div className="mt-10">
            <Link
              href="/book"
              className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-base font-semibold text-soccer-green-600 shadow-lg transition hover:bg-gray-100"
            >
              Get the Book →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
