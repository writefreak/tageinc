import PageDivider from "./PageDivider";

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-end overflow-hidden">
      {/* Image background placement. Drop a photo at public/images/hero.jpg to replace the gradient. */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(33,28,22,0.35) 0%, rgba(33,28,22,0.55) 60%, rgba(33,28,22,0.85) 100%), url('/images/hero.jpg')",
          backgroundColor: "#3a2f22",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-24 pt-40 sm:px-10">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-orange-soft">
            Tage, writer
          </p>
          <h1 className="mt-6 font-display text-5xl italic leading-[1.05] text-paper sm:text-7xl">
            Words that
            <br />
            stay with you.
          </h1>
          <p className="mt-6 max-w-md font-body text-base text-paper/85 sm:text-lg">
            A working shelf of books and poems, published as they are written.
            No filler, no polish for its own sake, just the work.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#books"
              className="rounded-full bg-orange px-6 py-3 font-body text-sm font-semibold text-paper transition-colors hover:bg-orange-deep"
            >
              Browse the books
            </a>
            <a
              href="#poems"
              className="rounded-full border border-paper/40 px-6 py-3 font-body text-sm font-semibold text-paper transition-colors hover:border-paper hover:bg-paper/10"
            >
              Read the poems
            </a>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10">
        <PageDivider fill="#fbf6ee" />
      </div>
    </section>
  );
}
