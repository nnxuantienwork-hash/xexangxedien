"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"

export default function IntroPopup() {
  const popupRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!popupRef.current) return

    gsap.fromTo(
      popupRef.current,
      { y: 100, opacity: 0 },
      { y: -200, opacity: 1, ease: "power2.out", duration: 1 }
    )
  }, [])

  return (
    <div
      ref={popupRef}
      className="absolute left-1/2 -translate-x-1/2 bottom-0 z-[100] pointer-events-none"
    >
      <div className="bg-white/95 backdrop-blur-md shadow-2xl rounded-xl p-6 max-w-xl text-center">
        <p className="text-slate-700 leading-relaxed">
          Câu chuyện của chị Tuệ Minh, anh Anh Duy và anh Thanh Nhã không phải là những trường hợp cá biệt. 
          Quyết định sử dụng xe điện của họ là từ sự cân nhắc từ những ưu điểm, nhược điểm mà xe điện mang lại. 
          Song, việc người tiêu dùng lựa chọn sử dụng xe điện cũng chịu ảnh hưởng bởi nhiều yếu tố.
        </p>
      </div>
    </div>
  )
}
