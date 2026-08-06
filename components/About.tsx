export default function About() {
  return (
    <section id="about" className="bg-paper py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 sm:px-10 lg:grid-cols-[minmax(0,380px)_1fr] lg:items-center lg:gap-20">
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
          {/* Image background placement. Drop a portrait at public/images/portrait.jpg */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/portrait.jpg')",
              backgroundColor: "#d8c7a8",
            }}
          />
          <div
            className="absolute inset-0 mix-blend-multiply"
            style={{
              background:
                "linear-gradient(160deg, rgba(226,97,31,0.55) 0%, rgba(33,28,22,0.75) 100%)",
            }}
          />
        </div>

        <div>
          <h2 className="font-display text-4xl italic text-ink sm:text-5xl">
            A little about the writing
          </h2>
          <p className="mt-6 font-body text-base leading-relaxed text-ink-soft sm:text-lg">
            Tageinc is a personal shelf, not a publishing house. Everything
            here is written first for the page and posted once it earns its
            place, whether that is a full book or a poem written on a bad
            night. Most of the work is set in and around Port Harcourt, and
            most of it is about the small, specific things people usually
            skip over.
          </p>
          <p className="mt-4 font-body text-base leading-relaxed text-ink-soft sm:text-lg">
            New pieces are posted as they are finished, not on a schedule.
            The journal is the fastest way to know when something new is up.
          </p>
        </div>
      </div>
    </section>
  );
}
