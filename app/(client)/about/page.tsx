"use client";

import { useRef } from "react";
import AboutHero from "@/components/about/about-hero";
import {
  Heart,
  ShieldCheck,
  HandHeart,
  Compass,
  Eye,
  Users2,
  LucideIcon,
} from "lucide-react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

interface Reason {
  icon: LucideIcon;
  title: string;
  body: string;
}

interface AboutSectionData {
  id: string;
  title: string;
  paragraphs: string[];
  imageSrc: string;
  imageAlt: string;
  bgColor: string;
  imageFirstDesktop?: boolean;
}

const REASONS_TO_CHOOSE_US: Reason[] = [
  {
    icon: ShieldCheck,
    title: "100% Vetted Titles",
    body: "Every property title, C of O, and survey document is thoroughly verified by accredited legal professionals before a listing ever goes live.",
  },
  {
    icon: Compass,
    title: "Dedicated Advisor",
    body: "You get an assigned personal advisor who handles site inspections, paperwork, and legal procedures from your initial inquiry straight through to handover.",
  },
  {
    icon: Eye,
    title: "Zero Hidden Fees",
    body: "We maintain complete price integrity with explicit closing costs and documented payment terms, eliminating sudden post-agreement surprises.",
  },
  {
    icon: HandHeart,
    title: "Prime Locations",
    body: "Gain exclusive access to high-growth residential and commercial properties in strategically selected developments across rapidly expanding hubs.",
  },
  {
    icon: Users2,
    title: "Vetted Network",
    body: "Work directly with our established network of certified surveyors, legal advisors, and estate managers with proven track records in property development.",
  },
  {
    icon: Heart,
    title: "Asset Management",
    body: "Our support does not end at handover. We assist with property management, tenant placement, and long-term asset value growth strategies.",
  },
];

const ABOUT_SECTIONS: AboutSectionData[] = [
  {
    id: "story",
    title: "Connecting Nigerians With Their Dream Homes",
    paragraphs: [
      "Homeland Premier helps families and investors buy, sell, and manage property across Nigeria with confidence. We check every title before a listing goes live, keep the paperwork in order, and assign an agent who stays with you from your first enquiry through to handover.",
      "We've closed thousands of transactions and now manage over ₦50B in property value across three states, and every client still deals with same credible surveyors and agents from start to finish.",
    ],
    imageSrc: "/home1.jpg",
    imageAlt: "Connecting Nigerians With Their Dream Homes",
    bgColor: "bg-neutral-50",
    imageFirstDesktop: false,
  },
  {
    id: "mission",
    title: "Our Mission",
    paragraphs: [
      "Our mission is to empower individuals, families, and institutional investors across Nigeria by providing seamless access to thoroughly verified real estate opportunities. We achieve this by dismantling the traditional friction in property acquisition, ensuring that every title is vetted, legal processes are straightforward, and every client receives personalized end-to-end guidance from initial inquiry to final handover, regardless of their budget or portfolio size.",
    ],
    imageSrc: "/home7.jpg",
    imageAlt: "Our Mission",
    bgColor: "bg-white",
    imageFirstDesktop: true,
  },
  {
    id: "vision",
    title: "Our Vision",
    paragraphs: [
      "We envision a transformed real estate ecosystem where trust, security, and transparency are absolute standards rather than rare exceptions. Our goal is to set the benchmark for property transactions across Africa by creating a digital-first marketplace where land ownership is accessible, fraud is eliminated, and every buyer can invest with absolute certainty in the long-term value and legality of their property.",
    ],
    imageSrc: "/home8.jpg",
    imageAlt: "Our Vision",
    bgColor: "bg-neutral-50",
    imageFirstDesktop: false,
  },
];

function AboutSection({ section }: { section: AboutSectionData }) {
  const imageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });

  // Reduced the shift range to prevent extreme vertical distortion
  const imageY: MotionValue<string> = useTransform(
    scrollYProgress,
    [0, 1],
    ["-15%", "15%"],
  );

  const textOrder = section.imageFirstDesktop
    ? "order-1 md:order-2"
    : "order-1";
  const imageOrder = section.imageFirstDesktop
    ? "order-2 md:order-1"
    : "order-2";

  return (
    <section
      ref={imageRef}
      className={`px-4 md:px-14 py-16 ${
        section.id === "story" ? "md:pt-32" : ""
      } ${section.bgColor} overflow-hidden`}
    >
      <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-center">
        <div className={textOrder}>
          <h2 className="mt-3 text-2xl md:text-4xl font-bold tracking-tight leading-[1.2]">
            {section.title}
          </h2>
          <div className="mt-2.5 h-1 w-12 rounded-full bg-[#ff5500]" />

          {section.paragraphs.map((p, idx) => (
            <p
              key={idx}
              className="mt-4 text-xs sm:text-sm leading-relaxed text-neutral-600"
            >
              {p}
            </p>
          ))}
        </div>

        <div
          className={`${imageOrder} h-64 md:h-80 w-full overflow-hidden rounded-3xl relative`}
        >
          <motion.img
            style={{ y: imageY }}
            className="absolute top-[-40%] left-0 h-[220%] w-full object-cover rounded-3xl"
            src={section.imageSrc}
            alt={section.imageAlt}
          />
        </div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <main className="w-full font-display text-neutral-900">
      <AboutHero />

      {/* Mapped Story, Mission & Vision Sections */}
      {ABOUT_SECTIONS.map((section) => (
        <AboutSection key={section.id} section={section} />
      ))}

      {/* Why Choose Us */}
      <section className="px-4 md:px-14 md:pb-32 pb-20 py-16 bg-white">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center text-center max-w-xl mx-auto">
            <h2 className="mt-3 text-2xl md:text-4xl font-bold tracking-tight">
              Why Our Clients <br className="md:hidden" />
              Choose Us
            </h2>
            <div className="mt-2.5 h-1 w-12 rounded-full bg-[#ff5500]" />
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
            {REASONS_TO_CHOOSE_US.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
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
    </main>
  );
}
