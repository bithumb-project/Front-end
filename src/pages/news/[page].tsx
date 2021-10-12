import React from 'react';
import { useRouter } from "next/router";
import { useGetNewsQuery } from '../../features/news/newsSlice';
import { Grid, Container, Box, CircularProgress} from '@mui/material';
import NewsItem from '../../components/News/NewsItem';
import NewsPagination from '../../components/News/NewsPagination';
import { NewsContainer } from '../../styles/pages/newsStyles';

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
        <NewsContainer sx={{ py: 4 }} maxWidth="md">
          <Grid container spacing={4}>
            {data.articles.map((item: any, idx: number) => (
              <NewsItem
              key={idx}
              item={item} />
            ))}
          </Grid>
        </NewsContainer>
        <NewsPagination pageCounter={Math.ceil(data.totalResults / 15)} page={Number(page)}/>
      </Container>
      ) : null}
    </>
  );
}

export default Page;