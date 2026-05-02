'use client';

import { useState, useMemo } from 'react';
import SearchFilters from './search-filters';
import ChargingStationsMap from './charging-map';
import { STATIONS_WITH_COORDS } from '../lib/charging-stations-data';

export default function ChargingStationsSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');

  // filter để đếm số kết quả
  const filteredStations = useMemo(() => {
    return STATIONS_WITH_COORDS.filter((station) => {
      const matchesSearch =
        station.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        station.address.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesDistrict =
        !selectedDistrict || station.district === selectedDistrict;

      return matchesSearch && matchesDistrict;
    });
  }, [searchQuery, selectedDistrict]);

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <SearchFilters
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedDistrict={selectedDistrict}
        onDistrictChange={setSelectedDistrict}
        resultCount={filteredStations.length}
      />

      <ChargingStationsMap
        searchQuery={searchQuery}
        selectedDistrict={selectedDistrict}
      />
    </div>
  );
}
