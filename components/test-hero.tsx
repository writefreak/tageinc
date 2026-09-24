"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { MapPin, Home, ArrowRight, ChevronDown } from "lucide-react";
import { useState } from "react";
import Field from "./ui/field";
import Dropdown from "./ui/dropdown";

export default function Hero() {
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
      className="relative md:h-screen min-h-svh w-full font-sans overflow-hidden"
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
        className="relative z-10 flex h-full md:min-h-[95vh] flex-col justify-between pt-24 md:pt-20 transform-gpu"
      >
        {/* Hero heading */}
        <div className="flex flex-col justify-start md:justify-center px-4 pt-4 md:pt-10 sm:px-8 lg:px-12 md:flex-1">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="md:max-w-3xl max-w-full text-4xl md:text-6xl font-bold font-display leading-[1.05] text-white"
          >
            Discover Your Next <br className="hidden md:block" /> Dream Home
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="py-3 text-xs md:max-w-sm md:text-base text-white/90"
          >
            Homeland Premier brings curated luxury homes{" "}
            <br className="md:block hidden" /> and estates to your doorstep
          </motion.p>
        </div>

        {/* Search card */}
        <div className="px-4 pb-6 pt-12 md:pt-0 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="rounded-3xl bg-black/40 p-6 backdrop-blur-md sm:p-8"
          >
            <h2 className="mb-6 text-xl font-bold font-display text-white md:text-2xl">
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
                options={["Estate", "Land", "City"]}
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
