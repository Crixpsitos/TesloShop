"use client";

import { useState } from "react";
import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";

interface Props {
  quantity: number;
}

export const QuantitySelector = ({ quantity }: Props) => {
  const [count, setCount] = useState(quantity);
  const onQuantityChange = (value: number) => {
    if (count + value < 1) return;
    setCount((prevCount) => prevCount + value);
  };

  return (
    <div className="my-5">
      <h3 className="font-medium text-sm mb-2">Cantidad</h3>
      <div className="flex items-center">
        <button
          onClick={() => onQuantityChange(-1)}
          className="w-8 h-8  rounded-md flex items-center justify-center hover:bg-gray-100 transition-colors"
        >
          <IoRemoveCircleOutline size={20} className="text-gray-500" />
        </button>
        <span className="w-20 text-center mx-3 rounded  px-5 bg-gray-200">
          {count}
        </span>
        <button
          onClick={() => onQuantityChange(1)}
          className="w-8 h-8 rounded-md flex items-center justify-center hover:bg-gray-100 transition-colors"
        >
          <IoAddCircleOutline size={20} className="text-gray-500" />
        </button>
      </div>
    </div>
  );
};
