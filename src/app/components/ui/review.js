"use client";

import React from "react";
import { motion } from "framer-motion";
import { reviews } from "../../Data";
import Image from "next/image";

function QuoteIcon() {
  return (
    <svg
      className="w-8 h-8 md:w-12 md:h-12 text-blue-500/20 absolute top-6 left-6"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
    </svg>
  );
}

export default function ReviewCards() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % reviews.length);
    }, 5000); // Change card every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4"></h2>
          {/* <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from our students about their experience with our libraries
          </p> */}
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl bg-white shadow-xl">
            {reviews.map((review, idx) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, x: 100 }}
                animate={{
                  opacity: idx === activeIndex ? 1 : 0,
                  x: idx === activeIndex ? 0 : 100,
                  display: idx === activeIndex ? "block" : "none",
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="relative"
              >
                <div className="p-8 md:p-12">
                  <QuoteIcon />

                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row gap-6 items-center mb-6">
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xl md:text-2xl font-semibold">
                        {review.name.charAt(0)}
                      </div>
                      <div className="text-center md:text-left">
                        <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                          {review.name}
                        </h3>
                        <p className="text-gray-500">{review.title}</p>
                      </div>
                    </div>

                    <blockquote className="text-gray-700 text-lg md:text-xl leading-relaxed">
                      "{review.comment}"
                    </blockquote>

                    {/* Star rating */}
                    <div className="flex justify-center md:justify-start gap-1 mt-6">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-5 h-5 ${
                            i < review.rating
                              ? "text-yellow-400"
                              : "text-gray-300"
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center gap-2 mt-6">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  idx === activeIndex ? "bg-blue-600 w-6" : "bg-blue-200"
                }`}
                onClick={() => setActiveIndex(idx)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
