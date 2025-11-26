import { useCallback, useEffect, useState } from "react";
import { useProductsStore } from "../store/products";
import {
  Categories,
  Container,
  Loading,
  NotProductFound,
  SortProducts,
  Title,
} from ".";
import { ProductCard } from "./product-card";
import { sortProductByPrice } from "../utils/sortProductByPrice";
import { useFilters } from "../hooks/use-filters";
import { useSearchStore } from "../store/search";
import { useDebounce } from "@reactuses/core";

import { RangePrice } from "./range-price";
interface PriceRange {
  price_min: number;
  price_max: number;
}

export const ProductsWrapper: React.FC = () => {
  const {
    activeCategory,
    categoryId,
    handleSetCategory,
    sortOption,
    handleSetSort,
  } = useFilters();
  const [priceRange, setPriceRange] = useState<PriceRange>({
    price_min: 0,
    price_max: 0,
  });

  const value = useSearchStore((state) => state.searchValue);
  const debouncedValue = useDebounce(value, 300);
  const products = useProductsStore((state) => state.data);
  const fetchProducts = useProductsStore((state) => state.fetchProducts);
  const loading = useProductsStore((state) => state.loading);
  const handeSetPriceRange = (priceMin: number, priceMax: number) => {
    setPriceRange({ ...priceRange, price_max: priceMax, price_min: priceMin });
  };

  useEffect(() => {
    fetchProducts({
      categoryId,
      title: debouncedValue,
      price_min: priceRange.price_min,
      price_max: priceRange.price_max,
    });
  }, [categoryId, debouncedValue, priceRange]);
  const sortProducts = useCallback(() => {
    return sortProductByPrice(sortOption, products);
  }, [products, sortOption]);
  return (
    <section className="pt-[50px] pb-[30px]">
      <Container className="max-w-[1220px] my-0 mx-auto px-10px">
        <Title
          size="lg"
          text="Choose your style"
          className="text-center mb-[50px] text-[50px]"
        />
        <RangePrice setPriceRange={handeSetPriceRange} />
        <div className="px-[120px]  flex font-bold md:px-3 md:overflow-hidden md:justify-between">
          <Categories
            setActiveCategory={handleSetCategory}
            activeCategory={activeCategory}
          />
          <SortProducts sort={sortOption} setSort={handleSetSort} />
        </div>
        {loading ? (
          <div className="flex justify-center">
            <Loading className="size-12 animate-spin" />
          </div>
        ) : (
          <div className="grid grid-cols-4 md:grid-cols-2 sm:grid-cols-1 g gap-x-[40px] gap-y-[60px]">
            {products.length ? (
              sortProducts().map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  images={product.images}
                  desc={product.description}
                  price={product.price}
                  mainProduct
                />
              ))
            ) : (
              <NotProductFound />
            )}
          </div>
        )}
      </Container>
    </section>
  );
};
