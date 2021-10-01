import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import Paper from '@mui/material/Paper';
import { StyledPaper, StyledTableHead, StyledTableRow } from './CoinInfoStyles';
import CoinTab from './CoinTab';


const CoinInfo: React.FC = (props) => {
  const [toggleTable, setToggleTable] = useState<boolean>(false);

  const handleToggleClick = () => {
    setToggleTable(!toggleTable);
  };
  
  function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
  ) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];
  
  return (
    <>
      
      <CoinTab toggle={toggleTable} toggleEvent={handleToggleClick}/>
      <StyledPaper className={toggleTable ? 'closed' : ''}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <StyledTableHead>
            <TableRow>
              <TableCell align="right">거래소</TableCell>
              <TableCell align="right">실시간 시세(KRW)&nbsp;</TableCell>
              <TableCell align="right">실시간 시세(USD)&nbsp;</TableCell>
              <TableCell align="right">24시간 변동률&nbsp;</TableCell>
              <TableCell align="right">한국 프리미엄&nbsp;</TableCell>
              <TableCell align="right">거래량&nbsp;</TableCell>
            </TableRow>
          </StyledTableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <TableCell component="th" scope="row">{row.name}</TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </StyledPaper>
    </>
  );
}

export default CoinInfo;