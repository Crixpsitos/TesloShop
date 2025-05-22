"use client";

import { titleFont } from "@/config/fonts";
import { getStockBySlug } from "../../../actions/product/get-stock-by-slug";
import { useCallback, useEffect, useState } from "react";
import { useUIStore } from "@/store";
interface Props {
  slug: string;
}

export const StockLabel = ({ slug }: Props) => {
  const [loading, setLoading] = useState(true);
  const [stock, setStock] = useState(0);

  const setDisabledButton = useUIStore((state) => state.setDisabledButton);

  const getStock = useCallback(async () => {
    const stock = await getStockBySlug(slug);
    setStock(stock);
    setLoading(false);
    setDisabledButton(stock === 0);
  }, [setDisabledButton, slug]);

  useEffect(() => {
    getStock();
  }, [getStock]);

  if (loading)
    return (
      <div className="animate-pulse">
        <div className="h-6 bg-gray-300 rounded w-24"></div>
      </div>
    );

  return (
    <h1 className={`${titleFont.className} antialiased font-bold text-xl`}>
      Stock: {stock}
    </h1>
  );
};
