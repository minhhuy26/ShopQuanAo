import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SITE_CONFIG } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Liên Hệ Aura Fashion | Thông Tin Cửa Hàng & Hotline Hỗ Trợ NAP",
  description:
    "Liên hệ với Aura Fashion Studio: Địa chỉ 123 Nguyễn Trãi, Bến Thành, Quận 1, TP.HCM. Hotline 0987.654.321. Hỗ trợ khách hàng 24/7 đổi size miễn phí.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/lien-he`,
  },
};

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <Breadcrumbs items={[{ label: "Liên Hệ" }]} />

      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-bold text-accent-700 uppercase tracking-widest">
          Kết Nối Với Chúng Tôi
        </span>
        {/* DUY NHẤT 1 THẺ H1 TRÊN TRANG LIÊN HỆ */}
        <h1 className="text-3xl sm:text-4xl font-black text-brand-950 tracking-tight">
          Thông Tin Liên Hệ & Hệ Thống Cửa Hàng
        </h1>
        <p className="text-xs sm:text-sm text-brand-600">
          Aura Fashion luôn sẵn sàng lắng nghe mọi ý kiến đóng góp và giải đáp thắc mắc về đơn hàng của bạn.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Left: NAP (Name, Address, Phone) Thông tin đồng nhất */}
        <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl border border-brand-200 shadow-sm space-y-6">
          <h2 className="text-xl font-bold text-brand-900 border-b border-brand-100 pb-3">
            Thông Tin Doanh Nghiệp (NAP)
          </h2>

          <div className="space-y-4 text-xs sm:text-sm text-brand-700">
            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-lg bg-accent-50 text-accent-600 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <strong className="block text-brand-900 font-bold">
                  {SITE_CONFIG.nap.brandName}
                </strong>
                <span>
                  {SITE_CONFIG.nap.address}, {SITE_CONFIG.nap.city}, Việt Nam
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-blue-50 text-blue-600 shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-brand-500 text-xs">Hotline Đặt Hàng & Khiếu Nại:</span>
                <a
                  href={`tel:${SITE_CONFIG.nap.phone}`}
                  className="font-bold text-brand-900 hover:text-accent-600 transition-colors"
                >
                  {SITE_CONFIG.nap.phoneFormatted}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-emerald-50 text-emerald-600 shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-brand-500 text-xs">Email Hỗ Trợ Khách Hàng:</span>
                <a
                  href={`mailto:${SITE_CONFIG.nap.email}`}
                  className="font-bold text-brand-900 hover:text-accent-600 transition-colors"
                >
                  {SITE_CONFIG.nap.email}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-amber-50 text-amber-600 shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-brand-500 text-xs">Thời Gian Làm Việc:</span>
                <span className="font-semibold text-brand-900">
                  08:30 - 22:00 (Từ Thứ Hai đến Chủ Nhật)
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="lg:col-span-7 bg-brand-50/70 p-6 sm:p-8 rounded-2xl border border-brand-200">
          <h2 className="text-xl font-bold text-brand-900 mb-4">
            Gửi Tin Nhắn Cho Aura Fashion
          </h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-brand-700 uppercase tracking-wider mb-1">
                  Họ và tên *
                </label>
                <input
                  type="text"
                  placeholder="Nguyễn Văn A"
                  required
                  className="w-full bg-white border border-brand-300 rounded-lg p-2.5 text-xs text-brand-900 focus:outline-none focus:border-brand-900"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-brand-700 uppercase tracking-wider mb-1">
                  Số điện thoại *
                </label>
                <input
                  type="tel"
                  placeholder="0912 345 678"
                  required
                  className="w-full bg-white border border-brand-300 rounded-lg p-2.5 text-xs text-brand-900 focus:outline-none focus:border-brand-900"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-brand-700 uppercase tracking-wider mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="example@gmail.com"
                className="w-full bg-white border border-brand-300 rounded-lg p-2.5 text-xs text-brand-900 focus:outline-none focus:border-brand-900"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-brand-700 uppercase tracking-wider mb-1">
                Nội dung cần hỗ trợ *
              </label>
              <textarea
                rows={4}
                placeholder="Nhập nội dung cần tư vấn về kích thước hoặc đổi trả đơn hàng..."
                required
                className="w-full bg-white border border-brand-300 rounded-lg p-2.5 text-xs text-brand-900 focus:outline-none focus:border-brand-900"
              ></textarea>
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand-900 text-white font-bold text-xs uppercase tracking-wider rounded-lg hover:bg-accent-600 transition-colors cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Gửi Tin Nhắn</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
