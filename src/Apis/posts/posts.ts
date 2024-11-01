import { instance } from "../axios";
import { CreatePostRequest } from "./type";

const route = "/posts"

export const createPost = async (data: CreatePostRequest) => {
  return await instance.post(`${route}`, data);
};
