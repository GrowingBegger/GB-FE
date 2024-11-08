import { instance } from "../axios";
import { CreatePostRequest, GetPostListResponse } from "./type";

const router = "/posts";

export const createPost = async (data: CreatePostRequest) => {
  return await instance.post(`${router}`, data);
};

export const getPostList = async () => {
  return await instance.get<GetPostListResponse>(`${router}`);
};
