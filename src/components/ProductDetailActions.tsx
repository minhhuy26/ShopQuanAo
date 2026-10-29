"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, ShoppingBag, Zap, Plus, Minus } from "lucide-react";
import { Product } from "@/types";
import { useCart } from "@/context/CartContext";

interface ProductDetailActionsProps {
  product: Product;
}

export default function ProductDetailActions({ product }: ProductDetailActionsProps) {
  const { addToCart, setIsCheckoutOpen } = useCart();
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0] || "M");
  const [selectedColor, setSelectedColor] = useState<string>(product.colors[0]?.name || "Mặc định");
  const [quantity, setQuantity] = useState<number>(1);
  const [isAdded, setIsAdded] = useState<boolean>(false);

  const handleAddToCart = () => {
    addToCart(product, selectedSize, selectedColor, quantity);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 2000);
  };

  const handleBuyNow = () => {
    addToCart(product, selectedSize, selectedColor, quantity);
    setIsCheckoutOpen(true);
  };

  return (
    <div className="space-y-6 pt-2">
      {/* Colors Selector */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-bold text-brand-900 uppercase tracking-wider">
            Màu Sắc: <strong className="text-accent-700 font-normal">{selectedColor}</strong>
          </span>
        </div>
        <div className="flex items-center flex-wrap gap-2.5">
          {product.colors.map((color, idx) => {
            const isSelected = selectedColor === color.name;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setSelectedColor(color.name)}
                className={`flex items-center gap-2 p-1.5 px-3 rounded-lg border text-xs font-medium cursor-pointer transition-all ${
                  isSelected
                    ? "border-brand-900 bg-brand-900 text-white shadow-sm ring-2 ring-brand-900/20"
                    : "border-brand-300 bg-white text-brand-800 hover:border-brand-500"
                }`}
              >
                <span
                  className="w-3.5 h-3.5 rounded-full border border-brand-300 shrink-0"
                  style={{ backgroundColor: color.hex }}
                />
                <span>{color.name}</span>
                {isSelected && <Check className="w-3.5 h-3.5 ml-0.5" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* Sizes Selector */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-bold text-brand-900 uppercase tracking-wider">
            Kích Thước: <strong className="text-accent-700 font-normal">Size {selectedSize}</strong>
          </span>
          <Link
            href="/blog/bi-quyet-chon-size-ao-so-mi-chuan"
            className="text-xs text-accent-700 font-semibold hover:underline cursor-pointer"
          >
            Bảng hướng dẫn chọn size →
          </Link>
        </div>
        <div className="grid grid-cols-5 gap-2">
          {product.sizes.map((size) => {
            const isSelected = selectedSize === size;
            return (
              <button
                key={size}
                type="button"
                onClick={() => setSelectedSize(size)}
                className={`py-2.5 text-xs font-bold rounded border transition-all cursor-pointer ${
                  isSelected
                    ? "bg-brand-900 text-white border-brand-900 shadow-sm"
                    : "bg-white text-brand-900 border-brand-300 hover:border-brand-900 hover:bg-brand-50"
                }`}
              >
                {size}
              </button>
            );
          })}
        </div>
      </div>

      {/* Quantity Selector */}
      <div className="flex items-center gap-4">
        <span className="text-xs font-bold text-brand-900 uppercase tracking-wider">
          Số Lượng:
        </span>
        <div className="flex items-center border border-brand-300 rounded-lg overflow-hidden bg-white">
          <button
            type="button"
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            className="px-3 py-1.5 hover:bg-brand-100 text-brand-700 transition-colors cursor-pointer"
          >
            <Minus className="w-3.5 h-3.5" />
          </button>
          <span className="px-4 py-1.5 text-xs font-bold text-brand-900 min-w-[2.5rem] text-center">
            {quantity}
          </span>
          <button
            type="button"
            onClick={() => setQuantity((q) => q + 1)}
            className="px-3 py-1.5 hover:bg-brand-100 text-brand-700 transition-colors cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5" />
          </button>
        </div>
        <span className="text-xs text-brand-400">
          (Sản phẩm có sẵn trong kho)
        </span>
      </div>

      {/* CTA Buttons */}
      <div className="space-y-3 pt-2">
        <button
          type="button"
          onClick={handleAddToCart}
          className={`w-full py-4 font-bold text-sm uppercase tracking-wider rounded-lg shadow-md transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 ${
            isAdded
              ? "bg-emerald-600 text-white hover:bg-emerald-700"
              : "bg-brand-900 text-white hover:bg-accent-600"
          }`}
        >
          {isAdded ? (
            <>
              <Check className="w-5 h-5 animate-bounce" />
              <span>✓ Đã Thêm Vào Giỏ Hàng!</span>
            </>
          ) : (
            <>
              <ShoppingBag className="w-5 h-5" />
              <span>THÊM VÀO GIỎ HÀNG</span>
            </>
          )}
        </button>

        <button
          type="button"
          onClick={handleBuyNow}
          className="w-full py-3.5 bg-accent-600 hover:bg-accent-700 text-white font-bold text-sm uppercase tracking-wider rounded-lg transition-colors duration-200 cursor-pointer flex items-center justify-center gap-2"
        >
          <Zap className="w-4 h-4 fill-current" />
          <span>MUA NGAY - GIAO HÀNG TẬN NƠI</span>
        </button>
      </div>
    </div>
  );
}
