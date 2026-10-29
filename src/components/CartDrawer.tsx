"use client";

import Image from "next/image";
import Link from "next/link";
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, ShieldCheck } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function CartDrawer() {
  const {
    items,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    totalCount,
    totalPrice,
    setIsCheckoutOpen,
  } = useCart();

  if (!isCartOpen) return null;

  const freeShippingThreshold = 399000;
  const isFreeShipping = totalPrice >= freeShippingThreshold;
  const missingForFreeShip = freeShippingThreshold - totalPrice;
  const shippingFee = items.length === 0 ? 0 : isFreeShipping ? 0 : 30000;
  const finalTotal = totalPrice + shippingFee;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-brand-950/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between">
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-brand-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-accent-600" />
              <h2 className="text-base sm:text-lg font-bold text-brand-900">
                Giỏ Hàng Của Bạn ({totalCount})
              </h2>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1.5 text-brand-400 hover:text-brand-900 rounded-md hover:bg-brand-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Banner */}
          <div className="bg-brand-50 px-4 py-2.5 border-b border-brand-100 text-xs">
            {isFreeShipping ? (
              <span className="text-emerald-700 font-bold flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                Chúc mừng! Đơn hàng của bạn được MIỄN PHÍ VẬN CHUYỂN
              </span>
            ) : (
              <span className="text-brand-600">
                Mua thêm <strong className="text-accent-700">{missingForFreeShip.toLocaleString("vi-VN")}₫</strong> để được Freeship toàn quốc!
              </span>
            )}
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
            {items.length === 0 ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-brand-100 flex items-center justify-center text-brand-400">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-bold text-brand-900 text-sm">
                    Giỏ hàng của bạn đang trống
                  </h3>
                  <p className="text-xs text-brand-500 mt-1">
                    Hãy lựa chọn các mẫu áo thun, sơ mi hoặc quần jean yêu thích nhé!
                  </p>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="px-5 py-2.5 bg-brand-900 text-white font-bold text-xs uppercase tracking-wider rounded hover:bg-accent-600 transition-colors cursor-pointer"
                >
                  Khám Phá Sản Phẩm Ngay
                </button>
              </div>
            ) : (
              items.map((item, idx) => (
                <div
                  key={`${item.product.id}-${item.selectedSize}-${item.selectedColor}-${idx}`}
                  className="flex gap-3 pb-4 border-b border-brand-100 last:border-0"
                >
                  {/* Thumbnail */}
                  <div className="relative w-20 h-24 rounded-lg overflow-hidden bg-brand-100 shrink-0 border border-brand-200">
                    <Image
                      src={item.product.images[0].url}
                      alt={item.product.images[0].alt}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <Link
                          href={`/san-pham/${item.product.slug}`}
                          onClick={() => setIsCartOpen(false)}
                          className="text-xs font-bold text-brand-900 hover:text-accent-600 transition-colors line-clamp-2"
                        >
                          {item.product.name}
                        </Link>
                        <button
                          onClick={() =>
                            removeFromCart(
                              item.product.id,
                              item.selectedSize,
                              item.selectedColor
                            )
                          }
                          className="text-brand-400 hover:text-red-600 transition-colors p-1 cursor-pointer"
                          aria-label="Xóa sản phẩm"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="flex items-center gap-2 mt-1 text-[11px] text-brand-500">
                        <span className="bg-brand-100 px-1.5 py-0.5 rounded font-bold text-brand-700">
                          Size {item.selectedSize}
                        </span>
                        <span>•</span>
                        <span>{item.selectedColor}</span>
                      </div>
                    </div>

                    {/* Price & Quantity */}
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-sm font-black text-brand-900">
                        {(item.product.price * item.quantity).toLocaleString("vi-VN")}₫
                      </span>

                      <div className="flex items-center border border-brand-200 rounded">
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.product.id,
                              item.selectedSize,
                              item.selectedColor,
                              -1
                            )
                          }
                          className="p-1 hover:bg-brand-100 text-brand-600 transition-colors cursor-pointer"
                          aria-label="Giảm số lượng"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-2.5 text-xs font-bold text-brand-900">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.product.id,
                              item.selectedSize,
                              item.selectedColor,
                              1
                            )
                          }
                          className="p-1 hover:bg-brand-100 text-brand-600 transition-colors cursor-pointer"
                          aria-label="Tăng số lượng"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Checkout Summary */}
          {items.length > 0 && (
            <div className="p-4 sm:p-5 border-t border-brand-200 bg-brand-50/50 space-y-3">
              <div className="space-y-1.5 text-xs text-brand-600">
                <div className="flex justify-between">
                  <span>Tạm tính hàng:</span>
                  <span className="font-bold text-brand-900">
                    {totalPrice.toLocaleString("vi-VN")}₫
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Phí giao hàng:</span>
                  <span className="font-bold text-brand-900">
                    {shippingFee === 0 ? (
                      <span className="text-emerald-700 font-bold">MIỄN PHÍ</span>
                    ) : (
                      `${shippingFee.toLocaleString("vi-VN")}₫`
                    )}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-black text-brand-950 pt-2 border-t border-brand-200">
                  <span>Tổng thanh toán:</span>
                  <span className="text-base text-accent-700">
                    {finalTotal.toLocaleString("vi-VN")}₫
                  </span>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <button
                  onClick={() => {
                    setIsCartOpen(false);
                    setIsCheckoutOpen(true);
                  }}
                  className="w-full py-3.5 bg-accent-600 hover:bg-accent-700 text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Tiến Hành Đặt Hàng Ngay</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => setIsCartOpen(false)}
                  className="w-full py-2.5 text-xs font-semibold text-brand-600 hover:text-brand-900 transition-colors text-center cursor-pointer"
                >
                  ← Tiếp tục mua sắm
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
