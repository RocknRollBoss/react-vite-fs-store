import { Link } from "react-router-dom";
import { Container, Title } from ".";
import { RoutesEnum } from "../enums";

export const TopInfo: React.FC = () => {
  return (
    <section>
      <Container className="max-w-[1220px] my-0 mx-auto  px-10px ">
        <div className="text-center pt-[250px] absolute z-10 left-0 right-0">
          <Title
            size="xl"
            className="pb-[40px] text-[95px] font-bold text-white md:text-[70px] sm:text-[60px]"
            text="Look Beautiful"
          />
          <Link
            className="bg-black inline-block p-5 max-w-[400px] text-white uppercase font-bold text-[30px] w-full hover:scale-110 duration-400 md:max-w-[350px] md:text-[25px] md:p-4 sm:text-xl sm:max-w-[300px]"
            to={RoutesEnum.PRODUCTS}
          >
            find your style
          </Link>
        </div>
      </Container>
    </section>
  );
};
