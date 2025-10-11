/* eslint-disable react/no-unescaped-entities */
"use client";
import { useState, useEffect, useRef } from "react";
import { Button } from "../components/ui/button";
import Modal from "./Modal";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useRouter } from "next/navigation";

function Navebar() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  // Prevent body scroll when menu is open
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

  // Modal content for demo
  const handleStudentClick = () => {
    router.push("/Students/auth/Student-Register");
  };

  return (
    <div>
      {/* Main Navbar */}
      <nav className="w-full flex items-center justify-between px-4 md:px-8 py-2 bg-white border-b border-gray-300 sticky top-0 ">
        <span className="font-bold text-lg">
          <Image
            src="/images/Final Logo.jpg"
            alt="Logo"
            width={120}
            height={50}
            className="rounded shadow"
          />
          <span className="font-bold text-lg">LocalLibraries</span>
        </span>
        {/* Desktop menu */}
        <div className="hidden md:flex flex-col items-end justify-center">
          {/* Social media icons - Top Right */}
          <div className="flex items-center gap-4 mb-20">
            <a
              href="https://www.facebook.com/Local.Libraries/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-xl text-blue-600 transition" />
            </a>
            {/* <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
              </svg>
            </a> */}
            <a
              href="https://www.instagram.com/local.libraries/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-xl text-pink-500 transition" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-xl text-sky-500 transition" />
            </a>
            <a
              href="https://www.linkedin.com/company/locallibraries/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-xl text-blue-700 transition" />
            </a>
            {/* <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
              </svg>
            </a> */}
          </div>

          {/* Menu items and buttons - Bottom */}
          <div className="flex items-center gap-3">
            <a
              href="#home"
              className="px-3 py-2 text-gray-700 hover:text-blue-600 font-medium rounded transition"
            >
              Home
            </a>
            <a
              href="#about"
              className="px-3 py-2 text-gray-700 hover:text-blue-600 font-medium rounded transition"
            >
              About
            </a>
            <a
              href="#contact"
              className="px-3 py-2 text-gray-700 hover:text-blue-600 font-medium rounded transition"
            >
              Contact
            </a>
            <a
              href="#blogs"
              className="px-3 py-2 text-gray-700 hover:text-blue-600 font-medium rounded transition"
            >
              Blogs
            </a>
            <Button
              className="relative flex items-center bg-blue-500 hover:bg-green-500 text-white rounded-full px-4 py-2 ml-3"
              onClick={() => {
                router.push("/Libraris-owner/auth/Register-owner");
              }}
            >
              Library Owner
              <span className="ml-2 inline-flex items-center justify-center px-2 py-0.5 text-xs font-bold leading-none text-white bg-red-500 rounded-full">
                Free
              </span>
            </Button>
            <Button className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full ml-2">
              Student
            </Button>
          </div>
        </div>
        {/* Mobile hamburger */}
        <div className="md:hidden flex items-center">
          {!menuOpen ? (
            <button
              className="text-gray-700 focus:outline-none"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          ) : (
            <button
              className="text-gray-700 focus:outline-none"
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
          )}
        </div>
        {menuOpen && (
          <>
            {/* 🔹 Overlay */}
            <div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998] md:hidden"
              onClick={() => setMenuOpen(false)}
            ></div>

            {/* 🔹 Mobile Sidebar */}
            <div className="fixed top-0 right-0 h-screen w-80 max-w-[85vw] bg-white shadow-2xl flex flex-col animate-slide-in z-[9999] md:hidden overflow-y-auto">
              {/* Prevent page scroll when menu open */}
              <style jsx global>{`
                html,
                body {
                  overflow: hidden !important;
                  height: 100% !important;
                }
              `}</style>

              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-indigo-50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">LL</span>
                  </div>
                  <div>
                    <h2 className="font-bold text-lg text-gray-900">
                      LocalLibraries
                    </h2>
                    <p className="text-sm text-gray-600">Welcome back!</p>
                  </div>
                </div>
                <button
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  <svg
                    className="w-6 h-6 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* User Info */}
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">👤</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">Guest User</h3>
                    <p className="text-sm text-gray-600">
                      Sign in to access your account
                    </p>
                    <button className="mt-2 text-blue-600 text-sm font-medium hover:text-blue-700 transition-colors">
                      Sign In / Register
                    </button>
                  </div>
                </div>
              </div>

              {/* Social Icons */}
              <div className="p-6 border-b border-gray-200">
                <h4 className="text-sm font-semibold text-gray-700 mb-4">
                  Follow Us
                </h4>
                <div className="flex items-center gap-4">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-blue-100 hover:bg-blue-200 transition"
                  >
                    <FaFacebook className="text-lg text-blue-600" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-pink-100 hover:bg-pink-200 transition"
                  >
                    <FaInstagram className="text-lg text-pink-500" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-sky-100 hover:bg-sky-200 transition"
                  >
                    <FaTwitter className="text-lg text-sky-500" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-blue-100 hover:bg-blue-200 transition"
                  >
                    <FaLinkedin className="text-lg text-blue-700" />
                  </a>
                </div>
              </div>

              {/* Navigation Links */}
              <div className="flex-1 p-6 space-y-2">
                {[
                  { name: "Home", icon: "🏠", href: "#home" },
                  { name: "About", icon: "ℹ️", href: "#about" },
                  { name: "Contact", icon: "📞", href: "#contact" },
                  { name: "Blogs", icon: "📝", href: "#blogs" },
                ].map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium rounded-lg transition"
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className="text-lg">{item.icon}</span>
                    {item.name}
                  </a>
                ))}
              </div>

              {/* Buttons */}
              <div className="p-6 border-t border-gray-200 space-y-3">
                <Button
                  className="relative flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-lg px-4 py-3 w-full text-lg font-semibold transition"
                  onClick={() => {
                    setMenuOpen(false);
                    router.push("/Libraris-owner/auth/Register-owner");
                  }}
                >
                  <span className="mr-2">📚</span>
                  Library Owner
                  <span className="ml-2 inline-flex items-center justify-center px-2 py-0.5 text-xs font-bold leading-none text-white bg-red-500 rounded-full">
                    Free
                  </span>
                </Button>

                <Button className="flex items-center justify-center bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-lg px-4 py-3 w-full text-lg font-semibold transition">
                  <span className="mr-2">🎓</span>
                  Student
                </Button>
              </div>
            </div>
          </>
        )}
      </nav>
      {/* Modal for Student or Library Owner */}
      {/* <Modal open={modalOpen} onClose={() => setModalOpen(false)} size="sm">
        {renderModalContent()}
      </Modal> */}
    </div>
  );
}

export default Navebar;
