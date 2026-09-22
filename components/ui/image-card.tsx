"use client";

import Image from "next/image";
import { Eye, Heart, Bed, Bath, Move, MapPin, Home } from "lucide-react";

export interface ImageCardProps {
  imageSrc?: string;
  daysAgo?: string;
  status?: string;
  views?: number;
  likes?: number;
  price?: string;
  beds?: number;
  baths?: number;
  area?: string;
  location?: string;
  title?: string;
}

export default function ImageCard({
  imageSrc = "/property-sample.jpg",
  daysAgo = "418d ago",
  status = "For Sale",
  views = 128,
  likes = 16,
  price = "₦185,000,000",
  beds = 4,
  baths = 4,
  area = "100 sqft",
  location = "Worji, Port Harcourt, Rivers",
  title = "4 Bedroom Duplex with BQ",
}: ImageCardProps) {
  return (
    <div className="group w-full max-w-sm overflow-hidden rounded-2xl bg-white p-3 shadow-sm border border-neutral-100 font-sans">
      {/* Top Image Frame */}
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
          <span className="rounded-full bg-black/50 px-3.5 py-1.5 text-xs font-medium text-white backdrop-blur-md">
            {daysAgo}
          </span>
          <span className="rounded-full bg-[#ff5500] px-4 py-1.5 text-xs font-semibold text-white shadow-sm">
            {status}
          </span>
        </div>

        {/* Bottom Badges */}
        <div className="absolute bottom-3 left-3 flex items-center gap-2">
          <div className="flex items-center gap-1.5 rounded-full bg-black/50 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
            <Eye className="h-3.5 w-3.5 stroke-[2.2]" />
            <span>{views}</span>
          </div>
          <div className="flex items-center gap-1.5 rounded-full bg-black/50 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
            <Heart className="h-3.5 w-3.5 stroke-[2.2]" />
            <span>{likes}</span>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="px-2 pt-4 pb-2">
        {/* Price */}
        <h3 className="text-2xl font-bold tracking-tight text-neutral-900">
          {price}
        </h3>

        {/* Key Features Row */}
        <div className="mt-2.5 flex items-center gap-4 text-xs font-medium text-neutral-800">
          <div className="flex items-center gap-1.5">
            <Move className="h-4 w-4 text-[#ff5500] stroke-[2.2]" />
            <span>{area}</span>
          </div>
        </div>

        {/* Location Row */}
        <div className="mt-2.5 flex items-center gap-2 text-xs text-neutral-800">
          <MapPin className="h-4 w-4 shrink-0 text-[#ff5500] stroke-[2.2]" />
          <span className="truncate">{location}</span>
        </div>

        {/* Title Row */}
        <div className="mt-2 flex items-center gap-2 text-xs font-medium text-neutral-900">
          <Home className="h-4 w-4 shrink-0 text-[#ff5500] stroke-[2.2]" />
          <span className="truncate">{title}</span>
        </div>
      </div>
    </div>
  );
}
