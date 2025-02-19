import React from "react";
type Props = {
  src: string;
};
export const ProductImage: React.FC<Props> = ({ src }) => {
  return (
    <img className="max-w-[95px] rounded-md" src={src} alt="product-img"></img>
  );
};
