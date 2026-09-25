"use client";

import Image from "next/image";
import AboutRightSection from "./ui/about-right";
import { ArrowRight } from "lucide-react";

const STATS = [
  { value: "10+", label: "Years Experience" },
  { value: "250+", label: "Properties Handed Over" },
  { value: "1,200+", label: "Happy Homeowners" },
  { value: "₦50B+", label: "Property Value Managed" },
];

export default function AboutSection() {
  return (
    <section className="w-full py-16 md:pt-44 px-4 md:px-14 text-neutral-900 font-display">
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-14 items-stretch">
        {/* Left Card: Text & Story */}
        <div className="flex flex-col gap-5 md:gap-5">
          <div>
            <h2 className="mt-4 text-2xl md:text-4xl font-bold tracking-tight text-neutral-900 leading-[1.15]">
              Building Lasting Value Through Credible Real Estate
            </h2>
            <div className="mt-2.5 h-1 w-12 rounded-full bg-[#ff5500]" />
          </div>

          <p className="text-xs sm:text-sm leading-relaxed text-neutral-600">
            Homeland Prestige was founded to redefine real estate development,
            property acquisition, and land investments. Driven by a commitment
            to trust, architectural elegance, and seamless client experiences,
            we bridge the gap between dream living spaces and reality. From
            pristine residential estates to high-yield investment properties, we
            empower families and investors to build lasting legacy through
            verified real estate.
          </p>
          <div className="hidden md:flex pt-6">
            <button
              type="button"
              className="flex items-center justify-center gap-2 rounded-full bg-orange-600 px-5 py-2.5 text-sm font-semibold text-white"
            >
              Learn More
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Right Side: Image & 2x2 Stats Grid */}
        <AboutRightSection />

        <div className="flex md:hidden">
          <a href="/about">
            <button
              type="button"
              className="flex items-center justify-center gap-2 rounded-full bg-orange-600 px-5 py-2.5 text-sm font-semibold text-white transition-transform"
            >
              Learn More
              <ArrowRight className="h-4 w-4" />
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
