'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  
  // Scroll-based animations for storytelling effect
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  // Parallax effect - background moves slower than content
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const backgroundScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
  
  // Content fades and moves up as user scrolls
  const contentOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, -80]);
  
  // Overlay darkens smoothly
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.3, 0.5], [0.35, 0.5, 0.7]);
  
  // Title scale and blur effect
  const titleScale = useTransform(scrollYProgress, [0, 0.4], [1, 0.95]);

  return (
    <motion.section 
      ref={heroRef}
      className="relative w-full min-h-screen overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <motion.div 
        className="absolute inset-0 w-full h-[100%] -top-[00%]"
        style={{ 
          y: backgroundY,
          scale: backgroundScale 
        }}
      >
        <Image
          src="/images/da-sua.png"
          alt="Toàn cảnh TP.HCM về đêm với hệ thống giao thông"
          fill
          className="object-cover object-center"
          priority
          quality={95}
        />
      </motion.div>

      {/* Dynamic gradient overlay */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10"
        style={{ opacity: overlayOpacity }}
      />

      {/* Subtle vignette effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.3)_100%)]" />

      {/* Content Container with scroll-based fade */}
      <motion.div 
        className="relative z-10 min-h-screen flex flex-col items-center justify-start pt-20 px-4"
        style={{ 
          opacity: contentOpacity,
          y: contentY,
          scale: titleScale
        }}
      >
        <motion.div
          className="text-center max-w-4xl bg-black/60 backdrop-blur-sm rounded-xl p-3"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Decorative line */}
          <motion.div 
            className="w-16 h-[2px] mx-auto mb-8 bg-emerald-400"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 64, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          />

          {/* Main title */}
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-white mb-6 text-balance leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
          >
            Nhiều kỳ vọng về tương lai của xe điện 
          </motion.h1>

          {/* Meta information */}
          <motion.div 
            className="flex flex-wrap justify-center items-center gap-3 md:gap-6 text-white/85 text-sm mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
              02 tháng 05, 2026
            </span>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            className="text-white/80 text-base md:text-lg max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.2 }}
          >
            Câu chuyện xe xăng và xe điện hiện nay đã vượt ra ngoài giới hạn của một &quot;chiếc xe&quot; thông thường, mà đó là câu chuyện về những &quot;giải pháp di chuyển&quot; của người dân. Các phương tiện sử dụng nhiên liệu xanh, thân thiện với môi trường này đang được chú trọng như là một cách giải quyết tình trạng ô nhiễm môi trường.
          </motion.p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
        >
          <motion.div
            className="flex flex-col items-center gap-2"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <span className="text-white/60 text-xs uppercase tracking-widest">Cuộn xuống</span>
            <div className="w-5 h-8 border border-white/40 rounded-full flex justify-center pt-1.5">
              <motion.div
                className="w-1 h-1 bg-emerald-400 rounded-full"
                animate={{ y: [0, 10, 0], opacity: [1, 0.4, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
