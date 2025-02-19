import React, { useCallback } from "react";
import { Container, Loading, ProductCard, Title } from "../components";
import { useProductsStore } from "../store/products";
import { findMostPupular } from "../utils/findMostPuplarProducts";
import { filterByPrice } from "../utils/filterByPrice";

export const BestSeller: React.FC = () => {
  const products = useProductsStore((state) => state.data);
  const loading = useProductsStore((state) => state.loading);
  const popularProducts = useCallback(() => {
    return findMostPupular(products);
  }, []);
  return (
    <section>
      <Container className="max-w-[1220px] my-0 mx-auto px-10px">
        <div className="py-[150px]">
          <div className="mb-[50px]">
            <Title
              size="md"
              text="Most popular products"
              className=" text-[50px] text-center mb-[50px]"
            />
            {loading ? (
              <div className="flex justify-center">
                <Loading className="size-12 animate-spin" />
              </div>
            ) : (
              <div className="grid grid-cols-4 gap-x-[40px] gap-y-[80px] relative md:grid-cols-2">
                {popularProducts().map((product) => (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    images={product.images}
                    desc={product.description}
                    price={product.price}
                    mainProduct
                    latest
                  />
                ))}
              </div>
            )}
          </div>
          <div>
            <Title
              size="md"
              text="Less than 100$"
              className=" text-[50px] text-center mb-[50px]"
            />
            <div className="grid grid-cols-4 gap-x-[40px] gap-y-[80px] relative md:grid-cols-2">
              {filterByPrice(products).map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  images={product.images}
                  desc={product.description}
                  price={product.price}
                  mainProduct
                  discount={15}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
