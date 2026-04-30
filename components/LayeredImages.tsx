'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export function LayeredImages() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="w-full py-16 md:py-24 px-4 md:px-8 bg-white"
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {/* Layer 1 - Main image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="md:col-span-2 relative h-96 md:h-96 rounded-xl overflow-hidden shadow-lg"
          >
            <Image
              src="/charging-station.jpg"
              alt="Charging station"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20" />
          </motion.div>

          {/* Layer 2 - Overlay content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-6 md:p-8 text-white shadow-lg">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Tại Sao Chọn Xe Điện?
              </h3>
              <ul className="space-y-3">
                {[
                  'Tiết kiệm chi phí nhiên liệu lên đến 70%',
                  'Không khí sạch hơn cho thế hệ tương lai',
                  'Công nghệ tiến bộ và hiệu năng cao',
                  'Hỗ trợ chính sách từ Nhà nước',
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-2"
                  >
                    <span className="text-blue-200 mt-1">✓</span>
                    <span className="text-sm md:text-base">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Bottom row with statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-64 md:h-80 rounded-xl overflow-hidden shadow-lg"
          >
            <Image
              src="/green-city.jpg"
              alt="Green city"
              fill
              className="object-cover hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-5xl md:text-6xl font-bold mb-2">50%</div>
                <p className="text-lg">Giảm khí thải CO2</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-slate-100 to-slate-50 rounded-xl p-8 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Thống Kê Hiện Nay
              </h3>
              <div className="space-y-4">
                {[
                  { number: '150,000+', label: 'Xe điện đã lưu thông' },
                  { number: '5,000+', label: 'Trạm sạc công cộng' },
                  { number: '35%', label: 'Tăng trưởng năm 2025' },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  >
                    <div className="text-3xl font-bold text-blue-600">{item.number}</div>
                    <p className="text-slate-600 text-sm">{item.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
