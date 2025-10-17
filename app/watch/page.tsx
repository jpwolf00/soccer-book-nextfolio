import Link from 'next/link'

export default function WatchPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-soccer-green-50 via-white to-soccer-green-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
              Where to Watch Soccer in the US
            </h1>
            <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Following soccer in the United States means navigating the same fragmented broadcast landscape as college football or the NBA—just with more leagues and more countries involved. This guide tracks where the major competitions live right now.
            </p>
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
              Last updated: October 17, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Major European Leagues Section */}
      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              Major European Leagues
            </h2>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
              Where to find the top European professional leagues
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Premier League */}
            <div className="rounded-lg border-2 border-gray-200 dark:border-gray-800 p-6 hover:border-soccer-green-600 transition">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Premier League</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">England</p>
                </div>
                <span className="text-2xl">🏴󠁧󠁢󠁥󠁮󠁧󠁿</span>
              </div>
              
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">📺 Where to Watch</p>
                  <p className="text-base text-gray-900 dark:text-white">Peacock, NBC, USA Network</p>
                </div>
                
                <div>
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">💰 Cost</p>
                  <p className="text-base text-gray-900 dark:text-white">$7.99/month (Peacock)</p>
                </div>
                
                <div>
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">⚽ Coverage</p>
                  <p className="text-base text-gray-900 dark:text-white">All 380 matches</p>
                </div>
                
                <div className="pt-3 border-t border-gray-200 dark:border-gray-800">
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">🏆 Related Tournaments:</p>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    <li>• Champions League (Paramount+)</li>
                    <li>• Europa League (Paramount+)</li>
                    <li>• FA Cup (ESPN+)</li>
                    <li>• Carabao Cup (Paramount+)</li>
                  </ul>
                </div>
                
                <div className="pt-2">
                  <p className="text-xs text-gray-500 dark:text-gray-500">
                    Most matches on Peacock; bigger games on NBC/USA. Rights through 2027-28.
                  </p>
                </div>
              </div>
            </div>

            {/* La Liga */}
            <div className="rounded-lg border-2 border-gray-200 dark:border-gray-800 p-6 hover:border-soccer-green-600 transition">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">La Liga</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Spain</p>
                </div>
                <span className="text-2xl">🇪🇸</span>
              </div>
              
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">📺 Where to Watch</p>
                  <p className="text-base text-gray-900 dark:text-white">ESPN+</p>
                </div>
                
                <div>
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">💰 Cost</p>
                  <p className="text-base text-gray-900 dark:text-white">$11.99/month</p>
                </div>
                
                <div>
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">⚽ Coverage</p>
                  <p className="text-base text-gray-900 dark:text-white">All matches</p>
                </div>
                
                <div className="pt-3 border-t border-gray-200 dark:border-gray-800">
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">🏆 Related Tournaments:</p>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    <li>• Champions League (Paramount+)</li>
                    <li>• Europa League (Paramount+)</li>
                    <li>• Copa del Rey (ESPN+)</li>
                  </ul>
                </div>
                
                <div className="pt-2">
                  <p className="text-xs text-gray-500 dark:text-gray-500">
                    Complete coverage of Spanish top flight. Rights through 2028-29.
                  </p>
                </div>
              </div>
            </div>

            {/* Bundesliga */}
            <div className="rounded-lg border-2 border-gray-200 dark:border-gray-800 p-6 hover:border-soccer-green-600 transition">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Bundesliga</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Germany</p>
                </div>
                <span className="text-2xl">🇩🇪</span>
              </div>
              
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">📺 Where to Watch</p>
                  <p className="text-base text-gray-900 dark:text-white">ESPN+</p>
                </div>
                
                <div>
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">💰 Cost</p>
                  <p className="text-base text-gray-900 dark:text-white">$11.99/month</p>
                </div>
                
                <div>
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">⚽ Coverage</p>
                  <p className="text-base text-gray-900 dark:text-white">All matches</p>
                </div>
                
                <div className="pt-3 border-t border-gray-200 dark:border-gray-800">
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">🏆 Related Tournaments:</p>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    <li>• Champions League (Paramount+)</li>
                    <li>• Europa League (Paramount+)</li>
                    <li>• DFB-Pokal (ESPN+)</li>
                  </ul>
                </div>
                
                <div className="pt-2">
                  <p className="text-xs text-gray-500 dark:text-gray-500">
                    Complete German league coverage. Rights through 2025-26.
                  </p>
                </div>
              </div>
            </div>

            {/* Serie A */}
            <div className="rounded-lg border-2 border-gray-200 dark:border-gray-800 p-6 hover:border-soccer-green-600 transition">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Serie A</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Italy</p>
                </div>
                <span className="text-2xl">🇮🇹</span>
              </div>
              
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">📺 Where to Watch</p>
                  <p className="text-base text-gray-900 dark:text-white">Paramount+</p>
                </div>
                
                <div>
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">💰 Cost</p>
                  <p className="text-base text-gray-900 dark:text-white">$7.99/month</p>
                </div>
                
                <div>
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">⚽ Coverage</p>
                  <p className="text-base text-gray-900 dark:text-white">Most matches</p>
                </div>
                
                <div className="pt-3 border-t border-gray-200 dark:border-gray-800">
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">🏆 Related Tournaments:</p>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    <li>• Champions League (Paramount+)</li>
                    <li>• Europa League (Paramount+)</li>
                    <li>• Coppa Italia (Paramount+)</li>
                  </ul>
                </div>
                
                <div className="pt-2">
                  <p className="text-xs text-gray-500 dark:text-gray-500">
                    Italian league coverage. Rights through 2026-27.
                  </p>
                </div>
              </div>
            </div>

            {/* Ligue 1 */}
            <div className="rounded-lg border-2 border-gray-200 dark:border-gray-800 p-6 hover:border-soccer-green-600 transition">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Ligue 1</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">France</p>
                </div>
                <span className="text-2xl">🇫🇷</span>
              </div>
              
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">📺 Where to Watch</p>
                  <p className="text-base text-gray-900 dark:text-white">beIN SPORTS, fuboTV</p>
                </div>
                
                <div>
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">💰 Cost</p>
                  <p className="text-base text-gray-900 dark:text-white">$79.99/month (fuboTV)</p>
                </div>
                
                <div>
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">⚽ Coverage</p>
                  <p className="text-base text-gray-900 dark:text-white">Select matches</p>
                </div>
                
                <div className="pt-3 border-t border-gray-200 dark:border-gray-800">
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">🏆 Related Tournaments:</p>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    <li>• Champions League (Paramount+)</li>
                    <li>• Europa League (Paramount+)</li>
                  </ul>
                </div>
                
                <div className="pt-2">
                  <p className="text-xs text-gray-500 dark:text-gray-500">
                    Limited coverage compared to other top-5 leagues.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* US Soccer Section - NEW */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              US Soccer
            </h2>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
              American leagues and national teams
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* MLS */}
            <div className="rounded-lg border-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-6 hover:border-soccer-green-600 transition">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">MLS</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Major League Soccer</p>
                </div>
                <span className="text-2xl">🇺🇸</span>
              </div>
              
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">📺 Where to Watch</p>
                  <p className="text-base text-gray-900 dark:text-white">Apple TV+ (MLS Season Pass)</p>
                </div>
                
                <div>
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">💰 Cost</p>
                  <p className="text-base text-gray-900 dark:text-white">$14.99/month (season pass)</p>
                </div>
                
                <div>
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">⚽ Coverage</p>
                  <p className="text-base text-gray-900 dark:text-white">All matches</p>
                </div>
                
                <div className="pt-3 border-t border-gray-200 dark:border-gray-800">
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">🏆 Related Tournaments:</p>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    <li>• US Open Cup (ESPN+)</li>
                    <li>• Leagues Cup (Apple TV+)</li>
                    <li>• MLS Cup Playoffs (Apple TV+)</li>
                  </ul>
                </div>
                
                <div className="pt-2">
                  <p className="text-xs text-gray-500 dark:text-gray-500">
                    ~30 select matches also on Fox/FS1. Rights through 2032.
                  </p>
                </div>
              </div>
            </div>

            {/* NWSL */}
            <div className="rounded-lg border-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-6 hover:border-soccer-green-600 transition">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">NWSL</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Women's Professional League</p>
                </div>
                <span className="text-2xl">🇺🇸</span>
              </div>
              
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">📺 Where to Watch</p>
                  <p className="text-base text-gray-900 dark:text-white">Prime Video, CBS Sports</p>
                </div>
                
                <div>
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">💰 Cost</p>
                  <p className="text-base text-gray-900 dark:text-white">Included with Prime ($14.99/mo)</p>
                </div>
                
                <div>
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">⚽ Coverage</p>
                  <p className="text-base text-gray-900 dark:text-white">All matches</p>
                </div>
                
                <div className="pt-3 border-t border-gray-200 dark:border-gray-800">
                  <p className="text-xs text-gray-500 dark:text-gray-500">
                    Most matches on Prime Video; select matches on CBS Sports Network/Paramount+. Rights through 2027.
                  </p>
                </div>
              </div>
            </div>

            {/* USL Championship */}
            <div className="rounded-lg border-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-6 hover:border-soccer-green-600 transition">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">USL Championship</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Second Tier US League</p>
                </div>
                <span className="text-2xl">🇺🇸</span>
              </div>
              
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">📺 Where to Watch</p>
                  <p className="text-base text-gray-900 dark:text-white">ESPN+, CBS Sports</p>
                </div>
                
                <div>
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">💰 Cost</p>
                  <p className="text-base text-gray-900 dark:text-white">$11.99/month (ESPN+)</p>
                </div>
                
                <div>
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">⚽ Coverage</p>
                  <p className="text-base text-gray-900 dark:text-white">Most matches</p>
                </div>
                
                <div className="pt-3 border-t border-gray-200 dark:border-gray-800">
                  <p className="text-xs text-gray-500 dark:text-gray-500">
                    Second division of US soccer. Teams can also compete in US Open Cup.
                  </p>
                </div>
              </div>
            </div>

            {/* USMNT */}
            <div className="rounded-lg border-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-6 hover:border-soccer-green-600 transition">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">USMNT</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Men's National Team</p>
                </div>
                <span className="text-2xl">🇺🇸</span>
              </div>
              
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">📺 Where to Watch</p>
                  <p className="text-base text-gray-900 dark:text-white">Fox, FS1, FS2, Universo</p>
                </div>
                
                <div>
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">💰 Cost</p>
                  <p className="text-base text-gray-900 dark:text-white">Free (broadcast TV/cable)</p>
                </div>
                
                <div>
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">⚽ Coverage</p>
                  <p className="text-base text-gray-900 dark:text-white">Most matches nationally broadcast</p>
                </div>
                
                <div className="pt-3 border-t border-gray-200 dark:border-gray-800">
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">🏆 Major Tournaments:</p>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    <li>• World Cup 2026 (USA/Canada/Mexico)</li>
                    <li>• Copa América (Fox networks)</li>
                    <li>• Gold Cup (Fox networks)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* USWNT */}
            <div className="rounded-lg border-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-6 hover:border-soccer-green-600 transition">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">USWNT</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Women's National Team</p>
                </div>
                <span className="text-2xl">🇺🇸</span>
              </div>
              
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">📺 Where to Watch</p>
                  <p className="text-base text-gray-900 dark:text-white">Fox, FS1, FS2, ESPN</p>
                </div>
                
                <div>
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">💰 Cost</p>
                  <p className="text-base text-gray-900 dark:text-white">Free (broadcast TV/cable)</p>
                </div>
                
                <div>
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">⚽ Coverage</p>
                  <p className="text-base text-gray-900 dark:text-white">Most matches nationally broadcast</p>
                </div>
                
                <div className="pt-3 border-t border-gray-200 dark:border-gray-800">
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">🏆 Major Tournaments:</p>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    <li>• Women's World Cup 2027 (Brazil)</li>
                    <li>• Olympics 2028 (Los Angeles)</li>
                    <li>• SheBelieves Cup (varies)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* European Tournaments Section */}
      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              European Tournaments
            </h2>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
              Cup competitions and international tournaments
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Champions League */}
            <div className="rounded-lg border-2 border-gray-200 dark:border-gray-800 p-6 hover:border-soccer-green-600 transition">
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">UEFA Champions League</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Europe's Premier Club Competition</p>
              </div>
              
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">📺 Where to Watch</p>
                  <p className="text-base text-gray-900 dark:text-white">Paramount+, CBS</p>
                </div>
                
                <div>
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">💰 Cost</p>
                  <p className="text-base text-gray-900 dark:text-white">$7.99/month</p>
                </div>
                
                <div className="pt-3 border-t border-gray-200 dark:border-gray-800">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    All matches on Paramount+; biggest matches on CBS. Rights through 2029-30.
                  </p>
                </div>
              </div>
            </div>

            {/* Europa League */}
            <div className="rounded-lg border-2 border-gray-200 dark:border-gray-800 p-6 hover:border-soccer-green-600 transition">
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">UEFA Europa League</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">European Competition</p>
              </div>
              
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">📺 Where to Watch</p>
                  <p className="text-base text-gray-900 dark:text-white">Paramount+</p>
                </div>
                
                <div>
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">💰 Cost</p>
                  <p className="text-base text-gray-900 dark:text-white">$7.99/month</p>
                </div>
                
                <div className="pt-3 border-t border-gray-200 dark:border-gray-800">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    All matches available. Rights through 2029-30.
                  </p>
                </div>
              </div>
            </div>

            {/* Conference League */}
            <div className="rounded-lg border-2 border-gray-200 dark:border-gray-800 p-6 hover:border-soccer-green-600 transition">
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">UEFA Conference League</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Third-Tier European Competition</p>
              </div>
              
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">📺 Where to Watch</p>
                  <p className="text-base text-gray-900 dark:text-white">Paramount+</p>
                </div>
                
                <div>
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">💰 Cost</p>
                  <p className="text-base text-gray-900 dark:text-white">$7.99/month</p>
                </div>
                
                <div className="pt-3 border-t border-gray-200 dark:border-gray-800">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    All matches available. Rights through 2029-30.
                  </p>
                </div>
              </div>
            </div>

            {/* FA Cup */}
            <div className="rounded-lg border-2 border-gray-200 dark:border-gray-800 p-6 hover:border-soccer-green-600 transition">
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">FA Cup</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">England's Historic Cup</p>
              </div>
              
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">📺 Where to Watch</p>
                  <p className="text-base text-gray-900 dark:text-white">ESPN+</p>
                </div>
                
                <div>
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">💰 Cost</p>
                  <p className="text-base text-gray-900 dark:text-white">$11.99/month</p>
                </div>
                
                <div className="pt-3 border-t border-gray-200 dark:border-gray-800">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    79 matches per season from First Round through Final. Rights through 2027-28.
                  </p>
                </div>
              </div>
            </div>

            {/* Carabao Cup */}
            <div className="rounded-lg border-2 border-gray-200 dark:border-gray-800 p-6 hover:border-soccer-green-600 transition">
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Carabao Cup</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">English League Cup</p>
              </div>
              
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">📺 Where to Watch</p>
                  <p className="text-base text-gray-900 dark:text-white">Paramount+</p>
                </div>
                
                <div>
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">💰 Cost</p>
                  <p className="text-base text-gray-900 dark:text-white">$7.99/month</p>
                </div>
                
                <div className="pt-3 border-t border-gray-200 dark:border-gray-800">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    All matches available. Rights through 2027-28.
                  </p>
                </div>
              </div>
            </div>

            {/* US Open Cup */}
            <div className="rounded-lg border-2 border-gray-200 dark:border-gray-800 p-6 hover:border-soccer-green-600 transition">
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">US Open Cup</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">America's Oldest Competition</p>
              </div>
              
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">📺 Where to Watch</p>
                  <p className="text-base text-gray-900 dark:text-white">ESPN+, local broadcasts</p>
                </div>
                
                <div>
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">💰 Cost</p>
                  <p className="text-base text-gray-900 dark:text-white">$11.99/month</p>
                </div>
                
                <div className="pt-3 border-t border-gray-200 dark:border-gray-800">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Select rounds broadcast nationally on ESPN+.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Streaming Services Quick Reference */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              Streaming Services
            </h2>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
              Quick reference guide to what each service offers
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Peacock */}
            <div className="rounded-lg bg-white dark:bg-gray-950 p-6 border-2 border-gray-200 dark:border-gray-800">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Peacock</h3>
              <p className="text-lg text-soccer-green-600 dark:text-soccer-green-400 font-semibold mb-4">$7.99/month</p>
              
              <div className="space-y-2 mb-4">
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">⚽ Soccer Coverage:</p>
                <ul className="text-base text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Premier League (all 380 matches)</li>
                </ul>
              </div>
              
              <p className="text-sm text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800 pt-4">
                <strong>Who should subscribe:</strong> Premier League fans—this is essential if you follow any EPL team.
              </p>
            </div>

            {/* ESPN+ */}
            <div className="rounded-lg bg-white dark:bg-gray-950 p-6 border-2 border-gray-200 dark:border-gray-800">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">ESPN+</h3>
              <p className="text-lg text-soccer-green-600 dark:text-soccer-green-400 font-semibold mb-4">$11.99/month</p>
              
              <div className="space-y-2 mb-4">
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">⚽ Soccer Coverage:</p>
                <ul className="text-base text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• La Liga (all matches)</li>
                  <li>• Bundesliga (all matches)</li>
                  <li>• FA Cup</li>
                  <li>• USL Championship</li>
                  <li>• US Open Cup (select matches)</li>
                </ul>
              </div>
              
              <p className="text-sm text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800 pt-4">
                <strong>Who should subscribe:</strong> Best value for multiple leagues. Essential for La Liga and Bundesliga fans.
              </p>
            </div>

            {/* Paramount+ */}
            <div className="rounded-lg bg-white dark:bg-gray-950 p-6 border-2 border-gray-200 dark:border-gray-800">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Paramount+</h3>
              <p className="text-lg text-soccer-green-600 dark:text-soccer-green-400 font-semibold mb-4">$7.99/month</p>
              
              <div className="space-y-2 mb-4">
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">⚽ Soccer Coverage:</p>
                <ul className="text-base text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Champions League (all matches)</li>
                  <li>• Europa League</li>
                  <li>• Conference League</li>
                  <li>• Serie A (most matches)</li>
                  <li>• Carabao Cup</li>
                  <li>• NWSL (select matches)</li>
                </ul>
              </div>
              
              <p className="text-sm text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800 pt-4">
                <strong>Who should subscribe:</strong> Champions League is the main draw. Great value for European competition fans.
              </p>
            </div>

            {/* Apple TV+ MLS */}
            <div className="rounded-lg bg-white dark:bg-gray-950 p-6 border-2 border-gray-200 dark:border-gray-800">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Apple TV+ (MLS Season Pass)</h3>
              <p className="text-lg text-soccer-green-600 dark:text-soccer-green-400 font-semibold mb-4">$14.99/month</p>
              
              <div className="space-y-2 mb-4">
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">⚽ Soccer Coverage:</p>
                <ul className="text-base text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• MLS (all matches)</li>
                  <li>• Leagues Cup</li>
                  <li>• MLS Cup Playoffs</li>
                </ul>
              </div>
              
              <p className="text-sm text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800 pt-4">
                <strong>Who should subscribe:</strong> MLS fans only. Complete coverage of American soccer. Season pass option available.
              </p>
            </div>

            {/* Prime Video */}
            <div className="rounded-lg bg-white dark:bg-gray-950 p-6 border-2 border-gray-200 dark:border-gray-800">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Prime Video</h3>
              <p className="text-lg text-soccer-green-600 dark:text-soccer-green-400 font-semibold mb-4">$14.99/month (Prime membership)</p>
              
              <div className="space-y-2 mb-4">
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">⚽ Soccer Coverage:</p>
                <ul className="text-base text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• NWSL (most matches)</li>
                </ul>
              </div>
              
              <p className="text-sm text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800 pt-4">
                <strong>Who should subscribe:</strong> NWSL fans. Prime membership includes other benefits (shipping, video, music).
              </p>
            </div>

            {/* fuboTV */}
            <div className="rounded-lg bg-white dark:bg-gray-950 p-6 border-2 border-gray-200 dark:border-gray-800">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">fuboTV</h3>
              <p className="text-lg text-soccer-green-600 dark:text-soccer-green-400 font-semibold mb-4">$79.99/month</p>
              
              <div className="space-y-2 mb-4">
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">⚽ Soccer Coverage:</p>
                <ul className="text-base text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Includes beIN SPORTS (Ligue 1)</li>
                  <li>• Plus many cable sports channels</li>
                </ul>
              </div>
              
              <p className="text-sm text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800 pt-4">
                <strong>Who should subscribe:</strong> Cable replacement for sports fans. Best for those wanting multiple sports.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer Section */}
      <section className="py-12 bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              <strong>Disclaimer:</strong> Broadcast information changes frequently. While we strive to keep this page current, always verify match times and broadcast information with official league and broadcaster sources. Pricing and availability subject to change. We are not affiliated with any broadcaster, league, or streaming service mentioned on this page.
            </p>
            <p className="mt-4 text-xs text-gray-400 dark:text-gray-500">
              Last updated: October 17, 2025
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
