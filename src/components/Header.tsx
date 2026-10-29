"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ShoppingBag,
  Menu,
  X,
  Search,
  ChevronDown,
  Sparkles,
} from "lucide-react";
import { CATEGORIES } from "@/data/categories";
import { useCart } from "@/context/CartContext";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
  const pathname = usePathname();
  const { totalCount, setIsCartOpen } = useCart();

  const navLinks = [
    { label: "Trang Chủ", href: "/" },
    {
      label: "Sản Phẩm",
      href: "/san-pham",
      hasDropdown: true,
    },
    { label: "Cẩm Nang Blog", href: "/blog" },
    { label: "Giới Thiệu", href: "/gioi-thieu" },
    { label: "Liên Hệ", href: "/lien-he" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-brand-200 transition-all duration-200">
      {/* Top Banner announcement */}
      <div className="bg-brand-900 text-white text-xs py-2 px-4 text-center tracking-wider font-medium flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-accent-500 animate-pulse" />
        <span>Miễn phí vận chuyển toàn quốc cho đơn hàng từ 399.000đ | Hỗ trợ đổi trả 15 ngày</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group cursor-pointer focus:outline-none"
            aria-label="Aura Fashion Trang Chủ"
          >
            <span className="text-2xl font-black tracking-widest text-brand-900 font-sans uppercase group-hover:text-accent-600 transition-colors duration-200">
              AURA<span className="text-accent-600">.</span>
            </span>
            <span className="hidden sm:inline-block text-[10px] tracking-widest text-brand-500 uppercase border-l border-brand-300 pl-2 ml-1">
              Minimalist Studio
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" aria-label="Menu chính">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href) ||
                    (link.href === "/san-pham" && pathname.startsWith("/danh-muc"));

              if (link.hasDropdown) {
                return (
                  <div
                    key={link.label}
                    className="relative group"
                    onMouseEnter={() => setCategoryDropdownOpen(true)}
                    onMouseLeave={() => setCategoryDropdownOpen(false)}
                  >
                    <Link
                      href="/san-pham"
                      className={`flex items-center gap-1 text-sm font-semibold tracking-wide py-2 transition-colors duration-200 cursor-pointer ${
                        isActive
                          ? "text-accent-600 border-b-2 border-accent-600"
                          : "text-brand-700 hover:text-brand-950"
                      }`}
                    >
                      <span>Sản Phẩm</span>
                      <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                    </Link>

                    {/* Dropdown Menu */}
                    <div
                      className={`absolute top-full left-0 w-64 bg-white border border-brand-200 rounded-lg shadow-xl p-2 transition-all duration-200 ${
                        categoryDropdownOpen
                          ? "opacity-100 visible translate-y-0"
                          : "opacity-0 invisible -translate-y-2 pointer-events-none"
                      }`}
                    >
                      <Link
                        href="/san-pham"
                        className="block px-3 py-2 text-xs font-bold text-accent-700 bg-accent-50 rounded-md hover:bg-accent-100 mb-1 transition-colors"
                      >
                        🔥 Xem Tất Cả Sản Phẩm (16 mẫu) →
                      </Link>
                      <div className="text-[11px] font-bold text-brand-400 px-3 py-1.5 uppercase tracking-wider">
                        Phân Loại Theo Danh Mục
                      </div>
                      {CATEGORIES.map((cat) => (
                        <Link
                          key={cat.id}
                          href={`/danh-muc/${cat.slug}`}
                          className="block px-3 py-2 text-sm text-brand-700 hover:bg-brand-50 hover:text-accent-600 rounded-md transition-colors duration-150 cursor-pointer"
                        >
                          {cat.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-sm font-semibold tracking-wide py-2 transition-colors duration-200 cursor-pointer ${
                    isActive
                      ? "text-accent-600 border-b-2 border-accent-600"
                      : "text-brand-700 hover:text-brand-950"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center space-x-4">
            <Link
              href="/san-pham"
              className="p-2 text-brand-700 hover:text-brand-950 hover:bg-brand-100 rounded-full transition-colors duration-200 cursor-pointer"
              aria-label="Tìm kiếm sản phẩm"
            >
              <Search className="w-5 h-5" />
            </Link>

            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-brand-700 hover:text-brand-950 hover:bg-brand-100 rounded-full transition-colors duration-200 cursor-pointer"
              aria-label="Giỏ hàng Aura Fashion"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-accent-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center animate-pulse">
                  {totalCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-brand-700 hover:text-brand-950 hover:bg-brand-100 rounded-md transition-colors duration-200 cursor-pointer"
              aria-label="Mở menu di động"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-brand-200 px-4 pt-2 pb-6 space-y-3 transition-all duration-300">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-semibold text-brand-800 hover:text-accent-600 cursor-pointer"
          >
            Trang Chủ
          </Link>

          <Link
            href="/san-pham"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-bold text-accent-700 hover:text-accent-800 cursor-pointer"
          >
            Tất Cả Sản Phẩm (16 mẫu)
          </Link>

          <div className="pt-2 border-t border-brand-100">
            <div className="text-xs font-bold text-brand-400 uppercase tracking-wider mb-2">
              Danh Mục Sản Phẩm
            </div>
            <div className="pl-3 space-y-2">
              {CATEGORIES.map((cat) => (
                <Link
                  key={cat.id}
                  href={`/danh-muc/${cat.slug}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-1.5 text-sm text-brand-700 hover:text-accent-600 cursor-pointer"
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="pt-2 border-t border-brand-100 space-y-2">
            <Link
              href="/blog"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-base font-semibold text-brand-800 hover:text-accent-600 cursor-pointer"
            >
              Cẩm Nang Blog Phối Đồ
            </Link>
            <Link
              href="/gioi-thieu"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-base font-semibold text-brand-800 hover:text-accent-600 cursor-pointer"
            >
              Giới Thiệu Thương Hiệu
            </Link>
            <Link
              href="/lien-he"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-base font-semibold text-brand-800 hover:text-accent-600 cursor-pointer"
            >
              Liên Hệ & Cửa Hàng
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
