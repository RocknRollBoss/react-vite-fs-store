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
    <div>
      <div className="ml-[40px] md:ml-1" ref={sortRef}>
        <div
          className="flex gap-2 text-blue-400 font-bold items-center pb-2 mt-1 md:text-sm"
          onClick={() => setTogglePopup(!togglePopup)}
        >
          <ChevronDown className="text-black md:w-[18px]" />
          <Button type="button" className="text-lg md:text-sm">
            {sort}
          </Button>
        </div>
        <ul
          className={
            togglePopup
              ? "shadow-lg shadow-slate-400 mw-[200px] p-4 text-lg flex flex-col gap-y-4 opacity-100 cursor-pointer md:text-sm md:font-normal"
              : "shadow-lg shadow-slate-400 mw-[200px] p-4 text-lg flex flex-col gap-y-4 opacity-0 md:text-sm md:font-normal "
          }
        >
          {sortItems.map((item, idx) => (
            <li
              className={`${sort === item && "text-blue-400"}`}
              key={`${item}__${idx}`}
              onClick={() => setSort(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
