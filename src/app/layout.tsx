import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Analytics from "@/components/Analytics";
import JsonLd from "@/components/JsonLd";
import CartDrawer from "@/components/CartDrawer";
import CheckoutModal from "@/components/CheckoutModal";
import { CartProvider } from "@/context/CartContext";
import {
  SITE_CONFIG,
  generateOrganizationSchema,
  generateWebSiteSchema,
} from "@/lib/seo";

const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

const GSC_VERIFICATION_CODE =
  process.env.NEXT_PUBLIC_GSC_VERIFICATION || "YOUR_GOOGLE_SEARCH_CONSOLE_CODE";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: SITE_CONFIG.fullName,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    "thời trang nam nữ",
    "áo thun cotton",
    "quần jean ống rộng",
    "áo sơ mi oxford",
    "cẩm nang phối đồ",
    "xu hướng thời trang",
    "phong cách minimalist",
  ],
  authors: [{ name: SITE_CONFIG.nap.brandName, url: SITE_CONFIG.url }],
  creator: SITE_CONFIG.nap.brandName,
  publisher: SITE_CONFIG.nap.brandName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title: SITE_CONFIG.fullName,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: "Aura Fashion - Minimalist Clothing & Fashion Blog",
      },
    ],
    locale: SITE_CONFIG.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.fullName,
    description: SITE_CONFIG.description,
    images: [SITE_CONFIG.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: GSC_VERIFICATION_CODE,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = generateOrganizationSchema();
  const webSiteSchema = generateWebSiteSchema();

  return (
    <html lang="vi" className={`scroll-smooth ${fontSans.variable}`}>
      <head>
        <meta
          name="google-site-verification"
          content={GSC_VERIFICATION_CODE}
        />
        <meta name="geo.region" content="VN-SG" />
        <meta name="geo.placename" content="Hồ Chí Minh" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="min-h-screen flex flex-col justify-between antialiased selection:bg-brand-900 selection:text-white font-sans">
        <CartProvider>
          {/* Tích hợp Google Analytics 4 (GA4) */}
          <Analytics />

          {/* Global Schema JSON-LD (Organization & WebSite) */}
          <JsonLd data={organizationSchema} />
          <JsonLd data={webSiteSchema} />

          {/* Header navigation */}
          <Header />

          {/* Main Content Area */}
          <main className="flex-grow">{children}</main>

          {/* Slide-over Cart Drawer */}
          <CartDrawer />

          {/* 1-Click Checkout Modal */}
          <CheckoutModal />

          {/* Footer with NAP & Social Entities */}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
