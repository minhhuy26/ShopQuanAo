import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Shield, Heart, Sparkles, Award } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SITE_CONFIG } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Giới Thiệu Thương Hiệu Aura Fashion | Phong Cách Tối Giản Bền Vững",
  description:
    "Tìm hiểu về Aura Fashion - Thương hiệu thời trang Minimalist Việt Nam tiên phong ứng dụng 100% sợi cotton compact và triết lý thời trang bền vững vượt thời gian.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/gioi-thieu`,
  },
};

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <Breadcrumbs items={[{ label: "Giới Thiệu" }]} />

      {/* Hero Intro */}
      <div className="bg-brand-100/60 border border-brand-200 rounded-2xl p-6 sm:p-12 text-center max-w-4xl mx-auto space-y-4">
        <span className="text-xs font-bold text-accent-700 uppercase tracking-widest block">
          Câu Chuyện Thương Hiệu
        </span>
        {/* DUY NHẤT 1 THẺ H1 TRÊN TRANG GIỚI THIỆU */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-950 tracking-tight">
          Về Aura Fashion - Định Hình Phong Cách Tối Giản Việt
        </h1>
        <p className="text-sm sm:text-base text-brand-700 max-w-2xl mx-auto leading-relaxed">
          Được thành lập với sứ mệnh mang đến những món đồ cơ bản nhưng đạt tiêu chuẩn xuất khẩu cao nhất, Aura Fashion giúp bạn tự tin xây dựng phong cách cá nhân tinh giản và bền vững.
        </p>
      </div>

      {/* Core Values */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-xl border border-brand-200 shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-lg bg-accent-50 text-accent-600 flex items-center justify-center">
            <Heart className="w-5 h-5" />
          </div>
          <h2 className="text-lg font-bold text-brand-900">100% Sợi Tự Nhiên</h2>
          <p className="text-xs sm:text-sm text-brand-600 leading-relaxed">
            Chúng tôi cam kết sử dụng nguồn bông tự nhiên chải kỹ định lượng cao, an toàn cho làn da và thân thiện với hệ sinh thái môi trường.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-brand-200 shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <Shield className="w-5 h-5" />
          </div>
          <h2 className="text-lg font-bold text-brand-900">Độ Bền Vượt Thời Gian</h2>
          <p className="text-xs sm:text-sm text-brand-600 leading-relaxed">
            Mỗi đường kim mũi chỉ đều được gia cố chỉ dệt kép 2 kim cao cấp, giúp sản phẩm giữ trọn phom dáng sau hàng trăm chu kỳ giặt máy.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-brand-200 shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
            <Award className="w-5 h-5" />
          </div>
          <h2 className="text-lg font-bold text-brand-900">E-E-A-T & Chuyên Môn</h2>
          <p className="text-xs sm:text-sm text-brand-600 leading-relaxed">
            Đội ngũ biên tập viên và stylist của Aura liên tục nghiên cứu số đo nhân trắc học người Việt để đem lại các cẩm nang phối đồ thực chiến nhất.
          </p>
        </div>
      </section>

      {/* Brand CTA */}
      <div className="bg-brand-900 text-white rounded-2xl p-8 sm:p-12 text-center max-w-4xl mx-auto space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold">
          Sẵn Sàng Nâng Tầm Tủ Đồ Của Bạn Cùng Aura?
        </h2>
        <p className="text-xs sm:text-sm text-brand-300 max-w-xl mx-auto">
          Khám phá ngay bộ sưu tập áo thun, áo sơ mi và quần jean ống rộng mới nhất hoặc theo dõi cẩm nang thời trang của chúng tôi.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/danh-muc/ao-thun"
            className="px-6 py-3 bg-accent-600 hover:bg-accent-700 text-white font-bold text-xs uppercase tracking-wider rounded-md transition-colors"
          >
            Mua Sắm Ngay
          </Link>
          <Link
            href="/blog"
            className="px-6 py-3 bg-white text-brand-900 hover:bg-brand-100 font-bold text-xs uppercase tracking-wider rounded-md transition-colors"
          >
            Khám Phá Cẩm Nang Blog
          </Link>
        </div>
      </div>
    </div>
  );
}
