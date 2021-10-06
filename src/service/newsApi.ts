import axios from 'axios';

export const getNews = async (yesterday: string, page: number) => {
  const response = await axios.get('https://newsapi.org/v2/everything', {
    params:{
      q: 'bitcoin',
      from: yesterday,
      sortBy: 'publishedAt',
      language: 'en',
      pageSize: 15,
      page: page,
      apiKey: 'd490e68d09374f989d8f45d6f74c6ca1'
    }
  });
  return response.data;
};