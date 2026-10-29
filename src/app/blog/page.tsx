import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import BlogCard from "@/components/BlogCard";
import { POSTS } from "@/data/posts";
import { SITE_CONFIG } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Cẩm Nang Phối Đồ & Xu Hướng Thời Trang Mới Nhất | Aura Blog",
  description:
    "Tổng hợp kiến thức phối đồ nam nữ, mẹo chọn size áo sơ mi, xu hướng thời trang Y2K và bí quyết bảo quản quần jean áo cotton luôn bền đẹp chuẩn SEO.",
  keywords: [
    "cẩm nang phối đồ",
    "cách phối đồ đẹp",
    "xu hướng thời trang",
    "phong cách minimalist",
    "mẹo chọn size quần áo",
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/blog`,
  },
  openGraph: {
    title: "Cẩm Nang Phối Đồ & Xu Hướng Thời Trang Mới Nhất | Aura Blog",
    description:
      "Tổng hợp kiến thức phối đồ nam nữ, mẹo chọn size áo sơ mi, xu hướng thời trang Y2K và bí quyết bảo quản quần jean áo cotton luôn bền đẹp chuẩn SEO.",
    url: `${SITE_CONFIG.url}/blog`,
    images: [
      {
        url: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80",
        alt: "Cẩm nang phối đồ thời trang Aura Fashion",
      },
    ],
  },
};

export default function BlogListingPage() {
  const featuredPost = POSTS[0];
  const regularPosts = POSTS.slice(1);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: "Cẩm Nang Blog" }]} />

      {/* Blog Hub Header */}
      <div className="bg-brand-100/60 border border-brand-200 rounded-2xl p-6 sm:p-10 text-center max-w-4xl mx-auto">
        <span className="text-xs font-bold text-accent-700 uppercase tracking-widest block mb-2">
          Góc Chia Sẻ Kiến Thức Stylist
        </span>
        {/* DUY NHẤT 1 THẺ H1 TRÊN TRANG TỔNG QUAN BLOG */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-950 tracking-tight mb-4">
          Cẩm Nang Phối Đồ & Xu Hướng Thời Trang
        </h1>
        <p className="text-sm sm:text-base text-brand-700 max-w-2xl mx-auto leading-relaxed">
          Nơi cập nhật những bí quyết phối đồ thực chiến, kiến thức bảo quản trang phục và phân tích các xu hướng thời trang nổi bật giúp bạn nâng tầm gu thẩm mỹ cá nhân.
        </p>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-6 pt-6 border-t border-brand-200">
          <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-brand-900 text-white">
            Tất Cả (10 Bài Viết)
          </span>
          <span className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-white text-brand-700 border border-brand-200">
            Cẩm Nang Phối Đồ
          </span>
          <span className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-white text-brand-700 border border-brand-200">
            Xu Hướng Thời Trang
          </span>
          <span className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-white text-brand-700 border border-brand-200">
            Cẩm Nang Chọn Đồ
          </span>
          <span className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-white text-brand-700 border border-brand-200">
            Mẹo Giặt Ủi & Bảo Quản
          </span>
        </div>
      </div>

      {/* Featured Top Story */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-brand-900">
            Bài Viết Nổi Bật Nhất
          </h2>
          <span className="text-xs text-brand-500">Được đọc nhiều tuần này</span>
        </div>
        <BlogCard post={featuredPost} featured={true} />
      </section>

      {/* All Remaining Articles */}
      <section className="pt-6">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-brand-900">
            Toàn Bộ Bài Viết Mới Nhất ({regularPosts.length})
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {regularPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
}
