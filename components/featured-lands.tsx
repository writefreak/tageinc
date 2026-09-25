"use client";

import { useState, useRef } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import ImageCard from "./ui/image-card";

const FEATURED_LANDS = [
  {
    id: "land-1",
    imageSrc: "/lan1.jpg",
    daysAgo: "154d ago",
    status: "For Sale",
    views: 14,
    likes: 3,
    price: "₦6,000,000",
    plots: 1,
    area: "179 sqft",
    location: "Isiokpo II, Isiokpo, Rivers",
    title: "A Large 179 Hectares of Land Available",
    propertyType: "land" as const,
  },
  {
    id: "land-2",
    imageSrc: "/lan2.jpg",
    daysAgo: "80d ago",
    status: "For Sale",
    views: 95,
    likes: 12,
    price: "₦15,000,000",
    plots: 2,
    area: "900 sqft",
    location: "Greater Port Harcourt, Rivers",
    title: "Dry Commercial Land Facing Express",
    propertyType: "land" as const,
  },
  {
    id: "land-3",
    imageSrc: "/lan3.jpg",
    daysAgo: "40d ago",
    status: "Selling Fast",
    views: 142,
    likes: 18,
    price: "₦35,000,000",
    plots: 4,
    area: "1,800 sqft",
    location: "Airport Road, Port Harcourt, Rivers",
    title: "Prime Residential Layout plots",
    propertyType: "land" as const,
  },
  {
    id: "land-4",
    imageSrc: "/lan4.jpg",
    daysAgo: "12d ago",
    status: "For Sale",
    views: 210,
    likes: 29,
    price: "₦85,000,000",
    plots: 10,
    area: "5,000 sqft",
    location: "Eneka, Port Harcourt, Rivers State",
    title: "10 Plots of Fenced Dry Land with C of O",
    propertyType: "land" as const,
  },
];

export default function FeaturedLandsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Sync mobile active slide index when user swipes manually
  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    const newIndex = Math.round(scrollLeft / (clientWidth * 0.8));
    setActiveIndex(Math.min(Math.max(newIndex, 0), FEATURED_LANDS.length - 1));
  };

  const scrollToSlide = (index: number) => {
    if (!scrollRef.current) return;
    const targetCard = scrollRef.current.children[index] as HTMLElement;
    if (targetCard) {
      targetCard.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
      setActiveIndex(index);
    }
  };

  const handleNext = () => {
    if (activeIndex < FEATURED_LANDS.length - 1) {
      scrollToSlide(activeIndex + 1);
    }
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      scrollToSlide(activeIndex - 1);
    }
  };

  return (
    <section className="w-full py-12 sm:py-16 px-4 sm:px-8 lg:px-12 font-sans">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-neutral-900">
              Featured Land
            </h2>
            <div className="mt-2.5 h-1 w-12 rounded-full bg-[#ff5500]" />
          </div>

          {/* Explore More Button */}
          <button
            type="button"
            className="group hidden md:flex items-center gap-2 rounded-full bg-orange-600 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white transition-all hover:bg-[#ff5500] active:scale-95 shadow-sm"
          >
            <span>Explore More</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Cards Grid / Mobile Horizontal Slider */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-4 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory scrollbar-none sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-6 sm:overflow-visible sm:pb-0"
        >
          {FEATURED_LANDS.map((land) => (
            <div
              key={land.id}
              className="w-[85vw] max-w-[320px] shrink-0 snap-center sm:w-auto sm:max-w-none sm:shrink"
            >
              <ImageCard {...land} />
            </div>
          ))}
        </div>

        {/* Mobile-Only Navigation Controls Header */}
        <div className="mb-4 flex md:hidden items-center justify-between">
          <button
            type="button"
            className="group flex md:hidden font-display items-center gap-2 rounded-full bg-orange-600 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white transition-all hover:bg-[#ff5500] active:scale-95 shadow-sm"
          >
            <span>Explore More</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              disabled={activeIndex === 0}
              aria-label="Previous land property"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-800 shadow-xs transition-all hover:bg-neutral-100 disabled:opacity-30 disabled:pointer-events-none active:scale-95"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={handleNext}
              disabled={activeIndex === FEATURED_LANDS.length - 1}
              aria-label="Next land property"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-800 shadow-xs transition-all hover:bg-neutral-100 disabled:opacity-30 disabled:pointer-events-none active:scale-95"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
