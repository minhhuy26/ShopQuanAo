import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  Clock,
  User,
  Share2,
  Tag,
  ShoppingBag,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import TableOfContents from "@/components/TableOfContents";
import ReadingProgressBar from "@/components/ReadingProgressBar";
import ProductCard from "@/components/ProductCard";
import BlogCard from "@/components/BlogCard";
import JsonLd from "@/components/JsonLd";
import { POSTS } from "@/data/posts";
import { PRODUCTS } from "@/data/products";
import { SITE_CONFIG, generateArticleSchema } from "@/lib/seo";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const post = POSTS.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: "Bài Viết Không Tồn Tại",
      description: "Không tìm thấy bài viết yêu cầu.",
    };
  }

  return {
    title: post.seo.title,
    description: post.seo.description,
    keywords: post.seo.keywords,
    alternates: {
      canonical: `${SITE_CONFIG.url}/blog/${post.slug}`,
    },
    openGraph: {
      title: post.seo.title,
      description: post.seo.description,
      url: `${SITE_CONFIG.url}/blog/${post.slug}`,
      type: "article",
      publishedTime: `${post.publishedAt}T08:00:00+07:00`,
      modifiedTime: `${post.updatedAt}T15:00:00+07:00`,
      authors: [post.author.name],
      images: [
        {
          url: post.coverImage,
          alt: post.coverImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.seo.title,
      description: post.seo.description,
      images: [post.coverImage],
    },
  };
}

export default function BlogPostDetailPage({ params }: BlogPostPageProps) {
  const post = POSTS.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  // Related products mentioned in the article
  const relatedProducts = PRODUCTS.filter((prod) =>
    post.relatedProductSlugs.includes(prod.slug)
  );

  // Fallback to top products if none specifically assigned
  const displayedProducts =
    relatedProducts.length > 0 ? relatedProducts : PRODUCTS.slice(0, 2);

  // Related blog posts
  const relatedPosts = POSTS.filter(
    (p) => p.slug !== post.slug && post.relatedPostSlugs.includes(p.slug)
  ).slice(0, 2);

  const articleSchema = generateArticleSchema(post);

  return (
    <>
      {/* Top Reading Progress Bar */}
      <ReadingProgressBar />

      {/* JSON-LD Article Schema Markup */}
      <JsonLd data={articleSchema} />

      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: "Cẩm Nang Blog", href: "/blog" },
            { label: post.category, href: "/blog" },
            { label: post.title },
          ]}
        />

        {/* Article Header */}
        <header className="space-y-4 max-w-4xl">
          <div className="flex items-center gap-2">
            <span className="bg-accent-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              {post.category}
            </span>
            <span className="text-brand-300">•</span>
            <span className="text-xs text-brand-500">Chuẩn SEO On-page</span>
          </div>

          {/* DUY NHẤT 1 THẺ H1 TRÊN TRANG CHI TIẾT BÀI VIẾT BLOG */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-950 tracking-tight leading-tight">
            {post.title}
          </h1>

          <p className="text-base sm:text-lg text-brand-700 leading-relaxed font-normal">
            {post.summary}
          </p>

          {/* Author and Date Meta */}
          <div className="pt-4 border-t border-brand-200 flex flex-wrap items-center justify-between gap-4 text-xs text-brand-600">
            <div className="flex items-center gap-3">
              <div className="relative w-11 h-11 rounded-full overflow-hidden bg-brand-200 shrink-0">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  fill
                  sizes="44px"
                  className="object-cover"
                />
              </div>
              <div>
                <div className="font-bold text-brand-900 text-sm">
                  {post.author.name}
                </div>
                <div className="text-brand-500">{post.author.role}</div>
              </div>
            </div>

            <div className="flex items-center gap-4 text-brand-500">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-accent-600" />
                Ngày đăng: {post.publishedAt}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-accent-600" />
                {post.readTime}
              </span>
            </div>
          </div>
        </header>

        {/* Hero Cover Image (Bắt buộc alt chứa từ khóa) */}
        <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-lg border border-brand-200">
          <Image
            src={post.coverImage}
            alt={post.coverImageAlt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 90vw"
            className="object-cover object-center"
          />
        </div>

        {/* Content Layout with Table of Contents */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Main Article Body */}
          <div className="lg:col-span-8">
            {/* Table of Contents for Mobile & Top of Body */}
            <TableOfContents items={post.tableOfContents} />

            {/* Semantic Rich HTML Article Content */}
            <div
              className="prose prose-slate max-w-none text-brand-800 leading-relaxed space-y-4 text-base"
              dangerouslySetInnerHTML={{ __html: post.contentHtml }}
            />

            {/* Tags & Social Share */}
            <div className="pt-8 mt-10 border-t border-brand-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center flex-wrap gap-2">
                <Tag className="w-4 h-4 text-brand-400" />
                <span className="text-xs font-bold text-brand-700">Tags:</span>
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded bg-brand-100 text-brand-700 text-xs font-medium"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <Share2 className="w-4 h-4 text-brand-400" />
                <span className="text-xs font-bold text-brand-700">Chia sẻ:</span>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                    `${SITE_CONFIG.url}/blog/${post.slug}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 text-xs font-medium bg-blue-50 text-blue-700 rounded hover:bg-blue-100 transition-colors"
                >
                  Facebook
                </a>
                <a
                  href={`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(
                    `${SITE_CONFIG.url}/blog/${post.slug}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 text-xs font-medium bg-red-50 text-red-700 rounded hover:bg-red-100 transition-colors"
                >
                  Pinterest
                </a>
              </div>
            </div>

            {/* Author Box (E-E-A-T Google Signal) */}
            <div className="mt-8 p-6 bg-brand-100/70 rounded-xl border border-brand-200 flex items-start gap-4">
              <div className="relative w-14 h-14 rounded-full overflow-hidden bg-brand-200 shrink-0">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  fill
                  sizes="56px"
                  className="object-cover"
                />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h4 className="font-bold text-brand-900 text-sm">
                    {post.author.name}
                  </h4>
                  <span className="text-[11px] font-semibold text-accent-700 bg-accent-50 px-2 py-0.5 rounded">
                    Tác giả & Chuyên gia
                  </span>
                </div>
                <p className="text-xs text-brand-600 leading-relaxed">
                  Trưởng ban nội dung và Stylist thời trang tại Aura Fashion. Chuyên nghiên cứu các phong cách tối giản, quy tắc bánh xe màu sắc và xây dựng tủ đồ Capsule Wardrobe hiện đại.
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar: Sticky Recommended Products & Related Articles */}
          <aside className="lg:col-span-4 space-y-8">
            {/* Products Recommended in this Article (High Conversion) */}
            <div className="bg-white border border-brand-200 rounded-xl p-5 shadow-sm space-y-4">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-4 h-4 text-accent-600" />
                <h3 className="font-bold text-sm uppercase tracking-wider text-brand-900">
                  Sản Phẩm Đề Xuất Trong Bài
                </h3>
              </div>

              <div className="space-y-4 divide-y divide-brand-100">
                {displayedProducts.map((prod) => (
                  <div key={prod.id} className="pt-4 first:pt-0 flex gap-3 group">
                    <Link
                      href={`/san-pham/${prod.slug}`}
                      className="relative w-20 h-24 rounded-lg overflow-hidden bg-brand-100 shrink-0"
                    >
                      <Image
                        src={prod.images[0].url}
                        alt={prod.images[0].alt}
                        fill
                        sizes="80px"
                        className="object-cover group-hover:scale-105 transition-transform"
                      />
                    </Link>
                    <div className="flex flex-col justify-between">
                      <Link
                        href={`/san-pham/${prod.slug}`}
                        className="text-xs font-bold text-brand-900 group-hover:text-accent-600 transition-colors line-clamp-2"
                      >
                        {prod.name}
                      </Link>
                      <div>
                        <span className="text-xs font-black text-brand-900 block">
                          {prod.price.toLocaleString("vi-VN")}₫
                        </span>
                        <Link
                          href={`/san-pham/${prod.slug}`}
                          className="text-[11px] font-semibold text-accent-700 hover:underline mt-1 inline-block"
                        >
                          Xem chi tiết →
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Related Blog Posts (Internal Linking Hub) */}
            {relatedPosts.length > 0 && (
              <div className="bg-brand-50 border border-brand-200 rounded-xl p-5 space-y-4">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-accent-600" />
                  <h3 className="font-bold text-sm uppercase tracking-wider text-brand-900">
                    Bài Viết Cùng Chủ Đề
                  </h3>
                </div>

                <div className="space-y-3">
                  {relatedPosts.map((rPost) => (
                    <Link
                      key={rPost.id}
                      href={`/blog/${rPost.slug}`}
                      className="block p-3 bg-white rounded-lg border border-brand-200 hover:border-accent-400 transition-all group"
                    >
                      <span className="text-[10px] font-bold text-accent-600 uppercase">
                        {rPost.category}
                      </span>
                      <h4 className="text-xs font-bold text-brand-900 mt-1 line-clamp-2 group-hover:text-accent-600 transition-colors">
                        {rPost.title}
                      </h4>
                      <span className="text-[11px] text-brand-400 mt-2 block">
                        {rPost.readTime}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>

        {/* Bottom Related Posts Carousel/Grid */}
        <section className="pt-12 border-t border-brand-200">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-brand-900">
              Khám Phá Thêm Cẩm Nang Phối Đồ Khác
            </h2>
            <Link
              href="/blog"
              className="text-xs font-bold text-accent-700 hover:underline"
            >
              Xem tất cả 10 bài viết →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {POSTS.filter((p) => p.slug !== post.slug)
              .slice(0, 3)
              .map((p) => (
                <BlogCard key={p.id} post={p} />
              ))}
          </div>
        </section>
      </article>
    </>
  );
}
