"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  Sun,
  MapPin,
  Home,
  Bed,
  ArrowRight,
  LogIn,
  Plus,
  ChevronDown,
} from "lucide-react";

const NAV_LINKS = ["Listings", "Our Agents", "Video Tours", "Company"];

const CATEGORY_OPTIONS = ["Buy", "Rent", "Short-let"];
const PRICE_OPTIONS = [
  "Under ₦20,000,000",
  "₦20,000,000 – ₦100,000,000",
  "Above ₦100,000,000",
];
const BED_OPTIONS = ["1", "2", "3", "4+"];

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]);

  return (
    <section
      ref={containerRef}
      className="relative md:h-screen min-h-[95vh] w-full font-sans overflow-hidden"
    >
      {/* Parallax background image */}
      <motion.div
        style={{ y: bgY, scale: bgScale }}
        className="absolute inset-0 h-full w-full"
      >
        <Image
          src="/home.jpg"
          alt="Aerial view of a modern residential estate"
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content wrapper */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 flex min-h-[95vh] flex-col"
      >
        {/* Navbar */}
        <header className="flex items-center justify-between gap-4 px-4 py-4 sm:px-8 lg:px-12">
          <div className="h-10 md:h-12">
            <img
              src="/homeland.png"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 rounded-full bg-black/30 px-2 py-2 backdrop-blur-md lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href="#"
                className="rounded-full px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                {link}
              </a>
            ))}
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
        </header>

        {/* Mobile nav panel */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="mx-4 mt-2 overflow-hidden rounded-2xl bg-black/60 backdrop-blur-md lg:hidden"
            >
              <div className="flex flex-col gap-1 p-4">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="rounded-lg px-3 py-2 text-sm font-semibold text-white hover:bg-white/10"
                  >
                    {link}
                  </a>
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

        {/* Hero heading */}
        <div className="flex flex-1 flex-col justify-center px-4 pt-6 md:pt-10 sm:px-8 lg:px-12">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="md:max-w-3xl max-w-full text-4xl md:text-6xl font-bold leading-[1.05] text-white"
          >
            Discover Your Next <br className="hidden md:block" /> Dream Home
            <br />
            {/* <span className="text-orange-500">Home</span> */}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="py-4 text-xs md:max-w-sm md:text-base text-white/90"
          >
            Homeland Prestige brings curated luxury homes{" "}
            <br className="md:block hidden" /> and estates to your doorstep
          </motion.p>
        </div>

        {/* Search card */}
        <div className="px-4 pb-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="rounded-3xl bg-black/40 p-6 backdrop-blur-md sm:p-8"
          >
            <h2 className="mb-6 text-xl font-bold text-white sm:text-2xl">
              Browse listings
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <Field
                icon={<Home className="h-4 w-4 text-orange-500" />}
                label="Search Listings"
              >
                <input
                  type="text"
                  placeholder="Search listings"
                  className="w-full rounded-xl border border-white/20 bg-black/20 px-4 py-3 text-sm text-white placeholder-white/60 outline-none focus:border-orange-500"
                />
              </Field>
              <Dropdown
                placeholder="Browse Category"
                options={["Estate, Land, city"]}
                label="Select Category"
                icon={<MapPin className="h-4 w-4 text-orange-500" />}
              />
            </div>

            <div className="mt-6 flex justify-end">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="button"
                className="flex items-center gap-2 rounded-full bg-orange-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-700"
              >
                Find Homes
                <ArrowRight className="h-4 w-4" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

function Field({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2 text-xs md:text-sm font-semibold text-white">
        {icon}
        {label}
      </div>
      {children}
    </div>
  );
}

/**
 * Fully custom dropdown (no native <select>), animated with framer-motion.
 */
function Dropdown({
  icon,
  label,
  placeholder,
  options,
}: {
  icon: React.ReactNode;
  label: string;
  placeholder: string;
  options: string[];
}) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="relative flex flex-col gap-2">
      <div className="flex items-center text-xs md:text-sm gap-2 font-semibold text-white">
        {icon}
        {label}
      </div>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between rounded-xl border border-white/20 bg-black/20 px-4 py-3 text-left text-sm font-semibold text-white outline-none transition focus:border-orange-500"
      >
        <span className={selected ? "text-white" : "text-white/60"}>
          {selected ?? placeholder}
        </span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="h-4 w-4 text-white/70" />
        </motion.span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute left-0 right-0 top-full z-20 mt-2 overflow-hidden rounded-xl border border-white/10 bg-neutral-900/95 backdrop-blur-md"
          >
            {options.map((option) => (
              <li key={option}>
                <button
                  type="button"
                  onClick={() => {
                    setSelected(option);
                    setOpen(false);
                  }}
                  className="w-full px-4 py-3 text-left text-sm font-medium text-white/90 transition hover:bg-orange-600/20 hover:text-white"
                >
                  {option}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
