"use client";

import type { Product } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Props {
  product: Product;
}

export const ProductGridItem = ({ product }: Props) => {
  const [displayImage, setDisplayImage] = useState(product.images[0]);
  return (
    <div className="rounded-md fade-in flex flex-col">
      <div className="relative overflow-hidden rounded-md aspect-square">
        <Link
          href={`/product/${product.slug}`}
          className="absolute inset-0 "
        >
          <Image
            src={`/products/${displayImage}`}
            alt={product.title}
            className="object-cover"
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            onMouseEnter={() => setDisplayImage(product.images[1])}
            onMouseLeave={() => setDisplayImage(product.images[0])}
          />
        </Link>
      </div>

      <div className="p-4 flex flex-col">
        <Link
          href={`/product/${product.slug}`}
          className="text-sm font-semibold hover:underline line-clamp-2"
        >
          {product.title}
        </Link>

        <span className="font-bold text-lg mt-2">
          {product.price.toLocaleString("es-ES", {
            style: "currency",
            currency: "EUR",
          })}
        </span>
      </div>
    </div>
  );
};
