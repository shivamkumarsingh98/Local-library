"use client";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";

function Page() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault(); /* handle login */
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-hidden border border-gray-100">
        {/* Left content */}
        <div className="md:w-1/2 bg-blue-700 text-white flex flex-col justify-center items-center p-10">
          <h2 className="text-3xl font-bold mb-4">Welcome Back</h2>
          <p className="mb-6 text-base text-blue-100 text-center">
            Login as a Library Owner to manage your library, access analytics,
            and more!
          </p>
          <svg
            width="120"
            height="120"
            fill="none"
            viewBox="0 0 120 120"
            className="mb-2"
          >
            <rect
              x="10"
              y="10"
              width="100"
              height="100"
              rx="20"
              stroke="#fff"
              strokeWidth="2"
              fill="none"
            />
            <circle
              cx="60"
              cy="60"
              r="30"
              stroke="#fff"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M60 40v20l15 10"
              stroke="#fff"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>
        {/* Right form */}
        <div className="md:w-1/2 w-full flex flex-col justify-center items-center p-8 bg-white">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-xs flex flex-col gap-4"
          >
            <h3 className="text-2xl font-semibold text-blue-700 mb-2">Login</h3>
            <input
              type="text"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email or Mobile Number"
              className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Password"
              className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 rounded mt-2 transition"
            >
              Login
            </button>
            <div className="flex items-center my-2">
              <div className="flex-grow h-px bg-gray-200" />
              <span className="mx-2 text-gray-400 text-sm">or</span>
              <div className="flex-grow h-px bg-gray-200" />
            </div>
            <button
              type="button"
              className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded py-2 bg-white hover:bg-gray-50 text-gray-700 font-medium transition"
            >
              <FcGoogle className="text-xl" />
              Continue with Google
            </button>
          </form>
          <button
            type="button"
            className="w-full mt-4 text-blue-700 hover:underline text-sm font-medium"
            onClick={() =>
              (window.location.href = "/Libraris-owner/auth/Register-owner")
            }
          >
            Don't have an account? Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default Page;
