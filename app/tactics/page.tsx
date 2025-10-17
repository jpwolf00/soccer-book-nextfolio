'use client'

import { useSearchParams } from 'next/navigation'
import { useState, Suspense } from 'react'

const scenarios = {
  // Chapter 2: Shapes and Setups
  'accordionshape': {
    title: 'Accordion Animation',
    subtitle: 'Shape Breathing',
    chapter: 'Chapter 2: Shapes and Setups',
    description: 'Watch how a team shape transforms from compact defensive to spread attacking, then compresses back on turnover.',
    explanation: 'This animation demonstrates the "breathing" concept—how teams expand to create passing lanes when they have the ball, then compress to deny space when defending. Same 11 players, two different shapes.'
  },
  'overloadcutback': {
    title: 'Overload to Cutback Goal',
    subtitle: 'Most Common Goal Pattern',
    chapter: 'Chapter 2: Shapes and Setups',
    description: 'Team overloads left side, switches to isolated right, delivers cutback cross for easy goal.',
    explanation: 'The most common goal pattern in modern soccer: overload one side to draw defenders, switch play to the weak side, then deliver a low cutback cross to an unmarked runner. The defense gets pulled out of position and can\'t recover in time.'
  },
  
  // Chapter 3: Who Does What
  'thirdmanrun': {
    title: 'Third-Man Run',
    subtitle: 'Late Arrival',
    chapter: 'Chapter 3: Who Does What',
    description: 'A→B pass draws defenders, C arrives late unmarked into vacated space.',
    explanation: 'The "third man" creates a numerical advantage by arriving late. Player A passes to B, defenders shift to cover B, then Player C runs into the space they just vacated. This late run is harder to track and often goes unmarked.'
  },
  'invertedwinger': {
    title: 'Inverted Winger',
    subtitle: 'Cutting Inside',
    chapter: 'Chapter 3: Who Does What',
    description: 'Right-footed player on left wing cuts inside onto stronger foot to create shooting angle.',
    explanation: 'An inverted winger plays on the opposite flank from their strong foot (right-footed on left wing). This allows them to cut inside and shoot or pass with their preferred foot, creating dangerous angles.'
  },
  'targetvsrunner': {
    title: 'Target Man vs Channel Runner',
    subtitle: 'Two Striker Styles',
    chapter: 'Chapter 3: Who Does What',
    description: 'Split-screen comparison: target man holding up play vs. channel runner sprinting behind defense.',
    explanation: 'Two contrasting striker styles. The target man uses physical strength to hold the ball and bring teammates into play. The channel runner uses pace to sprint behind defenders and stretch the defense vertically.'
  },
  'false9': {
    title: 'False 9 Movement',
    subtitle: 'Dropping Deep',
    chapter: 'Chapter 3: Who Does What',
    description: 'False 9 drops deep, center-backs follow, space opens behind for wingers to exploit.',
    explanation: 'A false 9 is a striker who drops into midfield instead of staying up front. This creates a dilemma: if center-backs follow, they leave space behind for wingers. If they hold position, the false 9 is free in midfield.'
  },
  'coordinatedpress': {
    title: 'Coordinated Press',
    subtitle: 'Simultaneous Pressure',
    chapter: 'Chapter 3: Who Does What',
    description: 'Six players closing passing lanes simultaneously on trigger—heavy touch activates the swarm.',
    explanation: 'A coordinated press requires all players to move in unison when triggered. Here, a heavy touch signals six players to converge simultaneously, blocking every passing lane and trapping the opponent.'
  },
  
  // Chapter 4: Offside
  'onsidebeatstrap': {
    title: 'Beats the Trap',
    subtitle: 'Perfect Timing',
    chapter: 'Chapter 4: Offside',
    description: 'Attacker times run perfectly to stay onside as the defensive line steps up.',
    explanation: 'The striker holds position while the defense steps up, then times the run perfectly to be level with defenders when the ball is played. Perfect timing beats the offside trap.'
  },
  'caughtoffside': {
    title: 'Caught by the Trap',
    subtitle: 'Offside',
    chapter: 'Chapter 4: Offside',
    description: 'Striker runs too early and is caught offside when the ball is played.',
    explanation: 'The attacker runs too early and is ahead of the defensive line when the pass is made. Poor timing results in an offside call—the trap works.'
  },
  'timedrun': {
    title: 'Timed Run',
    subtitle: 'Beating Offside',
    chapter: 'Chapter 4: Offside',
    description: 'Striker times their run perfectly—hesitates while defender commits, then explodes forward.',
    explanation: 'Timing is everything. The striker hesitates as the defender pushes up, then makes an explosive run at the moment of the pass. Run too early and you\'re offside.'
  },
  
  // Chapter 5: Reading a Match
  'transitions': {
    title: 'Transitions',
    subtitle: 'The Five-Second Window',
    chapter: 'Chapter 5: Reading a Match',
    description: 'Team wins ball and has 5-second window to exploit disorganized defense.',
    explanation: 'When possession changes, there\'s a brief window where the defense is disorganized. Quick teams exploit this with rapid passes forward before the opposition can recover their shape. Window closes fast—defenders recover in about 5 seconds.'
  },
  'pressingtrigger': {
    title: 'Pressing Trigger',
    subtitle: 'Heavy Touch Activation',
    chapter: 'Chapter 5: Reading a Match',
    description: 'Heavy touch triggers six-player swarm—identifying the moment that activates the press.',
    explanation: 'Pressing teams watch for specific triggers: a heavy touch, a backwards pass, or a player receiving with their back to goal. When the trigger occurs, all six nearby players sprint to close down space simultaneously.'
  }
}

// Group scenarios by chapter for sidebar
const scenariosByChapter = {
  'Chapter 2: Shapes and Setups': ['accordionshape', 'overloadcutback'],
  'Chapter 3: Who Does What': ['thirdmanrun', 'invertedwinger', 'targetvsrunner', 'false9', 'coordinatedpress'],
  'Chapter 4: Offside': ['onsidebeatstrap', 'caughtoffside', 'timedrun'],
  'Chapter 5: Reading a Match': ['transitions', 'pressingtrigger']
}

function TacticsContent() {
  const searchParams = useSearchParams()
  const scenarioParam = searchParams.get('scenario')
  
  const [selectedScenario, setSelectedScenario] = useState(
    scenarioParam && scenarios[scenarioParam as keyof typeof scenarios] 
      ? scenarioParam 
      : 'accordionshape'
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
            <div className="space-y-4">
              {Object.entries(scenariosByChapter).map(([chapter, scenarioKeys]) => (
                <div key={chapter}>
                  <h3 className="mb-2 text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                    {chapter}
                  </h3>
                  <div className="space-y-2">
                    {scenarioKeys.map((key) => {
                      const scenario = scenarios[key as keyof typeof scenarios]
                      return (
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
                          <div className="mt-1 text-xs opacity-75">{scenario.subtitle}</div>
                        </button>
                      )
                    })}
                  </div>
                </div>
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
            
            {/* Embedded Interactive Tool */}
            <div className="h-[600px] w-full bg-gray-900">
              <iframe 
                src={`/tactics/index.html?id=${selectedScenario}`}
                className="h-full w-full border-0"
                title="Interactive Soccer Tactics Tool"
                key={selectedScenario}
              />
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