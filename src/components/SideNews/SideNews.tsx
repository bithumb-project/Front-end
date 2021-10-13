import React from 'react';
import {
  List,
  ListSubheader,
  ListItemButton,
  CircularProgress,
  Box,
} from '@mui/material';
import { useGetNewsQuery } from '../../features/news/newsSlice';
import { NewsItemText } from './SideNewsStyles';

const SideNews: React.FC = (props) => {
  const newsData = useGetNewsQuery('1')?.data?.articles.slice(0, 5);

  return (
    <List
      sx={{
        maxWidth: '200px',
        border: '1px solid #929292',
      }}
      subheader={
        <ListSubheader
          sx={{
            borderBottom: '1px solid #dadada',
            fontWeight: 'bold',
            background: '#f9f9f9 ',
          }}
        >
          코인뉴스
        </ListSubheader>
      }
    >
      {newsData &&
        newsData?.map((article, idx) => (
          <ListItemButton
            key={idx}
            onClick={(event: any) => window.open(article.url, '_blank')}
          >
            <NewsItemText primary={article.title} />
          </ListItemButton>
        ))}
    </List>
  );
};

export default SideNews;
