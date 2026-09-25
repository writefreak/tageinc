"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Eye,
  Heart,
  Bed,
  Bath,
  MapPin,
  Home,
  Building2,
  Flag,
  Scan,
  Move,
  ChevronLeft,
  ChevronRight,
  Share2,
  Phone,
  MessageSquare,
  Mail,
  User,
  ShieldCheck,
  Waves,
} from "lucide-react";
import { Property } from "@/lib/types/property";

interface ListingProps {
  property: Property;
}

export default function Listing({ property }: ListingProps) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(property.likes);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Mobile Touch Swipe Handlers
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const handleLikeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const nextState = !liked;
    setLiked(nextState);
    setLikeCount(nextState ? likeCount + 1 : likeCount - 1);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === property.images.length - 1 ? 0 : prev + 1,
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? property.images.length - 1 : prev - 1,
    );
  };

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) nextSlide();
    if (distance < -minSwipeDistance) prevSlide();
  };

  const getPropertyIcon = () => {
    switch (property.propertyType) {
      case "land":
        return <Flag className="h-5 w-5 text-white stroke-[2.2]" />;
      case "estate":
        return <Building2 className="h-5 w-5 text-white stroke-[2.2]" />;
      case "home":
      default:
        return <Home className="h-5 w-5 text-white stroke-[2.2]" />;
    }
  };

  return (
    <div className="min-h-screen pb-20 md:pb-32">
      {/* Top Navbar */}
      <header className="sticky top-0 z-30 flex items-center justify-between border-b border-neutral-200/80 bg-white/90 px-4 py-3 backdrop-blur-md md:px-8">
        <Link
          href="/listing"
          className="flex items-center gap-2 text-xs font-semibold text-neutral-700 hover:text-black transition-colors"
        >
          <ChevronLeft className="h-4 w-4 stroke-[2.5]" />
          <span>Back to properties</span>
        </Link>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleLikeClick}
            className={`flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-medium transition-all active:scale-95 ${
              liked
                ? "bg-rose-600 text-white shadow-sm"
                : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
            }`}
          >
            <Heart
              className={`h-3.5 w-3.5 ${
                liked ? "fill-white stroke-white" : "stroke-[2.2]"
              }`}
            />
            <span>{likeCount}</span>
          </button>
          <button
            type="button"
            className="flex items-center gap-1.5 rounded-full bg-neutral-100 px-3.5 py-1.5 text-xs font-medium text-neutral-700 hover:bg-neutral-200"
          >
            <Share2 className="h-3.5 w-3.5 stroke-[2.2]" />
            <span className="hidden sm:inline">Share</span>
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-0 sm:px-6 lg:px-8 pt-0 sm:pt-6">
        {/* MOBILE SLIDER (< lg) */}
        <div className="relative block lg:hidden w-full overflow-hidden bg-black">
          <div
            className="relative aspect-4/3 w-full touch-pan-y"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <Image
              src={property.images[currentSlide]}
              alt={`${property.title} - image ${currentSlide + 1}`}
              fill
              priority
              className="object-cover transition-opacity duration-300"
            />

            {/* Badges */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
              <span className="rounded-full bg-black/60 px-3.5 py-1.5 text-xs font-medium text-white backdrop-blur-md">
                {property.daysAgo}
              </span>
              <span className="rounded-full bg-[#ff5500] px-4 py-1.5 text-xs font-semibold text-white shadow-sm">
                {property.status}
              </span>
            </div>

            <div className="absolute bottom-4 left-4 flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
              <Eye className="h-3.5 w-3.5 stroke-[2.2]" />
              <span>{property.views} views</span>
            </div>

            <div className="absolute bottom-4 right-4 rounded-full bg-black/60 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
              {currentSlide + 1} / {property.images.length}
            </div>

            <button
              onClick={prevSlide}
              aria-label="Previous Image"
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white backdrop-blur-sm active:scale-90"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next Image"
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white backdrop-blur-sm active:scale-90"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Pagination Indicators */}
          <div className="flex items-center justify-center gap-1.5 bg-white py-3">
            {property.images.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  currentSlide === index
                    ? "w-6 bg-[#ff5500]"
                    : "w-2 bg-neutral-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* DESKTOP GALLERY GRID (>= lg) */}
        <div className="hidden lg:grid grid-cols-4 gap-3 rounded-3xl overflow-hidden p-2 bg-white border border-neutral-100 shadow-sm">
          <div className="relative col-span-2 aspect-4/3 overflow-hidden rounded-2xl group">
            <Image
              src={property.images[0]}
              alt={property.title}
              fill
              priority
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4 flex gap-2">
              <span className="rounded-full bg-black/60 px-3.5 py-1.5 text-xs font-medium text-white backdrop-blur-md">
                {property.daysAgo}
              </span>
              <span className="rounded-full bg-[#ff5500] px-4 py-1.5 text-xs font-semibold text-white shadow-sm">
                {property.status}
              </span>
            </div>
          </div>
          <div className="col-span-2 grid grid-cols-2 gap-3">
            {property.images.slice(1, 5).map((img, idx) => (
              <div
                key={idx}
                className="relative aspect-4/3 overflow-hidden rounded-2xl group"
              >
                <Image
                  src={img}
                  alt={`${property.title} gallery thumbnail ${idx + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>

        {/* CONTENT & AGENT GRID */}
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-8 px-4 sm:px-0">
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-3xl bg-white p-6 border border-neutral-100 shadow-sm">
              <div className="flex">
                <div className="bg-orange-600 h-5 text-white uppercase flex items-center text-sm rounded-full px-6 py-4 gap-2">
                  {getPropertyIcon()}
                  <span>{property.propertyType} property</span>
                </div>
              </div>

              <h1 className="mt-2 text-2xl md:text-3xl font-display font-bold text-neutral-900 tracking-tight">
                {property.title}
              </h1>

              <div className="mt-3 flex items-center gap-2 text-sm text-neutral-600">
                <MapPin className="h-4 w-4 shrink-0 text-[#ff5500] stroke-[2.2]" />
                <span>{property.location}</span>
              </div>

              <div className="mt-6 flex flex-wrap items-baseline gap-4 border-t border-neutral-100 pt-6">
                <span className="text-2xl md:text-3xl font-bold font-display text-neutral-900">
                  {property.price}
                </span>
              </div>

              {/* Dynamic Feature Badges */}
              <div className="mt-6 flex items-center gap-6 text-sm font-medium text-neutral-800 flex-wrap rounded-2xl p-4 border border-neutral-100">
                {property.propertyType === "land" &&
                  property.plots !== undefined && (
                    <div className="flex items-center gap-2">
                      <Flag className="h-5 w-5 text-[#ff5500] stroke-[2.2]" />
                      <span>
                        {property.plots} plot{property.plots > 1 ? "s" : ""}
                      </span>
                    </div>
                  )}

                {property.area && (
                  <div className="flex items-center gap-2">
                    {property.propertyType === "land" ? (
                      <Scan className="h-5 w-5 text-[#ff5500] stroke-[2.2]" />
                    ) : (
                      <Move className="h-5 w-5 text-[#ff5500] stroke-[2.2]" />
                    )}
                    <span>{property.area}</span>
                  </div>
                )}

                {property.beds !== undefined && (
                  <div className="flex items-center gap-2">
                    <Bed className="h-5 w-5 text-[#ff5500] stroke-[2.2]" />
                    <span>{property.beds} Beds</span>
                  </div>
                )}

                {property.baths !== undefined && (
                  <div className="flex items-center gap-2">
                    <Bath className="h-5 w-5 text-[#ff5500] stroke-[2.2]" />
                    <span>{property.baths} Baths</span>
                  </div>
                )}

                {property.swimmingPools !== undefined &&
                  property.swimmingPools > 0 && (
                    <div className="flex items-center gap-2">
                      <Waves className="h-5 w-5 text-[#ff5500] stroke-[2.2]" />
                      <span>{property.swimmingPools} Pool</span>
                    </div>
                  )}
              </div>
            </div>

            {/* Description Paragraphs */}
            <div className="rounded-3xl bg-white p-6 border border-neutral-100 shadow-sm space-y-4">
              <h2 className="text-sm md:text-lg font-display font-bold text-neutral-900">
                About this property
              </h2>
              <div className="space-y-3 text-xs md:text-sm font-sans leading-relaxed text-neutral-600">
                {property.about.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>

          {/* AGENT SIDEBAR CARD */}
          <div className="lg:col-span-1">
            <div className="sticky top-20 rounded-3xl bg-white p-6 border border-neutral-100 shadow-sm space-y-6">
              <h2 className="text-sm md:text-base font-bold font-display text-neutral-900">
                Listing Agent
              </h2>

              <div className="flex items-center gap-4">
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl bg-neutral-100 border border-neutral-200 flex items-center justify-center">
                  {property.agent.avatarUrl ? (
                    <Image
                      src={property.agent.avatarUrl}
                      alt={property.agent.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <User className="h-7 w-7 text-neutral-400" />
                  )}
                </div>

                <div>
                  <div className="flex font-display items-center gap-1.5">
                    <h3 className="text-sm md:text-base font-bold text-neutral-900">
                      {property.agent.name}
                    </h3>
                    <ShieldCheck className="h-4 w-4 text-[#ff5500]" />
                  </div>
                  <p className="text-xs text-neutral-500">
                    {property.agent.email}
                  </p>
                </div>
              </div>

              <div className="space-y-3 border-t border-neutral-100 pt-4">
                <a
                  href={`https://wa.me/${property.agent.phone.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center text-white bg-[#ff5500] justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-semibold transition-all hover:bg-orange-600 active:scale-98"
                >
                  <MessageSquare className="h-4 w-4 stroke-[2.2] text-white" />
                  <span>WhatsApp Message</span>
                </a>

                <a
                  href={`mailto:${property.agent.email}`}
                  className="flex w-full items-center justify-center gap-2 rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm font-semibold text-neutral-800 transition-all hover:bg-neutral-50 active:scale-98"
                >
                  <Mail className="h-4 w-4 stroke-[2.2] text-neutral-500" />
                  <span>Send Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
