import { Input } from "./ui/input";
import { useSearchStore } from "../store/search";
import { useQueryState } from "nuqs";

export const Search: React.FC = () => {
  const [value, setValue] = useQueryState("search", { defaultValue: "" });
  const setSearchValue = useSearchStore((state) => state.setSearcValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (value) setSearchValue(value);
  };
  return (
    <div className="w-full max-w-sm min-w-[200px] relative ">
      <Input
        value={value}
        name="search"
        type="text"
        placeholder="Search for products..."
        onChange={handleChange}
        className="w-full md:max-w-[150px] bg-transparent placeholder:text-white text-white text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
      />
    </div>
  );
};
