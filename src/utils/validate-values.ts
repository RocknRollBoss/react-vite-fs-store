import { SignInValues } from "../components/auth/sign-in";
import { SignUpValues } from "../components/auth/sign-up";

export const validateValues = (values: SignUpValues | SignInValues) => {
  return Object.values(values).every((val) => val);
};
