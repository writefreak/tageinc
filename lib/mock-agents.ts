// No database yet, so this mirrors the same 12 agents defined in
// AgentsSection's SAMPLE_AGENTS (same ids, names, cities, avatars,
// ratings) and fills in the extra profile-page fields (about,
// location, followers, reviews) around that shared data. Keep the
// ids here in sync with SAMPLE_AGENTS if that list ever changes.

import { Agent } from "./types/agents";

const STATE_BY_CITY: Record<string, string> = {
  "Port Harcourt": "Rivers State",
  Abuja: "Federal Capital Territory",
  Lagos: "Lagos State",
  Enugu: "Enugu State",
  Kano: "Kano State",
  Ibadan: "Oyo State",
  "Benin City": "Edo State",
};

interface AgentSeed {
  id: string;
  name: string;
  city: string;
  avatarUrl: string;
  rating: number;
  reviewCount: number;
  phone: string;
}

const AGENT_SEEDS: AgentSeed[] = [
  {
    id: "1",
    name: "Sarah Jenkins",
    city: "Port Harcourt",
    avatarUrl: "/home.jpg",
    rating: 4.9,
    reviewCount: 38,
    phone: "+2348012345678",
  },
  {
    id: "2",
    name: "Alexander Wright",
    city: "Abuja",
    avatarUrl: "/home1.jpg",
    rating: 4.8,
    reviewCount: 29,
    phone: "+2348023456789",
  },
  {
    id: "3",
    name: "Chioma Okonkwo",
    city: "Lagos",
    avatarUrl: "/home2.jpg",
    rating: 5.0,
    reviewCount: 64,
    phone: "+2348034567890",
  },
  {
    id: "4",
    name: "David Adeleke",
    city: "Port Harcourt",
    avatarUrl: "/home3.jpg",
    rating: 4.7,
    reviewCount: 14,
    phone: "+2348045678901",
  },
  {
    id: "5",
    name: "Emeka Nwosu",
    city: "Lagos",
    avatarUrl: "/home.jpg",
    rating: 4.9,
    reviewCount: 52,
    phone: "+2348056789012",
  },
  {
    id: "6",
    name: "Amina Yusuf",
    city: "Abuja",
    avatarUrl: "/home1.jpg",
    rating: 4.6,
    reviewCount: 22,
    phone: "+2348067890123",
  },
  {
    id: "7",
    name: "Blessing Danjuma",
    city: "Port Harcourt",
    avatarUrl: "/home2.jpg",
    rating: 4.8,
    reviewCount: 41,
    phone: "+2348078901234",
  },
  {
    id: "8",
    name: "Tunde Bakare",
    city: "Lagos",
    avatarUrl: "/home3.jpg",
    rating: 5.0,
    reviewCount: 78,
    phone: "+2348089012345",
  },
  {
    id: "9",
    name: "Grace Eze",
    city: "Enugu",
    avatarUrl: "/home.jpg",
    rating: 4.7,
    reviewCount: 19,
    phone: "+2348090123456",
  },
  {
    id: "10",
    name: "Kabir Bello",
    city: "Kano",
    avatarUrl: "/home1.jpg",
    rating: 4.5,
    reviewCount: 16,
    phone: "+2348101234567",
  },
  {
    id: "11",
    name: "Funke Akindele",
    city: "Ibadan",
    avatarUrl: "/home2.jpg",
    rating: 4.9,
    reviewCount: 47,
    phone: "+2348112345678",
  },
  {
    id: "12",
    name: "Osas Ighodaro",
    city: "Benin City",
    avatarUrl: "/home3.jpg",
    rating: 4.8,
    reviewCount: 25,
    phone: "+2348123456789",
  },
];

// Cover banners have no real photos yet, so they cycle through the
// estate photos (es2.jpg - es5.jpg — es1.jpg was never uploaded).
const BANNER_IMAGES = ["/es2.jpg", "/es3.jpg", "/es4.jpg", "/es5.jpg"];

const SAMPLE_COMMENTS = [
  "Very responsive and honest about every property shown to us.",
  "Handled the paperwork end to end and kept us updated the whole way.",
  "Knows the area well and did not waste our time with the wrong fit.",
];

export const MOCK_AGENTS: Agent[] = AGENT_SEEDS.map((seed, index) => {
  const state = STATE_BY_CITY[seed.city] ?? seed.city;
  const otherSeeds = AGENT_SEEDS.filter((other) => other.id !== seed.id);

  return {
    id: seed.id,
    name: seed.name,
    avatarUrl: seed.avatarUrl,
    coverImage: BANNER_IMAGES[index % BANNER_IMAGES.length],
    about: `I help buyers, renters, and investors in ${seed.city} find the right property, and I stay involved from the first viewing through to closing so nothing gets missed along the way.`,
    location: `${seed.city}, ${state}`,
    social: {
      whatsapp: `https://wa.me/${seed.phone.replace("+", "")}`,
      phone: seed.phone,
    },
    followersCount: seed.reviewCount * 4,
    ratingAverage: seed.rating,
    reviewCount: seed.reviewCount,
    followers: otherSeeds.slice(0, 4).map((follower) => ({
      id: `f-${follower.id}`,
      name: follower.name,
      avatarUrl: follower.avatarUrl,
    })),
    reviews: otherSeeds.slice(0, 3).map((reviewer, reviewIndex) => ({
      id: `r-${seed.id}-${reviewer.id}`,
      reviewerName: reviewer.name,
      avatarUrl: reviewer.avatarUrl,
      rating: reviewIndex === 2 ? 4 : 5,
      comment: SAMPLE_COMMENTS[reviewIndex],
      date: "2026-06-01",
    })),
  };
});

export function getAgentById(id: string): Agent | undefined {
  return MOCK_AGENTS.find((agent) => agent.id === id);
}
