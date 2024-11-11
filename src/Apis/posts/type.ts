export type CreatePostRequest = {
  title: string;
  content: string;
  price: number;
};

export type CreatePostResponse = {
  id: number;
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

export type GetPostDetailResponse = {
  post: {
    id: number;
    title: string;
    content: string;
    image_url: string;
    price: number;
    created_at: string;
    user: {
      nickname: string;
      profile: string;
    };
  };
  likes: [number, number, number];
  comment: {
    content: string;
    created_at: string;
    user: {
      nickname: string;
      profile: string;
    };
  }[];
};
