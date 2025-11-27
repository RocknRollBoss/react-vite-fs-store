import { useEffect } from "react";
import { useCategoriesStore } from "../store/categories";
type Props = {
  setActiveCategory: (id: number) => void;
  activeCategory: number;
};
export const Categories: React.FC<Props> = ({
  setActiveCategory,
  activeCategory,
}) => {
  const categories = useCategoriesStore((state) => state.data);
  const fetchCategories = useCategoriesStore((state) => state.fetchCategories);
  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <ul className="flex gap-[50px] lg:gap-4 md:flex-col">
      <li className="w-full">
        <button
          className={`${
            activeCategory === 0
              ? "text-xl font-bold cursor-pointer text-blue-400 md:text-lg"
              : "text-xl font-bold cursor-pointer md:text-lg "
          }`}
          onClick={() => setActiveCategory(0)}
        >
          All
        </button>
      </li>
      {categories.slice(0, 5).map((cat) => (
        <li key={cat.id}>
          <button
            className={`text-2xl font-bold cursor-pointer ${
              activeCategory === cat.id
                ? "text-xl font-bold cursor-pointer text-blue-400 md:text-lg"
                : "text-xl font-bold cursor-pointer md:text-lg"
            }`}
            onClick={() => setActiveCategory(cat.id)}
          >
            {cat.name}
          </button>
        </li>
      ))}
    </ul>
  );
};
