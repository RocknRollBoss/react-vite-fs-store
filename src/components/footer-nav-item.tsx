import React from "react";
type Props = {
  items: string[];
};
export const FooterNavItem: React.FC<Props> = ({ items }) => {
  return (
    <ul className="max-w-[250px]">
      {items.map((item, idx) => (
        <li
          key={idx}
          className="pb-10 first:pb-[40px] first:font-bold first:text-[24px] first:pointer-events-none"
        >
          <a className="hover:text-blue-400 duration-200" href="#">
            {item}
          </a>
        </li>
      ))}
    </ul>
  );
};
