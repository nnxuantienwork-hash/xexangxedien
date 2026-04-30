"use client"

import { useState } from "react"

interface ChargerData {
  type: "AC" | "DC"
  name: string
  speed: string
  mechanism: string
  power: string
  location: string
  cost: string
  color: string
  percentage: number
}

const chargerData: ChargerData[] = [
  {
    type: "AC",
    name: "Sạc thường AC",
    speed: "Chậm (6-12 tiếng để đầy pin)",
    mechanism: "Cấp nguồn AC, xe dùng bộ sạc trên xe (onboard charger) để chuyển đổi thành DC",
    power: "11kW, 22kW",
    location: "Tại nhà, chung cư, văn phòng, bãi đỗ xe",
    cost: "Rẻ, tiết kiệm tối đa",
    color: "#22C55E",
    percentage: 50,
  },
  {
    type: "DC",
    name: "Sạc nhanh DC",
    speed: "Nhanh (30-120 phút để đạt 80% pin)",
    mechanism: "Cấp trực tiếp nguồn DC vào pin, bỏ qua bộ chuyển đổi trên xe để tăng tốc độ",
    power: "30kW, 60kW, 150kW, 250kW",
    location: "Trạm sạc công cộng, quốc lộ, cây xăng, TTTM",
    cost: "Cao hơn (do chi phí hạ tầng và dịch vụ sạc nhanh)",
    color: "#F97316",
    percentage: 50,
  },
]

function ACChargerIcon({ isHovered }: { isHovered: boolean }) {
  return (
    <svg
      viewBox="0 0 120 160"
      className={`w-full h-full transition-transform duration-300 ${isHovered ? "scale-105" : ""}`}
    >
      {/* Charger body */}
      <rect
        x="20"
        y="30"
        width="80"
        height="110"
        rx="8"
        fill={isHovered ? "#16A34A" : "#22C55E"}
        className="transition-colors duration-300"
      />
      
      {/* Screen */}
      <rect x="30" y="45" width="60" height="35" rx="4" fill="#1F2937" />
      <rect x="35" y="50" width="50" height="25" rx="2" fill="#064E3B" />
      
      {/* AC symbol on screen */}
      <text x="60" y="68" textAnchor="middle" fill="#4ADE80" fontSize="14" fontWeight="bold">
        AC
      </text>
      
      {/* Cable holder */}
      <rect x="40" y="90" width="40" height="8" rx="4" fill="#1F2937" />
      
      {/* Cable */}
      <path
        d="M60 98 Q60 115 45 125 Q30 135 30 150"
        stroke="#374151"
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
      />
      
      {/* Plug */}
      <rect x="24" y="148" width="12" height="10" rx="2" fill="#1F2937" />
      <rect x="26" y="152" width="3" height="4" rx="1" fill="#6B7280" />
      <rect x="31" y="152" width="3" height="4" rx="1" fill="#6B7280" />
      
      {/* Status light */}
      <circle cx="60" cy="118" r="4" fill={isHovered ? "#4ADE80" : "#86EFAC"}>
        {isHovered && (
          <animate attributeName="opacity" values="1;0.5;1" dur="1s" repeatCount="indefinite" />
        )}
      </circle>
      
      {/* Base */}
      <rect x="25" y="140" width="70" height="5" rx="2" fill="#1F2937" />
    </svg>
  )
}

function DCChargerIcon({ isHovered }: { isHovered: boolean }) {
  return (
    <svg
      viewBox="0 0 140 160"
      className={`w-full h-full transition-transform duration-300 ${isHovered ? "scale-105" : ""}`}
    >
      {/* Main charger body - larger for DC */}
      <rect
        x="15"
        y="20"
        width="110"
        height="120"
        rx="10"
        fill={isHovered ? "#EA580C" : "#F97316"}
        className="transition-colors duration-300"
      />
      
      {/* Top section */}
      <rect x="20" y="25" width="100" height="15" rx="4" fill="#1F2937" />
      
      {/* Main screen */}
      <rect x="25" y="45" width="90" height="45" rx="6" fill="#1F2937" />
      <rect x="30" y="50" width="80" height="35" rx="4" fill="#7C2D12" />
      
      {/* DC symbol and power indicator */}
      <text x="70" y="72" textAnchor="middle" fill="#FDBA74" fontSize="16" fontWeight="bold">
        DC FAST
      </text>
      
      {/* Power bars */}
      <rect x="35" y="78" width="15" height="4" rx="1" fill="#FB923C" />
      <rect x="52" y="78" width="15" height="4" rx="1" fill="#FB923C" />
      <rect x="69" y="78" width="15" height="4" rx="1" fill="#FB923C" />
      <rect x="86" y="78" width="15" height="4" rx="1" fill={isHovered ? "#FB923C" : "#7C2D12"}>
        {isHovered && (
          <animate attributeName="fill" values="#7C2D12;#FB923C;#7C2D12" dur="0.5s" repeatCount="indefinite" />
        )}
      </rect>
      
      {/* Dual cable holders */}
      <rect x="30" y="100" width="35" height="10" rx="5" fill="#1F2937" />
      <rect x="75" y="100" width="35" height="10" rx="5" fill="#1F2937" />
      
      {/* Left cable (CCS) */}
      <path
        d="M47 110 Q47 125 35 135 Q20 145 15 155"
        stroke="#374151"
        strokeWidth="7"
        fill="none"
        strokeLinecap="round"
      />
      
      {/* Right cable (CHAdeMO) */}
      <path
        d="M93 110 Q93 125 105 135 Q120 145 125 155"
        stroke="#374151"
        strokeWidth="7"
        fill="none"
        strokeLinecap="round"
      />
      
      {/* Left plug (CCS style) */}
      <rect x="8" y="152" width="16" height="12" rx="3" fill="#1F2937" />
      <circle cx="12" cy="158" r="2" fill="#6B7280" />
      <circle cx="20" cy="158" r="2" fill="#6B7280" />
      <rect x="11" y="161" width="10" height="2" rx="1" fill="#6B7280" />
      
      {/* Right plug (CHAdeMO style) */}
      <circle cx="125" cy="158" r="8" fill="#1F2937" />
      <circle cx="122" cy="155" r="2" fill="#6B7280" />
      <circle cx="128" cy="155" r="2" fill="#6B7280" />
      <circle cx="125" cy="161" r="2" fill="#6B7280" />
      
      {/* Lightning bolt icon */}
      <path
        d="M65 28 L72 28 L68 33 L75 33 L62 42 L66 35 L60 35 Z"
        fill="#FBBF24"
      />
      
      {/* Status lights */}
      <circle cx="85" cy="32" r="3" fill={isHovered ? "#4ADE80" : "#86EFAC"}>
        {isHovered && (
          <animate attributeName="opacity" values="1;0.5;1" dur="0.8s" repeatCount="indefinite" />
        )}
      </circle>
      <circle cx="95" cy="32" r="3" fill={isHovered ? "#FBBF24" : "#FDE047"} />
      
      {/* Base platform */}
      <rect x="10" y="140" width="120" height="6" rx="3" fill="#1F2937" />
    </svg>
  )
}

function InfoTooltip({ data, position }: { data: ChargerData; position: "left" | "right" }) {
  return (
    <div
      className={`absolute z-20 w-80 bg-white rounded-xl shadow-2xl border border-gray-100 p-5 
        ${position === "left" ? "right-full mr-4" : "left-full ml-4"} top-1/2 -translate-y-1/2
        animate-in fade-in slide-in-from-${position === "left" ? "right" : "left"}-2 duration-200`}
      style={{ borderTop: `4px solid ${data.color}` }}
    >
      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
        <span
          className="w-3 h-3 rounded-full"
          style={{ backgroundColor: data.color }}
        />
        {data.name}
      </h3>
      
      <div className="space-y-3">
        <div className="flex gap-3">
          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">
            <svg className="w-3.5 h-3.5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Tốc độ sạc</p>
            <p className="text-sm text-gray-900">{data.speed}</p>
          </div>
        </div>

        <div className="flex gap-3">
          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">
            <svg className="w-3.5 h-3.5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div>
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Cơ chế hoạt động</p>
            <p className="text-sm text-gray-900">{data.mechanism}</p>
          </div>
        </div>

        <div className="flex gap-3">
          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">
            <svg className="w-3.5 h-3.5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div>
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Công suất phổ biến</p>
            <p className="text-sm text-gray-900 font-semibold">{data.power}</p>
          </div>
        </div>

        <div className="flex gap-3">
          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">
            <svg className="w-3.5 h-3.5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div>
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Vị trí lắp đặt</p>
            <p className="text-sm text-gray-900">{data.location}</p>
          </div>
        </div>

        <div className="flex gap-3">
          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">
            <svg className="w-3.5 h-3.5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Chi phí sạc</p>
            <p className="text-sm text-gray-900">{data.cost}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function EVChargingComparison() {
  const [hoveredCharger, setHoveredCharger] = useState<"AC" | "DC" | null>(null)

  return (
    <div className="w-full max-w-5xl mx-auto px-4">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 text-balance">
          So sánh hai loại sạc xe điện
        </h2>
        <p className="text-gray-600 text-sm md:text-base">
          Di chuột vào từng loại trụ sạc để xem thông tin chi tiết
        </p>
      </div>

      {/* Chart container */}
      <div className="relative flex items-center justify-center gap-8 md:gap-16 py-8">
        {/* AC Charger */}
        <div
          className="relative group"
          onMouseEnter={() => setHoveredCharger("AC")}
          onMouseLeave={() => setHoveredCharger(null)}
        >
          <div
            className={`w-32 h-44 md:w-40 md:h-56 cursor-pointer transition-all duration-300 
              ${hoveredCharger === "AC" ? "drop-shadow-2xl" : "drop-shadow-lg"}
              ${hoveredCharger === "DC" ? "opacity-40" : "opacity-100"}`}
          >
            <ACChargerIcon isHovered={hoveredCharger === "AC"} />
          </div>
          
          {/* Label */}
          <div className="text-center mt-4">
            <span
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300
                ${hoveredCharger === "AC" 
                  ? "bg-green-500 text-white scale-105" 
                  : "bg-green-100 text-green-700"}`}
            >
              <span className="w-2 h-2 rounded-full bg-current" />
              Sạc AC
            </span>
          </div>

          {/* Tooltip */}
          {hoveredCharger === "AC" && (
            <InfoTooltip data={chargerData[0]} position="left" />
          )}
        </div>

        {/* VS Divider */}
        <div className="flex flex-col items-center gap-2">
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-gray-300 to-transparent" />
          <span className="text-gray-400 font-bold text-lg">VS</span>
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-gray-300 to-transparent" />
        </div>

        {/* DC Charger */}
        <div
          className="relative group"
          onMouseEnter={() => setHoveredCharger("DC")}
          onMouseLeave={() => setHoveredCharger(null)}
        >
          <div
            className={`w-36 h-44 md:w-48 md:h-56 cursor-pointer transition-all duration-300
              ${hoveredCharger === "DC" ? "drop-shadow-2xl" : "drop-shadow-lg"}
              ${hoveredCharger === "AC" ? "opacity-40" : "opacity-100"}`}
          >
            <DCChargerIcon isHovered={hoveredCharger === "DC"} />
          </div>
          
          {/* Label */}
          <div className="text-center mt-4">
            <span
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300
                ${hoveredCharger === "DC" 
                  ? "bg-orange-500 text-white scale-105" 
                  : "bg-orange-100 text-orange-700"}`}
            >
              <span className="w-2 h-2 rounded-full bg-current" />
              Sạc DC
            </span>
          </div>

          {/* Tooltip */}
          {hoveredCharger === "DC" && (
            <InfoTooltip data={chargerData[1]} position="right" />
          )}
        </div>
      </div>

      {/* Mobile info cards - visible on small screens */}
      <div className="md:hidden mt-8 space-y-4">
        {chargerData.map((data) => (
          <div
            key={data.type}
            className="bg-white rounded-xl shadow-lg border border-gray-100 p-4"
            style={{ borderLeft: `4px solid ${data.color}` }}
          >
            <h3 className="font-bold text-gray-900 mb-3">{data.name}</h3>
            <div className="space-y-2 text-sm">
              <p><span className="font-medium text-gray-500">Tốc độ:</span> {data.speed}</p>
              <p><span className="font-medium text-gray-500">Công suất:</span> {data.power}</p>
              <p><span className="font-medium text-gray-500">Vị trí:</span> {data.location}</p>
              <p><span className="font-medium text-gray-500">Chi phí:</span> {data.cost}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="mt-12 flex justify-center">
        <div className="grid grid-cols-2 gap-8 text-center">
          <div className="flex items-center justify-center gap-2">
            <span className="w-4 h-4 rounded-full bg-green-500" />
            <span className="text-sm text-gray-600">Sạc thường AC</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 rounded-full bg-orange-500" />
            <span className="text-sm text-gray-600">Sạc nhanh DC</span>
          </div>
        </div>
      </div>
    </div>
  )
}
