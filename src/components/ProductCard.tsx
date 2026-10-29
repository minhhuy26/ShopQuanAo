import Image from "next/image";
import Link from "next/link";
import { Star, ArrowRight } from "lucide-react";
import { Product } from "@/types";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const discountPercent = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  return (
    <div className="group relative bg-white border border-brand-200 rounded-lg overflow-hidden flex flex-col justify-between hover:shadow-lg hover:border-brand-300 transition-all duration-300">
      <div>
        {/* Product Image Container */}
        <Link
          href={`/san-pham/${product.slug}`}
          className="relative block aspect-[3/4] w-full overflow-hidden bg-brand-100 cursor-pointer"
        >
          <Image
            src={product.images[0].url}
            alt={product.images[0].alt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
          />

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
            {discountPercent > 0 && (
              <span className="bg-accent-600 text-white text-[11px] font-bold px-2 py-0.5 rounded tracking-wide shadow-sm">
                -{discountPercent}%
              </span>
            )}
            {product.inStock && (
              <span className="bg-brand-900/80 backdrop-blur-sm text-white text-[10px] font-medium px-2 py-0.5 rounded">
                Còn Hàng
              </span>
            )}
          </div>
        </Link>

        {/* Product Info */}
        <div className="p-4 sm:p-5">
          {/* Category Tag & Rating */}
          <div className="flex items-center justify-between text-xs text-brand-500 mb-1.5">
            <span className="uppercase tracking-wider font-semibold text-[11px] text-accent-700">
              {product.category}
            </span>
            <div className="flex items-center gap-1">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span className="font-semibold text-brand-800">{product.rating}</span>
              <span className="text-brand-400">({product.reviewsCount})</span>
            </div>
          </div>

          {/* Product Name */}
          <h3 className="font-bold text-sm sm:text-base text-brand-900 leading-snug line-clamp-2 group-hover:text-accent-600 transition-colors duration-200">
            <Link href={`/san-pham/${product.slug}`} className="cursor-pointer">
              {product.name}
            </Link>
          </h3>

          {/* Short description */}
          <p className="mt-1.5 text-xs text-brand-600 line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>
        </div>
      </div>

      {/* Price & Action */}
      <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0">
        <div className="flex items-baseline gap-2 mb-3">
          <span className="text-base sm:text-lg font-black text-brand-900">
            {product.price.toLocaleString("vi-VN")}₫
          </span>
          {product.originalPrice > product.price && (
            <span className="text-xs text-brand-400 line-through">
              {product.originalPrice.toLocaleString("vi-VN")}₫
            </span>
          )}
        </div>

        <Link
          href={`/san-pham/${product.slug}`}
          className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-bold uppercase tracking-wider text-brand-900 bg-brand-50 border border-brand-300 rounded hover:bg-brand-900 hover:text-white hover:border-brand-900 transition-all duration-200 cursor-pointer"
        >
          <span>Xem Chi Tiết</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
        </Link>
      </div>
    </div>
  );
}
