"use client";

import { useEffect, useState } from "react";
import { ListCollapse, ChevronRight } from "lucide-react";
import { TocItem } from "@/types";

interface TableOfContentsProps {
  items: TocItem[];
}

export default function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "0px 0px -70% 0px",
        threshold: 0.1,
      }
    );

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90; // Header height offset
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  if (!items || items.length === 0) return null;

  return (
    <div className="bg-brand-50/80 border border-brand-200 rounded-xl p-4 sm:p-5 my-8">
      <div className="flex items-center justify-between">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 text-brand-900 font-bold text-sm sm:text-base hover:text-accent-600 transition-colors cursor-pointer w-full text-left"
          aria-expanded={isOpen}
        >
          <ListCollapse className="w-5 h-5 text-accent-600" />
          <span>Mục Lục Bài Viết (Table of Contents)</span>
          <ChevronRight
            className={`w-4 h-4 ml-auto text-brand-400 transition-transform duration-200 ${
              isOpen ? "rotate-90" : ""
            }`}
          />
        </button>
      </div>

      {isOpen && (
        <nav aria-label="Mục lục bài viết" className="mt-4 pt-4 border-t border-brand-200/60">
          <ul className="space-y-2 text-xs sm:text-sm">
            {items.map((item) => {
              const isActive = activeId === item.id;

              return (
                <li
                  key={item.id}
                  className={`${
                    item.level === 3 ? "pl-4 text-xs" : "font-medium"
                  }`}
                >
                  <button
                    onClick={() => scrollToHeading(item.id)}
                    className={`text-left w-full hover:underline transition-colors py-0.5 cursor-pointer flex items-start gap-1.5 ${
                      isActive
                        ? "text-accent-700 font-bold"
                        : "text-brand-700 hover:text-brand-950"
                    }`}
                  >
                    <span className="text-brand-400 shrink-0">•</span>
                    <span>{item.title}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </div>
  );
}
