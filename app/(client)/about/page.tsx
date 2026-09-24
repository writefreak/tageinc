"use client";

import { useRef, useState } from "react";
import AboutHero from "@/components/about/about-hero";
import {
  Heart,
  ShieldCheck,
  HandHeart,
  Compass,
  Eye,
  Users2,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { usePathname } from "next/navigation";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";

const VALUES = [
  {
    icon: Heart,
    title: "People first",
    body: "Every decision starts with the families and investors it affects, not the transaction.",
  },
  {
    icon: Compass,
    title: "Keep it simple",
    body: "Land and property should be easy to understand. We remove confusion instead of adding to it.",
  },
  {
    icon: ShieldCheck,
    title: "Earn trust daily",
    body: "Verified titles, clear paperwork, and honest timelines. Trust is earned in every interaction.",
  },
  {
    icon: HandHeart,
    title: "Move with care",
    body: "We close deals quickly, but never carelessly, because people's savings ride on our platform.",
  },
  {
    icon: Eye,
    title: "Default to transparency",
    body: "Clear pricing, a public process, and honest communication, even when the news is hard.",
  },
  {
    icon: Users2,
    title: "Better together",
    body: "The best outcomes happen when clients, agents, and our team feel supported on every side.",
  },
];

const PURPOSE_PAGES = [
  {
    icon: Compass,
    title: "Our mission",
    body: "Our mission is to empower individuals, families, and institutional investors across Nigeria by providing seamless access to thoroughly verified real estate opportunities. We achieve this by dismantling the traditional friction in property acquisition, ensuring that every title is vetted, legal processes are straightforward, and every client receives personalized end-to-end guidance from initial inquiry to final handover, regardless of their budget or portfolio size.",
  },
  {
    icon: Eye,
    title: "Our vision",
    body: "We envision a transformed real estate ecosystem where trust, security, and transparency are absolute standards rather than rare exceptions. Our goal is to set the benchmark for property transactions across Africa by creating a digital-first marketplace where land ownership is accessible, fraud is eliminated, and every buyer can invest with absolute certainty in the long-term value and legality of their property.",
  },
];

export default function AboutPage() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const headerStyle = isHome;

  const [activePurposeIndex, setActivePurposeIndex] = useState(0);

  const imageSectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: imageSectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-30%", "30%"]);

  const currentPurpose = PURPOSE_PAGES[activePurposeIndex];
  const IconComponent = currentPurpose.icon;

  return (
    <main className="w-full font-display text-neutral-900">
      {/* Hero */}
      <AboutHero />

      {/* Our story */}
      <section
        ref={imageSectionRef}
        className="px-4 md:px-14 py-16 md:pt-32 bg-neutral-50 overflow-hidden"
      >
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-center">
          <div>
            <h2 className="mt-3 text-2xl md:text-4xl font-bold tracking-tight leading-[1.2]">
              Connecting Nigerians With Their Dream Homes
            </h2>
            <div className="mt-2.5 h-1 w-12 rounded-full bg-[#ff5500]" />

            <p className="mt-4 text-xs sm:text-sm leading-relaxed text-neutral-600">
              Homeland Premier helps families and investors buy, sell, and
              manage property across Nigeria with confidence. We check every
              title before a listing goes live, keep the paperwork in order, and
              assign an agent who stays with you from your first enquiry through
              to handover.
            </p>
            <p className="mt-4 text-xs sm:text-sm leading-relaxed text-neutral-600">
              We've closed thousands of transactions and now manage over ₦50B in
              property value across three states, and every client still deals
              with same credible surveyors and agents from start to finish.
            </p>
          </div>
          <div className="h-64 md:h-80 w-full overflow-hidden rounded-3xl relative">
            <motion.img
              style={{ y: imageY }}
              className="absolute top-[-60%] left-0 h-[220%] w-full object-cover rounded-3xl"
              src={"/home2.jpg"}
              alt="Connecting Nigerians With Their Dream Homes"
            />
          </div>
        </div>
      </section>

      {/* Mission & vision */}
      <section className="px-4 md:px-14 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h2 className="mt-3 text-2xl md:text-4xl font-bold tracking-tight">
              What drives us forward
            </h2>
          </div>

          <div className="mt-10 rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8 shadow-sm">
            <div className="flex items-center justify-center gap-4 border-b border-neutral-100 pb-4">
              <div className="flex gap-2 items-center">
                {PURPOSE_PAGES.map((item, idx) => (
                  <button
                    key={item.title}
                    type="button"
                    onClick={() => setActivePurposeIndex(idx)}
                    className={`rounded-full px-4 py-1.5 text-xs font-medium transition ${
                      activePurposeIndex === idx
                        ? "bg-orange-600 text-white"
                        : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                    }`}
                  >
                    {item.title}
                  </button>
                ))}
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activePurposeIndex}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
                className="mt-6 flex items-center flex-col gap-2"
              >
                {/* <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-50">
                  <IconComponent className="h-5 w-5 text-orange-600" />
                </div> */}
                <h3 className="mt-4 text-lg md:text-xl text-center font-semibold text-neutral-900">
                  {currentPurpose.title}
                </h3>
                <p className="text-xs md:text-sm text-center leading-relaxed text-neutral-600">
                  {currentPurpose.body}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="mt-6 flex justify-center gap-1.5 border-t border-neutral-100 pt-4">
              {PURPOSE_PAGES.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  aria-label={`Go to slide ${idx + 1}`}
                  onClick={() => setActivePurposeIndex(idx)}
                  className={`h-2 rounded-full transition-all ${
                    activePurposeIndex === idx
                      ? "w-6 bg-orange-600"
                      : "w-2 bg-neutral-200"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-4 md:px-14 py-16 bg-neutral-50">
        <div className="mx-auto max-w-6xl">
          <div className="text-center max-w-xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-wide text-[#ff5500]">
              Our values
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight">
              The principles behind every decision
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-neutral-600">
              Six values guide how we build our listings, treat our clients, and
              work with each other.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {VALUES.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="rounded-2xl border border-neutral-200 bg-white p-6"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-50">
                  <Icon className="h-5 w-5 text-orange-600" />
                </div>
                <h3 className="mt-4 text-base font-semibold">{title}</h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-neutral-600">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="px-4 md:px-14 py-16">
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wide text-[#ff5500]">
              Why Homeland Prestige
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight leading-[1.2]">
              Why clients choose us, and stay
            </h2>
            <ul className="mt-5 space-y-3">
              {[
                "One platform for the whole process, from listing to handover",
                "Verified titles on every property, checked before you see it",
                "A dedicated agent, not a call center queue",
                "Transparent pricing with no surprise fees at closing",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-xs sm:text-sm text-neutral-700"
                >
                  <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-orange-600" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
            <div className="flex gap-1 text-orange-600">
              {"★★★★★".split("").map((s, i) => (
                <span key={i}>{s}</span>
              ))}
            </div>
            <p className="mt-3 text-sm sm:text-base font-medium leading-relaxed text-neutral-900">
              Switching to Homeland Prestige was the easiest property decision
              our family made all year. Everything, from title checks to
              handover, lived in one place.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <div className="h-9 w-9 rounded-full bg-orange-100" />
              <div>
                <p className="text-xs sm:text-sm font-semibold">Hannah Ade</p>
                <p className="text-[11px] sm:text-xs text-neutral-500">
                  Homeowner, Port Harcourt
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
