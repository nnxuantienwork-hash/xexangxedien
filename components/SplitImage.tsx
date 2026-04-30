'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface SplitImageProps {
  leftImage: string;
  rightImage: string;
  leftAlt: string;
  rightAlt: string;
}

export function SplitImage({ leftImage, rightImage, leftAlt, rightAlt }: SplitImageProps) {
  return (
    <div className="w-full max-w-[1100px] mx-auto px-6 py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left Image - Portrait orientation */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-lg"
        >
          <Image
            src={leftImage}
            alt={leftAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>

        {/* Right Image - Landscape orientation */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-lg"
        >
          <Image
            src={rightImage}
            alt={rightAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>
      </div>
    </div>
  );
}
