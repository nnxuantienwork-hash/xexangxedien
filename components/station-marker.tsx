'use client';

import { ChargingStation } from '@/lib/charging-stations-data';

interface StationMarkerProps {
  station: ChargingStation;
  isSelected: boolean;
  isHighlighted: boolean;
}

export default function StationMarker({
  station,
  isSelected,
  isHighlighted,
}: StationMarkerProps) {
  return (
    <div className="relative">
      {/* Pulse effect when selected */}
      {isSelected && (
        <div className="absolute inset-0 rounded-full animate-pulse" style={{
          width: '48px',
          height: '48px',
          marginLeft: '-24px',
          marginTop: '-24px',
          backgroundColor: '#2d5f3f',
          opacity: 0.3,
        }} />
      )}

      {/* Main marker circle */}
      <div
        className={`relative w-8 h-8 rounded-full flex items-center justify-center transform transition-all duration-300 shadow-lg border-2 ${
          isSelected
            ? 'scale-125 shadow-2xl border-white'
            : isHighlighted
            ? 'scale-110 border-white'
            : 'scale-100 border-white/50'
        }`}
        style={{
          backgroundColor: '#2d5f3f',
        }}
      >
        {/* Inner icon/indicator */}
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          style={{ color: '#f59e0b' }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      </div>

      {/* Tooltip on hover */}
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50">
        {station.name}
      </div>
    </div>
  );
}
