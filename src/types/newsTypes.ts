export interface Article {
  author: string;
  content?: string;
  description?: string;
  publishedAt: string;
  source?: any;
  title: string;
  url: string;
  urlToImage: string;
}

export interface News {
  articles: Article[];
  status: string;
  totalResults: number;
}

export interface NewsItemProps {
  item: Article;
}

export interface PaginationProps {
  pageCounter: number;
  page: number;
}