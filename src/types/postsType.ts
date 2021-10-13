export interface Response {
  userId?: number;
  id?: number;
  title?: string;
  body?: string;
}

export interface PhotoResponse {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

interface TransformedResponse extends Response {
  view?: number;
  recommend?: number;
  blame?: number;
  declare?: boolean;
}

export type PostsResponse = Response[];

export type TransformedPostsResponse = TransformedResponse[];

export type PhotoPostsResponse = PhotoResponse[];
