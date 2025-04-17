import { Shirt } from "lucide-react";
import { Container, MobileMenu } from ".";
import { RoutesEnum } from "../enums";
import { Link } from "react-router-dom";
import { useState } from "react";
import { NavbarItem } from "./navbar-item";
import { RightNavbar } from "./right-navbar";
import { Menu, X } from "lucide-react";
export type MenuItemsType = {
  id: number;
  name: string;
  path: string;
};

const menuItems = [
  { id: 1, name: "Home", path: RoutesEnum.HOME },
  { id: 2, name: "Our Products", path: RoutesEnum.PRODUCTS },
  { id: 3, name: "Best Seller", path: RoutesEnum.BEST },
];

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black sticky top-0 z-50 w-full">
      <Container className="max-w-[1220px] mx-auto px-4">
        <div className="flex items-center justify-between py-6 relative">
          <Link to={RoutesEnum.HOME} className="flex items-center shrink-0">
            <Shirt size={40} fill="white" />
            <p className="pl-2 text-3xl font-mono text-white">
              <span className="text-blue-400">F</span>&S
            </p>
          </Link>

          <ul className="flex gap-6 md:hidden">
            {menuItems.map((item) => (
              <NavbarItem key={item.id} item={item} />
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              {isMenuOpen ? (
                <X
                  className="w-6 h-6 text-white"
                  onClick={() => setIsMenuOpen(false)}
                />
              ) : (
                <Menu
                  className="w-6 h-6 text-white"
                  onClick={() => setIsMenuOpen(true)}
                />
              )}
            </div>

            <RightNavbar />
          </div>
        </div>

        {isMenuOpen && (
          <MobileMenu items={menuItems} setIsMenuOpen={setIsMenuOpen} />
        )}
      </Container>
    </header>
  );
};
