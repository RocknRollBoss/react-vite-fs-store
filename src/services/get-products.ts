import { QueryParams } from "../store/types";
import { axiosInstance } from "./axios-instance";
import { ApiRoutes } from "./constants";
import { Products } from "./types";

export const getProducts = async (query: QueryParams): Promise<Products> => {
  return (
    await axiosInstance.get<Products>(ApiRoutes.PRODUCTS, {
      params: {
        ...query,
      },
    })
  ).data;
};
