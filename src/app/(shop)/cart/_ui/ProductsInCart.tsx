import { QuantitySelector } from "@/components";
import { useCartStore } from "@/store";
import Image from "next/image";
import React from "react";
import { FiX as XIcon } from "react-icons/fi";

export const ProductsInCart = () => {
  const productsInCart = useCartStore((state) => state.cart);
  return (
    <>
      {productsInCart.map((product) => (
        <div
          key={product.slug}
          className="flex flex-col sm:flex-row border-b pb-5 sm:pb-6"
        >
          <div className="max-w-[120px] mx-auto sm:mx-0 sm:w-1/4 mb-3 sm:mb-0">
            <Image
              src={`/products/${product.image}`}
              alt={product.title}
              width={120}
              height={120}
              quality={85}
              className="rounded-md object-cover w-full h-auto"
            />
          </div>

          <div className="sm:w-3/4 sm:pl-6 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start">
                <h3 className="font-medium text-base sm:text-lg">
                  {product.title}
                </h3>
                <button
                  className="text-gray-400 hover:text-gray-600 p-1"
                  aria-label="Eliminar producto"
                >
                  <XIcon size={18} />
                </button>
              </div>

              <p className="text-sm text-gray-500 mt-1">
                Talla: {product.size}
              </p>
            </div>

            <div className="flex justify-between items-end mt-3 sm:mt-4">
              <div>
                <p className="font-medium mb-2">
                  {product.price.toLocaleString("es-ES", {
                    currency: "EUR",
                    style: "currency",
                  })}
                </p>
                <QuantitySelector
                  quantity={3}
                  onQuantityChange={() => {
                    console.log("onQuantityChange");
                  }}
                />
              </div>

              <button className="text-sm text-gray-500 hover:text-gray-700 hover:underline">
                Eliminar
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
