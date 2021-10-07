import React from 'react';
import { useRouter } from "next/router";
import Pagination from '@mui/material/Pagination';

interface Props {
  page: number;
}

const NewsPagination: React.FC<Props> = ({page}) => {
  const router = useRouter();
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    router.push(`/news/${value}`);
  };
  return (
    <Pagination count={10} page={page} onChange={handleChange} />
  );
}

export default NewsPagination;