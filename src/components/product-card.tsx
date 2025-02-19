import { Link } from "react-router-dom";
import { RoutesEnum } from "../enums";
import { getImage } from "../utils/getImage";
import { Title } from "./ui/title";
import { X } from "lucide-react";
type Props = {
  id: number;
  title: string;
  images: string[];
  desc?: string;
  price: number;
  discount?: number;
  latest?: boolean;
  mainProduct?: boolean;
  favourites?: boolean;
  onClick?: (id: number) => void;
};

export const ProductCard: React.FC<Props> = ({
  title,
  images,
  price,
  id,
  mainProduct,
  favourites,
  discount,
  onClick,
  latest,
}) => {
  const image = !getImage(images) ? images : getImage(images);

  return (
    <div
      className={'text-center relative hover:scale-105 duration-300 relative"'}
    >
      {discount && (
        <span className="absolute left-0 top-0 inline-block bg-red-500 w-12 h-[25px] text-white ">
          -{discount}%
        </span>
      )}
      {latest && (
        <span className="absolute left-0 top-0 inline-block bg-red-500 w-12 h-[25px] text-white ">
          New{discount}
        </span>
      )}
      {favourites && (
        <X
          size={30}
          className="absolute right-0 top-0 z-10 hover:scale-110 duration-300"
          onClick={() => onClick && onClick(id)}
        />
      )}
      <img
        className="border-blue-400 border-1 w-full"
        src={image[0]}
        alt="card"
      />
      <div className="px-[5px] border-blue-400 border-1 border-t-0">
        <Title
          size="sm"
          className="font-bold text-2xl mb-5 pt-5 font-mono"
          text={title.slice(0, 15)}
        />
        <p className="mb-5 font-bold text-2xl">$ {price}</p>
      </div>
      {mainProduct && (
        <Link
          className="block text-blue-400 border-blue-400 border-1 border-t-0 hover:text-blue-700"
          to={`/${RoutesEnum.PRODUCTS}/${id}`}
        >
          see deatails
        </Link>
      )}
    </div>
  );
};
