"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, LogIn, Plus } from "lucide-react";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "#" },
  { name: "Listings", href: "#" },
  { name: "Find Agents", href: "#" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between gap-4 px-4 py-4 sm:px-8 lg:px-12">
      <div className="h-10 md:h-12">
        <Link href="/">
          <img
            src="/homeland.png"
            alt="Homeland Prestige Logo"
            className="h-full w-full object-cover"
          />
        </Link>
      </div>

      {/* Desktop nav */}
      <nav className="hidden items-center gap-1 rounded-full bg-black/30 px-2 py-2 backdrop-blur-md lg:flex">
        {NAV_LINKS.map((link) => {
          const isActive = pathname === link.href;

          return (
            <Link
              key={link.name}
              href={link.href}
              className={`rounded-full px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10 ${
                isActive ? "bg-white/10" : ""
              }`}
            >
              {link.name}
            </Link>
          );
        })}
      </nav>

      {/* Desktop actions */}
      <div className="hidden items-center gap-3 lg:flex">
        <button
          type="button"
          aria-label="Toggle theme"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-neutral-900 transition hover:opacity-90"
        >
          <Sun className="h-5 w-5" />
        </button>
        <button
          type="button"
          className="flex items-center gap-2 rounded-full bg-orange-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-700"
        >
          <Plus className="h-4 w-4" />
          List With Us
        </button>
        <button
          type="button"
          className="flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-neutral-900 transition hover:opacity-90"
        >
          <LogIn className="h-4 w-4" />
          Sign In
        </button>
      </div>

      {/* Mobile menu toggle */}
      <button
        type="button"
        onClick={() => setMenuOpen((v) => !v)}
        aria-label="Toggle menu"
        className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md lg:hidden"
      >
        <span className="flex flex-col gap-1.5">
          <span className="h-0.5 w-5 bg-white" />
          <span className="h-0.5 w-5 bg-white" />
          <span className="h-0.5 w-5 bg-white" />
        </span>
      </button>

      {/* Mobile nav panel */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="absolute top-full left-4 right-4 mt-2 overflow-hidden rounded-2xl bg-black/60 backdrop-blur-md lg:hidden"
          >
            <div className="flex flex-col gap-1 p-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="rounded-lg px-3 py-2 text-sm font-semibold text-white hover:bg-white/10"
                >
                  {link.name}
                </Link>
              ))}
              <div className="mt-2 flex flex-col gap-2 border-t border-white/10 pt-3">
                <button
                  type="button"
                  className="flex items-center justify-center gap-2 rounded-full bg-orange-600 px-5 py-2.5 text-sm font-semibold text-white"
                >
                  <Plus className="h-4 w-4" />
                  List With Us
                </button>
                <button
                  type="button"
                  className="flex items-center justify-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-neutral-900"
                >
                  <LogIn className="h-4 w-4" />
                  Sign In
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
