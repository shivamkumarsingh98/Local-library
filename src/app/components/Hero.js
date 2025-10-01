"use client";
import Image from "next/image";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "../components/ui/dropdown-menu";

import Navebar from "./Navbar";
import Search from "./Search";
import Cards from "./Cards";
import Content from "./Content";
import Modal from "./Modal";
import { useState, useRef, useEffect } from "react";

const cities = ["New York", "London", "Tokyo", "Paris", "Berlin"];
const libraries = [
  { name: "React", desc: "A JavaScript library for building user interfaces." },
  { name: "Next.js", desc: "The React Framework for Production." },
  { name: "Tailwind CSS", desc: "A utility-first CSS framework." },
  {
    name: "shadcn/ui",
    desc: "Beautifully designed components built with Radix UI and Tailwind CSS.",
  },
  { name: "Redux", desc: "A Predictable State Container for JS Apps." },
];
const feedbacks = [
  { user: "Alice", text: "Great platform!" },
  { user: "Bob", text: "Loved the UI components." },
  { user: "Charlie", text: "Easy to use and customize." },
];

export default function Hero() {
  const [showOfferModal, setShowOfferModal] = useState(false);
  const [offerModalShown, setOfferModalShown] = useState(false);
  useEffect(() => {
    if (offerModalShown) return;
    let timeoutId = null;
    const handleScroll = () => {
      if (window.scrollY > 80) {
        timeoutId = setTimeout(() => {
          setShowOfferModal(true);
          setOfferModalShown(true);
        }, 1200); // 1.2s after scroll
        window.removeEventListener("scroll", handleScroll);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [offerModalShown]);

  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
      {/* Navbar */}
      <Navebar />

      {/* Hero Section */}
      <header>
        {/* Titles and search */}
        <Search />
      </header>

      {/* Main Section: Libraries */}
      <main id="main" className="flex-1 px-8 py-12">
        <div className="flex space-x-6 overflow-x-auto pb-4">
          <Content />
        </div>

        {/* Feedback Section */}
        <section id="feedback" className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">What users say</h2>
          <div className="flex space-x-6 overflow-x-auto pb-4">
            {feedbacks.map((fb) => (
              <div
                key={fb.user}
                className="min-w-[200px] bg-blue-50 rounded-lg p-4 border border-blue-200"
              >
                <p className="text-md mb-2">"{fb.text}"</p>
                <span className="text-sm font-semibold text-blue-700">
                  - {fb.user}
                </span>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Offer Modal */}
      <Modal
        open={showOfferModal}
        onClose={() => setShowOfferModal(false)}
        title="Student Offers"
        size="md"
      >
        <div className="space-y-3">
          <div className="text-xl font-bold text-blue-700 mb-2">
            50% OFF First Registration (Referral Offer)
          </div>
          <ul className="list-disc pl-5 space-y-1 text-gray-800">
            <li>Switch Library Option: Free Trials</li>
            <li>Class Access, Free WiFi, Newspapers</li>
            <li>Current &amp; Special Offers</li>
            <li>Full Fees Refund after clearing any government exam</li>
            <li>And many more exciting benefits!</li>
          </ul>
        </div>
      </Modal>

      {/* Footer */}
      <footer className="w-full py-6 px-8 border-t text-center text-gray-500 bg-white">
        &copy; {new Date().getFullYear()} MyLanding. All rights reserved.
      </footer>
    </div>
  );
}
