"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { MapPin, Home, ArrowRight, ArrowUpDown, Calendar } from "lucide-react";
import Field from "../ui/field";
import Dropdown from "../ui/dropdown";

const HEADLINE = "Explore our extensive list of luxurious properties";

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

export default function ListingHero() {
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
      className="relative min-h-screen w-full font-sans overflow-hidden flex flex-col justify-between"
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
        className="relative z-10 flex flex-1 flex-col justify-center items-center pt-28 pb-12 px-4 md:px-0 text-center transform-gpu"
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

      {/* Search card pinned to bottom container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 pb-8 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="rounded-3xl bg-black/40 p-6 backdrop-blur-md sm:p-8 border border-white/10"
        >
          <h2 className="mb-6 text-xl font-bold font-display text-white md:text-2xl">
            Browse listings
          </h2>

          {/* 4-Column Grid for Search Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Field
              icon={<Home className="h-4 w-4 text-orange-500" />}
              label="Search Listings"
            >
              <input
                type="text"
                placeholder="Search listings..."
                className="w-full rounded-xl border border-white/20 bg-black/20 px-4 py-3 text-sm text-white placeholder-white/60 outline-none focus:border-orange-500"
              />
            </Field>

            <Dropdown
              placeholder="All Categories"
              options={["Estate", "Land", "City"]}
              label="Select Category"
              icon={<MapPin className="h-4 w-4 text-orange-500" />}
            />

            <Dropdown
              placeholder="Sort by Price"
              options={["Lowest to Highest", "Highest to Lowest"]}
              label="Price Range"
              icon={<ArrowUpDown className="h-4 w-4 text-orange-500" />}
            />

            <Dropdown
              placeholder="Sort by Date"
              options={["Newest to Oldest", "Oldest to Newest"]}
              label="Listing Date"
              icon={<Calendar className="h-4 w-4 text-orange-500" />}
            />
          </div>

          <div className="mt-6 flex justify-end">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="button"
              className="w-full md:w-auto flex items-center justify-center gap-2 rounded-full bg-orange-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-700"
            >
              Find Homes
              <ArrowRight className="h-4 w-4" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
