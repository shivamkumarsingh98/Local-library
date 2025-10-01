import * as React from "react";

export function DropdownMenu({ children }) {
  return <div className="relative inline-block">{children}</div>;
}

export const DropdownMenuTrigger = React.forwardRef(
  function DropdownMenuTrigger({ asChild, children, ...props }, ref) {
    if (asChild) return React.cloneElement(children, { ref, ...props });
    return (
      <button ref={ref} {...props}>
        {children}
      </button>
    );
  }
);

export function DropdownMenuContent({ children }) {
  return (
    <div className="absolute left-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
      {children}
    </div>
  );
}

export function DropdownMenuItem({ children, ...props }) {
  return (
    <div
      className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
      {...props}
    >
      {children}
    </div>
  );
}
