"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { librariesdata } from "../Data";

function Librariescards() {
  return (
    <div className="w-full bg-gray-50 py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-2">
            LIBRARIES OFFERS & PLANS
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            Find the best study space for your needs
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
          {librariesdata.map((library) => (
            <LibraryCard key={library.id} library={library} />
          ))}
        </div>

        {/* Centered See More Button */}
        <div className="flex justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="flex items-center gap-2 text-white bg-blue-600 px-6 py-2 rounded-lg font-bold text-lg hover:bg-blue-700"
          >
            See More
            <motion.span
              initial={{ x: 0 }}
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              →
            </motion.span>
          </motion.button>
        </div>
      </div>
    </div>
  );
}

function LibraryCard({ library }) {
  const [hovered, setHovered] = useState(false);

  const images = [
    library.image1,
    library.image2,
    library.image3,
    library.image4,
  ].filter(Boolean);

  return (
    <motion.div
      className="bg-white rounded-xl overflow-hidden shadow-md cursor-pointer hover:shadow-lg transition-all duration-300 relative"
      whileHover={{ scale: 1.02 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Offer Badge */}
      <div className="absolute top-3 right-3 bg-red-500 text-white px-2 py-0.5 rounded-full text-xs font-semibold z-10">
        FLAT OFF
      </div>

      {/* Image Wrapper */}
      <div className="relative h-36 sm:h-40 md:h-48 w-full overflow-hidden">
        <Image
          src={images[0] || "/images/libreres.avif"}
          alt={library.name}
          fill
          className={`object-cover transition-opacity duration-700 ${
            hovered ? "opacity-0" : "opacity-100"
          }`}
        />
        {images[1] && (
          <Image
            src={images[1]}
            alt={`${library.name} hover`}
            fill
            className={`object-cover transition-opacity duration-700 ${
              hovered ? "opacity-100" : "opacity-0"
            }`}
          />
        )}
      </div>

      {/* Content */}
      <div className="p-3 md:p-4">
        <h3 className="text-sm md:text-lg font-semibold text-gray-800 mb-1 truncate">
          {library.name}
        </h3>
        <p className="text-gray-600 text-xs md:text-sm line-clamp-2 mb-2">
          {library.address}
        </p>

        <div className="flex justify-between items-center text-xs md:text-sm">
          <span className="font-bold text-blue-600">{library.fee}</span>
          <span className="text-yellow-500 font-semibold flex items-center gap-1">
            ★ {library.rating}
          </span>
        </div>

        <div className="mt-2 flex flex-wrap gap-1">
          {library.facilities.slice(0, 2).map((facility, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-700 text-[10px] md:text-xs px-2 py-0.5 rounded"
            >
              {facility}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Librariescards;
