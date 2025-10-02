import * as React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-xl font-semibold mb-3">Local library</h3>
            <p className="text-sm leading-6">
              Discover and book verified study spaces with top-class facilities for
              focused preparation.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#features" className="hover:text-white">Features</a></li>
              <li><a href="#reviews" className="hover:text-white">Reviews</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Help Center</a></li>
              <li><a href="#" className="hover:text-white">FAQs</a></li>
              <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Get in touch</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="mailto:support@locallibrary.app" className="hover:text-white">support@locallibrary.app</a></li>
              <li><a href="tel:+10000000000" className="hover:text-white">+1 (000) 000-0000</a></li>
              <li className="flex items-center gap-4 pt-2">
                <a href="#" aria-label="Twitter" className="hover:text-white">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.27 4.27 0 0 0 1.87-2.36 8.56 8.56 0 0 1-2.71 1.04 4.26 4.26 0 0 0-7.26 3.88A12.09 12.09 0 0 1 3.15 4.87a4.25 4.25 0 0 0 1.32 5.68c-.65-.02-1.27-.2-1.81-.5v.05a4.26 4.26 0 0 0 3.42 4.18c-.31.09-.64.13-.98.13-.24 0-.48-.02-.71-.07a4.27 4.27 0 0 0 3.98 2.96A8.55 8.55 0 0 1 2 19.54 12.06 12.06 0 0 0 8.29 21c7.55 0 11.68-6.26 11.68-11.68 0-.18 0-.36-.01-.54A8.34 8.34 0 0 0 22.46 6z" />
                  </svg>
                </a>
                <a href="#" aria-label="Facebook" className="hover:text-white">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M22 12a10 10 0 1 0-11.56 9.9v-7h-2.2V12h2.2V9.8c0-2.17 1.29-3.38 3.27-3.38.95 0 1.95.17 1.95.17v2.14h-1.1c-1.08 0-1.42.67-1.42 1.35V12h2.42l-.39 2.9h-2.03v7A10 10 0 0 0 22 12" />
                  </svg>
                </a>
                <a href="#" aria-label="Instagram" className="hover:text-white">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Zm-5 3.8A4.2 4.2 0 1 1 7.8 12 4.2 4.2 0 0 1 12 7.8Zm0 2A2.2 2.2 0 1 0 14.2 12 2.2 2.2 0 0 0 12 9.8Zm5.4-2.5a.9.9 0 1 1-.9.9.9.9 0 0 1 .9-.9Z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} Local library. All rights reserved.</p>
          <p className="text-sm text-white">Local library</p>
        </div>
      </div>
    </footer>
  );
}



