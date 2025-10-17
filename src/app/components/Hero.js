/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
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
import Footer from "./Footer";
import Numbers from "./Numbers";
import Story from "./Story";
import Partners from "./Partners";
import ComanQuestions from "./ComanQuestions";

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
        }, 1200);
        window.removeEventListener("scroll", handleScroll);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [offerModalShown]);

  // 🧠 SEO Structured Data for Home Page
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Local Libraries - India's First Library Booking Site",
      description:
        "Book study rooms and verified libraries instantly across India with Local Libraries. Affordable, quiet, and student-friendly spaces for all exam aspirants.",
      url: "https://locallibraries.in",
      publisher: {
        "@type": "Organization",
        name: "Local Libraries",
        logo: {
          "@type": "ImageObject",
          url: "https://locallibraries.in/images/Final Logo.jpg",
        },
      },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://locallibraries.in",
          },
        ],
      },
      mainEntity: {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is Local Libraries?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Local Libraries is India's first online platform for booking study rooms and libraries across India, helping students find quiet and affordable study spaces.",
            },
          },
          {
            "@type": "Question",
            name: "Is Local Libraries available in my city?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes! We are expanding rapidly. You can check availability by searching your city on our homepage.",
            },
          },
        ],
      },
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <>
      <title>Local Libraries | India’s First Library Booking Site</title>
      <meta
        name="description"
        content="Book verified study rooms and libraries instantly with Local Libraries — India's first library booking site. Find nearby reading spaces for UPSC, SSC, NEET, and more."
      />
      <meta
        name="keywords"
        content="Local Libraries, study space India, book library seat, library booking site, reading room near me, India’s first library booking platform"
      />
      <meta name="author" content="Local Libraries" />
      <meta
        property="og:title"
        content="Local Libraries | India’s First Library Booking Site"
      />
      <meta
        property="og:description"
        content="Discover and book verified study spaces with Local Libraries. Ideal for exam aspirants and professionals seeking focused environments."
      />
      <meta property="og:image" content="/images/Final Logo.jpg" />
      <meta property="og:url" content="https://locallibraries.in" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Local Libraries | India’s First Library Booking Site"
      />
      <meta
        name="twitter:description"
        content="Book study rooms and verified libraries near you with Local Libraries — India’s first library booking platform."
      />
      <meta name="twitter:image" content="/images/Final Logo.jpg" />

      <div className="min-h-screen flex flex-col bg-white text-black">
        {/* Hero Section */}
        <header>
          <Search />
        </header>

        {/* Main Section */}
        <main id="main" className="flex-1">
          <div className="flex flex-col pb-4">
            <Content />
            <Partners />
            <Numbers />
            <Story />
            {/* <ComanQuestions /> */}
          </div>
        </main>
      </div>
    </>
  );
}
