import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProductCard from "@/components/ProductCard";
import { CATEGORIES } from "@/data/categories";
import { PRODUCTS } from "@/data/products";
import { POSTS } from "@/data/posts";
import { SITE_CONFIG } from "@/lib/seo";

interface CategoryPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return CATEGORIES.map((cat) => ({
    slug: cat.slug,
  }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const category = CATEGORIES.find((c) => c.slug === params.slug);

  if (!category) {
    return {
      title: "Danh Mục Không Tồn Tại",
      description: "Không tìm thấy danh mục yêu cầu.",
    };
  }

  return {
    title: category.seo.title,
    description: category.seo.description,
    keywords: category.seo.keywords,
    alternates: {
      canonical: `${SITE_CONFIG.url}/danh-muc/${category.slug}`,
    },
    openGraph: {
      title: category.seo.title,
      description: category.seo.description,
      url: `${SITE_CONFIG.url}/danh-muc/${category.slug}`,
      images: [
        {
          url: category.image,
          alt: category.imageAlt,
        },
      ],
    },
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = CATEGORIES.find((c) => c.slug === params.slug);

  if (!category) {
    notFound();
  }

  // Get products belonging to this category
  const categoryProducts = PRODUCTS.filter(
    (p) => p.categorySlug === category.slug
  );

  // If there are few products in this category, also show other products for a full shopping experience
  const otherProducts = PRODUCTS.filter(
    (p) => p.categorySlug !== category.slug
  );

  // Related blog articles for this category
  const relatedPosts = POSTS.filter(
    (p) =>
      p.relatedProductSlugs.some((prodSlug) =>
        categoryProducts.some((cp) => cp.slug === prodSlug)
      ) || p.categorySlug === "phoi-do"
  ).slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: "Danh Mục", href: "/danh-muc/ao-thun" },
          { label: category.name },
        ]}
      />

      {/* Category Header Banner */}
      <div className="bg-brand-100/60 border border-brand-200 rounded-2xl p-6 sm:p-10">
        <span className="text-xs font-bold text-accent-700 uppercase tracking-widest block mb-2">
          Danh Mục Sản Phẩm
        </span>
        {/* DUY NHẤT 1 THẺ H1 TRÊN TRANG DANH MỤC */}
        <h1 className="text-3xl sm:text-4xl font-black text-brand-950 tracking-tight mb-4">
          {category.name}
        </h1>
        <p className="text-sm sm:text-base text-brand-700 max-w-3xl leading-relaxed">
          {category.description}
        </p>

        {/* Quick Category Badges */}
        <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-brand-200">
          <span className="text-xs font-semibold text-brand-500 self-center mr-2">
            Xem thêm danh mục:
          </span>
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              href={`/danh-muc/${cat.slug}`}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors cursor-pointer ${
                cat.slug === category.slug
                  ? "bg-brand-900 text-white"
                  : "bg-white text-brand-700 hover:bg-brand-200"
              }`}
            >
              {cat.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Main Products Grid */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-brand-900">
            Sản Phẩm Trong Danh Mục ({categoryProducts.length})
          </h2>
          <span className="text-xs text-brand-500">
            Cam kết 100% chất lượng chuẩn phom
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {categoryProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Other Recommended Products */}
      {otherProducts.length > 0 && (
        <section className="pt-8 border-t border-brand-200">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-brand-900">
              Có Thể Bạn Cũng Thích
            </h2>
            <Link
              href="/"
              className="text-xs font-bold text-accent-700 hover:text-accent-800 transition-colors cursor-pointer"
            >
              Xem tất cả →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {otherProducts.slice(0, 3).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      )}

      {/* Related Blog Posts (Internal Link SEO Hub) */}
      {relatedPosts.length > 0 && (
        <section className="bg-brand-50 border border-brand-200 rounded-2xl p-6 sm:p-8">
          <div className="flex items-center gap-2 mb-3">
            <BookOpen className="w-5 h-5 text-accent-600" />
            <span className="text-xs font-bold text-accent-700 uppercase tracking-widest">
              Gợi Ý Cẩm Nang Phối Đồ Liên Quan
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-brand-900 mb-6">
            Bí Quyết Phối Đồ Chuẩn Phong Cách Cho {category.name}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {relatedPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group bg-white p-4 rounded-xl border border-brand-200 hover:border-brand-300 hover:shadow-md transition-all cursor-pointer block"
              >
                <span className="text-[11px] font-bold text-accent-600 uppercase">
                  {post.category}
                </span>
                <h3 className="text-sm font-bold text-brand-900 mt-1 line-clamp-2 group-hover:text-accent-600 transition-colors">
                  {post.title}
                </h3>
                <span className="inline-flex items-center gap-1 text-xs text-brand-500 font-semibold mt-3 group-hover:translate-x-1 transition-transform">
                  <span>Đọc bài viết</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
