"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Search, ArrowUpDown } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProductCard from "@/components/ProductCard";
import { Product, Category } from "@/types";

interface AllProductsClientProps {
  products: Product[];
  categories: Category[];
}

export default function AllProductsClient({
  products,
  categories,
}: AllProductsClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("featured");
  const [priceRange, setPriceRange] = useState<string>("all");

  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        // Category filter
        if (
          selectedCategory !== "all" &&
          product.categorySlug !== selectedCategory
        ) {
          return false;
        }
        // Search filter
        if (
          searchQuery.trim() !== "" &&
          !product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
          !product.shortDescription
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        ) {
          return false;
        }
        // Price filter
        if (priceRange === "under250" && product.price >= 250000) return false;
        if (
          priceRange === "250to350" &&
          (product.price < 250000 || product.price > 350000)
        )
          return false;
        if (priceRange === "over350" && product.price <= 350000) return false;

        return true;
      })
      .sort((a, b) => {
        if (sortBy === "price-asc") return a.price - b.price;
        if (sortBy === "price-desc") return b.price - a.price;
        if (sortBy === "rating") return b.rating - a.rating;
        return 0; // featured/default
      });
  }, [products, selectedCategory, searchQuery, sortBy, priceRange]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: "Tất Cả Sản Phẩm" }]} />

      {/* Header Banner */}
      <div className="bg-brand-100/60 border border-brand-200 rounded-2xl p-6 sm:p-10 text-center max-w-4xl mx-auto">
        <span className="text-xs font-bold text-accent-700 uppercase tracking-widest block mb-2">
          Cửa Hàng Thời Trang Minimalist
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-brand-950 tracking-tight mb-3">
          Toàn Bộ Bộ Sưu Tập Thời Trang Aura
        </h1>
        <p className="text-sm text-brand-700 max-w-2xl mx-auto leading-relaxed">
          Tuyển tập {products.length} mẫu trang phục từ áo thun compact, sơ mi
          oxford, quần jean ống rộng đến áo khoác bomber 2 lớp chuẩn phom người
          Việt.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white border border-brand-200 rounded-xl p-4 sm:p-6 shadow-sm space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          {/* Search box */}
          <div className="md:col-span-5 relative">
            <Search className="w-4 h-4 text-brand-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Tìm kiếm sản phẩm (áo thun, quần jean, bomber...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-brand-50 border border-brand-200 rounded-lg text-xs sm:text-sm text-brand-900 focus:outline-none focus:border-brand-900 transition-colors"
            />
          </div>

          {/* Price filter */}
          <div className="md:col-span-4 flex items-center gap-2">
            <span className="text-xs font-bold text-brand-700 shrink-0">
              Mức giá:
            </span>
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="w-full bg-brand-50 border border-brand-200 rounded-lg p-2.5 text-xs text-brand-900 focus:outline-none focus:border-brand-900 cursor-pointer"
            >
              <option value="all">Tất cả mức giá</option>
              <option value="under250">Dưới 250.000₫</option>
              <option value="250to350">250.000₫ - 350.000₫</option>
              <option value="over350">Trên 350.000₫</option>
            </select>
          </div>

          {/* Sort selector */}
          <div className="md:col-span-3 flex items-center gap-2">
            <ArrowUpDown className="w-4 h-4 text-brand-400 shrink-0" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full bg-brand-50 border border-brand-200 rounded-lg p-2.5 text-xs text-brand-900 focus:outline-none focus:border-brand-900 cursor-pointer"
            >
              <option value="featured">Nổi bật nhất</option>
              <option value="price-asc">Giá: Thấp đến Cao</option>
              <option value="price-desc">Giá: Cao đến Thấp</option>
              <option value="rating">Đánh giá cao nhất</option>
            </select>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-brand-100">
          <span className="text-xs font-bold text-brand-500 mr-2">
            Danh mục:
          </span>
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors cursor-pointer ${
              selectedCategory === "all"
                ? "bg-brand-900 text-white"
                : "bg-brand-100 text-brand-700 hover:bg-brand-200"
            }`}
          >
            Tất Cả ({products.length})
          </button>
          {categories.map((cat) => {
            const count = products.filter(
              (p) => p.categorySlug === cat.slug
            ).length;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.slug)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors cursor-pointer ${
                  selectedCategory === cat.slug
                    ? "bg-brand-900 text-white"
                    : "bg-brand-100 text-brand-700 hover:bg-brand-200"
                }`}
              >
                {cat.name} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Results Counter */}
      <div className="flex items-center justify-between text-xs text-brand-500 px-1">
        <span>Hiển thị {filteredProducts.length} sản phẩm phù hợp</span>
        {(selectedCategory !== "all" ||
          searchQuery !== "" ||
          priceRange !== "all") && (
          <button
            onClick={() => {
              setSelectedCategory("all");
              setSearchQuery("");
              setPriceRange("all");
            }}
            className="text-accent-700 font-bold hover:underline cursor-pointer"
          >
            Đặt lại bộ lọc
          </button>
        )}
      </div>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white border border-brand-200 rounded-xl space-y-3">
          <p className="text-sm font-semibold text-brand-800">
            Không tìm thấy sản phẩm nào phù hợp với bộ lọc hiện tại.
          </p>
          <button
            onClick={() => {
              setSelectedCategory("all");
              setSearchQuery("");
              setPriceRange("all");
            }}
            className="px-4 py-2 bg-brand-900 text-white text-xs font-bold rounded hover:bg-accent-600 transition-colors cursor-pointer"
          >
            Xem toàn bộ sản phẩm
          </button>
        </div>
      )}
    </div>
  );
}
