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
import {
  MapPin,
  Home,
  ArrowRight,
  ChevronDown,
  Plus,
  LogIn,
} from "lucide-react";
import { useState } from "react";

const HEADLINE =
  "Join Homeland Premier and list your luxurious properties with us";

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

export default function BecomeAgentHero() {
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
        {/* Hero heading container with mobile padding and width controls */}
        <div className="flex flex-col mx-auto my-auto justify-center items-center w-full max-w-sm md:max-w-3xl px-4 md:px-0 text-center">
          <motion.h1
            variants={wordContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.6 }}
            className="mt-4 font-display text-white text-[27px] md:text-[64px] font-bold tracking-tight leading-[1.15]"
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

          <div className="flex flex-col md:flex-row gap-2 items-center">
            <a href="#" className="pt-10">
              <button
                type="button"
                className="flex items-center gap-2 rounded-full bg-orange-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-700"
              >
                List With Us
                <ArrowRight className="h-4 w-4" />
              </button>
            </a>
            <a href="#" className="pt-10">
              <button
                type="button"
                className="flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-neutral-900 transition "
              >
                <LogIn className="h-4 w-4" />
                Sign In
              </button>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
