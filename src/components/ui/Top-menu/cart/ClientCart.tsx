"use client";
import dynamic from "next/dynamic";
import Link from "next/link";
import React from "react";
import { IoCartOutline } from "react-icons/io5";

const CartItemsValue = dynamic(
  () => import("./CartItemsValue").then((mod) => mod.CartItemsValue),
  {
    ssr: false,
    loading: () => (
      <span className="absolute text-xs rounded-full px-1 font-bold -top-2 -right-2 bg-blue-700 text-white">
        0
      </span>
    ),
  }
);

export const ClientCart = () => {
  return (
    <Link href="/cart">
      <div className="relative">
        <CartItemsValue />
        <IoCartOutline className="size-5" />
      </div>
    </Link>
  );
};
