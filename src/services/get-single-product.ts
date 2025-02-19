import { axiosInstance } from "../services/axios-instance";
import { ApiRoutes } from "./constants";
import { Product } from "./types";

export const getSingleProduct = async (
  id: string
): Promise<Product | undefined> => {
  try {
    return (await axiosInstance.get<Product>(`${ApiRoutes.PRODUCTS}/${id}`))
      .data;
  } catch (error) {
    console.log(error);
  }
};
