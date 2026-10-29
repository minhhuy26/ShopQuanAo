import { Product, BlogPost, BreadcrumbItem } from "@/types";

export const SITE_CONFIG = {
  name: "Aura Fashion",
  fullName: "Aura Fashion - Thời Trang Tối Giản & Cẩm Nang Phối Đồ Chuẩn Gu",
  description:
    "Thương hiệu thời trang Minimalist phong cách hiện đại kết hợp blog cẩm nang phối đồ, mẹo chọn size, xu hướng Y2K và kiến thức bảo quản trang phục chuẩn SEO.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://aurafashion.vn",
  ogImage: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80",
  locale: "vi_VN",
  nap: {
    brandName: "Aura Fashion Studio",
    legalName: "Công Ty Cổ Phần Thời Trang Aura Việt Nam",
    address: "Số 123 Đường Nguyễn Trãi, Phường Bến Thành, Quận 1",
    city: "Hồ Chí Minh",
    postalCode: "700000",
    country: "VN",
    phone: "+84 987 654 321",
    phoneFormatted: "0987.654.321",
    email: "contact@aurafashion.vn",
    openingHours: "Mo-Su 08:30-22:00",
  },
  social: {
    facebook: "https://facebook.com/aurafashion.vietnam",
    instagram: "https://instagram.com/aurafashion.official",
    tiktok: "https://tiktok.com/@aurafashion.studio",
    pinterest: "https://pinterest.com/aurafashion_vn",
    youtube: "https://youtube.com/@aurafashion_vn",
  },
};

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_CONFIG.url}/#organization`,
    name: SITE_CONFIG.nap.brandName,
    legalName: SITE_CONFIG.nap.legalName,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/logo.png`,
    description: SITE_CONFIG.description,
    telephone: SITE_CONFIG.nap.phone,
    email: SITE_CONFIG.nap.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONFIG.nap.address,
      addressLocality: SITE_CONFIG.nap.city,
      postalCode: SITE_CONFIG.nap.postalCode,
      addressCountry: SITE_CONFIG.nap.country,
    },
    sameAs: [
      SITE_CONFIG.social.facebook,
      SITE_CONFIG.social.instagram,
      SITE_CONFIG.social.tiktok,
      SITE_CONFIG.social.pinterest,
      SITE_CONFIG.social.youtube,
    ],
  };
}

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_CONFIG.url}/#website`,
    url: SITE_CONFIG.url,
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    publisher: {
      "@id": `${SITE_CONFIG.url}/#organization`,
    },
    inLanguage: "vi-VN",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_CONFIG.url}/blog?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function generateProductSchema(product: Product) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${SITE_CONFIG.url}/san-pham/${product.slug}#product`,
    name: product.name,
    image: product.images.map((img) => img.url),
    description: product.shortDescription,
    sku: product.sku,
    mpn: product.sku,
    brand: {
      "@type": "Brand",
      name: SITE_CONFIG.name,
    },
    offers: {
      "@type": "Offer",
      url: `${SITE_CONFIG.url}/san-pham/${product.slug}`,
      priceCurrency: "VND",
      price: product.price,
      priceValidUntil: "2027-12-31",
      itemCondition: "https://schema.org/NewCondition",
      availability: product.inStock
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
      seller: {
        "@type": "Organization",
        name: SITE_CONFIG.nap.brandName,
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: product.rating,
      reviewCount: product.reviewsCount,
      bestRating: "5",
      worstRating: "1",
    },
  };
}

export function generateArticleSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${SITE_CONFIG.url}/blog/${post.slug}#article`,
    headline: post.title,
    description: post.summary,
    image: [post.coverImage],
    datePublished: `${post.publishedAt}T08:00:00+07:00`,
    dateModified: `${post.updatedAt}T15:00:00+07:00`,
    author: {
      "@type": "Person",
      name: post.author.name,
      jobTitle: post.author.role,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.nap.brandName,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_CONFIG.url}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_CONFIG.url}/blog/${post.slug}`,
    },
    keywords: post.seo.keywords.join(", "),
    articleSection: post.category,
    inLanguage: "vi-VN",
  };
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: item.href ? `${SITE_CONFIG.url}${item.href}` : undefined,
    })),
  };
}
