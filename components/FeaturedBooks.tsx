"use client";

import { useState } from "react";

const books = [
  {
    title: "Salt and Harmattan",
    kind: "Poetry collection",
    code: "P.01",
    blurb: "Short poems written across three dry seasons in Port Harcourt.",
    cover: "/images/book-1.jpg",
  },
  {
    title: "The Long Vigil",
    kind: "Novella",
    code: "N.02",
    blurb:
      "A quiet story about a family waiting out a storm that never quite arrives.",
    cover: "/images/book-2.jpg",
  },
  {
    title: "Small Hours",
    kind: "Poetry collection",
    code: "P.03",
    blurb:
      "Poems written between midnight and morning, in the order they came.",
    cover: "/images/book-3.jpg",
  },
];

const spines = ["bg-ink", "bg-orange-deep", "bg-[#5b4a38]"];

function initials(title: string) {
  return title.charAt(0).toUpperCase();
}

export default function FeaturedBooks() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="books" className="bg-paper py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-display text-4xl italic text-ink sm:text-5xl">
              From the shelf
            </h2>
            <p className="mt-3 max-w-md font-body text-ink-soft">
              A few books to start with. Pull one out. Each one is available in
              full, free to read.
            </p>
          </div>

          <a
            href="#"
            className="font-body text-sm font-semibold text-orange-deep underline decoration-orange/40 underline-offset-4 hover:decoration-orange-deep"
          >
            View the full catalog
          </a>
        </div>

        <div className="relative mt-20 flex items-end gap-[3px] border-b-4 border-ink/80 pb-0">
          {books.map((book, i) => {
            const isActive = active === i;
            const isPoetry = book.kind.toLowerCase().includes("poetry");

            return (
              <div
                key={book.title}
                className="relative"
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
              >
                {/* Flyout cover, only exists on interaction */}
                <div
                  className={`absolute bottom-[calc(100%+18px)] left-1/2 w-52 -translate-x-1/2 rounded-sm border border-line bg-paper p-4 shadow-2xl transition-all duration-200 ${
                    isActive
                      ? "translate-y-0 opacity-100"
                      : "pointer-events-none translate-y-3 opacity-0"
                  }`}
                >
                  <div className="absolute left-1/2 top-full h-3 w-3 -translate-x-1/2 -translate-y-1/2 rotate-45 border-b border-r border-line bg-paper" />
                  <div
                    className={`flex aspect-[3/4] w-full items-center justify-center rounded-[2px] ${
                      isPoetry ? "bg-orange/15" : "bg-ink/10"
                    }`}
                    style={
                      book.cover
                        ? {
                            backgroundImage: `url('${book.cover}')`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                          }
                        : undefined
                    }
                  >
                    {!book.cover && (
                      <span className="font-display text-4xl italic text-ink/20">
                        {initials(book.title)}
                      </span>
                    )}
                  </div>
                  <h3 className="mt-3 font-display text-base leading-snug text-ink">
                    {book.title}
                    <span className="font-body text-sm font-normal italic text-ink-soft">
                      {" "}
                      — {book.kind.toLowerCase()}
                    </span>
                  </h3>
                  <p className="mt-1 line-clamp-3 font-body text-xs text-ink-soft">
                    {book.blurb}
                  </p>
                </div>

                {/* The spine itself */}

                <a
                  href="#"
                  className={`group relative flex h-64 w-14 flex-col items-center justify-between py-4 transition-transform duration-300 ease-out sm:w-16 ${
                    spines[i % spines.length]
                  } ${isActive ? "-translate-y-5" : ""}`}
                  style={{
                    transformOrigin: "bottom center",
                    boxShadow: isActive
                      ? "0 22px 26px -14px rgba(33,28,22,0.4), -1px 0 0 rgba(0,0,0,0.15)"
                      : "-1px 0 0 rgba(0,0,0,0.15)",
                  }}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-paper/40" />
                  <span
                    className="line-clamp-1 flex-1 py-2 font-display text-sm tracking-tight text-paper"
                    style={{
                      writingMode: "vertical-rl",
                      transform: "rotate(180deg)",
                    }}
                  >
                    {book.title}
                  </span>
                  <span className="font-mono text-[9px] text-paper/50">
                    {book.code}
                  </span>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
