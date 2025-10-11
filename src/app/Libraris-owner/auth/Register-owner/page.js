/* eslint-disable react/no-unescaped-entities */
"use client";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { registerOwner } from "../../../Utils/Api";
import { useRouter } from "next/navigation";

function Page() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // reset error on change
  };

  const validate = () => {
    let valid = true;
    const newErrors = {};

    // Name validation
    if (!form.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!emailRegex.test(form.email)) {
      newErrors.email = "Invalid email format";
      valid = false;
    }

    // Mobile validation
    const mobileRegex = /^[0-9]{10}$/;
    if (!form.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
      valid = false;
    } else if (!mobileRegex.test(form.mobile)) {
      newErrors.mobile = "Mobile must be 10 digits";
      valid = false;
    }

    // Password validation
    if (!form.password) {
      newErrors.password = "Password is required";
      valid = false;
    } else if (form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      valid = false;
    }

    // Confirm password
    if (!form.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
      valid = false;
    } else if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const response = await registerOwner(form);
      console.log("Registration success:", response);
      alert("Registration successful!");
      router.push("/Wating-list");
    } catch (error) {
      console.error("Registration failed:", error);
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-hidden border border-gray-100">
        {/* Left content */}
        <div className="md:w-1/2 bg-blue-700 text-white flex flex-col justify-center items-center p-10">
          <h2 className="text-3xl font-bold mb-4">Welcome</h2>
          <p className="mb-6 text-base text-blue-100 text-center">
            Register as a Library Owner and manage your library with ease.
            Access admin features, analytics, and more!
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
            <h3 className="text-2xl font-semibold text-blue-700 mb-2">
              Register
            </h3>

            {/* Name */}
            <div className="flex flex-col">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>

            {/* Mobile */}
            <div className="flex flex-col">
              <input
                type="tel"
                name="mobile"
                value={form.mobile}
                onChange={handleChange}
                placeholder="Mobile Number"
                className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              {errors.mobile && (
                <p className="text-red-500 text-sm">{errors.mobile}</p>
              )}
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>

            {/* Password */}
            <div className="flex flex-col">
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Password"
                className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password}</p>
              )}
            </div>

            {/* Confirm Password */}
            <div className="flex flex-col">
              <input
                type="password"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Password"
                className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 rounded mt-2 transition"
            >
              Register
            </button>

            <div className="flex items-center my-2">
              <div className="flex-grow h-px bg-gray-200" />
              <span className="mx-2 text-gray-400 text-sm">or</span>
              <div className="flex-grow h-px bg-gray-200" />
            </div>

            <button
              type="button"
              className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded py-2 bg-white hover:bg-gray-50 text-gray-700 font-medium transition"
              onClick={() =>
                window.open("http://localhost:3004/auth/google", "_self")
              }
            >
              <FcGoogle className="text-xl" />
              Continue with Google
            </button>
          </form>

          <button
            type="button"
            className="w-full mt-4 text-blue-700 hover:underline text-sm font-medium"
            onClick={() =>
              (window.location.href = "/Libraris-owner/auth/Login-Owner")
            }
          >
            You have an account? Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Page;
