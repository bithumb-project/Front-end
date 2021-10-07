import React from 'react';
import { useRouter } from "next/router";
import { useGetNewsQuery } from '../../store/modules/newsSlice';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import NewsItem from '../../components/News/NewsItem';
import NewsPagination from '../../components/News/NewsPagination';

const Page = () => {
  const router = useRouter();
  const { page } = router.query;
  const { data, isLoading } = useGetNewsQuery(String(page));
  return (
    <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
    {isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <Container sx={{ py: 8 }} maxWidth="md">
            <Grid container spacing={4}>
              {data.articles.map((item: any, idx: number) => (
                <NewsItem
                key={idx}
                item={item} />
              ))}
            </Grid>
          </Container>
          <NewsPagination page={Number(page)}/>
        </>
      ) : null}
  </Container>
  );
}

export default Page;