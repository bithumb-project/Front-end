import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import NewsItem from './NewsItem';
import NewsPagination from './NewsPagination';

interface INewsItem {
  id: number;
  title: string;
  date: string;
  src: string;
}

const NewsList: React.FC = () => {
  const [news, setNews] = useState<INewsItem[]>([
    {
      id: 1,
      title: 'news1',
      date: '2021-09-23',
      src: '',
    },
    {
      id: 2,
      title: 'news2',
      date: '2021-09-23',
      src: '',
    },
    {
      id: 3,
      title: 'news3',
      date: '2021-09-23',
      src: '',
    },
    {
      id: 4,
      title: 'news4',
      date: '2021-09-23',
      src: '',
    },
  ]);

  return (
    <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
      <Container sx={{ py: 8 }} maxWidth="md">
        <Grid container spacing={4}>
          {news.map((item) => (
            <NewsItem
            key={item.id}
            item={item} />
            // <h1>ddd</h1>
          ))}
        </Grid>
      </Container>
      <NewsPagination/>
    </Container>
  );
}
  
export default NewsList;