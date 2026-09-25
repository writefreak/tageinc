// No database yet, so the gallery below repeats the three sample
// photos (es1, es2, es3) to stand in for a fuller set of listing
// images. Swap this array for a real fetch once listings are wired

import { Property } from "./types/property";

// up to storage.
const GALLERY_IMAGES = [
  "/home1.jpg",
  "/es2.jpg",
  "/es3.jpg",
  "/es2.jpg",
  "/home2.jpg",
  "/home3.jpg",
  "/home4.jpg",
  "/home5.jpg",
];

export const MOCK_PROPERTIES: Property[] = [
  {
    id: "1",
    slug: "panoramic-glass-residence",
    title: "Panoramic Glass Residence",
    status: "For Sale",
    daysAgo: "154d ago",
    views: 14,
    likes: 3,
    price: "₦6,000,000",
    pricePerNight: "$90",
    beds: 5,
    baths: 2,
    area: "900 m²",
    location: "45 Panoramic Avenue, Sydney, NSW, Australia",
    propertyType: "home",
    swimmingPools: 1,
    about: [
      "This modern 900 m² home with five rooms, two bathrooms, and a private swimming pool is perfectly suited for comfortable family living.",
      "Spacious, bright interiors and a well kept garden provide a sense of coziness and tranquility.",
    ],
    images: GALLERY_IMAGES,
    agent: {
      id: "a1",
      name: "Sarah Jenkins",
      avatarUrl: "/home.jpg",
      phone: "+2348012345678",
      email: "sarah.jenkins@example.com",
    },
  },
];

export function getPropertyById(id: string): Property | undefined {
  return MOCK_PROPERTIES.find((property) => property.id === id);
}
