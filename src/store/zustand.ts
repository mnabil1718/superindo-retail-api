import { CartItem } from "@/lib/data";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export type CartStore = {
  cart: CartItem[];
  addQuantity: (itemId: number, quantity: number) => void;
  deleteQuantity: (itemId: number, quantity: number) => void;
  add: (item: CartItem) => void;
  remove: (itemId: number) => void;
  removeAll: () => void;
};

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      cart: [],
      addQuantity: (itemId: number) => {
        const { cart } = get();
        const updatedCart = incrementItemQuantity(1, itemId, cart);
        set({ cart: updatedCart });
      },

      deleteQuantity: (itemId: number) => {
        const { cart } = get();
        const updatedCart = decrementItemQuantity(1, itemId, cart);
        set({ cart: updatedCart });
      },

      add: (item: CartItem) => {
        const { cart } = get();
        const updatedCart = addOrUpdate(item, cart);
        set({ cart: updatedCart });
      },
      remove: (itemId: number) => {
        const { cart } = get();
        const updatedCart = remove(itemId, cart);
        set({ cart: updatedCart });
      },
      removeAll: () => set({ cart: [] }),
    }),
    {
      name: "cart-storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    }
  )
);

function addOrUpdate(item: CartItem, cart: CartItem[]): CartItem[] {
  const index = cart.findIndex((cartItem) => cartItem.id === item.id);

  if (index === -1) {
    return [...cart, item];
  } else {
    const existingItem = cart[index];
    const updatedItem = {
      ...item,
      qty:
        existingItem.qty < existingItem.variant.stock
          ? existingItem.qty + item.qty
          : existingItem.qty,
      total: existingItem.total + item.total,
    };

    return [...cart.slice(0, index), updatedItem, ...cart.slice(index + 1)];
  }
}

function incrementItemQuantity(
  quantity: number,
  itemId: number,
  cart: CartItem[]
): CartItem[] {
  const index = cart.findIndex((cartItem) => cartItem.id === itemId);

  if (index !== -1) {
    const existingItem = cart[index];
    const updatedItem = {
      ...existingItem,
      qty: existingItem.qty + quantity,
      total: existingItem.total + existingItem.variant.price * quantity,
    };
    return [...cart.slice(0, index), updatedItem, ...cart.slice(index + 1)];
  } else {
    console.log("Item not found");
    return cart;
  }
}

function decrementItemQuantity(
  quantity: number,
  itemId: number,
  cart: CartItem[]
): CartItem[] {
  const index = cart.findIndex((cartItem) => cartItem.id === itemId);

  if (index !== -1) {
    const existingItem = cart[index];
    const updatedItem = {
      ...existingItem,
      qty: existingItem.qty - quantity,
      total: existingItem.total - existingItem.variant.price * quantity,
    };
    return updatedItem.qty > 0
      ? [...cart.slice(0, index), updatedItem, ...cart.slice(index + 1)]
      : [...cart.slice(0, index), ...cart.slice(index + 1)];
  } else {
    console.log("Item not found");
    return cart;
  }
}

function remove(itemId: number, cart: CartItem[]): CartItem[] {
  const index = cart.findIndex((cartItem) => cartItem.id === itemId);

  if (index !== -1) {
    return [...cart.slice(0, index), ...cart.slice(index + 1)];
  } else {
    console.log("Item Removal Cancelled");
    return cart;
  }
}
