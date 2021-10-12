import React from 'react';
import { useRouter } from "next/router";
import Pagination from '@mui/material/Pagination';
import { PaginationProps } from '../../types/newsTypes';

const NewsPagination: React.FC<PaginationProps> = ({pageCounter, page}) => {
  const router = useRouter();
  
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    router.push(`/news/${value}`);
  };

  return (
    <Pagination count={pageCounter} page={page} onChange={handleChange} />
  );
}

export default NewsPagination;