"use client";

import dynamic from "next/dynamic";
import { SkeletonProductsInCart } from "./SkeletonProductsInCart";

const ProductsInCart = dynamic(
  () => import("./ProductsInCart").then((mod) => mod.ProductsInCart),
  {
    ssr: false,
    loading: () => <SkeletonProductsInCart />,
  }
);

export const ContainerToCart = () => {
  return (
    <div className="space-y-5 sm:space-y-6">
      <ProductsInCart />
    </div>
  );
};
