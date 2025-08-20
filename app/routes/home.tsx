// app/routes/home.tsx (or your current route file)
import { Link } from "react-router";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  const title = "Dino Word Game | Run, Jump, and Guess Words like Wordle";
  const description =
    "Dino Word Game blends the classic Chrome dino runner with daily word puzzles. Jump cacti, collect letters, solve the word. Play free on desktop or mobile.";
  const url = "https://dinowordgame.com/";
  const image = "https://dinowordgame.com/og-image.jpg"; // replace when you have one

  return [
    { title },
    { name: "description", content: description },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { name: "robots", content: "index,follow,max-image-preview:large" },

    // Open Graph
    { property: "og:type", content: "website" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: url },
    { property: "og:image", content: image },

    // Twitter
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: image },

    // Canonical link via meta v2
    { tagName: "link", rel: "canonical", href: url },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  // You can wire this to ENV later if you want.
  return {
    message: context.VALUE_FROM_EXPRESS,
    nextUpdateHint: "Word puzzle mode arriving soon",
    launchWindow: "Fall 2027",
  };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const { nextUpdateHint, launchWindow } = loaderData;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: "Dino Word Game",
        url: "https://dinowordgame.com/",
        description:
          "Dino Word Game blends endless runner action with daily word puzzles. Jump obstacles, collect letters, and solve the daily word. Play free in your browser on desktop or mobile.",
        potentialAction: {
          "@type": "SearchAction",
          target: "https://dinowordgame.com/search?q={query}",
          "query-input": "required name=query",
        },
      },
      {
        "@type": "VideoGame",
        name: "Dino Word Game",
        url: "https://dinowordgame.com/",
        playMode: "SinglePlayer",
        applicationCategory: "Game",
        operatingSystem: "Web",
        genre: ["Endless Runner", "Word Game", "Puzzle"],
        description:
          "A mashup of Chrome's offline dino runner and Wordle style word guessing. Jump cacti, duck pterodactyls, grab letters, and solve the daily word with color feedback.",
        features: [
          "Daily word challenge",
          "Skill plus vocabulary",
          "Fast and lightweight",
          "Clean controls",
          "Share results",
          "Privacy friendly",
          "Practice mode",
          "Accessibility options",
          "Mobile and desktop play",
          "Offline runner",
          "Community sharing",
          "Speedrunning and challenges",
          "Learning and vocabulary gains",
          "Fair play and puzzle integrity",
          "Regional spelling support",
          "Color accessibility",
          "Streak building",
        ],
        modes: [
          "Endless Runner",
          "Word Puzzle",
          "Practice Mode",
          "Daily Challenge",
          "Hard Mode",
          "Fewest Guesses",
          "Time Attack",
          "Classroom and Family Play",
        ],
        accessibility: [
          "Readable UI",
          "Input options (keyboard, mouse, touch)",
          "High contrast palette",
          "Data light",
        ],
        educationalBenefits: [
          "Vocabulary building",
          "Phonics warmups",
          "Letter frequency practice",
          "Pattern recognition",
          "Streak strategy",
        ],
        deviceSupport: ["Mobile", "Desktop", "Offline play after first load"],
        community: [
          "Share results",
          "Compare streaks",
          "Invite friends",
          "Leaderboards (coming soon)",
        ],
        glossary: [
          "Starter word",
          "Elimination",
          "Pickups",
          "Hard mode",
          "Streak",
          "Seed",
        ],
        tips: [
          "Balanced openers",
          "Use pickups for new letters",
          "Lock guesses after feedback",
          "Watch obstacle rhythm",
          "Alternate vowel/consonant probes",
          "Reserve flex guess",
          "Practice jump rhythm",
          "Focus cues for fast play",
          "Short practice runs for mobile",
        ],
        curationPolicy: [
          "Core set for daily play",
          "Extended set for advanced practice",
          "Duplicate letter handling",
          "Regional spelling support",
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is Dino Word Game?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "It is a free browser game that mixes endless runner mechanics with a daily word puzzle. You jump, dodge, and collect letters to guess the hidden word.",
            },
          },
          {
            "@type": "Question",
            name: "Is it free to play?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. It plays instantly in your browser on desktop and mobile.",
            },
          },
          {
            "@type": "Question",
            name: "When is the word mode available?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The runner is first. Word mode follows soon after the initial launch.",
            },
          },
          {
            "@type": "Question",
            name: "Does it work offline?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. The runner works offline after your first load. The daily word syncs when you reconnect.",
            },
          },
          {
            "@type": "Question",
            name: "How do controls work?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Tap, click, or press space to jump. Use the down arrow to duck. Controls work on desktop and mobile.",
            },
          },
          {
            "@type": "Question",
            name: "What is hard mode?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Hard mode requires you to use all revealed hints in your next guess for strict logic and challenge.",
            },
          },
          {
            "@type": "Question",
            name: "Can I share my results?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Copy a clean text grid to share your win without spoilers. Leaderboards and events are planned.",
            },
          },
          {
            "@type": "Question",
            name: "Is there a practice mode?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Practice mode offers unlimited runs and random words for warmup and skill building.",
            },
          },
          {
            "@type": "Question",
            name: "Is it accessible?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. The UI is readable, supports keyboard, mouse, and touch, and offers high contrast options.",
            },
          },
          {
            "@type": "Question",
            name: "How does streak building work?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Keep a consistent routine, warm up, and solve the daily word to build your streak.",
            },
          },
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen bg-white text-zinc-900">
      {/* JSON-LD for rich results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Top notice, useful while the site sits */}
      <div className="w-full bg-emerald-600 text-white">
        <div className="mx-auto max-w-6xl px-4 py-2 text-center text-sm">
          {nextUpdateHint}. Planned window: {launchWindow}.
        </div>
      </div>

      {/* Hero */}
      <section className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-14 ">
        <div className="space-y-6">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Run like the Chrome dino. Guess words like Wordle. Do both in one
            game.
          </h1>
          <p className="text-lg text-zinc-700">
            Dino Word Game blends a fast endless runner with a satisfying daily
            word puzzle. Hop cacti. Duck pterodactyls. Grab letters. Lock in a
            guess and streak your way to a perfect run.
          </p>
          <ul className="list-disc space-y-2 pl-6 text-zinc-800">
            <li>Quick runs that feel great on mobile and desktop</li>
            <li>Daily word with color feedback for each guess</li>
            <li>Letter pickups affect your next guess in real time</li>
            <li>Shareable results and clean privacy</li>
          </ul>
          {/* Lightweight keyword line for SEO that still reads naturally */}
          <p className="sr-only">
            Dino Word Game is a free browser based endless runner and daily word
            game that you can play without downloads or signups.
          </p>
        </div>
      </section>

      {/* Feature grid */}
      <section className="mx-auto max-w-6xl px-4 pb-12">
        <h2 className="text-2xl font-bold">Why players love it</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              h: "Daily word challenge",
              p: "One fresh five letter word each day with clear color clues for each guess.",
            },
            {
              h: "Skill plus vocabulary",
              p: "Timing over obstacles gives you letters that power smarter guesses.",
            },
            {
              h: "Fast and lightweight",
              p: "Instant play in the browser with smooth inputs and low latency.",
            },
            {
              h: "Clean controls",
              p: "Jump and duck to stay alive. Tap, click, or press space and arrow keys.",
            },
            {
              h: "Share results",
              p: "Copy a clean text grid to share your win without spoilers.",
            },
            {
              h: "Privacy friendly",
              p: "No account required for casual play. Optional sync for streaks later.",
            },
          ].map((f) => (
            <article
              key={f.h}
              className="rounded-2xl border border-zinc-200 p-5 shadow-sm"
            >
              <h3 className="font-semibold">{f.h}</h3>
              <p className="mt-2 text-zinc-700">{f.p}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ===================== How to Play ===================== */}
      <section id="how-to-play" className="mx-auto max-w-6xl px-4 pb-12">
        <h2 className="text-2xl font-bold">How to play Dino Word Game</h2>
        <p className="mt-3 text-zinc-700">
          Dino Word Game is a free browser game that blends a classic dino
          runner with a daily word puzzle. Jump over cacti, duck pterodactyls,
          collect letters, and guess the hidden word with clear feedback similar
          to Wordle.
        </p>

        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          <article className="rounded-2xl border border-zinc-200 p-5 shadow-sm">
            <h3 className="font-semibold">Controls</h3>
            <p className="mt-2 text-zinc-700">
              Tap, click, or press space to jump. Use the down arrow to duck.
              Simple controls make the endless runner easy to learn and fun to
              master on desktop or mobile.
            </p>
          </article>
          <article className="rounded-2xl border border-zinc-200 p-5 shadow-sm">
            <h3 className="font-semibold">Letter pickups</h3>
            <p className="mt-2 text-zinc-700">
              Collect letters while you run. Your pickups shape smarter guesses
              for the next attempt in the word game.
            </p>
          </article>
          <article className="rounded-2xl border border-zinc-200 p-5 shadow-sm">
            <h3 className="font-semibold">Daily word mode</h3>
            <p className="mt-2 text-zinc-700">
              One shared five letter word per day. Color clues guide each guess.
              Come back daily to keep your streak alive.
            </p>
          </article>
        </div>

        {/* Screen reader helper for long tail terms */}
        <p className="sr-only">
          Learn how to play a dino runner word game online. Play the daily word
          challenge in your browser.
        </p>
      </section>

      {/* ===================== Features and Modes ===================== */}
      <section id="features" className="mx-auto max-w-6xl px-4 pb-12">
        <h2 className="text-2xl font-bold">Features and gameplay modes</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              h: "Endless Runner",
              p: "Fast Chrome style dino running with rising speed, clean hitboxes, and smooth jumps.",
            },
            {
              h: "Word Puzzle",
              p: "Guess a five letter word with color feedback. Use letter pickups to influence your next guess.",
            },
            {
              h: "Practice Mode",
              p: "Warm up with unlimited runs and random words. Perfect for quick mobile sessions.",
            },
            {
              h: "Daily Challenge",
              p: "One shared puzzle for everyone. Compare results with friends without spoilers.",
            },
            {
              h: "Lightweight and fast",
              p: "Instant play in the browser. No download. Works great on low bandwidth connections.",
            },
            {
              h: "Accessibility",
              p: "Keyboard, mouse, and touch control options. Clear contrast and readable UI.",
            },
          ].map((f) => (
            <article
              key={f.h}
              className="rounded-2xl border border-zinc-200 p-5 shadow-sm"
            >
              <h3 className="font-semibold">{f.h}</h3>
              <p className="mt-2 text-zinc-700">{f.p}</p>
            </article>
          ))}
        </div>
        <p className="mt-4 text-sm text-zinc-600">
          Keywords: play dino runner online, free word game, Wordle style
          puzzle, browser game, endless runner with words.
        </p>
      </section>

      {/* ===================== Why It Is Different ===================== */}
      <section id="why-different" className="mx-auto max-w-6xl px-4 pb-12">
        <h2 className="text-2xl font-bold">Why Dino Word Game is different</h2>
        <p className="mt-3 text-zinc-700">
          Most endless runners reward timing alone. Dino Word Game rewards
          timing and vocabulary. Good runs unlock better letters. Better letters
          drive smarter guesses. The result is a fresh loop that feels fast like
          the Chrome dino game and thoughtful like a daily word game.
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-zinc-800">
          <li>Skill meets strategy with real time letter pickups</li>
          <li>Color feedback on guesses that reads clearly on mobile</li>
          <li>
            Zero install, zero friction, instant play in any modern browser
          </li>
        </ul>
      </section>

      {/* ===================== Play Anywhere ===================== */}
      <section id="play-anywhere" className="mx-auto max-w-6xl px-4 pb-12">
        <h2 className="text-2xl font-bold">Play anywhere, any time</h2>
        <div className="mt-4 grid gap-6 md:grid-cols-3">
          <article className="rounded-2xl border border-zinc-200 p-5 shadow-sm">
            <h3 className="font-semibold">Mobile</h3>
            <p className="mt-2 text-zinc-700">
              Tap friendly inputs and stable 60 FPS where supported. Great for
              quick breaks.
            </p>
          </article>
          <article className="rounded-2xl border border-zinc-200 p-5 shadow-sm">
            <h3 className="font-semibold">Desktop</h3>
            <p className="mt-2 text-zinc-700">
              Keyboard controls for precise jumps. Clean visuals and low latency
              in the browser.
            </p>
          </article>
          <article className="rounded-2xl border border-zinc-200 p-5 shadow-sm">
            <h3 className="font-semibold">Offline runner</h3>
            <p className="mt-2 text-zinc-700">
              After the first load the runner can work offline. The daily word
              syncs when you reconnect.
            </p>
          </article>
        </div>
        <p className="mt-4 text-sm text-zinc-600">
          Keywords: mobile dino runner game, play free word game online, no
          download browser game.
        </p>
      </section>

      {/* ===================== Community and Sharing ===================== */}
      <section id="community" className="mx-auto max-w-6xl px-4 pb-12">
        <h2 className="text-2xl font-bold">Community and sharing</h2>
        <p className="mt-3 text-zinc-700">
          Share your results with a clean text grid. Compare streaks. Invite
          friends to race the same daily word and the same obstacle pattern.
          Sign up for updates to hear about leaderboards and events.
        </p>
        <p className="sr-only">
          Share dino word game results, daily challenge, multiplayer word runner
          coming soon.
        </p>
      </section>

      {/* ===================== Strategy and Tips ===================== */}
      <section id="strategy-tips" className="mx-auto max-w-6xl px-4 pb-12">
        <h2 className="text-2xl font-bold">
          Strategy and tips for word game enthusiasts
        </h2>
        <p className="mt-3 text-zinc-700">
          Improve both running and guessing with simple habits. Open with common
          vowels, then pivot to high value consonants. Use letter frequency to
          prune options while your dino sets up safe jumps. Treat each run like
          a timed puzzle.
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-zinc-800">
          <li>
            Start with balanced openers that include A, E, I or O plus common
            consonants
          </li>
          <li>
            Use pickups to test new letters rather than repeating known misses
          </li>
          <li>
            Lock guesses only after you gather enough information from color
            feedback
          </li>
          <li>
            Keep one eye on obstacle rhythm and one eye on letter coverage
          </li>
        </ul>
        <p className="sr-only">
          Word game strategy for dino runner hybrid with Wordle style feedback.
        </p>
      </section>

      {/* ===================== Letter Feedback Explained ===================== */}
      <section id="letter-feedback" className="mx-auto max-w-6xl px-4 pb-12">
        <h2 className="text-2xl font-bold">Letter feedback explained</h2>
        <p className="mt-3 text-zinc-700">
          Each guess returns clear color feedback similar to popular word games.
          Correct letter in the correct spot, correct letter in the wrong spot,
          and letters not in the word are marked distinctly for quick decisions.
        </p>
        <div className="mt-4 grid gap-6 md:grid-cols-3">
          <article className="rounded-2xl border border-zinc-200 p-5 shadow-sm">
            <h3 className="font-semibold">Hard mode options</h3>
            <p className="mt-2 text-zinc-700">
              Force known hints on future guesses to raise difficulty and reward
              precise play.
            </p>
          </article>
          <article className="rounded-2xl border border-zinc-200 p-5 shadow-sm">
            <h3 className="font-semibold">Duplicate letters</h3>
            <p className="mt-2 text-zinc-700">
              Feedback considers duplicates so you never overcount a letter by
              mistake.
            </p>
          </article>
          <article className="rounded-2xl border border-zinc-200 p-5 shadow-sm">
            <h3 className="font-semibold">Contrast friendly</h3>
            <p className="mt-2 text-zinc-700">
              Color choices are paired with icons and text so feedback stays
              readable.
            </p>
          </article>
        </div>
      </section>

      {/* ===================== Word Lists and Difficulty ===================== */}
      <section id="word-lists" className="mx-auto max-w-6xl px-4 pb-12">
        <h2 className="text-2xl font-bold">Word lists and difficulty</h2>
        <p className="mt-3 text-zinc-700">
          The core list focuses on common five letter words suited for fair
          daily play. Practice pools expand to include rarer words for advanced
          runs and speed training.
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-zinc-800">
          <li>Curated daily list for friendly but challenging puzzles</li>
          <li>
            Extended practice list for enthusiasts who enjoy tricky vocabulary
          </li>
          <li>Optional filters to avoid proper nouns and abbreviations</li>
          <li>Regional spelling support that keeps results consistent</li>
        </ul>
      </section>

      {/* ===================== Speedrunning and Challenges ===================== */}
      <section id="speedrunning" className="mx-auto max-w-6xl px-4 pb-12">
        <h2 className="text-2xl font-bold">
          Speedrunning and community challenges
        </h2>
        <p className="mt-3 text-zinc-700">
          Turn the dino runner into a timed word challenge. Set goals like
          fastest solve with minimal guesses, or longest obstacle streak before
          locking the final word. Perfect for competitive word game players.
        </p>
        <div className="mt-4 grid gap-6 md:grid-cols-3">
          <article className="rounded-2xl border border-zinc-200 p-5 shadow-sm">
            <h3 className="font-semibold">Time attack</h3>
            <p className="mt-2 text-zinc-700">
              Solve today’s word as fast as possible with clean inputs.
            </p>
          </article>
          <article className="rounded-2xl border border-zinc-200 p-5 shadow-sm">
            <h3 className="font-semibold">Fewest guesses</h3>
            <p className="mt-2 text-zinc-700">
              Collect just enough letters to commit to a confident solve.
            </p>
          </article>
          <article className="rounded-2xl border border-zinc-200 p-5 shadow-sm">
            <h3 className="font-semibold">Endless streak</h3>
            <p className="mt-2 text-zinc-700">
              Maintain a long run while preserving a perfect guess history.
            </p>
          </article>
        </div>
      </section>

      {/* ===================== Learning and Vocabulary Gains ===================== */}
      <section id="learning-benefits" className="mx-auto max-w-6xl px-4 pb-12">
        <h2 className="text-2xl font-bold">Learning and vocabulary gains</h2>
        <p className="mt-3 text-zinc-700">
          Quick runs double as micro study sessions. Repeated exposure to letter
          patterns builds intuition. Players report better starter words,
          stronger elimination logic, and faster recognition of word families.
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-zinc-800">
          <li>Practice common digraphs and trigrams during warmup runs</li>
          <li>Reinforce phonics patterns while keeping gameplay fun</li>
          <li>Use hard mode to drill constraint thinking under pressure</li>
        </ul>
      </section>

      {/* ===================== Accessibility and Privacy ===================== */}
      <section
        id="accessibility-privacy"
        className="mx-auto max-w-6xl px-4 pb-12"
      >
        <h2 className="text-2xl font-bold">Accessibility and privacy</h2>
        <p className="mt-3 text-zinc-700">
          The interface favors readable text, keyboard and touch input, and
          adjustable effects. Casual play works without an account. Local
          storage keeps basic preferences on your device.
        </p>
        <div className="mt-4 grid gap-6 md:grid-cols-3">
          <article className="rounded-2xl border border-zinc-200 p-5 shadow-sm">
            <h3 className="font-semibold">Readable UI</h3>
            <p className="mt-2 text-zinc-700">
              Clear fonts, strong contrast, and minimal clutter.
            </p>
          </article>
          <article className="rounded-2xl border border-zinc-200 p-5 shadow-sm">
            <h3 className="font-semibold">Input options</h3>
            <p className="mt-2 text-zinc-700">
              Space, arrows, tap, and hold gestures for consistent control.
            </p>
          </article>
          <article className="rounded-2xl border border-zinc-200 p-5 shadow-sm">
            <h3 className="font-semibold">Data light</h3>
            <p className="mt-2 text-zinc-700">
              No trackers required for core gameplay. Simple settings saved
              locally.
            </p>
          </article>
        </div>
      </section>

      {/* ===================== Performance and Technology ===================== */}
      <section id="performance-tech" className="mx-auto max-w-6xl px-4 pb-12">
        <h2 className="text-2xl font-bold">Performance and technology</h2>
        <p className="mt-3 text-zinc-700">
          Smooth performance matters in an endless runner and a quick guessing
          loop. The game targets stable frame times, responsive inputs, and fast
          loads for a crisp browser experience.
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-zinc-800">
          <li>Optimized input handling for jump timing and guess entry</li>
          <li>
            Lightweight assets and efficient rendering for mobile and desktop
          </li>
          <li>
            Graceful offline behavior for runner sessions after first load
          </li>
        </ul>
        <p className="mt-4 text-sm text-zinc-600">
          Keywords: browser word game performance, fast dino runner, low latency
          input, instant play web game.
        </p>
      </section>

      {/* ===================== Fair Play and Integrity ===================== */}
      <section id="fair-play" className="mx-auto max-w-6xl px-4 pb-12">
        <h2 className="text-2xl font-bold">Fair play and puzzle integrity</h2>
        <p className="mt-3 text-zinc-700">
          Daily words are curated for fairness and clarity. Results are
          shareable without spoilers. Anti cheat checks focus on preserving a
          fun, honest challenge that rewards real skill.
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-zinc-800">
          <li>Consistent rules for daily and practice modes</li>
          <li>Transparent feedback that explains success or failure</li>
          <li>Light protection that keeps leaderboards meaningful</li>
        </ul>
      </section>

      {/* ===================== Glossary for New Players ===================== */}
      <section id="glossary" className="mx-auto max-w-6xl px-4 pb-12">
        <h2 className="text-2xl font-bold">Glossary for new players</h2>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          {[
            {
              t: "Starter word",
              d: "A strong first guess that covers common vowels and consonants.",
            },
            {
              t: "Elimination",
              d: "Removing letters from consideration using feedback and pickups.",
            },
            {
              t: "Pickups",
              d: "Letters collected during the run that inform the next guess.",
            },
            {
              t: "Hard mode",
              d: "A setting that requires you to use known hints in the next guess.",
            },
            { t: "Streak", d: "Consecutive solved days without a miss." },
            {
              t: "Seed",
              d: "The pattern that defines obstacles and letter placement for a day.",
            },
          ].map((g) => (
            <article
              key={g.t}
              className="rounded-2xl border border-zinc-200 p-5 shadow-sm"
            >
              <h3 className="font-semibold">{g.t}</h3>
              <p className="mt-2 text-zinc-700">{g.d}</p>
            </article>
          ))}
        </div>
        <p className="mt-4 text-sm text-zinc-600">
          Keywords: word game glossary, Wordle style terms, endless runner
          vocabulary, dino word game definitions.
        </p>
      </section>

      {/* ===================== Starter Words and Openers ===================== */}
      <section id="starter-words" className="mx-auto max-w-6xl px-4 pb-12">
        <h2 className="text-2xl font-bold">Starter words and openers</h2>
        <p className="mt-3 text-zinc-700">
          Strong openers matter in a daily word puzzle. Use vowel rich starters
          to scan the solution space quickly, then rotate to consonant heavy
          probes to confirm likely patterns. Dino Word Game rewards steady
          elimination, smart letter coverage, and clean jump timing in the
          runner.
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-zinc-800">
          <li>
            Open with two vowels plus common consonants for broad coverage
          </li>
          <li>Follow with a probe that targets S, T, R, N, L or C</li>
          <li>
            Use letter pickups to test new symbols instead of repeating misses
          </li>
          <li>Save rare letters like J, Q, X, Z for late confirms</li>
        </ul>
        <p className="sr-only">
          Best starter words for a Wordle style word game with a dino runner
          twist.
        </p>
      </section>

      {/* ===================== Letter Frequency and Patterns ===================== */}
      <section id="letter-frequency" className="mx-auto max-w-6xl px-4 pb-12">
        <h2 className="text-2xl font-bold">
          Letter frequency and common patterns
        </h2>
        <p className="mt-3 text-zinc-700">
          Faster solves come from understanding letter frequency and five letter
          patterns. Look for digraphs like TH, SH, CH and blends such as STR or
          CR. When feedback locks a vowel position, sweep common endings to
          tighten your guess list.
        </p>
        <div className="mt-4 grid gap-6 md:grid-cols-3">
          <article className="rounded-2xl border border-zinc-200 p-5 shadow-sm">
            <h3 className="font-semibold">Frequent starters</h3>
            <p className="mt-2 text-zinc-700">
              ST, CR, TR, CL, PR, GR. Try them after a vowel scan.
            </p>
          </article>
          <article className="rounded-2xl border border-zinc-200 p-5 shadow-sm">
            <h3 className="font-semibold">Common endings</h3>
            <p className="mt-2 text-zinc-700">
              ER, AR, OR, LY, ED, ES. Rotate endings to narrow choices.
            </p>
          </article>
          <article className="rounded-2xl border border-zinc-200 p-5 shadow-sm">
            <h3 className="font-semibold">Vowel positions</h3>
            <p className="mt-2 text-zinc-700">
              Middle vowels appear often. Anchor them and explore neighbors.
            </p>
          </article>
        </div>
        <p className="mt-4 text-sm text-zinc-600">
          Keywords: letter frequency, five letter patterns, Wordle strategies,
          dino word game hints.
        </p>
      </section>

      {/* ===================== Word List Curation Policy ===================== */}
      <section id="curation-policy" className="mx-auto max-w-6xl px-4 pb-12">
        <h2 className="text-2xl font-bold">Word list curation policy</h2>
        <p className="mt-3 text-zinc-700">
          The daily list favors fair, common words that read well for casual and
          competitive players. Practice pools expand difficulty with rare
          entries for deeper training. Filters reduce abbreviations and proper
          nouns so feedback remains consistent.
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-zinc-800">
          <li>Core set for balanced daily play</li>
          <li>Extended set for advanced practice</li>
          <li>Duplicate letter handling for clear feedback</li>
          <li>Optional regional spelling support</li>
        </ul>
        <p className="sr-only">
          Curated daily word list for fair Wordle style gameplay in a runner
          hybrid.
        </p>
      </section>

      {/* ===================== Challenge Variants and House Rules ===================== */}
      <section id="challenge-variants" className="mx-auto max-w-6xl px-4 pb-12">
        <h2 className="text-2xl font-bold">
          Challenge variants and house rules
        </h2>
        <p className="mt-3 text-zinc-700">
          Add constraints to raise difficulty and keep runs fresh. Try hard mode
          requirements, minimum guess limits, or speed caps during the runner to
          test precision and vocabulary under pressure.
        </p>
        <div className="mt-4 grid gap-6 md:grid-cols-3">
          <article className="rounded-2xl border border-zinc-200 p-5 shadow-sm">
            <h3 className="font-semibold">Hard mode</h3>
            <p className="mt-2 text-zinc-700">
              Use all revealed hints in the next guess for strict logic.
            </p>
          </article>
          <article className="rounded-2xl border border-zinc-200 p-5 shadow-sm">
            <h3 className="font-semibold">Fewest guesses</h3>
            <p className="mt-2 text-zinc-700">
              Aim for a two or three guess solve with clean pickups.
            </p>
          </article>
          <article className="rounded-2xl border border-zinc-200 p-5 shadow-sm">
            <h3 className="font-semibold">Time attack</h3>
            <p className="mt-2 text-zinc-700">
              Race the clock while maintaining accurate elimination.
            </p>
          </article>
        </div>
      </section>

      {/* ===================== Pro Techniques for Enthusiasts ===================== */}
      <section id="pro-techniques" className="mx-auto max-w-6xl px-4 pb-12">
        <h2 className="text-2xl font-bold">Pro techniques for enthusiasts</h2>
        <p className="mt-3 text-zinc-700">
          Treat each run like a controlled experiment. Track confirmed slots,
          test hypotheses with safe pickups, and avoid tunnel vision. If a
          pattern emerges, pivot fast to the highest probability cluster.
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-zinc-800">
          <li>
            Alternate vowel probe and consonant probe for balanced coverage
          </li>
          <li>Reserve a flex guess to test two patterns at once</li>
          <li>Use runner rhythm to time guesses between obstacles</li>
          <li>
            Prefer letters with high positional entropy early in the solve
          </li>
        </ul>
      </section>

      {/* ===================== Input and Controls Guide ===================== */}
      <section id="controls-guide" className="mx-auto max-w-6xl px-4 pb-12">
        <h2 className="text-2xl font-bold">Input and controls guide</h2>
        <p className="mt-3 text-zinc-700">
          Consistent inputs lead to fewer mistakes. Jump timing, duck timing,
          and clean key entry reduce accidental hits and misfires. The interface
          supports keyboard, mouse, and touch with clear visual states.
        </p>
        <div className="mt-4 grid gap-6 md:grid-cols-3">
          <article className="rounded-2xl border border-zinc-200 p-5 shadow-sm">
            <h3 className="font-semibold">Jump rhythm</h3>
            <p className="mt-2 text-zinc-700">
              Practice short hops for low cacti and full jumps for wide gaps.
            </p>
          </article>
          <article className="rounded-2xl border border-zinc-200 p-5 shadow-sm">
            <h3 className="font-semibold">Guess entry</h3>
            <p className="mt-2 text-zinc-700">
              Confirm only when you have enough information to beat random
              chance.
            </p>
          </article>
          <article className="rounded-2xl border border-zinc-200 p-5 shadow-sm">
            <h3 className="font-semibold">Focus cues</h3>
            <p className="mt-2 text-zinc-700">
              Visual focus states reduce errors during fast sequences.
            </p>
          </article>
        </div>
      </section>

      {/* ===================== Mobile Performance Tips ===================== */}
      <section id="mobile-performance" className="mx-auto max-w-6xl px-4 pb-12">
        <h2 className="text-2xl font-bold">Mobile performance tips</h2>
        <p className="mt-3 text-zinc-700">
          Make the most of quick sessions on a phone. Keep taps steady, reduce
          background apps, and rely on short bursts to build skill. The game
          targets stable frame pacing and responsive input on modern devices.
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-zinc-800">
          <li>Short practice runs build timing muscle memory</li>
          <li>Use silent mode to stay focused on rhythm</li>
          <li>Avoid multi tasking during final guesses</li>
        </ul>
        <p className="mt-4 text-sm text-zinc-600">
          Keywords: mobile word game, fast dino runner, responsive browser game,
          low latency input.
        </p>
      </section>

      {/* ===================== Classroom and Family Play ===================== */}
      <section id="classroom-family" className="mx-auto max-w-6xl px-4 pb-12">
        <h2 className="text-2xl font-bold">Classroom and family play</h2>
        <p className="mt-3 text-zinc-700">
          Short rounds and clear letter feedback make the game a simple tool for
          vocabulary building. Use practice words to introduce phonics patterns,
          blends, and common endings in a playful setting.
        </p>
        <div className="mt-4 grid gap-6 md:grid-cols-3">
          <article className="rounded-2xl border border-zinc-200 p-5 shadow-sm">
            <h3 className="font-semibold">Phonics warmups</h3>
            <p className="mt-2 text-zinc-700">
              Review digraphs and test minimal pairs with quick guesses.
            </p>
          </article>
          <article className="rounded-2xl border border-zinc-200 p-5 shadow-sm">
            <h3 className="font-semibold">Vocabulary focus</h3>
            <p className="mt-2 text-zinc-700">
              Discuss definitions after a solve to reinforce learning.
            </p>
          </article>
          <article className="rounded-2xl border border-zinc-200 p-5 shadow-sm">
            <h3 className="font-semibold">Fair rules</h3>
            <p className="mt-2 text-zinc-700">
              Keep the same constraints for everyone to compare results.
            </p>
          </article>
        </div>
      </section>

      {/* ===================== Fairness, Seeds, and Reproducibility ===================== */}
      <section id="seeds-fairness" className="mx-auto max-w-6xl px-4 pb-12">
        <h2 className="text-2xl font-bold">
          Fairness, seeds, and reproducibility
        </h2>
        <p className="mt-3 text-zinc-700">
          Daily runs share the same word and obstacle seed so results remain
          comparable. Consistent rules, clear feedback, and duplicate letter
          logic preserve puzzle integrity across devices.
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-zinc-800">
          <li>Shared seed for equal challenge</li>
          <li>Consistent feedback across platforms</li>
          <li>Transparent handling of duplicate letters</li>
        </ul>
      </section>

      {/* ===================== Regional Spellings and Localization ===================== */}
      <section id="regional-spellings" className="mx-auto max-w-6xl px-4 pb-12">
        <h2 className="text-2xl font-bold">
          Regional spellings and localization
        </h2>
        <p className="mt-3 text-zinc-700">
          Word lists respect regional spelling differences when the option is
          enabled. This keeps daily play fair while allowing practice runs to
          explore broader vocabulary without confusion.
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-zinc-800">
          <li>Regional spelling toggle for clarity</li>
          <li>Consistent feedback regardless of variant</li>
          <li>Practice pools that include both forms when desired</li>
        </ul>
        <p className="sr-only">
          Regional spelling support for a daily word game with endless runner
          gameplay.
        </p>
      </section>

      {/* ===================== Color Accessibility Details ===================== */}
      <section
        id="color-accessibility"
        className="mx-auto max-w-6xl px-4 pb-12"
      >
        <h2 className="text-2xl font-bold">Color accessibility details</h2>
        <p className="mt-3 text-zinc-700">
          Feedback uses color plus icons and text labels so information stays
          readable for many vision profiles. High contrast options improve
          visibility in bright environments and on older screens.
        </p>
        <div className="mt-4 grid gap-6 md:grid-cols-3">
          <article className="rounded-2xl border border-zinc-200 p-5 shadow-sm">
            <h3 className="font-semibold">Icon pairs</h3>
            <p className="mt-2 text-zinc-700">
              Shapes and symbols support each color state.
            </p>
          </article>
          <article className="rounded-2xl border border-zinc-200 p-5 shadow-sm">
            <h3 className="font-semibold">Labels</h3>
            <p className="mt-2 text-zinc-700">
              Text labels clarify correct, present, and absent.
            </p>
          </article>
          <article className="rounded-2xl border border-zinc-200 p-5 shadow-sm">
            <h3 className="font-semibold">High contrast</h3>
            <p className="mt-2 text-zinc-700">
              Optional palette increases contrast for clarity.
            </p>
          </article>
        </div>
      </section>

      {/* ===================== Daily Routine and Streak Building ===================== */}
      <section id="streak-building" className="mx-auto max-w-6xl px-4 pb-12">
        <h2 className="text-2xl font-bold">
          Daily routine and streak building
        </h2>
        <p className="mt-3 text-zinc-700">
          Keep a consistent routine for better results. Warm up with a practice
          run, test two starter words, and commit to a final guess after a
          focused probe. Short sessions add up to stronger vocabulary and higher
          streaks.
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-zinc-800">
          <li>Warmup run to set rhythm</li>
          <li>Two stage opener for coverage and confirmation</li>
          <li>One decisive probe to settle the final pattern</li>
        </ul>
        <p className="mt-4 text-sm text-zinc-600">
          Keywords: daily word game routine, streak strategy, Wordle expert
          tips, dino runner practice.
        </p>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-4 pb-16">
        <h2 className="text-2xl font-bold">FAQ</h2>
        <details className="group mt-4 rounded-xl border border-zinc-200 p-4">
          <summary className="cursor-pointer select-none font-medium">
            What makes this different from regular dino runner?
          </summary>
          <p className="mt-2 text-zinc-700">
            You still dodge obstacles, but letter pickups influence your next
            guess. Good running feeds good vocabulary. It feels fresh each
            round.
          </p>
        </details>
        <details className="group mt-3 rounded-xl border border-zinc-200 p-4">
          <summary className="cursor-pointer select-none font-medium">
            Will there be a daily challenge like Wordle?
          </summary>
          <p className="mt-2 text-zinc-700">
            Yes. A single daily word for everyone plus an endless practice mode.
          </p>
        </details>
        <details className="group mt-3 rounded-xl border border-zinc-200 p-4">
          <summary className="cursor-pointer select-none font-medium">
            Does it work offline?
          </summary>
          <p className="mt-2 text-zinc-700">
            The runner will keep working offline after your first load. The
            daily word will sync when you reconnect.
          </p>
        </details>
      </section>

      {/* Footer */}
      <footer className="mx-auto max-w-6xl px-4 py-5 text-sm text-zinc-600">
        <p className="mt-4">© {new Date().getFullYear()} Dino Word Game</p>
      </footer>
    </main>
  );
}
