import { SortOption } from "../hooks/use-filters";
import { Products } from "../services/types";

export const sortProductByPrice = (
  sort: SortOption,
  products: Products
): Products => {
  const newProducts = [...products];
  switch (sort) {
    case "Lowest price":
      return newProducts.sort((a, b) => a.price - b.price);
    case "Highest price":
      return newProducts.sort((a, b) => b.price - a.price);
    default:
      return newProducts;
  }
};
