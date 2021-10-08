import React, { ReactNode } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';

interface Props {
  item: {
    author: string;
    title: string;
    publishedAt: string;
    url: string;
    urlToImage: string;
  }
}
const NewsItem: React.FC<Props> = ({item}) => {
  const { author, title, publishedAt, url, urlToImage } = item;

  const handleNewsClick = (event: React.MouseEvent<Element, MouseEvent>, url: string) => {
    window.open(url, '_blank');
  };

  return (
    <Grid item xs={12} sm={6} md={4}>
        <Card 
        onClick={(e)=>handleNewsClick(e, url)}
        variant="outlined" 
        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
          {urlToImage ? (
            <CardMedia
              component="img"
              alt={title}
              image={urlToImage}
            />
          ) : (
            <Skeleton 
              variant="rectangular"
              sx={{ pt: '56.25%' }}
            />
          )}
          <Box sx={{ p: 2 }}>
            <Typography gutterBottom variant="body2">
              {title}
            </Typography>
            <Typography display="block" variant="caption" color="text.secondary">
              {author}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {publishedAt}
            </Typography>
          </Box>
        </Card>
    </Grid>
  );
}

export default NewsItem;