"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { ArrowRight } from "lucide-react";

const STATS = [
  { numericValue: 10, suffix: "+", label: "Years Experience" },
  { numericValue: 250, suffix: "+", label: "Properties Handed Over" },
  { numericValue: 1200, suffix: "+", label: "Happy Homeowners" },
  {
    numericValue: 50,
    prefix: "₦",
    suffix: "B+",
    label: "Property Value Managed",
  },
];

export default function AboutRightSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll progress for the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Noticeable parallax shift without clipping
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden rounded-3xl min-h-70 sm:min-h-85 shadow-sm"
    >
      {/* Parallax Image Container extending beyond boundaries for movement */}
      <motion.div
        style={{ y }}
        className="absolute -top-12 -bottom-12 inset-x-0 w-full"
      >
        <Image
          src="/home2.jpg"
          alt="Homeland Prestige modern luxury property architecture"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority
        />
      </motion.div>

      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-black/10 pointer-events-none" />

      <div className="absolute inset-0 flex flex-col justify-end p-3 sm:p-5 z-10 gap-3">
        {/* Stats Grid */}
        <div className="grid w-full grid-cols-2 gap-2 sm:gap-3">
          {STATS.map((stat, index) => (
            <GlassStatCard key={index} stat={stat} />
          ))}
        </div>
      </div>
    </div>
  );
}

function GlassStatCard({
  stat,
}: {
  stat: {
    numericValue: number;
    prefix?: string;
    suffix?: string;
    label: string;
  };
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  // once: false allows re-triggering whenever scrolling back into view
  const isInView = useInView(cardRef, { once: false, amount: 0.3 });

  const count = useMotionValue(0);
  const springCount = useSpring(count, {
    stiffness: 60,
    damping: 18,
    restDelta: 0.001,
  });

  useEffect(() => {
    if (isInView) {
      count.set(stat.numericValue);
    } else {
      count.set(0);
    }
  }, [isInView, count, stat.numericValue]);

  return (
    <div
      ref={cardRef}
      className="flex flex-col justify-center rounded-xl sm:rounded-2xl bg-white/15 p-3 sm:p-4 backdrop-blur-md border border-white/25 shadow-lg text-white"
    >
      <span className="text-xl sm:text-3xl font-bold tracking-tight text-white drop-shadow-sm flex items-center">
        {stat.prefix && <span>{stat.prefix}</span>}
        <Counter value={springCount} />
        {stat.suffix && <span>{stat.suffix}</span>}
      </span>
      <span className="mt-0.5 text-[10px] sm:text-xs font-medium text-white/90 drop-shadow-sm">
        {stat.label}
      </span>
    </div>
  );
}

function Counter({ value }: { value: any }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    return value.on("change", (latest: number) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toLocaleString();
      }
    });
  }, [value]);

  return <span ref={ref}>0</span>;
}
