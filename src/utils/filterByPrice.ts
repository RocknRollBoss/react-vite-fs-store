import { Products } from "../services/types";

export const filterByPrice = (products: Products) => {
  return products.filter((products) => products.price <= 100).slice(0, 8);
};
