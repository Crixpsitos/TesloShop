"use client";

import { QuantitySelector, SizeSelector } from "@/components";
import { AddCartButton } from "@/components/product/button-add-cart/AddCartButton";
import type { CartProduct, Product } from "@/interfaces";
import { Size } from "../../../../../generated/prisma/index";
import { useState } from "react";
import { toast } from "react-toastify";
import { useCartStore } from "@/store";

interface Props {
  product: Product;
}

export const AddToCart = ({ product }: Props) => {
  const addProductToCart = useCartStore((state) => state.addProductToCart);

  const [size, setSize] = useState<Size | undefined>();
  const [quantity, setQuantity] = useState<number>(1);

  const addToCart = () => {
    if (size === undefined || quantity === 0) {
      toast.error("Selecciona un tamaño y cantidad");
      return;
    }

    const cartProduct: CartProduct = {
      id: product.id,
      slug: product.slug,
      title: product.title,
      price: product.price,
      quantity: quantity,
      size: size,
      image: product.images[0],
    };

    addProductToCart(cartProduct);
    setSize(undefined);
    setQuantity(1);
    toast.success("Producto agregado al carrito");
  };

  return (
    <>
      <SizeSelector
        onSizeChange={setSize}
        selectedSize={size}
        avaliableSizes={product.sizes}
      />

      {/* Selector de cantidad */}
      <QuantitySelector onQuantityChange={setQuantity} quantity={quantity} />

      {/* Button */}
      <AddCartButton addToCart={addToCart} disabled={product.inStock === 0} />
    </>
  );
};
