import styled from 'styled-components';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export const Wrapper = styled.div`
`;

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

export const StyledPaper = styled(Paper)`
  &.closed {
    display: none;
  }
`;

export const CurrencyUnit = styled.span`
  margin-left: 4px;
  color: #888;
`;