'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const milestones = [
  {
    year: '2022',
    title: 'Khởi Động',
    description: 'Chương trình hỗ trợ xe điện bắt đầu',
  },
  {
    year: '2023',
    title: 'Mở Rộng',
    description: 'Mạng sạc điện công cộng phát triển',
  },
  {
    year: '2024',
    title: 'Miễn Thuế',
    description: 'Miễn thuế nhập khẩu xe điện',
  },
  {
    year: '2025',
    title: 'Công Nghiệp Pin',
    description: 'Pin địa phương được phát triển',
  },
  {
    year: '2026',
    title: 'Mục Tiêu 10%',
    description: '10% xe điện trong lưu thông',
  },
];

export function FishboneChart() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    // Animate SVG lines on mount and scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const svg = entry.target.querySelector('svg');
          if (svg) {
            const paths = svg.querySelectorAll('path');
            paths.forEach((path, index) => {
              const length = (path as SVGPathElement).getTotalLength();
              (path as SVGPathElement).style.strokeDasharray = String(length);
              (path as SVGPathElement).style.strokeDashoffset = String(length);
              (path as SVGPathElement).style.animation = `drawLine 1.5s ease-in-out ${index * 0.2}s forwards`;
            });
          }
        }
      });
    });

    const container = svgRef.current?.parentElement;
    if (container) observer.observe(container);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full py-20 px-4 md:px-8 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">
            Lộ Trình Chính Sách Xe Điện Việt Nam
          </h2>
          <p className="text-lg text-slate-600">
            Hành trình phát triển và cam kết của Chính phủ từ 2022 đến 2026
          </p>
        </motion.div>

        {/* SVG Fishbone */}
        <style>{`
          @keyframes drawLine {
            from {
              stroke-dashoffset: var(--length, 0);
            }
            to {
              stroke-dashoffset: 0;
            }
          }
        `}</style>

        <svg
          ref={svgRef}
          viewBox="0 0 1200 300"
          className="w-full h-auto"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Main spine */}
          <line x1="100" y1="150" x2="1100" y2="150" stroke="#1e293b" strokeWidth="3" />

          {/* Milestone markers and branches */}
          {milestones.map((milestone, index) => {
            const x = 100 + (index * 250);
            const isEven = index % 2 === 0;
            const yOffset = isEven ? -80 : 80;

            return (
              <g key={milestone.year}>
                {/* Branch lines */}
                <path
                  d={`M ${x} 150 L ${x} ${150 + yOffset}`}
                  stroke="#3b82f6"
                  strokeWidth="2"
                  fill="none"
                />

                {/* Milestone circle */}
                <circle cx={x} cy="150" r="8" fill="#3b82f6" />

                {/* Year text */}
                <text
                  x={x}
                  y={150 + yOffset + (isEven ? -15 : 40)}
                  textAnchor="middle"
                  className="text-sm font-bold fill-slate-900"
                >
                  {milestone.year}
                </text>
              </g>
            );
          })}
        </svg>

        {/* Timeline details below chart */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mt-16">
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold">{milestone.year.slice(-2)}</span>
              </div>
              <h3 className="font-bold text-slate-900 mb-2">{milestone.title}</h3>
              <p className="text-sm text-slate-600">{milestone.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
