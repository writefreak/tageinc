"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { MapPin, Home, ArrowRight, ChevronDown } from "lucide-react";

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? ["0%", "12%"] : ["0%", "35%"],
  );
  const bgScale = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? [1, 1] : [1, 1.15],
  );
  const contentY = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? ["0%", "8%"] : ["0%", "20%"],
  );
  const contentOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]);

  return (
    <section
      ref={containerRef}
      className="relative md:h-screen min-h-[95vh] w-full font-sans overflow-hidden"
    >
      {/* Parallax background image */}
      <motion.div
        style={{ y: bgY, scale: bgScale, willChange: "transform" }}
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

      {/* Content wrapper with top padding for overlay header clearance */}
      <motion.div
        style={{
          y: contentY,
          opacity: contentOpacity,
          willChange: "transform",
        }}
        className="relative z-10 flex min-h-[95vh] flex-col pt-20 md:pt-20"
      >
        {/* Hero heading */}
        <div className="flex flex-1 flex-col justify-center px-4 pt-6 md:pt-10 sm:px-8 lg:px-12">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="md:max-w-3xl max-w-full text-4xl md:text-6xl font-bold font-display leading-[1.05] text-white"
          >
            Discover Your Next <br className="hidden md:block" /> Dream Home
            <br />
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="py-4 text-xs  md:max-w-sm md:text-base text-white/90"
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

            <div className="mt-6 flex md:justify-end">
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
