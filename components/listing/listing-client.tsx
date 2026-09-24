"use client";

import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ImageCard from "../ui/image-card";

// Data Definitions
const FEATURED_SECTIONS = [
  {
    id: "homes",
    title: "Featured Homes",
    items: [
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
    ],
  },
  {
    id: "estates",
    title: "Featured Estates",
    items: [
      {
        id: "estate-2",
        imageSrc: "/es2.jpg",
        daysAgo: "25d ago",
        status: "New Phase",
        views: 280,
        likes: 31,
        price: "₦500,000,000",
        unitsAvailable: 8,
        area: "12,000 sqft",
        location: "Maitama, Abuja, FCT",
        title: "Crown Heights Residency",
        propertyType: "estate" as const,
      },
      {
        id: "estate-3",
        imageSrc: "/es3.jpg",
        daysAgo: "45d ago",
        status: "For Sale",
        views: 195,
        likes: 24,
        price: "₦280,000,000",
        unitsAvailable: 20,
        area: "8,500 sqft",
        location: "Peter Odili Road, Port Harcourt, Rivers",
        title: "Oakwood Gardens & Smart Villas",
        propertyType: "estate" as const,
      },
      {
        id: "estate-4",
        imageSrc: "/es4.jpg",
        daysAgo: "45d ago",
        status: "For Sale",
        views: 195,
        likes: 24,
        price: "₦280,000,000",
        unitsAvailable: 20,
        area: "8,500 sqft",
        location: "Peter Odili Road, Port Harcourt, Rivers",
        title: "Oakwood Gardens & Smart Villas",
        propertyType: "estate" as const,
      },
      {
        id: "estate-5",
        imageSrc: "/es5.jpg",
        daysAgo: "60d ago",
        status: "Selling Fast",
        views: 410,
        likes: 58,
        price: "₦420,000,000",
        unitsAvailable: 5,
        area: "10,000 sqft",
        location: "Ikoyi, Lagos State",
        title: "The Haven Waterfront Estates",
        propertyType: "estate" as const,
      },
    ],
  },
  {
    id: "lands",
    title: "Featured Land",
    items: [
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
    ],
  },
];

// Reusable Category Slider Component
function PropertyCategorySection({
  title,
  items,
}: {
  title: string;
  items: Array<Record<string, any>>;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    const newIndex = Math.round(scrollLeft / (clientWidth * 0.8));
    setActiveIndex(Math.min(Math.max(newIndex, 0), items.length - 1));
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
    if (activeIndex < items.length - 1) {
      scrollToSlide(activeIndex + 1);
    }
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      scrollToSlide(activeIndex - 1);
    }
  };

  return (
    <section className="w-full py-8 sm:py-12 px-4 sm:px-8 lg:px-12 font-sans border-b border-neutral-100 last:border-b-0">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-6 sm:mb-8 flex items-center justify-between">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-neutral-900">
              {title}
            </h2>
            <div className="mt-2 h-1 w-12 rounded-full bg-[#ff5500]" />
          </div>
        </div>

        {/* Responsive Grid / Horizontal Swipe Slider */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-4 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory scrollbar-none sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-6 sm:overflow-visible sm:pb-0"
        >
          {items.map((item) => (
            <div
              key={item.id}
              className="w-[85vw] max-w-[320px] shrink-0 snap-center sm:w-auto sm:max-w-none sm:shrink"
            >
              <ImageCard {...item} />
            </div>
          ))}
          {/* Mobile Navigation Controls */}
        </div>
        <div className="flex md:hidden justify-end items-center gap-2">
          <button
            onClick={handlePrev}
            disabled={activeIndex === 0}
            aria-label="Previous item"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-800 shadow-xs transition-all hover:bg-neutral-100 disabled:opacity-30 disabled:pointer-events-none active:scale-95"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={handleNext}
            disabled={activeIndex === items.length - 1}
            aria-label="Next item"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-800 shadow-xs transition-all hover:bg-neutral-100 disabled:opacity-30 disabled:pointer-events-none active:scale-95"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

// Main Page Container Export
export default function ListingClient() {
  return (
    <main className="w-full bg-white py-4">
      {FEATURED_SECTIONS.map((section) => (
        <PropertyCategorySection
          key={section.id}
          title={section.title}
          items={section.items}
        />
      ))}
    </main>
  );
}
