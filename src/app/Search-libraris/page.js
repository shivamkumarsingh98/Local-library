"use client";

import * as React from "react";
import Link from "next/link";

const HARD_CODED_LIBRARIES = [
  {
    id: "lib-1",
    name: "FocusPoint Library, Koramangala",
    area: "Koramangala, Bangalore",
    pricePerMonth: 2200,
    deposit: 1200,
    facilities: ["AC", "WiFi", "Personal Cabin", "24x7 Power"],
    openHours: "6:00 AM - 11:00 PM",
    image: "/images/heroimage.jpg",
    availableSeats: 12,
    isActive: true,
  },
  {
    id: "lib-2",
    name: "SilentStudy Hub, HSR Layout",
    area: "HSR Layout, Bangalore",
    pricePerMonth: 1800,
    deposit: 1000,
    facilities: ["AC", "WiFi", "Locker", "CCTV"],
    openHours: "7:00 AM - 10:00 PM",
    image: "/images/herosection.jpg",
    availableSeats: 0,
    isActive: false,
  },
  {
    id: "lib-3",
    name: "Scholars Den, JP Nagar",
    area: "JP Nagar, Bangalore",
    pricePerMonth: 2500,
    deposit: 1500,
    facilities: ["AC", "High-speed WiFi", "Personal Cabin", "Cafe"],
    openHours: "5:30 AM - 12:00 AM",
    image: "/images/libreres.avif",
    availableSeats: 5,
    isActive: true,
  },
];

function FacilityTag({ label }) {
  return (
    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200">
      {label}
    </span>
  );
}

export default function SearchLibrariesPage() {
  const [query, setQuery] = React.useState("");
  const [filters, setFilters] = React.useState({
    ac: false,
    wifi: false,
    cabin: false,
    activeOnly: false,
  });

  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    return HARD_CODED_LIBRARIES.filter((lib) => {
      const matchesQuery = q
        ? lib.name.toLowerCase().includes(q) ||
          lib.area.toLowerCase().includes(q)
        : true;
      const needsAC =
        !filters.ac ||
        lib.facilities.some((f) => f.toLowerCase().includes("ac"));
      const needsWifi =
        !filters.wifi ||
        lib.facilities.some((f) => f.toLowerCase().includes("wifi"));
      const needsCabin =
        !filters.cabin ||
        lib.facilities.some((f) => f.toLowerCase().includes("cabin"));
      const needsActive = !filters.activeOnly || lib.isActive;
      return matchesQuery && needsAC && needsWifi && needsCabin && needsActive;
    });
  }, [query, filters]);

  return (
    <div className="min-h-screen w-full bg-white">
      {/* Top search bar */}
      <div className="w-full border-b bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex gap-3 items-center">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search area, library name, facility..."
            className="flex-1 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <button
            onClick={() => setQuery((s) => s)}
            className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-white text-sm font-medium hover:bg-blue-700"
          >
            Search
          </button>
        </div>
      </div>

      {/* Main content: 3 columns */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Filters */}
        <aside className="lg:col-span-3 bg-white border rounded-xl p-4 h-fit sticky top-4">
          <h3 className="font-semibold text-gray-800 mb-3">Filters</h3>
          <div className="space-y-3">
            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={filters.ac}
                onChange={(e) =>
                  setFilters((f) => ({ ...f, ac: e.target.checked }))
                }
              />
              AC
            </label>
            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={filters.wifi}
                onChange={(e) =>
                  setFilters((f) => ({ ...f, wifi: e.target.checked }))
                }
              />
              WiFi
            </label>
            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={filters.cabin}
                onChange={(e) =>
                  setFilters((f) => ({ ...f, cabin: e.target.checked }))
                }
              />
              Personal Cabin
            </label>
            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={filters.activeOnly}
                onChange={(e) =>
                  setFilters((f) => ({ ...f, activeOnly: e.target.checked }))
                }
              />
              Active Only
            </label>
          </div>
        </aside>

        {/* Center Library Cards */}
        <main className="lg:col-span-6 space-y-4">
          {filtered.map((lib) => (
            <div
              key={lib.id}
              className="border rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition"
            >
              <div className="grid grid-cols-1 sm:grid-cols-3">
                <div className="sm:col-span-1">
                  <img
                    src={lib.image}
                    alt={lib.name}
                    className="w-full h-44 sm:h-full object-cover"
                  />
                </div>
                <div className="sm:col-span-2 p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">
                        {lib.name}
                      </h4>
                      <p className="text-sm text-gray-500">{lib.area}</p>
                    </div>
                    <button className="rounded-md bg-blue-600 px-3 py-1.5 text-white text-sm font-medium hover:bg-blue-700">
                      Book now
                    </button>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {lib.facilities.map((f) => (
                      <FacilityTag key={f} label={f} />
                    ))}
                  </div>

                  <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
                    <div>
                      <p className="text-gray-500">Price/Month</p>
                      <p className="font-semibold text-gray-800">
                        ₹ {lib.pricePerMonth.toLocaleString()}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-500">Deposit</p>
                      <p className="font-semibold text-gray-800">
                        ₹ {lib.deposit.toLocaleString()}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-500">Open Hours</p>
                      <p className="font-semibold text-gray-800">
                        {lib.openHours}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-500">Availability</p>
                      <p
                        className={`font-semibold ${
                          lib.availableSeats > 0
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                      >
                        {lib.availableSeats > 0
                          ? `${lib.availableSeats} seats`
                          : "Not available"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {filtered.length === 0 && (
            <div className="text-center text-gray-500 py-12">
              No results found. Try a different search.
            </div>
          )}
        </main>

        {/* Right Banners/Links */}
        <aside className="lg:col-span-3 space-y-4 h-fit sticky top-4">
          <div className="rounded-xl border bg-white p-4">
            <h4 className="font-semibold text-gray-800 mb-2">Quick Links</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>
                <Link href="#">Libraries with AC</Link>
              </li>
              <li>
                <Link href="#">24x7 Libraries</Link>
              </li>
              <li>
                <Link href="#">Personal Cabin</Link>
              </li>
              <li>
                <Link href="#">Budget under ₹2000</Link>
              </li>
            </ul>
          </div>
          <div className="rounded-xl overflow-hidden border">
            <img
              src="/images/heroimage.jpg"
              alt="Banner"
              className="w-full h-40 object-cover"
            />
          </div>
        </aside>
      </div>
    </div>
  );
}




