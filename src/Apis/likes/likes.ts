import { instance } from "../axios";
import { createReactionRequest } from "./type";

const router = "/likes";

export const createReaction = async (postId: number, data: createReactionRequest) => {
    return await instance.post(`${router}/${postId}`, data);
};

export const deleteReaction = async (postId: number) => {
    return await instance.delete(`${router}/${postId}`);
};
