import { SignUpValues } from "../components/auth/sign-up";
import { axiosInstance } from "./axios-instance";
import { ApiRoutes } from "./constants";

export const registerUser = async (
  values: SignUpValues
): Promise<SignUpValues | undefined> => {
  try {
    return (await axiosInstance.post(ApiRoutes.USERS, values)).data;
  } catch (error) {
    console.log(error);
  }
};
