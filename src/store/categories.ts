import { create } from "zustand";
import { getCategories } from "../services/get-categories";
import { Category } from "../services/types";
interface CategoriesState {
  data: Category[];
  loading: boolean;
  error: boolean;
  fetchCategories: () => Promise<void>;
}

export const useCategoriesStore = create<CategoriesState>((set) => ({
  data: [],
  loading: true,
  error: false,
  fetchCategories: async () => {
    try {
      set({ loading: true });
      const data = await getCategories();
      set({ data });
    } catch (error) {
      console.log(error);
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },
}));
