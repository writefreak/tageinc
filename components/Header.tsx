"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#books", label: "Books" },
  { href: "#poems", label: "Poems" },
  { href: "#about", label: "About" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-paper/90 backdrop-blur-sm border-b border-line" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 sm:px-10">
        <a
          href="#top"
          className="font-display text-xl italic tracking-tight text-ink"
        >
          Tageinc
        </a>

        <nav className="hidden items-center gap-8 sm:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-body text-sm font-medium transition-colors hover:text-orange-deep ${
                scrolled ? "text-ink-soft" : "text-ink"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#newsletter"
            className="rounded-full bg-orange px-5 py-2 font-body text-sm font-semibold text-paper transition-colors hover:bg-orange-deep"
          >
            Join the journal
          </a>
        </nav>

        <a
          href="#newsletter"
          className="rounded-full bg-orange px-4 py-2 font-body text-sm font-semibold text-paper sm:hidden"
        >
          Join
        </a>
      </div>
    </header>
  );
}
