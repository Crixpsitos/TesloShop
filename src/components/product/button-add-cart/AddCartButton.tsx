"use client";

import { useUIStore } from "@/store";
import clsx from "clsx";

interface Props {
  disabled: boolean;
  addToCart: () => void;
}

export const AddCartButton = ({ disabled, addToCart }: Props) => {
  const disabledButton = useUIStore((state) => state.disabledButton);

  return (
    <button
      onClick={addToCart}
      disabled={disabled || disabledButton}
      className={clsx(
        "btn-primary py-2 px-4 rounded-md w-full md:max-w-xs my-4",
        {
          "opacity-50": disabled || disabledButton,
          "cursor-not-allowed": disabled || disabledButton,
        }
      )}
    >
      Agregar al carrito
    </button>
  );
};
