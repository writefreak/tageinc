"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  Globe,
  Home,
  MapPin,
  MessageCircle,
  Phone,
  Star,
  UserPlus,
  Info,
  Users,
  Building2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Agent } from "@/lib/types/agents";
import { Property } from "@/lib/types/property";
import ImageCard from "../ui/image-card";
import Link from "next/link";

type TabId = "about" | "followers" | "ratings" | "properties";

interface AgentProfileProps {
  agent: Agent;
  properties: Property[];
}

export default function AgentProfile({ agent, properties }: AgentProfileProps) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<TabId>("about");
  const [isFollowing, setIsFollowing] = useState(false);

  const tabs: { id: TabId; label: string; count: number; icon: any }[] = [
    { id: "about", label: "About", count: 0, icon: Info },
    {
      id: "followers",
      label: "Followers",
      count: agent.followersCount,
      icon: Users,
    },
    { id: "ratings", label: "Ratings", count: agent.reviewCount, icon: Star },
    {
      id: "properties",
      label: "Properties",
      count: properties.length,
      icon: Building2,
    },
  ];

  return (
    /* Increased container width to max-w-7xl for wide desktop view */
    <div className="mx-auto max-w-350 md:max-w-6xl px-4 py-16 md:pb-16 md:px-12">
      {/* Back Button */}
      <a
        href="/agents"
        className="flex items-center gap-1 text-neutral-600 pb-7"
      >
        <ChevronLeft className="h-5 w-5" />
        <span>Back</span>
      </a>
      {/* Top Banner Cover */}
      <div className="relative h-50 md:h-100 w-full overflow-hidden rounded-[28px] md:rounded-[36px] bg-orange-400 shadow-xs">
        <Image
          src={agent.coverImage}
          alt={`${agent.name} cover photo`}
          fill
          priority
          className="object-cover"
          sizes="(max-width: 1536px) 100vw, 1400px"
        />
      </div>

      {/* Profile Header Info Row */}
      <div className="relative px-2 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4 pb-2">
          {/* Avatar with White Squircle Border */}
          <div className="-mt-14 md:-mt-20 relative z-10 h-20 w-20 md:h-28 md:w-28 shrink-0 overflow-hidden rounded-2xl md:rounded-3xl border-4 border-white bg-white shadow-md sm:h-36 sm:w-36 sm:rounded-[38px]">
            <div className="relative h-full w-full">
              <Image
                src={agent.avatarUrl}
                alt={agent.name}
                fill
                className="object-cover"
                sizes="144px"
              />
            </div>
          </div>
        </div>

        {/* Name + Action Buttons */}
        <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-neutral-900">
            {agent.name}
          </h1>

          <div className="flex items-center gap-3">
            {agent.social.whatsapp && (
              <a
                href={agent.social.whatsapp}
                className="flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-6 py-2.5 text-xs font-semibold text-neutral-800 shadow-2xs transition hover:bg-neutral-50 active:scale-95"
              >
                <MessageCircle className="h-3.5 w-3.5" />
                Message
              </a>
            )}
            <button
              type="button"
              onClick={() => setIsFollowing((v) => !v)}
              className={`flex items-center gap-2 rounded-full px-6 py-2.5 text-xs font-semibold shadow-2xs transition active:scale-95 ${
                isFollowing
                  ? "bg-green-800 text-white"
                  : "bg-orange-600 text-white hover:bg-orange-500"
              }`}
            >
              <UserPlus className="h-3.5 w-3.5" />
              {isFollowing ? "Following" : "Follow"}
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Box Container with Fixed Height & Wide Desktop Width */}
      <div className="md:pt-8 flex font-display flex-col h-140 rounded-4xl p-4">
        {/* Navigation Tabs - Horizontally scrollable on mobile without scrollbar */}
        <div className="flex shrink-0 gap-2.5 md:pt-4 pb-4 overflow-x-auto whitespace-nowrap [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`flex shrink-0 items-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold transition ${
                  isActive
                    ? "bg-orange-200/60 text-orange-800 ring-1 ring-orange-300/50"
                    : "text-neutral-600 bg-neutral-100 hover:text-neutral-900"
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
                <span>{tab.label}</span>
                {tab.id !== "about" && (
                  <span className="text-neutral-500 font-normal">
                    · {tab.count}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Tab Inner Card with Fixed Height & Scrollable Content — scrollbar hidden, scroll still works */}
        <div className="flex-1 overflow-y-auto rounded-2xl bg-white p-6 sm:p-8 shadow-sm [-ms-overflow-style:none] scrollbar-none [&::-webkit-scrollbar]:hidden">
          {activeTab === "about" && (
            <div className="flex h-full flex-col justify-between space-y-6">
              <p className="text-sm leading-relaxed text-neutral-700 font-normal max-w-3xl">
                {agent.about}
              </p>
              <div className="flex items-center justify-between border-t border-neutral-100 pt-6 text-sm">
                <span className="flex items-center gap-2 font-semibold text-rose-500">
                  <MapPin className="h-4 w-4" />
                  Location
                </span>
                <span className="font-semibold text-neutral-800">
                  {agent.location}
                </span>
              </div>
            </div>
          )}

          {activeTab === "followers" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {agent.followers.map((follower) => (
                <div
                  key={follower.id}
                  className="flex items-center gap-3 p-2 rounded-2xl bg-white border border-neutral-300"
                >
                  <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-xl">
                    <Image
                      src={follower.avatarUrl}
                      alt={follower.name}
                      fill
                      className="object-cover"
                      sizes="40px"
                    />
                  </div>
                  <span className="text-sm font-semibold text-neutral-800">
                    {follower.name}
                  </span>
                </div>
              ))}
            </div>
          )}

          {activeTab === "ratings" && (
            <div>
              <div className="flex items-center gap-2 border-b border-neutral-100 pb-4">
                <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                <span className="font-display text-lg font-bold text-neutral-900">
                  {agent.ratingAverage.toFixed(1)}
                </span>
                <span className="text-sm text-neutral-500">
                  ({agent.reviewCount} reviews)
                </span>
              </div>

              <div className="mt-4 space-y-6">
                {agent.reviews.map((review) => (
                  <div key={review.id} className="flex gap-4">
                    <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full bg-neutral-200">
                      <Image
                        src={review.avatarUrl}
                        alt={review.reviewerName}
                        fill
                        className="object-cover"
                        sizes="40px"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-neutral-900">
                          {review.reviewerName}
                        </span>
                        <span className="flex items-center gap-0.5">
                          {Array.from({ length: 5 }).map((_, index) => (
                            <Star
                              key={index}
                              className={`h-3.5 w-3.5 ${
                                index < review.rating
                                  ? "fill-amber-400 text-amber-400"
                                  : "fill-neutral-200 text-neutral-200"
                              }`}
                            />
                          ))}
                        </span>
                      </div>
                      <p className="mt-1 text-xs md:text-sm leading-relaxed text-neutral-600 max-w-4xl">
                        {review.comment}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "properties" && (
            <div>
              {properties.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-50 text-orange-600 mb-4 shadow-xs">
                    <Building2 className="h-8 w-8" />
                  </div>
                  <h3 className="text-base md:text-lg font-semibold text-neutral-900">
                    No properties listed yet
                  </h3>
                  <p className="pt-1 text-xs md:text-sm text-neutral-500 max-w-sm">
                    This agent currently has no active property listings
                    available.
                  </p>
                  <Link
                    href="/listing"
                    className="mt-5 inline-flex items-center gap-2 rounded-full bg-orange-600 px-6 py-2.5 text-xs font-semibold text-white shadow-2xs transition hover:bg-orange-500 active:scale-95"
                  >
                    Browse other properties
                  </Link>
                </div>
              ) : (
                /* Updated to 3 columns on large screens to fill desktop width */
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {properties.map((property) => (
                    <ImageCard
                      key={property.id}
                      id={property.id}
                      imageSrc={property.images[0]}
                      daysAgo={property.daysAgo}
                      status={property.status}
                      views={property.views}
                      likes={property.likes}
                      price={property.price}
                      beds={property.beds}
                      baths={property.baths}
                      area={property.area}
                      location={property.location}
                      title={property.title}
                      propertyType={property.propertyType}
                      unitsAvailable={property.unitsAvailable}
                      plots={property.plots}
                    />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
