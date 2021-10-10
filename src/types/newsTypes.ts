export interface Articles {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: any;
  title: string;
  url: string;
  urlToImage: string;
}

export interface News {
  articles: Articles[];
  status: string;
  totalResults: number;
}