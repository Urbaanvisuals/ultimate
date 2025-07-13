"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="heading-xl mb-8 text-balance">
            The Ultimate Real Estate Marketing Package in Phuket
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 text-balance">
            Your Property, Sold Faster. Marketed Like a Million-Dollar Listing.
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <a
              href="#package"
              className="inline-block px-8 py-4 text-lg bg-black text-white hover:bg-gray-900 transition-colors duration-200"
            >
              Explore Package
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10 opacity-[0.02] bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:32px_32px]" />
    </section>
  );
} 