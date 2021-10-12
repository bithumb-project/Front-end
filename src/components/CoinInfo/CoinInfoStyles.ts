import styled from 'styled-components';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableCell from '@mui/material/TableCell';

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

export const Diff = styled(TableCell)`
  text-align: right;
  color: #fb1e0c;
`;

export const DiffPercent = styled.span`
  color: #fb1e0c;
  margin-left: 8px;
`;

export const KoreaPremium = styled(TableCell)`
  text-align: right;
  color: #2b8f28;
`;

export const KoreaPremiumPercent = styled.span`
  color: #2b8f28;
  margin-left: 8px;
`;