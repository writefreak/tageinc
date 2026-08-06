"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type SearchBarProps = {
  /** "light" = for use over a dark or transparent hero. "dark" = for use over the paper-colored glass header. */
  variant?: "light" | "dark";
  className?: string;
};

export default function SearchBar({
  variant = "dark",
  className = "",
}: SearchBarProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    function onClickOutside(e: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    window.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClickOutside);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, []);

  const isLight = variant === "light";

  return (
    <div
      ref={wrapperRef}
      className={`flex items-center justify-end ${className}`}
    >
      <AnimatePresence initial={false} mode="wait">
        {open ? (
          <motion.form
            key="search-pill"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 240, opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            onSubmit={(e) => e.preventDefault()}
            className={`flex h-10 items-center gap-2 overflow-hidden rounded-full border pl-4 pr-2 ${
              isLight
                ? "bg-paper/30 backdrop-blur-md"
                : "border-line bg-paper-deep"
            }`}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className={`h-4 w-4 shrink-0 ${isLight ? "text-paper/70" : "text-ink-soft"}`}
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="M21 21l-4.35-4.35" />
            </svg>

            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search books and poems"
              autoComplete="off"
              spellCheck={false}
              className={`w-full min-w-0 appearance-none border-none bg-transparent font-body text-sm outline-none ring-0 [&::-webkit-search-cancel-button]:hidden [&::-webkit-search-decoration]:hidden ${
                isLight
                  ? "text-paper placeholder:text-paper/50"
                  : "text-ink placeholder:text-ink-soft/60"
              }`}
            />

            <button
              type="button"
              aria-label="Close search"
              onClick={() => setOpen(false)}
              className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full transition-colors ${
                isLight
                  ? "text-paper/70 hover:bg-paper/10 hover:text-paper"
                  : "text-ink-soft hover:bg-line/50 hover:text-ink"
              }`}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-3.5 w-3.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </motion.form>
        ) : (
          <motion.button
            key="search-icon"
            type="button"
            aria-label="Open search"
            onClick={() => setOpen(true)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors ${
              isLight
                ? "border-paper/30 text-paper hover:bg-paper/10"
                : "border-line text-ink-soft hover:border-orange-deep hover:text-orange-deep"
            }`}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-4 w-4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
