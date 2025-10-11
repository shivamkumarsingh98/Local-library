'use client'
import { useState } from 'react'
import { FaFilter } from 'react-icons/fa'

export default function Filter({ onFilterChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState({
    priceRange: '',
    amenities: [],
    sort: '',
    type: ''
  });

  const handleFilterChange = (type, value) => {
    let newFilters = { ...filters };
    
    if (type === 'amenities') {
      if (newFilters.amenities.includes(value)) {
        newFilters.amenities = newFilters.amenities.filter(item => item !== value);
      } else {
        newFilters.amenities = [...newFilters.amenities, value];
      }
    } else {
      newFilters[type] = value;
    }
    
    setFilters(newFilters);
    onFilterChange?.(newFilters);
  };

  return (
    <>
      {/* Mobile Filter Button */}
      <button
        className="fixed bottom-4 right-4 z-50 md:hidden bg-blue-600 text-white p-3 rounded-full shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaFilter className="w-5 h-5" />
      </button>

      {/* Filter Panel */}
      <div className={`
        fixed md:relative bottom-0 left-0 w-full md:w-64 bg-white md:min-h-screen border-r
        transform ${isOpen ? 'translate-y-0' : 'translate-y-full'} 
        md:transform-none transition-transform duration-200 ease-in-out z-40
        md:block p-4 overflow-y-auto shadow-lg md:shadow-none
      `}>
        <div className="space-y-6">
          {/* Price Range */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Price Range</h3>
            <div className="space-y-2">
              {[
                { label: 'All', value: '' },
                { label: 'Under ₹500', value: '0-500' },
                { label: '₹500 - ₹1000', value: '500-1000' },
                { label: '₹1000 - ₹2000', value: '1000-2000' },
                { label: 'Above ₹2000', value: '2000+' }
              ].map((range) => (
                <label key={range.value} className="flex items-center">
                  <input
                    type="radio"
                    name="priceRange"
                    value={range.value}
                    checked={filters.priceRange === range.value}
                    onChange={(e) => handleFilterChange('priceRange', e.target.value)}
                    className="form-radio text-blue-600"
                  />
                  <span className="ml-2 text-gray-700">{range.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Library Type */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Library Type</h3>
            <div className="space-y-2">
              {[
                { label: 'All Types', value: '' },
                { label: 'Premium', value: 'premium' },
                { label: 'Standard', value: 'standard' },
                { label: 'Budget', value: 'budget' }
              ].map((type) => (
                <label key={type.value} className="flex items-center">
                  <input
                    type="radio"
                    name="type"
                    value={type.value}
                    checked={filters.type === type.value}
                    onChange={(e) => handleFilterChange('type', e.target.value)}
                    className="form-radio text-blue-600"
                  />
                  <span className="ml-2 text-gray-700">{type.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Amenities */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Amenities</h3>
            <div className="space-y-2">
              {[
                'AC',
                'WiFi',
                'Cafeteria',
                'Locker',
                'Study Room',
                'Digital Library',
                'Power Backup',
                'Water Dispenser'
              ].map((amenity) => (
                <label key={amenity} className="flex items-center">
                  <input
                    type="checkbox"
                    value={amenity}
                    checked={filters.amenities.includes(amenity)}
                    onChange={(e) => handleFilterChange('amenities', e.target.value)}
                    className="form-checkbox text-blue-600"
                  />
                  <span className="ml-2 text-gray-700">{amenity}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Sort Options */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Sort By</h3>
            <select
              value={filters.sort}
              onChange={(e) => handleFilterChange('sort', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Recommended</option>
              <option value="price_low">Price: Low to High</option>
              <option value="price_high">Price: High to Low</option>
              <option value="rating">Rating</option>
              <option value="popularity">Popularity</option>
            </select>
          </div>

          {/* Apply Button (Mobile Only) */}
          <button
            className="md:hidden w-full bg-blue-600 text-white py-3 rounded-lg font-semibold mt-4"
            onClick={() => setIsOpen(false)}
          >
            Apply Filters
          </button>
        </div>
      </div>
    </>
  );
}
