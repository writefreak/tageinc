"use client";

import AboutHero from "@/components/about/about-hero";
import {
  Heart,
  ShieldCheck,
  HandHeart,
  Compass,
  Eye,
  Users2,
  ArrowRight,
} from "lucide-react";
import { usePathname } from "next/navigation";

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

export default function AboutPage() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const headerStyle = isHome;
  return (
    <main className="w-full font-display text-neutral-900">
      {/* Hero */}
      <AboutHero />

      {/* Our story */}
      <section className="px-6 md:px-14 py-16 bg-neutral-50">
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-center">
          <div>
            <h2 className="mt-3 text-2xl md:text-4xl font-bold tracking-tight leading-[1.2]">
              Connecting Nigerians With Their Dream Homes
            </h2>
            <div className="mt-2.5 h-1 w-12 rounded-full bg-[#ff5500]" />

            <p className="mt-4 text-xs sm:text-sm leading-relaxed text-neutral-600">
              Homeland Premier helps families and investors buy, sell, and
              manage property across Nigeria with confidence. Every listing on
              our platform is verified before it reaches a client: titles
              checked, paperwork in order, and an agent assigned from first
              enquiry through to handover.
            </p>
            <p className="mt-4 text-xs sm:text-sm leading-relaxed text-neutral-600">
              We manage thousands of transactions and over ₦50B in property
              value across three states, backed by a team of surveyors, legal
              advisors, and client managers who handle the details so you don't
              have to.
            </p>
          </div>
          <img className="h-64 md:h-80 w-full" />
        </div>
      </section>

      {/* Mission & vision */}
      <section className="px-6 md:px-14 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-wide text-[#ff5500]">
              Purpose
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight">
              What drives us forward
            </h2>
          </div>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="rounded-2xl border border-neutral-200 p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-50">
                <Compass className="h-5 w-5 text-orange-600" />
              </div>
              <h3 className="mt-4 text-base font-semibold">Our mission</h3>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-neutral-600">
                To give every Nigerian family, whatever their budget, a
                verified, stress-free path to owning property.
              </p>
            </div>
            <div className="rounded-2xl border border-neutral-200 p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-50">
                <Eye className="h-5 w-5 text-orange-600" />
              </div>
              <h3 className="mt-4 text-base font-semibold">Our vision</h3>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-neutral-600">
                A market where buying land feels as simple as it should be,
                where trust is built into every listing, not promised after the
                fact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-6 md:px-14 py-16 bg-neutral-50">
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
      <section className="px-6 md:px-14 py-16">
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
