"use client";

import { useState } from "react";
import { X, CheckCircle2, ShieldCheck, Truck, CreditCard, Banknote } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function CheckoutModal() {
  const {
    items,
    isCheckoutOpen,
    setIsCheckoutOpen,
    totalPrice,
    clearCart,
  } = useCart();

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [note, setNote] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<"cod" | "banking">("cod");
  const [isSuccess, setIsSuccess] = useState(false);
  const [orderCode, setOrderCode] = useState("");

  if (!isCheckoutOpen) return null;

  const freeShippingThreshold = 399000;
  const shippingFee = totalPrice >= freeShippingThreshold || items.length === 0 ? 0 : 30000;
  const finalTotal = totalPrice + shippingFee;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomCode = `AF-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderCode(randomCode);
    setIsSuccess(true);
    clearCart();
  };

  const handleClose = () => {
    setIsCheckoutOpen(false);
    setIsSuccess(false);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-brand-950/70 backdrop-blur-sm transition-opacity"
        onClick={handleClose}
      />

      <div className="min-h-full flex items-center justify-center p-4">
        <div className="relative bg-white w-full max-w-lg rounded-2xl shadow-2xl border border-brand-200 overflow-hidden z-10">
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-brand-200 flex items-center justify-between bg-brand-50/60">
            <h3 className="font-bold text-base sm:text-lg text-brand-900">
              {isSuccess ? "Thông Báo Đặt Hàng" : "Đặt Hàng Nhanh (Giao Tận Nơi)"}
            </h3>
            <button
              onClick={handleClose}
              className="p-1 text-brand-400 hover:text-brand-900 rounded-md hover:bg-brand-200/60 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Success Screen */}
          {isSuccess ? (
            <div className="p-6 sm:p-8 text-center space-y-5">
              <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest block mb-1">
                  Đặt Hàng Thành Công
                </span>
                <h4 className="text-xl font-black text-brand-950">
                  Cảm Ơn Bạn Đã Mua Sắm Tại Aura Fashion!
                </h4>
                <p className="text-xs text-brand-600 mt-2">
                  Mã đơn hàng của bạn là: <strong className="text-brand-900 font-mono text-sm">{orderCode}</strong>
                </p>
              </div>

              <div className="p-4 bg-brand-50 rounded-xl text-left text-xs space-y-2 border border-brand-200">
                <div className="flex justify-between">
                  <span className="text-brand-500">Khách hàng:</span>
                  <span className="font-bold text-brand-900">{fullName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-brand-500">Số điện thoại:</span>
                  <span className="font-bold text-brand-900">{phone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-brand-500">Địa chỉ giao:</span>
                  <span className="font-bold text-brand-900">{address}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-brand-500">Hình thức thanh toán:</span>
                  <span className="font-bold text-brand-900">
                    {paymentMethod === "cod" ? "Thanh toán COD khi nhận" : "Chuyển khoản QR"}
                  </span>
                </div>
                <div className="flex justify-between pt-2 border-t border-brand-200 font-black text-brand-950">
                  <span>Tổng giá trị đơn:</span>
                  <span className="text-accent-700 text-sm">{finalTotal.toLocaleString("vi-VN")}₫</span>
                </div>
              </div>

              <p className="text-xs text-brand-500">
                Nhân viên chăm sóc khách hàng của Aura sẽ liên hệ xác nhận đơn hàng qua số điện thoại của bạn trong 15 phút tới.
              </p>

              <button
                onClick={handleClose}
                className="w-full py-3.5 bg-brand-900 hover:bg-brand-950 text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
              >
                Tiếp Tục Mua Sắm
              </button>
            </div>
          ) : (
            /* Checkout Form */
            <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4">
              {/* Order Summary Miniature */}
              <div className="p-3 bg-brand-50 rounded-lg text-xs space-y-1.5 border border-brand-200">
                <div className="flex justify-between text-brand-600">
                  <span>Tổng số lượng sản phẩm:</span>
                  <span className="font-bold text-brand-900">{items.reduce((s, i) => s + i.quantity, 0)} cái</span>
                </div>
                <div className="flex justify-between text-brand-600">
                  <span>Tạm tính tiền hàng:</span>
                  <span className="font-bold text-brand-900">{totalPrice.toLocaleString("vi-VN")}₫</span>
                </div>
                <div className="flex justify-between text-brand-600">
                  <span>Phí ship:</span>
                  <span className="font-bold text-brand-900">
                    {shippingFee === 0 ? "Miễn phí" : `${shippingFee.toLocaleString("vi-VN")}₫`}
                  </span>
                </div>
                <div className="flex justify-between pt-1.5 border-t border-brand-200 text-sm font-black text-brand-950">
                  <span>Tổng thanh toán:</span>
                  <span className="text-accent-700">{finalTotal.toLocaleString("vi-VN")}₫</span>
                </div>
              </div>

              {/* Customer Info Input */}
              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-bold text-brand-700 uppercase tracking-wider mb-1">
                    Họ và tên người nhận *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Nguyễn Văn A"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-brand-50/60 border border-brand-300 rounded-lg px-3 py-2 text-xs text-brand-900 focus:outline-none focus:border-brand-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-brand-700 uppercase tracking-wider mb-1">
                    Số điện thoại nhận hàng *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="0912 345 678"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-brand-50/60 border border-brand-300 rounded-lg px-3 py-2 text-xs text-brand-900 focus:outline-none focus:border-brand-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-brand-700 uppercase tracking-wider mb-1">
                    Địa chỉ giao hàng chi tiết *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Số nhà, tên đường, phường/xã, quận/huyện, tỉnh/TP"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full bg-brand-50/60 border border-brand-300 rounded-lg px-3 py-2 text-xs text-brand-900 focus:outline-none focus:border-brand-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-brand-700 uppercase tracking-wider mb-1">
                    Ghi chú đơn hàng (Tùy chọn)
                  </label>
                  <input
                    type="text"
                    placeholder="Giao giờ hành chính, gọi trước khi đến..."
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    className="w-full bg-brand-50/60 border border-brand-300 rounded-lg px-3 py-2 text-xs text-brand-900 focus:outline-none focus:border-brand-900"
                  />
                </div>
              </div>

              {/* Payment Methods */}
              <div>
                <label className="block text-xs font-bold text-brand-700 uppercase tracking-wider mb-1.5">
                  Phương thức thanh toán
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <div
                    onClick={() => setPaymentMethod("cod")}
                    className={`p-3 rounded-lg border text-xs font-medium cursor-pointer transition-all flex items-center gap-2 ${
                      paymentMethod === "cod"
                        ? "border-brand-900 bg-brand-100/60 text-brand-950 font-bold"
                        : "border-brand-200 bg-white text-brand-700 hover:border-brand-400"
                    }`}
                  >
                    <Banknote className="w-4 h-4 text-emerald-600" />
                    <span>COD (Khi nhận)</span>
                  </div>

                  <div
                    onClick={() => setPaymentMethod("banking")}
                    className={`p-3 rounded-lg border text-xs font-medium cursor-pointer transition-all flex items-center gap-2 ${
                      paymentMethod === "banking"
                        ? "border-brand-900 bg-brand-100/60 text-brand-950 font-bold"
                        : "border-brand-200 bg-white text-brand-700 hover:border-brand-400"
                    }`}
                  >
                    <CreditCard className="w-4 h-4 text-blue-600" />
                    <span>Chuyển khoản QR</span>
                  </div>
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-3.5 bg-accent-600 hover:bg-accent-700 text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow transition-colors cursor-pointer mt-2"
              >
                Xác Nhận Đặt Hàng ({finalTotal.toLocaleString("vi-VN")}₫)
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
