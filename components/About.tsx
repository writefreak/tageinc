"use client";

import Image from "next/image";
import AboutRightSection from "./ui/about-right";

const STATS = [
  { value: "10+", label: "Years Experience" },
  { value: "250+", label: "Properties Handed Over" },
  { value: "1,200+", label: "Happy Homeowners" },
  { value: "₦50B+", label: "Property Value Managed" },
];

export default function AboutSection() {
  return (
    <section className="w-full py-16 px-6 md:px-14 text-neutral-900 font-sans">
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-14 items-stretch">
        {/* Left Card: Text & Story */}
        <div className="flex flex-col">
          <div>
            <h2 className="mt-4 text-3xl sm:text-5xl font-bold tracking-tight text-neutral-900 leading-[1.15]">
              Premium Homeownership For Everyone
            </h2>
          </div>

          <p className="mt-8 text-xs sm:text-sm leading-relaxed text-neutral-600">
            Homeland Prestige was founded to redefine real estate development,
            property acquisition, and land investments. Driven by a commitment
            to trust, architectural elegance, and seamless client experiences,
            we bridge the gap between dream living spaces and reality. From
            pristine residential estates to high-yield investment properties, we
            empower families and investors to build lasting legacy through
            verified real estate.
          </p>
        </div>

        {/* Right Side: Image & 2x2 Stats Grid */}
        <AboutRightSection />
      </div>
    </section>
  );
}
