"use client"; // use client
import React, { useEffect, useState, useRef } from "react";

const Numbers = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const numbersSectionRef = useRef(null); // Reference for the numbers section
  const [hasAnimated, setHasAnimated] = useState(false); // Control when animation happens

  useEffect(() => {
    const animateCount = (target, setCount) => {
      let start = 0;
      const end = target;
      const duration = 2000;
      const increment = end / (duration / 100);

      const interval = setInterval(() => {
        start += increment;
        if (start >= end) {
          clearInterval(interval);
          setCount(end);
        } else {
          setCount(Math.ceil(start));
        }
      }, 50);
    };

    const handleIntersection = (entries) => {
      const entry = entries[0];
      if (entry.isIntersecting && !hasAnimated) {
        animateCount(5, setCount1);
        animateCount(150, setCount2);
        animateCount(300, setCount3);
        setHasAnimated(true); // Ensure animation happens only once per scroll into view
      } else if (!entry.isIntersecting) {
        // Reset counts when out of view
        setCount1(0);
        setCount2(0);
        setCount3(0);
        setHasAnimated(false);
      }
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5, // Trigger when 50% of the section is visible
    });

    const currentRef = numbersSectionRef.current; // Store the current ref value
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [hasAnimated]);

  return (
    <section ref={numbersSectionRef} className="bg-gradient-to-r py-8">
      <div className="container mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-3xl font-bold text-blue-600">
            Our Numbers
          </h2>
          {/* <p className="text-blue-500 mt-2 text-sm md:text-base">
            Some cool stats about our journey so far
          </p> */}
        </div>

        {/* Grid layout for numbers */}
        <div className="grid grid-cols-3 gap-3 sm:gap-6">
          {/* 1 */}
          <div className="bg-white shadow p-3 rounded-lg text-center transition duration-300 hover:scale-105 hover:shadow-lg">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-blue-600 animate-counter">
              {count1}+
            </h3>
            <p className="mt-1 text-xs sm:text-sm md:text-base text-gray-800">
              Number of cities
            </p>
          </div>

          {/* 2 */}
          <div className="bg-white shadow p-3 rounded-lg text-center transition duration-300 hover:scale-105 hover:shadow-lg">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-blue-600 animate-counter">
              {count2}+
            </h3>
            <p className="mt-1 text-xs sm:text-sm md:text-base text-gray-600">
              Acitve Students
            </p>
          </div>

          {/* 3 */}
          <div className="bg-white  shadow p-3 rounded-lg text-center transition duration-300 hover:scale-105 hover:shadow-lg">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-blue-600 animate-counter">
              {count3}+
            </h3>
            <p className="mt-1 text-xs sm:text-sm md:text-base text-gray-800">
              Libraries Partners
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Numbers;
