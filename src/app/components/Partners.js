"use client";
import React from "react";

const examCategories = [
  {
    name: "SSC",
    color: "bg-blue-500",
    textColor: "text-white",
    logo: "https://mycareersview.com/afile/mcv16148_upsc-exam-news-today7.jpg",
  },
  {
    name: "NEET",
    color: "bg-green-500",
    textColor: "text-white",
    logo: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  },
  {
    name: "JEE",
    color: "bg-purple-500",
    textColor: "text-white",
    logo: "https://cdn-icons-png.flaticon.com/512/3135/3135810.png",
  },
  {
    name: "BPSC",
    color: "bg-orange-500",
    textColor: "text-white",
    logo: "https://cdn-icons-png.flaticon.com/512/2665/2665035.png",
  },
  {
    name: "PCS",
    color: "bg-pink-500",
    textColor: "text-white",
    logo: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png",
  },
  {
    name: "Bank PO",
    color: "bg-indigo-500",
    textColor: "text-white",
    logo: "https://cdn-icons-png.flaticon.com/512/2331/2331948.png",
  },
  {
    name: "Railway",
    color: "bg-yellow-500",
    textColor: "text-white",
    logo: "https://cdn-icons-png.flaticon.com/512/743/743922.png",
  },
  {
    name: "UPSC",
    color: "bg-red-500",
    textColor: "text-white",
    logo: "https://upload.wikimedia.org/wikipedia/en/4/4f/Union_Public_Service_Commission_logo.png",
  },
  {
    name: "CDS",
    color: "bg-teal-500",
    textColor: "text-white",
    logo: "https://cdn-icons-png.flaticon.com/512/3649/3649465.png",
  },
  {
    name: "NDA",
    color: "bg-cyan-500",
    textColor: "text-white",
    logo: "https://cdn-icons-png.flaticon.com/512/1753/1753450.png",
  },
  {
    name: "GATE",
    color: "bg-amber-500",
    textColor: "text-white",
    logo: "https://cdn-icons-png.flaticon.com/512/326/326601.png",
  },
  {
    name: "CAT",
    color: "bg-lime-500",
    textColor: "text-white",
    logo: "https://cdn-icons-png.flaticon.com/512/4221/4221452.png",
  },
  {
    name: "XAT",
    color: "bg-emerald-500",
    textColor: "text-white",
    logo: "https://cdn-icons-png.flaticon.com/512/1455/1455383.png",
  },
  {
    name: "SBI PO",
    color: "bg-rose-500",
    textColor: "text-white",
    logo: "https://upload.wikimedia.org/wikipedia/en/1/10/State_Bank_of_India_logo.svg",
  },
  {
    name: "IBPS",
    color: "bg-violet-500",
    textColor: "text-white",
    logo: "https://upload.wikimedia.org/wikipedia/en/0/09/Institute_of_Banking_Personnel_Selection_logo.png",
  },
  {
    name: "LIC AAO",
    color: "bg-sky-500",
    textColor: "text-white",
    logo: "https://upload.wikimedia.org/wikipedia/en/9/9e/Life_Insurance_Corporation_of_India_logo.svg",
  },
];

function Partners() {
  const scrollingList = [...examCategories, ...examCategories];

  return (
    <div className="w-full bg-gradient-to-r py-6 px-3 overflow-hidden">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-blue-600 text-2xl md:text-2xl font-bold mb-2">
          Government Exams
        </h1>
        <div className="w-20 h-1 bg-white mx-auto"></div>
      </div>

      {/* Scrolling Section */}
      <div className="relative w-full overflow-hidden">
        <div
          id="scroll-track"
          className="flex gap-4 whitespace-nowrap animate-scroll-left hover:pause-animation"
        >
          {scrollingList.map((category, index) => (
            <div
              key={index}
              className={`flex items-center gap-2 cursor-pointer ${category.color} ${category.textColor} 
                px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 rounded-full font-semibold text-xs sm:text-sm 
                shadow-md hover:shadow-lg transition-all`}
            >
              <img
                src={category.logo}
                alt={category.name}
                className="w-5 h-5 rounded-full bg-white p-[2px]"
              />
              <span className="font-bold text-sm whitespace-nowrap">
                {category.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Partners;
