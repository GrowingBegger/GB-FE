import { instance } from "../axios";

const router = "/comments";

export const createComment = async (postId: number, content: string) => {
    return await instance.post(`${router}/${postId}`, { content });
};

export const deleteComment = async (commentId: number) => {
    return await instance.delete(`${router}/${commentId}`);
};

export const editComment = async (commentId: number, content: string) => {
    return await instance.patch(`${router}/${commentId}`, { content });
};
