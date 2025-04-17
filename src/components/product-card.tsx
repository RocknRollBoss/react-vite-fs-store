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
    <div className="text-center relative hover:scale-105 transition duration-300">
      {/* Метки */}
      {discount && (
        <span className="absolute left-0 top-0 bg-red-500 text-white px-2 py-1 text-sm font-semibold rounded-br-md">
          -{discount}%
        </span>
      )}
      {latest && !discount && (
        <span className="absolute left-0 top-0 bg-green-500 text-white px-2 py-1 text-sm font-semibold rounded-br-md">
          NEW
        </span>
      )}
      {favourites && (
        <X
          size={24}
          className="absolute right-2 top-2 z-10 cursor-pointer hover:scale-110 transition"
          onClick={() => onClick && onClick(id)}
        />
      )}

      {/* Картинка */}
      <img
        className="border border-blue-400 w-full h-[250px] object-cover rounded-t-md"
        src={image[0]}
        alt={title}
      />

      {/* Контент */}
      <div className="border border-blue-400 border-t-0 px-4 py-5 bg-white">
        <Title
          size="sm"
          className="font-bold text-xl mb-3 font-mono"
          text={title.slice(0, 20)}
        />
        <p className="mb-4 font-bold text-xl text-black">$ {price}</p>

        {mainProduct && (
          <Link
            to={`/${RoutesEnum.PRODUCTS}/${id}`}
            className="inline-block text-blue-500 hover:text-blue-700 transition font-semibold border-t border-blue-400 pt-3"
          >
            See details
          </Link>
        )}
      </div>
    </div>
  );
};
