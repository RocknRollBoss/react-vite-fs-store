import { Link } from "react-router-dom";
import { RoutesEnum } from "../enums";

export const ErrorMessage: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <img
        src="https://cdn.pixabay.com/photo/2016/03/12/14/19/error-404-1252056_640.png"
        alt="error"
      />
      <Link
        to={RoutesEnum.HOME}
        className="text-black text-2xl hover:text-blue-700 duration-200"
      >
        Go Back
      </Link>
    </div>
  );
};
