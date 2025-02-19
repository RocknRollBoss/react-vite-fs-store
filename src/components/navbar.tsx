import { NavbarItem } from ".";
import { Menu, X } from "lucide-react";
import { RoutesEnum } from "../enums";
import { useState } from "react";
const menuItems = [
  { id: 1, name: "Home", path: RoutesEnum.HOME },
  { id: 2, name: "Our Products", path: RoutesEnum.PRODUCTS },
  { id: 3, name: "Best Seller", path: RoutesEnum.BEST },
];
export const Navbar: React.FC = () => {
  const [isMenuClosed, setIsMenuClosed] = useState(false);
  return (
    <nav>
      {isMenuClosed ? (
        <Menu
          className="relative z-10 hidden md:block h-[30px] w-[30px] md:z-10"
          onClick={() => setIsMenuClosed(false )}
        />
      ) : (
        <X
          className="relative z-10 hidden md:block h-[30px] w-[30px] md:z-10"
          onClick={() => setIsMenuClosed(true)}
        />
      )}
      <ul
        className={`${
          isMenuClosed
            ? "menu transition delay-150 duration-300"
            : "menu active transition delay-150 duration-300"
        }`}
      >
        {menuItems.map((item) => (
          <NavbarItem key={item.id} item={item} setIsClosed={setIsMenuClosed} />
        ))}
      </ul>
    </nav>
  );
};
