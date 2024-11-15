import { instance } from "../axios";
import {
  CreatePostRequest,
  GetPostListResponse,
  CreatePostResponse,
  GetPostDetailResponse,
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

export const PostDetail = async (postId: number) => {
  return await instance.get<GetPostDetailResponse>(`${router}/${postId}`);
};

export const postDelete = async (postId: number) => {
  return await instance.delete(`${router}/${postId}`);
};

export const postUpdate = async (postId: number, data: CreatePostRequest) => {
  return await instance.patch(`${router}/${postId}`, data);
};
