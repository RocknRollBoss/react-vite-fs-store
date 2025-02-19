import { SignUp } from "../components/auth/sign-up";
import { SignIn } from "../components/auth/sign-in";
import { useState } from "react";

export const Auth: React.FC = () => {
  const [isLogged, setIsLogged] = useState(false);
  return <>{isLogged ? <SignIn /> : <SignUp setIsLogged={setIsLogged} />}</>;
};
