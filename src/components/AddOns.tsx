import { motion } from "framer-motion";
import { PlusIcon } from "@heroicons/react/24/outline";

const addOns = [
  {
    title: "Social Media Advertising",
    description: "Targeted Facebook/Instagram Ads campaign setup and management",
    price: "7,000 THB",
  },
  {
    title: "Google Display Network",
    description: "Reach potential buyers through Google's vast display network",
    price: "Custom",
  },
  {
    title: "YouTube Promotion",
    description: "Promote your property video to targeted audiences",
    price: "Custom",
  },
  {
    title: "Lifestyle Photography",
    description: "Additional lifestyle shots with models and amenity highlights",
    price: "Custom",
  },
  {
    title: "Social Content Creation",
    description: "Short-form Reels/TikTok with influencer-style narration",
    price: "Custom",
  },
];

export default function AddOns() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <h2 className="heading-lg mb-6">Optional Add-Ons</h2>
          <p className="text-xl text-gray-600">
            Enhance your package with these premium services
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {addOns.map((addon, index) => (
            <motion.div
              key={addon.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 hover:shadow-lg transition-shadow duration-200"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-black p-2">
                  <PlusIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{addon.title}</h3>
                  <p className="text-gray-600">{addon.description}</p>
                </div>
              </div>
              <div className="text-lg font-light">
                Starting from <span className="font-normal">{addon.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 