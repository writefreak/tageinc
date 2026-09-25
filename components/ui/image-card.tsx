"use client";

import { useState } from "react";
import Image from "next/image";
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
} from "lucide-react";
import Link from "next/link";

export type PropertyType = "home" | "land" | "estate";

export interface ImageCardProps {
  id?: string;
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
  propertyType?: PropertyType;
  unitsAvailable?: number;
  plots?: number;
  isLiked?: boolean;
  onLikeToggle?: (newLikedState: boolean, newCount: number) => void;
}

export default function ImageCard({
  id,
  imageSrc = "/property-sample.jpg",
  daysAgo = "154d ago",
  status = "For Sale",
  views = 14,
  likes = 3,
  price = "₦6,000,000",
  beds,
  baths,
  area = "179 sqft",
  location = "Isiokpo II, Isiokpo, Rivers",
  title = "A Large 179 Hectares of Land Available",
  propertyType = "land",
  unitsAvailable,
  plots = 1,
  isLiked: initialIsLiked = false,
  onLikeToggle,
}: ImageCardProps) {
  const [liked, setLiked] = useState(initialIsLiked);
  const [likeCount, setLikeCount] = useState(likes);

  const handleLikeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const nextLikedState = !liked;
    const nextCount = nextLikedState ? likeCount + 1 : likeCount - 1;

    setLiked(nextLikedState);
    setLikeCount(nextCount);

    if (onLikeToggle) {
      onLikeToggle(nextLikedState, nextCount);
    }
  };

  // Dynamic primary icon for title row & land plots
  const getPropertyIcon = () => {
    switch (propertyType) {
      case "land":
        return (
          <Flag className="h-4 w-4 shrink-0 text-[#ff5500] stroke-[2.2]" />
        );
      case "estate":
        return (
          <Building2 className="h-4 w-4 shrink-0 text-[#ff5500] stroke-[2.2]" />
        );
      case "home":
      default:
        return (
          <Home className="h-4 w-4 shrink-0 text-[#ff5500] stroke-[2.2]" />
        );
    }
  };

  return (
    <Link href={`/listing/${id}`}>
      <div className="group w-full max-w-sm overflow-hidden rounded-3xl bg-white p-2 shadow-sm border border-neutral-100 font-sans">
        {/* Top Image Frame */}
        <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl">
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
          <div className="absolute bottom-3 left-3 flex items-center gap-2 z-10">
            <div className="flex items-center gap-1.5 rounded-full bg-black/50 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
              <Eye className="h-3.5 w-3.5 stroke-[2.2]" />
              <span>{views}</span>
            </div>

            {/* Interactive Like Button */}
            <button
              type="button"
              onClick={handleLikeClick}
              aria-label={liked ? "Unlike property" : "Like property"}
              className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md transition-all active:scale-90 ${
                liked
                  ? "bg-rose-600/90 text-white"
                  : "bg-black/50 hover:bg-black/70 text-white"
              }`}
            >
              <Heart
                className={`h-3.5 w-3.5 transition-colors ${
                  liked ? "fill-white stroke-white" : "stroke-[2.2]"
                }`}
              />
              <span>{likeCount}</span>
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="px-2 pt-4 pb-2">
          {/* Price */}
          <h3 className="text-xl font-bold font-display tracking-tight text-neutral-900">
            {price}
          </h3>

          {/* Key Features Row */}
          <div className="mt-2.5 font-sans flex items-center gap-4 text-xs font-medium text-neutral-800 flex-wrap">
            {propertyType === "land" && plots !== undefined && (
              <div className="flex items-center gap-1.5">
                <Flag className="h-4 w-4 text-[#ff5500] stroke-[2.2]" />
                <span>
                  {plots} plot{plots > 1 ? "s" : ""}
                </span>
              </div>
            )}

            {area && (
              <div className="flex items-center gap-1.5">
                {propertyType === "land" ? (
                  <Scan className="h-4 w-4 text-[#ff5500] stroke-[2.2]" />
                ) : (
                  <Move className="h-4 w-4 text-[#ff5500] stroke-[2.2]" />
                )}
                <span>{area}</span>
              </div>
            )}

            {propertyType === "home" && beds !== undefined && (
              <div className="flex items-center gap-1.5">
                <Bed className="h-4 w-4 text-[#ff5500] stroke-[2.2]" />
                <span>{beds} Beds</span>
              </div>
            )}

            {propertyType === "home" && baths !== undefined && (
              <div className="flex items-center gap-1.5">
                <Bath className="h-4 w-4 text-[#ff5500] stroke-[2.2]" />
                <span>{baths} Baths</span>
              </div>
            )}

            {propertyType === "estate" && unitsAvailable !== undefined && (
              <div className="flex items-center gap-1.5">
                <Building2 className="h-4 w-4 text-[#ff5500] stroke-[2.2]" />
                <span>{unitsAvailable} Units</span>
              </div>
            )}
          </div>

          {/* Location Row */}
          <div className="mt-2.5 flex items-center gap-2 text-xs text-neutral-800">
            <MapPin className="h-4 w-4 shrink-0 text-[#ff5500] stroke-[2.2]" />
            <span className="truncate">{location}</span>
          </div>

          {/* Title Row */}
          <div className="mt-2 flex items-center gap-2 text-xs font-medium text-neutral-900">
            {getPropertyIcon()}
            <span className="truncate">{title}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
