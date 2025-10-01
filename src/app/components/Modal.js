import React from "react";

/**
 * Reusable Modal component
 * Props:
 * - open: boolean (controls visibility)
 * - onClose: function (called when modal should close)
 * - title: string (optional, modal header)
 * - children: ReactNode (modal content)
 * - size: 'sm' | 'md' | 'lg' (optional, default 'md')
 */
export default function Modal({ open, onClose, title, children, size = "md" }) {
  if (!open) return null;

  let sizeClass = "max-w-md";
  if (size === "sm") sizeClass = "max-w-xs";
  if (size === "lg") sizeClass = "max-w-2xl";

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div
        className={`bg-white rounded-lg shadow-xl w-full ${sizeClass} mx-4 relative animate-fade-in`}
        role="dialog"
        aria-modal="true"
      >
        {/* Close button */}
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl font-bold focus:outline-none"
          onClick={onClose}
          aria-label="Close modal"
        >
          &times;
        </button>
        {/* Modal header */}
        {title && (
          <div className="px-6 pt-6 pb-2 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
          </div>
        )}
        {/* Modal content */}
        <div className="px-6 py-6">{children}</div>
      </div>
    </div>
  );
}
