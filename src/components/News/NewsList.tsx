import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import NewsItem from './NewsItem';
import NewsPagination from './NewsPagination';
import { useDispatch, useSelector } from 'react-redux';
import { getNews } from '../../service/newsApi';
import { RootState } from '../../store/modules/index';

export interface INewsItem {
  id: number;
  author: string;
  title: string;
  publishedAt: string;
  url: string;
  urlToImage: string;
}

const NewsList: React.FC = () => {
  const dispatch = useDispatch();
  const news = useSelector((state: RootState) => state.news.articles);
  const today = new Date().toString();
  

  useEffect(()=> {
    dispatch(
      getNews({
        today,
        page: 1,
      })
    );
    console.log(today);
  },[]);

  return (
    <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
      <Container sx={{ py: 8 }} maxWidth="md">
        <Grid container spacing={4}>
          {news.map((item, idx) => (
            <NewsItem
            key={idx}
            item={item} />
          ))}
        </Grid>
      </Container>
      <NewsPagination/>
    </Container>
  );
}
  
export default NewsList;