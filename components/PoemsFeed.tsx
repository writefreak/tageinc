const poems = [
  {
    date: "2026.07.02",
    title: "What the Harmattan Leaves Behind",
    excerpt: "Dust settles on the windowsill the way memory settles on a name.",
  },
  {
    date: "2026.06.14",
    title: "Notes for a City That Floods Every June",
    excerpt: "We learned to keep the important things above the second shelf.",
  },
  {
    date: "2026.05.28",
    title: "A Short Poem About Waiting",
    excerpt: "The kettle knows exactly how long, and never says.",
  },
  {
    date: "2026.05.09",
    title: "Letter to the Younger Draft of This",
    excerpt: "You were right about the ending. You were wrong about the middle.",
  },
];

export default function PoemsFeed() {
  return (
    <section id="poems" className="bg-paper-deep py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="max-w-xl">
          <h2 className="font-display text-4xl italic text-ink sm:text-5xl">
            Recent poems
          </h2>
          <p className="mt-3 font-body text-ink-soft">
            Posted as they are finished, oldest to newest by the date on the left.
          </p>
        </div>

        <ul className="mt-12 divide-y divide-line border-y border-line">
          {poems.map((poem) => (
            <li key={poem.title}>
              <a
                href="#"
                className="group grid grid-cols-1 items-center gap-2 py-6 sm:grid-cols-[120px_1fr_auto] sm:gap-8"
              >
                <span className="font-mono text-xs text-ink-soft/70">
                  {poem.date}
                </span>
                <div>
                  <h3 className="font-display text-2xl text-ink transition-colors group-hover:text-orange-deep">
                    {poem.title}
                  </h3>
                  <p className="mt-1 font-body text-sm text-ink-soft">
                    {poem.excerpt}
                  </p>
                </div>
                <span className="hidden font-body text-sm font-semibold text-orange-deep opacity-0 transition-opacity group-hover:opacity-100 sm:block">
                  Read
                </span>
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-10">
          <a
            href="#"
            className="font-body text-sm font-semibold text-orange-deep underline decoration-orange/40 underline-offset-4 hover:decoration-orange-deep"
          >
            Read every poem
          </a>
        </div>
      </div>
    </section>
  );
}
