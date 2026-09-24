"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";
import { MapPin, Home, ArrowRight, ChevronDown } from "lucide-react";
import { useState } from "react";

const HEADLINE =
  "We're building the real estate experience Nigerians always deserved";

const wordContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.1,
    },
  },
};

const wordItem: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function AboutHero() {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Using raw numbers instead of percentage strings prevents expensive layout reflows per frame
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const contentOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]);

  return (
    <section
      ref={containerRef}
      className="relative md:h-screen min-h-100 w-full font-sans overflow-hidden"
    >
      {/* Parallax background image with GPU hardware isolation */}
      <motion.div
        style={{
          y: bgY,
          scale: bgScale,
          willChange: "transform",
        }}
        className="absolute inset-0 h-full w-full transform-gpu text-transparent select-none"
      >
        <Image
          src="/home.jpg"
          alt="Aerial view of a modern residential estate"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Foreground Content */}
      <motion.div
        style={{
          y: contentY,
          opacity: contentOpacity,
          willChange: "transform, opacity",
        }}
        className="relative z-10 flex h-full md:min-h-[95vh] flex-col justify-between pt-24 md:pt-0 transform-gpu"
      >
        {/* Hero heading */}
        <div className="flex flex-col mx-auto my-auto justify-center items-center max-w-3xl text-center">
          <motion.h1
            variants={wordContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.6 }}
            className="mt-4 text-white text-[27px] md:text-6xl font-bold tracking-tight leading-[1.15]"
          >
            {HEADLINE.split(" ").map((word, i) => (
              <motion.span
                key={`${word}-${i}`}
                variants={wordItem}
                className="inline-block mr-[0.25em] will-change-transform"
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>
          <div className="mt-2.5 h-1 md:w-24 w-12 rounded-full bg-[#ff5500]" />

          {/* <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <motion.button
              type="button"
              className="rounded-full bg-orange-600 px-5 py-2.5 text-sm font-semibold text-white"
            >
              View Listings
            </motion.button>
            <motion.button
              type="button"
              className="rounded-full border border-neutral-300 px-5 py-2.5 text-sm font-semibold text-neutral-900"
            >
              Read our story
            </motion.button>
          </div> */}
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
      <div className="flex items-center gap-2 text-xs md:text-sm font-sans font-semibold text-white">
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
      <div className="flex items-center font-sans text-xs md:text-sm gap-2 font-semibold text-white">
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
