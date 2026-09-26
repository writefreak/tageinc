import React from "react";
import { Home, Users, LayoutDashboard, Rocket } from "lucide-react";

export default function WhyListSection() {
  const features = [
    {
      icon: Home,
      title: "Showcase Your Property",
      description:
        "Present your apartments, homes, or lands with maximum care to thousands of verified buyers and renters worldwide.",
    },
    {
      icon: Users,
      title: "Connect With Genuine Clients",
      description:
        "Reach verified, high-intent buyers and tenants who receive dedicated support throughout their property search.",
    },
    {
      icon: LayoutDashboard,
      title: "Simplify Property Management",
      description:
        "Easily list, update, and manage all your properties with full transparency from a single, secure dashboard.",
    },
    {
      icon: Rocket,
      title: "Boost Your Visibility",
      description:
        "Get featured on our homepage and benefit from tailored campaigns that give your listing the special attention it deserves.",
    },
  ];

  return (
    <section className="bg-white py-16 md:pt-22 md:pb-32 px-4 font-sans">
      <div className="mx-auto max-w-6xl">
        {/* Header Section highlighting Care & Support */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold font-display tracking-tight text-neutral-900">
            Why List on Homeland Premier?
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
            Whether you're a homeowner, landlord, or real estate agent, Homeland
            Premier provides a trusted platform built with personal care and
            dedicated support to showcase your properties to the right audience.
          </p>
        </div>

        {/* 2x2 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white border border-neutral-100 rounded-3xl p-8 shadow-xs hover:shadow-md transition-shadow duration-300 flex flex-col justify-start items-start text-left space-y-4"
              >
                {/* Rounded Icon Badge */}
                <div className="flex items-center justify-center h-12 w-12 rounded-2xl bg-orange-100/70 text-[#ff5500]">
                  <Icon className="h-6 w-6 stroke-[2.2]" />
                </div>

                {/* Card Title */}
                <h3 className="text-base md:text-xl font-bold font-display tracking-tight text-black">
                  {feature.title}
                </h3>

                {/* Card Body Text */}
                <p className="text-xs md:text-sm text-neutral-600 leading-relaxed font-normal">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
