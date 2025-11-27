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
    toast.error("Item removed from favourites");
  };
  return (
    <Container className="max-w-[1220px] mx-auto px-4">
      <div className="py-10">
        <Title
          size="sm"
          className="text-center text-2xl font-bold mb-10"
          text="Favourites"
        />

        {favouritesItems.length ? (
          <div className="grid grid-cols-4 md:grid-cols-2 sm:grid-cols-1 g gap-x-[40px] gap-y-[80px]">
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
          <div className="text-center text-xl text-gray-400 font-medium">
            You have not added any products to your favourites.
          </div>
        )}
      </div>
    </Container>
  );
};
