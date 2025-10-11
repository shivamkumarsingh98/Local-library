/* eslint-disable react/no-unescaped-entities */
"use client";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";

function Page() {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    password: "",
    confirm: "",
  });
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault(); /* handle register */
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-6">
      <div className="w-full max-w-3xl mx-4 bg-white rounded-xl shadow-xl flex flex-col md:flex-row overflow-hidden border border-gray-100">
        {/* Left content */}
        <div className="md:w-1/2 bg-gradient-to-br from-blue-600 to-blue-800 text-white flex flex-col justify-center items-center p-6 md:p-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/heroimage.jpg')] opacity-10 bg-cover bg-center"></div>
          <div className="relative z-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Welcome Students!
            </h2>
            <p className="mb-4 text-sm md:text-base text-blue-100 text-center leading-relaxed">
              Join our community of dedicated learners! Access the best study
              spaces and excel in your academic journey.
            </p>
            <div className="flex flex-col items-center gap-3">
              <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-lg text-sm">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838l-2.727 1.17 3.721 1.596a1 1 0 00.788 0l7-3a1 1 0 000-1.84l-7-3z" />
                </svg>
                <span>Access Quality Study Spaces</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-lg text-sm">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
                <span>Join Student Community</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-lg text-sm">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                </svg>
                <span>Book Seats Instantly</span>
              </div>
            </div>
          </div>
        </div>
        {/* Right form */}
        <div className="md:w-1/2 w-full flex flex-col justify-center items-center p-6 md:p-8 bg-white">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-sm flex flex-col gap-3"
          >
            <div className="text-center mb-4">
              <h3 className="text-xl md:text-2xl font-bold text-blue-700">
                Student Registration
              </h3>
              <p className="text-gray-600 text-xs md:text-sm mt-1">
                Join in less than 2 minutes
              </p>
            </div>

            <div className="space-y-3">
              <div>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50 transition-all duration-200"
                  required
                />
              </div>

              <div>
                <input
                  type="tel"
                  name="mobile"
                  value={form.mobile}
                  onChange={handleChange}
                  placeholder="Mobile Number"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50 transition-all duration-200"
                  required
                />
              </div>

              <div>
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Create Password"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50 transition-all duration-200"
                  required
                />
              </div>

              <div>
                <input
                  type="password"
                  name="confirm"
                  value={form.confirm}
                  onChange={handleChange}
                  placeholder="Confirm Password"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50 transition-all duration-200"
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 rounded-lg mt-6 transition-all duration-200 transform hover:scale-[1.02]"
            >
              Create Student Account
            </button>

            <div className="flex items-center my-6">
              <div className="flex-grow h-px bg-gray-200" />
              <span className="mx-4 text-gray-500 text-sm font-medium">
                or continue with
              </span>
              <div className="flex-grow h-px bg-gray-200" />
            </div>

            <button
              type="button"
              className="w-full flex items-center justify-center gap-3 border-2 border-gray-200 rounded-lg py-2.5 bg-white hover:bg-gray-50 text-gray-700 font-medium transition-all duration-200"
            >
              <FcGoogle className="text-2xl" />
              Google Account
            </button>
          </form>

          <div className="mt-8 text-center">
            <span className="text-gray-600">Already have an account? </span>
            <button
              type="button"
              className="text-blue-700 hover:text-blue-800 font-semibold hover:underline transition-all duration-200"
              onClick={() =>
                (window.location.href = "/Students/auth/Student-Login")
              }
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
