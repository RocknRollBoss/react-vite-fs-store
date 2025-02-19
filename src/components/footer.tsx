import { Facebook, Instagram, Twitter } from "lucide-react";
import { Container } from "./container";
import { FooterNavItem } from "./footer-nav-item";
const navItems = [
  ["Products", "New", "Sell", "Used"],
  ["Work with", "Partners", "Client", "Сustomes"],
  ["Contacts", "+44556677", "Information about", "fs@gmail.com"],
];

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black pt-[40px] pb-[30px]">
      <Container className="max-w-[1220px] my-0 mx-auto  px-10px ">
        <div>
          <nav className=" text-white  flex justify-around mb-[50px] leading-5 sm:grid sm:grid-cols-1 sm:place-items-center ">
            <FooterNavItem items={navItems[0]} />
            <FooterNavItem items={navItems[1]} />
            <FooterNavItem items={navItems[2]} />
          </nav>
          <p className="flex justify-center mb-[30px] font-bold text-[20px]">
            © 2010-2025. All Rights Reserved
          </p>
          <ul className="flex gap-5 justify-center">
            <li>
              <a href="https://instagram.com/">
                <Instagram />
              </a>
            </li>
            <li>
              <a href="https://x.com/">
                <Twitter />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/">
                <Facebook />
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
};
