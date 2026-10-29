"use client";

import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  Truck,
  RotateCcw,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/seo";
import { CATEGORIES } from "@/data/categories";

export default function Footer() {
  return (
    <footer className="bg-brand-950 text-brand-300 pt-16 pb-12 border-t border-brand-800">
      {/* Value Proposition Highlights */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-y border-brand-800/60">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-brand-900 rounded-lg text-accent-500">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm">Giao Hàng Miễn Phí</h4>
              <p className="text-xs text-brand-400 mt-1">Đơn hàng từ 399k toàn quốc, nhận hàng kiểm tra</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="p-3 bg-brand-900 rounded-lg text-accent-500">
              <RotateCcw className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm">Đổi Trả Trong 15 Ngày</h4>
              <p className="text-xs text-brand-400 mt-1">Hỗ trợ đổi size tận nơi, thủ tục nhanh chóng trong 24h</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="p-3 bg-brand-900 rounded-lg text-accent-500">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm">Cam Kết Chất Lượng</h4>
              <p className="text-xs text-brand-400 mt-1">100% sợi cotton tự nhiên, đường may kim chỉ cao cấp</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1: NAP & Brand Identity */}
          <div className="space-y-4">
            <Link href="/" className="inline-block cursor-pointer">
              <span className="text-2xl font-black tracking-widest text-white uppercase font-sans">
                AURA<span className="text-accent-500">.</span>
              </span>
            </Link>
            <p className="text-xs text-brand-400 leading-relaxed">
              Thương hiệu thời trang Minimalist bền vững, chú trọng phom dáng chuẩn người Việt và chất liệu tự nhiên thân thiện với môi trường.
            </p>

            {/* NAP (Name - Address - Phone) Section chuẩn Local SEO */}
            <div className="pt-2 space-y-2.5 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-accent-500 shrink-0 mt-0.5" />
                <span className="text-brand-300">
                  <strong className="text-white block font-medium">{SITE_CONFIG.nap.brandName}</strong>
                  {SITE_CONFIG.nap.address}, {SITE_CONFIG.nap.city}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-accent-500 shrink-0" />
                <a
                  href={`tel:${SITE_CONFIG.nap.phone}`}
                  className="text-brand-300 hover:text-white transition-colors duration-150 cursor-pointer"
                >
                  Hotline: <strong className="text-white">{SITE_CONFIG.nap.phoneFormatted}</strong>
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-accent-500 shrink-0" />
                <a
                  href={`mailto:${SITE_CONFIG.nap.email}`}
                  className="text-brand-300 hover:text-white transition-colors duration-150 cursor-pointer"
                >
                  {SITE_CONFIG.nap.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-accent-500 shrink-0" />
                <span className="text-brand-400">Giờ mở cửa: 08:30 - 22:00 hàng ngày</span>
              </div>
            </div>
          </div>

          {/* Column 2: Danh Mục Sản Phẩm */}
          <div>
            <h3 className="text-white font-bold text-sm tracking-wider uppercase mb-4">
              Danh Mục Sản Phẩm
            </h3>
            <ul className="space-y-2.5 text-xs">
              {CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/danh-muc/${cat.slug}`}
                    className="hover:text-white hover:underline transition-colors duration-150 cursor-pointer"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/san-pham/ao-thun-cotton-compact-tron"
                  className="hover:text-white hover:underline transition-colors duration-150 cursor-pointer"
                >
                  Áo Thun Cotton Compact
                </Link>
              </li>
              <li>
                <Link
                  href="/san-pham/quan-jean-ong-rong-wide-leg"
                  className="hover:text-white hover:underline transition-colors duration-150 cursor-pointer"
                >
                  Quần Jean Ống Rộng Vintage
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Cẩm Nang Phối Đồ & SEO Hub */}
          <div>
            <h3 className="text-white font-bold text-sm tracking-wider uppercase mb-4">
              Cẩm Nang Phối Đồ
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link
                  href="/blog/cach-phoi-do-voi-ao-thun-trang-nam-nu"
                  className="hover:text-white hover:underline transition-colors duration-150 cursor-pointer"
                >
                  Cách Phối Đồ Với Áo Thun Trắng
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/cach-phoi-do-voi-quan-jean-ong-rong"
                  className="hover:text-white hover:underline transition-colors duration-150 cursor-pointer"
                >
                  7 Cách Phối Quần Jean Ống Rộng
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/bi-quyet-chon-size-ao-so-mi-chuan"
                  className="hover:text-white hover:underline transition-colors duration-150 cursor-pointer"
                >
                  Bí Quyết Chọn Size Áo Sơ Mi Chuẩn
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/phong-cach-minimalist-trong-thoi-trang"
                  className="hover:text-white hover:underline transition-colors duration-150 cursor-pointer"
                >
                  Phong Cách Minimalist Tối Giản
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/cach-phoi-mau-quan-ao-banh-xe-mau-sac"
                  className="hover:text-white hover:underline transition-colors duration-150 cursor-pointer"
                >
                  Bánh Xe Màu Sắc Trong Thời Trang
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/huong-dan-bao-quan-quan-jean-ao-cotton"
                  className="hover:text-white hover:underline transition-colors duration-150 cursor-pointer"
                >
                  Mẹo Giặt & Bảo Quản Quần Jean Bền Màu
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Bộ Social Entity & Newsletter */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-sm tracking-wider uppercase mb-2">
              Kết Nối Social Entity
            </h3>
            <p className="text-xs text-brand-400">
              Theo dõi Aura Fashion trên các nền tảng mạng xã hội chính thức để nhận các video lookbook mới nhất:
            </p>

            {/* Social Icons (Lucide SVG Icons - Không dùng Emoji) */}
            <div className="flex items-center gap-3 pt-1">
              {/* Facebook */}
              <a
                href={SITE_CONFIG.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-brand-900 border border-brand-800 flex items-center justify-center text-brand-300 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-colors duration-200 cursor-pointer"
                aria-label="Facebook Aura Fashion"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a
                href={SITE_CONFIG.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-brand-900 border border-brand-800 flex items-center justify-center text-brand-300 hover:text-white hover:bg-pink-600 hover:border-pink-600 transition-colors duration-200 cursor-pointer"
                aria-label="Instagram Aura Fashion"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* TikTok */}
              <a
                href={SITE_CONFIG.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-brand-900 border border-brand-800 flex items-center justify-center text-brand-300 hover:text-white hover:bg-neutral-800 hover:border-neutral-700 transition-colors duration-200 cursor-pointer"
                aria-label="TikTok Aura Fashion"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              </a>

              {/* Pinterest */}
              <a
                href={SITE_CONFIG.social.pinterest}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-brand-900 border border-brand-800 flex items-center justify-center text-brand-300 hover:text-white hover:bg-red-600 hover:border-red-600 transition-colors duration-200 cursor-pointer"
                aria-label="Pinterest Aura Fashion"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.291 1.199-.334 1.379-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
                </svg>
              </a>

              {/* YouTube */}
              <a
                href={SITE_CONFIG.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-brand-900 border border-brand-800 flex items-center justify-center text-brand-300 hover:text-white hover:bg-red-700 hover:border-red-700 transition-colors duration-200 cursor-pointer"
                aria-label="YouTube Aura Fashion"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>

            {/* Newsletter Subscription */}
            <div className="pt-2">
              <label htmlFor="newsletter-email" className="text-xs text-brand-300 block mb-1.5 font-medium">
                Đăng ký nhận mẹo phối đồ & ưu đãi 10%:
              </label>
              <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-2">
                <input
                  id="newsletter-email"
                  type="email"
                  placeholder="Nhập email của bạn..."
                  className="bg-brand-900 border border-brand-800 text-white text-xs px-3 py-2 rounded-md focus:outline-none focus:border-accent-500 w-full"
                />
                <button
                  type="submit"
                  className="bg-accent-600 hover:bg-accent-500 text-white text-xs font-semibold px-3 py-2 rounded-md transition-colors duration-200 cursor-pointer shrink-0"
                >
                  Gửi
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & SEO Entity Credit */}
        <div className="pt-8 border-t border-brand-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-brand-400 gap-4">
          <p>
            © {new Date().getFullYear()} {SITE_CONFIG.nap.brandName}. Bản quyền thuộc về Đồ Án SEO & Web Analytics.
          </p>
          <div className="flex items-center space-x-6">
            <Link href="/gioi-thieu" className="hover:text-white transition-colors cursor-pointer">
              Giới Thiệu
            </Link>
            <Link href="/lien-he" className="hover:text-white transition-colors cursor-pointer">
              Liên Hệ NAP
            </Link>
            <a href="/sitemap.xml" className="hover:text-white transition-colors cursor-pointer" target="_blank">
              Sitemap.xml
            </a>
            <a href="/robots.txt" className="hover:text-white transition-colors cursor-pointer" target="_blank">
              Robots.txt
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
