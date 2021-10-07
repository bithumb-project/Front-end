export interface Response {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export type PostsResponse = Response[];
