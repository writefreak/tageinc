"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import AgentCard from "./agent-card";

interface Agent {
  id: string;
  name: string;
  city: string;
  avatarUrl: string;
  listingsCount: number;
  rating: number;
  reviewCount: number;
  joinedDate: string;
  email: string;
  phone: string;
}

const SAMPLE_AGENTS: Agent[] = [
  {
    id: "1",
    name: "Sarah Jenkins",
    city: "Port Harcourt",
    avatarUrl: "/home.jpg",
    listingsCount: 24,
    rating: 4.9,
    reviewCount: 38,
    joinedDate: "2024-01-15",
    email: "sarah.jenkins@example.com",
    phone: "+2348012345678",
  },
  {
    id: "2",
    name: "Alexander Wright",
    city: "Abuja",
    avatarUrl: "/home1.jpg",
    listingsCount: 18,
    rating: 4.8,
    reviewCount: 29,
    joinedDate: "2022-06-10",
    email: "alex.wright@example.com",
    phone: "+2348023456789",
  },
  {
    id: "3",
    name: "Chioma Okonkwo",
    city: "Lagos",
    avatarUrl: "/home2.jpg",
    listingsCount: 42,
    rating: 5.0,
    reviewCount: 64,
    joinedDate: "2023-11-20",
    email: "chioma.okonkwo@example.com",
    phone: "+2348034567890",
  },
  {
    id: "4",
    name: "David Adeleke",
    city: "Port Harcourt",
    avatarUrl: "/home3.jpg",
    listingsCount: 11,
    rating: 4.7,
    reviewCount: 14,
    joinedDate: "2021-03-05",
    email: "david.adeleke@example.com",
    phone: "+2348045678901",
  },
  {
    id: "5",
    name: "Emeka Nwosu",
    city: "Lagos",
    avatarUrl: "/home.jpg",
    listingsCount: 31,
    rating: 4.9,
    reviewCount: 52,
    joinedDate: "2023-04-12",
    email: "emeka.nwosu@example.com",
    phone: "+2348056789012",
  },
  {
    id: "6",
    name: "Amina Yusuf",
    city: "Abuja",
    avatarUrl: "/home1.jpg",
    listingsCount: 15,
    rating: 4.6,
    reviewCount: 22,
    joinedDate: "2022-09-18",
    email: "amina.yusuf@example.com",
    phone: "+2348067890123",
  },
  {
    id: "7",
    name: "Blessing Danjuma",
    city: "Port Harcourt",
    avatarUrl: "/home2.jpg",
    listingsCount: 27,
    rating: 4.8,
    reviewCount: 41,
    joinedDate: "2023-01-22",
    email: "blessing.danjuma@example.com",
    phone: "+2348078901234",
  },
  {
    id: "8",
    name: "Tunde Bakare",
    city: "Lagos",
    avatarUrl: "/home3.jpg",
    listingsCount: 39,
    rating: 5.0,
    reviewCount: 78,
    joinedDate: "2020-11-04",
    email: "tunde.bakare@example.com",
    phone: "+2348089012345",
  },
  {
    id: "9",
    name: "Grace Eze",
    city: "Enugu",
    avatarUrl: "/home.jpg",
    listingsCount: 14,
    rating: 4.7,
    reviewCount: 19,
    joinedDate: "2023-08-30",
    email: "grace.eze@example.com",
    phone: "+2348090123456",
  },
  {
    id: "10",
    name: "Kabir Bello",
    city: "Kano",
    avatarUrl: "/home1.jpg",
    listingsCount: 20,
    rating: 4.5,
    reviewCount: 16,
    joinedDate: "2022-02-14",
    email: "kabir.bello@example.com",
    phone: "+2348101234567",
  },
  {
    id: "11",
    name: "Funke Akindele",
    city: "Ibadan",
    avatarUrl: "/home2.jpg",
    listingsCount: 29,
    rating: 4.9,
    reviewCount: 47,
    joinedDate: "2021-07-19",
    email: "funke.akindele@example.com",
    phone: "+2348112345678",
  },
  {
    id: "12",
    name: "Osas Ighodaro",
    city: "Benin City",
    avatarUrl: "/home3.jpg",
    listingsCount: 16,
    rating: 4.8,
    reviewCount: 25,
    joinedDate: "2023-05-11",
    email: "osas.ighodaro@example.com",
    phone: "+2348123456789",
  },
];

export default function AgentsSection() {
  const [showAll, setShowAll] = useState(false);

  const handleContactClick = (phone?: string) => {
    if (phone) {
      window.location.href = `tel:${phone}`;
    }
  };

  return (
    <section className="w-full bg-white py-16 px-4 sm:px-8 lg:px-12 font-sans">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col gap-4">
          <div>
            <h2 className="mt-1 font-display text-2xl font-bold text-black md:text-4xl">
              Meet Our Agents
            </h2>
            <div className="mt-2 h-1 w-12 rounded-full bg-[#ff5500]" />
          </div>
          <p className="max-w-md text-sm text-neutral-600">
            We work with credible and experienced professionals that help you
            discover and secure your ideal property.
          </p>
        </div>

        {/* Agents Grid */}
        <div className="grid grid-cols-1 pt-10 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
          {SAMPLE_AGENTS.map((agent, index) => {
            const isHiddenOnMobile = !showAll && index >= 6;
            return (
              <div
                key={agent.id}
                className={`w-full max-w-sm ${isHiddenOnMobile ? "hidden sm:block" : "block"}`}
              >
                <AgentCard
                  name={agent.name}
                  city={agent.city}
                  avatarUrl={agent.avatarUrl}
                  listingsCount={agent.listingsCount}
                  rating={agent.rating}
                  reviewCount={agent.reviewCount}
                  phone={agent.phone}
                  email={agent.email}
                  onContactClick={() => handleContactClick(agent.phone)}
                />
              </div>
            );
          })}
        </div>

        {/* Mobile See More / See Less Trigger */}
        <div className="mt-8 flex justify-center sm:hidden">
          <button
            type="button"
            onClick={() => setShowAll(!showAll)}
            className="flex items-center gap-2 rounded-full bg-orange-600 px-6 py-2.5 text-xs font-semibold text-white transition"
          >
            {showAll ? (
              <>
                See Less <ChevronUp className="h-4 w-4" />
              </>
            ) : (
              <>
                See More Agents ({SAMPLE_AGENTS.length - 6} More){" "}
                <ChevronDown className="h-4 w-4" />
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
