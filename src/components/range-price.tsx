import React from "react";
import { Input } from "./ui/input";
import { Title } from "./ui/title";
import { Button } from "./ui/button";
import { parseAsInteger, useQueryState } from "nuqs";
type Props = {
  setPriceRange: (fromPrice: number, toPrice: number) => void;
};

export const RangePrice: React.FC<Props> = ({ setPriceRange }) => {
  const [fromPrice, setFromPrice] = useQueryState(
    "from",
    parseAsInteger.withDefault(0)
  );
  const [toPrice, setToPrice] = useQueryState(
    "to",
    parseAsInteger.withDefault(0)
  );
  const onClickPriceRange = () => {
    setPriceRange(fromPrice, toPrice);
  };
  const handleFromPriceChancge = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value) < 0 ? 0 : Number(e.target.value);
    setFromPrice(value);
  };
  const handleToPriceChancge = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value) < 0 ? 0 : Number(e.target.value);
    setToPrice(Number(value));
  };
  return (
    <div className="mb-[50px]">
      <Title size="sm" text="PriceRange:" className="font-bold pb-2" />
      <div className="w-full max-w-[200px] min-w-[200px] pb-1">
        <Input
          className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-1.5 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow md:max-w-[150px]"
          type="number"
          placeholder="From"
          value={fromPrice.toString()}
          onChange={handleFromPriceChancge}
        />
      </div>

      <div className="w-full max-w-[200px] min-w-[200px] pb-1">
        <Input
          className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-1.5 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow md:max-w-[150px]"
          type="number"
          placeholder="To"
          onChange={handleToPriceChancge}
          value={toPrice.toString()}
        />
      </div>

      <div className="max-w-[200px] flex justify-center md:max-w-[150px]">
        <Button
          type="button"
          onClick={onClickPriceRange}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 rounded w-full "
        >
          Apply
        </Button>
      </div>
    </div>
  );
};
