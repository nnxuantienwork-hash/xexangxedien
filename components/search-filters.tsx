'use client';

import { Search, ChevronDown } from 'lucide-react';
import { DISTRICTS } from '@/lib/charging-stations-data';
import { useState, useRef, useEffect } from 'react';

interface SearchFiltersProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedDistrict: string;
  onDistrictChange: (district: string) => void;
}

export default function SearchFilters({
  searchQuery,
  onSearchChange,
  selectedDistrict,
  onDistrictChange,
}: SearchFiltersProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="space-y-4 mb-6">
      {/* Header section */}
      <div>
        <h1 className="text-3xl md:text-4xl font-bold text-green-950 mb-2">
          Trạm Sạc VinFast
        </h1>
        <p className="text-gray-600">
          Tìm trạm sạc gần bạn tại Thành phố Hồ Chí Minh (địa danh trước sáp nhập)
        </p>
      </div>

      {/* Search and filters row */}
      <div className="flex flex-col md:flex-row gap-3">
        {/* Search input */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
          <input
            type="text"
            placeholder="Tìm kiếm theo tên hoặc địa chỉ..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-950 focus:border-transparent transition-all duration-200"
          />
        </div>

        {/* District dropdown */}
        <div className="relative min-w-48" ref={dropdownRef}>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg flex items-center justify-between hover:border-green-950 focus:outline-none focus:ring-2 focus:ring-green-950 focus:border-transparent transition-all duration-200 bg-white"
          >
            <span className="text-gray-700">
              {selectedDistrict || 'Tất cả quận/huyện'}
            </span>
            <ChevronDown
              className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                isOpen ? 'rotate-180' : ''
              }`}
            />
          </button>

          {/* Dropdown menu */}
          {isOpen && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg z-50 max-h-64 overflow-y-auto">
              <button
                onClick={() => {
                  onDistrictChange('');
                  setIsOpen(false);
                }}
                className={`w-full text-left px-4 py-3 hover:bg-green-50 transition-colors duration-200 ${
                  !selectedDistrict
                    ? 'bg-green-50 text-green-950 font-medium'
                    : 'text-gray-700'
                }`}
              >
                Tất cả quận/huyện
              </button>

              {DISTRICTS.map((district) => (
                <button
                  key={district}
                  onClick={() => {
                    onDistrictChange(district);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 hover:bg-green-50 transition-colors duration-200 ${
                    selectedDistrict === district
                      ? 'bg-green-50 text-green-950 font-medium'
                      : 'text-gray-700'
                  }`}
                >
                  {district}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
