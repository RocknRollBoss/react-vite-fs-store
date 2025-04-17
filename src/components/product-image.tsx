import React from "react";
type Props = {
  src: string;
};
export const ProductImage: React.FC<Props> = ({ src }) => {
  return (
    <img
      className="max-w-[95px] rounded-md w-full"
      src={src}
      alt="product-img"
    ></img>
  );
};
