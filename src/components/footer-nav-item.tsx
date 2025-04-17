type Props = {
  items: string[];
};

export const FooterNavItem: React.FC<Props> = ({ items }) => {
  return (
    <ul className="text-center md:text-left">
      {items.map((item, idx) => (
        <li
          key={idx}
          className={`${
            idx === 0
              ? "pb-6 text-xl font-semibold pointer-events-none"
              : "pb-2"
          }`}
        >
          <a className="hover:text-blue-400 transition duration-200" href="#">
            {item}
          </a>
        </li>
      ))}
    </ul>
  );
};
