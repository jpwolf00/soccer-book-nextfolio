import Link from 'next/link'

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
                <span className="text-soccer-green-600">Offside!</span>
              </h1>
              <p className="mt-4 text-3xl font-semibold text-gray-700 dark:text-gray-200">
                See the game differently
              </p>
              <p className="mt-2 text-xl text-gray-600 dark:text-gray-400 italic">
                A guide for American fans
              </p>
              <p className="mt-6 text-xl text-gray-600 dark:text-gray-300">
                The soccer instruction book built for how Americans actually learn sports—with <strong>interactive tactical animations</strong> you control, historic moments you can replay, and explanations that don't assume you grew up in Manchester.
              </p>
              <div className="mt-6 text-base text-gray-500 dark:text-gray-400">
                📚 QR codes link directly to animations • 🎥 Study the moments that made history • 🎮 Control the pace, pause, rewind
              </div>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/book"
                  className="inline-flex items-center justify-center rounded-lg bg-soccer-green-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition hover:bg-soccer-green-700"
                >
                  Pre-order Now →
                </Link>
                <Link
                  href="/tactics"
                  className="inline-flex items-center justify-center rounded-lg border-2 border-soccer-green-600 px-8 py-4 text-base font-semibold text-soccer-green-600 transition hover:bg-soccer-green-50 dark:border-soccer-green-400 dark:text-soccer-green-400 dark:hover:bg-gray-800"
                >
                  Try Interactive Demo
                </Link>
              </div>
            </div>

            {/* Right side - Live Interactive Preview */}
            <div className="relative">
              <div className="rounded-2xl bg-gray-900 shadow-2xl overflow-hidden border-4 border-soccer-green-600 h-[500px] sm:h-[600px] lg:h-[650px]">
                {/* Embedded Tactical Animation */}
                <iframe 
                  src="/tactics/index.html?id=accordionShape"
                  className="w-full h-full border-0"
                  title="Interactive Tactical Animation Preview"
                  allow="autoplay"
                />
              </div>
              <div className="mt-4 text-center">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  ↑ Try it: Click play and control the animation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              How It Works
            </h2>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
              A seamless multimedia learning experience
            </p>
          </div>

          <div className="mt-20 grid gap-12 md:grid-cols-3">
            {/* Step 1 */}
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-soccer-green-100 dark:bg-soccer-green-900">
                <svg className="h-8 w-8 text-soccer-green-600 dark:text-soccer-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">
                Read Like a Story
              </h3>
              <p className="mt-4 text-base text-gray-600 dark:text-gray-300">
                No textbook language. No assuming you know what a "false nine" is. Each chapter teaches soccer the way you'd explain it to a friend over beers.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-soccer-green-100 dark:bg-soccer-green-900">
                <svg className="h-8 w-8 text-soccer-green-600 dark:text-soccer-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">
                Scan the QR Codes
              </h3>
              <p className="mt-4 text-base text-gray-600 dark:text-gray-300">
                Every tactical concept, formation shift, and iconic play links to an animation. Your phone becomes your tactical simulator.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-soccer-green-100 dark:bg-soccer-green-900">
                <svg className="h-8 w-8 text-soccer-green-600 dark:text-soccer-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">
                Control Your Learning
              </h3>
              <p className="mt-4 text-base text-gray-600 dark:text-gray-300">
                Pause mid-attack. Rewind the offside trap. Watch Messi's movement frame by frame. Study at your pace, not the commentator's.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Inside Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              What's Inside
            </h2>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
              11 chapters that turn "What just happened?" into "I saw that coming"
            </p>
            <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
              From basic rules to reading managers' minds, this is your complete guide to understanding—not just watching—the world's game.
            </p>
          </div>

          <div className="mt-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            {/* Chapters 1-4 */}
            <div>
              <h3 className="text-lg font-semibold text-soccer-green-600 dark:text-soccer-green-400">
                Chapters 1-4: Foundations
              </h3>
              <ul className="mt-4 space-y-3 text-base text-gray-600 dark:text-gray-300">
                <li>• The Rules That Matter</li>
                <li>• How Formations Breathe</li>
                <li>• Reading Player Roles</li>
                <li>• Mastering Offside</li>
              </ul>
            </div>

            {/* Chapters 5-6 */}
            <div>
              <h3 className="text-lg font-semibold text-soccer-green-600 dark:text-soccer-green-400">
                Chapters 5-6: Reading Matches
              </h3>
              <ul className="mt-4 space-y-3 text-base text-gray-600 dark:text-gray-300">
                <li>• Spotting Momentum Shifts</li>
                <li>• Tactical Adjustments in Real Time</li>
              </ul>
            </div>

            {/* Chapters 7-8 */}
            <div>
              <h3 className="text-lg font-semibold text-soccer-green-600 dark:text-soccer-green-400">
                Chapters 7-8: The Business
              </h3>
              <ul className="mt-4 space-y-3 text-base text-gray-600 dark:text-gray-300">
                <li>• How Teams Are Built</li>
                <li>• Inside the Transfer Market</li>
              </ul>
            </div>

            {/* Chapters 9-11 */}
            <div>
              <h3 className="text-lg font-semibold text-soccer-green-600 dark:text-soccer-green-400">
                Chapters 9-11: The Culture
              </h3>
              <ul className="mt-4 space-y-3 text-base text-gray-600 dark:text-gray-300">
                <li>• Why Fans Act That Way</li>
                <li>• Songs, Scarves, and Rituals</li>
                <li>• American Soccer's Evolution</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-to-br from-soccer-green-600 to-soccer-green-700">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white sm:text-5xl">
            Stop guessing. Start seeing.
          </h2>
          <p className="mt-6 text-xl text-soccer-green-100">
            Get <em>Offside!</em> and access all interactive content
          </p>
          <div className="mt-10">
            <Link
              href="/book"
              className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-base font-semibold text-soccer-green-600 shadow-lg transition hover:bg-gray-100"
            >
              Pre-order Now →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
