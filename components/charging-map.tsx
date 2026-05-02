'use client';

import { useState, useMemo } from 'react';
import { ChargingStation, STATIONS_WITH_COORDS } from '@/lib/charging-stations-data';
import StationDetails from './station-details';

interface MapProps {
  searchQuery: string;
  selectedDistrict: string;
}

export default function ChargingStationsMap({ searchQuery, selectedDistrict }: MapProps) {
  const [selectedStation, setSelectedStation] = useState<ChargingStation | null>(null);

  // Filter stations based on search query and district
  const filteredStations = useMemo(() => {
    return STATIONS_WITH_COORDS.filter((station) => {
      const matchesSearch =
        station.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        station.address.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesDistrict = !selectedDistrict || station.district === selectedDistrict;

      return matchesSearch && matchesDistrict;
    });
  }, [searchQuery, selectedDistrict]);

  return (
    <div className="w-full bg-white rounded-lg overflow-hidden shadow-lg">
      {/* Stations List */}
      <div className="divide-y divide-gray-200">
        {filteredStations.length > 0 ? (
          <div className="space-y-2 p-4">
            {filteredStations.map((station) => (
              <button
                key={station.id}
                onClick={() => setSelectedStation(station)}
                className="w-full text-left p-4 rounded-lg border-2 border-gray-200 hover:border-[#2d5f3f] hover:bg-[#2d5f3f]/5 transition-all duration-200"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 text-sm line-clamp-2">
                      {station.name}
                    </h3>
                    <p className="text-xs text-gray-600 mt-1 line-clamp-1">{station.address}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="inline-block px-2 py-1 bg-[#2d5f3f]/10 text-[#2d5f3f] rounded text-xs font-medium">
                        {station.district}
                      </span>
                      <span className="text-xs text-gray-500">{station.ports}</span>
                    </div>
                  </div>
                  <div className="flex-shrink-0 text-[#f59e0b]">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.21 14.77a.75.75 0 01.02-1.06L14.168 8.75l-6.436-.002a.75.75 0 010-1.5l8.5.003a.75.75 0 01.75.75v8.5a.75.75 0 01-1.5 0v-6.43l-6.947 6.028a.75.75 0 01-1.059-.02z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </button>
            ))}
          </div>
        ) : (
          <div className="p-12 text-center">
            <p className="text-gray-600 font-medium">Không tìm thấy trạm sạc</p>
            <p className="text-gray-500 text-sm mt-1">Vui lòng thử tìm kiếm khác</p>
          </div>
        )}
      </div>

      {/* Station details panel */}
      {selectedStation && filteredStations.some((s) => s.id === selectedStation.id) && (
        <div className="border-t-2 border-gray-200">
          <StationDetails station={selectedStation} onClose={() => setSelectedStation(null)} />
        </div>
      )}
    </div>
  );
}
