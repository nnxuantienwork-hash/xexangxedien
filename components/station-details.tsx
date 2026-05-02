'use client';

import { ChargingStation } from '@/lib/charging-stations-data';
import { X, MapPin, Zap } from 'lucide-react';

interface StationDetailsProps {
  station: ChargingStation;
  onClose: () => void;
}

export default function StationDetails({ station, onClose }: StationDetailsProps) {
  return (
    <div className="bg-white border-l-4 border-t-4 border-t-amber-400 border-l-green-950 shadow-2xl rounded-lg p-6 m-4 animate-in slide-in-from-right-4 duration-300">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-1 hover:bg-gray-100 rounded-full transition-colors duration-200"
        aria-label="Close details"
      >
        <X className="w-5 h-5 text-gray-600" />
      </button>

      {/* Station name */}
      <h2 className="text-xl font-bold text-green-950 pr-8 mb-4 line-clamp-2">
        {station.name}
      </h2>

      {/* Address */}
      <div className="flex gap-3 mb-4">
        <MapPin className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
        <div>
          <p className="text-sm text-gray-600 font-medium">Địa chỉ</p>
          <p className="text-sm text-gray-800">{station.address}</p>
        </div>
      </div>

      {/* District */}
      <div className="mb-4">
        <p className="text-xs font-semibold text-green-950 uppercase tracking-wide mb-1">
          Quận/Huyện
        </p>
        <span className="inline-block px-3 py-1 bg-green-950 text-white text-sm rounded-full">
          {station.district}
        </span>
      </div>

      {/* Charging ports */}
      <div className="flex gap-3 mb-4">
        <Zap className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
        <div>
          <p className="text-sm text-gray-600 font-medium mb-1">Cổng sạc</p>
          <p className="text-sm text-gray-800">{station.ports}</p>
        </div>
      </div>

      {/* Coordinates */}
      <div className="pt-4 border-t border-gray-200">
        <p className="text-xs text-gray-500">
          Tọa độ: {station.latitude.toFixed(4)}, {station.longitude.toFixed(4)}
        </p>
      </div>

      {/* Action button */}
      <button
        className="mt-4 w-full py-2 px-4 bg-green-950 hover:bg-green-900 text-white text-sm font-medium rounded transition-colors duration-200"
      >
        Xem chỉ đường
      </button>
    </div>
  );
}
