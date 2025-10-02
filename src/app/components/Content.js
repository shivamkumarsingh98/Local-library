{
  /* eslint-disable-next-line react/no-unescaped-entities */
}

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { reviews } from "../Data";
import { features } from "../Data";

function StarRow({ count }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${
            i < count ? "text-yellow-400" : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
        </svg>
      ))}
    </div>
  );
}

export default function Content() {
  const scrollRef = useRef(null);
  const hScrollRef = useRef(null);
  const hIndexRef = useRef(0);

  // Auto-scroll bottom to top
  useEffect(() => {
    const box = scrollRef.current;
    if (!box) return;
    let scroll = 0;
    let dir = 1;
    const maxScroll = box.scrollHeight - box.clientHeight;
    const interval = setInterval(() => {
      if (scroll >= maxScroll) dir = -1;
      if (scroll <= 0) dir = 1;
      scroll += dir * 1.5;
      box.scrollTop = scroll;
    }, 30);
    return () => clearInterval(interval);
  }, []);

  // Auto-advance one card at a time for bottom reviews row (snap to exact card)
  useEffect(() => {
    const container = hScrollRef.current;
    if (!container) return;

    const advance = () => {
      const cardWidth =
        window.innerWidth >= 768
          ? container.clientWidth / 2
          : container.clientWidth;
      const cards = container.querySelectorAll('[data-review-card="true"]');
      const totalCards = cards.length;
      if (totalCards === 0) return;

      hIndexRef.current = (hIndexRef.current + 1) % totalCards;
      const scrollAmount = cardWidth * hIndexRef.current;

      container.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    };

    const interval = setInterval(advance, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* <div className="w-full flex flex-col md:flex-row gap-8 py-12 px-4 md:px-12">
        <h1>What we do</h1>
      </div> */}
      <section className="w-full flex flex-col md:flex-row gap-8 py-12 px-4 md:px-12">
        {/* Left content */}
        <motion.div
          className="flex-1 flex flex-col justify-center mb-8 md:mb-0"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.7, type: "spring" }}
        >
          <p className="text-gray-600 text-lg leading-relaxed mb-6 text-justify">
            We are India's first platform that allows students to easily book
            verified libraries online. With 3000+ trusted libraries listed
            across India, every partner library is verified and genuine. Every
            day, 100+ students book their seats through our platform. Our
            libraries provide top-class study facilities — including high-speed
            WiFi, quiet study zones, AC halls, and digital resources —
            everything an aspirant needs for focused preparation Not only for
            studying and preparing, but also for relaxing the minds and
            concentrating more, libraries are one of the best ways to forget the
            odds and focus on things that matter in life. We provide you a
            different aura and learning experience full of choices.
          </p>

          {/* CTA Link */}
          <a
            href="#"
            className="group inline-flex items-center px-5 py-2 border rounded-md text-blue-600 font-medium text-sm shadow-sm hover:bg-blue-50 transition"
          >
            Learn more
            <span className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1">
              ›
            </span>
          </a>
        </motion.div>

        {/* Right: review cards box */}
        <div className="flex-1 flex justify-center items-center">
          <div className="w-full  flex justify-center items-center">
            <img
              src="/images/libreres.avif"
              alt="Library Logo"
              className=" rounded-xl h-100 object-contain"
            />
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="w-full bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 md:px-8 py-12 md:py-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-blue-800 mb-8 md:mb-12 px-2">
            Facilities We Provide to Students
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                className="flex items-start gap-3 p-4 sm:p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition mx-2 sm:mx-0"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.08,
                  type: "spring",
                }}
              >
                <feature.icon className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600 flex-shrink-0" />
                <div className="min-w-0">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Trusted Aspirants Section */}

      {/* Student Reviews Section */}
     
    </div>
  );
}
