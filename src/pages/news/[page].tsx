import React from 'react';
import { useRouter } from "next/router";
import { useGetNewsQuery } from '../../store/modules/newsSlice';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import NewsItem from '../../components/News/NewsItem';
import NewsPagination from '../../components/News/NewsPagination';

const Page = () => {
  const router = useRouter();
  const { page } = router.query;
  const { data, isLoading } = useGetNewsQuery(String(page));

  return (
    <>
    {isLoading ? (
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <CircularProgress />
      </Box>
      ) : data ? (
      <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Container sx={{ px: 0 ,py: 4 }} maxWidth="md">
          <Grid container spacing={4}>
            {data.articles.map((item: any, idx: number) => (
              <NewsItem
              key={idx}
              item={item} />
            ))}
          </Grid>
        </Container>
        <NewsPagination pageCounter={Math.ceil(data.totalResults / 15)} page={Number(page)}/>
      </Container>
      ) : null}
    </>
  );
}

export default Page;