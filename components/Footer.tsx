export default function Footer() {
  return (
    <footer className="bg-ink py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 text-center sm:flex-row sm:justify-between sm:text-left sm:px-10">
        <div>
          <p className="font-display text-lg italic text-paper">Tageinc</p>
          <p className="mt-1 font-body text-sm text-paper/60">
            Books and poems, posted as they are written.
          </p>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-6">
          <a href="#books" className="font-body text-sm text-paper/70 hover:text-orange-soft">
            Books
          </a>
          <a href="#poems" className="font-body text-sm text-paper/70 hover:text-orange-soft">
            Poems
          </a>
          <a href="#about" className="font-body text-sm text-paper/70 hover:text-orange-soft">
            About
          </a>
          <a href="#newsletter" className="font-body text-sm text-paper/70 hover:text-orange-soft">
            Journal
          </a>
        </nav>

        <p className="font-body text-xs text-paper/50">
          Copyright 2026 Tageinc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
