"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { MapPin, Home, ArrowRight, ArrowUpDown, Calendar } from "lucide-react";
import Field from "../ui/field";
import Dropdown from "../ui/dropdown";
import AgentSearchBar from "./agent-search";

const HEADLINE = "Explore our extensive list of verified agents";

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

export default function AgentHero() {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const contentOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full font-sans overflow-hidden flex flex-col"
    >
      {/* Parallax background image */}
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
      {/* Hero Content */}
      <motion.div
        style={{
          y: contentY,
          opacity: contentOpacity,
          willChange: "transform, opacity",
        }}
        className="relative z-10 flex flex-col justify-center items-center pt-28 pb-12 px-4 md:px-0 text-center transform-gpu"
      >
        <div className="w-full max-w-sm md:max-w-3xl">
          <motion.h1
            variants={wordContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.6 }}
            className="font-display text-white text-[27px] md:text-[64px] font-bold tracking-tight leading-[1.15]"
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
          <div className="mt-2.5 mx-auto h-1 md:w-24 w-12 rounded-full bg-[#ff5500]" />
        </div>
      </motion.div>
      <div className="px-4 md:px-12">
        <AgentSearchBar />
      </div>{" "}
    </section>
  );
}
