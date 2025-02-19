import { SignInValues } from "../components/auth/sign-in";
import { axiosInstance } from "./axios-instance";

export const loginUser = async (values: SignInValues) => {
  try {
    const { access_token } = (await axiosInstance.post("auth/login", values))
      .data;
    if (access_token) {
      const data = await axiosInstance.get("auth/profile", {
        headers: {
          Authorization: `Bearer ${access_token} `,
        },
      });
      return data;
    } else {
      console.log("Dont have token");
    }
  } catch (error) {
    console.log(error);
  }
};
