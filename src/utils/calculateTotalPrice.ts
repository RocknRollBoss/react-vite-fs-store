import { CartItem } from "../store/cart";

export const calculateTotalPrice = (item: CartItem[]): number => {
  return item.reduce((ac, item) => ac + item.price, 0);
};
