"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

export default function FishboneDiagram() {
  const containerRef = useRef<HTMLDivElement>(null)

  // Policy data organized by year with positions
  const policies = [
    {
      year: "2022",
      position: 0, // percentage from left
      items: [
        {
          title: "Nghị định 10/2022/NĐ-CP",
          content: "Ô tô điện chạy pin được miễn 100% lệ phí trước bạ lần đầu trong vòng 3 năm (từ 1/3/2022 đến 28/2/2025)",
          side: "top"
        },
        {
          title: "Quyết định 876/QĐ-TTg",
          content: [
            "Lộ trình 'khai tử' xe xăng:",
            "• Đến 2030: 100% xe taxi thay thế",
            "• Đến 2040: Hạn chế xe nhiên liệu hóa thạch",
            "• Đến 2050: 100% năng lượng xanh"
          ],
          side: "bottom"
        }
      ]
    },
    {
      year: "2023-2024",
      position: 33,
      items: [
        {
          title: "Đề xuất hỗ trợ chuyển đổi",
          content: "Bộ GTVT đề xuất hỗ trợ 1.000 USD/xe cho người mua xe điện và ưu đãi thuế cho doanh nghiệp trạm sạc",
          side: "top"
        },
        {
          title: "Bộ Khoa học & Công nghệ",
          content: "Ban hành tiêu chuẩn ổ cắm, dây sạc và an toàn điện cho hệ thống trạm sạc công cộng",
          side: "bottom"
        }
      ]
    },
    {
      year: "2025",
      position: 66,
      items: [
        {
          title: "Thay đổi chính sách thuế",
          content: "Kết thúc miễn 100% lệ phí trước bạ; người mua bắt đầu đóng 50% so với xe xăng (khoảng 5-6% giá trị xe)",
          side: "top"
        }
      ]
    },
    {
      year: "2026",
      position: 88,
      items: [
        {
          title: "Quy chuẩn hạ tầng đô thị",
          content: "Hướng dẫn lắp đặt trạm sạc tại hầm chung cư và tòa nhà văn phòng",
          side: "bottom"
        }
      ]
    }
  ]

  return (
    <div ref={containerRef} className="relative max-w-6xl mx-auto px-4 md:px-8 py-8 overflow-hidden">
      {/* Subtle city skyline background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <Image
          src="/hero-ev.png"
          alt=""
          fill
          className="object-cover object-bottom grayscale"
        />
      </div>
      
      {/* Light overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-slate-50/95 to-slate-50 pointer-events-none" />

      {/* Title */}
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative text-center text-xl md:text-2xl lg:text-3xl font-bold text-emerald-800 mb-12 tracking-wide z-10"
      >
        LỘ TRÌNH CHÍNH SÁCH XE ĐIỆN VIỆT NAM 2022-2026
      </motion.h2>

      {/* Timeline Container */}
      <div className="relative" style={{ height: '500px' }}>
        {/* Top cards area - 180px */}
        <div className="absolute top-0 left-0 right-0" style={{ height: '180px' }}>
          {policies.map((yearGroup, yearIndex) => (
            yearGroup.items.filter(item => item.side === 'top').map((item, itemIndex) => (
              <motion.div
                key={`top-${yearGroup.year}-${itemIndex}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: yearIndex * 0.15 }}
                className="absolute"
                style={{
                  left: `calc(${yearGroup.position}% + 24px)`,
                  bottom: '0',
                  transform: 'translateX(-50%)',
                  width: '200px'
                }}
              >
                {/* Card */}
                <div className="bg-white rounded-xl p-3 shadow-md border-l-4 border-emerald-600 hover:shadow-xl hover:border-amber-500 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                  <h3 className="text-xs md:text-sm font-bold text-emerald-800 mb-1.5 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-[10px] md:text-xs text-slate-600 leading-relaxed">
                    {item.content}
                  </p>
                </div>
              </motion.div>
            ))
          ))}
        </div>

        {/* Connector lines from top cards to circles */}
        <div className="absolute left-0 right-0" style={{ top: '180px', height: '40px' }}>
          {policies.map((yearGroup) => (
            yearGroup.items.filter(item => item.side === 'top').map((_, itemIndex) => (
              <div
                key={`line-top-${yearGroup.year}-${itemIndex}`}
                className="absolute w-0.5 bg-gradient-to-b from-emerald-400 to-emerald-600"
                style={{
                  left: `calc(${yearGroup.position}% + 24px)`,
                  top: '0',
                  height: '100%',
                  transform: 'translateX(-50%)'
                }}
              />
            ))
          ))}
        </div>

        {/* Main timeline row - circles and line */}
        <div className="absolute left-0 right-0" style={{ top: '220px', height: '60px' }}>
          {/* Horizontal timeline line */}
          <div 
            className="absolute h-1 bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600 rounded-full shadow-sm"
            style={{ left: '-20px', right: '40px', top: '12px' }}
          />
          
          {/* Arrow at end */}
          <div 
            className="absolute"
            style={{ right: '16px', top: '6px' }}
          >
            <div className="w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-l-[14px] border-l-emerald-600" />
          </div>

          {/* Year nodes with circles and labels */}
          {policies.map((yearGroup, yearIndex) => (
            <div
              key={`node-${yearGroup.year}`}
              className="absolute flex flex-col items-center"
              style={{
                left: `calc(${yearGroup.position}% + 24px)`,
                top: '0',
                transform: 'translateX(-50%)'
              }}
            >
              {/* Circle on the line */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.4, delay: yearIndex * 0.1 }}
                className="w-6 h-6 bg-amber-500 border-4 border-emerald-700 rounded-full shadow-lg hover:scale-125 transition-transform cursor-pointer z-10"
              />

              {/* Year label directly below circle */}
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: yearIndex * 0.1 + 0.2 }}
                className="mt-2 font-bold text-emerald-800 text-sm md:text-base whitespace-nowrap"
              >
                {yearGroup.year}
              </motion.span>
            </div>
          ))}
        </div>

        {/* Connector lines from circles to bottom cards */}
        <div className="absolute left-0 right-0" style={{ top: '280px', height: '40px' }}>
          {policies.map((yearGroup) => (
            yearGroup.items.filter(item => item.side === 'bottom').map((_, itemIndex) => {
              // For 2026, line goes from circle down then angles to the left of the card
              const is2026 = yearGroup.year === "2026"
              
              return (
                <div
                  key={`line-bottom-${yearGroup.year}-${itemIndex}`}
                  className="absolute w-0.5 bg-gradient-to-b from-emerald-600 to-emerald-400"
                  style={{
                    left: `calc(${yearGroup.position}% + 24px)`,
                    top: '0',
                    height: is2026 ? '100%' : '100%',
                    transform: 'translateX(-50%)'
                  }}
                />
              )
            })
          ))}
        </div>

        {/* Bottom cards area */}
        <div className="absolute left-0 right-0" style={{ top: '320px', height: '180px' }}>
          {policies.map((yearGroup, yearIndex) => (
            yearGroup.items.filter(item => item.side === 'bottom').map((item, itemIndex) => {
              // For 2026, position card to the left with line connecting to right edge
              const is2026 = yearGroup.year === "2026"
              const leftPosition = is2026 
                ? `calc(${yearGroup.position}% - 175px)` 
                : `calc(${yearGroup.position}% + 24px)`
              
              return (
                <motion.div
                  key={`bottom-${yearGroup.year}-${itemIndex}`}
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: yearIndex * 0.15 }}
                  className="absolute"
                  style={{
                    left: leftPosition,
                    top: is2026 ? '-8px' : '0',
                    transform: is2026 ? 'none' : 'translateX(-50%)',
                    width: '200px',
                    zIndex: is2026 ? 10 : 1
                  }}
                >
                  {/* Card */}
                  <div className={`bg-white rounded-xl p-3 shadow-md border-l-4 border-emerald-600 hover:shadow-xl hover:border-amber-500 hover:translate-y-1 transition-all duration-300 cursor-pointer ${is2026 ? 'border-l-0 border-r-0' : ''}`}>
                    <h3 className="text-xs md:text-sm font-bold text-emerald-800 mb-1.5 leading-tight">
                      {item.title}
                    </h3>
                    {Array.isArray(item.content) ? (
                      <div className="text-[10px] md:text-xs text-slate-600 leading-relaxed">
                        {item.content.map((line, lineIndex) => (
                          <p key={lineIndex} className={lineIndex === 0 ? 'font-semibold mb-0.5' : ''}>
                            {line}
                          </p>
                        ))}
                      </div>
                    ) : (
                      <p className="text-[10px] md:text-xs text-slate-600 leading-relaxed">
                        {item.content}
                      </p>
                    )}
                  </div>
                </motion.div>
              )
            })
          ))}
          
          {/* Horizontal connector for 2026 - from vertical line to right edge of card */}
          <div
            className="absolute h-0.5 bg-emerald-500"
            style={{
              left: `calc(88% - 106px)`,
              right: `calc(100% - 88% - 24px)`,
              top: '0',
              width: '130px'
            }}
          />
        </div>
      </div>
    </div>
  )
}
