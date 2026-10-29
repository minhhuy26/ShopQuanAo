import type { Metadata } from "next";
import AllProductsClient from "@/components/AllProductsClient";
import { PRODUCTS } from "@/data/products";
import { CATEGORIES } from "@/data/categories";
import { SITE_CONFIG } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Tất Cả Sản Phẩm Thời Trang Minimalist Cao Cấp | Aura Fashion",
  description:
    "Bộ sưu tập thời trang tối giản Aura Fashion: áo thun cotton compact, sơ mi Oxford Hàn Quốc, quần jean ống rộng, áo khoác bomber 2 lớp. Giảm đến 30%.",
  keywords: [
    "thời trang minimalist",
    "quần áo nam nữ",
    "áo thun cotton compact",
    "quần jean ống rộng",
    "áo sơ mi oxford",
    "áo khoác bomber",
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/san-pham`,
  },
  openGraph: {
    title: "Tất Cả Sản Phẩm Thời Trang Minimalist Cao Cấp | Aura Fashion",
    description:
      "Khám phá 16 sản phẩm thời trang thiết kế tối giản bền đẹp tại Aura Fashion. Đổi trả 15 ngày, miễn phí vận chuyển toàn quốc.",
    url: `${SITE_CONFIG.url}/san-pham`,
    images: [
      {
        url: PRODUCTS[0].images[0].url,
        alt: "Cửa hàng thời trang Aura Fashion",
      },
    ],
  },
};

export default function AllProductsPage() {
  return <AllProductsClient products={PRODUCTS} categories={CATEGORIES} />;
}
