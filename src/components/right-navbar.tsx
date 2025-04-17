import { useState } from "react";
import { Heart, ShoppingCart, User } from "lucide-react";
import { RoutesEnum } from "../enums";
import { Link, useLocation } from "react-router-dom";
import { Search } from "./search";
import { useCartStore } from "../store/cart";
import { useFavouritesStore } from "../store/favourites";
import { useUserStore } from "../store/user";
import { UserProfile } from "./user-profile";

export const RightNavbar: React.FC = () => {
  const [isVisiablePopup, setIsVisiablePopup] = useState(false);
  const user = useUserStore((state) => state.user);
  const logoutUser = useUserStore((state) => state.logoutUser);
  const cartLength = useCartStore((state) => state.cartItems).length;
  const favouritesLength = useFavouritesStore(
    (state) => state.favouritesItems
  ).length;
  const location = useLocation();
  const logout = () => {
    logoutUser();
  };
  return (
    <ul className="flex gap-5 items-center md:z-11">
      {location.pathname === `/${RoutesEnum.PRODUCTS}` && (
        <li>
          <Search />
        </li>
      )}

      {user ? (
        <UserProfile
          name={user.name}
          avatar={user.avatar}
          logout={logout}
          isVisiable={isVisiablePopup}
          setIsVisiable={setIsVisiablePopup}
        />
      ) : (
        <li className="relative">
          <Link to={`${RoutesEnum.AUTH}`}>
            <User />
          </Link>
        </li>
      )}
      <li className="relative">
        <Link to={`${RoutesEnum.FAVOURITES}`}>
          <Heart className={`${favouritesLength > 0 && "text-red-500"}`} />
        </Link>
      </li>
      <li className="relative">
        <Link to={`${RoutesEnum.CART}`}>
          {cartLength > 0 && (
            <span className="absolute bg-red-700 rounded-full flex items-center justify-center right-0 top-[-14px] w-5 h-5 text-yellow-400 text-sm ">
              {cartLength}
            </span>
          )}
          <ShoppingCart />
        </Link>
      </li>
    </ul>
  );
};
