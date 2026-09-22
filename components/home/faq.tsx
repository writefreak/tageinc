"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const FAQS = [
  {
    question:
      "How do I verify the authenticity and title documents of a property?",
    answer:
      "Every property listed on our platform undergoes a thorough verification process. We inspect registered titles such as Certificate of Occupancy (C of O), Governor's Consent, and Survey Plans with government land registries before public listing.",
  },
  {
    question:
      "Can I inspect homes, land, or estate plots before making a deposit?",
    answer:
      "Yes, physical and virtual site inspections are completely free. You can schedule a tour directly with our verified agents at a date and time that fits your schedule.",
  },
  {
    question: "What payment structures or installment plans are available?",
    answer:
      "We offer flexible payment structures across various properties, including outright payments and structured installment packages spread across 3 to 12 months with minimal interest.",
  },
  {
    question: "What extra fees should I expect during a property purchase?",
    answer:
      "Beyond the property price, standard transactions typically involve legal documentation fees, survey fees, and development levies (for serviced estate plots). All costs are stated clearly upfront.",
  },
  {
    question: "Can I list my own property, land, or estate on your platform?",
    answer:
      "Yes. Property owners, verified agents, and developers can submit property listings. Once our verification team approves the ownership documents and site parameters, your listing goes live.",
  },
];

export function FAQ() {
  return (
    <section
      id="faq"
      className="w-full py-12 sm:py-16 px-4 sm:px-8 lg:px-12 font-sans"
    >
      <div className="mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="mb-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900"
          >
            Frequently Asked Questions
          </motion.h2>
          {/* <div className="mx-auto mt-2.5 h-1 w-12 rounded-full bg-[#ff5500]" /> */}
        </div>

        {/* FAQ Accordion List */}
        <Accordion type="single" collapsible className="flex flex-col gap-3.5 ">
          {FAQS.map((faq, i) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <AccordionItem
                value={`item-${i}`}
                className="overflow-hidden bg-orange-600 rounded-2xl px-5 sm:px-6 shadow-xs transition-colors duration-200 hover:border-neutral-300 data-[state=open]:bg-orange-600"
              >
                <AccordionTrigger className="py-4 text-white sm:py-5 text-left text-sm sm:text-base font-semibold hover:no-underline [&>svg]:text-[#ff5500]">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-xs sm:text-sm leading-relaxed text-white ">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
