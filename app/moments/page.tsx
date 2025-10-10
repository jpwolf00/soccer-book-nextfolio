'use client'

export default function MomentsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Watch the Moments
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            All the historic goals, controversial calls, and iconic atmospheres referenced in the book—curated, embedded, and kept current.
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            These videos bring the stories to life. Each moment is accompanied by context explaining what you're watching and why it matters.
          </p>
        </div>

        {/* Chapter 1: The Rules of the Game */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 pb-3 border-b-2 border-soccer-green-600">
            Chapter 1: The Rules of the Game
          </h2>

          {/* Aguero Goal */}
          <div className="mb-10 rounded-lg bg-white p-6 shadow-md dark:bg-gray-950">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
              Sergio Agüero's Title-Winning Goal (2012)
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Manchester City vs. QPR • Premier League Final Day • May 13, 2012
            </p>
            
            <div className="aspect-video mb-4">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/81bv_gF4j5k"
                title="Aguero 93:20 Goal"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>

            <div className="space-y-3">
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold">What you're watching:</span> Manchester City needed to win to claim their first title in 44 years. They were losing 2-1 entering stoppage time. Two goals in the final minutes—including Agüero's strike at 93 minutes and 20 seconds—secured the championship on goal difference.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold">Why it matters:</span> Perfect example of stoppage time drama. The game didn't end at 90:00. "AGUEROOOO!!! I swear you'll never see anything like this ever again!" became one of the most iconic pieces of commentary in sports history.
              </p>
            </div>
          </div>

          {/* Zidane Headbutt */}
          <div className="mb-10 rounded-lg bg-white p-6 shadow-md dark:bg-gray-950">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
              Zinedine Zidane's Headbutt (2006 World Cup Final)
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              France vs. Italy • FIFA World Cup Final • July 9, 2006
            </p>
            
            <div className="aspect-video mb-4">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/zAjWCdDNXfM"
                title="Zidane Headbutt 2006"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>

            <div className="space-y-3">
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold">What you're watching:</span> Zidane's final professional match. In the 110th minute of extra time, after verbal provocation from Marco Materazzi, Zidane headbutted him in the chest. Straight red card. France lost on penalties.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold">Why it matters:</span> One flash of anger didn't just end Zidane's career—it handed the World Cup trophy to Italy. Shows how cards and player discipline can determine the biggest matches.
              </p>
            </div>
          </div>

          {/* Mario Götze */}
          <div className="mb-10 rounded-lg bg-white p-6 shadow-md dark:bg-gray-950">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
              Mario Götze's World Cup Winning Goal (2014)
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Germany vs. Argentina • FIFA World Cup Final • July 13, 2014
            </p>
            
            <div className="aspect-video mb-4">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/BxuGGVLu3fY"
                title="Gotze World Cup Final Goal"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>

            <div className="space-y-3">
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold">What you're watching:</span> Götze, brought on as a substitute in the 88th minute, scored in the 113th minute of extra time. Perfect chest control, then volleyed finish. Germany's 4th World Cup title.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold">Why it matters:</span> The ultimate "super-sub" who etched his name in history. Shows the impact substitutions can have—why managers save changes for crucial moments.
              </p>
            </div>
          </div>
        </section>

        {/* Chapter 9-10: Fan Culture */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 pb-3 border-b-2 border-soccer-green-600">
            Chapters 9-10: Why Fans Are the Way They Are
          </h2>

          {/* You'll Never Walk Alone */}
          <div className="mb-10 rounded-lg bg-white p-6 shadow-md dark:bg-gray-950">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
              "You'll Never Walk Alone" at Anfield
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Liverpool vs. Barcelona • Champions League Semi-Final • May 7, 2019
            </p>
            
            <div className="aspect-video mb-4">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/KbiO9HAUaUg"
                title="You'll Never Walk Alone Anfield"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>

            <div className="space-y-3">
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold">What you're watching:</span> Liverpool's anthem, sung before every home match. Entire stadium, scarves raised. Originally from a 1945 Broadway musical, it became soccer's most famous song.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold">Why it matters:</span> Example of soccer's unique musical culture. This night—Liverpool's 4-0 comeback against Barcelona after losing the first leg 3-0—produced one of the loudest Anfield atmospheres ever recorded. The sound creates tangible home-field advantage.
              </p>
            </div>
          </div>

          {/* Iceland Viking Clap */}
          <div className="mb-10 rounded-lg bg-white p-6 shadow-md dark:bg-gray-950">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
              Iceland Viking Clap (Euro 2016)
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Iceland vs. England • Euro 2016 Round of 16 • June 27, 2016
            </p>
            
            <div className="aspect-video mb-4">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/JPVIgshtOag"
                title="Iceland Viking Clap"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>

            <div className="space-y-3">
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold">What you're watching:</span> Iceland's supporters created a thunderous synchronized clapping ritual—two beats of silence followed by a boom. A nation of 330,000 people created one of the tournament's most memorable atmospheres.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold">Why it matters:</span> Shows how organized supporters create atmosphere. Iceland defeated England 2-1 in one of Euro 2016's biggest upsets. Their 10% of the country traveled to France—imagine if 33 million Americans flew to a World Cup.
              </p>
            </div>
          </div>
        </section>

        {/* Chapter 11: U.S. Soccer Scene */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 pb-3 border-b-2 border-soccer-green-600">
            Chapter 11: The U.S. Soccer Scene
          </h2>

          {/* Brandi Chastain 1999 */}
          <div className="mb-10 rounded-lg bg-white p-6 shadow-md dark:bg-gray-950">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
              Brandi Chastain's 1999 World Cup Final
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              USA vs. China • FIFA Women's World Cup Final • July 10, 1999
            </p>
            
            <div className="aspect-video mb-4">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/1lDBrVqQ2g0"
                title="Brandi Chastain 1999"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>

            <div className="space-y-3">
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold">What you're watching:</span> The Rose Bowl, 90,000+ attendance, penalty shootout. Chastain scored the winning penalty, then celebrated by removing her jersey—an iconic sports image that defined a movement.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold">Why it matters:</span> Turned women's soccer into mainstream American culture. The USWNT has since won four World Cups and four Olympic golds—no other nation comes close to their dominance.
              </p>
            </div>
          </div>

          {/* Landon Donovan vs Algeria */}
          <div className="mb-10 rounded-lg bg-white p-6 shadow-md dark:bg-gray-950">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
              Landon Donovan vs. Algeria (2010)
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              USA vs. Algeria • FIFA World Cup Group Stage • June 23, 2010
            </p>
            
            <div className="aspect-video mb-4">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/ALJu7YPMNBI"
                title="Landon Donovan Algeria Goal"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>

            <div className="space-y-3">
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold">What you're watching:</span> USA needed to win to advance from the group. Donovan scored in the 91st minute of stoppage time. "Go, go, USA!" became instant iconic commentary.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold">Why it matters:</span> A television moment so electric it united living rooms across the country. Defining moment for American soccer fandom—the goal that made millions of casual viewers into actual fans.
              </p>
            </div>
          </div>

          {/* USMNT vs England 2022 */}
          <div className="mb-10 rounded-lg bg-white p-6 shadow-md dark:bg-gray-950">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
              USMNT vs. England (2022 World Cup)
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              USA vs. England • FIFA World Cup Group Stage • November 25, 2022
            </p>
            
            <div className="aspect-video mb-4">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/PN6RweTE-4w"
                title="USA vs England 2022"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>

            <div className="space-y-3">
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold">What you're watching:</span> The youngest USMNT team in decades played England to a 0-0 draw. USA out-possessed England and created better chances. Christian Pulisic, Weston McKennie, and Tyler Adams showed no fear against elite opposition.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold">Why it matters:</span> The new generation of American players competing with swagger instead of fear. Restored credibility to the program after missing 2018's tournament. Shows American soccer's upward trajectory.
              </p>
            </div>
          </div>
        </section>

        {/* Footer Note */}
        <div className="mt-12 rounded-lg bg-soccer-green-50 p-6 dark:bg-gray-800">
          <p className="text-sm text-gray-700 dark:text-gray-300">
            <span className="font-semibold">Note:</span> Videos are checked quarterly and updated if links break. All videos are embedded from official sources (FIFA, UEFA, Premier League, MLS, etc.) to ensure quality and permanence. Last checked: October 2025
          </p>
        </div>
      </div>
    </div>
  )
}
