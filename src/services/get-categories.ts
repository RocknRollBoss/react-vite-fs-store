import { axiosInstance } from "./axios-instance";
import { ApiRoutes } from "./constants";
import { Category } from "./types";

export const getCategories = async (): Promise<Category[]> => {
  return (await axiosInstance.get<Category[]>(ApiRoutes.CATEGORIES)).data;
};
