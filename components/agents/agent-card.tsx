"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Star, Building2, Phone, Mail } from "lucide-react";

interface Agent {
  id: string;
  name: string;
  city: string;
  avatarUrl: string;
  listingsCount: number;
  rating: number;
  reviewCount: number;
  joinedDate: string; // ISO string for date sorting
  email: string;
  phone: string;
}

interface AgentCardProps {
  name: string;
  city: string;
  avatarUrl: string;
  listingsCount?: number;
  rating?: number;
  reviewCount?: number;
  phone?: string;
  email?: string;
  agent?: Agent;
  onContactClick?: () => void;
}

export default function AgentCard({
  name,
  city,
  avatarUrl,
  listingsCount = 24,
  rating = 4.9,
  reviewCount = 38,
  phone,
  email,
  onContactClick,
}: AgentCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="group relative w-full max-w-sm rounded-3xl border border-slate-200/80 bg-white p-5 shadow-sm transition-all hover:shadow-md"
    >
      {/* Top Header Section */}
      <div className="flex items-center gap-4">
        {/* Compact Square Image Container */}
        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl border border-slate-100 bg-slate-100 shadow-inner">
          <Image
            src={avatarUrl}
            alt={name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Identity Details */}
        <div className="flex min-w-0 flex-1 flex-col gap-1">
          <div className="flex items-center justify-between gap-2">
            <h3 className="truncate font-display text-lg font-bold text-slate-900 transition-colors group-hover:text-orange-600">
              {name}
            </h3>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-slate-500">
            <MapPin className="h-3.5 w-3.5 shrink-0 text-orange-500" />
            <span className="truncate">{city}</span>
          </div>

          {/* Rating Pill */}
          <div className="mt-0.5 flex items-center gap-1">
            <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
            <span className="text-xs font-semibold text-slate-800">
              {rating}
            </span>
            <span className="text-[11px] text-slate-400">({reviewCount})</span>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="my-4 h-px w-full bg-slate-100" />

      {/* Stats Grid */}

      <div className="flex items-center gap-2.5">
        <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
          <Building2 className="h-4 w-4" />
        </div>
        <div className="">
          <span className="text-sm text-neutral-600">
            {listingsCount} Listings Active
          </span>
        </div>
      </div>
    </motion.div>
  );
}
