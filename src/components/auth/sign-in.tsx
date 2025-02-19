import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { SignUpValues } from "./sign-up";
import { useUserStore } from "../../store/user";
import { validateValues } from "../../utils/validate-values";
import { useNavigate } from "react-router-dom";
import { RoutesEnum } from "../../enums";

export type SignInValues = Pick<SignUpValues, "email" | "password">;
export const SignIn: React.FC = () => {
  const navigate = useNavigate();
  const setUser = useUserStore((state) => state.setUser);
  const user = useUserStore((state) => state.user);
  const [signInValues, setSignIpValues] = useState<SignInValues>({
    email: "",
    password: "",
  });
  const handleSignInChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setSignIpValues({ ...signInValues, [name]: value });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateValues(signInValues)) return;
    await setUser(signInValues);
  };
  useEffect(() => {
    if (user) {
      navigate(RoutesEnum.HOME);
    }
  }, [user]);

  return (
    <div className="max-w-full h-[100vh] flex justify-center items-center">
      <div className="w-full max-w-xs">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <Input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleSignInChange}
              value={signInValues.email}
              required={true}
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <Input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              placeholder="******************"
              name="password"
              onChange={handleSignInChange}
              value={signInValues.password}
              required={true}
            />
            {validateValues(signInValues) && (
              <p className="text-red-500 text-xs italic border-red-500 ">
                The password length must be at least 5.
              </p>
            )}
          </div>
          <div className="flex items-center justify-center">
            <Button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              SignIn
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
