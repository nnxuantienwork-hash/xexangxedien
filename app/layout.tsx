import type { Metadata } from 'next'
import { Be_Vietnam_Pro, Lora } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-be-vietnam-pro",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-lora",
  display: "swap",
});

export const metadata: Metadata = {
  title: 'CHƯA ĐẶT TIT BÁO',
  description: 'Câu chuyện xe xăng và xe điện hiện nay đã vượt ra ngoài giới hạn của một "chiếc xe" thông thường, mà ở đó là câu chuyện của một "giải pháp di chuyển". Các phương tiện sử dụng nhiên liệu xanh, thân thiện với môi trường này đang được chú trọng như là một cách giải quyết tình trạng ô nhiễm môi trường.',
  generator: 'v0.app',
  icons: {
    icon: '/tia-set-canh-bao-removebg-preview.png',
    apple: '/tia-set-canh-bao-removebg-preview.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi">
      <body className={`${beVietnamPro.variable} ${lora.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
