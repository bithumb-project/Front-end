import React, { useEffect } from 'react';
import { useRouter } from "next/router";
import Pagination from '@mui/material/Pagination';

interface Props {
  pageCounter: number;
  page: number;
}

const NewsPagination: React.FC<Props> = ({pageCounter, page}) => {
  const router = useRouter();
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    router.push(`/news/${value}`);
  };

  return (
    <Pagination count={pageCounter} page={page} onChange={handleChange} />
  );
}

export default NewsPagination;