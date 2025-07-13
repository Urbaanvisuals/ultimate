import { motion } from "framer-motion";
import { CheckIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const deliverables = [
  "20–30 premium retouched and color-graded interior + exterior photos",
  "1x cinematic video tour (with branding + music)",
  "1x vertical reel version for Instagram + Facebook",
  "Branded property website with contact form",
  "Branded marketing flyers (ready to print)",
  "Branded social media assets",
  "Interactive floor plans",
  "3D Virtual Tour (Matterport-style)",
  "72h delivery from shoot",
  "6-12 months website hosting included",
];

export default function Package() {
  return (
    <section id="package" className="relative py-24 overflow-hidden">
      {/* Background image with blur */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/image-2.jpg"
          alt="Background"
          fill
          className="object-cover blur-[2px] brightness-[0.2] transform scale-105"
          priority
        />
      </div>

      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="heading-lg text-white">The Complete Package</h2>
            <p className="text-xl gradient-text font-medium">
              Everything you need to market your property like a luxury listing, delivered within 72 hours.
            </p>
            
            <div className="space-y-4">
              {deliverables.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <CheckIcon className="w-6 h-6 text-white flex-shrink-0" />
                  <span className="text-gray-200">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:ml-auto"
          >
            <div className="bg-white/10 backdrop-blur-md p-12 max-w-md rounded-lg">
              <div className="text-center mb-8">
                <div className="text-sm uppercase tracking-wider mb-4 text-gray-300">Starting from</div>
                <div className="text-5xl font-light mb-2 text-white">30,000 THB</div>
                <div className="text-gray-300">Complete Package</div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="text-sm text-gray-300">
                  * Premium tier available at 40,000-45,000 THB includes paid campaign setup and custom domain
                </div>
                <div className="text-sm text-gray-300">
                  * Only 3 shoots available per week
                </div>
              </div>

              <a
                href="#contact"
                className="block w-full py-4 px-8 bg-white text-black text-center hover:bg-gray-100 transition-colors duration-200"
              >
                Book Your Shoot
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 