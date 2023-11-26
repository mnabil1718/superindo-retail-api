import { CartItem } from "@/lib/data";
import { useCartStore } from "@/store/zustand";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import React from "react";
import { useStore } from "zustand";

const QuantityInputCart = ({ item }: { item: CartItem }) => {
  const { addQuantity, deleteQuantity } = useStore(
    useCartStore,
    (state) => state
  );
  return (
    <div className="flex h-10 p-2 w-fit space-x-3 items-center rounded-full border border-neutral-200">
      <button
        className="border rounded-full"
        disabled={item.qty <= 0}
        onClick={() => deleteQuantity(item.id, 1)}
      >
        <MinusIcon
          className={clsx("h-5", {
            "opacity-50": item.qty === 0,
          })}
        />
      </button>
      <p className="w-6 text-center">
        <span className="w-full text-sm">{item.qty}</span>
      </p>
      <button
        disabled={item.qty >= item.variant.stock}
        className="border rounded-full"
        onClick={() => addQuantity(item.id, 1)}
      >
        <PlusIcon
          className={clsx("h-5", {
            "opacity-50": item.qty === item.variant.stock,
          })}
        />
      </button>
    </div>
  );
};

export default QuantityInputCart;
