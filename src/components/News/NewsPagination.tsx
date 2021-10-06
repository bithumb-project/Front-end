import React from 'react';
import Pagination from '@mui/material/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/modules';
import { getNews } from '../../service/newsApi';

const NewsPagination: React.FC = (props) => {
  const dispatch = useDispatch();
  const pageCount = useSelector((state: RootState) => state.news.pageCount);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    dispatch(
      getNews({ page: value })
    );
  };
  return (
    <Pagination count={pageCount} onChange={handleChange} />
  );
}

export default NewsPagination;