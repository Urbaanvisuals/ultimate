"use client";

import { motion } from "framer-motion";
import { CameraIcon, GlobeAltIcon, ClockIcon } from "@heroicons/react/24/outline";

const features = [
  {
    icon: CameraIcon,
    title: "Premium Content Creation",
    description: "Professional photos, cinematic videos, and virtual tours that showcase your property's best features.",
  },
  {
    icon: GlobeAltIcon,
    title: "Complete Digital Presence",
    description: "Custom property website, social media assets, and marketing materials all branded to your needs.",
  },
  {
    icon: ClockIcon,
    title: "72-Hour Delivery",
    description: "Quick turnaround time ensuring your property hits the market while leads are hot.",
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-lg mb-6"
          >
            Everything You Need to Sell Faster
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600"
          >
            One complete package, no hidden fees, delivered in 72 hours
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-black text-white">
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 