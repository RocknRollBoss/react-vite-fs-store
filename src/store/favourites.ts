import { create } from "zustand";
import { Product, Products } from "../services/types";
import { createJSONStorage, persist } from "zustand/middleware";
interface FavouritesState {
  favouritesItems: Products;
  addToFavourites: (item: Product) => void;
  removeFromFavourites: (id: number) => void;
}
export const useFavouritesStore = create<FavouritesState>()(
  persist(
    (set) => ({
      favouritesItems: [],
      addToFavourites: (item) =>
        set((state) => {
          const findProduct = state.favouritesItems.find(
            (fav) => fav.id === item.id
          );
          if (findProduct && state.favouritesItems.includes(findProduct)) {
            return { favouritesItems: state.favouritesItems };
          }
          return { favouritesItems: [...state.favouritesItems, item] };
        }),
      removeFromFavourites: (id: number) =>
        set((state) => {
          const newFavouritesItems = state.favouritesItems.filter(
            (item) => item.id !== id
          );
          return { favouritesItems: newFavouritesItems };
        }),
    }),
    {
      name: "favourites",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
