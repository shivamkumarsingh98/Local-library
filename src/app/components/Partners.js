"use client";
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion"; // Assuming you're using Framer Motion for animations
import { useInView } from "react-intersection-observer";

// Sample data for exam categories
const examCategories = [
  {
    name: "SSC",
    color: "bg-blue-500",
    textColor: "text-white",
  },
  {
    name: "NEET",
    color: "bg-green-500",
    textColor: "text-white",
  },
  {
    name: "JEE",
    color: "bg-purple-500",
    textColor: "text-white",
  },
  {
    name: "BPSC",
    color: "bg-orange-500",
    textColor: "text-white",
  },
  {
    name: "PCS",
    color: "bg-pink-500",
    textColor: "text-white",
  },
  {
    name: "Bank PO",
    color: "bg-indigo-500",
    textColor: "text-white",
  },
  {
    name: "Railway",
    color: "bg-yellow-500",
    textColor: "text-white",
  },
  {
    name: "UPSC",
    color: "bg-red-500",
    textColor: "text-white",
  },

  { name: "CDS", color: "bg-teal-500", textColor: "text-white" },
  { name: "NDA", color: "bg-cyan-500", textColor: "text-white" },
  { name: "GATE", color: "bg-amber-500", textColor: "text-white" },
  { name: "CAT", color: "bg-lime-500", textColor: "text-white" },
  { name: "XAT", color: "bg-emerald-500", textColor: "text-white" },
  { name: "SBI PO", color: "bg-rose-500", textColor: "text-white" },
  { name: "IBPS", color: "bg-violet-500", textColor: "text-white" },
  { name: "LIC AAO", color: "bg-sky-500", textColor: "text-white" },
];

function Partners() {
  const [isMobile, setIsMobile] = useState(false);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      x: isMobile ? -100 : 100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <div className="w-full bg-gradient-to-r  py-6 px-3">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <h1 className="text-blue-600 text-2xl md:text-2xl font-bold mb-2">
          Trusted by Aspirants Preparing for Govt Exams
        </h1>
        <div className="w-20 h-1 bg-white mx-auto"></div>
      </motion.div>

      {/* Exam Categories Section */}
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="flex flex-wrap justify-center gap-4 max-w-6xl mx-auto"
      >
        {examCategories.map((category, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`cursor-pointer rounded-xl shadow-lg ${category.color} ${category.textColor} 
              min-w-[100px] md:min-w-[100px] py-3 px-4 flex items-center justify-center`}
          >
            <span className="font-semibold text-lg whitespace-nowrap">
              {category.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Partners;
