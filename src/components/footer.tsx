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
    <footer className="bg-black pt-12 pb-8 text-white">
      <Container className="max-w-[1220px] mx-auto px-4">
        <div className="grid grid-cols-3 gap-6 md:grid-cols-1 md:gap-10 place-items-center mb-10">
          {navItems.map((item, index) => (
            <FooterNavItem key={index} items={item} />
          ))}
        </div>

        <p className="text-center font-bold text-lg mb-8">
          © 2010-2025. All Rights Reserved
        </p>

        <ul className="flex justify-center gap-6">
          <li>
            <a
              href="https://instagram.com/"
              className="hover:text-blue-400 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram size={24} />
            </a>
          </li>
          <li>
            <a
              href="https://x.com/"
              className="hover:text-blue-400 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter size={24} />
            </a>
          </li>
          <li>
            <a
              href="https://facebook.com/"
              className="hover:text-blue-400 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook size={24} />
            </a>
          </li>
        </ul>
      </Container>
    </footer>
  );
};
