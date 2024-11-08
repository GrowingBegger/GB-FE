import { instance } from "../axios";
import {
  CreatePostRequest,
  CreatePostResponse,
  GetPostListResponse,
} from "./type";

const router = "/posts";

export const createPost = async (data: CreatePostRequest) => {
  return await instance.post<CreatePostResponse>(`${router}`, data);
};

export const FileUpload = async (postId: number, image: File) => {
  const formData = new FormData();
  formData.append("image", image);
  return await instance.post(`${router}/${postId}/image`, formData);
};

export const getPostList = async () => {
  return await instance.get<GetPostListResponse>(`${router}`);
};
