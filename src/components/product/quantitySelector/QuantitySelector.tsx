"use client";

import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";

interface Props {
  quantity: number;
  onQuantityChange: (updateFn: (prev: number) => number) => void;
}


export const QuantitySelector = ({ quantity, onQuantityChange }: Props) => {
  const onValueChange = (value: number) => {
    if (quantity + value < 1) return;
    onQuantityChange((prevCount) => prevCount + value);
  };

  return (
    <>
      <h3 className="font-medium text-sm mb-2">Cantidad</h3>
      <div className="flex items-center">
        <button
          onClick={() => onValueChange(-1)}
          className="w-8 h-8  rounded-md flex items-center justify-center hover:bg-gray-100 transition-colors"
        >
          <IoRemoveCircleOutline size={20} className="text-gray-500" />
        </button>
        <span className="w-20 text-center mx-3 rounded  px-5 bg-gray-200">
          {quantity}
        </span>
        <button
          onClick={() => onValueChange(1)}
          className="w-8 h-8 rounded-md flex items-center justify-center hover:bg-gray-100 transition-colors"
        >
          <IoAddCircleOutline size={20} className="text-gray-500" />
        </button>
      </div>
    </>
  );
};
