export interface Response {
  postId?: number;
  id?: number;
  name?: string;
  email?: string;
  body?: string;
}

export type CommentResponse = Response[];
