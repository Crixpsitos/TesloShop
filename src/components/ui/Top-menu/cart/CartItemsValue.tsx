"use client";

import { useCartStore } from "@/store";

export const CartItemsValue = () => {
  const totalItemsInCart = useCartStore((state) => state.getTotalItems());

  return (
    <span className="absolute text-xs rounded-full px-1 font-bold -top-2 -right-2 bg-blue-700 text-white">
      {totalItemsInCart}
    </span>
  );
};
