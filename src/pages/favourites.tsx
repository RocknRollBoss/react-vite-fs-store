import toast from "react-hot-toast";
import { Container, ProductCard, Title } from "../components";
import { useFavouritesStore } from "../store/favourites";

export const Favourites: React.FC = () => {
  const favouritesItems = useFavouritesStore((state) => state.favouritesItems);
  const removeFromFavourites = useFavouritesStore(
    (state) => state.removeFromFavourites
  );
  const onRemoveItem = (id: number) => {
    removeFromFavourites(id);
    toast.error("Item removed from cart");
  };
  return (
    <Container className="max-w-[1220px] my-0 mx-auto  px-10px">
      <div className="py-10">
        <Title
          size="sm"
          className="text-center text-2xl font-bold mb-10"
          text="Favourites"
        />
        {favouritesItems.length ? (
          <div className="grid grid-cols-4 gap-x-[30px] gap-y-[50px]">
            {favouritesItems.map((item) => (
              <ProductCard
                key={item.id}
                id={item.id}
                images={item.images}
                title={item.title}
                price={item.price}
                onClick={onRemoveItem}
                favourites
              />
            ))}
          </div>
        ) : (
          <p className="text-2xl text-center">
            you have not added any products to your favorites
          </p>
        )}
      </div>
    </Container>
  );
};
