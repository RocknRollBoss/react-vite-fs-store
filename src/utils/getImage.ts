const IMAGE =
  "https://trending-shop.netlify.app/static/media/default_image.0b5ed147fec0fc11b0d4.jpg";
export const getImage = (imgs: string[]): string[] => {
  return imgs.map((img) => {
    if (img !== "h" && img.slice(-1) !== "g") {
      return IMAGE;
    }
    return img;
  });
};
