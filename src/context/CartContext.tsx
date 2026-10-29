"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Product } from "@/types";

export interface CartItem {
  product: Product;
  selectedSize: string;
  selectedColor: string;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (
    product: Product,
    selectedSize: string,
    selectedColor: string,
    quantity?: number
  ) => void;
  removeFromCart: (
    productId: string,
    selectedSize: string,
    selectedColor: string
  ) => void;
  updateQuantity: (
    productId: string,
    selectedSize: string,
    selectedColor: string,
    delta: number
  ) => void;
  clearCart: () => void;
  totalCount: number;
  totalPrice: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  isCheckoutOpen: boolean;
  setIsCheckoutOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem("aura_cart");
      if (saved) {
        setItems(JSON.parse(saved));
      }
    } catch (e) {
      console.error("Failed to parse cart from localStorage", e);
    }
    setIsInitialized(true);
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    if (isInitialized) {
      try {
        localStorage.setItem("aura_cart", JSON.stringify(items));
      } catch (e) {
        console.error("Failed to save cart to localStorage", e);
      }
    }
  }, [items, isInitialized]);

  const addToCart = (
    product: Product,
    selectedSize: string,
    selectedColor: string,
    quantity: number = 1
  ) => {
    setItems((prev) => {
      const existingIndex = prev.findIndex(
        (item) =>
          item.product.id === product.id &&
          item.selectedSize === selectedSize &&
          item.selectedColor === selectedColor
      );

      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex] = {
          ...next[existingIndex],
          quantity: next[existingIndex].quantity + quantity,
        };
        return next;
      }

      return [
        ...prev,
        {
          product,
          selectedSize,
          selectedColor,
          quantity,
        },
      ];
    });

    // Auto open drawer
    setIsCartOpen(true);
  };

  const removeFromCart = (
    productId: string,
    selectedSize: string,
    selectedColor: string
  ) => {
    setItems((prev) =>
      prev.filter(
        (item) =>
          !(
            item.product.id === productId &&
            item.selectedSize === selectedSize &&
            item.selectedColor === selectedColor
          )
      )
    );
  };

  const updateQuantity = (
    productId: string,
    selectedSize: string,
    selectedColor: string,
    delta: number
  ) => {
    setItems((prev) => {
      return prev
        .map((item) => {
          if (
            item.product.id === productId &&
            item.selectedSize === selectedSize &&
            item.selectedColor === selectedColor
          ) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[];
    });
  };

  const clearCart = () => {
    setItems([]);
  };

  const totalCount = items.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = items.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalCount,
        totalPrice,
        isCartOpen,
        setIsCartOpen,
        isCheckoutOpen,
        setIsCheckoutOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
