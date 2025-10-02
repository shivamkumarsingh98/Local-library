/* eslint-disable react/no-unescaped-entities */
"use client";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

function Search() {
  return (
    <div className="relative overflow-hidden">
      {/* Desktop/Web Version */}
      <header className="hidden md:flex flex-col items-center justify-center px-8 py-10 bg-white w-full min-h-[480px]">
        {/* Framer Motion image left to center */}
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute left-8 top-4 h-full w-3/4 z-0"
        >
          <div className="relative w-full h-full">
            <Image
              src="/images/heroimage.jpg"
              alt="Library Hero"
              fill
              className="object-cover object-center rounded-2xl"
              priority
            />
          </div>
        </motion.div>
        {/* Framer Motion card right to center */}
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="absolute right-10 bottom-10 z-10"
        >
          <div className="bg-[#431a20] shadow-lg p-10 w-[500px] h-[300px] flex flex-col items-start justify-start ">
            {/* Main heading */}
            <p className="text-4xl  sm:text-4xl text-white font-playfair font-serif mb-5">
              World's First Libraries Booking Site
            </p>

            {/* Button styled text with arrow */}
            <button className="mt-4 flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-medium px-5 py-2 rounded shadow-md transition">
              Book Seats
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </motion.div>
        {/* Main content above background */}
        {/* <div className="flex-1 flex flex-col items-center w-full relative z-10">
          <h1 className="text-3xl sm:text-4xl mt-11 text-white text-center">
            World's First Libraries Booking Site
          </h1>
          <p className="text-sm sm:text-base mt-5 border-none text-gray-600 bg-orange-500 px-3 py-2 rounded text-center w-fit mx-auto">
            Search Libraries | Book Seats
          </p>
        </div> */}
        {/* Search box below the content */}
        <div className="w-full max-w-2xl flex flex-row items-center justify-center mt-5 relative z-10">
          <Input
            placeholder="Search libraries..."
            className="flex-1 min-w-0 h-14 px-10 text-base rounded-none border-b border-gray-300 rounded-l-md"
          />
          <Link href="/Search-libraris">
          <Button className="h-14 px-6 bg-gradient-to-r from-blue-600 to-blue-800 text-white hover:from-blue-700 hover:to-blue-900 rounded-none rounded-r-md -ml-px" 
          // onClick={() => {
          //   router.push("/Search-libraris");
          // }}
          >
            Search
          </Button>
          </Link>
        </div>
      </header>

      {/* Mobile Version */}
      <header className="md:hidden flex flex-col items-center justify-center mt-2 px-0 py-0 bg-gradient-to-b from-white via-white to-gray-100 w-full">
        {/* Mobile Hero Image */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative w-full h-52 "
        >
          <Image
            src="/images/heroimage.jpg"
            alt="Library Hero"
            fill
            className="object-cover object-center"
            priority
          />
        </motion.div>

        {/* Mobile Card */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="w-full px-4"
        >
          {/* <div className="bg-[#431a20] shadow-lg p-6 rounded-xl flex flex-col items-start justify-start bg-gradient-to-br from-[#431a20] to-[#5a2c33]">
            <p className="text-2xl text-white font-playfair font-serif mb-4">
              World's First Libraries Booking Site
            </p>
            <button className="mt-2 flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-medium px-4 py-2 rounded shadow-md transition">
              Book Seats
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
            <div className="w-full flex flex-row items-center justify-center shadow-md">
              <Input
                placeholder="Search libraries..."
                className="flex-1 min-w-0 h-12 px-4 text-base rounded-l-md border-0 bg-white"
              />
              <Button className="h-12 px-6 bg-gradient-to-r from-blue-600 to-blue-800 text-white hover:from-blue-700 hover:to-blue-900 rounded-r-md font-medium">
                Search
              </Button>
            </div>
          </div> */}
        </motion.div>

        {/* Mobile Search Box Section */}
        <div className="w-full bg-white shadow-2xl py-6 rounded-2xl">
          <div className="w-full flex flex-col items-center justify-center px-4">
            <p className="text-gray-600 text-2xl mb-3 font-playfair font-serif">
              Find Your Perfect Library
            </p>
            <div className="w-full flex flex-row items-center justify-center shadow-md">
              <Input
                placeholder="Search libraries..."
                className="flex-1 min-w-0 h-12 px-4 text-base !bg-gray-200 border-none rounded-l-md 
               focus:outline-none focus:ring-0"
              />
              <Button className="h-12 px-6 bg-gradient-to-r from-blue-600 to-blue-800 text-white hover:from-blue-700 hover:to-blue-900 rounded-r-md font-medium">
                Search
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex flex-col items-center justify-center mt-8 mb-6">
        <h3 className="text-l mb-4">---- Are you a Library Owner ----</h3>
        <Button
          asChild
          className="relative flex items-center bg-orange-600 hover:bg-green-500 text-white rounded-full px-5 py-2 border-none transition-colors duration-200"
        >
          <p className="flex items-center">
            For Library Owner
            <span className="ml-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-500 rounded-full absolute -top-2 -right-2 md:static md:ml-2 md:relative md:top-0 md:right-0">
              New
            </span>
          </p>
        </Button>
      </div>
    </div>
  );
}

export default Search;
