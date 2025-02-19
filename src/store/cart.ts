import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { Category } from "../services/types";
export interface CartItem {
  id: number;
  title: string;
  price: number;
  description: string;
  category: Category;
  images: string[];
  quantity: number;
}
interface CartState {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  incProductQuantity: (id: number, defaultPrice: number) => void;
  decrProductQuantity: (id: number, defaultPrice: number) => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      cartItems: [],
      addToCart: (item: CartItem) =>
        set((state) => {
          const findProduct = state.cartItems.find(
            (product) => item.id === product.id
          );
          if (findProduct && state.cartItems.includes(findProduct)) {
            return { cartItems: state.cartItems };
          }
          return { cartItems: [...state.cartItems, item] };
        }),
      removeFromCart: (id: number) =>
        set((state) => {
          const newItems = state.cartItems.filter((item) => item.id !== id);
          return { cartItems: newItems };
        }),
      incProductQuantity: (id: number, defaultPrice: number) =>
        set((state) => {
          const newItems = state.cartItems.map((item) => {
            return item.id === id
              ? {
                  ...item,
                  quantity: (item.quantity += 1),
                  price: (item.price += defaultPrice),
                }
              : item;
          });
          return { cartItems: newItems };
        }),
      decrProductQuantity: (id: number, defaultPrice: number) =>
        set((state) => {
          const newItems = state.cartItems.map((item) => {
            if (item.id === id) {
              return {
                ...item,
                quantity: item.quantity === 1 ? 1 : (item.quantity -= 1),
                price:
                  item.price === defaultPrice
                    ? defaultPrice
                    : (item.price -= defaultPrice),
              };
            }
            return item;
          });
          return { cartItems: newItems };
        }),
    }),
    {
      name: "cart",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
