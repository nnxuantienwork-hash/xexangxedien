'use client';

import { useState, useMemo } from 'react';
import SearchFilters from './search-filters';
import ChargingStationsMap from './charging-map';
import { STATIONS_WITH_COORDS } from '../lib/charging-stations-data';

export default function ChargingStationsSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');

console.log({
  searchQuery,
  selectedDistrict,
});


  return (
  <div className="max-w-5xl mx-auto px-4 py-12">

    {/* ===== SEARCH ===== */}
    <SearchFilters
      searchQuery={searchQuery}
      onSearchChange={setSearchQuery}
      selectedDistrict={selectedDistrict}
      onDistrictChange={setSelectedDistrict}
    />

    {/* 👉 CHỈ HIỆN BIỂU ĐỒ KHI CHƯA SEARCH */}
    {!searchQuery.trim() && !selectedDistrict && (
      <>
        {(() => {
          const stats = Object.entries(
            STATIONS_WITH_COORDS.reduce((acc, station) => {
              acc[station.district] = (acc[station.district] || 0) + 1;
              return acc;
            }, {} as Record<string, number>)
          )
            .map(([district, count]) => ({ district, count }))
            .sort((a, b) => b.count - a.count);

          const max = Math.max(...stats.map(s => s.count));

          return (
            <>
              {/* ===== BIỂU ĐỒ ===== */}
              <div className="grid grid-cols-2 gap-4 my-6">
                {stats.map((item) => (
                  <div key={item.district} className="bg-white p-4 rounded-lg shadow">

                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">{item.district}</span>
                      <span className="text-xs text-gray-500">
                        {item.count} trạm
                      </span>
                    </div>

                    <div className="w-full h-2 bg-gray-200 rounded overflow-hidden">
                      <div
                        className="h-2 rounded bg-gradient-to-r from-green-700 to-green-400"
                        style={{
                          width: `${(item.count / max) * 100}%`
                        }}
                      />
                    </div>

                  </div>
                ))}
              </div>
            </>
          );
        })()}
      </>
    )}

    {/* 👉 CHỈ HIỆN DANH SÁCH KHI CÓ SEARCH */}
{(searchQuery.trim() !== '' || selectedDistrict !== '') && (
  <ChargingStationsMap
    searchQuery={searchQuery}
    selectedDistrict={selectedDistrict}
  />
)}


  </div>
);
}