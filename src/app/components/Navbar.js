"use client";
import { useState, useEffect, useRef } from "react";
import { Button } from "../components/ui/button";
import Modal from "./Modal";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Navebar() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTop, setShowTop] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState(""); // "student" or "owner"
  const lastScroll = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const curr = window.scrollY;
      if (curr <= 0) {
        setShowTop(true);
        lastScroll.current = 0;
        return;
      }
      if (curr > lastScroll.current) {
        setShowTop(false); // scrolling down
      } else {
        setShowTop(true); // scrolling up
      }
      lastScroll.current = curr;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Modal content for demo
  const renderModalContent = () => {
    if (modalType === "student") {
      return (
        <div>
          <h3 className="text-lg font-semibold mb-4">Student Login</h3>
          <form className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Email"
              className="border rounded px-3 py-2"
            />
            <input
              type="password"
              placeholder="Password"
              className="border rounded px-3 py-2"
            />
            <Button className="bg-blue-600 text-white mt-2">Login</Button>
          </form>
        </div>
      );
    } else if (modalType === "owner") {
      return (
        <div>
          <h3 className="text-lg font-semibold mb-4">Library Owner Register</h3>
          <form className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Library Name"
              className="border rounded px-3 py-2"
            />
            <input
              type="email"
              placeholder="Email"
              className="border rounded px-3 py-2"
            />
            <input
              type="password"
              placeholder="Password"
              className="border rounded px-3 py-2"
            />
            <Button className="bg-orange-500 text-white mt-2">Register</Button>
          </form>
        </div>
      );
    }
    return null;
  };

  return (
    <div>
      {/* Top Navbar with logo and social icons (hidden on mobile) */}
      <div
        className={`w-full flex items-center justify-between px-4 md:px-8 py-3 min-h-[60px]  transition-transform duration-300 fixed top-0 left-0 z-50 ${
          showTop ? "translate-y-0" : "-translate-y-full"
        } hidden sm:flex`}
      >
        {/* Logo left */}
        <div className="flex items-center gap-3">
          <Image
            src="/images/Final Logo.jpg"
            alt="Logo"
            width={44}
            height={44}
            className="rounded shadow"
          />
        </div>
        {/* Social icons right */}
        <div className="flex items-center gap-4">
          {/* ...existing code for social icons... */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <svg
              className="w-5 h-5 text-blue-600 hover:text-blue-800"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0" />
            </svg>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <svg
              className="w-5 h-5 text-blue-400 hover:text-blue-600"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 0 0-8.384 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.929-.856 2.01-.857 3.17 0 2.188 1.115 4.116 2.823 5.247a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.058 0 14.009-7.496 14.009-13.986 0-.21 0-.423-.016-.634A9.936 9.936 0 0 0 24 4.557z" />
            </svg>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <svg
              className="w-5 h-5 text-pink-500 hover:text-pink-700"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.242-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.775.131 4.602.425 3.635 1.392 2.668 2.359 2.374 3.532 2.315 4.809 2.256 6.089 2.243 6.498 2.243 12c0 5.502.013 5.911.072 7.191.059 1.277.353 2.45 1.32 3.417.967.967 2.14 1.261 3.417 1.32 1.28.059 1.689.072 7.191.072s5.911-.013 7.191-.072c1.277-.059 2.45-.353 3.417-1.32.967-.967 1.261-2.14 1.32-3.417.059-1.28.072-1.689.072-7.191s-.013-5.911-.072-7.191c-.059-1.277-.353-2.45-1.32-3.417C19.45.425 18.277.131 17 .072 15.721.013 15.311 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
            </svg>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <svg
              className="w-5 h-5 text-blue-700 hover:text-blue-900"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z" />
            </svg>
          </a>
        </div>
      </div>
      {/* Main Navbar */}
      <nav className="w-full flex items-center justify-between px-4 md:px-8 py-4 bg-white border-b border-gray-300 mt-[60px] sticky top-0 z-40">
        <span className="font-bold text-lg">
          <span className="text-blue-600">L</span>ocalLibrary
        </span>
        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-1 md:gap-2">
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
            className="relative flex items-center bg-orange-500 hover:bg-green-500 text-blue-600 rounded-full px-4 py-2 border-blue-600 ml-2"
            onClick={() => {
              router.push("/Libraris-owner/auth/Register-owner");
            }}
          >
            Library Owner
            <span className="ml-2 inline-flex items-center justify-center px-2 py-0.5 text-xs font-bold leading-none text-white bg-red-500 rounded-full absolute -top-2 -right-4 md:static md:ml-2 md:relative md:top-0 md:right-0">
              Free
            </span>
          </Button>
          <Button
            className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full ml-2"
            onClick={() => {
              setModalType("student");
              setModalOpen(true);
            }}
          >
            Student
          </Button>
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
        {/* Mobile menu overlay */}
        {menuOpen && (
          <div className="fixed top-0 right-0 h-full w-1/2 bg-white border-l border-gray-200 shadow-lg z-[100] flex flex-col items-start p-6 gap-5 md:hidden animate-fade-in rounded-l-lg transition-all">
            <button
              className="self-end mb-4 text-gray-700 focus:outline-none"
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
            <a
              href="#home"
              className="px-3 py-3 text-gray-700 hover:text-blue-600 font-medium rounded transition w-full text-left text-lg"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#about"
              className="px-3 py-3 text-gray-700 hover:text-blue-600 font-medium rounded transition w-full text-left text-lg"
              onClick={() => setMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#contact"
              className="px-3 py-3 text-gray-700 hover:text-blue-600 font-medium rounded transition w-full text-left text-lg"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>
            <a
              href="#blogs"
              className="px-3 py-3 text-gray-700 hover:text-blue-600 font-medium rounded transition w-full text-left text-lg"
              onClick={() => setMenuOpen(false)}
            >
              Blogs
            </a>
            <Link href="/">
              <Button className="relative flex items-center bg-gray-500 hover:bg-green-500 text-white rounded-full px-4 py-3 border-none w-full justify-start text-lg">
                For Library Owner
                <span className="ml-2 inline-flex items-center justify-center px-2 py-0.5 text-xs font-bold leading-none text-white bg-red-500 rounded-full relative top-0 right-0">
                  New
                </span>
              </Button>
            </Link>
            <Button
              className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-full w-full text-left text-lg"
              onClick={() => {
                setModalType("student");
                setModalOpen(true);
                setMenuOpen(false);
              }}
            >
              Student
            </Button>
          </div>
        )}
      </nav>
      {/* Modal for Student or Library Owner */}
      <Modal open={modalOpen} onClose={() => setModalOpen(false)} size="sm">
        {renderModalContent()}
      </Modal>
    </div>
  );
}

export default Navebar;
