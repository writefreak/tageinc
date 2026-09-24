import FeaturedHomesSection from "@/components/featured-homes";
import ListingClient from "@/components/listing/listing-client";
import ListingHero from "@/components/listing/listing-hero";
import React from "react";

const page = () => {
  return (
    <div>
      <ListingHero />
      <ListingClient />
    </div>
  );
};

export default page;
