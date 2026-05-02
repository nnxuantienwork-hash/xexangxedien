"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  User,
  Award,
  ShoppingCart,
  MessageCircle,
  Route,
  Fuel,
  ThumbsUp,
  Leaf,
  Shield,
  Users,
  Gift,
  X,
} from "lucide-react"

type Factor = {
  id: string
  label: string
  impact: "positive" | "negative"
  description: string
  icon: React.ElementType
}

type Branch = {
  id: string
  title: string
  factors: Factor[]
}

const electricBicycleFactors: Factor[] = [
  {
    id: "age",
    label: "Tuổi tác",
    impact: "negative",
    description: "Người lớn tuổi ít có xu hướng sử dụng vì xe phù hợp học sinh, sinh viên",
    icon: User,
  },
  {
    id: "brand",
    label: "Thương hiệu",
    impact: "positive",
    description: "Thương hiệu mạnh tăng khả năng lựa chọn",
    icon: Award,
  },
  {
    id: "necessity",
    label: "Tính thiết yếu",
    impact: "negative",
    description: "Người dùng không tự quyết định mua → giảm khả năng mua",
    icon: ShoppingCart,
  },
  {
    id: "reference",
    label: "Tham khảo ý kiến",
    impact: "negative",
    description: "Quá nhiều thông tin gây nhiễu → khó quyết định",
    icon: MessageCircle,
  },
  {
    id: "mobility",
    label: "Khả năng di chuyển",
    impact: "negative",
    description: "Quãng đường ngắn hoặc sạc lâu → giảm hấp dẫn",
    icon: Route,
  },
]

const electricMotorcycleFactors: Factor[] = [
  {
    id: "attraction",
    label: "Sự hấp dẫn phương tiện khác",
    impact: "negative",
    description: "Xe xăng tiện hơn → giảm ý định chuyển đổi",
    icon: Fuel,
  },
  {
    id: "attitude",
    label: "Thái độ",
    impact: "positive",
    description: "Đánh giá tích cực → tăng ý định mua",
    icon: ThumbsUp,
  },
  {
    id: "environment",
    label: "Nhận thức môi trường",
    impact: "positive",
    description: "Ý thức xanh thúc đẩy lựa chọn",
    icon: Leaf,
  },
  {
    id: "control",
    label: "Nhận thức kiểm soát",
    impact: "positive",
    description: "Tự tin tài chính và quyết định → tăng khả năng mua",
    icon: Shield,
  },
  {
    id: "social",
    label: "Chuẩn chủ quan",
    impact: "positive",
    description: "Ảnh hưởng từ người xung quanh/KOLs",
    icon: Users,
  },
  {
    id: "promotion",
    label: "Chính sách khuyến mãi",
    impact: "positive",
    description: "Ưu đãi giúp thúc đẩy mua (yếu hơn)",
    icon: Gift,
  },
]

const branches: Branch[] = [
  {
    id: "bicycle",
    title: "Mua xe đạp điện",
    factors: electricBicycleFactors,
  },
  {
    id: "motorcycle",
    title: "Mua xe máy điện (VinFast)",
    factors: electricMotorcycleFactors,
  },
]

function FactorNode({
  factor,
  index,
  isActive,
  onHover,
  onClick,
  dimmed,
}: {
  factor: Factor
  index: number
  isActive: boolean
  onHover: (id: string | null) => void
  onClick: (factor: Factor) => void
  dimmed: boolean
}) {
  const Icon = factor.icon
  const isPositive = factor.impact === "positive"

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: dimmed ? 0.3 : 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="relative z-0"
      onMouseEnter={() => onHover(factor.id)}
      onMouseLeave={() => onHover(null)}
      onClick={() => onClick(factor)}
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        animate={{
          scale: isActive ? 1.05 : 1,
          boxShadow: isActive
            ? isPositive
              ? "0 8px 30px rgba(16, 185, 129, 0.3)"
              : "0 8px 30px rgba(249, 115, 22, 0.3)" // orange
            : "0 2px 8px rgba(0, 0, 0, 0.08)",
        }}
        transition={{ duration: 0.3 }}
        className={`
          relative cursor-pointer rounded-xl p-4 border-2 transition-colors duration-300
          ${
            isPositive
              ? "bg-emerald-100 border-emerald-300 hover:border-emerald-500"
              : "bg-orange-100 border-orange-300 hover:border-orange-500"
          }
        `}
      >
        <div className="flex items-center gap-3">
          <div
            className={`
              flex items-center justify-center w-10 h-10 rounded-lg
              ${isPositive ? "bg-emerald-200 text-emerald-700" : "bg-orange-200 text-orange-700"}
            `}
          >
            <Icon className="w-5 h-5" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <span className="font-medium text-slate-800 text-sm">{factor.label}</span>
              <span
                className={`
                  text-xs font-bold px-1.5 py-0.5 rounded
                  ${isPositive ? "bg-emerald-200 text-emerald-700" : "bg-orange-100 text-orange-600"}
                `}
              >
                {isPositive ? "+" : "-"}
              </span>
            </div>
          </div>
        </div>

        {/* Tooltip */}
        <AnimatePresence>
          {isActive && (
            <motion.div
              initial={{ y: 10, scale: 0.95 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className={`
                absolute z-[9999] left-0 right-0 top-full mt-2 p-4 rounded-lg shadow-2xl
                ${isPositive ? "bg-emerald-700" : "bg-orange-600"}
                text-white text-sm font-medium
                bg-opacity-100 backdrop-blur-0
                before:absolute before:inset-0 before:bg-inherit before:rounded-lg before:z-[-1]
              `}
            >


            >
              <div className="relative">
                <div
                  className={`
                    absolute -top-5 left-6 w-0 h-0
                    border-l-8 border-r-8 border-b-8 border-transparent
                    ${isPositive ? "border-b-emerald-950" : "border-b-orange-600"}
                  `}
                />
                {factor.description}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  )
}

function BranchSection({
  branch,
  activeFactorId,
  onHover,
  onClick,
  index,
}: {
  branch: Branch
  activeFactorId: string | null
  onHover: (id: string | null) => void
  onClick: (factor: Factor) => void
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="flex-1"
    >
      <div className="relative">
        {/* Connecting line to root */}
        <div className="hidden lg:block absolute -top-8 left-1/2 w-0.5 h-8 bg-slate-300" />

        {/* Branch header */}
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="bg-slate-800 text-white rounded-xl p-4 mb-6 text-center shadow-lg"
        >
          <h3 className="font-semibold text-lg">{branch.title}</h3>
        </motion.div>

        {/* Factors */}
        <div className="space-y-3">
          {branch.factors.map((factor, factorIndex) => (
            <FactorNode
              key={factor.id}
              factor={factor}
              index={factorIndex}
              isActive={activeFactorId === factor.id}
              onHover={onHover}
              onClick={onClick}
              dimmed={activeFactorId !== null && activeFactorId !== factor.id}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

function Legend() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.8 }}
      className="flex items-center justify-center gap-8 mt-8"
    >
      <div className="flex items-center gap-2">
        <div className="w-4 h-4 rounded bg-emerald-500" />
        <span className="text-sm text-slate-600">(+) Thúc đẩy mua</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-4 h-4 rounded bg-orange-500" />
        <span className="text-sm text-slate-600">(-) Cản trở mua</span>
      </div>
    </motion.div>
  )
}

function DetailModal({
  factor,
  onClose,
}: {
  factor: Factor
  onClose: () => void
}) {
  const Icon = factor.icon
  const isPositive = factor.impact === "positive"

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
        className={`
          relative w-full max-w-md p-6 rounded-2xl shadow-2xl
          ${isPositive ? "bg-emerald-50" : "bg-orange-50"}
        `}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 rounded-full hover:bg-slate-200 transition-colors"
        >
          <X className="w-5 h-5 text-slate-500" />
        </button>

        <div className="flex items-center gap-4 mb-4">
          <div
            className={`
              flex items-center justify-center w-14 h-14 rounded-xl
              ${isPositive ? "bg-emerald-200 text-emerald-700" : "bg-orange-200 text-orange-700"}
            `}
          >
            <Icon className="w-7 h-7" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-slate-800">{factor.label}</h3>
            <span
              className={`
                text-sm font-medium px-2 py-0.5 rounded
                ${isPositive ? "bg-emerald-200 text-emerald-700" : "bg-orange-200 text-orange-700"}
              `}
            >
              {isPositive ? "Yếu tố tích cực" : "Yếu tố tiêu cực"}
            </span>
          </div>
        </div>

        <p className="text-slate-700 leading-relaxed">{factor.description}</p>
      </motion.div>
    </motion.div>
  )
}

export default function EVDecisionInfographic() {
  const [activeFactorId, setActiveFactorId] = useState<string | null>(null)
  const [selectedFactor, setSelectedFactor] = useState<Factor | null>(null)

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">
            Các yếu tố ảnh hưởng đến việc mua xe điện
          </h1>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Khám phá các yếu tố thúc đẩy và cản trở quyết định mua xe điện tại Việt Nam
          </p>
        </motion.div>

        {/* Root node */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mb-8"
        >
          <div className="bg-emerald-600 text-white rounded-2xl px-8 py-4 shadow-lg shadow-emerald-200">
            <h2 className="font-semibold text-lg text-center">
              Quyết định / Ý định mua xe điện
            </h2>
          </div>
        </motion.div>

        {/* Connecting lines */}
        <div className="hidden lg:flex justify-center mb-8">
          <div className="relative w-full max-w-5xl flex justify-between px-4">
            <div className="absolute top-0 left-1/2 w-0.5 h-4 bg-slate-300 -translate-x-1/2" />
            <div className="absolute top-4 left-1/4 right-1/4 h-0.5 bg-slate-300" />
            <div className="absolute top-4 left-0 right-0 flex justify-between px-4">
              <div className="w-0.5 h-4 bg-slate-300" />
              <div className="w-0.5 h-4 bg-slate-300" />
            </div>
          </div>
        </div>

        {/* Branches */}
        <div className="flex flex-col lg:flex-row gap-8">
          {branches.map((branch, index) => (
            <BranchSection
              key={branch.id}
              branch={branch}
              activeFactorId={activeFactorId}
              onHover={setActiveFactorId}
              onClick={setSelectedFactor}
              index={index}
            />
          ))}
        </div>

        {/* Legend */}
        <Legend />

        {/* Detail Modal */}
        <AnimatePresence>
          {selectedFactor && (
            <DetailModal
              factor={selectedFactor}
              onClose={() => setSelectedFactor(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
