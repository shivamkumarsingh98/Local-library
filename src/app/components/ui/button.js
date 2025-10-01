import * as React from "react";

export const Button = React.forwardRef(function Button(
  { className = "", variant = "", ...props },
  ref
) {
  let base =
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none px-4 py-2 ";
  let variants = {
    outline: "border border-gray-300 bg-white text-black hover:bg-gray-100",
    default: "bg-blue-600 text-white hover:bg-blue-700",
  };
  return (
    <button
      ref={ref}
      className={`${base} ${
        variants[variant] || variants.default
      } ${className}`}
      {...props}
    />
  );
});
