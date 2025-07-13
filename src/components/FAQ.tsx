"use client";

import { motion } from "framer-motion";

const faqs = [
  {
    question: "How long does the entire process take?",
    answer: "From shoot to delivery, we complete everything within 72 hours. This includes all photos, videos, website setup, and marketing materials.",
  },
  {
    question: "What's included in the base package?",
    answer: "The base package (30,000 THB) includes 20-30 premium photos, cinematic video tour, vertical social media version, branded website, marketing flyers, social media assets, floor plans, and 3D virtual tour.",
  },
  {
    question: "Do you offer revisions?",
    answer: "Yes, we include one round of revisions for photos and videos. Additional revision rounds can be arranged if needed.",
  },
  {
    question: "How long is the website hosted for?",
    answer: "Website hosting is included for 6-12 months. After that, you can extend the hosting or we can transfer the site to your preferred hosting provider.",
  },
  {
    question: "Can I get a custom domain name?",
    answer: "Yes! Custom domains (e.g., villaname-phuket.com) are available as an optional upgrade in our premium package.",
  },
  {
    question: "How do I book a shoot?",
    answer: "Simply click the 'Book Your Shoot' button and fill out our quick form. We'll get back to you within 24 hours to schedule your shoot.",
  },
];

export default function FAQ() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <h2 className="heading-lg mb-6">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about our package
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="mb-8 last:mb-0"
            >
              <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 