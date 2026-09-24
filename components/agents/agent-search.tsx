"use client";

import { motion } from "framer-motion";
import { User, MapPin, ArrowUpDown, ArrowRight } from "lucide-react";
import Field from "../ui/field";
import Dropdown from "../ui/dropdown";

interface AgentSearchBarProps {
  onSearchSubmit?: (filters: {
    query: string;
    city: string;
    status: string;
    sort: string;
  }) => void;
}

export default function AgentSearchBar({
  onSearchSubmit,
}: AgentSearchBarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
      className="rounded-3xl bg-black/40 p-6 backdrop-blur-md md:p-8 border border-white/10"
    >
      <h2 className="mb-6 text-xl font-bold font-display text-white md:text-2xl">
        Find Agents
      </h2>

      {/* 4-Column Grid for Search Inputs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Field
          icon={<User className="h-4 w-4 text-orange-500" />}
          label="Agent Name"
        >
          <input
            type="text"
            placeholder="Search by name..."
            className="w-full rounded-xl border border-white/20 bg-black/20 px-4 py-3 text-sm text-white placeholder-white/60 outline-none focus:border-orange-500"
          />
        </Field>

        <Dropdown
          placeholder="All Cities"
          options={["Port Harcourt", "Lagos", "Abuja"]}
          label="Select City"
          icon={<MapPin className="h-4 w-4 text-orange-500" />}
        />

        <Dropdown
          placeholder="All Types"
          options={["New Agents", "Old Agents"]}
          label="Agent Status"
          icon={<ArrowUpDown className="h-4 w-4 text-orange-500" />}
        />

        <Dropdown
          placeholder="Sort Options"
          options={["Name (A-Z)", "Name (Z-A)", "Most Listings"]}
          label="Sort By"
          icon={<ArrowUpDown className="h-4 w-4 text-orange-500" />}
        />
      </div>

      <div className="mt-6 flex justify-end">
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          type="button"
          className="w-full md:w-auto flex items-center justify-center gap-2 rounded-full bg-orange-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-700"
        >
          Find Agents
          <ArrowRight className="h-4 w-4" />
        </motion.button>
      </div>
    </motion.div>
  );
}
