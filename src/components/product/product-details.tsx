"use client";
import { CartItem, Product, Variant } from "@/lib/data";
import { formatPrice } from "@/lib/utils";
import clsx from "clsx";
import { useState } from "react";
import VariantSelector from "./variant-selector";
import { PlusIcon } from "@heroicons/react/24/outline";
import QuantityInput from "./quantity-input";
import { useCartStore } from "@/store/zustand";
import { setTimeout } from "timers/promises";
import { useToast } from "../ui/use-toast";

const ProductDetails = ({
  product,
  variants,
}: {
  product: Product;
  variants: Variant[];
}) => {
  const [activeVariant, setActiveVariant] = useState(variants[0]);
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setisLoading] = useState(false);

  const { add } = useCartStore();
  const { toast } = useToast();

  async function addToCart(
    product: Product,
    variant: Variant,
    quantity: number
  ) {
    setisLoading(true);
    let now = new Date();
    let formattedDate = now.toISOString().slice(0, 19).replace("T", " ");

    const cartItem: CartItem = {
      id: product.id,
      product: product,
      variant: variant,
      qty: quantity,
      total: variant.price * quantity,
      created_at: formattedDate,
      updated_at: formattedDate,
    };

    add(cartItem);
    toast({
      title: "Sukses",
      description: "Item berhasil ditambahkan ke keranjang",
    });
    setisLoading(false);
  }

  return (
    <>
      <div className="mb-6 flex flex-col border-b pb-6 dark:border-neutral-700">
        <h1 className="mb-2 text-3xl md:text-4xl lg:text-5xl font-medium">
          {product.name}
        </h1>
        <div className="mr-auto w-auto rounded-full bg-blue-600 py-2 px-3 text-white">
          IDR {formatPrice(activeVariant.price)}
        </div>
      </div>
      <div className="space-y-6 pb-6 border-b">
        {/* VARIANT */}
        <div className="space-y-4">
          <h2 className="text-sm uppercase tracking-wide font-medium">
            variant
          </h2>
          <VariantSelector
            activeVariant={activeVariant}
            setActiveVariant={setActiveVariant}
            variants={variants}
          />
        </div>
        {/* STOCK */}
        <div className="space-y-4">
          <h2 className="text-sm uppercase tracking-wide font-medium">Stok</h2>
          <p>{activeVariant.stock}</p>
        </div>

        {/* SUMMARY */}
        <div className="space-y-4">
          <p>{product.description}</p>
        </div>
      </div>

      <div className="pt-6 space-y-4">
        {/* QUANTITY */}
        <div className="flex items-center justify-between flex-wrap gap-3">
          <h2 className="text-sm uppercase tracking-wide font-medium">
            jumlah
          </h2>
          <QuantityInput
            quantity={quantity}
            setQuantity={setQuantity}
            stock={activeVariant.stock}
          />
        </div>

        <button
          disabled={quantity === 0}
          onClick={() => addToCart(product, activeVariant, quantity)}
          className="relative flex space-x-2 w-full items-center justify-center rounded-full bg-blue-600 p-4 tracking-wide text-white"
        >
          {isLoading ? (
            <span>Menambah...</span>
          ) : (
            <>
              <PlusIcon className="h-5" /> <span>Tambah ke Keranjang</span>
            </>
          )}
        </button>
      </div>
    </>
  );
};

export default ProductDetails;
