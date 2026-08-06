const books = [
  {
    title: "Salt and Harmattan",
    kind: "Poetry collection",
    blurb: "Short poems written across three dry seasons in Port Harcourt.",
    cover: "/images/book-1.jpg",
  },
  {
    title: "The Long Vigil",
    kind: "Novella",
    blurb: "A quiet story about a family waiting out a storm that never quite arrives.",
    cover: "/images/book-2.jpg",
  },
  {
    title: "Small Hours",
    kind: "Poetry collection",
    blurb: "Poems written between midnight and morning, in the order they came.",
    cover: "/images/book-3.jpg",
  },
];

export default function FeaturedBooks() {
  return (
    <section id="books" className="bg-paper py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-display text-4xl italic text-ink sm:text-5xl">
              From the shelf
            </h2>
            <p className="mt-3 max-w-md font-body text-ink-soft">
              A few books to start with. Each one is available in full, free to read.
            </p>
          </div>
          <a
            href="#"
            className="font-body text-sm font-semibold text-orange-deep underline decoration-orange/40 underline-offset-4 hover:decoration-orange-deep"
          >
            View the full catalog
          </a>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {books.map((book) => (
            <a
              key={book.title}
              href="#"
              className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-paper-deep transition-shadow hover:shadow-lg hover:shadow-ink/5"
            >
              <div
                className="aspect-[4/5] w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-[1.03]"
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(33,28,22,0) 50%, rgba(33,28,22,0.55) 100%), url('${book.cover}')`,
                  backgroundColor: "#e6d9c3",
                }}
              />
              <div className="flex flex-1 flex-col gap-2 p-6">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-orange-deep">
                  {book.kind}
                </span>
                <h3 className="font-display text-xl text-ink">{book.title}</h3>
                <p className="font-body text-sm text-ink-soft">{book.blurb}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
