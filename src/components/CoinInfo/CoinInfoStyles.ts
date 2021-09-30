import styled from 'styled-components';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

export const StyledTableHead = styled(TableHead)`
  & .MuiTableCell-root {
    font-weight: 600;
  }
`;

export const StyledTableRow = styled(TableRow)`
  &:nth-of-type(odd) {
    background-color: rgba(0, 0, 0, 0.04);
  }
  &:last-child td, &:last-child th {
    border: 0;
  }
`;

