import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import BlogCard from "@/components/BlogCard";
import { CATEGORIES } from "@/data/categories";
import { PRODUCTS } from "@/data/products";
import { POSTS } from "@/data/posts";

export default function HomePage() {
  const featuredProduct = PRODUCTS.slice(0, 8);
  const featuredPost = POSTS[0];
  const recentPosts = POSTS.slice(1, 4);

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-brand-100/50 border-b border-brand-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Hero Text */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-brand-300 rounded-full text-xs font-semibold text-brand-800 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-accent-600" />
                <span>Bộ Sưu Tập Thu Đông 2026 Mới Ra Mắt</span>
              </div>

              {/* DUY NHẤT 1 THẺ H1 TRÊN TRANG CHỦ THEO CHUẨN SEO */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-brand-950 tracking-tight leading-[1.1] font-sans">
                Thời Trang Tối Giản Nâng Tầm Phong Cách Chuẩn Gu
              </h1>

              <p className="text-base sm:text-lg text-brand-700 max-w-2xl leading-relaxed">
                Khám phá các thiết kế thời trang Minimalist bền vững từ 100% sợi cotton compact và denim cao cấp. Kết hợp cùng cẩm nang phối đồ chuẩn stylist giúp bạn tự tin tỏa sáng mỗi ngày.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Link
                  href="/san-pham"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-900 text-white font-bold text-sm tracking-wider uppercase rounded-md hover:bg-accent-600 transition-colors duration-200 shadow-md cursor-pointer"
                >
                  <span>Khám Phá Toàn Bộ Sản Phẩm (16 mẫu)</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/blog"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-brand-900 font-bold text-sm tracking-wider uppercase border border-brand-300 rounded-md hover:bg-brand-50 transition-colors duration-200 cursor-pointer"
                >
                  <span>Đọc Cẩm Nang Phối Đồ</span>
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="pt-6 border-t border-brand-200/80 flex flex-wrap items-center gap-6 text-xs text-brand-600">
                <span className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  100% Vải Tự Nhiên
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Đổi Trả 15 Ngày Tận Nơi
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Giao Nhanh 2h Nội Thành
                </span>
              </div>
            </div>

            {/* Right Hero Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1000&q=80"
                  alt="Bộ sưu tập thời trang tối giản thanh lịch phong cách Minimalist Aura Fashion"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DANH MỤC QUẦN ÁO NỔI BẬT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-bold text-accent-700 uppercase tracking-widest block mb-1">
              Phân Loại Sản Phẩm
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-900 tracking-tight">
              Danh Mục Quần Áo Nổi Bật
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-brand-500 max-w-md">
            Lựa chọn theo phong cách và nhu cầu mua sắm thường ngày của bạn.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              href={`/danh-muc/${cat.slug}`}
              className="group relative aspect-[3/4] rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 block cursor-pointer"
            >
              <Image
                src={cat.image}
                alt={cat.imageAlt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950/80 via-brand-950/20 to-transparent flex flex-col justify-end p-5 text-white">
                <h3 className="text-lg font-bold group-hover:text-accent-400 transition-colors">
                  {cat.name}
                </h3>
                <p className="text-xs text-brand-200 mt-1 line-clamp-2">
                  {cat.description}
                </p>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-accent-300 group-hover:translate-x-1 transition-transform">
                  Xem Danh Mục →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 3. SẢN PHẨM BÁN CHẠY NHẤT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-bold text-accent-700 uppercase tracking-widest block mb-1">
              Top Picks 2026
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-900 tracking-tight">
              Sản Phẩm Bán Chạy Nhất
            </h2>
          </div>
          <Link
            href="/san-pham"
            className="text-xs sm:text-sm font-bold text-brand-900 hover:text-accent-600 inline-flex items-center gap-1 transition-colors cursor-pointer"
          >
            <span>Xem Toàn Bộ 16 Sản Phẩm</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuredProduct.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* 4. CAM KẾT CHẤT LƯỢNG & TRIẾT LÝ THƯƠNG HIỆU */}
      <section className="bg-brand-900 text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
            <span className="text-xs font-bold text-accent-400 uppercase tracking-widest block">
              Triết Lý Aura Fashion
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
              Thời Trang Không Phải Sự Lãng Phí, Mà Là Cách Bạn Tự Tôn Bản Thân
            </h2>
            <p className="text-sm text-brand-300 leading-relaxed">
              Chúng tôi không chạy theo các chu kỳ thời trang nhanh (Fast Fashion) gây ô nhiễm. Mỗi chiếc áo thun, chiếc quần jean tại Aura được tạo ra để đồng hành cùng bạn qua năm tháng.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-brand-800/60 p-6 rounded-xl border border-brand-700/60 space-y-3">
              <h3 className="text-lg font-bold text-white">Chất Liệu Bền Vững</h3>
              <p className="text-xs text-brand-300 leading-relaxed">
                Ứng dụng 100% sợi cotton chải kỹ Compact và kỹ thuật nhuộm sinh học an toàn cho da, giữ màu qua hàng trăm lần giặt.
              </p>
            </div>
            <div className="bg-brand-800/60 p-6 rounded-xl border border-brand-700/60 space-y-3">
              <h3 className="text-lg font-bold text-white">Phom Dáng Chuẩn Người Việt</h3>
              <p className="text-xs text-brand-300 leading-relaxed">
                Nghiên cứu trên 10.000 số đo thực tế để tạo nên form áo suông Regular và quần Wide-leg tôn dáng tối đa cho vóc dáng châu Á.
              </p>
            </div>
            <div className="bg-brand-800/60 p-6 rounded-xl border border-brand-700/60 space-y-3">
              <h3 className="text-lg font-bold text-white">Minh Bạch & Tận Tâm</h3>
              <p className="text-xs text-brand-300 leading-relaxed">
                Giá thành xuất xưởng minh bạch. Đổi trả miễn phí 15 ngày tận nhà nếu sản phẩm không vừa ý khách hàng.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. KHU VỰC BLOG PHỐI ĐỒ MỚI NHẤT (SEO HUB QUAN TRỌNG) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-bold text-accent-700 uppercase tracking-widest block mb-1">
              Chuyên Mục Kiến Thức
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-900 tracking-tight">
              Cẩm Nang Phối Đồ & Xu Hướng Thời Trang
            </h2>
          </div>
          <Link
            href="/blog"
            className="text-xs sm:text-sm font-bold text-brand-900 hover:text-accent-600 inline-flex items-center gap-1 transition-colors cursor-pointer"
          >
            <span>Khám Phá Tất Cả 10 Bài Viết</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Featured Top Post */}
        <div className="mb-8">
          <BlogCard post={featuredPost} featured={true} />
        </div>

        {/* 3 Recent Posts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {recentPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
}
