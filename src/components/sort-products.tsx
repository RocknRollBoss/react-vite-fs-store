import { ChevronDown } from "lucide-react";
import { SortOption } from "../hooks/use-filters";
import { Button } from "./ui/button";
import { useToggleSort } from "../hooks/use-toggle-sort";

type Props = {
  sort: SortOption;
  setSort: (sortName: SortOption) => void;
};

const sortItems: SortOption[] = ["Default", "Lowest price", "Highest price"];

export const SortProducts: React.FC<Props> = ({ sort, setSort }) => {
  const { sortRef, togglePopup, setTogglePopup } = useToggleSort();

  return (
    <div ref={sortRef} className="relative ml-[40px] md:ml-1 z-10">
      <Button
        type="button"
        onClick={() => setTogglePopup(!togglePopup)}
        className="flex items-center gap-2 text-lg md:text-sm font-semibold text-gray-700 hover:bg-gray-100 transition-colors duration-200"
      >
        {sort}
        <ChevronDown
          className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
            togglePopup ? "rotate-180" : "rotate-0"
          }`}
        />
      </Button>

      <ul
        className={`absolute left-0 mt-2 w-[200px] bg-white shadow-lg rounded-lg overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${
          togglePopup ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {sortItems.map((item, idx) => (
          <li
            key={`${item}-${idx}`}
            onClick={() => {
              setSort(item);
              setTogglePopup(false);
            }}
            className={`px-4 py-2 cursor-pointer hover:bg-blue-50 transition-colors duration-150 ${
              sort === item ? "text-blue-500 font-semibold" : "text-gray-700"
            }`}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
