export interface Product {
  id: string;
  name: string;
  slug: string;
  sku: string;
  price: number;
  originalPrice: number;
  category: string;
  categorySlug: string;
  rating: number;
  reviewsCount: number;
  inStock: boolean;
  images: {
    url: string;
    alt: string;
  }[];
  shortDescription: string;
  fullDescription: string[];
  features: string[];
  materials: string;
  sizes: string[];
  colors: {
    name: string;
    hex: string;
  }[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  imageAlt: string;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export interface TocItem {
  id: string;
  title: string;
  level: 2 | 3;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  summary: string;
  coverImage: string;
  coverImageAlt: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  category: string;
  categorySlug: string;
  tags: string[];
  readTime: string;
  publishedAt: string;
  updatedAt: string;
  tableOfContents: TocItem[];
  contentHtml: string;
  relatedPostSlugs: string[];
  relatedProductSlugs: string[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}
