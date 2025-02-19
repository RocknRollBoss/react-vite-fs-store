import { Products } from "../services/types";

export const findMostPupular = (products: Products) => {
  return products.sort(() => Math.random() - 0.5).slice(0, 4);
};
