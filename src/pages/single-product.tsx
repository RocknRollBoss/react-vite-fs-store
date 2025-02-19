import React, { useEffect, useState } from "react";
import { Container, Loading, ProductImage, Title } from "../components";
import { useParams } from "react-router-dom";
import { Product } from "../services/types";
import { getSingleProduct } from "../services/get-single-product";
import { getImage } from "../utils/getImage";
import { Button } from "../components/ui/button";
import { useCartStore } from "../store/cart";
import { useFavouritesStore } from "../store/favourites";
import toast from "react-hot-toast";
export const SingleProduct: React.FC = () => {
  const addTtoCart = useCartStore((state) => state.addToCart);
  const addToFavourites = useFavouritesStore((state) => state.addToFavourites);
  const [product, setProduct] = useState<Product | null>(null);
  const { id } = useParams();
  const fetchProduct = async () => {
    const data = await getSingleProduct(id || "");
    if (data) {
      setProduct(data);
    }
  };
  useEffect(() => {
    fetchProduct();
  }, []);

  if (!product) {
    return (
      <Container className="max-w-[1220px] my-0 mx-auto  px-10px">
        <div className="flex justify-center">
          <Loading className="size-12 animate-spin" />
        </div>
      </Container>
    );
  }
  const images = getImage(product.images);
  const addItem = () => {
    addTtoCart({ ...product, quantity: 1 });
    toast.success("You have successfully added the product to your cart");
  };
  const addItemToFavourites = () => {
    addToFavourites(product);
    toast.success("You have successfully added the product to favourites");
  };
  return (
    <Container className="max-w-[1220px] my-0 mx-auto  px-10px">
      <div className="py-[40px]">
        <div className="flex">
          <img
            className="max-w-[380px] rounded-md"
            src={images[0]}
            alt="main-img"
          />
          <div className="pl-4 flex flex-col gap-1">
            {images.map((img, idx) => (
              <ProductImage src={img} key={idx} />
            ))}
          </div>
          <div className="flex flex-col gap-4 pl-8">
            <Title
              size="sm"
              text={product.title}
              className="text-lg font-medium  max-w-[300px]"
            />
            <p className="text-xl font-bold">{product.price} $</p>
            <p className="max-w-[400px] text-sm leading-[14px] md:text-[8px]">
              {product.description}
            </p>
            <div className="flex gap-3">
              <Button
                onClick={addItem}
                type="button"
                className="rounded-[6px] bg-blue-400 text-center py-3 px-[20px] text-white text-[16px] font-medium hover:text-blue-700 duration-300 md:text-xs md:py-2 md:px-[10px]"
              >
                Add to cart
              </Button>
              <Button
                type="button"
                className="rounded-[6px] bg-blue-400 text-center py-3 px-[20px]  text-white text-[16px] font-medium hover:text-blue-700 duration-300 md:text-xs md:py-1 md:px-[10px]"
                onClick={addItemToFavourites}
              >
                Add to favourites
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
