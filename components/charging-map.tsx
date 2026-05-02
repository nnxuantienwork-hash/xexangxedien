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
  const [hoveredStation, setHoveredStation] = useState<ChargingStation | null>(null);


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
    <div className="w-full bg-white rounded-lg shadow-lg overflow-visible">
      {/* Stations List */}
      <div className="divide-y divide-gray-200 overflow-visible">
        {filteredStations.length > 0 ? (
  <div className="space-y-2 p-4">
    {filteredStations.map((station) => (
      <div
        key={station.id}
        onMouseEnter={() => setHoveredStation(station)}

        onMouseLeave={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget as Node)) {
            setHoveredStation(null);
          }
        }}

        onClick={() => {
          window.open(
            `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(station.address)}`,
            '_blank'
          );
        }}
        className="relative cursor-pointer p-4 rounded-lg border-2 border-gray-200 hover:border-[#2d5f3f] hover:bg-[#2d5f3f]/5 transition-all duration-200"
      >
        {/* Nội dung */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900 text-sm line-clamp-2">
              {station.name}
            </h3>
            <p className="text-xs text-gray-600 mt-1 line-clamp-1">
              {station.address}
            </p>

            <div className="flex items-center gap-2 mt-2">
              <span className="px-2 py-1 bg-[#2d5f3f]/10 text-[#2d5f3f] rounded text-xs">
                {station.district}
              </span>
              <span className="text-xs text-gray-500">{station.ports}</span>
            </div>
          </div>
        </div>

        {/* MINI MAP */}
        {hoveredStation?.id === station.id && (
          <div className="absolute left-0 top-full mt-2 w-full h-48 rounded-lg overflow-hidden border shadow-lg z-[9999]">
            <iframe
              width="100%"
              height="100%"
              loading="eager"
              className="border-0 pointer-events-none"
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                station.address
              )}&output=embed`}
            />
          </div>
        )}
      </div>
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
