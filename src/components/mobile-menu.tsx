import React from "react";
import { NavbarItem } from "./navbar-item";
import { MenuItemsType } from "./header";
type Props = {
  items: MenuItemsType[];
  setIsMenuOpen: (value: boolean) => void;
};
export const MobileMenu: React.FC<Props> = ({ items, setIsMenuOpen }) => {
  return (
    <ul className="flex flex-col gap-4 bg-black px-4 pb-4 md:block">
      {items.map((item) => (
        <NavbarItem
          key={item.id}
          item={item}
          setIsClosed={() => setIsMenuOpen(false)}
        />
      ))}
    </ul>
  );
};
