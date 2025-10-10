'use client'

import { useSearchParams } from 'next/navigation'
import { useState, Suspense } from 'react'

const scenarios = {
  'accordion': {
    title: 'Accordion Animation',
    subtitle: 'Shape Breathing',
    chapter: 'Chapter 2: Shapes and Setups',
    description: 'Watch how a 4-2-3-1 formation expands in possession and compresses out of possession.',
    explanation: 'This animation demonstrates the "breathing" concept—how teams expand to create passing lanes when they have the ball, then compress to deny space when defending.'
  },
  'offside-basics': {
    title: 'Offside Basics',
    subtitle: 'The Fundamental Rule',
    chapter: 'Chapter 4: Offside',
    description: 'Learn the fundamental offside rule through visual demonstration.',
    explanation: 'The attacker must have at least two defenders (usually including the goalkeeper) between them and the goal line when the ball is played forward.'
  },
  'inverted-winger': {
    title: 'Inverted Winger Movement',
    subtitle: 'Cutting Inside',
    chapter: 'Chapter 3: Who Does What',
    description: 'See how inverted wingers cut inside to shoot or create.',
    explanation: 'An inverted winger plays on the opposite flank from their strong foot, allowing them to cut inside and shoot or pass with their preferred foot.'
  },
  'building-from-back': {
    title: 'Building from the Back',
    subtitle: 'Patient Possession',
    chapter: 'Chapter 2: Shapes and Setups',
    description: 'How teams construct attacks starting from the goalkeeper.',
    explanation: 'Modern teams build possession from the back, with center-backs splitting wide and midfielders dropping to receive the ball.'
  },
  'false-nine': {
    title: 'False 9 Movement',
    subtitle: 'The Dropping Striker',
    chapter: 'Chapter 3: Who Does What',
    description: 'How a false 9 drops deep to create space and confusion.',
    explanation: 'Instead of staying high like a traditional striker, a false 9 drops into midfield, pulling center-backs out of position and creating space for wingers to attack.'
  },
  'coordinated-press': {
    title: 'Coordinated Press',
    subtitle: 'Team Defending',
    chapter: 'Chapter 3: Who Does What',
    description: 'How teams press together to win the ball high up the pitch.',
    explanation: 'Effective pressing requires coordination—as one player pressures the ball, teammates cut off passing lanes and compress space.'
  }
}

function TacticsContent() {
  const searchParams = useSearchParams()
  const scenarioParam = searchParams.get('scenario')
  
  const [selectedScenario, setSelectedScenario] = useState(
    scenarioParam && scenarios[scenarioParam as keyof typeof scenarios] 
      ? scenarioParam 
      : 'accordion'
  )

  const currentScenario = scenarios[selectedScenario as keyof typeof scenarios]

  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Interactive Tactical Animations
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Control, pause, and study soccer tactics at your own pace
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-4">
        {/* Sidebar - Scenario List */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 rounded-lg bg-white p-6 shadow-md dark:bg-gray-950">
            <h2 className="mb-4 text-xl font-bold">All Scenarios</h2>
            <div className="space-y-2">
              {Object.entries(scenarios).map(([key, scenario]) => (
                <button
                  key={key}
                  onClick={() => setSelectedScenario(key)}
                  className={`w-full rounded-lg px-4 py-3 text-left transition ${
                    selectedScenario === key
                      ? 'bg-soccer-green-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-gray-800'
                  }`}
                >
                  <div className="text-sm font-semibold">{scenario.title}</div>
                  <div className="mt-1 text-xs opacity-75">{scenario.chapter}</div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content - Animation Tool */}
        <div className="lg:col-span-3">
          {/* Animation Container */}
          <div className="mb-6 overflow-hidden rounded-lg bg-white shadow-lg dark:bg-gray-950">
            <div className="bg-soccer-green-600 px-6 py-4 text-white">
              <h2 className="text-2xl font-bold">{currentScenario.title}</h2>
              <p className="mt-1 text-sm text-soccer-green-100">{currentScenario.subtitle}</p>
              <p className="mt-1 text-xs text-soccer-green-200">{currentScenario.chapter}</p>
            </div>
            
            {/* Placeholder for actual animation tool */}
            <div className="flex min-h-[500px] items-center justify-center bg-gradient-to-br from-soccer-green-50 to-white p-8 dark:from-gray-900 dark:to-gray-950">
              <div className="text-center">
                <div className="mb-6 text-8xl">⚽</div>
                <p className="mb-2 text-xl font-semibold text-gray-700 dark:text-gray-300">
                  Your Interactive Tool Goes Here
                </p>
                <p className="mb-6 text-gray-600 dark:text-gray-400">
                  This is where your tactical animation component will be embedded
                </p>
                <div className="flex justify-center gap-4">
                  <button className="rounded-lg bg-soccer-green-600 px-6 py-2 font-semibold text-white transition hover:bg-soccer-green-700">
                    Play
                  </button>
                  <button className="rounded-lg bg-gray-200 px-6 py-2 font-semibold text-gray-700 transition hover:bg-gray-300 dark:bg-gray-800 dark:text-gray-300">
                    Pause
                  </button>
                  <button className="rounded-lg bg-gray-200 px-6 py-2 font-semibold text-gray-700 transition hover:bg-gray-300 dark:bg-gray-800 dark:text-gray-300">
                    Reset
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Context Panel */}
          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-950">
            <h3 className="mb-3 text-xl font-bold">What You're Watching</h3>
            <p className="mb-4 text-gray-700 dark:text-gray-300">{currentScenario.description}</p>
            
            <h4 className="mb-2 font-semibold text-gray-900 dark:text-white">Explanation:</h4>
            <p className="mb-4 text-gray-600 dark:text-gray-400">{currentScenario.explanation}</p>
            
            <div className="border-t pt-4">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <span className="font-semibold">Related Chapter:</span> {currentScenario.chapter}
              </p>
              <a href="/book" className="mt-2 inline-block text-sm font-semibold text-soccer-green-600 hover:text-soccer-green-700">
                Learn more in the book →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function TacticsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Suspense fallback={<div className="p-12 text-center">Loading...</div>}>
        <TacticsContent />
      </Suspense>
    </div>
  )
}
