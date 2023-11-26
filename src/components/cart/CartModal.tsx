"use client";

import React, { useState, Fragment, useEffect } from "react";
import OpenCart from "./OpenCart";
import { Transition, Dialog } from "@headlessui/react";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { useCartStore } from "@/store/zustand";
import { CartItem } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import { formatPrice } from "@/lib/utils";
import QuantityInput from "../product/quantity-input";
import QuantityInputCart from "./QuantityInputCart";
import DeleteCartItem from "./DeleteCartItem";
import { useStore } from "zustand";

const CartModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [total, setTotal] = useState(0);
  const [count, setCount] = useState(0);
  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);
  const { cart } = useStore(useCartStore, (state) => state);

  useEffect(() => {
    const total = cart.reduce((sum, item) => sum + item.total, 0);
    const count = cart.length;
    setTotal(total);
    setCount(count);
  }, [cart]);

  return (
    <>
      <button aria-label="Open cart" onClick={openCart}>
        <OpenCart quantity={count} />
      </button>
      <Transition show={isOpen}>
        <Dialog onClose={closeCart} className="relative z-50">
          <Transition.Child
            as={Fragment}
            enter="transition-all ease-in-out duration-300"
            enterFrom="opacity-0 backdrop-blur-none"
            enterTo="opacity-100 backdrop-blur-[.5px]"
            leave="transition-all ease-in-out duration-200"
            leaveFrom="opacity-100 backdrop-blur-[.5px]"
            leaveTo="opacity-0 backdrop-blur-none"
          >
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition-all ease-in-out duration-300"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transition-all ease-in-out duration-200"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <Dialog.Panel className="fixed bottom-0 right-0 top-0 flex h-full w-full flex-col border-l border-neutral-200 bg-white/80 p-6 text-black backdrop-blur-xl dark:border-neutral-700 dark:bg-black/80 dark:text-white md:w-[390px]">
              <div className="flex items-center justify-between">
                <p className="text-lg font-semibold">Keranjang</p>

                <button aria-label="Close cart" onClick={closeCart}>
                  <div className="relative flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors dark:border-neutral-700 dark:text-white">
                    <XMarkIcon className="h-6 transition-all ease-in-out hover:scale-110 " />
                  </div>
                </button>
              </div>
              <div className="flex h-full flex-col justify-between overflow-hidden p-1">
                {cart.length <= 0 ? (
                  <div className="flex h-full justify-center items-center">
                    <p className="text-gray-500">Belum ada produk</p>
                  </div>
                ) : (
                  <>
                    <ul className="flex-grow overflow-auto py-4">
                      {cart.map((item: CartItem, index: number) => {
                        return (
                          <li
                            key={index}
                            className="flex w-full flex-col border-b border-neutral-300 dark:border-neutral-700"
                          >
                            <div className="relative flex w-full flex-row justify-between px-1 py-4">
                              <div className="absolute z-[60] -mt-2 ml-[55px]">
                                <DeleteCartItem item={item} />
                              </div>
                              <Link
                                href={`/products/${item.product.slug}`}
                                onClick={closeCart}
                                className="z-30 flex flex-row space-x-4"
                              >
                                <div className="relative h-16 w-16 cursor-pointer overflow-hidden rounded-md border border-neutral-300 bg-neutral-300 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:bg-neutral-800">
                                  <Image
                                    className="h-full w-full object-cover"
                                    width={64}
                                    height={64}
                                    alt={item.product.name}
                                    src={item.product.image}
                                  />
                                </div>

                                <div className="flex flex-1 flex-col text-base">
                                  <span className="leading-tight">
                                    {item.product.name}
                                  </span>
                                  <p className="text-sm text-neutral-500 dark:text-neutral-400">
                                    {item.variant.name}
                                  </p>
                                </div>
                              </Link>
                              <div className="flex h-16 flex-col justify-between">
                                <div className="flex justify-end space-y-2 text-right text-sm font-semibold">
                                  IDR {formatPrice(item.total)}
                                </div>
                                <div className="ml-auto flex h-10 flex-row items-center">
                                  <QuantityInputCart item={item} />
                                </div>
                              </div>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                    <div className="py-4 text-sm text-neutral-500 dark:text-neutral-400">
                      <div className="mb-3 flex items-center justify-between border-b border-neutral-200 pb-1 pt-1 dark:border-neutral-700">
                        <p>Total</p>
                        <p className="text-sm font-semibold text-black">
                          IDR {formatPrice(total)}
                        </p>
                      </div>
                    </div>
                    <a
                      href="/"
                      className="block w-full rounded-full bg-blue-600 p-3 text-center text-sm font-medium text-white opacity-90 hover:opacity-100"
                    >
                      Lanjut Checkout
                    </a>
                  </>
                )}
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
};

export default CartModal;
