import { Shirt } from "lucide-react";
import { Container, Navbar, RightNavbar } from ".";
import { RoutesEnum } from "../enums";
import { Link } from "react-router-dom";

export const Header: React.FC = () => {
  return (
    <header className="bg-black sticky top-0 z-15 left-0 right-0">
      <Container className="max-w-[1220px] my-0 mx-auto  px-10px">
        <div className="pt-[40px] pb-[45px] flex justify-between  items-end ">
          <Link to={RoutesEnum.HOME} className="md:z-10">
            <div className="flex items-center">
              <Shirt size={45} fill="white" />
              <p className="pl-1 text-5xl font-mono">
                <span className="text-blue-400">F</span>&S
              </p>
            </div>
          </Link>

          <Navbar />

          <RightNavbar />
        </div>
      </Container>
    </header>
  );
};
