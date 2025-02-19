import React, { useState } from "react";
import { Title } from "../components/ui/title";
import { CartItem, Congratulations, Container, Empty } from "../components";
import { Button } from "../components/ui/button";
import { useCartStore } from "../store/cart";
import { calculateTotalPrice } from "../utils/calculateTotalPrice";
import toast from "react-hot-toast";

export const Cart: React.FC = () => {
  const [isOrderReady, setIsOrderReady] = useState(false);
  const cartItems = useCartStore((state) => state.cartItems);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const incProductQuantity = useCartStore((state) => state.incProductQuantity);
  const decrProductQuantity = useCartStore(
    (state) => state.decrProductQuantity
  );
  const totalPrice = calculateTotalPrice(cartItems);

  const removeCartItem = (id: number) => {
    removeFromCart(id);
    toast.error("Item removed from cart");
  };
  const incrQuantity = (id: number, defaultPrice: number) => {
    incProductQuantity(id, defaultPrice);
  };
  const decrQuantity = (id: number, defaultPrice: number) => {
    decrProductQuantity(id, defaultPrice);
  };

  const onClickOrder = () => {
    setIsOrderReady(true);
    toast.success(" Congratulations, your order is ready");
  };

  return (
    <div className="py-10 relative ">
      <Container className="max-w-[1220px] my-0 mx-auto px-10px">
        {isOrderReady ? (
          <Congratulations totalPrice={totalPrice} />
        ) : (
          <div>
            <div className="px-[120px] py-[40px]">
              {!cartItems.length ? (
                <Empty />
              ) : (
                <div>
                  <Title
                    size="md"
                    className="text-3xl mb-10 font-semibold"
                    text="Your cart"
                  />
                  <div className="flex flex-col gap-4 mb-10">
                    {cartItems.map((item) => (
                      <CartItem
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        img={item.images}
                        cat={item.category.name}
                        quantity={item.quantity}
                        removeCartItem={removeCartItem}
                        incrQuantity={incrQuantity}
                        decrQuantity={decrQuantity}
                      />
                    ))}
                  </div>

                  <div>
                    <div className="flex justify-between items-end">
                      <Title
                        size="lg"
                        text={`Total price:${totalPrice} $`}
                        className="uppercase font-semibold text-xl"
                      />
                      <Button
                        onClick={onClickOrder}
                        className="font-semibold text-lg rounded-[6px] bg-blue-400 text-center py-3 px-[20px]  text-white text-[16px]  hover:text-blue-700 duration-300"
                        type="button"
                      >
                        Proceed to checkout
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};
