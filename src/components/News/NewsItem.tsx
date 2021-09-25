import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';

interface INewsItem {
  item: {
    id: number;
    title: string;
    date: string;
    src: string;
  }
}

const NewsItem: React.FC<INewsItem> = ({item}) => {
  const { id, title, date, src } = item;

  return (
    <Grid item xs={12} sm={6} md={4}>
        <Card variant="outlined" sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
          {src ? (
            <CardMedia
              component="img"
              alt={title}
              image={item.src}
              sx={{ pt: '56.25%' }}
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
              {title}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {date}
            </Typography>
          </Box>
        </Card>
    </Grid>
  );
}

export default NewsItem;