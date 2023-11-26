import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import React from "react";

const QuantityInput = ({
  quantity,
  setQuantity,
  stock,
}: {
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
  stock: number;
}) => {
  return (
    <div className="flex h-10 p-2 w-fit space-x-3 items-center rounded-full border border-neutral-200">
      <button
        className="border rounded-full"
        onClick={() => {
          if (quantity > 0) {
            setQuantity(quantity - 1);
          }
        }}
      >
        <MinusIcon
          className={clsx("h-5", {
            "opacity-50": quantity === 0,
          })}
        />
      </button>
      <p className="w-6 text-center">
        <span className="w-full text-sm">{quantity}</span>
      </p>
      <button
        className="border rounded-full"
        onClick={() => {
          if (quantity < stock) {
            setQuantity(quantity + 1);
          }
        }}
      >
        <PlusIcon
          className={clsx("h-5", {
            "opacity-50": quantity === stock,
          })}
        />
      </button>
    </div>
  );
};

export default QuantityInput;
