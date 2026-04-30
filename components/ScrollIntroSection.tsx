'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Interactive Bar Chart Component - Flat design, blending with page background
function InteractiveBarChart() {
  const [showInfoBox, setShowInfoBox] = useState(false);

  const colors = {
    primary: '#2d5f3f',
    secondary: '#f59e0b',
    text: '#334155',
    lightText: '#64748b',
    border: '#e2e8f0',
  };

  return (
    <div 
      className="w-full max-w-5xl mx-auto px-4 md:px-8 py-12 relative"
      onMouseEnter={() => setShowInfoBox(true)}
      onMouseLeave={() => setShowInfoBox(false)}
    >
      {/* Title */}
      <h2 
        className="text-2xl md:text-3xl font-semibold text-center mb-12"
        style={{ color: colors.primary, fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}
      >
        Số lượng xe điện tại Việt Nam (Tính đến hết năm 2025)
      </h2>
      
      {/* Info Box - Smaller, compact, dark background */}
      <AnimatePresence>
        {showInfoBox && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute top-30 left-6 md:left-12 z-20 px-4 py-3 rounded-lg"
            style={{ 
              background: 'linear-gradient(145deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.95) 100%)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(52, 211, 153, 0.25)',
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.25)'
            }}
          >
            <p className="text-emerald-400 text-[10px] font-semibold tracking-wider uppercase mb-0.5">
              Tổng nhu cầu điện dự kiến
            </p>
            <p className="text-xl font-bold text-white leading-tight">
              ~652 triệu kWh
            </p>
            <p className="text-slate-400 text-[11px] mt-0.5">
              Chiếm 0.2 - 0.3% điện thương phẩm
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chart Area */}
      <div className="relative h-[380px] ml-12">
        {/* Y-axis label */}
        <div 
          className="absolute -left-10 top-[calc(50%-20px)] -translate-y-1/2 -rotate-90 text-sm font-bold whitespace-nowrap"
          style={{ color: colors.primary }}
        >
          Số lượng xe
        </div>

        {/* Y-axis with scale */}
        <div className="absolute left-0 top-0 bottom-[40px] w-12 flex flex-col justify-between items-end pr-2">
          <span className="text-xs font-bold" style={{ color: colors.lightText }}>1e6</span>
          <span className="text-xs font-bold" style={{ color: colors.lightText }}>2.5</span>
          <span className="text-xs font-bold" style={{ color: colors.lightText }}>2.0</span>
          <span className="text-xs font-bold" style={{ color: colors.lightText }}>1.5</span>
          <span className="text-xs font-bold" style={{ color: colors.lightText }}>1.0</span>
          <span className="text-xs font-bold" style={{ color: colors.lightText }}>0.5</span>
          <span className="text-xs font-bold" style={{ color: colors.lightText }}>0.0</span>
        </div>

        {/* Grid and Bars Container */}
        <div className="absolute left-12 right-4 top-0 bottom-0">
          {/* Horizontal grid lines */}
          <div className="absolute inset-x-0 top-0 bottom-[40px] flex flex-col justify-between">
            {[...Array(7)].map((_, i) => (
              <div key={i} className="w-full" style={{ borderTop: `1px solid ${colors.border}` }} />
            ))}
          </div>

          {/* Bottom axis line (0.0 line) */}
          <div 
            className="absolute bottom-[40px] left-0 right-0 h-0.5"
            style={{ backgroundColor: colors.text }}
          />

          {/* Bars - positioned to start from the 0.0 line */}
          <div className="absolute inset-x-0 top-0 bottom-[40px] flex justify-around items-end">
            {/* Bar 1: Ô tô điện */}
            <div className="flex flex-col items-center">
              <span className="text-sm font-bold mb-2" style={{ color: colors.text }}>215.000 xe</span>
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: '28px' }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="w-28 md:w-32 rounded-t-md cursor-pointer hover:opacity-80 transition-opacity"
                style={{ backgroundColor: colors.secondary }}
              />
            </div>

            {/* Bar 2: Xe máy điện */}
            <div className="flex flex-col items-center">
              <span className="text-sm font-bold mb-2" style={{ color: colors.text }}>2.6 triệu xe</span>
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: '280px' }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                className="w-28 md:w-32 rounded-t-md cursor-pointer hover:opacity-80 transition-opacity"
                style={{ backgroundColor: colors.primary }}
              />
            </div>
          </div>

          {/* Labels below the 0.0 line */}
          <div className="absolute bottom-0 left-0 right-0 h-[40px] flex justify-around items-center">
            <span className="text-sm font-bold" style={{ color: colors.text }}>Ô tô điện</span>
            <span className="text-sm font-bold" style={{ color: colors.text }}>Xe máy điện</span>
          </div>
        </div>
      </div>
    </div>
  );
}

type ScrollPhase = 0 | 1 | 2 | 3;

export function ScrollIntroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentPhase, setCurrentPhase] = useState<ScrollPhase>(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const containerTop = rect.top;
      const containerHeight = rect.height;
      const windowHeight = window.innerHeight;
      
      const scrolled = -containerTop;
      const totalScrollable = containerHeight - windowHeight;
      const progress = Math.max(0, Math.min(1, scrolled / totalScrollable));
      
      setScrollProgress(progress);
      
      if (progress < 0.15) {
        setCurrentPhase(0);
      } else if (progress < 0.45) {
        setCurrentPhase(1);
      } else if (progress < 0.75) {
        setCurrentPhase(2);
      } else {
        setCurrentPhase(3);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getTextBox1Style = () => {
    if (scrollProgress < 0.15) {
      return { opacity: 0, y: 150 };
    } else if (scrollProgress < 0.25) {
      const t = (scrollProgress - 0.15) / 0.10;
      return { opacity: t, y: 150 - (t * 150) };
    } else if (scrollProgress < 0.35) {
      return { opacity: 1, y: 0 };
    } else if (scrollProgress < 0.45) {
      const t = (scrollProgress - 0.35) / 0.10;
      return { opacity: 1 - t, y: -t * 150 };
    } else {
      return { opacity: 0, y: -150 };
    }
  };

  const getTextBox2Style = () => {
    if (scrollProgress < 0.47) {
      return { opacity: 0, y: 150 };
    } else if (scrollProgress < 0.57) {
      const t = (scrollProgress - 0.47) / 0.10;
      return { opacity: t, y: 150 - (t * 150) };
    } else if (scrollProgress < 0.67) {
      return { opacity: 1, y: 0 };
    } else if (scrollProgress < 0.77) {
      const t = (scrollProgress - 0.67) / 0.10;
      return { opacity: 1 - t, y: -t * 150 };
    } else {
      return { opacity: 0, y: -150 };
    }
  };

  const getBackgroundOpacity = () => {
    if (scrollProgress < 0.80) return 1;
    if (scrollProgress > 0.95) return 0;
    return 1 - ((scrollProgress - 0.80) / 0.15);
  };

  const textBox1Style = getTextBox1Style();
  const textBox2Style = getTextBox2Style();
  const bgOpacity = getBackgroundOpacity();

  return (
    <div ref={containerRef} className="relative h-[500vh]">
      {/* Fixed Background Container */}
      <div 
        className="sticky top-0 h-screen w-full overflow-hidden bg-slate-50"
        style={{ opacity: bgOpacity }}
      >
        {/* Interactive Bar Chart */}
        <div className="absolute inset-0 flex items-center justify-center">
          <InteractiveBarChart />
        </div>

        {/* Overlay when text boxes are visible */}
        <div 
          className="absolute inset-0 bg-slate-900/20 pointer-events-none transition-opacity duration-300"
          style={{ opacity: (currentPhase === 1 || currentPhase === 2) ? 1 : 0 }}
        />

        {/* Text Box 1 */}
        <div 
          className="absolute inset-0 flex items-center justify-center px-4 z-10 pointer-events-none"
          style={{ 
            opacity: textBox1Style.opacity,
            transform: `translateY(${textBox1Style.y}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          <div className="max-w-2xl p-8 bg-white/95 backdrop-blur-sm rounded-lg pointer-events-auto">
            <p className="text-justify text-slate-700 leading-relaxed text-lg">
              Theo định nghĩa của Bách khoa toàn thư Wiki, xe máy điện là phương tiện giao thông sử dụng động cơ chạy bằng năng lượng điện. Xe máy điện sẽ không dùng bàn đạp như các loại xe đạp điện thông thường. Điện để chạy động cơ xe thường được lưu trữ dưới dạng cục pin sạc.
            </p>
          </div>
        </div>

        {/* Text Box 2 */}
        <div 
          className="absolute inset-0 flex items-center justify-center px-4 z-10 pointer-events-none"
          style={{ 
            opacity: textBox2Style.opacity,
            transform: `translateY(${textBox2Style.y}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          <div className="max-w-2xl p-8 bg-white/95 backdrop-blur-sm rounded-lg pointer-events-auto">
            <p className="text-justify text-slate-700 leading-relaxed text-lg">
              Theo số liệu từ Hiệp hội Các nhà sản xuất xe máy Việt Nam, tính đến hết 2025, cả nước có khoảng 215.000 ô tô điện và gần 2.6 triệu xe máy điện. Theo tính toán, nhu cầu sử dụng điện cho số xe điện này ước khoảng 652 triệu kWh (chỉ chiếm 0.2 - 0.3% tổng nhu cầu điện thương phẩm).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
