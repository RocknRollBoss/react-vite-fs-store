import { useState } from "react";
import { parseAsInteger, useQueryState } from "nuqs";
export type SortOption = "Default" | "Lowest price" | "Highest price";

export const useFilters = () => {
  const [sortOption, setSortOption] = useState<SortOption>("Default");
  const [activeCategory, setActiveCategory] = useQueryState(
    "category",
    parseAsInteger.withDefault(0)
  );
  const categoryId = activeCategory > 0 ? activeCategory : "";
  const handleSetSort = (sortName: string) => {
    setSortOption(sortName as SortOption);
  };
  const handleSetCategory = (categodyId: number) => {
    setActiveCategory(categodyId);
  };

  return {
    sortOption,
    handleSetSort,
    activeCategory,
    handleSetCategory,
    categoryId,
  };
};
