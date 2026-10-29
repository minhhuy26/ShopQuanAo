import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { BreadcrumbItem } from "@/types";
import { generateBreadcrumbSchema } from "@/lib/seo";
import JsonLd from "./JsonLd";

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const allItems: BreadcrumbItem[] = [
    { label: "Trang Chủ", href: "/" },
    ...items,
  ];

  const schema = generateBreadcrumbSchema(allItems);

  return (
    <>
      <JsonLd data={schema} />
      <nav aria-label="Breadcrumb" className="py-3 text-xs text-brand-500">
        <ol className="flex items-center flex-wrap gap-1.5">
          {allItems.map((item, index) => {
            const isLast = index === allItems.length - 1;

            return (
              <li key={index} className="flex items-center gap-1.5">
                {index === 0 ? (
                  <Link
                    href={item.href || "/"}
                    className="flex items-center gap-1 text-brand-600 hover:text-accent-600 transition-colors cursor-pointer"
                  >
                    <Home className="w-3.5 h-3.5" />
                    <span className="sr-only">Trang Chủ</span>
                  </Link>
                ) : isLast || !item.href ? (
                  <span className="font-semibold text-brand-900 truncate max-w-[200px] sm:max-w-xs md:max-w-md" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="text-brand-600 hover:text-accent-600 transition-colors cursor-pointer"
                  >
                    {item.label}
                  </Link>
                )}

                {!isLast && (
                  <ChevronRight className="w-3 h-3 text-brand-400 shrink-0" />
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
