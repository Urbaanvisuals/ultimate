"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "The quality of photos and videos completely transformed how we present our properties. Sold within weeks of listing.",
    author: "Sarah Chen",
    role: "Luxury Real Estate Agent",
  },
  {
    quote: "Their marketing package made our villa stand out on Airbnb. Bookings increased by 40% in the first month.",
    author: "Michael Roberts",
    role: "Villa Owner",
  },
  {
    quote: "Professional, fast, and worth every baht. The custom website really impressed our clients.",
    author: "David Thompson",
    role: "Property Developer",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <h2 className="heading-lg mb-6">Client Success Stories</h2>
          <p className="text-xl text-gray-600">
            See how our package has helped property owners and agents succeed
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              <div className="text-4xl font-serif text-black/10 absolute -top-6 left-0">"</div>
              <blockquote className="pt-8">
                <p className="text-lg mb-6">{testimonial.quote}</p>
                <footer>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </footer>
              </blockquote>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 