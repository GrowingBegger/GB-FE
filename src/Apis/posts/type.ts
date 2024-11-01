export type CreatePostRequest = {
  title: string;
  content: string;
  price: number;
};

export type GetPostListResponse = {
  postId: number;
  title: string;
  price: number;
  imageUrl: string;
  content: string;
  createdAt: string;
  writerName: string;
  writerImageUrl: string;
};
