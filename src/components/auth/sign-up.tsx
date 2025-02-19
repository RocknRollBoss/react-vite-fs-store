import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { registerUser } from "../../services/register-user";
import { validateValues } from "../../utils/validate-values";
export const defaultValues = {
  name: "",
  email: "",
  password: "",
  avatar:
    "https://cdn.pixabay.com/photo/2017/11/10/05/48/user-2935527_1280.png",
};

export interface SignUpValues {
  name: string;
  email: string;
  password: string;
  avatar: string;
}
type Props = {
  setIsLogged: (value: boolean) => void;
};
export const SignUp: React.FC<Props> = ({ setIsLogged }) => {
  const [signUpValues, setSignUpValue] = useState<SignUpValues>(defaultValues);
  const handleSignUpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setSignUpValue({ ...signUpValues, [name]: value });
  };
  const handldeSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateValues(signUpValues)) {
      return;
    }
    const userData = await registerUser(signUpValues);
    if (userData) setSignUpValue(defaultValues);
  };
  return (
    <div className="max-w-full h-[100vh] flex justify-center items-center">
      <div className="w-full max-w-xs">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handldeSubmit}
        >
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Username
            </label>
            <Input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Username"
              name="name"
              onChange={handleSignUpChange}
              value={signUpValues.name}
              required={true}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <Input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleSignUpChange}
              value={signUpValues.email}
              required={true}
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <Input
              className="shadow appearance-none border w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              placeholder="******************"
              name="password"
              onChange={handleSignUpChange}
              value={signUpValues.password}
              required={true}
            />
            {validateValues(signUpValues) && (
              <p className="text-red-500 text-xs italic border-red-500 ">
                The password length must be at least 5.
              </p>
            )}
          </div>
          <div className="flex items-center justify-between">
            <Button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Register
            </Button>
            <p
              className="text-sm hover:text-blue-700 duration-300"
              onClick={() => setIsLogged(true)}
            >
              I already have an account{" "}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
