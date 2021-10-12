import React from 'react';
import { Grid, Box, Card, CardMedia, Typography, Skeleton } from '@mui/material';
import { NewsItemProps } from '../../types/newsTypes';

const NewsItem: React.FC<NewsItemProps> = ({item}) => {
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
            <Typography gutterBottom variant="h6">
              {title}
            </Typography>
            <Typography display="block" variant="subtitle2" color="text.secondary">
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