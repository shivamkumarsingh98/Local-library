/* eslint-disable react/no-unescaped-entities */
"use client";
import { useState, useEffect } from "react";
import { Button } from "../components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useRouter } from "next/navigation";

function Navebar() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  // Prevent body scroll and manage blur when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  // Handle navigation
  const handleStudentClick = () => {
    setMenuOpen(false);
    router.push("/Students/auth/Student-Register");
  };

  const handleLibraryOwnerClick = () => {
    setMenuOpen(false);
    router.push("/Libraris-owner/auth/Register-owner");
  };

  return (
    <div>
      {/* Main Navbar */}
      <nav className="w-full flex items-center justify-between px-4 md:px-8 py-2 bg-white border-b border-gray-300 sticky top-0 z-50">
        <span className="font-bold text-lg">
          <Image
            src="/images/Final Logo.jpg"
            alt="Logo"
            width={50}
            height={50}
            className="rounded shadow"
          />
        </span>
        {/* Desktop menu */}
        <div className="hidden md:flex flex-col items-end justify-center">
          {/* Social media icons - Top Right */}
          <div className="flex items-center gap-4 mb-5">
            <a
              href="https://www.facebook.com/Local.Libraries/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-xl text-blue-600 transition hover:text-blue-700" />
            </a>
            <a
              href="https://www.instagram.com/local.libraries/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-xl text-pink-500 transition hover:text-pink-600" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-xl text-sky-500 transition hover:text-sky-600" />
            </a>
            <a
              href="https://www.linkedin.com/company/locallibraries/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-xl text-blue-700 transition hover:text-blue-800" />
            </a>
          </div>
          {/* Menu items and buttons - Bottom */}
          <div className="flex items-center gap-3">
            <a
              href="/"
              className="px-3 py-2 text-gray-700 hover:text-blue-600 font-medium rounded transition"
            >
              Home
            </a>
            <a
              href="/About"
              className="px-3 py-2 text-gray-700 hover:text-blue-600 font-medium rounded transition"
            >
              About
            </a>
            <a
              href="/"
              className="px-3 py-2 text-gray-700 hover:text-blue-600 font-medium rounded transition"
            >
              Contact
            </a>
            <a
              href="/"
              className="px-3 py-2 text-gray-700 hover:text-blue-600 font-medium rounded transition"
            >
              Blogs
            </a>
            <Button
              className="relative flex items-center bg-blue-500 hover:bg-green-500 text-white rounded-full px-4 py-2 ml-3"
              onClick={handleLibraryOwnerClick}
            >
              Library Owner
              <span className="ml-2 inline-flex items-center justify-center px-2 py-0.5 text-xs font-bold leading-none text-white bg-red-500 rounded-full">
                Free
              </span>
            </Button>
            <Button
              className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full ml-2"
              onClick={handleStudentClick}
            >
              Student
            </Button>
          </div>
        </div>
        {/* Mobile hamburger */}
        <div className="md:hidden flex items-center">
          <button
            className="text-gray-700 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {!menuOpen && (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>
      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-50 flex md:hidden ${
          menuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* Backdrop with blur */}
        <div
          className={`fixed inset-0  bg-opacity-50 transition-opacity duration-300 ${
            menuOpen ? "opacity-100 backdrop-blur-sm" : "opacity-0"
          }`}
          onClick={() => setMenuOpen(false)}
        ></div>
        {/* Menu content */}
        <div
          className={`fixed top-0 right-0 h-full w-2/3 bg-white transform transition-transform duration-300 ease-in-out ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full px-4 py-4">
            {/* Close button at top-right */}
            <button
              className="self-end text-gray-700 focus:outline-none"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            {/* Profile Section */}
            <div className="flex flex-col items-center mt-4 mb-8">
              <Image
                src="/images/profile-placeholder.jpg"
                alt="Profile"
                width={80}
                height={80}
                className="rounded-full border-2 border-gray-200"
              />
              <span className="mt-2 text-lg font-semibold text-gray-800">
                User Name
              </span>
            </div>
            {/* Menu Items */}
            <div className="flex flex-col items-center gap-4">
              <a
                href="/"
                className="text-lg text-gray-700 hover:text-blue-600 transition"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="/About"
                className="text-lg text-gray-700 hover:text-blue-600 transition"
                onClick={() => setMenuOpen(false)}
              >
                About
              </a>
              <a
                href="/Contact"
                className="text-lg text-gray-700 hover:text-blue-600 transition"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </a>
              <a
                href="/"
                className="text-lg text-gray-700 hover:text-blue-600 transition"
                onClick={() => setMenuOpen(false)}
              >
                Blogs
              </a>
              <Button
                className="w-full max-w-xs bg-blue-500 hover:bg-green-500 text-white rounded-full py-2"
                onClick={handleLibraryOwnerClick}
              >
                Library Owner
                <span className="ml-2 inline-flex items-center justify-center px-2 py-0.5 text-xs font-bold leading-none text-white bg-red-500 rounded-full">
                  Free
                </span>
              </Button>
              <Button
                className="w-full max-w-xs bg-blue-600 hover:bg-blue-700 text-white rounded-full py-2"
                onClick={handleStudentClick}
              >
                Student
              </Button>
            </div>
            {/* Social Media Icons */}
            <div className="flex justify-center gap-6 mt-8">
              <a
                href="https://www.facebook.com/Local.Libraries/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="text-2xl text-blue-600 hover:text-blue-700 transition" />
              </a>
              <a
                href="https://www.instagram.com/local.libraries/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-2xl text-pink-500 hover:text-pink-600 transition" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="text-2xl text-sky-500 hover:text-sky-600 transition" />
              </a>
              <a
                href="https://www.linkedin.com/company/locallibraries/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-2xl text-blue-700 hover:text-blue-800 transition" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navebar;
