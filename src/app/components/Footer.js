"use client"; // Optional if you use client interactivity

import * as React from "react";
import Script from "next/script";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300" aria-label="Footer">
      {/* JSON-LD Structured Data for SEO */}
      <Script id="footer-schema" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Local Libraries",
          url: "https://locallibraries.in",
          logo: "https://locallibraries.in/images/Final Logo.jpg",
          contactPoint: [
            {
              "@type": "ContactPoint",
              email: "contact@locallibraries.in",
              telephone: "+91-9591907942",
              contactType: "Customer Support",
            },
          ],
          sameAs: [
            "https://www.facebook.com/LocalLibraries",
            "https://www.linkedin.com/company/locallibraries",
            "https://twitter.com/locallibraries",
          ],
        })}
      </Script>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-xl font-semibold mb-3">
              Local Library
            </h3>
            <p className="text-sm leading-6">
              Discover and book verified study spaces with top-class facilities
              for focused preparation.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-white">
                  Features
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-white">
                  Reviews
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Get in Touch</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:contact@locallibraries.in"
                  className="hover:text-white"
                >
                  contact@locallibraries.in
                </a>
              </li>
              <li>
                <a href="tel:+919591907942" className="hover:text-white">
                  +91 (9591) 907-942
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 relative h-50 bg-gray-900">
        {/* Large background text */}
        <h1 className="absolute inset-0 flex items-center justify-center text-6xl sm:text-9xl font-extrabold text-gray-700 opacity-20 select-none pointer-events-none">
          Local Libraries
        </h1>

        {/* Actual footer content */}
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col sm:flex-row items-center justify-between gap-3 relative z-10">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Local Libraries. All rights reserved.
          </p>
          <p className="text-sm text-white font-semibold">Local Libraries</p>
        </div>
      </div>
    </footer>
  );
}
