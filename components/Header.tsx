"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SearchBar from "./ui/searchbar";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Lock scroll when sheet is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 flex justify-center pointer-events-none">
        <div className="w-full md:max-w-[1100px] px-4">
          <div
            style={{
              backdropFilter: "blur(14px) saturate(160%)",
              WebkitBackdropFilter: "blur(14px) saturate(160%)",
            }}
            className="mt-3 w-full rounded-full border border-[var(--color-line)] bg-[rgba(251,246,238,0.85)] shadow-[0_10px_30px_-10px_rgba(33,28,22,0.08),0_4px_6px_-2px_rgba(33,28,22,0.03)] pointer-events-auto"
          >
            <div className="mx-auto flex items-center justify-between px-4 py-1.5 md:px-6 md:py-3 sm:px-8">
              {/* Brand Logo */}
              <a
                href="#top"
                className="font-display text-xl font-bold tracking-tight text-ink hover:text-orange transition-colors flex items-center gap-1.5"
              >
                Tageinc.
              </a>

              {/* Desktop Navigation */}
              <div className="hidden items-center gap-6 md:flex">
                <div className="w-48 lg:w-64">
                  <SearchBar />
                </div>

                <nav className="flex items-center gap-6">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="font-body text-sm font-medium text-ink-soft hover:text-orange transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>

                <a
                  href="#contact"
                  className="rounded-full bg-orange px-5 py-2 font-body text-sm font-semibold text-paper shadow-sm transition-all hover:bg-orange-deep hover:shadow"
                >
                  Get in touch
                </a>
              </div>

              {/* Mobile Navigation Trigger */}
              <div className="flex items-center gap-2 md:hidden">
                <button
                  onClick={() => setMobileMenuOpen(true)}
                  className="rounded-full p-2 text-ink hover:bg-paper-deep focus:outline-none"
                  aria-label="Open Navigation Menu"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Pure Framer Motion Sheet Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 md:hidden">
            {/* Backdrop Animation */}
            <motion.div
              key="sheet-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              onClick={() => setMobileMenuOpen(false)}
              className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
            />

            {/* Sheet Drawer Animation */}
            <motion.aside
              key="sheet-drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 35,
                mass: 0.8,
              }}
              style={{ willChange: "transform" }}
              className="absolute inset-y-0 right-0 flex w-full max-w-xs flex-col justify-between border-l border-line bg-paper p-6 shadow-2xl"
            >
              <div className="flex flex-col gap-6">
                {/* Header inside sheet */}
                <div className="flex items-center justify-between border-b border-line/60 pb-4">
                  <span className="font-display text-lg font-bold text-ink">
                    Menu
                  </span>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="rounded-full p-2 text-ink-soft hover:bg-paper-deep hover:text-ink focus:outline-none"
                    aria-label="Close menu"
                  >
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                {/* Search Bar */}
                <div className="w-full">
                  <SearchBar />
                </div>

                {/* Navigation Links */}
                <nav className="flex flex-col gap-4 mt-2">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="font-body text-lg font-medium text-ink-soft hover:text-orange transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Action Button */}
              <div className="pt-6 border-t border-line/60">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full rounded-full bg-orange py-3 text-center font-body text-sm font-semibold text-paper shadow hover:bg-orange-deep"
                >
                  Get in touch
                </a>
              </div>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
