import { NavLink } from "react-router-dom";
type Props = {
  item: { id: number; name: string; path: string };
  setIsClosed: (value: boolean) => void;
};

export const NavbarItem: React.FC<Props> = ({ item, setIsClosed }) => {
  return (
    <li onClick={() => setIsClosed(true)}>
      <NavLink
        to={item.path}
        className={({ isActive }) =>
          isActive
            ? "text-blue-400 uppercase font-bold"
            : "text-white uppercase font-bold md:text-white"
        }
      >
        {item.name}
      </NavLink>
    </li>
  );
};
