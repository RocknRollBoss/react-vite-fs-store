import { create } from "zustand";
import { getProducts } from "../services/get-products";
import { Products } from "../services/types";
import { QueryParams } from "./types";

interface ProductsState {
  data: Products;
  loading: boolean;
  error: boolean;
  fetchProducts: (query: QueryParams) => Promise<void>;
}
export const useProductsStore = create<ProductsState>((set) => ({
  data: [],
  loading: true,
  error: false,
  async fetchProducts(query: QueryParams) {
    try {
      set({ loading: true, error: false });
      const data = await getProducts(query);
      set({ data, loading: false });
    } catch (error) {
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },
}));
