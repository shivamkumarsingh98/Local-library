{
  /* eslint-disable-next-line react/no-unescaped-entities */
}

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
          {/* Subcontent */}
          {/* <p className="text-gray-500 text-lg leading-relaxed mb-4">
            We are{" "}
            <span className="font-semibold text-blue-500">
              India's first platform
            </span>{" "}
            that allows students to Easily book{" "}
            <span className="font-semibold text-blue-500">
              verified libraries online
            </span>
            . With{" "}
            <span className="font-semibold text-blue-500">
              3000+ trusted libraries
            </span>
            listed across India, every partner library is
            <span className="font-semibold text-blue-500">
              verified and genuine
            </span>
            .
          </p> */}

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

          {/* <p className="text-gray-500 text-lg leading-relaxed mb-6">
            Every day,{" "}
            <span className="font-semibold text-blue-500">100+ students</span>
            book their seats through our platform. Our libraries provide{" "}
            <span className="font-semibold text-blue-500">
              top-class study facilities
            </span>{" "}
            — including high-speed WiFi, quiet study zones, AC halls, and
            digital resources — everything an aspirant needs for focused
            preparation.
          </p> */}

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

          {/* Highlights / Bullet points */}
          {/* <ul className="list-disc pl-5 text-gray-700 space-y-2">
          <li>
            <span className="font-semibold text-gray-900">
              PAN India presence
            </span>{" "}
            – 3000+ libraries available
          </li>
          <li>
            <span className="font-semibold text-gray-900">
              Daily active users
            </span>{" "}
            – 100+ students booking every day
          </li>
          <li>
            <span className="font-semibold text-gray-900">
              Verified & Trusted
            </span>{" "}
            – 100% genuine libraries only
          </li>
          <li>
            <span className="font-semibold text-gray-900">
              Best Study Facilities
            </span>{" "}
            – WiFi, AC, digital access & more
          </li>
        </ul> */}
        </motion.div>

        {/* Right: review cards box */}
        <motion.div
          className="flex-1 flex justify-center items-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.7, type: "spring", delay: 0.2 }}
        >
          <div
            ref={scrollRef}
            className="w-full max-w-lg h-96 rounded-xl shadow-lg border border-blue-200 overflow-y-auto flex flex-col gap-4 p-4 bg-blue-500"
            style={{ scrollbarWidth: "none" }}
          >
            <AnimatePresence>
              {reviews.map((r, i) => (
                <motion.div
                  key={i}
                  className="bg-white rounded-lg shadow flex flex-col px-5 py-4 min-h-[70px] max-w-full w-full"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-gray-700 text-base">
                      {r.name}
                    </span>
                    <StarRow count={r.stars} />
                  </div>
                  <p className="text-gray-500 text-sm">{r.text}</p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>
      </section>
      <section className="w-full flex flex-col md:flex-row gap-8 py-12 px-4 md:px-12">
        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-12">
              Facilities We Provide to Students
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition"
                >
                  <feature.icon className="w-10 h-10 text-blue-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 mt-1">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
