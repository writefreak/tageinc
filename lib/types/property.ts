export type PropertyType = "home" | "land" | "estate";

export interface Agent {
  id: string;
  name: string;
  avatarUrl: string;
  phone: string;
  email: string;
}

export interface Property {
  id: string;
  title: string;
  status: string;
  daysAgo: string;
  views: number;
  likes: number;
  price: string;
  pricePerNight?: string;
  beds?: number;
  baths?: number;
  area: string;
  location: string;
  propertyType: PropertyType;
  unitsAvailable?: number;
  plots?: number;
  swimmingPools?: number;
  about: string[];
  images: string[];
  agent: Agent;
}
