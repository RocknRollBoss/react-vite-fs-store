import { CircleCheckBig } from "lucide-react";
import { Link } from "react-router-dom";
import { RoutesEnum } from "../enums";

type Props = {
  totalPrice: number;
};
export const Congratulations: React.FC<Props> = ({ totalPrice }) => {
  return (
    <div className="py-[40px] max-w-full  ">
      <div className="flex flex-col  text-center">
        <div>
          <p className="mb-5 text-3xl">
            Your order for the sum{" "}
            <span className="text-3xl font-bold">{totalPrice}$</span> is ready
          </p>
          <Link to={RoutesEnum.HOME}>
            <CircleCheckBig size={40} className="mx-auto hover:text-blue-700" />
          </Link>
        </div>
        <div className="mx-auto">
          <img
            className="w-[600px]"
            src="data:image/jpeg;base64,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"
            alt="congratulations"
          />
        </div>{" "}
        *
      </div>
    </div>
  );
};
