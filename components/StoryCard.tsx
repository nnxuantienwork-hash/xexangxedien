'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface StoryCardProps {
  name: string;
  location: string;
  role: string;
  story: string;
  quote: string;
  image: string;
  stats: { label: string; value: string }[];
  reversed?: boolean;
}

export function StoryCard({
  name,
  location,
  role,
  story,
  quote,
  image,
  stats,
  reversed = false,
}: StoryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="w-full py-12 md:py-20 px-4 md:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center ${
            reversed ? 'md:direction-rtl' : ''
          }`}
        >
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: reversed ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className={reversed ? 'md:order-2' : 'md:order-1'}
          >
            <div className="relative h-96 md:h-[500px] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src={image}
                alt={name}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: reversed ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className={reversed ? 'md:order-1' : 'md:order-2'}
          >
            {/* Header */}
            <div className="mb-6">
              <div className="text-blue-600 font-semibold mb-2 text-sm">{location}</div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-2">
                {name}
              </h2>
              <p className="text-lg text-slate-600">{role}</p>
            </div>

            {/* Story */}
            <p className="text-slate-700 leading-relaxed mb-6 text-base md:text-lg">
              {story}
            </p>

            {/* Quote */}
            <blockquote className="border-l-4 border-blue-600 pl-6 mb-8 py-4 bg-slate-50 rounded-r-lg">
              <p className="text-slate-700 italic text-lg">"{quote}"</p>
            </blockquote>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-lg p-4 border border-blue-100"
                >
                  <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
