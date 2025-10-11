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
      <header className="hidden md:flex flex-col items-center justify-center relative px-8 py-10 bg-white w-full min-h-[480px]">
        {/* Background image */}
        <div className="absolute inset-0 z-0 ">
          <Image
            src="/images/heroimage.jpg"
            alt="Library Hero"
            fill
            className="object-cover object-center "
            priority
          />
          {/* Dark overlay for better text visibility */}
          <div className="absolute inset-0 bg-black/40 "></div>
        </div>

        {/* Heading */}
        <div className="relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            Find Your Perfect Library
          </h1>
        </div>

        {/* Search box */}
        <div className="w-full max-w-2xl flex flex-row items-center justify-center mt-8 relative z-10">
          <Input
            placeholder="Search libraries..."
            className="flex-1 min-w-0 h-14 px-6 text-base bg-white rounded-l-full rounded-r-none shadow-md"
          />
          <Link href="/">
            <Button className="h-14 px-8 bg-gradient-to-r from-blue-600 to-blue-800 text-white hover:from-blue-700 hover:to-blue-900 rounded-r-full shadow-md -ml-px">
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
        ></motion.div>

        {/* Mobile Search Box Section */}
        <div className="w-full bg-white shadow-2xl py-4">
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

      {/* <div className="flex flex-col items-center justify-center ">
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
      </div> */}
    </div>
  );
}

export default Search;
