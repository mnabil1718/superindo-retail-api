import { CartItem } from "@/lib/data";
import { useCartStore } from "@/store/zustand";
import { XMarkIcon } from "@heroicons/react/24/outline";
import React from "react";
import { useStore } from "zustand";

const DeleteCartItem = ({ item }: { item: CartItem }) => {
  const { remove } = useStore(useCartStore, (state) => state);
  return (
    <button
      onClick={() => remove(item.id)}
      className="ease flex h-4 w-4 items-center justify-center rounded-full bg-neutral-500 transition-all duration-200"
    >
      <XMarkIcon className="text-white h-3 w-3 transition-all ease-in-out hover:scale-110 " />
    </button>
  );
};

export default DeleteCartItem;
