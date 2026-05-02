export default function PolicyTimeline() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-12">
          LỘ TRÌNH CHÍNH SÁCH XE ĐIỆN VIỆT NAM 2022-2026
        </h2>

        {/* Timeline line */}
        <div className="relative">
          <div className="h-1 bg-green-500 w-full absolute top-1/2 -translate-y-1/2"></div>

          <div className="flex justify-between relative">
            {["2022", "2023-2024", "2025", "2026"].map((year) => (
              <div key={year} className="flex flex-col items-center">
                <div className="w-4 h-4 bg-yellow-400 border-4 border-green-600 rounded-full z-10"></div>
                <p className="mt-2 font-semibold text-gray-700">{year}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Box demo */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          <div className="bg-white shadow-lg rounded-xl p-4 border-l-4 border-green-500">
            <h3 className="font-semibold text-gray-800">Nghị định 10/2022/NĐ-CP</h3>
            <p className="text-sm text-gray-600 mt-1">
              Ô tô điện được miễn lệ phí trước bạ trong 3 năm
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-4 border-l-4 border-green-500">
            <h3 className="font-semibold text-gray-800">Đề xuất hỗ trợ</h3>
            <p className="text-sm text-gray-600 mt-1">
              Hỗ trợ doanh nghiệp trạm sạc
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
