"use client";

import { useState, useRef, useEffect } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import ImageCard from "./ui/image-card";

const FEATURED_HOMES = [
  {
    id: "home-1",
    imageSrc: "/home.jpg",
    daysAgo: "418d ago",
    status: "For Sale",
    views: 128,
    likes: 16,
    price: "₦185,000,000",
    beds: 4,
    baths: 4,
    area: "100 sqft",
    location: "Worji, Port Harcourt, Rivers",
    title: "4 Bedroom Duplex with BQ",
  },
  {
    id: "home-2",
    imageSrc: "/home2.jpg",
    daysAgo: "404d ago",
    status: "For Rent",
    views: 119,
    likes: 13,
    price: "₦22,000,000",
    beds: 4,
    baths: 4,
    area: "N/A sqft",
    location: "Abuja, Federal Capital Territory",
    title: "Luxury Serviced Apartment",
  },
  {
    id: "home-3",
    imageSrc: "/home3.jpg",
    daysAgo: "117d ago",
    status: "For Sale",
    views: 46,
    likes: 7,
    price: "₦480,000,000",
    beds: 4,
    baths: 4,
    area: "100 sqft",
    location: "Peter Odili Road, Port-Harcourt, Rivers State",
    title: "FURNISHED 4BEDROOM DUPLEX FOR...",
  },
  {
    id: "home-4",
    imageSrc: "/home4.jpg",
    daysAgo: "99d ago",
    status: "For Sale",
    views: 46,
    likes: 5,
    price: "₦280,000,000",
    beds: 4,
    baths: 4,
    area: "470 sqft",
    location: "Sars Road, Alozo, Rivers State",
    title: "EXQUISITELY BUILT 4 BEDROOM...",
  },
];

export default function FeaturedHomesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Sync mobile active slide index when user swipes manually
  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    const newIndex = Math.round(scrollLeft / (clientWidth * 0.8));
    setActiveIndex(Math.min(Math.max(newIndex, 0), FEATURED_HOMES.length - 1));
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
    if (activeIndex < FEATURED_HOMES.length - 1) {
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
              Featured Homes
            </h2>
            <div className="mt-2.5 h-1 w-12 rounded-full bg-[#ff5500]" />
          </div>

          {/* Explore More Button */}
          <button
            type="button"
            className="group font-display hidden md:flex items-center gap-2 rounded-full bg-orange-600 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white transition-all hover:bg-[#ff5500] active:scale-95 shadow-sm"
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
          {FEATURED_HOMES.map((home) => (
            <div
              key={home.id}
              className="w-[85vw] max-w-[320px] shrink-0 snap-center sm:w-auto sm:max-w-none sm:shrink"
            >
              <ImageCard {...home} />
            </div>
          ))}
        </div>

        {/* Mobile-Only Navigation Controls Header */}
        <div className="mb-4 flex md:hidden items-center justify-between">
          <button
            type="button"
            className="group font-display flex md:hidden items-center gap-2 rounded-full bg-orange-600 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white transition-all hover:bg-[#ff5500] active:scale-95 shadow-sm"
          >
            <span>Explore More</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              disabled={activeIndex === 0}
              aria-label="Previous property"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-800 shadow-xs transition-all hover:bg-neutral-100 disabled:opacity-30 disabled:pointer-events-none active:scale-95"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={handleNext}
              disabled={activeIndex === FEATURED_HOMES.length - 1}
              aria-label="Next property"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-800 shadow-xs transition-all hover:bg-neutral-100 disabled:opacity-30 disabled:pointer-events-none active:scale-95"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Mobile Pagination Dot Bar */}
      </div>
    </section>
  );
}
