"use client";

import Script from "next/script";

/**
 * ==============================================================================
 * HƯỚNG DẪN CẤU HÌNH GOOGLE ANALYTICS 4 (GA4):
 * ==============================================================================
 * Cách 1 (Khuyên dùng): Tạo file `.env.local` ở thư mục gốc và dán dòng sau:
 *   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
 *   (Thay G-XXXXXXXXXX bằng mã đo lường thực tế bạn lấy trong GA4 Admin > Data Streams)
 *
 * Cách 2: Bạn có thể thay trực tiếp chuỗi 'G-XXXXXXXXXX' ở biến GA_MEASUREMENT_ID bên dưới.
 * ==============================================================================
 */
export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_ID || "G-XXXXXXXXXX";

export default function Analytics() {
  // Nếu ID vẫn là placeholder và chưa có trên môi trường production, có thể bỏ qua hoặc hiển thị script mẫu
  return (
    <>
      {/* Google Analytics 4 Script */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
              send_page_view: true
            });
          `,
        }}
      />
    </>
  );
}
