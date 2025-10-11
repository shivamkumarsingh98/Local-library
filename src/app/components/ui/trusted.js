"use client";

import * as React from "react";
import { motion } from "framer-motion";

const ROW1_EXAMS = [
  { name: "UPSC", color: "bg-red-500" },
  { name: "SSC", color: "bg-blue-500" },
  { name: "NEET", color: "bg-green-500" },
  { name: "JEE", color: "bg-purple-500" },
  { name: "BPSC", color: "bg-orange-500" },
  { name: "PCS", color: "bg-pink-500" },
  { name: "Bank PO", color: "bg-indigo-500" },
  { name: "Railway", color: "bg-yellow-500" },
];

const ROW2_EXAMS = [
  { name: "CDS", color: "bg-teal-500" },
  { name: "NDA", color: "bg-cyan-500" },
  { name: "GATE", color: "bg-amber-500" },
  { name: "CAT", color: "bg-lime-500" },
  { name: "XAT", color: "bg-emerald-500" },
  { name: "SBI PO", color: "bg-rose-500" },
  { name: "IBPS", color: "bg-violet-500" },
  { name: "LIC AAO", color: "bg-sky-500" },
];

function ExamChip({ label, color }) {
  return (
    <span
      className={`${color} text-white px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 rounded-full font-semibold text-xs sm:text-sm whitespace-nowrap shadow-md hover:shadow-lg transition-shadow`}
    >
      {label}
    </span>
  );
}

function ScrollingRow({ exams, duration = 18 }) {
  return (
    <div className="overflow-hidden whitespace-nowrap ">
      <motion.div
        className="flex gap-2 sm:gap-3 md:gap-4 items-center will-change-transform"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration, ease: "linear", repeat: Infinity }}
      >
        {[...exams, ...exams].map((exam, i) => (
          <ExamChip
            key={`${exam.name}-${i}`}
            label={exam.name}
            color={exam.color}
          />
        ))}
      </motion.div>
    </div>
  );
}
export default function TrustedAspirants() {
  return (
    <section className="py-16 bg-white flex-wrap">
      <div className="max-w-7xl px-7 sm:px-6 md:px-12">
        <motion.h2
          className="text-xl sm:text-sm md:text-2xl font-bold text-center text-blue-500 mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, type: "spring" }}
        >
          Trusted by Aspirants Preparing for Govt Exams
        </motion.h2>

        <div className="space-y-5 sm:space-y-5">
          <ScrollingRow exams={ROW1_EXAMS} duration={50} />
          {/* <ScrollingRow exams={ROW2_EXAMS} duration={18} /> */}
        </div>
      </div>
    </section>
  );
}
