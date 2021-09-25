import React from 'react';
import Pagination from '@mui/material/Pagination';

const NewsPagination: React.FC = (props) => {
  return (
    <Pagination count={10} />
  );
}

export default NewsPagination;