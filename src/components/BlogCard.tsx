import Image from "next/image";
import Link from "next/link";
import { Clock, Calendar, ArrowRight } from "lucide-react";
import { BlogPost } from "@/types";

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export default function BlogCard({ post, featured = false }: BlogCardProps) {
  if (featured) {
    return (
      <article className="group grid grid-cols-1 lg:grid-cols-12 gap-6 bg-white border border-brand-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
        <div className="lg:col-span-7 relative aspect-[16/10] overflow-hidden bg-brand-100">
          <Image
            src={post.coverImage}
            alt={post.coverImageAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 60vw"
            priority
            className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          />
          <div className="absolute top-4 left-4 z-10">
            <span className="bg-accent-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow">
              {post.category}
            </span>
          </div>
        </div>

        <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-4 text-xs text-brand-400 mb-3">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {post.publishedAt}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime}
              </span>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-brand-900 leading-snug group-hover:text-accent-600 transition-colors duration-200">
              <Link href={`/blog/${post.slug}`} className="cursor-pointer">
                {post.title}
              </Link>
            </h2>

            <p className="mt-3 text-sm text-brand-600 leading-relaxed line-clamp-3">
              {post.summary}
            </p>
          </div>

          <div className="pt-6 border-t border-brand-100 mt-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9 rounded-full overflow-hidden bg-brand-200 shrink-0">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  fill
                  sizes="36px"
                  className="object-cover"
                />
              </div>
              <div>
                <span className="block text-xs font-bold text-brand-900">
                  {post.author.name}
                </span>
                <span className="block text-[11px] text-brand-400">
                  {post.author.role}
                </span>
              </div>
            </div>

            <Link
              href={`/blog/${post.slug}`}
              className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-accent-700 hover:text-accent-800 transition-colors cursor-pointer"
            >
              <span>Đọc Tiếp</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group bg-white border border-brand-200 rounded-lg overflow-hidden flex flex-col justify-between hover:shadow-lg hover:border-brand-300 transition-all duration-300">
      <div>
        {/* Cover Image */}
        <Link
          href={`/blog/${post.slug}`}
          className="relative block aspect-[16/10] overflow-hidden bg-brand-100 cursor-pointer"
        >
          <Image
            src={post.coverImage}
            alt={post.coverImageAlt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          />
          <div className="absolute top-3 left-3 z-10">
            <span className="bg-brand-900/80 backdrop-blur-sm text-white text-[11px] font-semibold px-2.5 py-0.5 rounded">
              {post.category}
            </span>
          </div>
        </Link>

        {/* Content */}
        <div className="p-5">
          <div className="flex items-center gap-3 text-xs text-brand-400 mb-2">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {post.publishedAt}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
          </div>

          <h3 className="font-bold text-base text-brand-900 leading-snug line-clamp-2 group-hover:text-accent-600 transition-colors duration-200">
            <Link href={`/blog/${post.slug}`} className="cursor-pointer">
              {post.title}
            </Link>
          </h3>

          <p className="mt-2 text-xs text-brand-600 line-clamp-3 leading-relaxed">
            {post.summary}
          </p>
        </div>
      </div>

      <div className="px-5 pb-5 pt-0 border-t border-brand-100 mt-2">
        <div className="flex items-center justify-between pt-3">
          <span className="text-xs font-semibold text-brand-700">
            Tác giả: {post.author.name}
          </span>
          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center gap-1 text-xs font-bold text-accent-700 hover:text-accent-800 transition-colors cursor-pointer"
          >
            <span>Chi Tiết</span>
            <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </article>
  );
}
