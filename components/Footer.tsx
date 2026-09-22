"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const FOOTER_SECTIONS: FooterSection[] = [
  {
    title: "Quick Links",
    links: [
      { label: "Home", href: "#" },
      { label: "About Us", href: "#" },
      { label: "Property Listings", href: "#" },
      { label: "List with Us", href: "#" },
      { label: "Find Agents", href: "#" },
    ],
  },

  {
    title: "Legal Information",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms & Conditions", href: "#" },
      { label: "Other Doc", href: "#" },
    ],
  },
];

export default function Footer() {
  const bannerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: bannerRef,
    offset: ["start end", "end start"],
  });

  // Numeric values prevent layout shifts on scroll
  const bgY = useTransform(scrollYProgress, [0, 1], [-80, 80]);

  return (
    <footer className="w-full font-sans">
      {/* Top CTA Banner with Parallax */}
      <div
        ref={bannerRef}
        className="relative min-h-[280px] md:min-h-[420px] w-full overflow-hidden bg-slate-900 px-6 py-16 text-white md:px-12 lg:px-20 lg:py-24"
      >
        <motion.div
          style={{ y: bgY }}
          className="absolute inset-0 -top-12 -bottom-12 h-[calc(100%+6rem)] w-full transform-gpu"
        >
          <Image
            src="/home.jpg"
            alt="Modern luxury real estate architecture"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </motion.div>

        <div className="absolute inset-0 bg-black/40" />

        {/* Text Container: Left on Mobile, Centered and Scaled on Desktop */}
        <div className="relative z-10 flex flex-col items-start max-w-xl md:mx-auto md:max-w-3xl md:items-center md:text-center">
          <h2 className="font-display text-3xl font-bold leading-tight tracking-tight lg:text-5xl">
            Looking for your dream home?
          </h2>
          <p className="pt-1 w-52 md:w-full md:max-w-xl text-sm text-slate-200 sm:text-base md:text-lg md:pt-3">
            Let's help you find the perfect location that fits your lifestyle
          </p>
          <div className="pt-10">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="button"
              className="flex items-center gap-2 rounded-full bg-orange-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-700 md:px-8 md:py-4 md:text-base"
            >
              Connect With Us
              <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="bg-black">
        <div className="mx-auto max-w-7xl md:max-w-full px-6 py-12 md:px-12 lg:px-20 lg:py-16">
          <div className="grid grid-cols-1 gap-10 md:flex md:justify-between">
            <div className="h-20 w-52 md:w-64 md:h-20">
              <Link href="/">
                <img
                  src="/homeland.png"
                  alt="Homeland Prestige Logo"
                  className="h-full w-full object-cover"
                />
              </Link>
            </div>

            {/* Mapped Navigation Links */}
            <div className="grid grid-cols-2 gap-8 md:gap-14 md:grid-cols-3">
              {FOOTER_SECTIONS.map((section) => (
                <div key={section.title}>
                  <h4 className="text-sm font-display font-semibold text-white">
                    {section.title}
                  </h4>
                  <ul className="mt-4 space-y-3 text-xs sm:text-sm text-neutral-300">
                    {section.links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="transition hover:text-white"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-700 px-6 py-6 text-center text-xs text-neutral-300">
          © {new Date().getFullYear()} Homeland Prestige - All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
