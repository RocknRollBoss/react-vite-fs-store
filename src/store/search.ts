import { create } from "zustand";

interface SearchState {
  searchValue: string;
  setSearcValue: (value: string) => void;
}

export const useSearchStore = create<SearchState>((set) => ({
  searchValue: "",
  setSearcValue(value) {
    set({ searchValue: value });
  },
}));
