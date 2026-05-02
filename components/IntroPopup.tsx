"use client"

import { motion, AnimatePresence, useInView } from "framer-motion"
import { useEffect, useRef, useState } from "react"

export default function IntroPopup() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const [show, setShow] = useState(false)

  useEffect(() => {
    if (isInView) {
      setShow(true)

      const timer = setTimeout(() => {
        setShow(false)
      }, 5000)

      return () => clearTimeout(timer)
    }
  }, [isInView])

  return (
    <>
      {/* 👇 marker để detect scroll */}
      <div ref={ref} className="absolute top-0 h-1 w-full" />

      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[9999]"
          >
            <div className="max-w-xl bg-orange-500/95 backdrop-blur-md text-white p-6 rounded-2xl shadow-2xl border border-white/20">
              <p className="text-base leading-relaxed">
                Câu chuyện của chị Tuệ Minh, anh Anh Duy và anh Thanh Nhã không phải là những trường hợp cá biệt.
                Quyết định sử dụng xe điện của họ là từ sự cân nhắc từ những ưu điểm, nhược điểm mà xe điện mang lại.
                Song, việc người tiêu dùng lựa chọn sử dụng xe điện cũng chịu ảnh hưởng bởi nhiều yếu tố.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
