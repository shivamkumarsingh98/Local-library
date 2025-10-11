"use client";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { prepLibraries } from "../../Data";

export default function LibraryDetails() {
  const params = useParams();
  const library = prepLibraries.find((lib) => lib.id === parseInt(params.id));

  if (!library) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl text-gray-600">Library not found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero Section with Image Gallery */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          <div className="relative h-[400px] md:h-[500px]">
            <motion.img
              src={library.image || "/images/libreres.avif"}
              alt={library.name}
              className="w-full h-full object-cover"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end">
              <div className="p-6 text-white w-full">
                <motion.h1
                  className="text-3xl md:text-4xl font-bold mb-2"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {library.name}
                </motion.h1>
                <motion.p
                  className="text-lg opacity-90"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {library.address}
                </motion.p>
              </div>
            </div>
          </div>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column - Main Info */}
          <div className="md:col-span-2 space-y-8">
            {/* Quick Info */}
            <motion.div
              className="bg-white rounded-xl shadow-lg p-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold mb-4 text-gray-800">
                Quick Information
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-600">Rating</p>
                  <div className="flex items-center gap-1 mt-1">
                    <span className="text-yellow-400 text-xl">★</span>
                    <span className="font-semibold text-lg">
                      {library.rating}
                    </span>
                    <span className="text-gray-500 text-sm">
                      ({library.reviews} reviews)
                    </span>
                  </div>
                </div>
                <div>
                  <p className="text-gray-600">Timing</p>
                  <p className="font-semibold mt-1">{library.shiftHours}</p>
                </div>
              </div>
            </motion.div>

            {/* Facilities */}
            <motion.div
              className="bg-white rounded-xl shadow-lg p-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <h2 className="text-2xl font-bold mb-4 text-gray-800">
                Facilities
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {library.facilities.map((facility, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-blue-50 p-3 rounded-lg"
                  >
                    <span className="text-blue-600">✓</span>
                    <span className="text-gray-700">{facility}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Pricing & Booking */}
          <motion.div
            className="md:col-span-1"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-4">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Pricing</h2>
              <div className="mb-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {library.fee}
                </div>
                <p className="text-gray-600">All inclusive price</p>
              </div>

              <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition duration-200">
                Book Now
              </button>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">
                  Why choose us?
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="text-blue-600">✓</span>
                    Verified Library
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-600">✓</span>
                    Clean Environment
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-600">✓</span>
                    Dedicated Support
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
