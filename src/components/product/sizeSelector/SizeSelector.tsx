import { ValidSizes } from "@/interfaces";
import clsx from "clsx";

interface Props {
  selectedSize?: ValidSizes;
  avaliableSizes: ValidSizes[];
  onSizeChange: (size: ValidSizes) => void;
}

export const SizeSelector = ({
  selectedSize,
  avaliableSizes,
  onSizeChange,
}: Props) => {
  return (
    <div className="my-5">
      <h3 className="font-bold mb-4">Tallas disponibles</h3>
      <div className="flex flex-wrap gap-2">
        {avaliableSizes.map((size) => (
          <button
            key={size}
            className={clsx("mx-2 hover:underline cursor-pointer text-lg", {
              underline: size === selectedSize,
            })}
            onClick={() => onSizeChange(size)}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};
