import React, { useRef } from "react";
import { SquarePlus, SquareMinus, X } from "lucide-react";
import { Button } from "../components/ui/button";
import { Title } from "./ui/title";
import { getImage } from "../utils/getImage";

type Props = {
  id: number;
  title: string;
  img: string[];
  cat: string;
  price: number;
  quantity: number;
  removeCartItem: (id: number) => void;
  incrQuantity: (id: number, defaultPrice: number) => void;
  decrQuantity: (id: number, defaultPrice: number) => void;
};
export const CartItem: React.FC<Props> = ({
  id,
  title,
  img,
  cat,
  price,
  removeCartItem,
  incrQuantity,
  decrQuantity,
  quantity,
}) => {
  const images = getImage(img);
  const defPrice = useRef(price);

  return (
    <div className="flex justify-between items-center gap-4 p-4 bg-white shadow-md rounded-md md:flex-col md:items-start">
      <div className="flex items-center gap-4 md:w-full">
        <img
          className="max-w-[100px] rounded-md object-cover"
          src={images[0]}
          alt="cart-item"
        />
        <div className="flex flex-col gap-1">
          <Title
            className="font-semibold text-xl max-w-[160px] md:text-lg"
            size="md"
            text={title.slice(0, 30)}
          />
          <p className="font-medium text-sm">{cat}</p>
        </div>
      </div>

      <div className="flex gap-4 items-center md:w-full">
        <Button
          className="hover:bg-slate-200 rounded-full p-2"
          type="button"
          onClick={() => decrQuantity(id, defPrice.current)}
        >
          <SquareMinus />
        </Button>
        <span className="font-medium text-lg">{quantity}</span>
        <Button
          className="hover:bg-slate-200 rounded-full p-2"
          type="button"
          onClick={() => incrQuantity(id, defPrice.current)}
        >
          <SquarePlus />
        </Button>
      </div>

      <div className="flex items-center gap-4 md:justify-between md:w-full">
        <p className="text-2xl font-bold md:text-lg">{price} $</p>
        <Button
          className="hover:bg-slate-200 rounded-full p-2"
          type="button"
          onClick={() => removeCartItem(id)}
        >
          <X />
        </Button>
      </div>
    </div>
  );
};
