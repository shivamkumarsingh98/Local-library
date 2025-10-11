/* eslint-disable react/no-unescaped-entities */
"use client";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";
import { loginOwner } from "../../../Utils/Api"; // Ensure this path is correct

function Page() {
  const router = useRouter();
  const [form, setForm] = useState({ mobile: "", password: "" });
  const [errors, setErrors] = useState({ mobile: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    let valid = true;
    const newErrors = {};

    // Mobile validation
    if (!form.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
      valid = false;
    } else if (!/^[0-9]{10}$/.test(form.mobile)) {
      newErrors.mobile = "Enter a valid 10-digit mobile number";
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

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const response = await loginOwner({
        mobile: form.mobile,
        password: form.password,
      });

      console.log("Login success:", response);
      alert("Login successful!");
      router.push("/Wating-list"); // Redirect after login
    } catch (err) {
      console.error("Login failed:", err);
      alert("Login failed. Please check your credentials.");
    }
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
        </div>

        {/* Right form */}
        <div className="md:w-1/2 w-full flex flex-col justify-center items-center p-8 bg-white">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-xs flex flex-col gap-4"
          >
            <h3 className="text-2xl font-semibold text-blue-700 mb-2">Login</h3>

            {/* Mobile Number */}
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
              <p className="text-gray-400 text-xs mt-1">
                Enter your 10-digit mobile number
              </p>
              {errors.mobile && (
                <p className="text-red-500 text-sm">{errors.mobile}</p>
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
              <p className="text-gray-400 text-xs mt-1">
                At least 6 characters
              </p>
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password}</p>
              )}
            </div>

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
