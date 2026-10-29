import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Star,
  Truck,
  RotateCcw,
  ShieldCheck,
  Check,
  Sparkles,
  BookOpen,
  ArrowRight,
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProductCard from "@/components/ProductCard";
import ProductDetailActions from "@/components/ProductDetailActions";
import JsonLd from "@/components/JsonLd";
import { PRODUCTS } from "@/data/products";
import { POSTS } from "@/data/posts";
import { SITE_CONFIG, generateProductSchema } from "@/lib/seo";

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return PRODUCTS.map((prod) => ({
    slug: prod.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const product = PRODUCTS.find((p) => p.slug === params.slug);

  if (!product) {
    return {
      title: "Sản Phẩm Không Tồn Tại",
      description: "Không tìm thấy sản phẩm yêu cầu.",
    };
  }

  return {
    title: product.seo.title,
    description: product.seo.description,
    keywords: product.seo.keywords,
    alternates: {
      canonical: `${SITE_CONFIG.url}/san-pham/${product.slug}`,
    },
    openGraph: {
      title: product.seo.title,
      description: product.seo.description,
      url: `${SITE_CONFIG.url}/san-pham/${product.slug}`,
      images: product.images.map((img) => ({
        url: img.url,
        alt: img.alt,
      })),
      type: "website",
    },
  };
}

export default function ProductDetailPage({ params }: ProductPageProps) {
  const product = PRODUCTS.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  // Related products
  const relatedProducts = PRODUCTS.filter((p) => p.slug !== product.slug).slice(
    0,
    3
  );

  // Related blog articles (Internal linking)
  const relatedPosts = POSTS.filter(
    (post) =>
      post.relatedProductSlugs.includes(product.slug) ||
      post.categorySlug === "phoi-do"
  ).slice(0, 2);

  const productSchema = generateProductSchema(product);

  const discountPercent = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      {/* Product JSON-LD Schema Markup */}
      <JsonLd data={productSchema} />

      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: product.category, href: `/danh-muc/${product.categorySlug}` },
          { label: product.name },
        ]}
      />

      {/* Main Product Showcase Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
        {/* Left: Product Images Gallery */}
        <div className="lg:col-span-7 space-y-4">
          <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-brand-100 border border-brand-200 shadow-sm">
            <Image
              src={product.images[0].url}
              alt={product.images[0].alt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover object-center"
            />
            {discountPercent > 0 && (
              <span className="absolute top-4 left-4 bg-accent-600 text-white text-xs font-bold px-3 py-1 rounded shadow">
                Giảm {discountPercent}%
              </span>
            )}
          </div>

          {/* Secondary Thumbnail */}
          {product.images.length > 1 && (
            <div className="grid grid-cols-2 gap-4">
              {product.images.map((img, idx) => (
                <div
                  key={idx}
                  className="relative aspect-square rounded-xl overflow-hidden bg-brand-100 border border-brand-200"
                >
                  <Image
                    src={img.url}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right: Product Purchase Details */}
        <div className="lg:col-span-5 space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Link
                href={`/danh-muc/${product.categorySlug}`}
                className="text-xs font-bold uppercase tracking-wider text-accent-700 hover:underline"
              >
                {product.category}
              </Link>
              <span className="text-brand-300">•</span>
              <span className="text-xs text-brand-500 font-mono">
                Mã SKU: {product.sku}
              </span>
            </div>

            {/* DUY NHẤT 1 THẺ H1 TRÊN TRANG CHI TIẾT SẢN PHẨM */}
            <h1 className="text-2xl sm:text-3xl font-black text-brand-950 tracking-tight leading-snug">
              {product.name}
            </h1>

            {/* Rating Stars */}
            <div className="flex items-center gap-3 mt-3">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <span className="text-xs font-bold text-brand-800">
                {product.rating}/5.0
              </span>
              <span className="text-xs text-brand-500">
                ({product.reviewsCount} đánh giá từ khách hàng)
              </span>
            </div>
          </div>

          {/* Pricing */}
          <div className="p-4 bg-brand-50 rounded-xl border border-brand-200/80 flex items-baseline gap-4">
            <span className="text-3xl font-black text-brand-900">
              {product.price.toLocaleString("vi-VN")}₫
            </span>
            {product.originalPrice > product.price && (
              <span className="text-base text-brand-400 line-through">
                {product.originalPrice.toLocaleString("vi-VN")}₫
              </span>
            )}
            <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
              Tiết kiệm {(product.originalPrice - product.price).toLocaleString("vi-VN")}₫
            </span>
          </div>

          {/* Short description */}
          <p className="text-sm text-brand-700 leading-relaxed">
            {product.shortDescription}
          </p>

          {/* Interactive Color, Size, Quantity & Add to Cart / Buy Now actions */}
          <ProductDetailActions product={product} />

          {/* Guarantee Badges */}
          <div className="pt-4 border-t border-brand-200 space-y-2.5 text-xs text-brand-700">
            <div className="flex items-center gap-2.5">
              <Truck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Giao hàng toàn quốc (Miễn phí từ 399.000đ)</span>
            </div>
            <div className="flex items-center gap-2.5">
              <RotateCcw className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Đổi size trong 15 ngày tại nhà hoàn toàn miễn phí</span>
            </div>
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Kiểm tra hàng trước khi thanh toán (COD an toàn 100%)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Product Description (Chuẩn On-page SEO với H2, H3) */}
      <section className="pt-10 border-t border-brand-200">
        <div className="max-w-4xl mx-auto space-y-8">
          <div>
            <span className="text-xs font-bold text-accent-700 uppercase tracking-widest block mb-1">
              Thông Tin Kỹ Thuật & On-Page SEO
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-900 tracking-tight">
              Mô Tả Chi Tiết Sản Phẩm {product.name}
            </h2>
          </div>

          {/* Detailed Paragraphs */}
          <div className="space-y-4 text-brand-700 leading-relaxed text-sm sm:text-base">
            {product.fullDescription.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>

          {/* Features Highlights */}
          <div className="bg-brand-50 rounded-xl p-6 border border-brand-200 space-y-4">
            <h3 className="text-lg font-bold text-brand-900">
              Đặc Điểm Nổi Bật Vượt Trội Của {product.name}
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {product.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-brand-800">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Material & Specs */}
          <div className="border border-brand-200 rounded-xl overflow-hidden text-xs sm:text-sm">
            <div className="bg-brand-100 p-3 font-bold text-brand-900">
              Thông Số Chất Liệu & Tiêu Chuẩn Sản Xuất
            </div>
            <div className="divide-y divide-brand-200">
              <div className="grid grid-cols-3 p-3">
                <span className="font-semibold text-brand-600">Thành phần vải</span>
                <span className="col-span-2 text-brand-900">{product.materials}</span>
              </div>
              <div className="grid grid-cols-3 p-3">
                <span className="font-semibold text-brand-600">Hướng dẫn giặt ủi</span>
                <span className="col-span-2 text-brand-900">
                  Giặt máy nhiệt độ thường, lộn trái khi giặt và phơi, không dùng chất tẩy clo mạnh.
                </span>
              </div>
              <div className="grid grid-cols-3 p-3">
                <span className="font-semibold text-brand-600">Xuất xứ</span>
                <span className="col-span-2 text-brand-900">Sản xuất tại Việt Nam (Chuẩn xuất khẩu ISO 9001)</span>
              </div>
            </div>
          </div>

          {/* Internal Link to Blog Styling Guide */}
          {relatedPosts.length > 0 && (
            <div className="bg-white border-2 border-dashed border-brand-300 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-accent-600" />
                <span className="text-xs font-bold text-accent-700 uppercase tracking-widest">
                  Mẹo Phối Đồ Chuẩn Gu Cho Sản Phẩm Này
                </span>
              </div>
              <h3 className="text-lg font-bold text-brand-900 mb-4">
                Xem Ngay Các Bài Viết Hướng Dẫn Mix-Match Đi Kèm
              </h3>
              <div className="space-y-3">
                {relatedPosts.map((post) => (
                  <Link
                    key={post.id}
                    href={`/blog/${post.slug}`}
                    className="flex items-center justify-between p-3 rounded-lg bg-brand-50 hover:bg-brand-100 transition-colors group cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <BookOpen className="w-4 h-4 text-accent-600 shrink-0" />
                      <span className="text-xs sm:text-sm font-semibold text-brand-900 group-hover:text-accent-600 transition-colors">
                        {post.title}
                      </span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-brand-400 group-hover:translate-x-1 group-hover:text-brand-900 transition-all shrink-0" />
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Related Products Grid */}
      <section className="pt-12 border-t border-brand-200">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-brand-900">
            Sản Phẩm Cùng Bộ Sưu Tập
          </h2>
          <Link
            href="/danh-muc/ao-thun"
            className="text-xs font-bold text-accent-700 hover:underline cursor-pointer"
          >
            Xem tất cả →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {relatedProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
