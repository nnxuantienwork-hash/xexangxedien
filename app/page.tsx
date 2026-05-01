'use client';

import { HeroSection } from '@/components/HeroSection';
import { ScrollIntroSection } from '@/components/ScrollIntroSection';
import EVChargingComparison from '@/components/EVChargingComparison';
import FishboneDiagram from '@/components/FishboneDiagram';
import { SplitImage } from '@/components/SplitImage';
import { motion } from 'framer-motion';

export default function LongformArticle() {
  return (
    <main className="w-full bg-white">
      {/* Hero Section */}
      <HeroSection />

      {/* Scroll Intro Section with Interactive Chart Background and Floating Text Boxes */}
      <ScrollIntroSection />

       {/* Section Văn bản bình thường trên nền màu */}
       <section className="w-full py-20 bg-slate-50"> 
         <div className="max-w-3xl mx-auto px-4 md:px-8">
         <motion.p 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           className="text-justify text-lg md:text-xl leading-relaxed text-slate-800"
          >
          Xe điện giờ đây gần như đã <span className="font-semibold text-emerald-600">&quot;cạnh tranh&quot; sòng phẳng</span> với những phương tiện truyền thống. Chia sẻ với <span className="italic">Thành Phố Mới</span>, nhiều người chọn xe điện làm phương tiện di chuyển chính, thậm chí là phương tiện dùng để mưu sinh, vì những tiện lợi của chúng trong quá trình sử dụng.
          </motion.p>
         </div>
        </section>

        {/* Câu chuyện cá nhân*/}
        {/* Section: Câu chuyện cá nhân - Chị Tuệ Minh*/}
<section className="w-full py-12 bg-white">
  <div className="max-w-2xl mx-auto px-6 md:px-0">
    
    {/* TUỆ MINH*/}
    <motion.span 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="text-emerald-600 font-semibold tracking-wide text-3xl mb-4 block text-center font-serif"
    >
     Tiết kiệm đáng kể chi phí
    </motion.span>

    {/* Nội dung câu chuyện */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="space-y-6"
    >
      <p className="text-justify text-lg leading-relaxed text-slate-700">
       Cuối năm 2025, làn sóng sử dụng xe điện bắt đầu tăng và tại Việt Nam, xu hướng này cũng được khuyến khích mạnh mẽ. Với ngân sách hiện có, chị Trần Tuệ Minh (phường Bình Thạnh, TP. HCM) đã quyết định mua xe máy điện.
      </p>

      <p className="text-justify text-lg leading-relaxed text-slate-700">
       Hiện nay, chị Minh sử dụng xe điện để di chuyển từ nơi ở đến công ty với quãng đường khoảng 7km mỗi chiều. Do khoảng cách không quá xa, chiếc xe điện một pin mà chị mua, có thể đi được khoảng 130km cho mỗi lần sạc đầy, giúp chị chỉ cần sạc khoảng một lần mỗi tuần.
      </p>

      <p className="text-justify text-lg leading-relaxed text-slate-700">
       Trong bối cảnh giá xăng dầu biến động liên tục, việc chuyển sang xe máy điện giúp chị tiết kiệm đáng kể chi phí, đồng thời không còn phải lo lắng về việc canh thời điểm giá xăng giảm để đổ. Ngoài ra, xe máy điện còn giúp chị chủ động hơn về thời gian, tránh được cảnh chờ đợi tại các cây xăng vào giờ cao điểm.
      </p>

       <p className="text-justify text-lg leading-relaxed text-slate-700">
       Theo chị Minh, xe máy điện phù hợp với những người ưa thích sự ổn định và di chuyển ở tốc độ vừa phải, khoảng 70km/h - mức tốc độ tối đa phổ biến của dòng xe này. Tuy nhiên, với những người yêu thích tốc độ, xe máy điện hiện tại có thể chưa phải là lựa chọn tối ưu.
       </p>

       <p className="text-justify text-lg leading-relaxed text-slate-700">
       Dù có nhiều ưu điểm, chị vẫn băn khoăn về một số bất cập, đặc biệt là khi xe gặp sự cố liên quan đến hệ thống điện bất ngờ trên đường thì việc tìm nơi sửa chữa còn khá khó khăn, do số lượng cửa hàng chuyên sửa xe điện tại TP. HCM chưa nhiều. Vì vậy, bên cạnh những lợi ích về chi phí và tiện lợi, chị cho rằng các nhà sản xuất cần tiếp tục cải thiện hệ thống dịch vụ hậu mãi để mang lại sự yên tâm hơn cho người dùng.
       </p>

       <p className="text-justify text-lg leading-relaxed text-slate-700">
       Về chi phí dùng điện để sạc xe, chị Tuệ Minh chia sẻ: &quot;Giả sử lấy mức trung bình xe máy điện di chuyển 100km sau mỗi lần sạc đầy pin là khoảng 3kWh với giá điện hiện tại là 3.500 đồng/1kWh. Như vậy để đi được 100km người dùng xe máy điện sẽ phải chi trả 10.500 đồng để sạc pin. Tuần nào chị cũng sạc đều đặn nên là chị tốn hơn 50.000 - 70.000 đồng/tháng&quot;. 
      </p>
    </motion.div>
  </div>
</section>

<section className="w-full py-3 bg-white">
  <div className="max-w-2xl mx-auto px-6 md:px-0">
    {/* Anh Duy*/}
    <motion.span 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="text-emerald-600 font-semibold tracking-wide text-3xl mb-4 block text-center font-serif"
    >
     Trải nghiệm vận hành êm ái
    </motion.span>

    {/* Nội dung câu chuyện */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="space-y-6"
    >
      <p className="text-justify text-lg leading-relaxed text-slate-700">
       Dù ban đầu, việc sử dụng xe máy điện là từ quyết định của gia đình, Đỗ Anh Duy (sinh viên năm 2 ngành Tâm lý học, Trường ĐH KHXH&NV, ĐHQG-HCM) cho biết bản thân đã dần thích nghi và gắn bó với phương tiện này suốt 1,5 năm qua.
      </p>

      <p className="text-justify text-lg leading-relaxed text-slate-700">
       Hiện, mỗi ngày Duy dành từ 1 - 2 giờ di chuyển quãng đường khoảng 30km, từ nhà ở quận Tân Phú vào các khu vực trung tâm. Với tần suất sử dụng cao, chiếc xe điện của Duy vẫn đáp ứng ổn định nhu cầu đi lại: mỗi lần sạc đầy có thể vận hành khoảng 80km, tùy theo chế độ lái Eco hoặc Sport.
      </p>

      <p className="text-justify text-lg leading-relaxed text-slate-700">
       Xét về chi phí, Anh Duy đánh giá đây là lựa chọn kinh tế tối ưu. Xe có giá lăn bánh khoảng 31 triệu đồng, ban đầu sử dụng hình thức thuê pin, sau đó tận dụng ưu đãi từ hãng để mua đứt pin với chi phí hơn 5 triệu đồng, qua đó loại bỏ khoản thuê bao hàng tháng. 
      </p>

        {/* Premium Editorial Blockquote */}
      <motion.blockquote 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative my-16 py-8"
      >
        {/* Subtle accent line */}
        <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-emerald-400 via-emerald-500 to-emerald-400" />
        
        <div className="pl-8 md:pl-12">
          <p className="text-xl md:text-2xl lg:text-3xl font-serif italic text-slate-800 leading-relaxed tracking-tight text-balance">
            &quot;Xe chạy êm, gần như không có độ rung, giúp giảm mệt mỏi khi di chuyển đường dài trong điều kiện giao thông đông đúc.&quot;
          </p>
          <footer className="mt-6">
            <cite className="not-italic text-sm tracking-widest uppercase text-slate-500">
              Đỗ Anh Duy
            </cite>
          </footer>
        </div>
      </motion.blockquote>

       <p className="text-justify text-lg leading-relaxed text-slate-700">
       &quot;May mắn là chung cư em có khu vực sạc miễn phí, nên em chỉ đóng phí gửi xe như xe xăng. Tính ra chi phí duy trì gần như bằng 0&quot;, Duy chia sẻ.
       </p>

       <p className="text-justify text-lg leading-relaxed text-slate-700">
       Yếu tố giữ chân Duy không chỉ nằm ở kinh tế mà còn ở trải nghiệm vận hành: xe chạy êm, gần như không có độ rung, giúp giảm mệt mỏi khi di chuyển đường dài trong điều kiện giao thông đông đúc.
       </p>

       <p className="text-justify text-lg leading-relaxed text-slate-700">
       Sau 1,5 năm sử dụng, Duy cho biết phương tiện vẫn vận hành ổn định, chi phí bảo dưỡng ở mức tối thiểu. Do không cần thay nhớt định kỳ, các khoản phát sinh chủ yếu là những hạng mục nhỏ như căn chỉnh phanh, với chi phí khoảng 50.000 đồng mỗi lần.
      </p>

      <p className="text-justify text-lg leading-relaxed text-slate-700">
       Dù vậy, Duy cũng chỉ ra những hạn chế đặc thù của xe điện. Trở ngại lớn nhất là thời gian sạc: mất khoảng 4 giờ để nạp từ 20% lên đầy pin, buộc người dùng phải hình thành thói quen sạc qua đêm, kém linh hoạt hơn so với việc đổ xăng trong vài phút. Bên cạnh đó, phương tiện này chưa thực sự phù hợp cho các chuyến đi xa do hạ tầng trạm sạc ở khu vực ngoại thành còn hạn chế. Sau thời gian dài sử dụng, pin cũng bắt đầu có dấu hiệu suy giảm hiệu suất nhẹ.
      </p>
    </motion.div>
  </div>
</section>

<section className="w-full py-18 bg-white">
  <div className="max-w-2xl mx-auto px-8 md:px-0">
    <motion.span 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="text-emerald-600 font-semibold tracking-wide text-3xl mb-2 block text-center font-serif"
    >
      Xe điện phải có quãng nghỉ để sạc
    </motion.span>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="space-y-10"
    >
      <p className="text-justify text-lg leading-relaxed text-slate-700">
        Anh Nguyễn Thanh Nhã (25 tuổi) hiện là tài xế của một hãng xe tiên phong mở ra dịch vụ vận tải bằng xe điện. Với kinh nghiệm gần 10 năm kiếm kế sinh nhai bằng nghề chạy xe ôm công nghệ và từng trải nghiệm cả xe xăng và xe điện, anh Nhã cho rằng chạy xe điện ít tốn kém hơn vì không phải thay nhớt thường xuyên như xe xăng. Anh cho biết: &quot;Tôi thường tốn khoảng 15.000 đồng cho một lần sạc đủ đi quãng đường đã tính sẵn. Dùng sạc cá nhân nên tôi mang đi đâu cũng được&quot;.
      </p>

      <p className="text-justify text-lg leading-relaxed text-slate-700">
       Dù anh Nhã vẫn còn trăn trở về quãng đường và thời gian mà xe điện có thể đáp ứng được. &quot;Việc di chuyển 10 - 12 tiếng một ngày thì không chắc, có ngày mình chỉ chạy 4 tiếng thôi. So về độ dài di chuyển thì xe xăng chắc chắn hơn vì xe xăng đỡ phải sạc, còn xe điện thì không chạy liên tục 10 - 12 tiếng được&quot;, anh Nhã chia sẻ. 
      </p>
    </motion.div>
  </div>
</section>

{/* Split Image 2 - After anh Nhã quote about 10-12 hours */}
<section className="w-full bg-white py-8">
  <SplitImage 
    leftImage="/images/xe-may-1.png"
    rightImage="/images/tram-sac-2.jpg"
    leftAlt="Cặp đôi đi xe máy điện VinFast ban đêm"
    rightAlt="Trạm sạc xe điện VinFast"
  />
  <p className="text-center text-sm text-slate-500 mt-4 italic max-w-3xl mx-auto px-4">
    Xe máy điện đang dần trở thành phương tiện di chuyển quen thuộc trong đời sống đô thị, với hệ thống trạm sạc ngày càng phủ rộng tại các thành phố lớn.
  </p>
</section>

<section className="w-full py-3 bg-white">
  <div className="max-w-2xl mx-auto px-6 md:px-0">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <p className="text-justify text-lg leading-relaxed text-slate-700">
        Nhiều tài xế xe điện vẫn lo ngại về quãng nghỉ của xe điện. &quot;Xe xăng thì hết là đổ rồi đi tiếp ngay, còn xe điện thì phải có quãng nghỉ để sạc. Đôi khi đang có khách mà nhìn bình điện thấp cũng hơi áp lực. Hiện tại hệ thống trạm sạc cũng bắt đầu xuất hiện nhiều nhưng với mật độ tài xế tăng nhanh như bây giờ thì vẫn cần cải thiện thêm để anh em không phải chờ đợi lâu&quot;, anh Nhã cho biết thêm. Theo anh, xe điện vẫn ở mức tạm ổn cho nhu cầu di chuyển trong thành phố, nhưng nếu để chạy liên tỉnh hoặc chạy cường độ cực cao thì lộ trình triển khai trạm sạc vẫn cần phải dày đặc hơn nữa. 
      </p>

      <p className="text-justify text-lg leading-relaxed text-slate-700">
        Với tình hình hiện tại, tài xế mong muốn cải thiện chất lượng pin của xe điện, cụ thể là thời lượng pin và chất lượng bình điện. Giữa xu hướng chuyển đổi sang xe điện, anh cho rằng: &quot;Các hãng hiện nay cũng tung ra nhiều mã giảm giá để kích cầu. Nếu nhà nước và doanh nghiệp cùng cải thiện trạm sạc, phần mềm và hạ tầng thì xe điện chắc chắn sẽ thay thế hoàn toàn xe xăng trong tương lai&quot;. 
      </p>
    </motion.div>
  </div>
</section>

        {/* Floating Content Box 1 - Nhà báo Lê Tùng Anh */}
        <section className="w-full pt-4 pb-20 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 md:p-12 shadow-[0_8px_40px_rgba(0,0,0,0.08)] border border-slate-100"
            >
              {/* Decorative accent */}
              <div className="absolute top-0 left-8 w-16 h-1 bg-gradient-to-r from-emerald-500 to-emerald-300 rounded-full" />
              
              <p className="text-justify text-slate-700 leading-relaxed text-lg md:text-xl">
               Theo Nhà báo <span className="font-semibold text-emerald-700">Lê Tùng Anh</span> - Chuyên gia về ô tô, Việt Nam hiện có khoảng <span className="font-bold text-emerald-600">150.000 cổng sạc</span>. Trong khi đó, Thái Lan chỉ hơn 3.000, Indonesia khoảng hơn 1.000, Malaysia chỉ vài trăm, còn Singapore chủ yếu mới dừng ở các điểm sạc AC công suất thấp. Song, trên thực tế, rất nhiều chủ xe vẫn còn nhầm lẫn giữa trụ sạc AC và DC, dẫn đến việc mất nhiều thời gian chờ đợi hoặc phát sinh &quot;phí phạt đỗ quá giờ&quot; không đáng có.
              </p>
            </motion.div>
          </div>
        </section>

        {/* So sánh sạc AC vs DC - Flat design */}
        <section className="w-full py-16 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <EVChargingComparison />
          </div>
        </section>

         {/* Floating Content Box 2 - Chính sách */}
        <section className="w-full py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative bg-gradient-to-br from-emerald-50/50 to-white rounded-2xl p-8 md:p-12 shadow-[0_8px_40px_rgba(0,0,0,0.08)] border border-emerald-100/50"
            >
              {/* Decorative accent */}
              <div className="absolute top-0 left-8 w-16 h-1 bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-full" />
              
              <p className="text-justify text-slate-700 leading-relaxed text-lg md:text-xl">
               Hệ thống chỉ thị và chính sách của nước ta thể hiện rõ sự chuyển dịch: từ việc <span className="font-semibold text-emerald-700">ưu đãi mạnh tay</span> để kích cầu tiêu dùng ban đầu, đến việc <span className="font-semibold text-emerald-700">thiết lập lộ trình dài hạn</span>, và hiện tại (năm 2026) là tập trung giải quyết <span className="font-semibold text-emerald-700">bài toán hạ tầng</span>.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Fishbone Diagram - Policy Timeline */}
        <section className="w-full py-8 bg-slate-50">
          <FishboneDiagram />
        </section>

        {/* Footer Section */}
        <footer className="w-full bg-slate-900 text-white py-12 px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="border-t border-slate-700 pt-8">
              <div className="mb-6">
                <h3 className="text-lg font-bold mb-2">Về Bài Báo Này</h3>
                <p className="text-slate-400 text-sm">
                  Bài báo được xuất bản vào ngày 02 tháng 05 năm 2026.
          
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-slate-400">
                <div>
                  <h4 className="text-white font-semibold mb-2">Liên Kết Hữu Ích</h4>
                  <ul className="space-y-1">
                    <li><a href="#" className="hover:text-white transition-colors">Chính sách xe điện</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Mạng trạm sạc</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">So sánh xe</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Tài Nguyên</h4>
                  <ul className="space-y-1">
                    <li><a href="#" className="hover:text-white transition-colors">Hướng dẫn mua xe</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Hỗ trợ</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Theo Dõi</h4>
                  <ul className="space-y-1">
                    <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                  </ul>
                </div>
              </div>

              <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-500 text-sm">
                <p>&copy; 2026 Xe Điện.</p>
              </div>
            </div>
          </div>
        </footer>
    </main>
  );
}
